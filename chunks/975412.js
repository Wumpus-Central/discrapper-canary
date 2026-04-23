n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(231723),
    r = n(192308),
    a = n(709055),
    s = n(222823),
    o = n(954571),
    c = n(211401),
    d = n(500049),
    u = n(60809),
    g = n(652215);
function h(e) {
    let { context: t, openInPopout: h, analyticsLocation: _ = "open-activity-shelf", initialState: m } = e;
    h && (0, a.A)(g.MLl.CHANNEL_CALL_POPOUT);
    let p = h ? l.KX : l.SY;
    (0, c.k)(d.Se.DISMISSED), (0, c.R)(d.s4.VOICE, void 0, m, "channel" === t.type ? t.channel.id : void 0);
    let f = "contextless" !== t.type && (s.Ay.hasUnread(t.channel.id) || s.Ay.getMentionCount(t.channel.id) > 0);
    return (
        o.default.track(g.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: _,
            source: d.s4.VOICE,
            is_chat_badged: f,
        }),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("93103"),
                    n.e("97278"),
                    n.e("35313"),
                    n.e("41529"),
                    n.e("12313"),
                ]).then(n.bind(n, 126784));
                return (n) => (0, i.jsx)(e, { context: t, ...n });
            },
            { modalKey: u.gS, contextKey: p },
        )
    );
}
