n.d(t, { vP: () => u });
var r = n(54381),
    i = n(120786),
    a = n(775451),
    o = n(624138),
    s = n(981631),
    l = n(388032),
    c = n(570810);
let u = {
    title: "Balance Widget",
    stories: [
        {
            name: "Balance Widget Card",
            id: "balance-widget-card",
            component: (e) => {
                let { ctaText: t, linkText: n, linkPreText: a } = e;
                return (0, r.jsx)(i.L, {
                    ctaText: (0, o.Ew)(t) ? l.intl.string(l.t.H57f41) : t,
                    linkText: (0, o.Ew)(n) ? l.intl.string(l.t["7f4H7D"]) : n,
                    linkPreText: (0, o.Ew)(a) ? void 0 : a,
                    ctaOnClick: s.dG4,
                });
            },
            controls: {
                ctaText: {
                    label: "CTA Text",
                    type: "text",
                    defaultValue: "",
                },
                linkText: {
                    label: "Link Text",
                    type: "text",
                    defaultValue: "",
                },
                linkPreText: {
                    label: "Link Pre Text",
                    type: "text",
                    defaultValue: "",
                },
            },
        },
        {
            name: "Balance Widget Menu",
            id: "balance-widget-menu",
            component: (e) => {
                let { ctaText: t, linkText: n, showNotificationBadge: i, cardAlignment: u } = e;
                return (0, r.jsx)("div", {
                    className: c.balanceWidgetMenuContainer,
                    children: (0, r.jsx)(a.V9, {
                        className: c.balanceWidgetMenu,
                        ctaText: (0, o.Ew)(t) ? l.intl.string(l.t["J+vlIR"]) : t,
                        ctaOnClick: s.dG4,
                        showNotificationBadge: i,
                        cardAlignment: u,
                        linkText: (0, o.Ew)(n) ? l.intl.string(l.t.XRdyjz) : n,
                    }),
                });
            },
            controls: {
                ctaText: {
                    label: "CTA Text",
                    type: "text",
                    defaultValue: "",
                },
                showNotificationBadge: {
                    label: "Show Notification Badge",
                    type: "boolean",
                    defaultValue: !1,
                },
                cardAlignment: {
                    label: "Card Alignment",
                    type: "select",
                    options: [
                        {
                            label: "Start",
                            value: a.ek.START,
                        },
                        {
                            label: "End",
                            value: a.ek.END,
                        },
                    ],
                    defaultValue: a.ek.START,
                },
                linkText: {
                    label: "Link Text",
                    type: "text",
                    defaultValue: "",
                },
            },
        },
    ],
};
