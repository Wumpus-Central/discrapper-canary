n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(475179),
    o = n(287734),
    s = n(933557),
    c = n(124072),
    u = n(703656),
    d = n(131704),
    m = n(592125),
    h = n(430824),
    f = n(699516),
    p = n(594174),
    _ = n(934415),
    g = n(900849),
    E = n(981631);
function C(e) {
    let { channel: t, onClick: n, beforeTransition: C, className: I, openChatWithoutConnecting: x } = e,
        N = (0, r.e7)([p.default, f.Z], () => (null == t ? '' : (0, s.F6)(t, p.default, f.Z)), [t]);
    return (0, i.jsx)(l.Tooltip, {
        text: N,
        position: 'top',
        children: (e) => {
            let { onMouseEnter: r, onMouseLeave: s } = e;
            return (0, i.jsx)(c.Z, {
                role: 'link',
                className: I,
                onClick: (e) => {
                    e.stopPropagation(),
                        null != n
                            ? n()
                            : (null != C && C(),
                              (0, l.closeAllModals)(),
                              !(function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                  if (null == e || null == t) return;
                                  let i = h.Z.getGuild(e);
                                  if ((null == i ? void 0 : i.joinedAt) == null) {
                                      g.Ub(e, {}, { channelId: t });
                                      return;
                                  }
                                  let r = m.Z.getChannel(t);
                                  if (null != r && (0, d.bw)(r.type)) {
                                      if (n) {
                                          a.Z.updateChatOpen(r.id, !0), (0, u.uL)(E.Z5c.CHANNEL(e, t));
                                          return;
                                      }
                                      o.default.selectVoiceChannel(r.id);
                                      return;
                                  }
                                  (0, u.uL)(E.Z5c.CHANNEL(e, t));
                              })(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, x));
                },
                onMouseEnter: r,
                onMouseLeave: s,
                iconType: (0, _.wl)(t),
                children: N
            });
        }
    });
}
