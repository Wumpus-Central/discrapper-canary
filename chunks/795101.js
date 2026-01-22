n.d(t, { u: () => c });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(565287),
    a = n(985018),
    o = n(714093);
let c = (e) => {
    let { onNavigate: t } = e,
        n = i.useCallback(() => {
            t(l.rP.DSA);
        }, [t]),
        c = i.useCallback(() => {
            t(l.rP.TIDA);
        }, [t]);
    return (0, r.jsxs)(s.BJc, {
        gap: 8,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                children: a.intl.string(a.t.Z11w18),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: a.intl.string(a.t.bd1h5T),
            }),
            (0, r.jsxs)("div", {
                className: o.k,
                children: [
                    (0, r.jsxs)(s.DUT, {
                        className: o.b,
                        onClick: n,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: a.intl.string(a.t["AszWL/"]),
                            }),
                            (0, r.jsx)(s.uhT, { size: "sm" }),
                        ],
                    }),
                    (0, r.jsxs)(s.DUT, {
                        className: o.b,
                        onClick: c,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                children: a.intl.string(a.t.jMSjZL),
                            }),
                            (0, r.jsx)(s.uhT, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
