n.d(t, { Z: () => w }), n(47120), n(653041), n(86693), n(536091);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(275759),
    g = n(313201),
    p = n(63063),
    h = n(243730),
    f = n(764260),
    b = n(946724),
    x = n(95242),
    j = n(530198),
    N = n(420966),
    _ = n(203377),
    v = n(981631),
    C = n(856651),
    O = n(388032),
    y = n(419353),
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
        className: y.headerNoConfigContainer,
        children: [
            (0, r.jsx)(d.X6q, {
                className: y.headerHeading,
                variant: 'eyebrow',
                children: O.NW.string(O.t.nMir29)
            }),
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: O.NW.format(O.t.q5f7tL, { helpdeskArticleUrl: p.Z.getArticleURL(v.BhN.CONNECTION_DETAILS_ADMIN) })
            }),
            (0, r.jsx)(d.zxk, {
                disabled: n,
                className: y.addVerificationButton,
                size: d.zxk.Sizes.MEDIUM,
                look: d.zxk.Looks.FILLED,
                color: d.zxk.Colors.BRAND,
                onClick: t,
                children: O.NW.string(O.t['OSvW5+'])
            })
        ]
    });
}
function w(e) {
    let { guild: t, role: n, locked: s, setSelectedSection: l, integrations: o } = e,
        { headerHeight: g, headerRef: w } = (0, x.Z)(0),
        { scrolledToTop: R, handleScroll: Z } = (0, N.V)(),
        D = (0, c.e7)(
            [h.Z],
            () => {
                var e;
                return null == (e = h.Z.getRoleMemberCount(t.id)) ? void 0 : e[n.id];
            },
            [n.id, t.id]
        ),
        A = (0, c.Wu)([b.Z], () => {
            var e;
            return null != (e = b.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : [];
        }),
        k = A.length > 1 ? m.O1.OR : m.O1.AND,
        W = i.useMemo(() => (k === m.O1.OR ? A.flat() : null != A && A.length > 0 ? A[0] : []), [k, A]),
        L = i.useMemo(() => new Set(W.map((e) => e.connectionType)), [W]);
    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...W];
        r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }),
            (0, f.d_)(n.id, T(r, k));
    }
    function G() {
        u.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => M(e),
            excludedPlatformTypes: L,
            integrations: o,
            onCompleteApplication: (e) => M(C.Kt, e)
        });
    }
    let U = null;
    if (0 === W.length)
        U = (0, r.jsx)(P, {
            handleAddVerificationClicked: G,
            locked: s
        });
    else if (W.length > 0) {
        var B;
        let e = null;
        W.length < 10 &&
            (e = (0, r.jsx)(d.zxk, {
                className: a()(y.addVerificationButton, y.addVerificationButtonAppend),
                size: d.zxk.Sizes.LARGE,
                look: d.zxk.Looks.BLANK,
                color: d.zxk.Colors.LINK,
                onClick: G,
                disabled: s,
                children: (0, r.jsxs)('div', {
                    className: y.addVerificationButtonAppendTextContainer,
                    children: [
                        (0, r.jsx)(d.oFk, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        O.NW.string(O.t['OSvW5+'])
                    ]
                })
            })),
            (U = (0, r.jsxs)(r.Fragment, {
                children: [
                    ((B = () => (0, f.d_)(n.id, [])),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)('div', {
                                className: y.headerTitleContainer,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: y.headerTitleTextContainer,
                                        children: (0, r.jsx)(d.X6q, {
                                            variant: 'eyebrow',
                                            children: O.NW.string(O.t.nMir29)
                                        })
                                    }),
                                    (0, r.jsx)(d.zxk, {
                                        className: y.headerTitleButton,
                                        size: d.zxk.Sizes.TINY,
                                        look: d.zxk.Looks.LINK,
                                        color: d.zxk.Colors.LINK,
                                        onClick: B,
                                        disabled: s,
                                        children: O.NW.string(O.t.ntW1cX)
                                    })
                                ]
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: O.NW.format(O.t.q5f7tL, { helpdeskArticleUrl: p.Z.getArticleURL(v.BhN.CONNECTION_DETAILS_ADMIN) })
                            })
                        ]
                    })),
                    (function (e, t, n, i, s) {
                        let a = T(i, m.O1.OR);
                        return (0, r.jsx)(d.xJW, {
                            className: y.operatorContainer,
                            title: O.NW.string(O.t.Xs7PHR),
                            children: (0, r.jsx)(d.FXm, {
                                options: [
                                    {
                                        name: O.NW.string(O.t['W3iY5+']),
                                        value: m.O1.OR
                                    },
                                    {
                                        name: O.NW.string(O.t.gHXS9P),
                                        value: m.O1.AND
                                    }
                                ],
                                onChange: (e) => s(i, e.value),
                                value: n,
                                disabled: e || a.length < 2,
                                'aria-labelledby': S
                            })
                        });
                    })(s, n.id, k, W, (e, t) => (0, f.d_)(n.id, T(e, t))),
                    (function (e, t, n, i, s) {
                        function a(n, r) {
                            let i = [];
                            for (let t of e) i.push(E({}, t));
                            if (null == n) {
                                let t = e[r];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? (i = i.filter((e) => (null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId))) : i.splice(r, 1);
                            } else -1 === r ? i.push(n) : r >= 0 && (i[r] = n);
                            t(i);
                        }
                        let l = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = ''.concat(e.connectionType, ':').concat(e.applicationId);
                            if (l.has(n)) {
                                let r = l.get(n);
                                null == r ||
                                    r.push({
                                        index: t,
                                        configuration: e
                                    });
                            } else
                                l.set(n, [
                                    {
                                        index: t,
                                        configuration: e
                                    }
                                ]);
                        }),
                        l.values())) {
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
                            className: y.configurationsContainer,
                            children: Array.from(l.values()).map((e) =>
                                (0, r.jsx)(
                                    j.Z,
                                    {
                                        configurationItems: e,
                                        onConfigurationChange: a,
                                        locked: n,
                                        integrations: s
                                    },
                                    e[0].configuration.connectionType + ':' + e[0].index
                                )
                            )
                        });
                    })(W, (e) => (0, f.d_)(n.id, T(e, k)), s, n.id, o),
                    e
                ]
            }));
    }
    return (0, r.jsx)(d.yWw, {
        className: y.scroller,
        style: { scrollPaddingTop: g },
        onScroll: Z,
        children: (0, r.jsxs)('div', {
            className: I.contentWidth,
            children: [
                (0, r.jsx)('div', {
                    className: a()(I.header, I.stickyHeader, { [I.stickyHeaderElevated]: !R }),
                    ref: w,
                    children: (0, r.jsx)(N.Z, {
                        guild: t,
                        role: n,
                        selectedSection: _.ZI.VERIFICATIONS,
                        setSelectedSection: l
                    })
                }),
                (null != D ? D : 0) > 0
                    ? (0, r.jsxs)('div', {
                          className: y.warningContainer,
                          children: [
                              (0, r.jsx)(d.P4T, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: y.warningIcon
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: O.NW.string(O.t['2aFeeX'])
                              })
                          ]
                      })
                    : null,
                U
            ]
        })
    });
}
