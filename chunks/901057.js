"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(990078),
    s = n(192308),
    a = n(367513),
    o = n(956793),
    c = n(47167),
    u = n(332173),
    d = n(976860),
    _ = n(95701),
    E = n(734057),
    A = n(71393),
    m = n(994500),
    I = n(287809),
    T = n(147036),
    N = n(449054),
    g = n(652215);
function p(e) {
    let { channel: t, onClick: n, beforeTransition: p, className: C, openChatWithoutConnecting: f } = e,
        h = (0, r.bG)([I.default, m.A], () => (null == t ? "" : (0, c.m1)(t, I.default, m.A)), [t]);
    return (0, i.jsx)(l.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: h,
        position: "top",
        children: (0, i.jsx)(u.A, {
            role: "link",
            className: C,
            onClick: (e) => {
                e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != p && p(),
                          (0, s.closeAllModals)(),
                          (function (e, t) {
                              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                              if (null == e || null == t) return;
                              let i = A.A.getGuild(e);
                              if (i?.joinedAt == null) return N.Z2(e, {}, { channelId: t });
                              let r = E.A.getChannel(t);
                              if (null != r && (0, _.ay)(r.type)) {
                                  if (n) {
                                      a.A.updateChatOpen(r.id, !0), (0, d.pX)(g.BVt.CHANNEL(e, t));
                                      return;
                                  }
                                  o.default.selectVoiceChannel(r.id);
                                  return;
                              }
                              (0, d.pX)(g.BVt.CHANNEL(e, t));
                          })(t?.guild_id, t?.id, f));
            },
            iconType: (0, T.QG)(t),
            children: h,
        }),
    });
}
