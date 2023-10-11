function solution(ineq, eq, n, m) {
    const operator = {
        ">=" : () => (n >= m),
        "<=" : () => (n <= m),
        ">!" : () => (n > m),
        "<!" : () => (n < m),
    };
    return operator[`${ineq}${eq}`]() ? 1: 0;
}