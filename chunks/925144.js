var i = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(91871),
    s = n.n(o),
    c = n(136722),
    d = n(855986),
    u = n(342952),
    g = n(189213),
    A = n(545442),
    E = n(858899),
    h = n(331322),
    m = n(683438),
    S = n(834730),
    x = n(95362),
    p = n(150934),
    j = n(140735),
    N = n(148149),
    _ = n(775602),
    f = n(149468),
    M = n(266891),
    R = n(676608),
    y = n(46653),
    B = n(696451),
    D = n(317525),
    b = n(71393),
    O = n(576705),
    C = n(287809),
    L = n(129230),
    T = n(403362),
    I = n(427262),
    k = n(504049),
    G = n(543079),
    v = n(782513),
    w = n(652215),
    P = n(778712),
    H = n(792996),
    K = n(911888);
let q = c.kg(
    w.xBc.KICK_MEMBERS,
    w.xBc.BAN_MEMBERS,
    w.xBc.ADMINISTRATOR,
    w.xBc.MANAGE_CHANNELS,
    w.xBc.MANAGE_GUILD,
    w.xBc.MANAGE_ROLES,
    w.xBc.MANAGE_MESSAGES,
    w.xBc.MANAGE_WEBHOOKS,
    w.xBc.MANAGE_EVENTS,
    w.xBc.MANAGE_THREADS,
    w.xBc.MODERATE_MEMBERS,
    w.xBc.MANAGE_OFFICIAL_MESSAGES,
);
function z(t) {
    let { action: e, hasRoles: n, autoFocusSearch: l, searchQuery: a, onSearchChange: r } = t;
    return (0, i.jsx)(h.B, {
        direction: "vertical",
        padding: { top: "md" },
        children: n
            ? (0, i.jsx)(m.I, {
                  autoFocus: l,
                  query: a,
                  onChange: r,
                  onClear: () => r(""),
                  placeholder: H.intl.string(H.t.Sojqsr),
                  "aria-label": H.intl.string(H.t.Sojqsr),
              })
            : (0, i.jsx)(S.E, {
                  variant: "body-md/normal",
                  color: "text-subtle",
                  children: H.intl.string(e === k.Nj.ADD_ROLE ? H.t.v65TBm : H.t["2U13qa"]),
              }),
    });
}
n.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, userIds: n, transitionState: a, onClose: o } = t,
                [m, U] = l.useState(k.Nj.ADD_ROLE),
                [V, X] = l.useState(""),
                [J, F] = l.useState(!0),
                [Q, W] = l.useState(() => ({ [k.Nj.ADD_ROLE]: new Set(), [k.Nj.REMOVE_ROLE]: new Set() })),
                Z = (0, d.cf)(
                    [B.Ay],
                    () => {
                        let t = {};
                        for (let i of n)
                            B.Ay.getMember(e, i)?.roles.forEach((e) => {
                                t[e] = (t[e] ?? 0) + 1;
                            });
                        return t;
                    },
                    [e, n],
                ),
                [Y, $] = l.useState(null),
                tt = l.useCallback((t) => Y?.openUserList(t.currentTarget), [Y]),
                te = (0, d.yK)([C.default], () => [...n].map((t) => C.default.getUser(t)).filter(T.Vq), [n]),
                tn = (0, d.yK)([B.Ay], () => te.slice(0, 3).map((t) => B.Ay.getNick(e, t.id) ?? I.Ay.getName(t)), [
                    e,
                    te,
                ]),
                ti = (0, d.yK)(
                    [D.A, b.A, O.A],
                    () => {
                        let t = b.A.getGuild(e);
                        if (null == t) return [];
                        let n = O.A.getHighestRole(t),
                            i = O.A.can(w.xBc.MANAGE_GUILD, t);
                        return D.A.getSortedRoles(e).filter((e) => (0, M.m)(t, n, e) && (i || !c.X8(e.permissions, q)));
                    },
                    [e],
                ),
                tl = (0, d.bG)([_.Ay], () => _.Ay.roleStyle),
                ta = (0, R.Ay)(e, null),
                tr = l.useMemo(
                    () =>
                        new Map(
                            ti.map((t) => {
                                var e;
                                let n, l;
                                return [
                                    t.id,
                                    ((e = "dot" === tl),
                                    (n = t.colorString ?? w.TpD),
                                    (l = ta ? t.colorStrings : null),
                                    function (t) {
                                        let { className: a } = t;
                                        return (0, i.jsx)("span", {
                                            className: r()(a, K.SI),
                                            "aria-hidden": !0,
                                            children: e
                                                ? (0, i.jsx)(A.W, { color: n, colors: l, background: !1, tooltip: !1 })
                                                : (0, i.jsx)(A.R, { color: n, colors: l ?? null }),
                                        });
                                    }),
                                ];
                            }),
                        ),
                    [ti, tl, ta],
                ),
                to = l.useMemo(() => (m === k.Nj.ADD_ROLE ? ti : ti.filter((t) => (Z[t.id] ?? 0) > 0)), [m, ti, Z]),
                ts = l.useMemo(
                    () => ("" === V ? to : to.filter((t) => s()(V.toLowerCase(), t.name.toLowerCase()))),
                    [to, V],
                ),
                tc = l.useMemo(() => to.filter((t) => Q[m].has(t.id)), [to, Q, m]),
                td = tc.length >= 10;
            function tu() {
                return (0, i.jsx)(z, {
                    action: m,
                    hasRoles: to.length > 0,
                    autoFocusSearch: J,
                    searchQuery: V,
                    onSearchChange: X,
                });
            }
            let tg = null;
            return (
                to.length > 0 && 0 === ts.length
                    ? (tg = H.intl.string(H.t["Xe+fJM"]))
                    : to.length > 0 &&
                      (tg = (0, i.jsx)(x.Ip, {
                          className: K.r9,
                          children: (0, i.jsx)(h.B, {
                              direction: "vertical",
                              gap: 12,
                              role: "group",
                              "aria-label": H.intl.string(m === k.Nj.ADD_ROLE ? H.t["/LCz1j"] : H.t.xdpeXG),
                              children: ts.map((t) =>
                                  (0, i.jsx)(
                                      p.S,
                                      {
                                          label:
                                              m === k.Nj.REMOVE_ROLE
                                                  ? H.intl.format(H.t["0Cbkgq"], {
                                                        roleName: t.name,
                                                        held: Z[t.id] ?? 0,
                                                        total: n.size,
                                                        countHook: (t) =>
                                                            (0, i.jsx)(S.E, {
                                                                tag: "span",
                                                                variant: "body-md/normal",
                                                                color: "text-subtle",
                                                                "aria-hidden": !0,
                                                                children: t,
                                                            }),
                                                        accessibleCountHook: (t) => (0, i.jsx)(j.A, { children: t }),
                                                    })
                                                  : t.name,
                                          leadingIcon: tr.get(t.id),
                                          checked: Q[m].has(t.id),
                                          disabled: td && !Q[m].has(t.id),
                                          onChange: (e) => {
                                              var n;
                                              return (
                                                  (n = t.id),
                                                  void W((t) => {
                                                      let i = new Set(t[m]);
                                                      return (e ? i.add(n) : i.delete(n), { ...t, [m]: i });
                                                  })
                                              );
                                          },
                                      },
                                      t.id,
                                  ),
                              ),
                          }),
                      })),
                (0, i.jsx)(g.a, {
                    transitionState: a,
                    onClose: o,
                    title: H.intl.formatToPlainString(H.t.maeAjm, { count: n.size }),
                    notice: td
                        ? { type: "info", role: "status", message: H.intl.formatToPlainString(H.t.ydcz2f, { max: 10 }) }
                        : void 0,
                    input: (0, i.jsxs)(h.B, {
                        direction: "vertical",
                        gap: 16,
                        children: [
                            (0, i.jsxs)(h.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "center",
                                children: [
                                    (0, i.jsx)(u.A, {
                                        ref: $,
                                        users: te,
                                        maxUsers: 3,
                                        guildId: e,
                                        size: P._3.SIZE_20,
                                        "aria-label": H.intl.string(H.t.t6QKaP),
                                    }),
                                    (0, i.jsxs)(S.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        className: K.IV,
                                        lineClamp: 1,
                                        title: tn.join(", "),
                                        children: [
                                            (0, i.jsxs)(j.A, { children: [H.intl.string(H.t.sqCqvs), " "] }),
                                            (function (t, e, n) {
                                                let [i, l, a] = t;
                                                return e <= 3 && t.length === e
                                                    ? 1 === e
                                                        ? H.intl.formatToPlainString(H.t["J+Wpst"], { first: i })
                                                        : 2 === e
                                                          ? H.intl.formatToPlainString(H.t.gwRP0Y, {
                                                                first: i,
                                                                second: l,
                                                            })
                                                          : H.intl.formatToPlainString(H.t.QDB5et, {
                                                                first: i,
                                                                second: l,
                                                                third: a,
                                                            })
                                                    : H.intl.format(H.t.Xj4dhN, {
                                                          first: i,
                                                          second: l,
                                                          count: e - 2,
                                                          onOpen: n,
                                                      });
                                            })(tn, n.size, tt),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(N.t, {
                                "aria-label": H.intl.string(H.t.HLUgs8),
                                selectedId: m,
                                onChange: (t) => {
                                    (F(!1), U(t));
                                },
                                items: [
                                    { id: k.Nj.ADD_ROLE, label: H.intl.string(H.t.OYkgVk), panel: tu },
                                    { id: k.Nj.REMOVE_ROLE, label: H.intl.string(H.t.N86XcP), panel: tu },
                                ],
                            }),
                        ],
                    }),
                    actions: [
                        { variant: "secondary", text: H.intl.string(H.t["ETE/oC"]), onClick: o },
                        {
                            variant: m === k.Nj.ADD_ROLE ? "primary" : "critical-primary",
                            text: H.intl.formatToPlainString(m === k.Nj.ADD_ROLE ? H.t["nHzh/X"] : H.t.K3ZhuJ, {
                                count: tc.length,
                            }),
                            disabled: 0 === tc.length,
                            onClick: function () {
                                let t = [...n];
                                (L.default.track(w.HAw.BULK_MODERATION_ACTION_STARTED, {
                                    ...(0, f.H$)(e),
                                    action_type: m,
                                    target_user_ids: t,
                                    mod_user_id: y.default.getId(),
                                    location: "MemberSafetyPageActionNotice",
                                }),
                                    (async function (t, e, n, i) {
                                        ((0, E.P0)({ text: H.intl.string(H.t["JZ0+/0"]) }),
                                            await (0, v.cd)((0, G.V)(t, e, n, i), (0, v.J9)()));
                                    })(
                                        e,
                                        tc.map((t) => t.id),
                                        m,
                                        t,
                                    ),
                                    o());
                            },
                        },
                    ],
                    children: tg,
                })
            );
        },
    },
);
