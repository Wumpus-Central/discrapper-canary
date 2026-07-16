n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(312640),
    r = n(798618),
    o = n(939249),
    c = n(97808),
    d = n(778712),
    u = n(834730),
    p = n(241326),
    h = n(46054),
    m = n(734057),
    A = n(287809),
    x = n(562153),
    g = n(446243),
    f = n(920639),
    C = n(996752),
    y = n(662731),
    j = n(375708),
    v = n(818787),
    E = n(739549);
function N(e) {
    let { channelId: t, note: n, roomWidth: N } = e,
        [I, T] = (0, l.useState)(!1),
        _ = (0, l.useRef)(null),
        b = (0, C.F)(N).numericAvatarSize / 2,
        S = (0, a.bG)([A.default], () => A.default.getUser(n.createdBy)),
        R = (0, a.bG)([m.A], () => m.A.getChannel(t)?.guild_id),
        P = (0, x.tx)(R, t, S);
    return null == S || null == R
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: _,
                      className: v.kL,
                      onClick: () => {
                          I || (0, f.Ql)({ channelId: t, interactionType: "note_opened" }), T(!I);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      children: (0, i.jsx)("img", {
                          className: v.N4,
                          src: E.A,
                          alt: j.intl.string(y.default["Vj+S0/"]),
                          style: { width: b },
                      }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: I,
                      onRequestClose: () => {
                          T(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: _,
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
                                                      "aria-label": P,
                                                      src: S.getAvatarURL(R, 24),
                                                      size: d._3.SIZE_24,
                                                  }),
                                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: P }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: function () {
                                                  null != R && (0, g.yF)(R, t, n.objectId);
                                              },
                                              className: v.Kk,
                                              children: (0, i.jsx)(p.u, { size: "sm", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: v.Qs,
                                      children: h.A.parseTopic(n.content, !0, { channelId: t }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(r.F, {}),
                      ],
                  }),
              ],
          });
}
