n.d(t, {
    C: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, l) => {
                      let r = (0, i.camelCase)(l);
                      return 'object' != typeof t[l] || Array.isArray(t[l]) ? (n[r] = t[l]) : (n[r] = e(t[l])), n;
                  }, {});
        },
    X: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, l) => {
                      let r = (0, i.snakeCase)(l);
                      return 'object' != typeof t[l] || Array.isArray(t[l]) ? (n[r] = t[l]) : (n[r] = e(t[l])), (n[r] = t[l]), n;
                  }, {});
        }
}),
    n(724458);
var i = n(392711);
