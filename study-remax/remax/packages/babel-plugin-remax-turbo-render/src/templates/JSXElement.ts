import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import { kebabCase } from 'lodash';
import * as helpers from '../helpers';
import { createAttributesTemplate } from './attributes';
import stringPath from './stringPath';
import { RenderNode, Options } from '../types';
import { EXPRESSION_BLOCK, SKIP_ELEMENTS } from '../constants';

/**
 *  创建 JSXElement 对应的模板
 *
 * @export
 * @param {RenderNode} node
 * @param {NodePath} path
 * @param {(Array<string | number>)} dataPath
 * @param {Function} createTemplate
 * @returns
 */
export default function JSXElement(
  node: RenderNode<t.JSXElement>,
  path: NodePath,
  dataPath: Array<string | number>,
  createTemplate: (...args: any[]) => void,
  options: Options
) {
  const { node: element, children } = node;
  const attributes = element.openingElement.attributes;
  // JSXMemberExpression 已经被预处理了，这里只有 JSXIdentifier
  let tag = (element.openingElement.name as t.JSXIdentifier).name;

  // case:
  // 非 host 组件
  // 生成为 TPL_DEFAULT 模板，以动态模板方式渲染
  if (
    !helpers.isHostComponentElement(element, path, options) ||
    SKIP_ELEMENTS.includes(tag) ||
    helpers.hasSpreadAttribute(element) ||
    helpers.hasChildrenAttribute(element)
  ) {
    return `<template is="TPL_DEFAULT" data="{{root: ${stringPath(dataPath)}}}" />\n`;
  }

  // 获取真正的组件名称
  tag = kebabCase(helpers.getHostComponentName(element, path) || tag);

  const isExpressionBlock = tag === EXPRESSION_BLOCK;

  // 处理子节点
  let childrenTemplate = '';

  // case:
  // plain text leaf
  // 单节点文本，子节点直接按 plain-text node 处理
  if (helpers.isPlainTextLeaf(element, path, options)) {
    childrenTemplate = `{{ ${stringPath(dataPath)}.children[0].text }}\n`;
  } else {
    // case:
    // 默认情况，遍历子节点
    childrenTemplate = children
      // 剔除空 JSXText 标签
      .filter(child => !helpers.isEmptyText(child.node))
      .map((child, index) =>
        createTemplate(child, path, isExpressionBlock ? dataPath : [...dataPath, 'children', index], options)
      )
      .join('\n');
  }

  // 生成模板
  return `<${tag} ${createAttributesTemplate(tag, stringPath(dataPath), attributes)}>${childrenTemplate}</${tag}>\n`;
}
