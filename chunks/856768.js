l.d(t, { A: () => L });
var n = l(627968),
    i = l(64700),
    a = l(827734),
    s = l(73939),
    C = l(36525),
    r = l(862482),
    o = l(192308),
    d = l(950305),
    c = l(602853),
    u = l(834730),
    m = l(123292),
    h = l(215026),
    x = l(871682),
    g = l(686956),
    H = l(58149),
    _ = l(961350),
    p = l(954571),
    f = l(504049),
    j = l(587426),
    b = l(134413),
    A = l(652215),
    v = l(985018),
    V = l(983475);
function L(e) {
    let { guildId: t } = e,
        L = (0, b.vA)(t),
        { selectedUserIds: D, clearSelection: R } = (0, j.A)(t),
        M = D.size > 0,
        E = (e, t, l, n) => {
            g.A.startBulkBan(e, t, l, n);
        },
        N = i.useCallback(() => {
            R();
        }, [R]),
        I = (0, n.jsxs)("span", {
            className: V.zC,
            children: [
                (0, n.jsx)(d.n, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, c.r)(a.A.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, n.jsx)(u.E, {
                    variant: "heading-md/bold",
                    color: "text-default",
                    children: v.intl.format(v.t.TstoSZ, { count: D.size }),
                }),
                (0, n.jsx)(m.Q, { text: v.intl.string(v.t.yW6ZdE), onClick: N }),
            ],
        }),
        S = (0, n.jsxs)("span", {
            className: V.UD,
            children: [
                (0, n.jsx)(h.w, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                (0, n.jsx)(u.E, {
                    variant: "text-sm/semibold",
                    color: "currentColor",
                    children: v.intl.string(v.t["2a50fF"]),
                }),
            ],
        });
    return L
        ? (0, n.jsx)(s.F, {
              component: "div",
              className: V.n2,
              children:
                  M &&
                  (0, n.jsx)(x.F, {
                      children: (0, n.jsx)(C.A, {
                          onSave: () => {
                              p.default.track(A.HAw.BULK_MODERATION_ACTION_STARTED, {
                                  ...(0, H.H$)(t),
                                  action_type: f.Nj.BAN,
                                  target_user_ids: [...D],
                                  mod_user_id: _.default.getId(),
                                  location: "MemberSafetyPageActionNotice",
                              }),
                                  (0, o.openModalLazy)(async () => {
                                      let { default: e } = await l.e("2504").then(l.bind(l, 333179));
                                      return (l) =>
                                          (0, n.jsx)(e, {
                                              ...l,
                                              guildId: t,
                                              canBulkBan: L,
                                              userIds: D,
                                              onBanMultiple: E,
                                          });
                                  });
                          },
                          onSaveText: S,
                          onSaveButtonColor: r.XD.RED,
                          message: I,
                      }),
                  }),
          })
        : null;
}
