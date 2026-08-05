n.d(t, { A: () => h });
var a = n(477900);
n(582128);
var i = n(231723),
    l = n(192308),
    r = n(709055),
    o = n(568548),
    s = n(174459),
    d = n(211401),
    c = n(500049),
    u = n(60809),
    A = n(652215);
function h(e) {
    let { context: t, openInPopout: h, analyticsLocation: f = "open-activity-shelf", initialState: S } = e;
    h && (0, r.A)(A.MLl.CHANNEL_CALL_POPOUT);
    let M = h ? i.KX : i.SY;
    (0, d.k)(c.Se.DISMISSED), (0, d.R)(c.s4.VOICE, void 0, S, "channel" === t.type ? t.channel.id : void 0);
    let p = "contextless" !== t.type && (o.Ay.hasUnread(t.channel.id) || o.Ay.getMentionCount(t.channel.id) > 0);
    return (
        s.default.track(A.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: f,
            source: c.s4.VOICE,
            is_chat_badged: p,
        }),
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("73470"),
                    n.e("47292"),
                    n.e("41295"),
                    n.e("40351"),
                    n.e("72712"),
                    n.e("76279"),
                    n.e("45309"),
                    n.e("43430"),
                    n.e("48570"),
                    n.e("5851"),
                    n.e("2808"),
                    n.e("50348"),
                    n.e("87720"),
                    n.e("97270"),
                    n.e("93103"),
                    n.e("34552"),
                    n.e("71210"),
                    n.e("32191"),
                    n.e("88342"),
                    n.e("71273"),
                    n.e("89421"),
                    n.e("98965"),
                    n.e("93514"),
                    n.e("37977"),
                    n.e("28662"),
                    n.e("43780"),
                    n.e("61268"),
                    n.e("80854"),
                    n.e("35395"),
                    n.e("35313"),
                    n.e("76428"),
                    n.e("8362"),
                    n.e("27773"),
                    n.e("52229"),
                    n.e("18024"),
                    n.e("22261"),
                    n.e("78195"),
                    n.e("41701"),
                    n.e("74021"),
                    n.e("83518"),
                    n.e("37065"),
                    n.e("22094"),
                    n.e("61764"),
                    n.e("15086"),
                    n.e("68974"),
                    n.e("56385"),
                    n.e("91220"),
                    n.e("11584"),
                    n.e("12313"),
                ]).then(n.bind(n, 126784));
                return (n) => (0, a.jsx)(e, { context: t, ...n });
            },
            { modalKey: u.gS, contextKey: M },
        )
    );
}
