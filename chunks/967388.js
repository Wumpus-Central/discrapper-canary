n.d(t, { A: () => j });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(312640),
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
    y = n(904043);
function j(e) {
    let { channelId: t, note: n, roomWidth: j } = e,
        [v, E] = (0, l.useState)(!1),
        N = (0, l.useRef)(null),
        I = (0, a.bG)([A.default], () => A.default.getUser(n.createdBy)),
        T = (0, a.bG)([m.A], () => m.A.getChannel(t)?.guild_id),
        b = (0, f.tx)(T, t, I);
    return null == I || null == T
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: N,
                      className: y.kL,
                      onClick: () => {
                          v || (0, g.Ql)({ channelId: t, interactionType: "note_opened" }), E(!v);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      children: (0, i.jsx)(C.A, { roomWidth: j }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: v,
                      onRequestClose: () => {
                          E(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: N,
                      children: [
                          (0, i.jsxs)("div", {
                              className: y.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: y.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: y.kQ,
                                              children: [
                                                  (0, i.jsx)(c.eu, {
                                                      "aria-label": b,
                                                      src: I.getAvatarURL(T, 24),
                                                      size: d._3.SIZE_24,
                                                  }),
                                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: b }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: function () {
                                                  null != T && (0, x.yF)(T, t, n.objectId);
                                              },
                                              className: y.Kk,
                                              children: (0, i.jsx)(h.u, { size: "sm", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: y.Qs,
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
