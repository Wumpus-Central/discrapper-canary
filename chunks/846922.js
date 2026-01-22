n.d(t, {
    h: () => c,
    y: () => u,
});
var r = n(353640),
    i = n(121894);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var c = (function (e) {
    return (
        (e[(e.ALL_CHANNELS_ACCESS = 0)] = "ALL_CHANNELS_ACCESS"),
        (e[(e.SOME_CHANNELS_ACCESS = 1)] = "SOME_CHANNELS_ACCESS"),
        e
    );
})({});
let u = (0, r.v)((e) => ({
    listings: {},
    setListing: (t, n) =>
        (0, i.r)(() =>
            e((e) => ({
                listings: l(s({}, e.listings), {
                    [t]: n(e.listings[t]),
                }),
            })),
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, i.r)(() => {
            e((e) => ({
                editStateIdsForGroup: l(s({}, e.editStateIdsForGroup), {
                    [t]: n(e.editStateIdsForGroup[t]),
                }),
            }));
        }),
}));
