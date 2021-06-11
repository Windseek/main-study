export default function invariant(condition, format, a, b, c, d, e, f) {
  // 添加此行
  if (condition) return;

  throw new Error(
    "Internal React error: invariant() is meant to be replaced at compile " +
      "time. There is no runtime version."
  );
}
