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
    j = n(562153),
    y = n(446243),
    I = n(920639),
    N = n(538638),
    v = n(781137),
    E = n(544299),
    b = n(652061),
    S = n(105292),
    _ = n(181712),
    T = n(505252);
function R(e) {
    let { channelId: t, note: n, roomWidth: a } = e,
        [R, O] = (0, l.useState)(!1),
        L = (0, l.useRef)(null),
        P = (0, r.bG)([C.default], () => C.default.getUser(n.createdBy)),
        M = (0, r.bG)([x.A], () => x.A.getChannel(t)?.guild_id),
        w = (0, r.bG)([g.Ay], () => g.Ay.getVoiceChannelId() === t, [t]),
        U = (0, j.tx)(M, t, P),
        D = (0, E.Sb)({
            position: n.position,
            targetLabel: S.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
        });
    return null == P || null == M
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.D, {
                      innerRef: L,
                      role: "listitem",
                      "aria-label": S.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
                      className: T.kL,
                      onClick: () => {
                          (R || (0, I.Ql)({ channelId: t, interactionType: "note_opened" }), O(!R));
                      },
                      style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                      ...D,
                      children: (0, i.jsx)(v.A, { roomWidth: a }),
                  }),
                  (0, i.jsxs)(o.x, {
                      shouldShow: R,
                      onRequestClose: () => {
                          O(!1);
                      },
                      closeOnClickOutside: !0,
                      targetElementRef: L,
                      children: [
                          (0, i.jsxs)("div", {
                              className: T.oO,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: T.wx,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: T.kQ,
                                              children: [
                                                  (0, i.jsx)(u.eu, {
                                                      "aria-label": U,
                                                      src: P.getAvatarURL(M, 24),
                                                      size: h._3.SIZE_24,
                                                      className: T.my,
                                                  }),
                                                  (0, i.jsx)(p.E, {
                                                      variant: "text-md/normal",
                                                      lineClamp: 1,
                                                      children: U,
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(m.m, {
                                              text: w ? null : S.intl.string(_.default.qRXats),
                                              children: (0, i.jsx)(d.D, {
                                                  onClick: w
                                                      ? function () {
                                                            null != M &&
                                                                (0, y.yF)(M, t, n.objectId).catch((e) => (0, N.b)());
                                                        }
                                                      : void 0,
                                                  "aria-disabled": !w,
                                                  className: s()(T.Kk, { [T.Ir]: !w }),
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
                                      className: T.Qs,
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
