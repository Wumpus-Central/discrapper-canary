n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(606256),
    a = n(985018);
let s = "DOWNLOAD_APPS";

function o() {
    let e = (0, l.red)((e) => (0, l.fDT)(e, s));
    return (0, r.jsx)(i.A, {
        id: "app-download-button",
        onClick: () => {
            (0, l.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    source: "Guilds",
                                },
                                t,
                            ),
                        );
                },
                {
                    modalKey: s,
                },
            );
        },
        selected: e,
        tooltip: a.intl.string(a.t.Z7jwrJ),
        icon: l.s3U,
    });
}
