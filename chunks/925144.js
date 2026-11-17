var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(91871),
    s = n.n(o),
    c = n(855986),
    d = n(342952),
    u = n(189213),
    g = n(545442),
    h = n(858899),
    m = n(331322),
    j = n(683438),
    p = n(834730),
    f = n(95362),
    A = n(150934),
    x = n(140735),
    S = n(148149),
    E = n(775602),
    y = n(149468),
    b = n(266891),
    _ = n(676608),
    N = n(46653),
    R = n(696451),
    C = n(317525),
    D = n(71393),
    O = n(576705),
    L = n(287809),
    k = n(129230),
    v = n(403362),
    T = n(427262),
    M = n(504049),
    w = n(543079),
    I = n(782513),
    P = n(652215),
    q = n(778712),
    z = n(792996),
    B = n(911888);
function H(t) {
    let { action: e, hasRoles: n, autoFocusSearch: l, searchQuery: a, onSearchChange: r } = t;
    return (0, i.jsx)(m.B, {
        direction: "vertical",
        padding: { top: "md" },
        children: n
            ? (0, i.jsx)(j.I, {
                  autoFocus: l,
                  query: a,
                  onChange: r,
                  onClear: () => r(""),
                  placeholder: z.intl.string(z.t.Sojqsr),
                  "aria-label": z.intl.string(z.t.Sojqsr),
              })
            : (0, i.jsx)(p.E, {
                  variant: "body-md/normal",
                  color: "text-subtle",
                  children: z.intl.string(e === M.Nj.ADD_ROLE ? z.t.v65TBm : z.t["2U13qa"]),
              }),
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, userIds: n, transitionState: a, onClose: o } = t,
                [j, V] = l.useState(M.Nj.ADD_ROLE),
                [K, U] = l.useState(""),
                [J, X] = l.useState(!0),
                [G, Q] = l.useState(() => ({ [M.Nj.ADD_ROLE]: new Set(), [M.Nj.REMOVE_ROLE]: new Set() })),
                Z = (0, c.cf)(
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
                [F, W] = l.useState(null),
                Y = l.useCallback((t) => F?.openUserList(t.currentTarget), [F]),
                $ = (0, c.yK)([L.default], () => [...n].map((t) => L.default.getUser(t)).filter(v.Vq), [n]),
                tt = (0, c.yK)([R.Ay], () => $.slice(0, 3).map((t) => R.Ay.getNick(e, t.id) ?? T.Ay.getName(t)), [
                    e,
                    $,
                ]),
                te = (0, c.yK)(
                    [C.A, D.A, O.A],
                    () => {
                        let t = D.A.getGuild(e);
                        if (null == t) return [];
                        let n = O.A.getHighestRole(t);
                        return C.A.getSortedRoles(e).filter((e) => (0, b.m)(t, n, e));
                    },
                    [e],
                ),
                tn = (0, c.bG)([E.Ay], () => E.Ay.roleStyle),
                ti = (0, _.Ay)(e, null),
                tl = l.useMemo(
                    () =>
                        new Map(
                            te.map((t) => {
                                var e;
                                let n, l;
                                return [
                                    t.id,
                                    ((e = "dot" === tn),
                                    (n = t.colorString ?? P.TpD),
                                    (l = ti ? t.colorStrings : null),
                                    function (t) {
                                        let { className: a } = t;
                                        return (0, i.jsx)("span", {
                                            className: r()(a, B.SI),
                                            "aria-hidden": !0,
                                            children: e
                                                ? (0, i.jsx)(g.W, { color: n, colors: l, background: !1, tooltip: !1 })
                                                : (0, i.jsx)(g.R, { color: n, colors: l ?? null }),
                                        });
                                    }),
                                ];
                            }),
                        ),
                    [te, tn, ti],
                ),
                ta = l.useMemo(() => (j === M.Nj.ADD_ROLE ? te : te.filter((t) => (Z[t.id] ?? 0) > 0)), [j, te, Z]),
                tr = l.useMemo(
                    () => ("" === K ? ta : ta.filter((t) => s()(K.toLowerCase(), t.name.toLowerCase()))),
                    [ta, K],
                ),
                to = l.useMemo(() => ta.filter((t) => G[j].has(t.id)), [ta, G, j]),
                ts = to.length >= 10;
            function tc() {
                return (0, i.jsx)(H, {
                    action: j,
                    hasRoles: ta.length > 0,
                    autoFocusSearch: J,
                    searchQuery: K,
                    onSearchChange: U,
                });
            }
            let td = null;
            return (
                ta.length > 0 && 0 === tr.length
                    ? (td = z.intl.string(z.t["Xe+fJM"]))
                    : ta.length > 0 &&
                      (td = (0, i.jsx)(f.Ip, {
                          className: B.r9,
                          children: (0, i.jsx)(m.B, {
                              direction: "vertical",
                              gap: 12,
                              role: "group",
                              "aria-label": z.intl.string(j === M.Nj.ADD_ROLE ? z.t["/LCz1j"] : z.t.xdpeXG),
                              children: tr.map((t) =>
                                  (0, i.jsx)(
                                      A.S,
                                      {
                                          label:
                                              j === M.Nj.REMOVE_ROLE
                                                  ? z.intl.format(z.t["0Cbkgq"], {
                                                        roleName: t.name,
                                                        held: Z[t.id] ?? 0,
                                                        total: n.size,
                                                        countHook: (t) =>
                                                            (0, i.jsx)(p.E, {
                                                                tag: "span",
                                                                variant: "body-md/normal",
                                                                color: "text-subtle",
                                                                "aria-hidden": !0,
                                                                children: t,
                                                            }),
                                                        accessibleCountHook: (t) => (0, i.jsx)(x.A, { children: t }),
                                                    })
                                                  : t.name,
                                          leadingIcon: tl.get(t.id),
                                          checked: G[j].has(t.id),
                                          disabled: ts && !G[j].has(t.id),
                                          onChange: (e) => {
                                              var n;
                                              return (
                                                  (n = t.id),
                                                  void Q((t) => {
                                                      let i = new Set(t[j]);
                                                      return (e ? i.add(n) : i.delete(n), { ...t, [j]: i });
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
                    transitionState: a,
                    onClose: o,
                    title: z.intl.formatToPlainString(z.t.maeAjm, { count: n.size }),
                    notice: ts
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
                                        ref: W,
                                        users: $,
                                        maxUsers: 3,
                                        guildId: e,
                                        size: q._3.SIZE_20,
                                        "aria-label": z.intl.string(z.t.t6QKaP),
                                    }),
                                    (0, i.jsxs)(p.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: B.IV,
                                        lineClamp: 1,
                                        title: tt.join(", "),
                                        children: [
                                            (0, i.jsxs)(x.A, { children: [z.intl.string(z.t.sqCqvs), " "] }),
                                            (function (t, e, n) {
                                                let [i, l, a] = t;
                                                return e <= 3 && t.length === e
                                                    ? 1 === e
                                                        ? z.intl.formatToPlainString(z.t["J+Wpst"], { first: i })
                                                        : 2 === e
                                                          ? z.intl.formatToPlainString(z.t.gwRP0Y, {
                                                                first: i,
                                                                second: l,
                                                            })
                                                          : z.intl.formatToPlainString(z.t.QDB5et, {
                                                                first: i,
                                                                second: l,
                                                                third: a,
                                                            })
                                                    : z.intl.format(z.t.Xj4dhN, {
                                                          first: i,
                                                          second: l,
                                                          count: e - 2,
                                                          onOpen: n,
                                                      });
                                            })(tt, n.size, Y),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(S.t, {
                                "aria-label": z.intl.string(z.t.HLUgs8),
                                selectedId: j,
                                onChange: (t) => {
                                    (X(!1), V(t));
                                },
                                items: [
                                    { id: M.Nj.ADD_ROLE, label: z.intl.string(z.t.OYkgVk), panel: tc },
                                    { id: M.Nj.REMOVE_ROLE, label: z.intl.string(z.t.N86XcP), panel: tc },
                                ],
                            }),
                        ],
                    }),
                    actions: [
                        { variant: "secondary", text: z.intl.string(z.t["ETE/oC"]), onClick: o },
                        {
                            variant: j === M.Nj.ADD_ROLE ? "primary" : "critical-primary",
                            text: z.intl.formatToPlainString(j === M.Nj.ADD_ROLE ? z.t["nHzh/X"] : z.t.K3ZhuJ, {
                                count: to.length,
                            }),
                            disabled: 0 === to.length,
                            onClick: function () {
                                let t = [...n];
                                (k.default.track(P.HAw.BULK_MODERATION_ACTION_STARTED, {
                                    ...(0, y.H$)(e),
                                    action_type: j,
                                    target_user_ids: t,
                                    mod_user_id: N.default.getId(),
                                    location: "MemberSafetyPageActionNotice",
                                }),
                                    (async function (t, e, n, i) {
                                        ((0, h.P0)({ text: z.intl.string(z.t["JZ0+/0"]) }),
                                            await (0, I.cd)((0, w.V)(t, e, n, i), (0, I.J9)()));
                                    })(
                                        e,
                                        to.map((t) => t.id),
                                        j,
                                        t,
                                    ),
                                    o());
                            },
                        },
                    ],
                    children: td,
                })
            );
        },
    },
);
