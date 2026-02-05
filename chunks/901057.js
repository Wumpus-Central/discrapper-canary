n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(990078),
    r = n(397927),
    s = n(367513),
    o = n(956793),
    d = n(47167),
    c = n(332173),
    u = n(976860),
    m = n(95701),
    _ = n(734057),
    h = n(71393),
    p = n(994500),
    g = n(287809),
    A = n(147036),
    f = n(449054),
    x = n(652215);
function E(e) {
    let { channel: t, onClick: n, beforeTransition: E, className: C, openChatWithoutConnecting: I } = e,
        T = (0, l.bG)([g.default, p.A], () => (null == t ? "" : (0, d.m1)(t, g.default, p.A)), [t]);
    return (0, i.jsx)(a.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: T,
        position: "top",
        children: (0, i.jsx)(c.A, {
            role: "link",
            className: C,
            onClick: (e) => {
                e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != E && E(),
                          (0, r.s7G)(),
                          (function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if (null == e || null == t) return;
                              let i = h.A.getGuild(e);
                              if (i?.joinedAt == null) return f.Z2(e, {}, { channelId: t });
                              let l = _.A.getChannel(t);
                              if (null != l && (0, m.ay)(l.type)) {
                                  if (n) {
                                      s.A.updateChatOpen(l.id, !0), (0, u.pX)(x.BVt.CHANNEL(e, t));
                                      return;
                                  }
                                  o.default.selectVoiceChannel(l.id);
                                  return;
                              }
                              (0, u.pX)(x.BVt.CHANNEL(e, t));
                          })(t?.guild_id, t?.id, I));
            },
            iconType: (0, A.QG)(t),
            children: T,
        }),
    });
}
