n.d(t, { Z: () => T }), n(975844), n(388685), n(642613);
var i = n(951288),
    r = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(907862),
    c = n(28664),
    d = n(481060),
    u = n(749210),
    p = n(367907),
    m = n(895924),
    b = n(581364),
    g = n(929507),
    f = n(997787),
    h = n(314897),
    x = n(485386),
    j = n(430824),
    v = n(594174),
    O = n(626135),
    y = n(5192),
    _ = n(709054),
    C = n(145260),
    N = n(905753),
    S = n(399860),
    w = n(335049),
    P = n(617012),
    I = n(981631),
    E = n(388032),
    Z = n(547063);
function T(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: l,
            noneSelectedText: s,
            overwrites: c,
            hasAccessToMutatePermissions: p,
        } = e,
        g = (0, o.e7)([j.Z], () => j.Z.getGuild(l));
    a()(null != g, "");
    let h = (0, o.e7)([x.Z], () => x.Z.getSortedRoles(l)),
        [O, w] = r.useState(new Set()),
        P = r.useMemo(() => {
            let e = (0, b.bD)(l),
                t = h.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(c)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let r = n.type - i.type;
                    if (0 !== r) return r;
                    switch (n.type) {
                        case m.Kw.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let r = v.default.getUser(e.id),
                                    l = v.default.getUser(t.id);
                                if (null != r && null != l) {
                                    let e = y.ZP.getName(n, void 0, r),
                                        t = y.ZP.getName(n, void 0, l);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return _.default.compare(e.id, t.id);
                            })(n, i, l);
                        case m.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (i.id === l) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case m.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let a = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== a ? a : _.default.compare(n.id, i.id);
                    }
                });
        }, [l, c, h]),
        I = r.useCallback(
            (e, t) => {
                n({}, [(0, S.rE)(e, t)]);
            },
            [n],
        ),
        E = r.useCallback(
            (e, t, i) => {
                let r = (0, S.rE)(e, t);
                null != c[r] &&
                    n(
                        {
                            [r]: {
                                id: e,
                                permission: i,
                                type: t,
                            },
                        },
                        [],
                    );
            },
            [n, c],
        );
    r.useEffect(() => {
        let e = Object.values(c)
            .filter((e) => e.type === m.Kw.USER && !e.canRead && !O.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.Z.requestMembersById(l, e, !1), w((t) => new Set([...t, ...e])));
    }, [l, c, O, w]);
    let T = (0, o.e7)([N.Z], () => N.Z.getApplicationId()),
        A = (0, o.e7)([C.default], () =>
            null == T
                ? void 0
                : C.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === T;
                  }),
        ),
        D = (0, o.e7)([f.Z], () => void 0 !== A && f.Z.canShowToggleTooltip(A.id));
    return P.length > 0
        ? P.map((e) =>
              (0, i.jsx)(
                  k,
                  {
                      guild: g,
                      commandId: t,
                      onChange: (t) => E(e.id, e.type, t),
                      onRemove: () => I(e.id, e.type),
                      overwrite: e,
                      integration: A,
                      canShowMigrationTooltip: D,
                      hasAccessToMutatePermissions: p,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: Z.noItemsSelected,
              children: (0, i.jsx)(d.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: s,
              }),
          });
}
function k(e) {
    var t, n, l;
    let a,
        {
            guild: o,
            commandId: d,
            onChange: u,
            onRemove: f,
            overwrite: x,
            integration: j,
            canShowMigrationTooltip: v,
            hasAccessToMutatePermissions: y,
        } = e,
        _ = x.id === o.id || x.id === (0, b.bD)(o.id),
        C = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        N = !x.canWrite || !y,
        S = h.default.getId();
    y
        ? x.canWrite ||
          (x.type === m.Kw.USER
              ? (a = x.id === S ? E.intl.string(E.t["1VF/09"]) : E.intl.string(E.t.P1GnER))
              : x.type === m.Kw.ROLE && (a = E.intl.string(E.t.mcAijY)))
        : (a = null != d ? E.intl.string(E.t.tybdam) : E.intl.string(E.t.z2hjk5));
    let T = v && null != j && x.id === o.id && void 0 !== C && !x.permission;
    r.useEffect(() => {
        if (T) {
            var e, t, n;
            O.default.track(
                I.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, (0, p.hH)(o.id))),
                (n = n =
                    {
                        application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                        location: "toggle",
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        }
    }, [o.id, null == j || null == (l = j.application) ? void 0 : l.id, T]);
    let k = r.useRef(null),
        D = (0, i.jsx)(c.u, {
            text: a,
            shouldShow: N,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: k,
                children: (0, i.jsx)(P.Z, {
                    isDisabled: N,
                    currentValue: x.permission,
                    onChange: T
                        ? (e) => {
                              g.Z.dismissToggleTooltip(o.id, j), u(e);
                          }
                        : u,
                }),
            }),
        }),
        R = (0, i.jsx)(s.J2, {
            targetElementRef: k,
            title: E.intl.string(E.t.ufFDiI),
            body: E.intl.format(E.t.pW4Cr6, {
                botName: C,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                g.Z.dismissToggleTooltip(o.id, j);
            },
        });
    return (0, i.jsxs)(
        "div",
        {
            className: Z.entryItem,
            children: [
                (0, i.jsx)("div", {
                    className: Z.entryName,
                    children: (0, i.jsx)(w.Z, {
                        guild: o,
                        id: x.id,
                        type: x.type,
                        isLocked: N,
                        lockTooltipText: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: Z.entryActions,
                    children: [
                        (0, i.jsx)(A, {
                            commandId: d,
                            isSentinel: _,
                            isDisabled: !y,
                            onRemove: f,
                        }),
                        D,
                        T && R,
                    ],
                }),
            ],
        },
        x.id,
    );
}
function A(e) {
    let { commandId: t, isSentinel: n, isDisabled: r, onRemove: l } = e;
    return r
        ? null
        : null == t && n
          ? null
          : (0, i.jsx)("div", {
                className: Z.removeActions,
                children: (0, i.jsx)(d.P3F, {
                    className: Z.removeContainer,
                    "aria-label": E.intl.string(E.t.mT0CQE),
                    onClick: l,
                    children: (0, i.jsx)(d.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: Z.removeIcon,
                    }),
                }),
            });
}
