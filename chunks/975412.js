a.d(t, { A: () => u });
var n = a(627968);
a(64700);
var i = a(231723),
    c = a(192308),
    s = a(709055),
    d = a(568548),
    l = a(174459),
    o = a(211401),
    h = a(500049),
    r = a(60809),
    p = a(652215);
function u(e) {
    let { context: t, openInPopout: u, analyticsLocation: A = "open-activity-shelf", initialState: _ } = e;
    u && (0, s.A)(p.MLl.CHANNEL_CALL_POPOUT);
    let y = u ? i.KX : i.SY;
    (0, o.k)(h.Se.DISMISSED), (0, o.R)(h.s4.VOICE, void 0, _, "channel" === t.type ? t.channel.id : void 0);
    let C = "contextless" !== t.type && (d.Ay.hasUnread(t.channel.id) || d.Ay.getMentionCount(t.channel.id) > 0);
    return (
        l.default.track(p.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: A,
            source: h.s4.VOICE,
            is_chat_badged: C,
        }),
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("58846"),
                    a.e("99796"),
                    a.e("31463"),
                    a.e("41831"),
                    a.e("65264"),
                    a.e("62323"),
                    a.e("88429"),
                    a.e("42430"),
                    a.e("38450"),
                    a.e("94539"),
                    a.e("10720"),
                    a.e("38916"),
                    a.e("56224"),
                    a.e("97270"),
                    a.e("93103"),
                    a.e("34552"),
                    a.e("71210"),
                    a.e("88342"),
                    a.e("32191"),
                    a.e("71273"),
                    a.e("89421"),
                    a.e("37977"),
                    a.e("98965"),
                    a.e("43780"),
                    a.e("80854"),
                    a.e("35395"),
                    a.e("71133"),
                    a.e("28662"),
                    a.e("35313"),
                    a.e("8362"),
                    a.e("76428"),
                    a.e("27773"),
                    a.e("52229"),
                    a.e("61268"),
                    a.e("18024"),
                    a.e("22261"),
                    a.e("78195"),
                    a.e("41701"),
                    a.e("74021"),
                    a.e("83518"),
                    a.e("37065"),
                    a.e("22094"),
                    a.e("61764"),
                    a.e("59848"),
                    a.e("68974"),
                    a.e("56385"),
                    a.e("91220"),
                    a.e("89203"),
                    a.e("12313"),
                ]).then(a.bind(a, 126784));
                return (a) => (0, n.jsx)(e, { context: t, ...a });
            },
            { modalKey: r.gS, contextKey: y },
        )
    );
}
