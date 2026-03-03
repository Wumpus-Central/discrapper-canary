"use strict";
n.d(t, { u: () => d });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(565287),
    a = n(985018),
    o = n(714093);
let d = (e) => {
    let { onNavigate: t } = e,
        n = s.useCallback(() => {
            t(l.rP.DSA);
        }, [t]),
        d = s.useCallback(() => {
            t(l.rP.TIDA);
        }, [t]);
    return (0, i.jsxs)(r.BJc, {
        gap: 8,
        children: [
            (0, i.jsx)(r.Heading, { variant: "heading-xl/semibold", children: a.intl.string(a.t.Z11w18) }),
            (0, i.jsx)(r.Text, { variant: "text-md/normal", children: a.intl.string(a.t.bd1h5T) }),
            (0, i.jsxs)("div", {
                className: o.k,
                children: [
                    (0, i.jsxs)(r.DUT, {
                        className: o.b,
                        onClick: n,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-md/medium",
                                        children: a.intl.string(a.t["AszWL/"]),
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: a.intl.string(a.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.uhT, { size: "sm" }),
                        ],
                    }),
                    (0, i.jsxs)(r.DUT, {
                        className: o.b,
                        onClick: d,
                        children: [
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-md/medium",
                                        children: a.intl.string(a.t.jMSjZL),
                                    }),
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: a.intl.string(a.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.uhT, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
