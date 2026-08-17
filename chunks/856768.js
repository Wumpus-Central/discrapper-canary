l.d(t, { A: () => b });
var n = l(477900),
    i = l(582128),
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
    f = l(280450),
    j = l(174459),
    p = l(504049),
    v = l(587426),
    V = l(134413),
    A = l(652215),
    M = l(375708),
    L = l(835291);
function b(e) {
    let { guildId: t } = e,
        b = (0, V.vA)(t),
        { selectedUserIds: D, clearSelection: R } = (0, v.A)(t),
        E = D.size > 0;
    function S(e, t, l, n) {
        h.A.startBulkBan(e, t, l, n);
    }
    let N = i.useCallback(() => {
            R();
        }, [R]),
        Z = (0, n.jsxs)("span", {
            className: L.zC,
            children: [
                (0, n.jsx)(o.UserIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, c.r)(C.A.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, n.jsx)(u.E, {
                    variant: "heading-md/bold",
                    color: "text-default",
                    children: M.intl.format(M.t.TstoSZ, { count: D.size }),
                }),
                (0, n.jsx)(m.Q, { text: M.intl.string(M.t.yW6ZdE), onClick: N }),
            ],
        }),
        I = (0, n.jsxs)("span", {
            className: L.UD,
            children: [
                (0, n.jsx)(H.w, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                (0, n.jsx)(u.E, {
                    variant: "text-sm/semibold",
                    color: "currentColor",
                    children: M.intl.string(M.t["2a50fF"]),
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
                          onSave: function () {
                              j.default.track(A.HAw.BULK_MODERATION_ACTION_STARTED, {
                                  ...(0, g.H$)(t),
                                  action_type: p.Nj.BAN,
                                  target_user_ids: [...D],
                                  mod_user_id: f.default.getId(),
                                  location: "MemberSafetyPageActionNotice",
                              }),
                                  (0, d.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([l.e("687407"), l.e("802504")]).then(
                                          l.bind(l, 333179),
                                      );
                                      return (l) =>
                                          (0, n.jsx)(e, {
                                              ...l,
                                              guildId: t,
                                              canBulkBan: b,
                                              userIds: D,
                                              onBanMultiple: S,
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
