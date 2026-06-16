"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(830382),
    a = n(696208),
    o = n(534514),
    l = n(834730),
    u = n(349288),
    c = n(375708),
    d = n(94204);
let _ = (e) => {
        let { className: t, isEmailResent: n, resendEmail: r } = e;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsxs)("div", {
                className: d.a,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-xl/bold", children: c.intl.string(c.t.Q03WWV) }),
                    (0, i.jsxs)("p", {
                        children: [
                            (0, i.jsx)(l.E, { variant: "text-md/normal", children: c.intl.string(c.t.BxPxhI) }),
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)(l.E, { variant: "text-md/normal", children: c.intl.string(c.t.Y3fdOp) }),
                            (0, i.jsx)("br", {}),
                            (0, i.jsxs)(l.E, {
                                variant: "text-md/normal",
                                children: [
                                    c.intl.string(c.t.Paa4v4),
                                    "\xa0",
                                    n
                                        ? c.intl.string(c.t.StGVvC)
                                        : (0, i.jsx)(u.Anchor, { onClick: r, children: c.intl.string(c.t.Ex7sk9) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    h = () => {
        let e = r.useMemo(() => [{ variant: "primary", text: c.intl.string(c.t.g8vPzy), disabled: !0 }], []);
        return (0, i.jsx)(a.H, { actions: e });
    };
var f = n(69494),
    p = n(482132),
    E = n(599961);
function m() {
    let [e, t] = r.useState(!1),
        n = async () => {
            t(!0), await (0, s.lo)();
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.A, {}),
            (0, i.jsx)(p.dZ, { children: (0, i.jsx)(_, { className: E.r, isEmailResent: e, resendEmail: n }) }),
            (0, i.jsx)(p.UX, { children: (0, i.jsx)(h, {}) }),
        ],
    });
}
