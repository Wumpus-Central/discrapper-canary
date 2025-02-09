n.d(t, { Z: () => y }), n(47120), n(653041), n(536091);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    m = n(275759),
    h = n(313201),
    g = n(63063),
    x = n(243730),
    p = n(764260),
    _ = n(946724),
    C = n(95242),
    f = n(530198),
    v = n(420966),
    N = n(203377),
    j = n(981631),
    I = n(856651),
    E = n(388032),
    b = n(618005),
    T = n(853005);
let S = (0, h.hQ)();
function R(e, t) {
    return t !== m.O1.AND ? Object.values(o().groupBy(e, (e) => ''.concat(e.connectionType, ':').concat(e.applicationId))) : 0 === e.length ? [] : [[...e]];
}
function Z(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, i.jsxs)('div', {
        className: b.headerNoConfigContainer,
        children: [
            (0, i.jsx)(d.X6q, {
                className: b.headerHeading,
                variant: 'eyebrow',
                children: E.intl.string(E.t.nMir29)
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: E.intl.format(E.t.q5f7tL, { helpdeskArticleUrl: g.Z.getArticleURL(j.BhN.CONNECTION_DETAILS_ADMIN) })
            }),
            (0, i.jsx)(d.zxk, {
                disabled: n,
                className: b.addVerificationButton,
                size: d.zxk.Sizes.MEDIUM,
                look: d.zxk.Looks.FILLED,
                color: d.zxk.Colors.BRAND,
                onClick: t,
                children: E.intl.string(E.t['OSvW5+'])
            })
        ]
    });
}
function y(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: h, headerRef: y } = (0, C.Z)(0),
        { scrolledToTop: A, handleScroll: L } = (0, v.V)(),
        D = (0, c.e7)(
            [x.Z],
            () => {
                var e;
                return null === (e = x.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[n.id];
            },
            [n.id, t.id]
        ),
        O = (0, c.Wu)([_.Z], () => {
            var e;
            return null !== (e = _.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) && void 0 !== e ? e : [];
        }),
        k = O.length > 1 ? m.O1.OR : m.O1.AND,
        P = r.useMemo(() => (k === m.O1.OR ? O.flat() : null != O && O.length > 0 ? O[0] : []), [k, O]),
        w = r.useMemo(() => new Set(P.map((e) => e.connectionType)), [P]);
    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [...P];
        i.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }),
            (0, p.d_)(n.id, R(i, k));
    }
    function U() {
        u.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => M(e),
            excludedPlatformTypes: w,
            integrations: o,
            onCompleteApplication: (e) => M(I.Kt, e)
        });
    }
    let G = null;
    if (0 === P.length)
        G = (0, i.jsx)(Z, {
            handleAddVerificationClicked: U,
            locked: l
        });
    else if (P.length > 0) {
        var B;
        let e = null;
        P.length < 10 &&
            (e = (0, i.jsx)(d.zxk, {
                className: s()(b.addVerificationButton, b.addVerificationButtonAppend),
                size: d.zxk.Sizes.LARGE,
                look: d.zxk.Looks.BLANK,
                color: d.zxk.Colors.LINK,
                onClick: U,
                disabled: l,
                children: (0, i.jsxs)('div', {
                    className: b.addVerificationButtonAppendTextContainer,
                    children: [
                        (0, i.jsx)(d.oFk, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        E.intl.string(E.t['OSvW5+'])
                    ]
                })
            })),
            (G = (0, i.jsxs)(i.Fragment, {
                children: [
                    ((B = () => (0, p.d_)(n.id, [])),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: b.headerTitleContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: b.headerTitleTextContainer,
                                        children: (0, i.jsx)(d.X6q, {
                                            variant: 'eyebrow',
                                            children: E.intl.string(E.t.nMir29)
                                        })
                                    }),
                                    (0, i.jsx)(d.zxk, {
                                        className: b.headerTitleButton,
                                        size: d.zxk.Sizes.TINY,
                                        look: d.zxk.Looks.LINK,
                                        color: d.zxk.Colors.LINK,
                                        onClick: B,
                                        disabled: l,
                                        children: E.intl.string(E.t.ntW1cX)
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: E.intl.format(E.t.q5f7tL, { helpdeskArticleUrl: g.Z.getArticleURL(j.BhN.CONNECTION_DETAILS_ADMIN) })
                            })
                        ]
                    })),
                    (function (e, t, n, r, l) {
                        let s = R(r, m.O1.OR);
                        return (0, i.jsx)(d.xJW, {
                            className: b.operatorContainer,
                            title: E.intl.string(E.t.Xs7PHR),
                            children: (0, i.jsx)(d.FXm, {
                                options: [
                                    {
                                        name: E.intl.string(E.t['W3iY5+']),
                                        value: m.O1.OR
                                    },
                                    {
                                        name: E.intl.string(E.t.gHXS9P),
                                        value: m.O1.AND
                                    }
                                ],
                                onChange: (e) => l(r, e.value),
                                value: n,
                                disabled: e || s.length < 2,
                                'aria-labelledby': S
                            })
                        });
                    })(l, n.id, k, P, (e, t) => (0, p.d_)(n.id, R(e, t))),
                    (function (e, t, n, r, l) {
                        function s(n, i) {
                            let r = [];
                            for (let t of e) r.push({ ...t });
                            if (null == n) {
                                let t = e[i];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? (r = r.filter((e) => (null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId))) : r.splice(i, 1);
                            } else -1 === i ? r.push(n) : i >= 0 && (r[i] = n);
                            t(r);
                        }
                        let a = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = ''.concat(e.connectionType, ':').concat(e.applicationId);
                            if (a.has(n)) {
                                let i = a.get(n);
                                null == i ||
                                    i.push({
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
                            let n = {
                                    ...t[0].configuration,
                                    connectionMetadataField: void 0,
                                    operator: void 0,
                                    value: void 0
                                },
                                i = e.push(n);
                            t.push({
                                index: i - 1,
                                configuration: n
                            });
                        }
                        return (0, i.jsx)('div', {
                            className: b.configurationsContainer,
                            children: Array.from(a.values()).map((e) =>
                                (0, i.jsx)(
                                    f.Z,
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
                    })(P, (e) => (0, p.d_)(n.id, R(e, k)), l, n.id, o),
                    e
                ]
            }));
    }
    return (0, i.jsx)(d.yWw, {
        className: b.scroller,
        style: { scrollPaddingTop: h },
        onScroll: L,
        children: (0, i.jsxs)('div', {
            className: T.contentWidth,
            children: [
                (0, i.jsx)('div', {
                    className: s()(T.header, T.stickyHeader, { [T.stickyHeaderElevated]: !A }),
                    ref: y,
                    children: (0, i.jsx)(v.Z, {
                        guild: t,
                        role: n,
                        selectedSection: N.ZI.VERIFICATIONS,
                        setSelectedSection: a
                    })
                }),
                (null != D ? D : 0) > 0
                    ? (0, i.jsxs)('div', {
                          className: b.warningContainer,
                          children: [
                              (0, i.jsx)(d.P4T, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: b.warningIcon
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: E.intl.string(E.t['2aFeeX'])
                              })
                          ]
                      })
                    : null,
                G
            ]
        })
    });
}
