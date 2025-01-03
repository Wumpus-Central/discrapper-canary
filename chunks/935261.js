n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(797258),
    c = n(374129),
    d = n(639351),
    u = n(565473),
    h = n(927923),
    m = n(388032),
    p = n(531524);
function g(e) {
    let { platform: t } = e;
    return t === h.YE.XBOX ? (0, i.jsx)(d.Z, { className: p.icon }) : t === h.YE.PLAYSTATION ? (0, i.jsx)(c.Z, { className: p.icon }) : null;
}
function f(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        r = null != n ? (0, u.y)(n.type) : null,
        c = (0, a.e7)([o.Z], () => {
            var e, n;
            return null === (e = o.Z.getSessionById(null !== (n = null == t ? void 0 : t.sessionId) && void 0 !== n ? n : '')) || void 0 === e ? void 0 : e.clientInfo.os;
        }),
        d = null != r ? r : c;
    if (null == d || !h.al.has(d)) return null;
    let f = null != n,
        _ = f ? (d === h.YE.XBOX ? m.intl.string(m.t.UjA4HR) : m.intl.string(m.t.QCw1oa)) : d === h.YE.XBOX ? m.intl.format(m.t['ynEs/f'], {}) : m.intl.format(m.t.TZ17Bg, {});
    return (0, i.jsxs)('div', {
        className: l()(p.root, f ? p.connecting : p.connected),
        children: [
            (0, i.jsx)(g, { platform: d }),
            (0, i.jsx)(s.Text, {
                color: f ? 'header-primary' : 'always-white',
                variant: 'text-xs/medium',
                children: _
            })
        ]
    });
}
