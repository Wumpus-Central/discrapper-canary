n.d(t, {
    R: () => i,
    Y: () => s,
});
var l = n(627968);
n(64700);
var r = n(397927);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function i(e) {
    let { guildId: t, userId: i, anaylticsLocations: s, modReportId: o } = e;
    (0, r.mMO)(async () => {
        let { default: e } = await n.e("94390").then(n.bind(n, 524085));
        return (n) =>
            (0, l.jsx)(
                e,
                a(
                    {
                        guildId: t,
                        userId: i,
                        anaylticsLocations: s,
                        modReportId: o,
                    },
                    n,
                ),
            );
    });
}
function s(e) {
    let { guildId: t, userId: i, anaylticsLocations: s } = e;
    (0, r.mMO)(async () => {
        let { default: e } = await n.e("31815").then(n.bind(n, 21754));
        return (n) =>
            (0, l.jsx)(
                e,
                a(
                    {
                        guildId: t,
                        userId: i,
                        anaylticsLocations: s,
                    },
                    n,
                ),
            );
    });
}
