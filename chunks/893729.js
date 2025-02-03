n.d(t, { Z: () => E });
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
    f = n(5192),
    C = n(981631),
    p = n(388032),
    v = n(674055);
function E(e) {
    var t;
    let { guildId: n, role: r, theme: E, content: _ = p.intl.string(p.t['6OSasb']), className: I } = e,
        m = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        S = f.ZP.useName(n, null, m),
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
                        author: m
                    }),
                    state: C.yb.SENT,
                    id: '0'
                }),
            [m, _]
        ),
        y = {
            nick: S,
            colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(o.f6W, {
        theme: E,
        children: (e) =>
            (0, i.jsx)('div', {
                className: s()(e, v.container, I),
                children: (0, i.jsx)(h.Z, {
                    hideTimestamp: !0,
                    author: y,
                    roleIcon: T,
                    message: N,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
