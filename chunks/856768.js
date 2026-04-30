l.d(t, { A: () => b });
var n = l(627968),
    i = l(64700),
    C = l(661531),
    s = l(868285),
    a = l(36525),
    r = l(862482),
    d = l(192308),
    o = l(950305),
    c = l(602853),
    u = l(834730),
    m = l(123292),
    H = l(215026),
    x = l(871682),
    h = l(66834),
    g = l(95561),
    f = l(495544),
    j = l(174459),
    p = l(504049),
    V = l(587426),
    v = l(134413),
    M = l(652215),
    A = l(375708),
    L = l(983475);
function b(e) {
    let { guildId: t } = e,
        b = (0, v.vA)(t),
        { selectedUserIds: D, clearSelection: R } = (0, V.A)(t),
        E = D.size > 0,
        N = (e, t, l, n) => {
            h.A.startBulkBan(e, t, l, n);
        },
        S = i.useCallback(() => {
            R();
        }, [R]),
        Z = (0, n.jsxs)("span", {
            className: L.zC,
            children: [
                (0, n.jsx)(o.n, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, c.r)(C.A.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, n.jsx)(u.E, {
                    variant: "heading-md/bold",
                    color: "text-default",
                    children: A.intl.format(A.t.TstoSZ, { count: D.size }),
                }),
                (0, n.jsx)(m.Q, { text: A.intl.string(A.t.yW6ZdE), onClick: S }),
            ],
        }),
        I = (0, n.jsxs)("span", {
            className: L.UD,
            children: [
                (0, n.jsx)(H.w, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                (0, n.jsx)(u.E, {
                    variant: "text-sm/semibold",
                    color: "currentColor",
                    children: A.intl.string(A.t["2a50fF"]),
                }),
            ],
        });
    return b
        ? (0, n.jsx)(s.F, {
              component: "div",
              className: L.n2,
              children:
                  E &&
                  (0, n.jsx)(x.F, {
                      children: (0, n.jsx)(a.A, {
                          onSave: () => {
                              j.default.track(M.HAw.BULK_MODERATION_ACTION_STARTED, {
                                  ...(0, g.H$)(t),
                                  action_type: p.Nj.BAN,
                                  target_user_ids: [...D],
                                  mod_user_id: f.default.getId(),
                                  location: "MemberSafetyPageActionNotice",
                              }),
                                  (0, d.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([
                                          l.e("33847"),
                                          l.e("91671"),
                                          l.e("2504"),
                                      ]).then(l.bind(l, 333179));
                                      return (l) =>
                                          (0, n.jsx)(e, {
                                              ...l,
                                              guildId: t,
                                              canBulkBan: b,
                                              userIds: D,
                                              onBanMultiple: N,
                                          });
                                  });
                          },
                          onSaveText: I,
                          onSaveButtonColor: r.XD.RED,
                          message: Z,
                      }),
                  }),
          })
        : null;
}
