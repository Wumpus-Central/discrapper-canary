a.d(t, { A: () => u });
var l = a(477900);
a(582128);
var n = a(231723),
    i = a(192308),
    s = a(709055),
    r = a(568548),
    o = a(174459),
    d = a(211401),
    c = a(500049),
    A = a(60809),
    h = a(652215);
function u(e) {
    let { context: t, openInPopout: u, analyticsLocation: f = "open-activity-shelf", initialState: p } = e;
    u && (0, s.A)(h.MLl.CHANNEL_CALL_POPOUT);
    let v = u ? n.KX : n.SY;
    (0, d.k)(c.Se.DISMISSED), (0, d.R)(c.s4.VOICE, void 0, p, "channel" === t.type ? t.channel.id : void 0);
    let M = "contextless" !== t.type && (r.Ay.hasUnread(t.channel.id) || r.Ay.getMentionCount(t.channel.id) > 0);
    return (
        o.default.track(h.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: f,
            source: c.s4.VOICE,
            is_chat_badged: M,
        }),
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("73470"),
                    a.e("47292"),
                    a.e("41295"),
                    a.e("40351"),
                    a.e("72712"),
                    a.e("76279"),
                    a.e("45309"),
                    a.e("43430"),
                    a.e("48570"),
                    a.e("5851"),
                    a.e("2808"),
                    a.e("50348"),
                    a.e("87720"),
                    a.e("97270"),
                    a.e("93103"),
                    a.e("34552"),
                    a.e("71210"),
                    a.e("32191"),
                    a.e("88342"),
                    a.e("71273"),
                    a.e("89421"),
                    a.e("98965"),
                    a.e("93514"),
                    a.e("37977"),
                    a.e("28662"),
                    a.e("43780"),
                    a.e("61268"),
                    a.e("80854"),
                    a.e("35395"),
                    a.e("35313"),
                    a.e("76428"),
                    a.e("8362"),
                    a.e("27773"),
                    a.e("52229"),
                    a.e("18024"),
                    a.e("22261"),
                    a.e("78195"),
                    a.e("41701"),
                    a.e("74021"),
                    a.e("83518"),
                    a.e("37065"),
                    a.e("22094"),
                    a.e("61764"),
                    a.e("15086"),
                    a.e("68974"),
                    a.e("56385"),
                    a.e("91220"),
                    a.e("11584"),
                    a.e("12313"),
                ]).then(a.bind(a, 126784));
                return (a) => (0, l.jsx)(e, { context: t, ...a });
            },
            { modalKey: A.gS, contextKey: v },
        )
    );
}
