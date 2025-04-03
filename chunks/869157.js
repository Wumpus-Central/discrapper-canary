n.d(t, { Z: () => k }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
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
    j = n(430824),
    N = n(594174),
    O = n(626135),
    v = n(5192),
    y = n(709054),
    _ = n(360606),
    C = n(905753),
    I = n(399860),
    S = n(335049),
    E = n(617012),
    P = n(981631),
    w = n(388032),
    T = n(981263);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function W(e, t) {
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
function k(e) {
    let { commandId: t, editPermissions: n, guildId: l, noneSelectedText: a, overwrites: p, hasAccessToMutatePermissions: g } = e,
        h = (0, c.e7)([j.Z], () => j.Z.getGuild(l));
    o()(null != h, '');
    let x = (0, c.e7)([j.Z], () => j.Z.getRoles(l)),
        [O, S] = i.useState(new Set()),
        E = i.useMemo(() => {
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
                                let i = N.default.getUser(e.id),
                                    l = N.default.getUser(t.id);
                                if (null != i && null != l) {
                                    let e = v.ZP.getName(n, void 0, i),
                                        t = v.ZP.getName(n, void 0, l);
                                    return null == e ? void 0 : e.localeCompare(t);
                                }
                                return y.default.compare(e.id, t.id);
                            })(n, r, l);
                        case m.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (r.id === l) return 1;
                            return t[n.id] > t[r.id] ? -1 : 1;
                        case m.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (r.id === e) return 1;
                            let o = Number(n.canWrite) - Number(r.canWrite);
                            return 0 !== o ? o : y.default.compare(n.id, r.id);
                    }
                });
        }, [l, p, x]),
        P = i.useCallback(
            (e, t) => {
                n({}, [(0, I.rE)(e, t)]);
            },
            [n]
        ),
        w = i.useCallback(
            (e, t, r) => {
                let i = (0, I.rE)(e, t);
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
            .filter((e) => e.type === m.Kw.USER && !e.canRead && !O.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.Z.requestMembersById(l, e, !1), S((t) => new Set([...t, ...e])));
    }, [l, p, O, S]);
    let Z = (0, c.e7)([C.Z], () => C.Z.getApplicationId()),
        W = (0, c.e7)([_.default], () =>
            null == Z
                ? void 0
                : _.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === Z;
                  })
        ),
        k = (0, c.e7)([f.Z], () => void 0 !== W && f.Z.canShowToggleTooltip(W.id));
    return E.length > 0
        ? E.map((e) =>
              (0, r.jsx)(
                  A,
                  {
                      guild: h,
                      commandId: t,
                      onChange: (t) => w(e.id, e.type, t),
                      onRemove: () => P(e.id, e.type),
                      overwrite: e,
                      integration: W,
                      canShowMigrationTooltip: k,
                      hasAccessToMutatePermissions: g
                  },
                  e.id
              )
          )
        : (0, r.jsx)('div', {
              className: T.noItemsSelected,
              children: (0, r.jsx)(d.Text, {
                  color: 'text-muted',
                  variant: 'text-sm/normal',
                  children: a
              })
          });
}
function A(e) {
    var t, n, l;
    let o,
        { guild: a, commandId: s, onChange: c, onRemove: u, overwrite: f, integration: j, canShowMigrationTooltip: N, hasAccessToMutatePermissions: v } = e,
        y = f.id === a.id || f.id === (0, b.bD)(a.id),
        _ = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        C = !f.canWrite || !v,
        I = x.default.getId();
    v ? f.canWrite || (f.type === m.Kw.USER ? (o = f.id === I ? w.NW.string(w.t['1VF/09']) : w.NW.string(w.t.P1GnER)) : f.type === m.Kw.ROLE && (o = w.NW.string(w.t.mcAijY))) : (o = null != s ? w.NW.string(w.t.tybdam) : w.NW.string(w.t.z2hjk5));
    let k = N && null != j && f.id === a.id && void 0 !== _ && !f.permission;
    i.useEffect(() => {
        if (k) {
            var e;
            O.default.track(
                P.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
                W(Z({}, (0, p.hH)(a.id)), {
                    application_id: null == j || null == (e = j.application) ? void 0 : e.id,
                    location: 'toggle'
                })
            );
        }
    }, [a.id, null == j || null == (l = j.application) ? void 0 : l.id, k]);
    let A = (0, r.jsx)(d.ua7, {
            tooltipClassName: T.tooltip,
            text: o,
            shouldShow: C,
            position: 'left',
            hideOnClick: !1,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    W(Z({}, e), {
                        children: (0, r.jsx)(E.Z, {
                            isDisabled: C,
                            currentValue: f.permission,
                            onChange: k
                                ? (e) => {
                                      g.Z.dismissToggleTooltip(a.id, j), c(e);
                                  }
                                : c
                        })
                    })
                )
        }),
        R = (0, r.jsx)(d.yRy, {
            renderPopout: () =>
                (0, r.jsx)(d.P3F, {
                    onClick: (e) => {
                        e.stopPropagation(), g.Z.dismissToggleTooltip(a.id, j);
                    },
                    children: (0, r.jsx)(h.ZP, {
                        className: T.tooltip,
                        content: w.NW.format(w.t.pW4Cr6, {
                            botName: _,
                            link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                        }),
                        onClick: () => {}
                    })
                }),
            position: 'bottom',
            align: 'center',
            animation: d.yRy.Animation.TRANSLATE,
            onRequestClose: () => g.Z.dismissToggleTooltip(a.id, j),
            shouldShow: k,
            closeOnScroll: !0,
            children: () => A
        });
    return (0, r.jsxs)(
        'div',
        {
            className: T.entryItem,
            children: [
                (0, r.jsx)('div', {
                    className: T.entryName,
                    children: (0, r.jsx)(S.Z, {
                        guild: a,
                        id: f.id,
                        type: f.type,
                        isLocked: C,
                        lockTooltipText: o
                    })
                }),
                (0, r.jsxs)('div', {
                    className: T.entryActions,
                    children: [
                        (0, r.jsx)(D, {
                            commandId: s,
                            isSentinel: y,
                            isDisabled: !v,
                            onRemove: u
                        }),
                        R
                    ]
                })
            ]
        },
        f.id
    );
}
function D(e) {
    let { commandId: t, isSentinel: n, isDisabled: i, onRemove: l } = e;
    return i
        ? null
        : null == t && n
          ? null
          : (0, r.jsx)('div', {
                className: T.removeActions,
                children: (0, r.jsx)(d.P3F, {
                    className: T.removeContainer,
                    'aria-label': w.NW.string(w.t.mT0CQE),
                    onClick: l,
                    children: (0, r.jsx)(d.XHJ, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.removeIcon
                    })
                })
            });
}
