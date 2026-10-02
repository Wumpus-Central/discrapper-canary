a.d(t, { A: () => u });
var n = a(477900);
a(582128);
var i = a(231723),
    c = a(192308),
    s = a(709055),
    d = a(573163),
    l = a(174459),
    o = a(211401),
    h = a(500049),
    r = a(60809),
    p = a(652215);
function u(e) {
    let { context: t, openInPopout: u, analyticsLocation: A = "open-activity-shelf", initialState: _ } = e;
    u && (0, s.A)(p.MLl.CHANNEL_CALL_POPOUT);
    let y = u ? i.KX : i.SY;
    ((0, o.k)(h.Se.DISMISSED), (0, o.R)(h.s4.VOICE, void 0, _, "channel" === t.type ? t.channel.id : void 0));
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
                    a.e("324732"),
                    a.e("105537"),
                    a.e("49742"),
                    a.e("403382"),
                    a.e("597981"),
                    a.e("622936"),
                    a.e("216947"),
                    a.e("172727"),
                    a.e("460582"),
                    a.e("458098"),
                    a.e("826744"),
                    a.e("507528"),
                    a.e("1433"),
                    a.e("76428"),
                    a.e("834552"),
                    a.e("993103"),
                    a.e("397270"),
                    a.e("571210"),
                    a.e("88342"),
                    a.e("311802"),
                    a.e("698965"),
                    a.e("132191"),
                    a.e("37977"),
                    a.e("354044"),
                    a.e("437065"),
                    a.e("538887"),
                    a.e("235313"),
                    a.e("636373"),
                    a.e("726033"),
                    a.e("655708"),
                    a.e("371133"),
                    a.e("280854"),
                    a.e("335395"),
                    a.e("408362"),
                    a.e("252229"),
                    a.e("522261"),
                    a.e("678195"),
                    a.e("918024"),
                    a.e("774021"),
                    a.e("341701"),
                    a.e("639163"),
                    a.e("583518"),
                    a.e("499118"),
                    a.e("322094"),
                    a.e("761764"),
                    a.e("915086"),
                    a.e("68974"),
                    a.e("556385"),
                    a.e("291220"),
                    a.e("211584"),
                    a.e("12313"),
                ]).then(a.bind(a, 126784));
                return (a) => (0, n.jsx)(e, { context: t, ...a });
            },
            { modalKey: r.gS, contextKey: y },
        )
    );
}
