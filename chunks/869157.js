n.d(t, { Z: () => _ }), n(975844), n(388685), n(642613);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(907862),
    c = n(28664),
    d = n(481060),
    u = n(749210),
    m = n(367907),
    b = n(895924),
    p = n(581364),
    g = n(929507),
    f = n(997787),
    h = n(314897),
    x = n(485386),
    j = n(430824),
    v = n(594174),
    O = n(626135),
    y = n(5192),
    C = n(709054),
    N = n(145260),
    S = n(905753),
    I = n(399860),
    T = n(335049),
    E = n(617012),
    Z = n(981631),
    w = n(388032),
    P = n(759830);
function _(e) {
    let {
            commandId: t,
            editPermissions: n,
            guildId: l,
            noneSelectedText: s,
            overwrites: c,
            hasAccessToMutatePermissions: m,
        } = e,
        g = (0, o.e7)([j.Z], () => j.Z.getGuild(l));
    a()(null != g, "");
    let h = (0, o.e7)([x.Z], () => x.Z.getSortedRoles(l)),
        [O, T] = r.useState(new Set()),
        E = r.useMemo(() => {
            let e = (0, p.bD)(l),
                t = h.toReversed().reduce((e, t, n) => ((e[t.id] = n), e), {});
            return Object.values(c)
                .filter((e) => e.canRead)
                .sort((n, i) => {
                    let r = n.type - i.type;
                    if (0 !== r) return r;
                    switch (n.type) {
                        case b.Kw.USER:
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
                                return C.default.compare(e.id, t.id);
                            })(n, i, l);
                        case b.Kw.ROLE:
                            if (n.id === l) return -1;
                            if (i.id === l) return 1;
                            return t[n.id] > t[i.id] ? -1 : 1;
                        case b.Kw.CHANNEL:
                            if (n.id === e) return -1;
                            if (i.id === e) return 1;
                            let a = Number(n.canWrite) - Number(i.canWrite);
                            return 0 !== a ? a : C.default.compare(n.id, i.id);
                    }
                });
        }, [l, c, h]),
        Z = r.useCallback(
            (e, t) => {
                n({}, [(0, I.rE)(e, t)]);
            },
            [n],
        ),
        w = r.useCallback(
            (e, t, i) => {
                let r = (0, I.rE)(e, t);
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
            .filter((e) => e.type === b.Kw.USER && !e.canRead && !O.has(e.id))
            .map((e) => e.id);
        0 !== e.length && (u.Z.requestMembersById(l, e, !1), T((t) => new Set([...t, ...e])));
    }, [l, c, O, T]);
    let _ = (0, o.e7)([S.Z], () => S.Z.getApplicationId()),
        A = (0, o.e7)([N.default], () =>
            null == _
                ? void 0
                : N.default.integrations.find((e) => {
                      var t;
                      return (null == (t = e.application) ? void 0 : t.id) === _;
                  }),
        ),
        D = (0, o.e7)([f.Z], () => void 0 !== A && f.Z.canShowToggleTooltip(A.id));
    return E.length > 0
        ? E.map((e) =>
              (0, i.jsx)(
                  k,
                  {
                      guild: g,
                      commandId: t,
                      onChange: (t) => w(e.id, e.type, t),
                      onRemove: () => Z(e.id, e.type),
                      overwrite: e,
                      integration: A,
                      canShowMigrationTooltip: D,
                      hasAccessToMutatePermissions: m,
                  },
                  e.id,
              ),
          )
        : (0, i.jsx)("div", {
              className: P.noItemsSelected,
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
        C = x.id === o.id || x.id === (0, p.bD)(o.id),
        N = null == j || null == (n = j.application) || null == (t = n.bot) ? void 0 : t.username,
        S = !x.canWrite || !y,
        I = h.default.getId();
    y
        ? x.canWrite ||
          (x.type === b.Kw.USER
              ? (a = x.id === I ? w.intl.string(w.t["1VF/0x"]) : w.intl.string(w.t.P1GnEd))
              : x.type === b.Kw.ROLE && (a = w.intl.string(w.t.mcAijf)))
        : (a = null != d ? w.intl.string(w.t.tybdas) : w.intl.string(w.t["z2hjk/"]));
    let _ = v && null != j && x.id === o.id && void 0 !== N && !x.permission;
    r.useEffect(() => {
        if (_) {
            var e, t, n;
            O.default.track(
                Z.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED,
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
                })({}, (0, m.hH)(o.id))),
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
    }, [o.id, null == j || null == (l = j.application) ? void 0 : l.id, _]);
    let k = r.useRef(null),
        D = (0, i.jsx)(c.u, {
            text: a,
            shouldShow: S,
            position: "left",
            children: (0, i.jsx)("div", {
                ref: k,
                children: (0, i.jsx)(E.Z, {
                    isDisabled: S,
                    currentValue: x.permission,
                    onChange: _
                        ? (e) => {
                              g.Z.dismissToggleTooltip(o.id, j), u(e);
                          }
                        : u,
                }),
            }),
        }),
        R = (0, i.jsx)(s.J2, {
            targetElementRef: k,
            title: w.intl.string(w.t.ufFDiC),
            body: w.intl.format(w.t.pW4Crz, {
                botName: N,
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
            className: P.entryItem,
            children: [
                (0, i.jsx)("div", {
                    className: P.entryName,
                    children: (0, i.jsx)(T.Z, {
                        guild: o,
                        id: x.id,
                        type: x.type,
                        isLocked: S,
                        lockTooltipText: a,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: P.entryActions,
                    children: [
                        (0, i.jsx)(A, {
                            commandId: d,
                            isSentinel: C,
                            isDisabled: !y,
                            onRemove: f,
                        }),
                        D,
                        _ && R,
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
                className: P.removeActions,
                children: (0, i.jsx)(d.P3F, {
                    className: P.removeContainer,
                    "aria-label": w.intl.string(w.t.mT0CQM),
                    onClick: l,
                    children: (0, i.jsx)(d.XHJ, {
                        size: "md",
                        color: "currentColor",
                        className: P.removeIcon,
                    }),
                }),
            });
}
