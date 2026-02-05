"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(709055),
    s = n(222823),
    o = n(954571),
    l = n(211401),
    u = n(500049),
    c = n(60809),
    d = n(652215);
function _(e) {
    let { context: t, openInPopout: _, analyticsLocation: f = "open-activity-shelf", initialState: p } = e;
    _ && (0, a.A)(d.MLl.CHANNEL_CALL_POPOUT);
    let h = _ ? i.KX8 : i.SYi;
    (0, l.k)(u.Se.DISMISSED), (0, l.R)(u.s4.VOICE, void 0, p, "channel" === t.type ? t.channel.id : void 0);
    let m = "contextless" !== t.type && (s.Ay.hasUnread(t.channel.id) || s.Ay.getMentionCount(t.channel.id) > 0);
    return (
        o.default.track(d.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: f,
            source: u.s4.VOICE,
            is_chat_badged: m,
        }),
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("12313").then(n.bind(n, 126784));
                return (n) => (0, r.jsx)(e, { context: t, ...n });
            },
            { modalKey: c.gS, contextKey: h },
        )
    );
}
