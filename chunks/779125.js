n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(475179),
    s = n(287734),
    l = n(933557),
    c = n(124072),
    u = n(703656),
    d = n(131704),
    f = n(592125),
    _ = n(430824),
    p = n(699516),
    h = n(594174),
    m = n(934415),
    g = n(900849),
    E = n(981631);
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e || null == t) return;
    let r = _.Z.getGuild(e);
    if ((null == r ? void 0 : r.joinedAt) == null) return void g.Ub(e, {}, { channelId: t });
    let i = f.Z.getChannel(t);
    if (null != i && (0, d.bw)(i.type)) {
        if (n) {
            (a.Z.updateChatOpen(i.id, !0), (0, u.uL)(E.Z5c.CHANNEL(e, t)));
            return;
        }
        s.default.selectVoiceChannel(i.id);
        return;
    }
    (0, u.uL)(E.Z5c.CHANNEL(e, t));
}
function y(e) {
    let { channel: t, onClick: n, beforeTransition: a, className: s, openChatWithoutConnecting: u } = e,
        d = (0, i.e7)([h.default, p.Z], () => (null == t ? '' : (0, l.F6)(t, h.default, p.Z)), [t]);
    return (0, r.jsx)(o.ua7, {
        text: d,
        position: 'top',
        children: (e) => {
            let { onMouseEnter: i, onMouseLeave: l } = e;
            return (0, r.jsx)(c.Z, {
                role: 'link',
                className: s,
                onClick: (e) => {
                    (e.stopPropagation(), null != n ? n() : (null != a && a(), (0, o.pTH)(), b(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, u)));
                },
                onMouseEnter: i,
                onMouseLeave: l,
                iconType: (0, m.wl)(t),
                children: d
            });
        }
    });
}
