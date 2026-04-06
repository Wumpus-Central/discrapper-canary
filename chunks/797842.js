"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(251358),
    o = n(133636),
    l = n(471296),
    u = n(208623),
    c = n(178090),
    d = n(346640),
    _ = n(429311),
    f = n(985018),
    p = n(716785),
    h = n(207976),
    m = n(805819),
    E = n(354298);
function g(e) {
    let { setScreen: t } = e,
        n = (0, s.bG)([o.A], () => o.A.getCounter(d.EC.ENEMY_DAMAGE));
    return (
        (0, i.useEffect)(() => {
            (0, a.Ak)(), (0, a.QL)();
        }, []),
        (0, r.jsxs)("div", {
            className: p.MY,
            children: [
                (0, r.jsx)("img", { src: E.A, alt: f.intl.string(_.default.UnXoXM), className: p.wm }),
                (0, r.jsx)(l.A, { children: f.intl.string(_.default["Ay5B/Z"]) }),
                (0, r.jsx)("img", { src: h.A, alt: "", className: p.m9 }),
                (0, r.jsxs)("div", {
                    className: p.Qs,
                    children: [
                        (0, r.jsx)(c.A, {
                            className: p.Ab,
                            variant: "heading-xl/normal",
                            outlined: !0,
                            children: f.intl.format(_.default.ZzFyEO, { damage: n.currentCount }),
                        }),
                        (0, r.jsx)(c.A, {
                            variant: "heading-xxl/normal",
                            outlined: !0,
                            children: f.intl.string(_.default.Vg57vX),
                        }),
                    ],
                }),
                (0, r.jsx)(u.A, { className: p.JM, setScreen: t }),
                (0, r.jsx)("img", { src: m.A, alt: "", className: p.Yv }),
            ],
        })
    );
}
