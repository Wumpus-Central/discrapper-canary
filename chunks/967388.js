n.d(t, { A: () => S });
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
    b = n(1195),
    T = n(375708),
    _ = n(292670),
    R = n(505252);
function S(e) {
    let { channelId: t, note: n, roomWidth: a } = e,
        [S, L] = (0, l.useState)(!1),
        O = (0, l.useRef)(null),
        P = (0, r.bG)([C.default], () => C.default.getUser(n.createdBy)),
        w = (0, r.bG)([x.A], () => x.A.getChannel(t)?.guild_id),
        M = (0, r.bG)([g.Ay], () => g.Ay.getVoiceChannelId() === t, [t]),
        U = (0, y.tx)(w, t, P),
        D = (0, E.Sb)({
            position: n.position,
            targetLabel: T.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
        });
    return null == P || null == w
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.D, {
                      innerRef: O,
                      role: "listitem",
                      "aria-label": T.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
                      className: R.kL,
                      onClick: () => {
                          S || (0, I.Ql)({ channelId: t, interactionType: "note_opened" }), L(!S);
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      ...D,
                      children: (0, i.jsx)(v.A, { roomWidth: a }),
                  }),
                  (0, i.jsxs)(o.x, {
                      shouldShow: S,
                      onRequestClose: () => {
                          L(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: O,
                      children: [
                          (0, i.jsxs)("div", {
                              className: R.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: R.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: R.kQ,
                                              children: [
                                                  (0, i.jsx)(u.eu, {
                                                      "aria-label": U,
                                                      src: P.getAvatarURL(w, 24),
                                                      size: h._3.SIZE_24,
                                                      className: R.my,
                                                  }),
                                                  (0, i.jsx)(p.E, {
                                                      variant: "text-md/normal",
                                                      lineClamp: 1,
                                                      children: U,
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(m.m, {
                                              text: M ? null : T.intl.string(_.default.qRXats),
                                              children: (0, i.jsx)(d.D, {
                                                  onClick: M
                                                      ? function () {
                                                            null != w &&
                                                                (0, j.yF)(w, t, n.objectId).catch((e) => (0, N.b)());
                                                        }
                                                      : void 0,
                                                  "aria-disabled": !M,
                                                  className: s()(R.Kk, { [R.Ir]: !M }),
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
                                      className: R.Qs,
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
