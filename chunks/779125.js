n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(475179),
    s = n(287734),
    o = n(933557),
    c = n(124072),
    d = n(703656),
    u = n(131704),
    m = n(592125),
    h = n(430824),
    _ = n(699516),
    p = n(594174),
    g = n(934415),
    f = n(900849),
    x = n(981631);
function E(e) {
    let { channel: t, onClick: n, beforeTransition: E, className: C, openChatWithoutConnecting: v } = e,
        I = (0, l.e7)([p.default, _.Z], () => (null == t ? '' : (0, o.F6)(t, p.default, _.Z)), [t]);
    return (0, i.jsx)(a.ua7, {
        text: I,
        position: 'top',
        children: (e) => {
            let { onMouseEnter: l, onMouseLeave: o } = e;
            return (0, i.jsx)(c.Z, {
                role: 'link',
                className: C,
                onClick: (e) => {
                    e.stopPropagation(),
                        null != n
                            ? n()
                            : (null != E && E(),
                              (0, a.pTH)(),
                              (function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                  if (null == e || null == t) return;
                                  let i = h.Z.getGuild(e);
                                  if ((null == i ? void 0 : i.joinedAt) == null) {
                                      f.Ub(e, {}, { channelId: t });
                                      return;
                                  }
                                  let l = m.Z.getChannel(t);
                                  if (null != l && (0, u.bw)(l.type)) {
                                      if (n) {
                                          r.Z.updateChatOpen(l.id, !0), (0, d.uL)(x.Z5c.CHANNEL(e, t));
                                          return;
                                      }
                                      s.default.selectVoiceChannel(l.id);
                                      return;
                                  }
                                  (0, d.uL)(x.Z5c.CHANNEL(e, t));
                              })(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, v));
                },
                onMouseEnter: l,
                onMouseLeave: o,
                iconType: (0, g.wl)(t),
                children: I
            });
        }
    });
}
