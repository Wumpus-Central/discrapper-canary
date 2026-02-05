l.d(t, { A: () => f });
var n = l(627968),
    i = l(64700),
    s = l(827734),
    a = l(73939),
    r = l(36525),
    o = l(421380),
    C = l(397927),
    d = l(686956),
    c = l(58149),
    u = l(961350),
    m = l(954571),
    x = l(504049),
    h = l(134413),
    g = l(225671),
    _ = l(652215),
    H = l(985018),
    p = l(678554);
function f(e) {
    let { guildId: t } = e,
        f = (0, h.vA)(t),
        { selectedUserIds: j, clearSelection: v } = (0, g.A)(t),
        b = j.size > 0,
        A = async (e, t, l, n) => {
            try {
                let i = await d.A.banMultipleUsers(e, t, l, n);
                (0, C.showToast)((0, C.createToast)(H.intl.string(H.t.AsCe5I), C.ToastType.SUCCESS)),
                    m.default.track(_.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                        ...(0, c.H$)(e),
                        action_type: x.Nj.BAN,
                        target_user_ids: [...j],
                        mod_user_id: u.default.getId(),
                        successful_user_ids: i.body.banned_users,
                        location,
                    });
            } catch (e) {
                (0, C.showToast)((0, C.createToast)(H.intl.string(H.t.mICAWY), C.ToastType.FAILURE));
            }
            v();
        },
        L = i.useCallback(() => {
            v();
        }, [v]),
        N = (0, n.jsxs)("span", {
            className: p.zC,
            children: [
                (0, n.jsx)(C.nys, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, C.rdh)(s.A.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, n.jsx)(C.Text, {
                    variant: "heading-md/bold",
                    color: "text-default",
                    children: H.intl.format(H.t.TstoSZ, { count: j.size }),
                }),
                (0, n.jsx)(C.QWc, { text: H.intl.string(H.t.yW6ZdE), onClick: L }),
            ],
        }),
        V = (0, n.jsxs)("span", {
            className: p.UD,
            children: [
                (0, n.jsx)(C.wI0, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                (0, n.jsx)(C.Text, {
                    variant: "text-sm/semibold",
                    color: "currentColor",
                    children: H.intl.string(H.t["2a50fF"]),
                }),
            ],
        });
    return f
        ? (0, n.jsx)(a.F, {
              component: "div",
              className: p.n2,
              children:
                  b &&
                  (0, n.jsx)(C.FQk, {
                      children: (0, n.jsx)(r.A, {
                          onSave: () => {
                              m.default.track(_.HAw.BULK_MODERATION_ACTION_STARTED, {
                                  ...(0, c.H$)(t),
                                  action_type: x.Nj.BAN,
                                  target_user_ids: [...j],
                                  mod_user_id: u.default.getId(),
                                  location,
                              }),
                                  (0, C.mMO)(async () => {
                                      let { default: e } = await l.e("2504").then(l.bind(l, 333179));
                                      return (l) =>
                                          (0, n.jsx)(e, {
                                              ...l,
                                              guildId: t,
                                              canBulkBan: f,
                                              userIds: j,
                                              onBanMultiple: A,
                                          });
                                  });
                          },
                          onSaveText: V,
                          onSaveButtonColor: o.XD.RED,
                          message: N,
                      }),
                  }),
          })
        : null;
}
