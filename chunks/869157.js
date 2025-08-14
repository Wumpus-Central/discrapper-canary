n.d(t, { Z: () => k }), n(975844), n(388685), n(642613);
var i = n(255367),
    r = n(73800),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    d = n(367907),
    u = n(895924),
    p = n(581364),
    m = n(929507),
    b = n(997787),
    g = n(970731),
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
    w = n(335049),
    Z = n(617012),
    S = n(981631),
    P = n(388032),
    I = n(547063);
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
            noneSelectedText: d,
            overwrites: m,
            hasAccessToMutatePermissions: g,
        } = e,
        f = (0, a.e7)([x.Z], () => x.Z.getGuild(l));
    o()(null != f, "");
    let v = (0, a.e7)([h.Z], () => h.Z.getSortedRoles(l)),
        [w, Z] = r.useState(new Set()),
        S = r.useMemo(() => {
            let e = (0, p.bD)(l),
                t = v.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(m)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let r = n.type - i.type;
                    if (0 !== r) return r;
                    switch (n.type) {
                        case u.Kw.USER:
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
                        case u.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (i.id === l) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case u.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let o = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== o ? o : O.default.compare(n.id, i.id);
                    }
                });
        }, [l, m, v]),
        P = r.useCallback(
            (e, t) => {
                n({}, [(0, N.rE)(e, t)]);
            },
            [n],
        ),
        T = r.useCallback(
            (e, t, i) => {
                let r = (0, N.rE)(e, t);
                null != m[r] &&
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
            [n, m],
        );
    r.useEffect(() => {
        let e = Object.values(m)
            .filter((e) => e.type === u.Kw.USER && !e.canRead && !w.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (c.Z.requestMembersById(l, e, !1), Z((t) => new Set([...t, ...e])));
    }, [l, m, w, Z]);
    let E = (0, a.e7)([C.Z], () => C.Z.getApplicationId()),
        k = (0, a.e7)([_.default], () =>
            null == E
                ? void 0
                : _.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === E;
                  }),
        ),
        D = (0, a.e7)([b.Z], () => void 0 !== k && b.Z.canShowToggleTooltip(k.id));
    return S.length > 0
        ? S.map((e) =>
              (0, i.jsx)(
                  A,
                  {
                      guild: f,
                      commandId: t,
                      onChange: (t) => T(e.id, e.type, t),
                      onRemove: () => P(e.id, e.type),
                      overwrite: e,
                      integration: k,
                      canShowMigrationTooltip: D,
                      hasAccessToMutatePermissions: g,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: I.noItemsSelected,
              children: (0, i.jsx)(s.Text, {
                  color: "text-muted",
                  variant: "text-sm/normal",
                  children: d,
              }),
          });
}
function A(e) {
    var t, n, l;
    let o,
        {
            guild: a,
            commandId: c,
            onChange: b,
            onRemove: h,
            overwrite: x,
            integration: j,
            canShowMigrationTooltip: y,
            hasAccessToMutatePermissions: O,
        } = e,
        _ = x.id === a.id || x.id === (0, p.bD)(a.id),
        C = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        N = !x.canWrite || !O,
        k = f.default.getId();
    O
        ? x.canWrite ||
          (x.type === u.Kw.USER
              ? (o = x.id === k ? P.intl.string(P.t["1VF/09"]) : P.intl.string(P.t.P1GnER))
              : x.type === u.Kw.ROLE && (o = P.intl.string(P.t.mcAijY)))
        : (o = null != c ? P.intl.string(P.t.tybdam) : P.intl.string(P.t.z2hjk5));
    let A = y && null != j && x.id === a.id && void 0 !== C && !x.permission;
    r.useEffect(() => {
        if (A) {
            var e;
            v.default.track(
                S.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                E(T({}, (0, d.hH)(a.id)), {
                    application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                    location: "toggle",
                }),
            );
        }
    }, [a.id, null == j || null == (l = j.application) ? void 0 : l.id, A]);
    let R = r.useRef(null),
        L = (0, i.jsx)(s.ua7, {
            tooltipClassName: I.tooltip,
            text: o,
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
                                      m.Z.dismissToggleTooltip(a.id, j), b(e);
                                  }
                                : b,
                        }),
                    }),
                ),
        }),
        M = (0, i.jsx)(s.yRy, {
            targetElementRef: R,
            renderPopout: () =>
                (0, i.jsx)(s.P3F, {
                    onClick: (e) => {
                        e.stopPropagation(), m.Z.dismissToggleTooltip(a.id, j);
                    },
                    children: (0, i.jsx)(g.ZP, {
                        className: I.tooltip,
                        content: P.intl.format(P.t.pW4Cr6, {
                            botName: C,
                            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/",
                        }),
                        onClick: () => {},
                    }),
                }),
            position: "bottom",
            align: "center",
            animation: s.yRy.Animation.TRANSLATE,
            onRequestClose: () => m.Z.dismissToggleTooltip(a.id, j),
            shouldShow: A,
            closeOnScroll: !0,
            children: () => L,
        });
    return (0, i.jsxs)(
        "div",
        {
            className: I.entryItem,
            children: [
                (0, i.jsx)("div", {
                    className: I.entryName,
                    children: (0, i.jsx)(w.Z, {
                        guild: a,
                        id: x.id,
                        type: x.type,
                        isLocked: N,
                        lockTooltipText: o,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: I.entryActions,
                    children: [
                        (0, i.jsx)(D, {
                            commandId: c,
                            isSentinel: _,
                            isDisabled: !O,
                            onRemove: h,
                        }),
                        M,
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
                className: I.removeActions,
                children: (0, i.jsx)(s.P3F, {
                    className: I.removeContainer,
                    "aria-label": P.intl.string(P.t.mT0CQE),
                    onClick: l,
                    children: (0, i.jsx)(s.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: I.removeIcon,
                    }),
                }),
            });
}
