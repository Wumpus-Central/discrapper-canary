n.d(t, { Z: () => T }), n(388685), n(539854), n(472816), n(794429);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    g = n(275759),
    m = n(63063),
    p = n(243730),
    f = n(84058),
    h = n(103576),
    x = n(95242),
    b = n(530198),
    j = n(420966),
    _ = n(203377),
    v = n(981631),
    O = n(856651),
    C = n(388032),
    y = n(144563),
    N = n(21321);
function E(e) {
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
            (0, r.jsx)(u.Heading, {
                className: y.headerHeading,
                variant: "eyebrow",
                children: C.intl.string(C.t.nMir27),
            }),
            (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: y.headerNoConfigSubtitle,
                children: C.intl.format(C.t.q5f7tK, {
                    helpdeskArticleUrl: m.Z.getArticleURL(v.BhN.CONNECTION_DETAILS_ADMIN),
                }),
            }),
            (0, r.jsx)(u.Button, {
                disabled: n,
                onClick: t,
                text: C.intl.string(C.t["OSvW5+"]),
                fullWidth: !0,
                variant: "primary",
            }),
        ],
    });
}
function T(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, integrations: o } = e,
        { headerHeight: T, headerRef: P } = (0, x.Z)(0),
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
        d.Z.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: (e) => G(e),
            excludedPlatformTypes: k,
            integrations: o,
            onCompleteApplication: (e) => G(O.Kt, e),
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
            (e = (0, r.jsx)(u.Button, {
                disabled: l,
                onClick: M,
                text: C.intl.string(C.t["OSvW5+"]),
                icon: u.oFk,
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
                                        children: (0, r.jsx)(u.Heading, {
                                            variant: "eyebrow",
                                            children: C.intl.string(C.t.nMir27),
                                        }),
                                    }),
                                    (0, r.jsx)(u.Avr, {
                                        variant: "critical",
                                        onClick: B,
                                        disabled: l,
                                        text: C.intl.string(C.t.ntW1cc),
                                        textVariant: "text-sm/semibold",
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: C.intl.format(C.t.q5f7tK, {
                                    helpdeskArticleUrl: m.Z.getArticleURL(v.BhN.CONNECTION_DETAILS_ADMIN),
                                }),
                            }),
                        ],
                    })),
                    (function (e, t, n, i, l) {
                        let s = I(i, g.O1.OR);
                        return (0, r.jsx)(u.FXm, {
                            label: C.intl.string(C.t.Xs7PHX),
                            options: [
                                {
                                    name: C.intl.string(C.t.W3iY58),
                                    value: g.O1.OR,
                                },
                                {
                                    name: C.intl.string(C.t.gHXS9A),
                                    value: g.O1.AND,
                                },
                            ],
                            onChange: (e) => l(i, e),
                            value: n,
                            disabled: e || s.length < 2,
                        });
                    })(l, n.id, A, L, (e, t) => (0, f.d_)(n.id, I(e, t))),
                    (function (e, t, n, i, l) {
                        function s(n, r) {
                            let i = [];
                            for (let t of e) i.push(E({}, t));
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
                                })(E({}, t[0].configuration), {
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
                            children: Array.from(a.values()).map((e) =>
                                (0, r.jsx)(
                                    b.Z,
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
                    })(L, (e) => (0, f.d_)(n.id, I(e, A)), l, n.id, o),
                    e,
                ],
            }));
    }
    return (0, r.jsx)(u.yWw, {
        className: y.scroller,
        style: { scrollPaddingTop: T },
        onScroll: Z,
        children: (0, r.jsxs)("div", {
            className: N.contentWidth,
            children: [
                (0, r.jsx)("div", {
                    className: s()(N.header, N.stickyHeader, { [N.stickyHeaderElevated]: !w }),
                    ref: P,
                    children: (0, r.jsx)(j.Z, {
                        guild: t,
                        role: n,
                        selectedSection: _.ZI.VERIFICATIONS,
                        setSelectedSection: a,
                    }),
                }),
                (null != R ? R : 0) > 0
                    ? (0, r.jsxs)("div", {
                          className: y.warningContainer,
                          children: [
                              (0, r.jsx)(u.Mgn, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: y.warningIcon,
                              }),
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: C.intl.string(C.t["2aFeef"]),
                              }),
                          ],
                      })
                    : null,
                U,
            ],
        }),
    });
}
