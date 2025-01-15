n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(653041),
    n(536091);
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
    f = n(946724),
    C = n(95242),
    v = n(530198),
    I = n(420966),
    N = n(203377),
    _ = n(981631),
    T = n(856651),
    j = n(388032),
    b = n(549335),
    E = n(547760);
let S = (0, h.hQ)();
function R(e, t) {
    return t !== m.O1.AND ? Object.values(o().groupBy(e, (e) => ''.concat(e.connectionType, ':').concat(e.applicationId))) : 0 === e.length ? [] : [[...e]];
}
function y(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, i.jsxs)('div', {
        className: b.headerNoConfigContainer,
        children: [
            (0, i.jsx)(d.Heading, {
                className: b.headerHeading,
                variant: 'eyebrow',
                children: j.intl.string(j.t.nMir29)
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: j.intl.format(j.t.q5f7tL, { helpdeskArticleUrl: g.Z.getArticleURL(_.BhN.CONNECTION_DETAILS_ADMIN) })
            }),
            (0, i.jsx)(d.Button, {
                disabled: n,
                className: b.addVerificationButton,
                size: d.Button.Sizes.MEDIUM,
                look: d.Button.Looks.FILLED,
                color: d.Button.Colors.BRAND,
                onClick: t,
                children: j.intl.string(j.t['OSvW5+'])
            })
        ]
    });
}
function A(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: h, headerRef: A } = (0, C.Z)(0),
        { scrolledToTop: Z, handleScroll: L } = (0, I.V)(),
        D = (0, c.e7)(
            [x.Z],
            () => {
                var e;
                return null === (e = x.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[n.id];
            },
            [n.id, t.id]
        ),
        O = (0, c.Wu)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) && void 0 !== e ? e : [];
        }),
        M = O.length > 1 ? m.O1.OR : m.O1.AND,
        P = r.useMemo(() => (M === m.O1.OR ? O.flat() : null != O && O.length > 0 ? O[0] : []), [M, O]),
        k = r.useMemo(() => new Set(P.map((e) => e.connectionType)), [P]);
    function w(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [...P];
        i.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }),
            (0, p.d_)(n.id, R(i, M));
    }
    function B() {
        u.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => w(e),
            excludedPlatformTypes: k,
            integrations: o,
            onCompleteApplication: (e) => w(T.Kt, e)
        });
    }
    let U = null;
    if (0 === P.length)
        U = (0, i.jsx)(y, {
            handleAddVerificationClicked: B,
            locked: l
        });
    else if (P.length > 0) {
        var G, F;
        let e = null;
        P.length < 10 &&
            (e = (0, i.jsx)(d.Button, {
                className: s()(b.addVerificationButton, b.addVerificationButtonAppend),
                size: d.Button.Sizes.LARGE,
                look: d.Button.Looks.BLANK,
                color: d.Button.Colors.LINK,
                onClick: B,
                disabled: l,
                children: (0, i.jsxs)('div', {
                    className: b.addVerificationButtonAppendTextContainer,
                    children: [
                        (0, i.jsx)(d.CirclePlusIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        j.intl.string(j.t['OSvW5+'])
                    ]
                })
            })),
            (U = (0, i.jsxs)(i.Fragment, {
                children: [
                    ((G = () => (0, p.d_)(n.id, [])),
                    (F = l),
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsxs)('div', {
                                className: b.headerTitleContainer,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: b.headerTitleTextContainer,
                                        children: (0, i.jsx)(d.Heading, {
                                            variant: 'eyebrow',
                                            children: j.intl.string(j.t.nMir29)
                                        })
                                    }),
                                    (0, i.jsx)(d.Button, {
                                        className: b.headerTitleButton,
                                        size: d.Button.Sizes.TINY,
                                        look: d.Button.Looks.LINK,
                                        color: d.Button.Colors.LINK,
                                        onClick: G,
                                        disabled: F,
                                        children: j.intl.string(j.t.ntW1cX)
                                    })
                                ]
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: j.intl.format(j.t.q5f7tL, { helpdeskArticleUrl: g.Z.getArticleURL(_.BhN.CONNECTION_DETAILS_ADMIN) })
                            })
                        ]
                    })),
                    (function (e, t, n, r, l) {
                        let s = R(r, m.O1.OR);
                        return (0, i.jsx)(d.FormItem, {
                            className: b.operatorContainer,
                            title: j.intl.string(j.t.Xs7PHR),
                            children: (0, i.jsx)(d.RadioGroup, {
                                options: [
                                    {
                                        name: j.intl.string(j.t['W3iY5+']),
                                        value: m.O1.OR
                                    },
                                    {
                                        name: j.intl.string(j.t.gHXS9P),
                                        value: m.O1.AND
                                    }
                                ],
                                onChange: (e) => l(r, e.value),
                                value: n,
                                disabled: e || s.length < 2,
                                'aria-labelledby': S
                            })
                        });
                    })(l, n.id, M, P, (e, t) => (0, p.d_)(n.id, R(e, t))),
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
                                    v.Z,
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
                    })(P, (e) => (0, p.d_)(n.id, R(e, M)), l, n.id, o),
                    e
                ]
            }));
    }
    return (0, i.jsx)(d.AdvancedScrollerAuto, {
        className: b.scroller,
        style: { scrollPaddingTop: h },
        onScroll: L,
        children: (0, i.jsxs)('div', {
            className: E.contentWidth,
            children: [
                (0, i.jsx)('div', {
                    className: s()(E.header, E.stickyHeader, { [E.stickyHeaderElevated]: !Z }),
                    ref: A,
                    children: (0, i.jsx)(I.Z, {
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
                              (0, i.jsx)(d.CircleWarningIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: b.warningIcon
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: j.intl.string(j.t['2aFeeX'])
                              })
                          ]
                      })
                    : null,
                U
            ]
        })
    });
}
