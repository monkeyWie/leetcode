### 剑指 Offer 64. [求 1+2+…+n](https://leetcode-cn.com/problems/qiu-12n-lcof/)

求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case 等关键字及条件判断语句（A?B:C）。

示例 1：

输入: n = 3
输出: 6
示例 2：

输入: n = 9
输出: 45

限制：

1 <= n <= 10000

### 解题思路

正式来说使用递归进行加法处理即可：

```
// f(n)=f(n-1)+n
return n==1?1:sumNums(n-1)+n
```

但是因为不能使用判断符号，所以`n==1?:`这个三目运算符得改一改：

```js
n === 1 || (n = sumNums(n - 1) + n);
return n;
```
