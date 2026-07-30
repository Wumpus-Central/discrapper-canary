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
    C = n(781137),
    y = n(662731),
    j = n(375708),
    v = n(904043);
function E(e) {
    let { channelId: t, note: n, roomWidth: E } = e,
        [N, I] = (0, l.useState)(!1),
        b = (0, l.useRef)(null),
        T = (0, a.bG)([A.default], () => A.default.getUser(n.createdBy)),
        _ = (0, a.bG)([m.A], () => m.A.getChannel(t)?.guild_id),
        R = (0, f.tx)(_, t, T);
    return null == T || null == _
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: b,
                      role: "listitem",
                      "aria-label": j.intl.formatToPlainString(y.default.w5Latp, { userName: R }),
                      className: v.kL,
                      onClick: () => {
                          N || (0, g.Ql)({ channelId: t, interactionType: "note_opened" }), I(!N);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      children: (0, i.jsx)(C.A, { roomWidth: E }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: N,
                      onRequestClose: () => {
                          I(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: b,
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
                                                      "aria-label": R,
                                                      src: T.getAvatarURL(_, 24),
                                                      size: d._3.SIZE_24,
                                                  }),
                                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: R }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: function () {
                                                  null != _ && (0, x.yF)(_, t, n.objectId);
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
