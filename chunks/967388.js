n.d(t, { A: () => E });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(273875),
    r = n(798618),
    o = n(939249),
    c = n(97808),
    d = n(778712),
    u = n(834730),
    h = n(241326),
    p = n(46054),
    m = n(734057),
    A = n(287809),
    f = n(562153),
    x = n(446243),
    g = n(920639),
    C = n(538638),
    y = n(781137),
    j = n(662731),
    I = n(375708),
    v = n(904043);
function E(e) {
    let { channelId: t, note: n, roomWidth: E } = e,
        [N, b] = (0, l.useState)(!1),
        T = (0, l.useRef)(null),
        _ = (0, a.bG)([A.default], () => A.default.getUser(n.createdBy)),
        R = (0, a.bG)([m.A], () => m.A.getChannel(t)?.guild_id),
        S = (0, f.tx)(R, t, _);
    return null == _ || null == R
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: T,
                      role: "listitem",
                      "aria-label": I.intl.formatToPlainString(j.default.w5Latp, { userName: S }),
                      className: v.kL,
                      onClick: () => {
                          N || (0, g.Ql)({ channelId: t, interactionType: "note_opened" }), b(!N);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      children: (0, i.jsx)(y.A, { roomWidth: E }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: N,
                      onRequestClose: () => {
                          b(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: T,
                      children: [
                          (0, i.jsxs)("div", {
                              className: v.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: v.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: v.kQ,
                                              children: [
                                                  (0, i.jsx)(c.eu, {
                                                      "aria-label": S,
                                                      src: _.getAvatarURL(R, 24),
                                                      size: d._3.SIZE_24,
                                                  }),
                                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: S }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: function () {
                                                  null != R && (0, x.yF)(R, t, n.objectId).catch((e) => (0, C.b)());
                                              },
                                              className: v.Kk,
                                              children: (0, i.jsx)(h.u, { size: "sm", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: v.Qs,
                                      children: p.A.parseTopic(n.content, !0, { channelId: t }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(r.F, {}),
                      ],
                  }),
              ],
          });
}
