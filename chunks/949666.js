"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(422998),
    l = n(873263),
    d = n(17928);
let _ = [
    "gg-sans/ggsans-400-normalitalic",
    "gg-sans/ggsans-700-bold",
    "gg-sans/ggsans-700-bolditalic",
    "noto-sans/notosans-400-normalitalic",
    "noto-sans/notosans-700-bold",
    "noto-sans/notosans-700-bolditalic",
];
var u = n(590703),
    c = n(265059),
    E = n(567249),
    h = n(597619),
    m = n(726249),
    f = n(203480),
    g = n(652215);
let p = new Set([g.BVt.LOGIN, g.BVt.REGISTER]),
    A = r.memo(function (e) {
        let { children: t, skipsSettingDefaultPageTitle: s } = e;
        (0, m.cu)({ skipsSettingDefaultPageTitle: s });
        let { clientThemesClassName: A, clientThemesCSS: I } = (0, u.Ay)(),
            T = r.createElement("style", { [u.Vg]: !0 }, I);
        return (0, i.jsxs)(o.mg, {
            children: [
                (function (e) {
                    let { lang: t, style: n, className: s } = (0, h.xb)(),
                        o = (0, l.zy)(),
                        _ = r.useMemo(() => p.has(o.pathname), [o.pathname]);
                    (0, f.A)(window, _);
                    let u = (0, d.bG)([c.A, E.A], () =>
                        E.A.getWindowOpen(g.MLl.DEVTOOLS_POPOUT) ? 0 : c.A.sidebarWidth,
                    );
                    return (0, i.jsx)("html", {
                        lang: t,
                        style: `${n} --devtools-sidebar-width: ${u}px;`,
                        className: a()(s, e, { overlay: __OVERLAY__ }),
                    });
                })(A),
                (function () {
                    let [e, t] = r.useState([]);
                    return (
                        r.useEffect(() => {
                            Promise.all(
                                _.map((e) =>
                                    n(907790)(`./${e}.woff2`).then((e) => {
                                        let { default: t } = e;
                                        return t;
                                    }),
                                ),
                            ).then((e) => t(e));
                        }, []),
                        (0, i.jsx)(i.Fragment, {
                            children: e.map((e, t) =>
                                (0, i.jsx)(
                                    "link",
                                    {
                                        rel: "preload",
                                        href: e,
                                        as: "font",
                                        type: "font/woff2",
                                        crossOrigin: "anonymous",
                                    },
                                    t,
                                ),
                            ),
                        })
                    );
                })(),
                T,
                t,
            ],
        });
    });
