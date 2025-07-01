(n.d(t, { Z: () => D }), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    o = n.n(l),
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(749210),
    p = n(367907),
    m = n(895924),
    b = n(581364),
    g = n(929507),
    f = n(997787),
    h = n(970731),
    x = n(314897),
    j = n(485386),
    O = n(430824),
    v = n(594174),
    y = n(626135),
    _ = n(5192),
    C = n(709054),
    N = n(360606),
    I = n(905753),
    S = n(399860),
    E = n(335049),
    T = n(617012),
    w = n(981631),
    P = n(388032),
    Z = n(981263);
function k(e) {
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
function A(e, t) {
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
function D(e) {
    let { commandId: t, editPermissions: n, guildId: l, noneSelectedText: a, overwrites: p, hasAccessToMutatePermissions: g } = e,
        h = (0, c.e7)([O.Z], () => O.Z.getGuild(l));
    o()(null != h, '');
    let x = (0, c.e7)([j.Z], () => j.Z.getRoles(l)),
        [y, E] = i.useState(new Set()),
        T = i.useMemo(() => {
            let e = (0, b.bD)(l),
                t = s()(x)
                    .sortBy((e) => e.position)
                    .reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(p)
                .filter((e) => e.canRead)
                .sort((n, r) => {
                    let i = n.type - r.type;
                    if (0 !== i) return i;
                    switch (n.type) {
                        case m.Kw.USER:
                            return (function (e, t, n) {
                                let r = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== r) return r;
                                let i = v.default.getUser(e.id),
                                    l = v.default.getUser(t.id);
                                if (null != i && null != l) {
                                    let e = _.ZP.getName(n, void 0, i),
                                        t = _.ZP.getName(n, void 0, l);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return C.default.compare(e.id, t.id);
                            })(n, r, l);
                        case m.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (r.id === l) return 1;
                            return t[n.id] > t[r.id] ? -1 : 1;
                        case m.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (r.id === e) return 1;
                            let o = Number(n.canWrite) - Number(r.canWrite);
                            return 0 !== o ? o : C.default.compare(n.id, r.id);
                    }
                });
        }, [l, p, x]),
        w = i.useCallback(
            (e, t) => {
                n({}, [(0, S.rE)(e, t)]);
            },
            [n]
        ),
        P = i.useCallback(
            (e, t, r) => {
                let i = (0, S.rE)(e, t);
                null != p[i] &&
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
            [n, p]
        );
    i.useEffect(() => {
        let e = Object.values(p)
            .filter((e) => e.type === m.Kw.USER && !e.canRead && !y.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.Z.requestMembersById(l, e, !1), E((t) => new Set([...t, ...e])));
    }, [l, p, y, E]);
    let k = (0, c.e7)([I.Z], () => I.Z.getApplicationId()),
        A = (0, c.e7)([N.default], () =>
            null == k
                ? void 0
                : N.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === k;
                  })
        ),
        D = (0, c.e7)([f.Z], () => void 0 !== A && f.Z.canShowToggleTooltip(A.id));
    return T.length > 0
        ? T.map((e) =>
              (0, r.jsx)(
                  R,
                  {
                      guild: h,
                      commandId: t,
                      onChange: (t) => P(e.id, e.type, t),
                      onRemove: () => w(e.id, e.type),
                      overwrite: e,
                      integration: A,
                      canShowMigrationTooltip: D,
                      hasAccessToMutatePermissions: g
                  },
                  e.id
              )
          )
        : (0, r.jsx)('div', {
              className: Z.noItemsSelected,
              children: (0, r.jsx)(d.Text, {
                  color: 'text-muted',
                  variant: 'text-sm/normal',
                  children: a
              })
          });
}
function R(e) {
    var t, n, l;
    let o,
        { guild: a, commandId: s, onChange: c, onRemove: u, overwrite: f, integration: j, canShowMigrationTooltip: O, hasAccessToMutatePermissions: v } = e,
        _ = f.id === a.id || f.id === (0, b.bD)(a.id),
        C = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        N = !f.canWrite || !v,
        I = x.default.getId();
    v ? f.canWrite || (f.type === m.Kw.USER ? (o = f.id === I ? P.intl.string(P.t['1VF/09']) : P.intl.string(P.t.P1GnER)) : f.type === m.Kw.ROLE && (o = P.intl.string(P.t.mcAijY))) : (o = null != s ? P.intl.string(P.t.tybdam) : P.intl.string(P.t.z2hjk5));
    let S = O && null != j && f.id === a.id && void 0 !== C && !f.permission;
    i.useEffect(() => {
        if (S) {
            var e;
            y.default.track(
                w.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                A(k({}, (0, p.hH)(a.id)), {
                    application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                    location: 'toggle'
                })
            );
        }
    }, [a.id, null == j || null == (l = j.application) ? void 0 : l.id, S]);
    let D = i.useRef(null),
        R = (0, r.jsx)(d.ua7, {
            tooltipClassName: Z.tooltip,
            text: o,
            shouldShow: N,
            position: 'left',
            hideOnClick: !1,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    A(k({}, e), {
                        ref: D,
                        children: (0, r.jsx)(T.Z, {
                            isDisabled: N,
                            currentValue: f.permission,
                            onChange: S
                                ? (e) => {
                                      (g.Z.dismissToggleTooltip(a.id, j), c(e));
                                  }
                                : c
                        })
                    })
                )
        }),
        M = (0, r.jsx)(d.yRy, {
            targetElementRef: D,
            renderPopout: () =>
                (0, r.jsx)(d.P3F, {
                    onClick: (e) => {
                        (e.stopPropagation(), g.Z.dismissToggleTooltip(a.id, j));
                    },
                    children: (0, r.jsx)(h.ZP, {
                        className: Z.tooltip,
                        content: P.intl.format(P.t.pW4Cr6, {
                            botName: C,
                            link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                        }),
                        onClick: () => {}
                    })
                }),
            position: 'bottom',
            align: 'center',
            animation: d.yRy.Animation.TRANSLATE,
            onRequestClose: () => g.Z.dismissToggleTooltip(a.id, j),
            shouldShow: S,
            closeOnScroll: !0,
            children: () => R
        });
    return (0, r.jsxs)(
        'div',
        {
            className: Z.entryItem,
            children: [
                (0, r.jsx)('div', {
                    className: Z.entryName,
                    children: (0, r.jsx)(E.Z, {
                        guild: a,
                        id: f.id,
                        type: f.type,
                        isLocked: N,
                        lockTooltipText: o
                    })
                }),
                (0, r.jsxs)('div', {
                    className: Z.entryActions,
                    children: [
                        (0, r.jsx)(L, {
                            commandId: s,
                            isSentinel: _,
                            isDisabled: !v,
                            onRemove: u
                        }),
                        M
                    ]
                })
            ]
        },
        f.id
    );
}
function L(e) {
    let { commandId: t, isSentinel: n, isDisabled: i, onRemove: l } = e;
    return i
        ? null
        : null == t && n
          ? null
          : (0, r.jsx)('div', {
                className: Z.removeActions,
                children: (0, r.jsx)(d.P3F, {
                    className: Z.removeContainer,
                    'aria-label': P.intl.string(P.t.mT0CQE),
                    onClick: l,
                    children: (0, r.jsx)(d.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: Z.removeIcon
                    })
                })
            });
}
