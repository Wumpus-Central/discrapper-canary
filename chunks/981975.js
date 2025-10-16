n.d(t, { Z: () => T }), n(388685), n(539854), n(472816), n(794429);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    g = n(275759),
    m = n(63063),
    p = n(243730),
    f = n(84058),
    h = n(103576),
    b = n(95242),
    x = n(530198),
    j = n(420966),
    v = n(203377),
    _ = n(981631),
    C = n(856651),
    O = n(388032),
    y = n(144563),
    E = n(21321);
function N(e) {
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
function I(e, t) {
    return t !== g.O1.AND
        ? Object.values(o().groupBy(e, (e) => "".concat(e.connectionType, ":").concat(e.applicationId)))
        : 0 === e.length
          ? []
          : [[...e]];
}
function S(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, r.jsxs)("div", {
        className: y.headerNoConfigContainer,
        children: [
            (0, r.jsx)(d.Heading, {
                className: y.headerHeading,
                variant: "eyebrow",
                children: O.intl.string(O.t.nMir29),
            }),
            (0, r.jsx)(d.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                className: y.headerNoConfigSubtitle,
                children: O.intl.format(O.t.q5f7tL, {
                    helpdeskArticleUrl: m.Z.getArticleURL(_.BhN.CONNECTION_DETAILS_ADMIN),
                }),
            }),
            (0, r.jsx)(d.Button, {
                disabled: n,
                onClick: t,
                text: O.intl.string(O.t["OSvW5+"]),
                fullWidth: !0,
                variant: "primary",
            }),
        ],
    });
}
function T(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: s, integrations: o } = e,
        { headerHeight: T, headerRef: P } = (0, b.Z)(0),
        { scrolledToTop: w, handleScroll: Z } = (0, j.V)(),
        R = (0, c.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getRoleMemberCount(t.id)) ? void 0 : e[n.id];
        }, [n.id, t.id]),
        D = (0, c.Wu)([h.Z], () => {
            var e;
            return null != (e = h.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : [];
        }),
        A = D.length > 1 ? g.O1.OR : g.O1.AND,
        L = i.useMemo(() => (A === g.O1.OR ? D.flat() : null != D && D.length > 0 ? D[0] : []), [A, D]),
        k = i.useMemo(() => new Set(L.map((e) => e.connectionType)), [L]);
    function G(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...L];
        r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0,
        }),
            (0, f.d_)(n.id, I(r, A));
    }
    function M() {
        u.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: (e) => G(e),
            excludedPlatformTypes: k,
            integrations: o,
            onCompleteApplication: (e) => G(C.Kt, e),
        });
    }
    let U = null;
    if (0 === L.length)
        U = (0, r.jsx)(S, {
            handleAddVerificationClicked: M,
            locked: l,
        });
    else if (L.length > 0) {
        var B;
        let e = null;
        L.length < 10 &&
            (e = (0, r.jsx)(d.Button, {
                disabled: l,
                onClick: M,
                text: O.intl.string(O.t["OSvW5+"]),
                icon: d.oFk,
                fullWidth: !0,
                variant: "secondary",
            })),
            (U = (0, r.jsxs)(r.Fragment, {
                children: [
                    ((B = () => (0, f.d_)(n.id, [])),
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.headerTitleContainer,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: y.headerTitleTextContainer,
                                        children: (0, r.jsx)(d.Heading, {
                                            variant: "eyebrow",
                                            children: O.intl.string(O.t.nMir29),
                                        }),
                                    }),
                                    (0, r.jsx)(d.Avr, {
                                        variant: "critical",
                                        onClick: B,
                                        disabled: l,
                                        text: O.intl.string(O.t.ntW1cX),
                                        textVariant: "text-sm/semibold",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: O.intl.format(O.t.q5f7tL, {
                                    helpdeskArticleUrl: m.Z.getArticleURL(_.BhN.CONNECTION_DETAILS_ADMIN),
                                }),
                            }),
                        ],
                    })),
                    (function (e, t, n, i, l) {
                        let a = I(i, g.O1.OR);
                        return (0, r.jsx)(d.FXm, {
                            label: O.intl.string(O.t.Xs7PHR),
                            options: [
                                {
                                    name: O.intl.string(O.t["W3iY5+"]),
                                    value: g.O1.OR,
                                },
                                {
                                    name: O.intl.string(O.t.gHXS9P),
                                    value: g.O1.AND,
                                },
                            ],
                            onChange: (e) => l(i, e),
                            value: n,
                            disabled: e || a.length < 2,
                        });
                    })(l, n.id, A, L, (e, t) => (0, f.d_)(n.id, I(e, t))),
                    (function (e, t, n, i, l) {
                        function a(n, r) {
                            let i = [];
                            for (let t of e) i.push(N({}, t));
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
                        let s = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = "".concat(e.connectionType, ":").concat(e.applicationId);
                            if (s.has(n)) {
                                let r = s.get(n);
                                null == r ||
                                    r.push({
                                        index: t,
                                        configuration: e,
                                    });
                            } else
                                s.set(n, [
                                    {
                                        index: t,
                                        configuration: e,
                                    },
                                ]);
                        }),
                        s.values())) {
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
                                })(N({}, t[0].configuration), {
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
                            className: y.configurationsContainer,
                            children: Array.from(s.values()).map((e) =>
                                (0, r.jsx)(
                                    x.Z,
                                    {
                                        configurationItems: e,
                                        onConfigurationChange: a,
                                        locked: n,
                                        integrations: l,
                                    },
                                    e[0].configuration.connectionType + ":" + e[0].index,
                                ),
                            ),
                        });
                    })(L, (e) => (0, f.d_)(n.id, I(e, A)), l, n.id, o),
                    e,
                ],
            }));
    }
    return (0, r.jsx)(d.yWw, {
        className: y.scroller,
        style: { scrollPaddingTop: T },
        onScroll: Z,
        children: (0, r.jsxs)("div", {
            className: E.contentWidth,
            children: [
                (0, r.jsx)("div", {
                    className: a()(E.header, E.stickyHeader, { [E.stickyHeaderElevated]: !w }),
                    ref: P,
                    children: (0, r.jsx)(j.Z, {
                        guild: t,
                        role: n,
                        selectedSection: v.ZI.VERIFICATIONS,
                        setSelectedSection: s,
                    }),
                }),
                (null != R ? R : 0) > 0
                    ? (0, r.jsxs)("div", {
                          className: y.warningContainer,
                          children: [
                              (0, r.jsx)(d.Mgn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: y.warningIcon,
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: O.intl.string(O.t["2aFeeX"]),
                              }),
                          ],
                      })
                    : null,
                U,
            ],
        }),
    });
}
