"use strict";
a.d(t, { A: () => h });
var n = a(627968);
a(64700);
var r = a(231723),
    i = a(192308),
    s = a(709055),
    l = a(222823),
    o = a(954571),
    d = a(211401),
    c = a(500049),
    _ = a(60809),
    u = a(652215);
function h(e) {
    let { context: t, openInPopout: h, analyticsLocation: p = "open-activity-shelf", initialState: b } = e;
    h && (0, s.A)(u.MLl.CHANNEL_CALL_POPOUT);
    let g = h ? r.KX : r.SY;
    (0, d.k)(c.Se.DISMISSED), (0, d.R)(c.s4.VOICE, void 0, b, "channel" === t.type ? t.channel.id : void 0);
    let f = "contextless" !== t.type && (l.Ay.hasUnread(t.channel.id) || l.Ay.getMentionCount(t.channel.id) > 0);
    return (
        o.default.track(u.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: p,
            source: c.s4.VOICE,
            is_chat_badged: f,
        }),
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("93103"),
                    a.e("97278"),
                    a.e("35313"),
                    a.e("71561"),
                    a.e("12313"),
                ]).then(a.bind(a, 126784));
                return (a) => (0, n.jsx)(e, { context: t, ...a });
            },
            { modalKey: _.gS, contextKey: g },
        )
    );
}
