n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    u = n(518738),
    d = n(786761),
    c = n(3148),
    h = n(753206),
    f = n(594174),
    g = n(5192),
    C = n(981631),
    p = n(388032),
    E = n(674055);
function _(e) {
    var t;
    let { guildId: n, role: l, theme: _, content: I = p.intl.string(p.t['6OSasb']), className: S } = e,
        v = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        m = g.ZP.useName(n, null, v),
        T = (0, u.Kz)(l),
        N = r.useMemo(
            () =>
                (0, d.e5)({
                    ...(0, c.ZP)({
                        channelId: '0',
                        content: I,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: v
                    }),
                    state: C.yb.SENT,
                    id: '0'
                }),
            [v, I]
        ),
        A = {
            nick: m,
            colorString: null !== (t = l.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(a.ThemeProvider, {
        theme: _,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, E.container, S),
                children: (0, i.jsx)(h.Z, {
                    hideTimestamp: !0,
                    author: A,
                    roleIcon: T,
                    message: N,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
