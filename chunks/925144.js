var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(91871),
    s = n.n(o),
    c = n(855986),
    d = n(342952),
    u = n(189213),
    g = n(545442),
    h = n(858899),
    m = n(331322),
    f = n(683438),
    p = n(834730),
    S = n(150934),
    j = n(140735),
    A = n(148149),
    x = n(775602),
    E = n(149468),
    y = n(266891),
    _ = n(676608),
    b = n(46653),
    R = n(696451),
    D = n(317525),
    v = n(71393),
    N = n(576705),
    P = n(287809),
    O = n(129230),
    C = n(403362),
    L = n(427262),
    T = n(504049),
    k = n(543079),
    M = n(652215),
    w = n(778712),
    z = n(792996),
    I = n(911888);
function q(t) {
    let { action: e, hasRoles: n, autoFocusSearch: r, searchQuery: l, onSearchChange: a } = t;
    return (0, i.jsx)(m.B, {
        direction: "vertical",
        padding: { top: 16 },
        children: n
            ? (0, i.jsx)(f.I, {
                  autoFocus: r,
                  query: l,
                  onChange: a,
                  onClear: () => a(""),
                  placeholder: z.intl.string(z.t.Sojqsr),
                  "aria-label": z.intl.string(z.t.Sojqsr),
              })
            : (0, i.jsx)(p.E, {
                  variant: "body-md/normal",
                  color: "text-subtle",
                  children: z.intl.string(e === T.Nj.ADD_ROLE ? z.t.v65TBm : z.t["2U13qa"]),
              }),
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, userIds: n, transitionState: l, onClose: o } = t,
                [f, B] = r.useState(T.Nj.ADD_ROLE),
                [K, U] = r.useState(""),
                [V, X] = r.useState(!0),
                [H, Y] = r.useState(() => ({ [T.Nj.ADD_ROLE]: new Set(), [T.Nj.REMOVE_ROLE]: new Set() })),
                G = (0, c.cf)(
                    [R.Ay],
                    () => {
                        let t = {};
                        for (let i of n)
                            R.Ay.getMember(e, i)?.roles.forEach((e) => {
                                t[e] = (t[e] ?? 0) + 1;
                            });
                        return t;
                    },
                    [e, n],
                ),
                [J, Z] = r.useState(null),
                Q = r.useCallback((t) => J?.openUserList(t.currentTarget), [J]),
                W = (0, c.yK)([P.default], () => [...n].map((t) => P.default.getUser(t)).filter(C.Vq), [n]),
                F = (0, c.yK)([R.Ay], () => W.slice(0, 3).map((t) => R.Ay.getNick(e, t.id) ?? L.Ay.getName(t)), [e, W]),
                $ = (0, c.yK)(
                    [D.A, v.A, N.A],
                    () => {
                        let t = v.A.getGuild(e);
                        if (null == t) return [];
                        let n = N.A.getHighestRole(t);
                        return D.A.getSortedRoles(e).filter((e) => (0, y.m)(t, n, e));
                    },
                    [e],
                ),
                tt = (0, c.bG)([x.Ay], () => x.Ay.roleStyle),
                te = (0, _.Ay)(e, null),
                tn = r.useMemo(
                    () =>
                        new Map(
                            $.map((t) => {
                                var e;
                                let n, r;
                                return [
                                    t.id,
                                    ((e = "dot" === tt),
                                    (n = t.colorString ?? M.TpD),
                                    (r = te ? t.colorStrings : null),
                                    function (t) {
                                        let { className: l } = t;
                                        return (0, i.jsx)("span", {
                                            className: a()(l, I.S),
                                            "aria-hidden": !0,
                                            children: e
                                                ? (0, i.jsx)(g.W, { color: n, colors: r, background: !1, tooltip: !1 })
                                                : (0, i.jsx)(g.R, { color: n, colors: r ?? null }),
                                        });
                                    }),
                                ];
                            }),
                        ),
                    [$, tt, te],
                ),
                ti = r.useMemo(() => (f === T.Nj.ADD_ROLE ? $ : $.filter((t) => (G[t.id] ?? 0) > 0)), [f, $, G]),
                tr = r.useMemo(
                    () => ("" === K ? ti : ti.filter((t) => s()(K.toLowerCase(), t.name.toLowerCase()))),
                    [ti, K],
                ),
                tl = r.useMemo(() => ti.filter((t) => H[f].has(t.id)), [ti, H, f]),
                ta = tl.length >= 10;
            function to() {
                return (0, i.jsx)(q, {
                    action: f,
                    hasRoles: ti.length > 0,
                    autoFocusSearch: V,
                    searchQuery: K,
                    onSearchChange: U,
                });
            }
            let ts = null;
            return (
                ti.length > 0 && 0 === tr.length
                    ? (ts = z.intl.string(z.t["Xe+fJM"]))
                    : ti.length > 0 &&
                      (ts = (0, i.jsx)(m.B, {
                          direction: "vertical",
                          gap: 12,
                          role: "group",
                          "aria-label": z.intl.string(f === T.Nj.ADD_ROLE ? z.t["/LCz1j"] : z.t.xdpeXG),
                          children: tr.map((t) =>
                              (0, i.jsx)(
                                  S.S,
                                  {
                                      label: t.name,
                                      leadingIcon: tn.get(t.id),
                                      description:
                                          f === T.Nj.REMOVE_ROLE
                                              ? z.intl.formatToPlainString(z.t.Pb7gE6, {
                                                    held: G[t.id] ?? 0,
                                                    total: n.size,
                                                })
                                              : void 0,
                                      checked: H[f].has(t.id),
                                      disabled: ta && !H[f].has(t.id),
                                      onChange: (e) => {
                                          var n;
                                          return (
                                              (n = t.id),
                                              void Y((t) => {
                                                  let i = new Set(t[f]);
                                                  return (e ? i.add(n) : i.delete(n), { ...t, [f]: i });
                                              })
                                          );
                                      },
                                  },
                                  t.id,
                              ),
                          ),
                      })),
                (0, i.jsx)(u.a, {
                    transitionState: l,
                    onClose: o,
                    title: z.intl.formatToPlainString(z.t.maeAjm, { count: n.size }),
                    notice: ta
                        ? { type: "info", role: "status", message: z.intl.formatToPlainString(z.t.ydcz2f, { max: 10 }) }
                        : void 0,
                    input: (0, i.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, i.jsxs)(m.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "center",
                                children: [
                                    (0, i.jsx)(d.A, {
                                        ref: Z,
                                        users: W,
                                        maxUsers: 3,
                                        guildId: e,
                                        size: w._3.SIZE_20,
                                        "aria-label": z.intl.string(z.t.t6QKaP),
                                    }),
                                    (0, i.jsxs)(p.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: [
                                            (0, i.jsxs)(j.A, { children: [z.intl.string(z.t.sqCqvs), " "] }),
                                            (function (t, e, n) {
                                                let [i, r, l] = t;
                                                return e <= 3 && t.length === e
                                                    ? 1 === e
                                                        ? z.intl.formatToPlainString(z.t["J+Wpst"], { first: i })
                                                        : 2 === e
                                                          ? z.intl.formatToPlainString(z.t.gwRP0Y, {
                                                                first: i,
                                                                second: r,
                                                            })
                                                          : z.intl.formatToPlainString(z.t.QDB5et, {
                                                                first: i,
                                                                second: r,
                                                                third: l,
                                                            })
                                                    : z.intl.format(z.t.Xj4dhN, {
                                                          first: i,
                                                          second: r,
                                                          count: e - 2,
                                                          onOpen: n,
                                                      });
                                            })(F, n.size, Q),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(A.t, {
                                "aria-label": z.intl.string(z.t.HLUgs8),
                                selectedId: f,
                                onChange: (t) => {
                                    (X(!1), B(t));
                                },
                                items: [
                                    { id: T.Nj.ADD_ROLE, label: z.intl.string(z.t.OYkgVk), panel: to },
                                    { id: T.Nj.REMOVE_ROLE, label: z.intl.string(z.t.N86XcP), panel: to },
                                ],
                            }),
                        ],
                    }),
                    actions: [
                        { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: o },
                        {
                            variant: f === T.Nj.ADD_ROLE ? "primary" : "critical-primary",
                            text: z.intl.formatToPlainString(f === T.Nj.ADD_ROLE ? z.t["nHzh/X"] : z.t.K3ZhuJ, {
                                count: tl.length,
                            }),
                            disabled: 0 === tl.length,
                            onClick: function () {
                                let t = [...n];
                                (O.default.track(M.HAw.BULK_MODERATION_ACTION_STARTED, {
                                    ...(0, E.H$)(e),
                                    action_type: f,
                                    target_user_ids: t,
                                    mod_user_id: b.default.getId(),
                                    location: "MemberSafetyPageActionNotice",
                                }),
                                    (async function (t, e, n, i) {
                                        (0, h.P0)({ text: z.intl.string(z.t["JZ0+/0"]) });
                                        try {
                                            !(function (t) {
                                                let { succeeded: e, failed: n } = t;
                                                0 === e
                                                    ? (0, h.P0)({
                                                          text: z.intl.string(z.t.aYi2eS),
                                                          variant: "critical",
                                                      })
                                                    : n > 0
                                                      ? (0, h.P0)({
                                                            text: z.intl.formatToPlainString(z.t.XGfY0Z, {
                                                                succeeded: e,
                                                                failed: n,
                                                            }),
                                                        })
                                                      : (0, h.P0)({
                                                            text: z.intl.formatToPlainString(z.t.MWvxdK, { count: e }),
                                                            variant: "success",
                                                        });
                                            })(await (0, k.V)(t, e, n, i));
                                        } catch {
                                            (0, h.P0)({ text: z.intl.string(z.t.aYi2eS), variant: "critical" });
                                        }
                                    })(
                                        e,
                                        tl.map((t) => t.id),
                                        f,
                                        t,
                                    ),
                                    o());
                            },
                        },
                    ],
                    children: ts,
                })
            );
        },
    },
);
