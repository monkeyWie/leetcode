function main(money, n, items) {
  let max = 0;
  const cache = {};

  function sum(select) {
    let use = 0;
    for (let i = 0; i < select.length; i++) {
      use += items[select[i]][0];
    }
    return use;
  }

  function backtrack(options, select) {
    // 如果价格超标则跳出
    if (select.length > 0) {
      let score = 0;
      for (let i = 0; i < select.length; i++) {
        score += items[select[i]][0] * items[select[i]][1];
      }
      max = Math.max(score, max);
    }
    if (select.length > n) {
      return;
    }

    for (let i = 0; i < options.length; i++) {
      // 已经买过了或者是不能被购买的附件或者再买入就超过总金额数
      if (
        select.includes(i) ||
        (items[i][2] != 0 && !select.includes(items[i][2] - 1)) ||
        sum(select) + items[i][0] > money
      ) {
        continue;
      }
      select.push(i);
      const key = select
        .map(n => n)
        .sort()
        .join("-");
      if (!cache[key]) {
        backtrack(options, select);
        cache[key] = true;
      }
      select.splice(select.length - 1);
    }
  }

  backtrack(
    items.map((_, i) => i),
    []
  );

  return max;
}

console.log(
  main(2000, 10, [
    [500, 1, 0],
    [400, 4, 0],
    [300, 5, 1],
    [400, 5, 1],
    [200, 5, 0],
    [500, 4, 5],
    [400, 4, 0],
    [320, 2, 0],
    [410, 3, 0],
    [400, 3, 5]
  ])
);
