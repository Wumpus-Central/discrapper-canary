n.d(t, { H: () => A });
var i = n(477900),
    s = n(582128),
    a = n(43105),
    r = n(468689),
    o = n(975571),
    d = n(41034),
    c = n(391523),
    l = n(652215),
    u = n(804422),
    p = n(105292);
function A(e) {
    let { guildId: t, targetElementRef: n } = e;
    return (
        s.useEffect(() => {
            (0, c.Ws)({ noticeType: "admin_settings", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(a.A, {
                targetElementRef: n,
                badge: "new",
                title: p.intl.string(u.default.BpbdcS),
                body: p.intl.string(u.default.PY2mND),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/8d3ce9025ba058683db6904fe74153a834b5331af2c89da160918f0e416b9a92.svg",
                },
                gradientColor: "purple",
                textLink: {
                    text: p.intl.string(p.t.hvVgAZ),
                    link: o.A.getArticleURL(l.MVz.SERVER_WEB_PAGES_ADMIN),
                    onClick: function () {
                        (0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "learn_more");
                    },
                },
                actions: [
                    {
                        text: p.intl.string(u.default.AMw39B),
                        variant: "primary",
                        onClick: function () {
                            ((0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "open_settings"),
                                (0, d.dM)(t),
                                r.A.open(t, l.BEX.DISCOVERY_LANDING_PAGE));
                        },
                    },
                ],
                onRequestClose: function (e) {
                    "user:explicit" === e
                        ? ((0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "dismiss"), (0, d.dM)(t))
                        : "user:escape" === e &&
                          ((0, c.Yy)({ noticeType: "admin_settings", guildId: t }, "hide"), (0, d.Ug)(t));
                },
                position: "bottom",
            }),
        })
    );
}
