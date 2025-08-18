n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    o = n(475179),
    a = n(287734),
    s = n(933557),
    c = n(124072),
    u = n(703656),
    d = n(131704),
    p = n(592125),
    m = n(430824),
    f = n(699516),
    g = n(594174),
    _ = n(934415),
    h = n(900849),
    b = n(981631);
function E(e) {
    let { channel: t, onClick: n, beforeTransition: E, className: C, openChatWithoutConnecting: O } = e,
        v = (0, i.e7)([g.default, f.Z], () => (null == t ? "" : (0, s.F6)(t, g.default, f.Z)), [t]);
    return (0, r.jsx)(l.ua7, {
        text: v,
        position: "top",
        children: (e) => {
            let { onMouseEnter: i, onMouseLeave: s } = e;
            return (0, r.jsx)(c.Z, {
                role: "link",
                className: C,
                onClick: (e) => {
                    e.stopPropagation(),
                        null != n
                            ? n()
                            : (null != E && E(),
                              (0, l.pTH)(),
                              (function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                  if (null == e || null == t) return;
                                  let r = m.Z.getGuild(e);
                                  if ((null == r ? void 0 : r.joinedAt) == null) return h.Ub(e, {}, { channelId: t });
                                  let i = p.Z.getChannel(t);
                                  if (null != i && (0, d.bw)(i.type)) {
                                      if (n) {
                                          o.Z.updateChatOpen(i.id, !0), (0, u.uL)(b.Z5c.CHANNEL(e, t));
                                          return;
                                      }
                                      a.default.selectVoiceChannel(i.id);
                                      return;
                                  }
                                  (0, u.uL)(b.Z5c.CHANNEL(e, t));
                              })(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, O));
                },
                onMouseEnter: i,
                onMouseLeave: s,
                iconType: (0, _.wl)(t),
                children: v,
            });
        },
    });
}
