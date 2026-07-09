n.d(t, { A: () => E });
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
    h = n(734057),
    m = n(287809),
    A = n(562153),
    x = n(446243),
    g = n(996752),
    f = n(189090),
    C = n(375708),
    y = n(599459),
    j = n(739549);
function E(e) {
    let { channelId: t, note: n, roomWidth: E } = e,
        [v, N] = (0, l.useState)(!1),
        I = (0, l.useRef)(null),
        _ = (0, g.F)(E).numericAvatarSize / 2,
        T = (0, a.bG)([m.default], () => m.default.getUser(n.createdBy)),
        S = (0, a.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        R = (0, A.tx)(S, t, T);
    return null == T || null == S
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: I,
                      className: y.kL,
                      onClick: () => {
                          N(!v);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      children: (0, i.jsx)("img", {
                          className: y.N4,
                          src: j.A,
                          alt: C.intl.string(f.default["Vj+S0/"]),
                          style: { width: _ },
                      }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: v,
                      onRequestClose: () => {
                          N(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: I,
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
                                                      "aria-label": R,
                                                      src: T.getAvatarURL(S, 24),
                                                      size: d._3.SIZE_24,
                                                  }),
                                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: R }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: () => {
                                                  null != S && (0, x.yF)(S, t, n.objectId);
                                              },
                                              className: y.Kk,
                                              children: (0, i.jsx)(p.u, { size: "sm", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: n.content,
                                  }),
                              ],
                          }),
                          (0, i.jsx)(r.F, {}),
                      ],
                  }),
              ],
          });
}
