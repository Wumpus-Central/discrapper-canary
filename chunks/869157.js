n.d(t, { Z: () => R }), n(724458), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(392711),
    o = n.n(s),
    d = n(442837),
    c = n(481060),
    u = n(749210),
    m = n(367907),
    h = n(895924),
    x = n(581364),
    p = n(929507),
    g = n(997787),
    f = n(970731),
    b = n(314897),
    v = n(430824),
    _ = n(594174),
    j = n(626135),
    N = n(5192),
    C = n(709054),
    I = n(360606),
    Z = n(905753),
    T = n(399860),
    E = n(335049),
    S = n(617012),
    y = n(981631),
    A = n(388032),
    k = n(334575);
function R(e) {
    let { commandId: t, editPermissions: n, guildId: a, noneSelectedText: s, overwrites: m, hasAccessToMutatePermissions: p } = e,
        f = (0, d.e7)([v.Z], () => v.Z.getGuild(a));
    r()(null != f, '');
    let b = (0, d.e7)([v.Z], () => v.Z.getRoles(a)),
        [j, E] = l.useState(new Set()),
        S = l.useMemo(() => {
            let e = (0, x.bD)(a),
                t = o()(b)
                    .sortBy((e) => e.position)
                    .reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(m)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let l = n.type - i.type;
                    if (0 !== l) return l;
                    switch (n.type) {
                        case h.Kw.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let l = _.default.getUser(e.id),
                                    a = _.default.getUser(t.id);
                                if (null != l && null != a) {
                                    let e = N.ZP.getName(n, void 0, l),
                                        t = N.ZP.getName(n, void 0, a);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return C.default.compare(e.id, t.id);
                            })(n, i, a);
                        case h.Kw.ROLE:
                            var r, s, o, d;
                            return (r = n), (s = i), (o = a), (d = t), r.id === o ? -1 : s.id === o ? 1 : d[r.id] > d[s.id] ? -1 : 1;
                        case h.Kw.CHANNEL:
                            return (function (e, t, n) {
                                if (e.id === n) return -1;
                                if (t.id === n) return 1;
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                return 0 !== i ? i : C.default.compare(e.id, t.id);
                            })(n, i, e);
                    }
                });
        }, [a, m, b]),
        y = l.useCallback(
            (e, t) => {
                n({}, [(0, T.rE)(e, t)]);
            },
            [n]
        ),
        A = l.useCallback(
            (e, t, i) => {
                let l = (0, T.rE)(e, t);
                null != m[l] &&
                    n(
                        {
                            [l]: {
                                id: e,
                                permission: i,
                                type: t
                            }
                        },
                        []
                    );
            },
            [n, m]
        );
    l.useEffect(() => {
        let e = Object.values(m)
            .filter((e) => e.type === h.Kw.USER && !e.canRead && !j.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.Z.requestMembersById(a, e, !1), E((t) => new Set([...t, ...e])));
    }, [a, m, j, E]);
    let R = (0, d.e7)([Z.Z], () => Z.Z.getApplicationId()),
        O = (0, d.e7)([I.default], () =>
            null == R
                ? void 0
                : I.default.integrations.find((e) => {
                      var t;
                      return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === R;
                  })
        ),
        w = (0, d.e7)([g.Z], () => void 0 !== O && g.Z.canShowToggleTooltip(O.id));
    return (0, i.jsx)(l.Fragment, {
        children:
            S.length > 0
                ? S.map((e) =>
                      (0, i.jsx)(
                          L,
                          {
                              guild: f,
                              commandId: t,
                              onChange: (t) => A(e.id, e.type, t),
                              onRemove: () => y(e.id, e.type),
                              overwrite: e,
                              integration: O,
                              canShowMigrationTooltip: w,
                              hasAccessToMutatePermissions: p
                          },
                          e.id
                      )
                  )
                : (0, i.jsx)('div', {
                      className: k.noItemsSelected,
                      children: (0, i.jsx)(c.Text, {
                          color: 'text-muted',
                          variant: 'text-sm/normal',
                          children: s
                      })
                  })
    });
}
function L(e) {
    var t, n, a;
    let r,
        { guild: s, commandId: o, onChange: d, onRemove: u, overwrite: g, integration: v, canShowMigrationTooltip: _, hasAccessToMutatePermissions: N } = e,
        C = g.id === s.id || g.id === (0, x.bD)(s.id),
        I = null == v ? void 0 : null === (n = v.application) || void 0 === n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.username,
        Z = !g.canWrite || !N,
        T = b.default.getId();
    N ? g.canWrite || (g.type === h.Kw.USER ? (r = g.id === T ? A.intl.string(A.t['1VF/09']) : A.intl.string(A.t.P1GnER)) : g.type === h.Kw.ROLE && (r = A.intl.string(A.t.mcAijY))) : (r = null != o ? A.intl.string(A.t.tybdam) : A.intl.string(A.t.z2hjk5));
    let R = _ && null != v && g.id === s.id && void 0 !== I && !g.permission;
    l.useEffect(() => {
        if (R) {
            var e;
            j.default.track(y.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, m.hH)(s.id),
                application_id: null == v ? void 0 : null === (e = v.application) || void 0 === e ? void 0 : e.id,
                location: 'toggle'
            });
        }
    }, [s.id, null == v ? void 0 : null === (a = v.application) || void 0 === a ? void 0 : a.id, R]);
    let L = (0, i.jsx)(c.ua7, {
            tooltipClassName: k.tooltip,
            text: r,
            shouldShow: Z,
            position: 'left',
            hideOnClick: !1,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: (0, i.jsx)(S.Z, {
                        isDisabled: Z,
                        currentValue: g.permission,
                        onChange: R
                            ? (e) => {
                                  p.Z.dismissToggleTooltip(s.id, v), d(e);
                              }
                            : d
                    })
                })
        }),
        w = (0, i.jsx)(c.yRy, {
            renderPopout: () =>
                (0, i.jsx)(c.P3F, {
                    onClick: (e) => {
                        e.stopPropagation(), p.Z.dismissToggleTooltip(s.id, v);
                    },
                    children: (0, i.jsx)(f.ZP, {
                        className: k.tooltip,
                        content: A.intl.format(A.t.pW4Cr6, {
                            botName: I,
                            link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                        }),
                        onClick: () => {}
                    })
                }),
            position: 'bottom',
            align: 'center',
            animation: c.yRy.Animation.TRANSLATE,
            onRequestClose: () => p.Z.dismissToggleTooltip(s.id, v),
            shouldShow: R,
            closeOnScroll: !0,
            children: () => L
        });
    return (0, i.jsxs)(
        'div',
        {
            className: k.entryItem,
            children: [
                (0, i.jsx)('div', {
                    className: k.entryName,
                    children: (0, i.jsx)(E.Z, {
                        guild: s,
                        id: g.id,
                        type: g.type,
                        isLocked: Z,
                        lockTooltipText: r
                    })
                }),
                (0, i.jsxs)('div', {
                    className: k.entryActions,
                    children: [
                        (0, i.jsx)(O, {
                            commandId: o,
                            isSentinel: C,
                            isDisabled: !N,
                            onRemove: u
                        }),
                        w
                    ]
                })
            ]
        },
        g.id
    );
}
function O(e) {
    let { commandId: t, isSentinel: n, isDisabled: l, onRemove: a } = e;
    return l
        ? null
        : null == t && n
          ? null
          : (0, i.jsx)('div', {
                className: k.removeActions,
                children: (0, i.jsx)(c.P3F, {
                    className: k.removeContainer,
                    'aria-label': A.intl.string(A.t.mT0CQE),
                    onClick: a,
                    children: (0, i.jsx)(c.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: k.removeIcon
                    })
                })
            });
}
