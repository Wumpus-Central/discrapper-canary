n.d(e, {
    C: function () {
        return function t(e) {
            return null == e
                ? e
                : Object.keys(e).reduce((n, r) => {
                      let l = (0, i.camelCase)(r);
                      return 'object' != typeof e[r] || Array.isArray(e[r]) ? (n[l] = e[r]) : (n[l] = t(e[r])), n;
                  }, {});
        };
    },
    X: function () {
        return function t(e) {
            return null == e
                ? e
                : Object.keys(e).reduce((n, r) => {
                      let l = (0, i.snakeCase)(r);
                      return 'object' != typeof e[r] || Array.isArray(e[r]) ? (n[l] = e[r]) : (n[l] = t(e[r])), (n[l] = e[r]), n;
                  }, {});
        };
    }
}),
    n(724458);
var i = n(392711);
