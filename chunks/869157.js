n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(724458),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(392711),
    s = n.n(o),
    d = n(442837),
    c = n(481060),
    u = n(749210),
    m = n(367907),
    h = n(895924),
    p = n(581364),
    g = n(929507),
    x = n(997787),
    f = n(970731),
    b = n(314897),
    v = n(430824),
    C = n(594174),
    N = n(626135),
    I = n(5192),
    j = n(709054),
    T = n(360606),
    _ = n(905753),
    Z = n(399860),
    E = n(335049),
    S = n(617012),
    y = n(981631),
    A = n(388032),
    R = n(275492);
function L(e) {
    let { commandId: t, editPermissions: n, guildId: r, noneSelectedText: o, overwrites: m, hasAccessToMutatePermissions: g } = e,
        f = (0, d.e7)([v.Z], () => v.Z.getGuild(r));
    a()(null != f, '');
    let b = (0, d.e7)([v.Z], () => v.Z.getRoles(r)),
        [N, E] = l.useState(new Set()),
        S = l.useMemo(() => {
            var e;
            let t = (0, p.bD)(r);
            let n =
                ((e = b),
                s()(e)
                    .sortBy((e) => e.position)
                    .reduce((e, t, n) => ((e[t.id] = n), e), {}));
            return Object.values(m)
                .filter((e) => e.canRead)
                .sort((e, i) => {
                    let l = e.type - i.type;
                    if (0 !== l) return l;
                    switch (e.type) {
                        case h.Kw.USER:
                            return (function (e, t, n) {
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                if (0 !== i) return i;
                                let l = C.default.getUser(e.id),
                                    r = C.default.getUser(t.id);
                                if (null != l && null != r) {
                                    let e = I.ZP.getName(n, void 0, l),
                                        t = I.ZP.getName(n, void 0, r);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return j.default.compare(e.id, t.id);
                            })(e, i, r);
                        case h.Kw.ROLE:
                            return (function (e, t, n, i) {
                                if (e.id === n) return -1;
                                if (t.id === n) return 1;
                                let l = i[e.id];
                                return l > i[t.id] ? -1 : 1;
                            })(e, i, r, n);
                        case h.Kw.CHANNEL:
                            return (function (e, t, n) {
                                if (e.id === n) return -1;
                                if (t.id === n) return 1;
                                let i = Number(e.canWrite) - Number(t.canWrite);
                                return 0 !== i ? i : j.default.compare(e.id, t.id);
                            })(e, i, t);
                    }
                });
        }, [r, m, b]),
        y = l.useCallback(
            (e, t) => {
                n({}, [(0, Z.rE)(e, t)]);
            },
            [n]
        ),
        A = l.useCallback(
            (e, t, i) => {
                let l = (0, Z.rE)(e, t);
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
            .filter((e) => e.type === h.Kw.USER && !e.canRead && !N.has(e.id))
            .map((e) => e.id);
        if (0 !== e.length) u.Z.requestMembersById(r, e, !1), E((t) => new Set([...t, ...e]));
    }, [r, m, N, E]);
    let L = (0, d.e7)([_.Z], () => _.Z.getApplicationId()),
        O = (0, d.e7)([T.default], () =>
            null == L
                ? void 0
                : T.default.integrations.find((e) => {
                      var t;
                      return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === L;
                  })
        ),
        w = (0, d.e7)([x.Z], () => void 0 !== O && x.Z.canShowToggleTooltip(O.id));
    return (0, i.jsx)(l.Fragment, {
        children:
            S.length > 0
                ? S.map((e) =>
                      (0, i.jsx)(
                          k,
                          {
                              guild: f,
                              commandId: t,
                              onChange: (t) => A(e.id, e.type, t),
                              onRemove: () => y(e.id, e.type),
                              overwrite: e,
                              integration: O,
                              canShowMigrationTooltip: w,
                              hasAccessToMutatePermissions: g
                          },
                          e.id
                      )
                  )
                : (0, i.jsx)('div', {
                      className: R.noItemsSelected,
                      children: (0, i.jsx)(c.Text, {
                          color: 'text-muted',
                          variant: 'text-sm/normal',
                          children: o
                      })
                  })
    });
}
function k(e) {
    var t, n, r;
    let a,
        { guild: o, commandId: s, onChange: d, onRemove: u, overwrite: x, integration: v, canShowMigrationTooltip: C, hasAccessToMutatePermissions: I } = e,
        j = x.id === o.id || x.id === (0, p.bD)(o.id),
        T = null == v ? void 0 : null === (n = v.application) || void 0 === n ? void 0 : null === (t = n.bot) || void 0 === t ? void 0 : t.username,
        _ = !x.canWrite || !I,
        Z = b.default.getId();
    I ? !x.canWrite && (x.type === h.Kw.USER ? (a = x.id === Z ? A.intl.string(A.t['1VF/09']) : A.intl.string(A.t.P1GnER)) : x.type === h.Kw.ROLE && (a = A.intl.string(A.t.mcAijY))) : (a = null != s ? A.intl.string(A.t.tybdam) : A.intl.string(A.t.z2hjk5));
    let L = C && null != v && x.id === o.id && void 0 !== T && !x.permission;
    l.useEffect(() => {
        if (L) {
            var e;
            N.default.track(y.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, m.hH)(o.id),
                application_id: null == v ? void 0 : null === (e = v.application) || void 0 === e ? void 0 : e.id,
                location: 'toggle'
            });
        }
    }, [o.id, null == v ? void 0 : null === (r = v.application) || void 0 === r ? void 0 : r.id, L]);
    let k = (0, i.jsx)(c.Tooltip, {
            tooltipClassName: R.tooltip,
            text: a,
            shouldShow: _,
            position: 'left',
            hideOnClick: !1,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: (0, i.jsx)(S.Z, {
                        isDisabled: _,
                        currentValue: x.permission,
                        onChange: L
                            ? (e) => {
                                  g.Z.dismissToggleTooltip(o.id, v), d(e);
                              }
                            : d
                    })
                })
        }),
        w = (0, i.jsx)(c.Popout, {
            renderPopout: () =>
                (0, i.jsx)(c.Clickable, {
                    onClick: (e) => {
                        e.stopPropagation(), g.Z.dismissToggleTooltip(o.id, v);
                    },
                    children: (0, i.jsx)(f.ZP, {
                        className: R.tooltip,
                        content: A.intl.format(A.t.pW4Cr6, {
                            botName: T,
                            link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                        }),
                        onClick: () => {}
                    })
                }),
            position: 'bottom',
            align: 'center',
            animation: c.Popout.Animation.TRANSLATE,
            onRequestClose: () => g.Z.dismissToggleTooltip(o.id, v),
            shouldShow: L,
            closeOnScroll: !0,
            children: () => k
        });
    return (0, i.jsxs)(
        'div',
        {
            className: R.entryItem,
            children: [
                (0, i.jsx)('div', {
                    className: R.entryName,
                    children: (0, i.jsx)(E.Z, {
                        guild: o,
                        id: x.id,
                        type: x.type,
                        isLocked: _,
                        lockTooltipText: a
                    })
                }),
                (0, i.jsxs)('div', {
                    className: R.entryActions,
                    children: [
                        (0, i.jsx)(O, {
                            commandId: s,
                            isSentinel: j,
                            isDisabled: !I,
                            onRemove: u
                        }),
                        w
                    ]
                })
            ]
        },
        x.id
    );
}
function O(e) {
    let { commandId: t, isSentinel: n, isDisabled: l, onRemove: r } = e;
    return l
        ? null
        : null != t || !n
          ? (0, i.jsx)('div', {
                className: R.removeActions,
                children: (0, i.jsx)(c.Clickable, {
                    className: R.removeContainer,
                    'aria-label': A.intl.string(A.t.mT0CQE),
                    onClick: r,
                    children: (0, i.jsx)(c.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.removeIcon
                    })
                })
            })
          : null;
}
