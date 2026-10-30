n.d(t, { H: () => _ });
var i = n(477900),
    s = n(582128),
    a = n(43105),
    l = n(468689),
    r = n(975571),
    c = n(41034),
    o = n(391523),
    u = n(652215),
    d = n(573436),
    A = n(105292);
function _(e) {
    let { guildId: t, targetElementRef: n } = e;
    return (
        s.useEffect(() => {
            (0, o.Ws)({ noticeType: "admin_settings", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(a.A, {
                targetElementRef: n,
                badge: "new",
                title: A.intl.string(d.default.BpbdcS),
                body: A.intl.string(d.default.PY2mND),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/8d3ce9025ba058683db6904fe74153a834b5331af2c89da160918f0e416b9a92.svg",
                },
                gradientColor: "purple",
                textLink: {
                    text: A.intl.string(A.t.hvVgAZ),
                    link: r.A.getArticleURL(u.MVz.SERVER_WEB_PAGES_ADMIN),
                    onClick: function () {
                        (0, o.Yy)({ noticeType: "admin_settings", guildId: t }, "learn_more");
                    },
                },
                actions: [
                    {
                        text: A.intl.string(d.default.AMw39B),
                        variant: "primary",
                        onClick: function () {
                            ((0, o.Yy)({ noticeType: "admin_settings", guildId: t }, "open_settings"),
                                (0, c.dM)(t),
                                l.A.open(t, u.BEX.DISCOVERY_LANDING_PAGE));
                        },
                    },
                ],
                onRequestClose: function (e) {
                    "user:explicit" === e
                        ? ((0, o.Yy)({ noticeType: "admin_settings", guildId: t }, "dismiss"), (0, c.dM)(t))
                        : "user:escape" === e &&
                          ((0, o.Yy)({ noticeType: "admin_settings", guildId: t }, "hide"), (0, c.Ug)(t));
                },
                position: "bottom",
            }),
        })
    );
}
