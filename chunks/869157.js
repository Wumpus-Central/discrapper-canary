n.d(t, { Z: () => k }), n(975844), n(388685), n(642613);
var i = n(951288),
    r = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(907862),
    c = n(481060),
    d = n(749210),
    u = n(367907),
    p = n(895924),
    m = n(581364),
    b = n(929507),
    g = n(997787),
    f = n(314897),
    h = n(485386),
    x = n(430824),
    j = n(594174),
    v = n(626135),
    y = n(5192),
    O = n(709054),
    _ = n(360606),
    C = n(905753),
    N = n(399860),
    S = n(335049),
    Z = n(617012),
    w = n(981631),
    I = n(388032),
    P = n(547063);
function T(e) {
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
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: l,
            noneSelectedText: s,
            overwrites: u,
            hasAccessToMutatePermissions: b,
        } = e,
        f = (0, o.e7)([x.Z], () => x.Z.getGuild(l));
    a()(null != f, "");
    let v = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(l)),
        [S, Z] = r.useState(new Set()),
        w = r.useMemo(() => {
            let e = (0, m.bD)(l),
                t = v.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(u)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let r = n.type - i.type;
                    if (0 !== r) return r;
                    switch (n.type) {
                        case p.Kw.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let r = j.default.getUser(e.id),
                                    l = j.default.getUser(t.id);
                                if (null != r && null != l) {
                                    let e = y.ZP.getName(n, void 0, r),
                                        t = y.ZP.getName(n, void 0, l);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return O.default.compare(e.id, t.id);
                            })(n, i, l);
                        case p.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (i.id === l) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case p.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let a = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== a ? a : O.default.compare(n.id, i.id);
                    }
                });
        }, [l, u, v]),
        I = r.useCallback(
            (e, t) => {
                n({}, [(0, N.rE)(e, t)]);
            },
            [n],
        ),
        T = r.useCallback(
            (e, t, i) => {
                let r = (0, N.rE)(e, t);
                null != u[r] &&
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
            [n, u],
        );
    r.useEffect(() => {
        let e = Object.values(u)
            .filter((e) => e.type === p.Kw.USER && !e.canRead && !S.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (d.Z.requestMembersById(l, e, !1), Z((t) => new Set([...t, ...e])));
    }, [l, u, S, Z]);
    let E = (0, o.e7)([C.Z], () => C.Z.getApplicationId()),
        k = (0, o.e7)([_.default], () =>
            null == E
                ? void 0
                : _.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === E;
                  }),
        ),
        D = (0, o.e7)([g.Z], () => void 0 !== k && g.Z.canShowToggleTooltip(k.id));
    return w.length > 0
        ? w.map((e) =>
              (0, i.jsx)(
                  A,
                  {
                      guild: f,
                      commandId: t,
                      onChange: (t) => T(e.id, e.type, t),
                      onRemove: () => I(e.id, e.type),
                      overwrite: e,
                      integration: k,
                      canShowMigrationTooltip: D,
                      hasAccessToMutatePermissions: b,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: P.noItemsSelected,
              children: (0, i.jsx)(c.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: s,
              }),
          });
}
function A(e) {
    var t, n, l;
    let a,
        {
            guild: o,
            commandId: d,
            onChange: g,
            onRemove: h,
            overwrite: x,
            integration: j,
            canShowMigrationTooltip: y,
            hasAccessToMutatePermissions: O,
        } = e,
        _ = x.id === o.id || x.id === (0, m.bD)(o.id),
        C = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        N = !x.canWrite || !O,
        k = f.default.getId();
    O
        ? x.canWrite ||
          (x.type === p.Kw.USER
              ? (a = x.id === k ? I.intl.string(I.t["1VF/09"]) : I.intl.string(I.t.P1GnER))
              : x.type === p.Kw.ROLE && (a = I.intl.string(I.t.mcAijY)))
        : (a = null != d ? I.intl.string(I.t.tybdam) : I.intl.string(I.t.z2hjk5));
    let A = y && null != j && x.id === o.id && void 0 !== C && !x.permission;
    r.useEffect(() => {
        if (A) {
            var e;
            v.default.track(
                w.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                E(T({}, (0, u.hH)(o.id)), {
                    application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                    location: "toggle",
                }),
            );
        }
    }, [o.id, null == j || null == (l = j.application) ? void 0 : l.id, A]);
    let R = r.useRef(null),
        L = (0, i.jsx)(c.ua7, {
            tooltipClassName: P.tooltip,
            text: a,
            shouldShow: N,
            position: "left",
            hideOnClick: !1,
            children: (e) =>
                (0, i.jsx)(
                    "div",
                    E(T({}, e), {
                        ref: R,
                        children: (0, i.jsx)(Z.Z, {
                            isDisabled: N,
                            currentValue: x.permission,
                            onChange: A
                                ? (e) => {
                                      b.Z.dismissToggleTooltip(o.id, j), g(e);
                                  }
                                : g,
                        }),
                    }),
                ),
        }),
        M = (0, i.jsx)(s.J2, {
            targetElementRef: R,
            title: I.intl.string(I.t.ufFDiI),
            body: I.intl.format(I.t.pW4Cr6, {
                botName: C,
                link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
            }),
            position: "bottom",
            caretConfig: { align: "center" },
            onRequestClose: () => {
                b.Z.dismissToggleTooltip(o.id, j);
            },
        });
    return (0, i.jsxs)(
        "div",
        {
            className: P.entryItem,
            children: [
                (0, i.jsx)("div", {
                    className: P.entryName,
                    children: (0, i.jsx)(S.Z, {
                        guild: o,
                        id: x.id,
                        type: x.type,
                        isLocked: N,
                        lockTooltipText: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: P.entryActions,
                    children: [
                        (0, i.jsx)(D, {
                            commandId: d,
                            isSentinel: _,
                            isDisabled: !O,
                            onRemove: h,
                        }),
                        L,
                        A && M,
                    ],
                }),
            ],
        },
        x.id,
    );
}
function D(e) {
    let { commandId: t, isSentinel: n, isDisabled: r, onRemove: l } = e;
    return r
        ? null
        : null == t && n
          ? null
          : (0, i.jsx)("div", {
                className: P.removeActions,
                children: (0, i.jsx)(c.P3F, {
                    className: P.removeContainer,
                    "aria-label": I.intl.string(I.t.mT0CQE),
                    onClick: l,
                    children: (0, i.jsx)(c.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: P.removeIcon,
                    }),
                }),
            });
}
