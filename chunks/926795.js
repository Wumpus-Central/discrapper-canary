n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    i = n(830382),
    r = n(696208),
    s = n(534514),
    o = n(834730),
    u = n(349288),
    c = n(985018),
    d = n(94204);
let p = (e) => {
        let { className: t, isEmailResent: n, resendEmail: a } = e;
        return (0, l.jsx)("div", {
            className: t,
            children: (0, l.jsxs)("div", {
                className: d.a,
                children: [
                    (0, l.jsx)(s.D, { variant: "heading-xl/bold", children: c.intl.string(c.t.Q03WWV) }),
                    (0, l.jsxs)("p", {
                        children: [
                            (0, l.jsx)(o.E, { variant: "text-md/normal", children: c.intl.string(c.t.BxPxhI) }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsx)(o.E, { variant: "text-md/normal", children: c.intl.string(c.t.Y3fdOp) }),
                            (0, l.jsx)("br", {}),
                            (0, l.jsxs)(o.E, {
                                variant: "text-md/normal",
                                children: [
                                    c.intl.string(c.t.Paa4v4),
                                    "\xa0",
                                    n
                                        ? c.intl.string(c.t.StGVvC)
                                        : (0, l.jsx)(u.Anchor, { onClick: a, children: c.intl.string(c.t.Ex7sk9) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    m = () => {
        let e = a.useMemo(() => [{ variant: "primary", text: c.intl.string(c.t.g8vPzy), disabled: !0 }], []);
        return (0, l.jsx)(r.H, { actions: e });
    };
var h = n(69494),
    A = n(482132),
    C = n(599961);
function _() {
    let [e, t] = a.useState(!1),
        n = async () => {
            t(!0), await (0, i.lo)();
        };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.A, {}),
            (0, l.jsx)(A.dZ, { children: (0, l.jsx)(p, { className: C.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(A.UX, { children: (0, l.jsx)(m, {}) }),
        ],
    });
}
