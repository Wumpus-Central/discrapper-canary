n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(827734),
    o = n(73939),
    a = n(36525),
    s = n(421380),
    c = n(397927),
    d = n(686956),
    u = n(58149),
    C = n(961350),
    f = n(954571),
    b = n(504049),
    m = n(134413),
    p = n(225671),
    j = n(652215),
    g = n(985018),
    h = n(678554);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { guildId: t } = e,
        O = (0, m.vA)(t),
        { selectedUserIds: v, clearSelection: H } = (0, p.A)(t),
        w = v.size > 0,
        A = async (e, t, n, r) => {
            try {
                let l = await d.A.banMultipleUsers(e, t, n, r);
                (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.AsCe5I), c.ToastType.SUCCESS)),
                    f.default.track(
                        j.HAw.BULK_MODERATION_ACTION_COMPLETED,
                        y(x({}, (0, u.H$)(e)), {
                            action_type: b.Nj.BAN,
                            target_user_ids: [...v],
                            mod_user_id: C.default.getId(),
                            successful_user_ids: l.body.banned_users,
                            location,
                        }),
                    );
            } catch (e) {
                (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.mICAWY), c.ToastType.FAILURE));
            }
            H();
        },
        D = l.useCallback(() => {
            H();
        }, [H]),
        S = (0, r.jsxs)("span", {
            className: h.zC,
            children: [
                (0, r.jsx)(c.nys, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: (0, c.rdh)(i.A.unsafe_rawColors.PRIMARY_500).hex(),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "heading-md/bold",
                    color: "text-default",
                    children: g.intl.format(g.t.TstoSZ, { count: v.size }),
                }),
                (0, r.jsx)(c.QWc, {
                    text: g.intl.string(g.t.yW6ZdE),
                    onClick: D,
                }),
            ],
        }),
        _ = (0, r.jsxs)("span", {
            className: h.UD,
            children: [
                (0, r.jsx)(c.wI0, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "currentColor",
                    children: g.intl.string(g.t["2a50fF"]),
                }),
            ],
        });
    return O
        ? (0, r.jsx)(o.F, {
              component: "div",
              className: h.n2,
              children:
                  w &&
                  (0, r.jsx)(c.FQk, {
                      children: (0, r.jsx)(a.A, {
                          onSave: () => {
                              f.default.track(
                                  j.HAw.BULK_MODERATION_ACTION_STARTED,
                                  y(x({}, (0, u.H$)(t)), {
                                      action_type: b.Nj.BAN,
                                      target_user_ids: [...v],
                                      mod_user_id: C.default.getId(),
                                      location,
                                  }),
                              ),
                                  (0, c.mMO)(async () => {
                                      let { default: e } = await n.e("2504").then(n.bind(n, 333179));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              y(x({}, n), {
                                                  guildId: t,
                                                  canBulkBan: O,
                                                  userIds: v,
                                                  onBanMultiple: A,
                                              }),
                                          );
                                  });
                          },
                          onSaveText: _,
                          onSaveButtonColor: s.XD.RED,
                          message: S,
                      }),
                  }),
          })
        : null;
}
