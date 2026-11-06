var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(195118),
    c = n(31188),
    d = n(939249),
    u = n(97808),
    h = n(778712),
    p = n(834730),
    m = n(866665),
    A = n(241326),
    f = n(46054),
    g = n(734057),
    x = n(309010),
    C = n(287809),
    y = n(562153),
    I = n(303227),
    j = n(920639),
    v = n(538638),
    N = n(781137),
    E = n(544299),
    b = n(687782),
    S = n(792996),
    T = n(861089),
    _ = n(505252);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, note: n, roomWidth: a } = e,
                [R, O] = (0, l.useState)(!1),
                L = (0, l.useRef)(null),
                P = (0, r.bG)([C.default], () => C.default.getUser(n.createdBy)),
                w = (0, r.bG)([g.A], () => g.A.getChannel(t)?.guild_id),
                M = (0, r.bG)([x.Ay], () => x.Ay.getVoiceChannelId() === t, [t]),
                U = (0, y.tx)(w, t, P),
                D = (0, E.Sb)({
                    position: n.position,
                    targetLabel: S.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
                });
            return null == P || null == w
                ? null
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(d.D, {
                              innerRef: L,
                              role: "listitem",
                              "aria-label": S.intl.formatToPlainString(b.default.w5Latp, { userName: U }),
                              className: _.kL,
                              onClick: () => {
                                  (R || (0, j.Ql)({ channelId: t, interactionType: "note_opened" }), O(!R));
                              },
                              style: { left: `${n.position.x}%`, top: `${n.position.y}%` },
                              ...D,
                              children: (0, i.jsx)(N.A, { roomWidth: a }),
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
                                      className: _.oO,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: _.wx,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: _.kQ,
                                                      children: [
                                                          (0, i.jsx)(u.eu, {
                                                              "aria-label": U,
                                                              src: P.getAvatarURL(w, 24),
                                                              size: h._3.SIZE_24,
                                                              className: _.my,
                                                          }),
                                                          (0, i.jsx)(p.E, {
                                                              variant: "body-md/normal",
                                                              lineClamp: 1,
                                                              children: U,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)(m.m, {
                                                      text: M ? null : S.intl.string(T.default.qRXats),
                                                      children: (0, i.jsx)(d.D, {
                                                          onClick: M
                                                              ? function () {
                                                                    null != w &&
                                                                        (0, I.yF)(w, t, n.objectId).catch((e) =>
                                                                            (0, v.b)(),
                                                                        );
                                                                }
                                                              : void 0,
                                                          "aria-disabled": !M,
                                                          className: s()(_.Kk, { [_.Ir]: !M }),
                                                          children: (0, i.jsx)(A.TrashIcon, {
                                                              size: "sm",
                                                              color: "currentColor",
                                                          }),
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)(p.E, {
                                              variant: "body-sm/normal",
                                              color: "text-muted",
                                              className: _.Qs,
                                              children: f.A.parseTopic(n.content, !0, { channelId: t }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(c.F, {}),
                              ],
                          }),
                      ],
                  });
        },
    },
);
