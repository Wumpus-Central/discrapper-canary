n.d(t, {
    D: () => g,
    s: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(554146),
    l = n(990078),
    a = n(397927),
    s = n(496431),
    o = n(826673),
    c = n(915516),
    u = n(907700),
    d = n(164960);
let p = (e) => {
        let { digit: t } = e;
        return (0, r.jsx)("div", {
            className: u.U2,
            children: (0, r.jsx)(a.Text, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: t,
            }),
        });
    },
    f = (e) => {
        let { value: t } = e,
            n = t.toString().padStart(2, "0"),
            [i, l] = [n[0], n[1]];
        return (0, r.jsxs)("div", {
            className: u.Yk,
            children: [
                (0, r.jsx)(p, {
                    digit: i,
                }),
                (0, r.jsx)(p, {
                    digit: l,
                }),
            ],
        });
    },
    h = (e) => {
        let { expiresAt: t, tooltipText: n } = e,
            { days: c, hours: p, minutes: h, seconds: A } = (0, s.A)(Date.parse(t), 1e3),
            g = c > 0 ? [c, p, h] : p > 0 ? [p, h, A] : [h, A],
            m = (0, o.k8)(i.M.NITRO_TAB_BADGE_OFFER_REMINDER);
        return (0, r.jsx)(l.m, {
            text: n,
            position: "right",
            children: (0, r.jsxs)("div", {
                children: [
                    !m &&
                        (0, r.jsx)("img", {
                            src: d,
                            alt: "",
                            className: u.S1,
                        }),
                    (0, r.jsx)(a.BJc, {
                        gap: 0,
                        direction: "horizontal",
                        className: u.Pc,
                        children: g.map((e, t) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(
                                        f,
                                        {
                                            value: e,
                                        },
                                        t,
                                    ),
                                    t !== g.length - 1 &&
                                        (0, r.jsx)("div", {
                                            className: u.Nm,
                                            children: ":",
                                        }),
                                ],
                            }),
                        ),
                    }),
                ],
            }),
        });
    },
    A = (e) => {
        let { trialOffer: t } = e,
            n = (0, c.Fu)(t);
        return (0, r.jsx)(h, {
            expiresAt: t.expires_at,
            tooltipText: n,
        });
    },
    g = (e) => {
        let { discountOffer: t } = e,
            n = (0, c.__)(t);
        return (0, r.jsx)(h, {
            expiresAt: t.expires_at,
            tooltipText: n,
        });
    };
