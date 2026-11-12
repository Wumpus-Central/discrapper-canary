var i = n(477900),
    a = n(582128),
    l = n(503698),
    r = n.n(l),
    o = n(91871),
    s = n.n(o),
    c = n(855986),
    d = n(342952),
    u = n(189213),
    g = n(545442),
    h = n(858899),
    m = n(331322),
    f = n(683438),
    j = n(834730),
    p = n(95362),
    x = n(150934),
    S = n(140735),
    A = n(148149),
    y = n(775602),
    E = n(149468),
    b = n(266891),
    _ = n(676608),
    N = n(46653),
    R = n(696451),
    C = n(317525),
    D = n(71393),
    v = n(576705),
    O = n(287809),
    L = n(129230),
    P = n(403362),
    k = n(427262),
    T = n(504049),
    M = n(543079),
    w = n(652215),
    I = n(778712),
    q = n(792996),
    z = n(911888);
function B(t) {
    let { action: e, hasRoles: n, autoFocusSearch: a, searchQuery: l, onSearchChange: r } = t;
    return (0, i.jsx)(m.B, {
        direction: "vertical",
        padding: { top: "md" },
        children: n
            ? (0, i.jsx)(f.I, {
                  autoFocus: a,
                  query: l,
                  onChange: r,
                  onClear: () => r(""),
                  placeholder: q.intl.string(q.t.Sojqsr),
                  "aria-label": q.intl.string(q.t.Sojqsr),
              })
            : (0, i.jsx)(j.E, {
                  variant: "body-md/normal",
                  color: "text-subtle",
                  children: q.intl.string(e === T.Nj.ADD_ROLE ? q.t.v65TBm : q.t["2U13qa"]),
              }),
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, userIds: n, transitionState: l, onClose: o } = t,
                [f, H] = a.useState(T.Nj.ADD_ROLE),
                [K, V] = a.useState(""),
                [U, X] = a.useState(!0),
                [Y, G] = a.useState(() => ({ [T.Nj.ADD_ROLE]: new Set(), [T.Nj.REMOVE_ROLE]: new Set() })),
                J = (0, c.cf)(
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
                [Z, Q] = a.useState(null),
                W = a.useCallback((t) => Z?.openUserList(t.currentTarget), [Z]),
                F = (0, c.yK)([O.default], () => [...n].map((t) => O.default.getUser(t)).filter(P.Vq), [n]),
                $ = (0, c.yK)([R.Ay], () => F.slice(0, 3).map((t) => R.Ay.getNick(e, t.id) ?? k.Ay.getName(t)), [e, F]),
                tt = (0, c.yK)(
                    [C.A, D.A, v.A],
                    () => {
                        let t = D.A.getGuild(e);
                        if (null == t) return [];
                        let n = v.A.getHighestRole(t);
                        return C.A.getSortedRoles(e).filter((e) => (0, b.m)(t, n, e));
                    },
                    [e],
                ),
                te = (0, c.bG)([y.Ay], () => y.Ay.roleStyle),
                tn = (0, _.Ay)(e, null),
                ti = a.useMemo(
                    () =>
                        new Map(
                            tt.map((t) => {
                                var e;
                                let n, a;
                                return [
                                    t.id,
                                    ((e = "dot" === te),
                                    (n = t.colorString ?? w.TpD),
                                    (a = tn ? t.colorStrings : null),
                                    function (t) {
                                        let { className: l } = t;
                                        return (0, i.jsx)("span", {
                                            className: r()(l, z.SI),
                                            "aria-hidden": !0,
                                            children: e
                                                ? (0, i.jsx)(g.W, { color: n, colors: a, background: !1, tooltip: !1 })
                                                : (0, i.jsx)(g.R, { color: n, colors: a ?? null }),
                                        });
                                    }),
                                ];
                            }),
                        ),
                    [tt, te, tn],
                ),
                ta = a.useMemo(() => (f === T.Nj.ADD_ROLE ? tt : tt.filter((t) => (J[t.id] ?? 0) > 0)), [f, tt, J]),
                tl = a.useMemo(
                    () => ("" === K ? ta : ta.filter((t) => s()(K.toLowerCase(), t.name.toLowerCase()))),
                    [ta, K],
                ),
                tr = a.useMemo(() => ta.filter((t) => Y[f].has(t.id)), [ta, Y, f]),
                to = tr.length >= 10;
            function ts() {
                return (0, i.jsx)(B, {
                    action: f,
                    hasRoles: ta.length > 0,
                    autoFocusSearch: U,
                    searchQuery: K,
                    onSearchChange: V,
                });
            }
            let tc = null;
            return (
                ta.length > 0 && 0 === tl.length
                    ? (tc = q.intl.string(q.t["Xe+fJM"]))
                    : ta.length > 0 &&
                      (tc = (0, i.jsx)(p.Ip, {
                          className: z.r9,
                          children: (0, i.jsx)(m.B, {
                              direction: "vertical",
                              gap: 12,
                              role: "group",
                              "aria-label": q.intl.string(f === T.Nj.ADD_ROLE ? q.t["/LCz1j"] : q.t.xdpeXG),
                              children: tl.map((t) =>
                                  (0, i.jsx)(
                                      x.S,
                                      {
                                          label:
                                              f === T.Nj.REMOVE_ROLE
                                                  ? q.intl.format(q.t["0Cbkgq"], {
                                                        roleName: t.name,
                                                        held: J[t.id] ?? 0,
                                                        total: n.size,
                                                        countHook: (t) =>
                                                            (0, i.jsx)(j.E, {
                                                                tag: "span",
                                                                variant: "body-md/normal",
                                                                color: "text-subtle",
                                                                "aria-hidden": !0,
                                                                children: t,
                                                            }),
                                                        accessibleCountHook: (t) => (0, i.jsx)(S.A, { children: t }),
                                                    })
                                                  : t.name,
                                          leadingIcon: ti.get(t.id),
                                          checked: Y[f].has(t.id),
                                          disabled: to && !Y[f].has(t.id),
                                          onChange: (e) => {
                                              var n;
                                              return (
                                                  (n = t.id),
                                                  void G((t) => {
                                                      let i = new Set(t[f]);
                                                      return (e ? i.add(n) : i.delete(n), { ...t, [f]: i });
                                                  })
                                              );
                                          },
                                      },
                                      t.id,
                                  ),
                              ),
                          }),
                      })),
                (0, i.jsx)(u.a, {
                    transitionState: l,
                    onClose: o,
                    title: q.intl.formatToPlainString(q.t.maeAjm, { count: n.size }),
                    notice: to
                        ? { type: "info", role: "status", message: q.intl.formatToPlainString(q.t.ydcz2f, { max: 10 }) }
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
                                        ref: Q,
                                        users: F,
                                        maxUsers: 3,
                                        guildId: e,
                                        size: I._3.SIZE_20,
                                        "aria-label": q.intl.string(q.t.t6QKaP),
                                    }),
                                    (0, i.jsxs)(j.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: z.IV,
                                        lineClamp: 1,
                                        title: $.join(", "),
                                        children: [
                                            (0, i.jsxs)(S.A, { children: [q.intl.string(q.t.sqCqvs), " "] }),
                                            (function (t, e, n) {
                                                let [i, a, l] = t;
                                                return e <= 3 && t.length === e
                                                    ? 1 === e
                                                        ? q.intl.formatToPlainString(q.t["J+Wpst"], { first: i })
                                                        : 2 === e
                                                          ? q.intl.formatToPlainString(q.t.gwRP0Y, {
                                                                first: i,
                                                                second: a,
                                                            })
                                                          : q.intl.formatToPlainString(q.t.QDB5et, {
                                                                first: i,
                                                                second: a,
                                                                third: l,
                                                            })
                                                    : q.intl.format(q.t.Xj4dhN, {
                                                          first: i,
                                                          second: a,
                                                          count: e - 2,
                                                          onOpen: n,
                                                      });
                                            })($, n.size, W),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(A.t, {
                                "aria-label": q.intl.string(q.t.HLUgs8),
                                selectedId: f,
                                onChange: (t) => {
                                    (X(!1), H(t));
                                },
                                items: [
                                    { id: T.Nj.ADD_ROLE, label: q.intl.string(q.t.OYkgVk), panel: ts },
                                    { id: T.Nj.REMOVE_ROLE, label: q.intl.string(q.t.N86XcP), panel: ts },
                                ],
                            }),
                        ],
                    }),
                    actions: [
                        { variant: "secondary", text: q.intl.string(q.t["ETE/oC"]), onClick: o },
                        {
                            variant: f === T.Nj.ADD_ROLE ? "primary" : "critical-primary",
                            text: q.intl.formatToPlainString(f === T.Nj.ADD_ROLE ? q.t["nHzh/X"] : q.t.K3ZhuJ, {
                                count: tr.length,
                            }),
                            disabled: 0 === tr.length,
                            onClick: function () {
                                let t = [...n];
                                (L.default.track(w.HAw.BULK_MODERATION_ACTION_STARTED, {
                                    ...(0, E.H$)(e),
                                    action_type: f,
                                    target_user_ids: t,
                                    mod_user_id: N.default.getId(),
                                    location: "MemberSafetyPageActionNotice",
                                }),
                                    (async function (t, e, n, i) {
                                        (0, h.P0)({ text: q.intl.string(q.t["JZ0+/0"]) });
                                        try {
                                            !(function (t) {
                                                let { succeeded: e, failed: n } = t;
                                                0 === e
                                                    ? (0, h.P0)({
                                                          text: q.intl.string(q.t.aYi2eS),
                                                          variant: "critical",
                                                      })
                                                    : n > 0
                                                      ? (0, h.P0)({
                                                            text: q.intl.formatToPlainString(q.t.XGfY0Z, {
                                                                succeeded: e,
                                                                failed: n,
                                                            }),
                                                        })
                                                      : (0, h.P0)({
                                                            text: q.intl.formatToPlainString(q.t.MWvxdK, { count: e }),
                                                            variant: "success",
                                                        });
                                            })(await (0, M.V)(t, e, n, i));
                                        } catch {
                                            (0, h.P0)({ text: q.intl.string(q.t.aYi2eS), variant: "critical" });
                                        }
                                    })(
                                        e,
                                        tr.map((t) => t.id),
                                        f,
                                        t,
                                    ),
                                    o());
                            },
                        },
                    ],
                    children: tc,
                })
            );
        },
    },
);
