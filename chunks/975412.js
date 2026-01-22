n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(709055),
    s = n(222823),
    o = n(954571),
    l = n(211401),
    c = n(500049),
    u = n(60809),
    d = n(652215);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { context: t, openInPopout: f, analyticsLocation: _ = "open-activity-shelf", initialState: h } = e;
    f && (0, a.A)(d.MLl.CHANNEL_CALL_POPOUT);
    let m = f ? i.KX8 : i.SYi;
    (0, l.k)(c.Se.DISMISSED), (0, l.R)(c.s4.VOICE, void 0, h, "channel" === t.type ? t.channel.id : void 0);
    let g = "contextless" !== t.type && (s.Ay.hasUnread(t.channel.id) || s.Ay.getMentionCount(t.channel.id) > 0);
    return (
        o.default.track(d.HAw.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: _,
            source: c.s4.VOICE,
            is_chat_badged: g,
        }),
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("12313").then(n.bind(n, 126784));
                return (n) => (0, r.jsx)(e, p({ context: t }, n));
            },
            {
                modalKey: u.gS,
                contextKey: m,
            },
        )
    );
}
