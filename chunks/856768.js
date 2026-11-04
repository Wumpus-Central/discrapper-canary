var n = l(477900),
    i = l(582128),
    C = l(646514),
    s = l(628274),
    a = l(36525),
    r = l(862482),
    d = l(192308),
    o = l(950305),
    c = l(602853),
    u = l(834730),
    m = l(123292),
    H = l(215026),
    h = l(871682),
    x = l(778858),
    g = l(149468),
    f = l(46653),
    j = l(129230),
    p = l(504049),
    v = l(587426),
    V = l(134413),
    b = l(652215),
    A = l(792996),
    M = l(723264);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t } = e,
                L = (0, V.vA)(t),
                { selectedUserIds: D, clearSelection: R } = (0, v.A)(t),
                E = D.size > 0;
            function S(e, t, l, n) {
                x.A.startBulkBan(e, t, l, n);
            }
            let N = i.useCallback(() => {
                    R();
                }, [R]),
                y = (0, n.jsxs)("span", {
                    className: M.zC,
                    children: [
                        (0, n.jsx)(o.UserIcon, {
                            size: "custom",
                            width: 24,
                            height: 24,
                            color: (0, c.r)(C.A.unsafe_rawColors.PRIMARY_500).hex(),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: A.intl.format(A.t.TstoSZ, { count: D.size }),
                        }),
                        (0, n.jsx)(m.Q, { text: A.intl.string(A.t.yW6ZdE), onClick: N }),
                    ],
                }),
                Z = (0, n.jsxs)("span", {
                    className: M.UD,
                    children: [
                        (0, n.jsx)(H.w, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                        (0, n.jsx)(u.E, {
                            variant: "body-sm/semibold",
                            color: "currentColor",
                            children: A.intl.string(A.t["2a50fF"]),
                        }),
                    ],
                });
            return L
                ? (0, n.jsx)(s.F, {
                      component: "div",
                      className: M.n2,
                      children:
                          E &&
                          (0, n.jsx)(h.F, {
                              children: (0, n.jsx)(a.A, {
                                  onSave: function () {
                                      (j.default.track(b.HAw.BULK_MODERATION_ACTION_STARTED, {
                                          ...(0, g.H$)(t),
                                          action_type: p.Nj.BAN,
                                          target_user_ids: [...D],
                                          mod_user_id: f.default.getId(),
                                          location: "MemberSafetyPageActionNotice",
                                      }),
                                          (0, d.mM)(async () => {
                                              let { default: e } = await Promise.all([
                                                  l.e(420282),
                                                  l.e(691671),
                                                  l.e(802504),
                                              ]).then(l.bind(l, 333179));
                                              return (l) =>
                                                  (0, n.jsx)(e, {
                                                      ...l,
                                                      guildId: t,
                                                      canBulkBan: L,
                                                      userIds: D,
                                                      onBanMultiple: S,
                                                  });
                                          }));
                                  },
                                  onSaveText: Z,
                                  onSaveButtonColor: r.XD.RED,
                                  message: y,
                              }),
                          }),
                  })
                : null;
        },
    },
);
