n.d(t, { Z: () => P }), n(388685), n(539854), n(472816), n(794429);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(538534),
    u = n(481060),
    g = n(570140),
    m = n(275759),
    p = n(63063),
    f = n(243730),
    h = n(84058),
    x = n(103576),
    b = n(95242),
    j = n(530198),
    _ = n(420966),
    v = n(203377),
    C = n(981631),
    O = n(856651),
    y = n(388032),
    N = n(144563),
    E = n(21321);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
    return t !== m.O1.AND
        ? Object.values(o().groupBy(e, (e) => "".concat(e.connectionType, ":").concat(e.applicationId)))
        : 0 === e.length
          ? []
          : [[...e]];
}
function T(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, r.jsxs)("div", {
        className: N.headerNoConfigContainer,
        children: [
            (0, r.jsx)(u.X6q, {
                className: N.headerHeading,
                variant: "eyebrow",
                children: y.intl.string(y.t.nMir29),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: N.headerNoConfigSubtitle,
                children: y.intl.format(y.t.q5f7tL, {
                    helpdeskArticleUrl: p.Z.getArticleURL(C.BhN.CONNECTION_DETAILS_ADMIN),
                }),
            }),
            (0, r.jsx)(u.zxk, {
                disabled: n,
                onClick: t,
                text: y.intl.string(y.t["OSvW5+"]),
                fullWidth: !0,
                variant: "primary",
            }),
        ],
    });
}
function P(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: P, headerRef: w } = (0, b.Z)(0),
        { scrolledToTop: Z, handleScroll: R } = (0, _.V)(),
        D = (0, c.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getRoleMemberCount(t.id)) ? void 0 : e[n.id];
        }, [n.id, t.id]),
        A = (0, c.Wu)([x.Z], () => {
            var e;
            return null != (e = x.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : [];
        }),
        L = A.length > 1 ? m.O1.OR : m.O1.AND,
        k = i.useMemo(() => (L === m.O1.OR ? A.flat() : null != A && A.length > 0 ? A[0] : []), [L, A]),
        G = i.useMemo(() => new Set(k.map((e) => e.connectionType)), [k]);
    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...k];
        r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0,
        }),
            (0, h.d_)(n.id, S(r, L));
    }
    function U() {
        g.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: (e) => M(e),
            excludedPlatformTypes: G,
            integrations: o,
            onCompleteApplication: (e) => M(O.Kt, e),
        });
    }
    let B = null;
    if (0 === k.length)
        B = (0, r.jsx)(T, {
            handleAddVerificationClicked: U,
            locked: l,
        });
    else if (k.length > 0) {
        var F;
        let e = null;
        k.length < 10 &&
            (e = (0, r.jsx)(u.zxk, {
                disabled: l,
                onClick: U,
                text: y.intl.string(y.t["OSvW5+"]),
                icon: u.oFk,
                fullWidth: !0,
                variant: "secondary",
            })),
            (B = (0, r.jsxs)(r.Fragment, {
                children: [
                    ((F = () => (0, h.d_)(n.id, [])),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: N.headerTitleContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: N.headerTitleTextContainer,
                                        children: (0, r.jsx)(u.X6q, {
                                            variant: "eyebrow",
                                            children: y.intl.string(y.t.nMir29),
                                        }),
                                    }),
                                    (0, r.jsx)(u.Avr, {
                                        variant: "critical",
                                        onClick: F,
                                        disabled: l,
                                        text: y.intl.string(y.t.ntW1cX),
                                        textVariant: "text-sm/semibold",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: y.intl.format(y.t.q5f7tL, {
                                    helpdeskArticleUrl: p.Z.getArticleURL(C.BhN.CONNECTION_DETAILS_ADMIN),
                                }),
                            }),
                        ],
                    })),
                    (function (e, t, n, i, l) {
                        let s = S(i, m.O1.OR);
                        return (0, r.jsx)(d.E, {
                            label: y.intl.string(y.t.Xs7PHR),
                            options: [
                                {
                                    name: y.intl.string(y.t["W3iY5+"]),
                                    value: m.O1.OR,
                                },
                                {
                                    name: y.intl.string(y.t.gHXS9P),
                                    value: m.O1.AND,
                                },
                            ],
                            onChange: (e) => l(i, e),
                            value: n,
                            disabled: e || s.length < 2,
                        });
                    })(l, n.id, L, k, (e, t) => (0, h.d_)(n.id, S(e, t))),
                    (function (e, t, n, i, l) {
                        function s(n, r) {
                            let i = [];
                            for (let t of e) i.push(I({}, t));
                            if (null == n) {
                                let t = e[r];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value
                                    ? (i = i.filter((e) =>
                                          null == t.applicationId
                                              ? e.connectionType !== t.connectionType
                                              : e.connectionType !== t.connectionType &&
                                                e.applicationId !== t.applicationId,
                                      ))
                                    : i.splice(r, 1);
                            } else -1 === r ? i.push(n) : r >= 0 && (i[r] = n);
                            t(i);
                        }
                        let a = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = "".concat(e.connectionType, ":").concat(e.applicationId);
                            if (a.has(n)) {
                                let r = a.get(n);
                                null == r ||
                                    r.push({
                                        index: t,
                                        configuration: e,
                                    });
                            } else
                                a.set(n, [
                                    {
                                        index: t,
                                        configuration: e,
                                    },
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
                                })(I({}, t[0].configuration), {
                                    connectionMetadataField: void 0,
                                    operator: void 0,
                                    value: void 0,
                                }),
                                r = e.push(n);
                            t.push({
                                index: r - 1,
                                configuration: n,
                            });
                        }
                        return (0, r.jsx)("div", {
                            className: N.configurationsContainer,
                            children: Array.from(a.values()).map((e) =>
                                (0, r.jsx)(
                                    j.Z,
                                    {
                                        configurationItems: e,
                                        onConfigurationChange: s,
                                        locked: n,
                                        integrations: l,
                                    },
                                    e[0].configuration.connectionType + ":" + e[0].index,
                                ),
                            ),
                        });
                    })(k, (e) => (0, h.d_)(n.id, S(e, L)), l, n.id, o),
                    e,
                ],
            }));
    }
    return (0, r.jsx)(u.yWw, {
        className: N.scroller,
        style: { scrollPaddingTop: P },
        onScroll: R,
        children: (0, r.jsxs)("div", {
            className: E.contentWidth,
            children: [
                (0, r.jsx)("div", {
                    className: s()(E.header, E.stickyHeader, { [E.stickyHeaderElevated]: !Z }),
                    ref: w,
                    children: (0, r.jsx)(_.Z, {
                        guild: t,
                        role: n,
                        selectedSection: v.ZI.VERIFICATIONS,
                        setSelectedSection: a,
                    }),
                }),
                (null != D ? D : 0) > 0
                    ? (0, r.jsxs)("div", {
                          className: N.warningContainer,
                          children: [
                              (0, r.jsx)(u.Mgn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: N.warningIcon,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: y.intl.string(y.t["2aFeeX"]),
                              }),
                          ],
                      })
                    : null,
                B,
            ],
        }),
    });
}
