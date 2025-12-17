n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(434404),
    a = n(962086),
    s = n(303737),
    o = n(981631),
    c = n(388032),
    d = n(517681),
    u = n(497224);
function p(e) {
    let { guildId: t } = e;
    return (0, r.jsx)("div", {
        className: d.upsellPage,
        children: (0, r.jsxs)("div", {
            className: d.upsellContainer,
            children: [
                (0, r.jsx)("img", {
                    src: u,
                    alt: "",
                }),
                (0, r.jsxs)("div", {
                    className: d.upsellContent,
                    children: [
                        (0, r.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: c.intl.string(c.t["8gJGPs"]),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: d.bodyText,
                            children: c.intl.string(c.t.GpOWIi),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: d.__invalid_button,
                            children: (0, r.jsx)(i.Button, {
                                variant: "primary",
                                text: c.intl.string(c.t["I/XhUn"]),
                                onClick: () => {
                                    (0, a.mL)(t),
                                        l.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, void 0, o.KsC.ROLE_SUBSCRIPTION_TIERS),
                                        (0, s.GN)(t);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
