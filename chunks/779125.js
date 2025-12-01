n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(475179),
    l = n(287734),
    c = n(933557),
    u = n(124072),
    d = n(703656),
    f = n(131704),
    p = n(592125),
    _ = n(430824),
    m = n(699516),
    h = n(594174),
    g = n(934415),
    E = n(900849),
    b = n(981631);
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e || null == t) return;
    let r = _.Z.getGuild(e);
    if ((null == r ? void 0 : r.joinedAt) == null) return void E.Ub(e, {}, { channelId: t });
    let i = p.Z.getChannel(t);
    if (null != i && (0, f.bw)(i.type)) {
        if (n) {
            s.Z.updateChatOpen(i.id, !0), (0, d.uL)(b.Z5c.CHANNEL(e, t));
            return;
        }
        l.default.selectVoiceChannel(i.id);
        return;
    }
    (0, d.uL)(b.Z5c.CHANNEL(e, t));
}
function O(e) {
    let { channel: t, onClick: n, beforeTransition: s, className: l, openChatWithoutConnecting: d } = e,
        f = (0, i.e7)([h.default, m.Z], () => (null == t ? "" : (0, c.F6)(t, h.default, m.Z)), [t]);
    return (0, r.jsx)(a.u, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: f,
        position: "top",
        children: (0, r.jsx)(u.Z, {
            role: "link",
            className: l,
            onClick: (e) => {
                e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != s && s(),
                          (0, o.pTH)(),
                          y(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, d));
            },
            iconType: (0, g.wl)(t),
            children: f,
        }),
    });
}
