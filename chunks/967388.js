n.d(t, { A: () => v });
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
    g = n(872772),
    f = n(996752),
    C = n(189090),
    y = n(375708),
    j = n(599459),
    E = n(739549);
function v(e) {
    let { channelId: t, note: n, roomWidth: v } = e,
        [N, I] = (0, l.useState)(!1),
        _ = (0, l.useRef)(null),
        T = (0, f.F)(v).numericAvatarSize / 2,
        S = (0, a.bG)([m.default], () => m.default.getUser(n.createdBy)),
        R = (0, a.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        b = (0, A.tx)(R, t, S);
    return null == S || null == R
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: _,
                      className: j.kL,
                      onClick: () => {
                          I(!N);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      children: (0, i.jsx)("img", {
                          className: j.N4,
                          src: E.A,
                          alt: y.intl.string(C.default["Vj+S0/"]),
                          style: { width: T },
                      }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: N,
                      onRequestClose: () => {
                          I(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: _,
                      children: [
                          (0, i.jsxs)("div", {
                              className: j.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: j.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: j.kQ,
                                              children: [
                                                  (0, i.jsx)(c.eu, {
                                                      "aria-label": b,
                                                      src: S.getAvatarURL(R, 24),
                                                      size: d._3.SIZE_24,
                                                  }),
                                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: b }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: () => {
                                                  null != R && (0, x.Lw)(R, t, n.objectId, { object_type: g.N.NOTE });
                                              },
                                              className: j.Kk,
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
