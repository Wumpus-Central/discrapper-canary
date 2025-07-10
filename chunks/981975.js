(n.d(t, { Z: () => R }), n(388685), n(539854), n(472816), n(794429));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(570140),
    g = n(275759),
    p = n(313201),
    f = n(63063),
    h = n(243730),
    x = n(764260),
    b = n(946724),
    j = n(95242),
    _ = n(530198),
    v = n(420966),
    O = n(203377),
    C = n(981631),
    y = n(856651),
    N = n(388032),
    I = n(419353),
    E = n(877248);
function S(e) {
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
let T = (0, p.hQ)();
function P(e, t) {
    return t !== g.O1.AND ? Object.values(o().groupBy(e, (e) => ''.concat(e.connectionType, ':').concat(e.applicationId))) : 0 === e.length ? [] : [[...e]];
}
function w(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, r.jsxs)('div', {
        className: I.headerNoConfigContainer,
        children: [
            (0, r.jsx)(u.X6q, {
                className: I.headerHeading,
                variant: 'eyebrow',
                children: N.intl.string(N.t.nMir29)
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: N.intl.format(N.t.q5f7tL, { helpdeskArticleUrl: f.Z.getArticleURL(C.BhN.CONNECTION_DETAILS_ADMIN) })
            }),
            (0, r.jsx)(d.zx, {
                disabled: n,
                className: I.addVerificationButton,
                size: d.zx.Sizes.MEDIUM,
                look: d.zx.Looks.FILLED,
                color: d.zx.Colors.BRAND,
                onClick: t,
                children: N.intl.string(N.t['OSvW5+'])
            })
        ]
    });
}
function R(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: p, headerRef: R } = (0, j.Z)(0),
        { scrolledToTop: Z, handleScroll: D } = (0, v.V)(),
        A = (0, c.e7)(
            [h.Z],
            () => {
                var e;
                return null == (e = h.Z.getRoleMemberCount(t.id)) ? void 0 : e[n.id];
            },
            [n.id, t.id]
        ),
        L = (0, c.Wu)([b.Z], () => {
            var e;
            return null != (e = b.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : [];
        }),
        k = L.length > 1 ? g.O1.OR : g.O1.AND,
        M = i.useMemo(() => (k === g.O1.OR ? L.flat() : null != L && L.length > 0 ? L[0] : []), [k, L]),
        G = i.useMemo(() => new Set(M.map((e) => e.connectionType)), [M]);
    function U(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...M];
        (r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }),
            (0, x.d_)(n.id, P(r, k)));
    }
    function B() {
        m.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => U(e),
            excludedPlatformTypes: G,
            integrations: o,
            onCompleteApplication: (e) => U(y.Kt, e)
        });
    }
    let F = null;
    if (0 === M.length)
        F = (0, r.jsx)(w, {
            handleAddVerificationClicked: B,
            locked: l
        });
    else if (M.length > 0) {
        var H;
        let e = null;
        (M.length < 10 &&
            (e = (0, r.jsx)(d.zx, {
                className: s()(I.addVerificationButton, I.addVerificationButtonAppend),
                size: d.zx.Sizes.LARGE,
                look: d.zx.Looks.BLANK,
                color: d.zx.Colors.LINK,
                onClick: B,
                disabled: l,
                children: (0, r.jsxs)('div', {
                    className: I.addVerificationButtonAppendTextContainer,
                    children: [
                        (0, r.jsx)(u.oFk, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        N.intl.string(N.t['OSvW5+'])
                    ]
                })
            })),
            (F = (0, r.jsxs)(r.Fragment, {
                children: [
                    ((H = () => (0, x.d_)(n.id, [])),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)('div', {
                                className: I.headerTitleContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: I.headerTitleTextContainer,
                                        children: (0, r.jsx)(u.X6q, {
                                            variant: 'eyebrow',
                                            children: N.intl.string(N.t.nMir29)
                                        })
                                    }),
                                    (0, r.jsx)(d.zx, {
                                        className: I.headerTitleButton,
                                        size: d.zx.Sizes.TINY,
                                        look: d.zx.Looks.LINK,
                                        color: d.zx.Colors.LINK,
                                        onClick: H,
                                        disabled: l,
                                        children: N.intl.string(N.t.ntW1cX)
                                    })
                                ]
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: N.intl.format(N.t.q5f7tL, { helpdeskArticleUrl: f.Z.getArticleURL(C.BhN.CONNECTION_DETAILS_ADMIN) })
                            })
                        ]
                    })),
                    (function (e, t, n, i, l) {
                        let s = P(i, g.O1.OR);
                        return (0, r.jsx)(u.xJW, {
                            className: I.operatorContainer,
                            title: N.intl.string(N.t.Xs7PHR),
                            children: (0, r.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: N.intl.string(N.t['W3iY5+']),
                                        value: g.O1.OR
                                    },
                                    {
                                        name: N.intl.string(N.t.gHXS9P),
                                        value: g.O1.AND
                                    }
                                ],
                                onChange: (e) => l(i, e.value),
                                value: n,
                                disabled: e || s.length < 2,
                                'aria-labelledby': T
                            })
                        });
                    })(l, n.id, k, M, (e, t) => (0, x.d_)(n.id, P(e, t))),
                    (function (e, t, n, i, l) {
                        function s(n, r) {
                            let i = [];
                            for (let t of e) i.push(S({}, t));
                            if (null == n) {
                                let t = e[r];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? (i = i.filter((e) => (null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId))) : i.splice(r, 1);
                            } else -1 === r ? i.push(n) : r >= 0 && (i[r] = n);
                            t(i);
                        }
                        let a = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = ''.concat(e.connectionType, ':').concat(e.applicationId);
                            if (a.has(n)) {
                                let r = a.get(n);
                                null == r ||
                                    r.push({
                                        index: t,
                                        configuration: e
                                    });
                            } else
                                a.set(n, [
                                    {
                                        index: t,
                                        configuration: e
                                    }
                                ]);
                        }),
                        a.values())) {
                            if (
                                t.some((e) => {
                                    let { configuration: t } = e;
                                    return null == t.connectionMetadataField && null == t.operator && null == t.value;
                                })
                            )
                                continue;
                            let n = (function (e, t) {
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
                                })(S({}, t[0].configuration), {
                                    connectionMetadataField: void 0,
                                    operator: void 0,
                                    value: void 0
                                }),
                                r = e.push(n);
                            t.push({
                                index: r - 1,
                                configuration: n
                            });
                        }
                        return (0, r.jsx)('div', {
                            className: I.configurationsContainer,
                            children: Array.from(a.values()).map((e) =>
                                (0, r.jsx)(
                                    _.Z,
                                    {
                                        configurationItems: e,
                                        onConfigurationChange: s,
                                        locked: n,
                                        integrations: l
                                    },
                                    e[0].configuration.connectionType + ':' + e[0].index
                                )
                            )
                        });
                    })(M, (e) => (0, x.d_)(n.id, P(e, k)), l, n.id, o),
                    e
                ]
            })));
    }
    return (0, r.jsx)(u.yWw, {
        className: I.scroller,
        style: { scrollPaddingTop: p },
        onScroll: D,
        children: (0, r.jsxs)('div', {
            className: E.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(E.header, E.stickyHeader, { [E.stickyHeaderElevated]: !Z }),
                    ref: R,
                    children: (0, r.jsx)(v.Z, {
                        guild: t,
                        role: n,
                        selectedSection: O.ZI.VERIFICATIONS,
                        setSelectedSection: a
                    })
                }),
                (null != A ? A : 0) > 0
                    ? (0, r.jsxs)('div', {
                          className: I.warningContainer,
                          children: [
                              (0, r.jsx)(u.P4T, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: I.warningIcon
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-default',
                                  children: N.intl.string(N.t['2aFeeX'])
                              })
                          ]
                      })
                    : null,
                F
            ]
        })
    });
}
