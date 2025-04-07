n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(475179),
    o = n(287734),
    s = n(933557),
    c = n(124072),
    u = n(703656),
    d = n(131704),
    p = n(592125),
    m = n(430824),
    f = n(699516),
    h = n(594174),
    g = n(934415),
    _ = n(900849),
    b = n(981631);
function x(e) {
    let { channel: t, onClick: n, beforeTransition: x, className: y, openChatWithoutConnecting: E } = e,
        v = (0, i.e7)([h.default, f.Z], () => (null == t ? '' : (0, s.F6)(t, h.default, f.Z)), [t]);
    return (0, r.jsx)(a.ua7, {
        text: v,
        position: 'top',
        children: (e) => {
            let { onMouseEnter: i, onMouseLeave: s } = e;
            return (0, r.jsx)(c.Z, {
                role: 'link',
                className: y,
                onClick: (e) => {
                    e.stopPropagation(),
                        null != n
                            ? n()
                            : (null != x && x(),
                              (0, a.pTH)(),
                              (function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                  if (null == e || null == t) return;
                                  let r = m.Z.getGuild(e);
                                  if ((null == r ? void 0 : r.joinedAt) == null) return _.Ub(e, {}, { channelId: t });
                                  let i = p.Z.getChannel(t);
                                  if (null != i && (0, d.bw)(i.type)) {
                                      if (n) {
                                          l.Z.updateChatOpen(i.id, !0), (0, u.uL)(b.Z5c.CHANNEL(e, t));
                                          return;
                                      }
                                      o.default.selectVoiceChannel(i.id);
                                      return;
                                  }
                                  (0, u.uL)(b.Z5c.CHANNEL(e, t));
                              })(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, E));
                },
                onMouseEnter: i,
                onMouseLeave: s,
                iconType: (0, g.wl)(t),
                children: v
            });
        }
    });
}
