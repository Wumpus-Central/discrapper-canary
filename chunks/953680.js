"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(821609),
    o = n(123292),
    c = n(129014),
    d = n(642277),
    u = n(854378),
    _ = n(976860),
    h = n(985018),
    m = n(818050);
let p = function (e) {
    let { match: t, location: n, attemptDeepLink: r } = e,
        [p, g] = s.useState(0);
    s.useEffect(() => {
        c.default.once("connected", () => {
            g(1);
        }),
            c.default.once("disconnected", () => {
                (0, _.pX)((0, d.W)());
            }),
            c.default.connect();
    }, []),
        s.useEffect(() => {
            if (0 !== p) return;
            let e = setTimeout(() => (0, _.pX)((0, d.W)()), 3e3);
            return () => clearTimeout(e);
        }, [p]);
    let A = s.useCallback(
        async (e, t) => {
            try {
                g(2), await r(e, t), g(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [r],
    );
    if ((0, _.MX)()) return null;
    switch (p) {
        case 1:
            return (0, i.jsxs)(u.Ay, {
                children: [
                    (0, i.jsx)(u.hE, { className: m.QB, children: h.intl.string(h.t.qllnGm) }),
                    (0, i.jsx)(u.tK, { children: h.intl.string(h.t.SXCxye) }),
                    (0, i.jsx)("div", {
                        className: m.eT,
                        children: (0, i.jsx)(a.$, {
                            text: h.intl.string(h.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => A(t, n),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: l()(m.Ot, m.F1),
                        children: (0, i.jsx)(o.Q, {
                            text: h.intl.string(h.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, _.pX)((0, d.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, i.jsxs)(u.Ay, {
                children: [(0, i.jsx)(u.hE, { children: h.intl.string(h.t["Z+hCVU"]) }), (0, i.jsx)(u.CK, {})],
            });
        case 3:
            return (0, i.jsxs)(u.Ay, {
                children: [
                    (0, i.jsx)(u.hE, { className: m.QB, children: h.intl.string(h.t.csrAMJ) }),
                    (0, i.jsx)(u.tK, { children: h.intl.string(h.t.ghBJz9) }),
                ],
            });
    }
};
