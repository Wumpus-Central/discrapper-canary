e.d(n, {
    Z: function () {
        return m;
    }
});
var i = e(200651),
    r = e(192379),
    l = e(120356),
    u = e.n(l),
    o = e(442837),
    a = e(481060),
    s = e(518738),
    c = e(786761),
    d = e(3148),
    f = e(753206),
    _ = e(594174),
    E = e(5192),
    p = e(981631),
    g = e(388032),
    S = e(674055);
function m(t) {
    var n;
    let { guildId: e, role: l, theme: m, content: C = g.intl.string(g.t['6OSasb']), className: I } = t,
        T = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        h = E.ZP.useName(e, null, T),
        v = (0, s.Kz)(l),
        N = r.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: C,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: T
                    }),
                    state: p.yb.SENT,
                    id: '0'
                }),
            [T, C]
        ),
        A = {
            nick: h,
            colorString: null !== (n = l.colorString) && void 0 !== n ? n : void 0
        };
    return (0, i.jsx)(a.ThemeProvider, {
        theme: m,
        children: (t) =>
            (0, i.jsx)('div', {
                className: u()(t, S.container, I),
                children: (0, i.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: A,
                    roleIcon: v,
                    message: N,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
