e.d(n, {
    C: function () {
        return function t(n) {
            return null == n
                ? n
                : Object.keys(n).reduce((e, r) => {
                      let l = (0, i.camelCase)(r);
                      return 'object' != typeof n[r] || Array.isArray(n[r]) ? (e[l] = n[r]) : (e[l] = t(n[r])), e;
                  }, {});
        };
    },
    X: function () {
        return function t(n) {
            return null == n
                ? n
                : Object.keys(n).reduce((e, r) => {
                      let l = (0, i.snakeCase)(r);
                      return 'object' != typeof n[r] || Array.isArray(n[r]) ? (e[l] = n[r]) : (e[l] = t(n[r])), (e[l] = n[r]), e;
                  }, {});
        };
    }
}),
    e(724458);
var i = e(392711);
