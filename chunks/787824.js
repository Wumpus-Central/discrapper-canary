n.d(t, {
    C: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let r = (0, l.camelCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[r] = t[i]) : (n[r] = e(t[i])), n;
                  }, {});
        },
    X: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let r = (0, l.snakeCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[r] = t[i]) : (n[r] = e(t[i])), (n[r] = t[i]), n;
                  }, {});
        }
}),
    n(724458);
var l = n(392711);
