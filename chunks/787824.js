n.d(t, {
    C: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let l = (0, r.camelCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[l] = t[i]) : (n[l] = e(t[i])), n;
                  }, {});
        },
    X: () =>
        function e(t) {
            return null == t
                ? t
                : Object.keys(t).reduce((n, i) => {
                      let l = (0, r.snakeCase)(i);
                      return 'object' != typeof t[i] || Array.isArray(t[i]) ? (n[l] = t[i]) : (n[l] = e(t[i])), (n[l] = t[i]), n;
                  }, {});
        }
});
var r = n(392711);
