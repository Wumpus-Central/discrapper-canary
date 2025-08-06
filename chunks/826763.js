n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(434404),
    a = n(962086),
    s = n(303737),
    o = n(981631),
    c = n(388032),
    u = n(658447),
    d = n(497224);
function h(e) {
    let { guildId: t } = e;
    return (0, r.jsx)("div", {
        className: u.upsellPage,
        children: (0, r.jsxs)("div", {
            className: u.upsellContainer,
            children: [
                (0, r.jsx)("img", {
                    src: d,
                    alt: "",
                }),
                (0, r.jsxs)("div", {
                    className: u.upsellContent,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: "heading-xl/semibold",
                            children: c.intl.string(c.t["8gJGPj"]),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: u.bodyText,
                            children: c.intl.string(c.t.GpOWIi),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: u.__invalid_button,
                            children: (0, r.jsx)(i.zxk, {
                                variant: "primary",
                                text: c.intl.string(c.t["I/XhUl"]),
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
