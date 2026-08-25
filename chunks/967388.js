n.d(t, { A: () => v });
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
    j = n(544299),
    I = n(1195),
    N = n(375708),
    E = n(505252);
function v(e) {
    let { channelId: t, note: n, roomWidth: v } = e,
        [b, T] = (0, l.useState)(!1),
        _ = (0, l.useRef)(null),
        R = (0, a.bG)([A.default], () => A.default.getUser(n.createdBy)),
        S = (0, a.bG)([m.A], () => m.A.getChannel(t)?.guild_id),
        L = (0, f.tx)(S, t, R),
        O = (0, j.Sb)({
            position: n.position,
            targetLabel: N.intl.formatToPlainString(I.default.w5Latp, { userName: L }),
        });
    return null == R || null == S
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.D, {
                      innerRef: _,
                      role: "listitem",
                      "aria-label": N.intl.formatToPlainString(I.default.w5Latp, { userName: L }),
                      className: E.kL,
                      onClick: () => {
                          b || (0, g.Ql)({ channelId: t, interactionType: "note_opened" }), T(!b);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      ...O,
                      children: (0, i.jsx)(y.A, { roomWidth: v }),
                  }),
                  (0, i.jsxs)(s.x, {
                      shouldShow: b,
                      onRequestClose: () => {
                          T(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: _,
                      children: [
                          (0, i.jsxs)("div", {
                              className: E.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: E.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: E.kQ,
                                              children: [
                                                  (0, i.jsx)(c.eu, {
                                                      "aria-label": L,
                                                      src: R.getAvatarURL(S, 24),
                                                      size: d._3.SIZE_24,
                                                      className: E.my,
                                                  }),
                                                  (0, i.jsx)(u.E, {
                                                      variant: "text-md/normal",
                                                      lineClamp: 1,
                                                      children: L,
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(o.D, {
                                              onClick: function () {
                                                  null != S && (0, x.yF)(S, t, n.objectId).catch((e) => (0, C.b)());
                                              },
                                              className: E.Kk,
                                              children: (0, i.jsx)(h.TrashIcon, { size: "sm", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: E.Qs,
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
