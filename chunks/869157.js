(n.d(t, { Z: () => A }), n(975844), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
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
    O = n(5192),
    y = n(709054),
    _ = n(360606),
    C = n(905753),
    N = n(399860),
    S = n(335049),
    I = n(617012),
    E = n(981631),
    T = n(388032),
    w = n(981263);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function P(e, t) {
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
function A(e) {
    let { commandId: t, editPermissions: n, guildId: l, noneSelectedText: d, overwrites: m, hasAccessToMutatePermissions: g } = e,
        f = (0, a.e7)([x.Z], () => x.Z.getGuild(l));
    o()(null != f, '');
    let v = (0, a.e7)([h.Z], () => h.Z.getSortedRoles(l)),
        [S, I] = i.useState(new Set()),
        E = i.useMemo(() => {
            let e = (0, p.bD)(l),
                t = v.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(m)
                .filter((e) => e.canRead)
                .sort((n, r) => {
                    let i = n.type - r.type;
                    if (0 !== i) return i;
                    switch (n.type) {
                        case u.Kw.USER:
                            return (function (e, t, n) {
                                let r = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== r) return r;
                                let i = j.default.getUser(e.id),
                                    l = j.default.getUser(t.id);
                                if (null != i && null != l) {
                                    let e = O.ZP.getName(n, void 0, i),
                                        t = O.ZP.getName(n, void 0, l);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return y.default.compare(e.id, t.id);
                            })(n, r, l);
                        case u.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (r.id === l) return 1;
                            return t[n.id] > t[r.id] ? -1 : 1;
                        case u.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (r.id === e) return 1;
                            let o = Number(n.canWrite) - Number(r.canWrite);
                            return 0 !== o ? o : y.default.compare(n.id, r.id);
                    }
                });
        }, [l, m, v]),
        T = i.useCallback(
            (e, t) => {
                n({}, [(0, N.rE)(e, t)]);
            },
            [n]
        ),
        Z = i.useCallback(
            (e, t, r) => {
                let i = (0, N.rE)(e, t);
                null != m[i] &&
                    n(
                        {
                            [i]: {
                                id: e,
                                permission: r,
                                type: t
                            }
                        },
                        []
                    );
            },
            [n, m]
        );
    i.useEffect(() => {
        let e = Object.values(m)
            .filter((e) => e.type === u.Kw.USER && !e.canRead && !S.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (c.Z.requestMembersById(l, e, !1), I((t) => new Set([...t, ...e])));
    }, [l, m, S, I]);
    let P = (0, a.e7)([C.Z], () => C.Z.getApplicationId()),
        A = (0, a.e7)([_.default], () =>
            null == P
                ? void 0
                : _.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === P;
                  })
        ),
        D = (0, a.e7)([b.Z], () => void 0 !== A && b.Z.canShowToggleTooltip(A.id));
    return E.length > 0
        ? E.map((e) =>
              (0, r.jsx)(
                  k,
                  {
                      guild: f,
                      commandId: t,
                      onChange: (t) => Z(e.id, e.type, t),
                      onRemove: () => T(e.id, e.type),
                      overwrite: e,
                      integration: A,
                      canShowMigrationTooltip: D,
                      hasAccessToMutatePermissions: g
                  },
                  e.id
              )
          )
        : (0, r.jsx)('div', {
              className: w.noItemsSelected,
              children: (0, r.jsx)(s.Text, {
                  color: 'text-muted',
                  variant: 'text-sm/normal',
                  children: d
              })
          });
}
function k(e) {
    var t, n, l;
    let o,
        { guild: a, commandId: c, onChange: b, onRemove: h, overwrite: x, integration: j, canShowMigrationTooltip: O, hasAccessToMutatePermissions: y } = e,
        _ = x.id === a.id || x.id === (0, p.bD)(a.id),
        C = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        N = !x.canWrite || !y,
        A = f.default.getId();
    y ? x.canWrite || (x.type === u.Kw.USER ? (o = x.id === A ? T.intl.string(T.t['1VF/09']) : T.intl.string(T.t.P1GnER)) : x.type === u.Kw.ROLE && (o = T.intl.string(T.t.mcAijY))) : (o = null != c ? T.intl.string(T.t.tybdam) : T.intl.string(T.t.z2hjk5));
    let k = O && null != j && x.id === a.id && void 0 !== C && !x.permission;
    i.useEffect(() => {
        if (k) {
            var e;
            v.default.track(
                E.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                P(Z({}, (0, d.hH)(a.id)), {
                    application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                    location: 'toggle'
                })
            );
        }
    }, [a.id, null == j || null == (l = j.application) ? void 0 : l.id, k]);
    let R = i.useRef(null),
        L = (0, r.jsx)(s.ua7, {
            tooltipClassName: w.tooltip,
            text: o,
            shouldShow: N,
            position: 'left',
            hideOnClick: !1,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    P(Z({}, e), {
                        ref: R,
                        children: (0, r.jsx)(I.Z, {
                            isDisabled: N,
                            currentValue: x.permission,
                            onChange: k
                                ? (e) => {
                                      (m.Z.dismissToggleTooltip(a.id, j), b(e));
                                  }
                                : b
                        })
                    })
                )
        }),
        M = (0, r.jsx)(s.yRy, {
            targetElementRef: R,
            renderPopout: () =>
                (0, r.jsx)(s.P3F, {
                    onClick: (e) => {
                        (e.stopPropagation(), m.Z.dismissToggleTooltip(a.id, j));
                    },
                    children: (0, r.jsx)(g.ZP, {
                        className: w.tooltip,
                        content: T.intl.format(T.t.pW4Cr6, {
                            botName: C,
                            link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                        }),
                        onClick: () => {}
                    })
                }),
            position: 'bottom',
            align: 'center',
            animation: s.yRy.Animation.TRANSLATE,
            onRequestClose: () => m.Z.dismissToggleTooltip(a.id, j),
            shouldShow: k,
            closeOnScroll: !0,
            children: () => L
        });
    return (0, r.jsxs)(
        'div',
        {
            className: w.entryItem,
            children: [
                (0, r.jsx)('div', {
                    className: w.entryName,
                    children: (0, r.jsx)(S.Z, {
                        guild: a,
                        id: x.id,
                        type: x.type,
                        isLocked: N,
                        lockTooltipText: o
                    })
                }),
                (0, r.jsxs)('div', {
                    className: w.entryActions,
                    children: [
                        (0, r.jsx)(D, {
                            commandId: c,
                            isSentinel: _,
                            isDisabled: !y,
                            onRemove: h
                        }),
                        M
                    ]
                })
            ]
        },
        x.id
    );
}
function D(e) {
    let { commandId: t, isSentinel: n, isDisabled: i, onRemove: l } = e;
    return i
        ? null
        : null == t && n
          ? null
          : (0, r.jsx)('div', {
                className: w.removeActions,
                children: (0, r.jsx)(s.P3F, {
                    className: w.removeContainer,
                    'aria-label': T.intl.string(T.t.mT0CQE),
                    onClick: l,
                    children: (0, r.jsx)(s.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: w.removeIcon
                    })
                })
            });
}
