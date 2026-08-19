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
                    a.e("144280"),
                    a.e("665115"),
                    a.e("59766"),
                    a.e("889856"),
                    a.e("622936"),
                    a.e("216947"),
                    a.e("172727"),
                    a.e("460582"),
                    a.e("458098"),
                    a.e("826744"),
                    a.e("507528"),
                    a.e("1433"),
                    a.e("397270"),
                    a.e("993103"),
                    a.e("834552"),
                    a.e("571210"),
                    a.e("132191"),
                    a.e("88342"),
                    a.e("171273"),
                    a.e("311802"),
                    a.e("698965"),
                    a.e("37977"),
                    a.e("371133"),
                    a.e("943780"),
                    a.e("280854"),
                    a.e("335395"),
                    a.e("235313"),
                    a.e("408362"),
                    a.e("76428"),
                    a.e("538887"),
                    a.e("252229"),
                    a.e("918024"),
                    a.e("678195"),
                    a.e("522261"),
                    a.e("341701"),
                    a.e("774021"),
                    a.e("583518"),
                    a.e("437065"),
                    a.e("322094"),
                    a.e("761764"),
                    a.e("915086"),
                    a.e("68974"),
                    a.e("556385"),
                    a.e("291220"),
                    a.e("211584"),
                    a.e("12313"),
                ]).then(a.bind(a, 126784));
                return (a) => (0, l.jsx)(e, { context: t, ...a });
            },
            { modalKey: A.gS, contextKey: v },
        )
    );
}
