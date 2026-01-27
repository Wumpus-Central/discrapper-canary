n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
    a = n(397927),
    s = n(367513),
    o = n(956793),
    c = n(47167),
    u = n(332173),
    d = n(976860),
    p = n(95701),
    m = n(734057),
    f = n(71393),
    g = n(994500),
    h = n(287809),
    _ = n(147036),
    b = n(449054),
    A = n(652215);

function y(e) {
    let { channel: t, onClick: n, beforeTransition: y, className: v, openChatWithoutConnecting: x } = e,
        O = (0, i.bG)([h.default, g.A], () => (null == t ? "" : (0, c.m1)(t, h.default, g.A)), [t]);
    return (0, r.jsx)(l.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: O,
        position: "top",
        children: (0, r.jsx)(u.A, {
            role: "link",
            className: v,
            onClick: (e) => {
                e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != y && y(),
                          (0, a.s7G)(),
                          (function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if (null == e || null == t) return;
                              let r = f.A.getGuild(e);
                              if ((null == r ? void 0 : r.joinedAt) == null)
                                  return b.Z2(
                                      e,
                                      {},
                                      {
                                          channelId: t,
                                      },
                                  );
                              let i = m.A.getChannel(t);
                              if (null != i && (0, p.ay)(i.type)) {
                                  if (n) {
                                      s.A.updateChatOpen(i.id, !0), (0, d.pX)(A.BVt.CHANNEL(e, t));
                                      return;
                                  }
                                  o.default.selectVoiceChannel(i.id);
                                  return;
                              }
                              (0, d.pX)(A.BVt.CHANNEL(e, t));
                          })(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, x));
            },
            iconType: (0, _.QG)(t),
            children: O,
        }),
    });
}
