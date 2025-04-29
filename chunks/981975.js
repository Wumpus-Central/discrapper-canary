n.d(t, { Z: () => w }), n(388685), n(539854), n(472816), n(794429);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    m = n(275759),
    g = n(313201),
    p = n(63063),
    h = n(243730),
    f = n(764260),
    x = n(946724),
    b = n(95242),
    j = n(530198),
    _ = n(420966),
    v = n(203377),
    O = n(981631),
    C = n(856651),
    y = n(388032),
    N = n(419353),
    I = n(877248);
function E(e) {
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
let S = (0, g.hQ)();
function T(e, t) {
    return t !== m.O1.AND ? Object.values(o().groupBy(e, (e) => ''.concat(e.connectionType, ':').concat(e.applicationId))) : 0 === e.length ? [] : [[...e]];
}
function P(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, r.jsxs)('div', {
        className: N.headerNoConfigContainer,
        children: [
            (0, r.jsx)(u.X6q, {
                className: N.headerHeading,
                variant: 'eyebrow',
                children: y.intl.string(y.t.nMir29)
            }),
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: y.intl.format(y.t.q5f7tL, { helpdeskArticleUrl: p.Z.getArticleURL(O.BhN.CONNECTION_DETAILS_ADMIN) })
            }),
            (0, r.jsx)(u.zxk, {
                disabled: n,
                className: N.addVerificationButton,
                size: u.zxk.Sizes.MEDIUM,
                look: u.zxk.Looks.FILLED,
                color: u.zxk.Colors.BRAND,
                onClick: t,
                children: y.intl.string(y.t['OSvW5+'])
            })
        ]
    });
}
function w(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: g, headerRef: w } = (0, b.Z)(0),
        { scrolledToTop: R, handleScroll: Z } = (0, _.V)(),
        D = (0, c.e7)(
            [h.Z],
            () => {
                var e;
                return null == (e = h.Z.getRoleMemberCount(t.id)) ? void 0 : e[n.id];
            },
            [n.id, t.id]
        ),
        k = (0, c.Wu)([x.Z], () => {
            var e;
            return null != (e = x.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : [];
        }),
        A = k.length > 1 ? m.O1.OR : m.O1.AND,
        L = i.useMemo(() => (A === m.O1.OR ? k.flat() : null != k && k.length > 0 ? k[0] : []), [A, k]),
        M = i.useMemo(() => new Set(L.map((e) => e.connectionType)), [L]);
    function G(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...L];
        r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }),
            (0, f.d_)(n.id, T(r, A));
    }
    function U() {
        d.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => G(e),
            excludedPlatformTypes: M,
            integrations: o,
            onCompleteApplication: (e) => G(C.Kt, e)
        });
    }
    let B = null;
    if (0 === L.length)
        B = (0, r.jsx)(P, {
            handleAddVerificationClicked: U,
            locked: l
        });
    else if (L.length > 0) {
        var F;
        let e = null;
        L.length < 10 &&
            (e = (0, r.jsx)(u.zxk, {
                className: s()(N.addVerificationButton, N.addVerificationButtonAppend),
                size: u.zxk.Sizes.LARGE,
                look: u.zxk.Looks.BLANK,
                color: u.zxk.Colors.LINK,
                onClick: U,
                disabled: l,
                children: (0, r.jsxs)('div', {
                    className: N.addVerificationButtonAppendTextContainer,
                    children: [
                        (0, r.jsx)(u.oFk, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        y.intl.string(y.t['OSvW5+'])
                    ]
                })
            })),
            (B = (0, r.jsxs)(r.Fragment, {
                children: [
                    ((F = () => (0, f.d_)(n.id, [])),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)('div', {
                                className: N.headerTitleContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: N.headerTitleTextContainer,
                                        children: (0, r.jsx)(u.X6q, {
                                            variant: 'eyebrow',
                                            children: y.intl.string(y.t.nMir29)
                                        })
                                    }),
                                    (0, r.jsx)(u.zxk, {
                                        className: N.headerTitleButton,
                                        size: u.zxk.Sizes.TINY,
                                        look: u.zxk.Looks.LINK,
                                        color: u.zxk.Colors.LINK,
                                        onClick: F,
                                        disabled: l,
                                        children: y.intl.string(y.t.ntW1cX)
                                    })
                                ]
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                children: y.intl.format(y.t.q5f7tL, { helpdeskArticleUrl: p.Z.getArticleURL(O.BhN.CONNECTION_DETAILS_ADMIN) })
                            })
                        ]
                    })),
                    (function (e, t, n, i, l) {
                        let s = T(i, m.O1.OR);
                        return (0, r.jsx)(u.xJW, {
                            className: N.operatorContainer,
                            title: y.intl.string(y.t.Xs7PHR),
                            children: (0, r.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: y.intl.string(y.t['W3iY5+']),
                                        value: m.O1.OR
                                    },
                                    {
                                        name: y.intl.string(y.t.gHXS9P),
                                        value: m.O1.AND
                                    }
                                ],
                                onChange: (e) => l(i, e.value),
                                value: n,
                                disabled: e || s.length < 2,
                                'aria-labelledby': S
                            })
                        });
                    })(l, n.id, A, L, (e, t) => (0, f.d_)(n.id, T(e, t))),
                    (function (e, t, n, i, l) {
                        function s(n, r) {
                            let i = [];
                            for (let t of e) i.push(E({}, t));
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
                                })(E({}, t[0].configuration), {
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
                            className: N.configurationsContainer,
                            children: Array.from(a.values()).map((e) =>
                                (0, r.jsx)(
                                    j.Z,
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
                    })(L, (e) => (0, f.d_)(n.id, T(e, A)), l, n.id, o),
                    e
                ]
            }));
    }
    return (0, r.jsx)(u.yWw, {
        className: N.scroller,
        style: { scrollPaddingTop: g },
        onScroll: Z,
        children: (0, r.jsxs)('div', {
            className: I.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: s()(I.header, I.stickyHeader, { [I.stickyHeaderElevated]: !R }),
                    ref: w,
                    children: (0, r.jsx)(_.Z, {
                        guild: t,
                        role: n,
                        selectedSection: v.ZI.VERIFICATIONS,
                        setSelectedSection: a
                    })
                }),
                (null != D ? D : 0) > 0
                    ? (0, r.jsxs)('div', {
                          className: N.warningContainer,
                          children: [
                              (0, r.jsx)(u.P4T, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: N.warningIcon
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: y.intl.string(y.t['2aFeeX'])
                              })
                          ]
                      })
                    : null,
                B
            ]
        })
    });
}
