n.d(t, {
    C: () => i,
    X: () => o,
});
var r = n(392711);
function i(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let o = (0, r.camelCase)(n);
              return "object" != typeof e[n] || Array.isArray(e[n]) ? (t[o] = e[n]) : (t[o] = i(e[n])), t;
          }, {});
}
function o(e) {
    return null == e
        ? e
        : Object.keys(e).reduce((t, n) => {
              let i = (0, r.snakeCase)(n);
              return (
                  "object" != typeof e[n] || Array.isArray(e[n]) ? (t[i] = e[n]) : (t[i] = o(e[n])), (t[i] = e[n]), t
              );
          }, {});
}
