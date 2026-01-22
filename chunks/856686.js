l.d(t, {
    S: () => i,
});
var n = l(353640);

function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
let a = {
        skus: [],
        currentPage: 0,
        totalCount: 0,
        hasMorePages: !1,
        searchError: null,
        isFetchingResults: !1,
    },
    i = (0, n.v)((e) =>
        s(r({}, a), {
            onSetResponse: (t) => {
                let l = Math.floor(t.pageOffset / t.pageLimit) + 1;
                e(
                    s(r({}, t), {
                        currentPage: l,
                    }),
                );
            },
            setSearchError: (t) => {
                e(
                    s(r({}, a), {
                        searchError: t,
                    }),
                );
            },
            setIsFetchingResults: (t) => {
                e({
                    isFetchingResults: t,
                });
            },
            clearError: () => {
                e({
                    searchError: null,
                });
            },
            clear: () => {
                e(r({}, a));
            },
        }),
    );
