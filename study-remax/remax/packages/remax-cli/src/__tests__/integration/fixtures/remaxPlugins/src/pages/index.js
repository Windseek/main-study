import * as React from 'react';
import { View, Text } from 'remax';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    await Promise.resolve(1);
  }

  function handleTouchStart() {}
  const obj = {};
  const value = 0 ?? 1;

  return (
    <View>
      <View onClick={handleClick} onTouchStart={handleTouchStart} id="view" data-foo="bar" {...props}>
        foo
        {obj?.a?.b}
        {value}
      </View>
      {TextElement}
    </View>
  );
};
