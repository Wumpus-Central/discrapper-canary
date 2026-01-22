n.d(t, { A: () => p }), n(747238), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    o = n(129014),
    c = n(642277),
    u = n(854378),
    d = n(976860),
    h = n(985018),
    f = n(473169);
let p = function (e) {
    let { match: t, location: n, attemptDeepLink: s } = e,
        [p, g] = i.useState(0);
    i.useEffect(() => {
        o.default.once("connected", () => {
            g(1);
        }),
            o.default.once("disconnected", () => {
                (0, d.pX)((0, c.W)());
            }),
            o.default.connect();
    }, []),
        i.useEffect(() => {
            if (0 !== p) return;
            let e = setTimeout(() => (0, d.pX)((0, c.W)()), 3000);
            return () => clearTimeout(e);
        }, [p]);
    let m = i.useCallback(
        async (e, t) => {
            try {
                g(2), await s(e, t), g(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [s],
    );
    if ((0, d.MX)()) return null;
    switch (p) {
        case 1:
            return (0, r.jsxs)(u.Ay, {
                children: [
                    (0, r.jsx)(u.hE, {
                        className: f.QB,
                        children: h.intl.string(h.t.qllnGm),
                    }),
                    (0, r.jsx)(u.tK, { children: h.intl.string(h.t.SXCxye) }),
                    (0, r.jsx)("div", {
                        className: f.eT,
                        children: (0, r.jsx)(a.Button, {
                            text: h.intl.string(h.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => m(t, n),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: l()(f.Ot, f.F1),
                        children: (0, r.jsx)(a.QWc, {
                            text: h.intl.string(h.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, d.pX)((0, c.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, r.jsxs)(u.Ay, {
                children: [(0, r.jsx)(u.hE, { children: h.intl.string(h.t["Z+hCVU"]) }), (0, r.jsx)(u.CK, {})],
            });
        case 3:
            return (0, r.jsxs)(u.Ay, {
                children: [
                    (0, r.jsx)(u.hE, {
                        className: f.QB,
                        children: h.intl.string(h.t.csrAMJ),
                    }),
                    (0, r.jsx)(u.tK, { children: h.intl.string(h.t.ghBJz9) }),
                ],
            });
    }
};
