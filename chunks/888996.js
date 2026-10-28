n.d(t, { H: () => S });
var i = n(477900),
    l = n(582128);
if (221552 == n.j) var a = n(43105);
var r = n(468689),
    s = n(975571),
    E = n(41034),
    d = n(391523),
    o = n(652215),
    u = n(804422),
    c = n(105292);
let h =
    221552 == n.j
        ? "https://cdn.discordapp.com/assets/content/8d3ce9025ba058683db6904fe74153a834b5331af2c89da160918f0e416b9a92.svg"
        : null;
function S(e) {
    let { guildId: t, targetElementRef: n } = e;
    return (
        l.useEffect(() => {
            (0, d.Ws)({ noticeType: "admin_settings", guildId: t });
        }, [t]),
        (0, i.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            onKeyPress: (e) => e.stopPropagation(),
            onContextMenu: (e) => e.stopPropagation(),
            children: (0, i.jsx)(a.A, {
                targetElementRef: n,
                badge: "new",
                title: c.intl.string(u.default.BpbdcS),
                body: c.intl.string(u.default.PY2mND),
                graphic: { type: "image", src: h },
                gradientColor: "purple",
                textLink: {
                    text: c.intl.string(c.t.hvVgAZ),
                    link: s.A.getArticleURL(o.MVz.SERVER_WEB_PAGES_ADMIN),
                    onClick: function () {
                        (0, d.Yy)({ noticeType: "admin_settings", guildId: t }, "learn_more");
                    },
                },
                actions: [
                    {
                        text: c.intl.string(u.default.AMw39B),
                        variant: "primary",
                        onClick: function () {
                            ((0, d.Yy)({ noticeType: "admin_settings", guildId: t }, "open_settings"),
                                (0, E.dM)(t),
                                r.A.open(t, o.BEX.DISCOVERY_LANDING_PAGE));
                        },
                    },
                ],
                onRequestClose: function (e) {
                    "user:explicit" === e
                        ? ((0, d.Yy)({ noticeType: "admin_settings", guildId: t }, "dismiss"), (0, E.dM)(t))
                        : "user:escape" === e &&
                          ((0, d.Yy)({ noticeType: "admin_settings", guildId: t }, "hide"), (0, E.Ug)(t));
                },
                position: "bottom",
            }),
        })
    );
}
