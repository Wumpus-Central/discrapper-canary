n.d(t, { A: () => h });
var a = n(477900);
n(582128);
var i = n(231723),
    l = n(192308),
    r = n(709055),
    o = n(573163),
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
                    n.e("324732"),
                    n.e("665115"),
                    n.e("59766"),
                    n.e("207322"),
                    n.e("622936"),
                    n.e("216947"),
                    n.e("172727"),
                    n.e("460582"),
                    n.e("458098"),
                    n.e("826744"),
                    n.e("507528"),
                    n.e("1433"),
                    n.e("76428"),
                    n.e("397270"),
                    n.e("834552"),
                    n.e("993103"),
                    n.e("571210"),
                    n.e("88342"),
                    n.e("132191"),
                    n.e("171273"),
                    n.e("311802"),
                    n.e("437065"),
                    n.e("698965"),
                    n.e("37977"),
                    n.e("943780"),
                    n.e("280854"),
                    n.e("335395"),
                    n.e("235313"),
                    n.e("371133"),
                    n.e("408362"),
                    n.e("538887"),
                    n.e("252229"),
                    n.e("918024"),
                    n.e("678195"),
                    n.e("522261"),
                    n.e("341701"),
                    n.e("774021"),
                    n.e("583518"),
                    n.e("322094"),
                    n.e("761764"),
                    n.e("915086"),
                    n.e("68974"),
                    n.e("556385"),
                    n.e("291220"),
                    n.e("211584"),
                    n.e("12313"),
                ]).then(n.bind(n, 126784));
                return (n) => (0, a.jsx)(e, { context: t, ...n });
            },
            { modalKey: u.gS, contextKey: M },
        )
    );
}
