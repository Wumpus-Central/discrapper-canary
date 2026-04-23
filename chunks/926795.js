"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(830382),
    a = n(696208),
    o = n(534514),
    l = n(834730),
    d = n(349288),
    _ = n(985018),
    u = n(94204);
let c = (e) => {
        let { className: t, isEmailResent: n, resendEmail: r } = e;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsxs)("div", {
                className: u.a,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-xl/bold", children: _.intl.string(_.t.Q03WWV) }),
                    (0, i.jsxs)("p", {
                        children: [
                            (0, i.jsx)(l.E, { variant: "text-md/normal", children: _.intl.string(_.t.BxPxhI) }),
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)(l.E, { variant: "text-md/normal", children: _.intl.string(_.t.Y3fdOp) }),
                            (0, i.jsx)("br", {}),
                            (0, i.jsxs)(l.E, {
                                variant: "text-md/normal",
                                children: [
                                    _.intl.string(_.t.Paa4v4),
                                    "\xa0",
                                    n
                                        ? _.intl.string(_.t.StGVvC)
                                        : (0, i.jsx)(d.Anchor, { onClick: r, children: _.intl.string(_.t.Ex7sk9) }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    E = () => {
        let e = r.useMemo(() => [{ variant: "primary", text: _.intl.string(_.t.g8vPzy), disabled: !0 }], []);
        return (0, i.jsx)(a.H, { actions: e });
    };
var h = n(69494),
    m = n(482132),
    f = n(599961);
function g() {
    let [e, t] = r.useState(!1),
        n = async () => {
            t(!0), await (0, s.lo)();
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.A, {}),
            (0, i.jsx)(m.dZ, { children: (0, i.jsx)(c, { className: f.r, isEmailResent: e, resendEmail: n }) }),
            (0, i.jsx)(m.UX, { children: (0, i.jsx)(E, {}) }),
        ],
    });
}
