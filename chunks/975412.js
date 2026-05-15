"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(231723),
    s = n(192308),
    a = n(709055),
    o = n(222823),
    l = n(174459),
    u = n(211401),
    c = n(500049),
    d = n(60809),
    _ = n(652215);
function f(e) {
    let { context: t, openInPopout: f, analyticsLocation: h = "open-activity-shelf", initialState: p } = e;
    f && (0, a.A)(_.MLl.CHANNEL_CALL_POPOUT);
    let E = f ? r.KX : r.SY;
    (0, u.k)(c.Se.DISMISSED), (0, u.R)(c.s4.VOICE, void 0, p, "channel" === t.type ? t.channel.id : void 0);
    let m = "contextless" !== t.type && (o.Ay.hasUnread(t.channel.id) || o.Ay.getMentionCount(t.channel.id) > 0);
    return (
        l.default.track(_.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: h,
            source: c.s4.VOICE,
            is_chat_badged: m,
        }),
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("73953"),
                    n.e("94314"),
                    n.e("74389"),
                    n.e("80203"),
                    n.e("54266"),
                    n.e("685"),
                    n.e("42430"),
                    n.e("79924"),
                    n.e("64548"),
                    n.e("56224"),
                    n.e("34552"),
                    n.e("93103"),
                    n.e("71210"),
                    n.e("88342"),
                    n.e("42451"),
                    n.e("98965"),
                    n.e("71273"),
                    n.e("35313"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("43780"),
                    n.e("54975"),
                    n.e("8362"),
                    n.e("71133"),
                    n.e("49697"),
                    n.e("27773"),
                    n.e("52229"),
                    n.e("61268"),
                    n.e("18024"),
                    n.e("78195"),
                    n.e("37977"),
                    n.e("22261"),
                    n.e("41701"),
                    n.e("74021"),
                    n.e("37065"),
                    n.e("22094"),
                    n.e("83518"),
                    n.e("61764"),
                    n.e("59848"),
                    n.e("68974"),
                    n.e("56385"),
                    n.e("59132"),
                    n.e("89203"),
                    n.e("12313"),
                ]).then(n.bind(n, 126784));
                return (n) => (0, i.jsx)(e, { context: t, ...n });
            },
            { modalKey: d.gS, contextKey: E },
        )
    );
}
