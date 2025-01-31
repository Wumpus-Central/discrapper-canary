n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(481060),
    d = n(518738),
    u = n(786761),
    c = n(3148),
    h = n(753206),
    g = n(594174),
    C = n(5192),
    f = n(981631),
    p = n(388032),
    E = n(674055);
function v(e) {
    var t;
    let { guildId: n, role: r, theme: v, content: _ = p.intl.string(p.t['6OSasb']), className: I } = e,
        S = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        m = C.ZP.useName(n, null, S),
        T = (0, d.Kz)(r),
        N = l.useMemo(
            () =>
                (0, u.e5)({
                    ...(0, c.ZP)({
                        channelId: '0',
                        content: _,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: S
                    }),
                    state: f.yb.SENT,
                    id: '0'
                }),
            [S, _]
        ),
        O = {
            nick: m,
            colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(o.f6W, {
        theme: v,
        children: (e) =>
            (0, i.jsx)('div', {
                className: s()(e, E.container, I),
                children: (0, i.jsx)(h.Z, {
                    hideTimestamp: !0,
                    author: O,
                    roleIcon: T,
                    message: N,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
