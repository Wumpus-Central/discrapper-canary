n.d(t, {
    C: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let a = (0, l.camelCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[a] = t[i]) : (n[a] = e(t[i])), n;
                  }, {});
        },
    X: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let a = (0, l.snakeCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[a] = t[i]) : (n[a] = e(t[i])), (n[a] = t[i]), n;
                  }, {});
        }
}),
    n(724458);
var l = n(392711);
