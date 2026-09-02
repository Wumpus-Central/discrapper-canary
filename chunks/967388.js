n.d(t, { A: () => R });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(273875),
    c = n(798618),
    d = n(939249),
    u = n(97808),
    h = n(778712),
    p = n(834730),
    m = n(866665),
    A = n(241326),
    f = n(46054),
    x = n(734057),
    g = n(309010),
    C = n(287809),
    y = n(562153),
    j = n(446243),
    I = n(920639),
    N = n(538638),
    v = n(781137),
    E = n(544299),
    b = n(270103),
    _ = n(375708),
    T = n(905322),
    S = n(505252);
function R(e) {
    let { channelId: t, note: n, roomWidth: a } = e,
        [R, L] = (0, l.useState)(!1),
        O = (0, l.useRef)(null),
        P = (0, r.bG)([C.default], () => C.default.getUser(n.createdBy)),
        M = (0, r.bG)([x.A], () => x.A.getChannel(t)?.guild_id),
        w = (0, r.bG)([g.Ay], () => g.Ay.getVoiceChannelId() === t, [t]),
        U = (0, y.tx)(M, t, P),
        D = (0, E.Sb)({
            position: n.position,
            targetLabel: _.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
        });
    return null == P || null == M
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.D, {
                      innerRef: O,
                      role: "listitem",
                      "aria-label": _.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
                      className: S.kL,
                      onClick: () => {
                          R || (0, I.Ql)({ channelId: t, interactionType: "note_opened" }), L(!R);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      ...D,
                      children: (0, i.jsx)(v.A, { roomWidth: a }),
                  }),
                  (0, i.jsxs)(o.x, {
                      shouldShow: R,
                      onRequestClose: () => {
                          L(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: O,
                      children: [
                          (0, i.jsxs)("div", {
                              className: S.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: S.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: S.kQ,
                                              children: [
                                                  (0, i.jsx)(u.eu, {
                                                      "aria-label": U,
                                                      src: P.getAvatarURL(M, 24),
                                                      size: h._3.SIZE_24,
                                                      className: S.my,
                                                  }),
                                                  (0, i.jsx)(p.E, {
                                                      variant: "text-md/normal",
                                                      lineClamp: 1,
                                                      children: U,
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(m.m, {
                                              text: w ? null : _.intl.string(T.default.qRXats),
                                              children: (0, i.jsx)(d.D, {
                                                  onClick: w
                                                      ? function () {
                                                            null != M &&
                                                                (0, j.yF)(M, t, n.objectId).catch((e) => (0, N.b)());
                                                        }
                                                      : void 0,
                                                  "aria-disabled": !w,
                                                  className: s()(S.Kk, { [S.Ir]: !w }),
                                                  children: (0, i.jsx)(A.TrashIcon, {
                                                      size: "sm",
                                                      color: "currentColor",
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      className: S.Qs,
                                      children: f.A.parseTopic(n.content, !0, { channelId: t }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(c.F, {}),
                      ],
                  }),
              ],
          });
}
