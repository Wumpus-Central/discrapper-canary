n.d(t, { A: () => _ }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(554146),
    o = n(342494),
    c = n(990078),
    u = n(397927),
    d = n(379848),
    f = n(253932),
    p = n(975571),
    h = n(822382),
    b = n(753806),
    g = n(345859),
    m = n(145331),
    A = n(121806),
    y = n(652215),
    O = n(49999),
    j = n(985018),
    v = n(620168);
function x(e) {
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
function E(e, t) {
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
function _(e) {
    let {
            searchContext: t,
            searchMode: n,
            onSearchModeChange: i,
            totalResults: o,
            isIndexing: c,
            isSearching: f,
            documentsIndexed: p,
            selectedChannelId: m,
        } = e,
        x = (0, g.H)(t),
        { totalFilters: E } = (0, A.vj)(x, t),
        _ = l.useMemo(() => {
            if (t.type === y.I4_.DMS) {
                var e, n;
                let t = null != (e = null == (n = (0, h.Zf)(x).channel_id) ? void 0 : n.length) ? e : 0;
                return t > 0 ? j.intl.format(j.t.A2dqWG, { filterCount: t }) : j.intl.string(j.t.tc619d);
            }
            return null;
        }, [t.type, x]),
        [S, I] = l.useState(null),
        N = l.useMemo(() => (f ? [] : [s.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [f]),
        [T, R] = (0, d.kn)(N),
        D = T === s.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        M = l.useCallback(
            (e) => {
                null != e && D && R(O.i.USER_DISMISS), I(e);
            },
            [D, R, I],
        ),
        L = l.useCallback(
            (e) => {
                R("user:explicit" === e ? O.i.USER_DISMISS : O.i.AUTO_DISMISS);
            },
            [R],
        ),
        G = l.useCallback(() => {
            M(null), b.A.openSearchFiltersModal(t);
        }, [M, t]),
        k = l.useMemo(() => (E > 0 ? j.intl.format(j.t.uaR4sI, { filterCount: E }) : j.intl.string(j.t.UdhTtk)), [E]),
        U = t.type === y.I4_.DMS || t.type === y.I4_.CHANNEL;
    return (0, r.jsxs)("header", {
        className: a()(v.wL, { [v.g$]: null != _ }),
        children: [
            (0, r.jsx)("div", {
                className: v.TN,
                role: "status",
                children: (0, r.jsx)(C, {
                    totalResults: o,
                    subtitle: _,
                    isIndexing: c,
                    isSearching: f,
                    documentsIndexed: p,
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.vd,
                children: [
                    (0, r.jsx)(u.Button, {
                        variant: "secondary",
                        onClick: G,
                        text: k,
                        icon: u.RgP,
                        size: "sm",
                    }),
                    (0, r.jsx)(w, {
                        searchMode: n,
                        onSearchModeChange: i,
                        isPopoutOpen: "sort" === S,
                        setOpenPopout: M,
                    }),
                    U &&
                        (0, r.jsx)(P, {
                            searchContext: t,
                            selectedChannelId: m,
                            isPopoutOpen: "settings" === S,
                            setOpenPopout: M,
                            isPopoverVisible: D,
                            onPopoverRequestClose: L,
                        }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { totalResults: t, subtitle: n, isSearching: l, isIndexing: i, documentsIndexed: a } = e;
    return i
        ? (0, r.jsx)(I, { documentsIndexed: a })
        : l
          ? (0, r.jsx)(N, {})
          : (0, r.jsx)(T, {
                totalResults: t,
                subtitle: n,
            });
}
function S() {
    return (0, r.jsx)("div", {
        className: v.zp,
        children: (0, r.jsx)(u.y$y, {
            type: u.y$y.Type.SPINNING_CIRCLE,
            className: v.u1,
            itemClassName: v.pu,
        }),
    });
}
function I(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: j.intl.formatToPlainString(j.t["4Y3O+O"], { count: null != t ? t : "" }),
        children: (0, r.jsxs)("div", {
            className: v.q_,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(u.MzZ, {
                        className: v.Zd,
                        href: p.A.getArticleURL(y.MVz.SEARCH_INDEXING),
                        children: j.intl.string(j.t["G3EA+4"]),
                    }),
                }),
                (0, r.jsx)(S, {}),
            ],
        }),
    });
}
function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: j.intl.string(j.t.uixzLf),
            }),
            (0, r.jsx)(S, {}),
        ],
    });
}
function T(e) {
    let { totalResults: t, subtitle: n } = e,
        l = (0, r.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: j.intl.format(j.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: v.hy,
              children: [
                  l,
                  (0, r.jsx)(u.Text, {
                      variant: "text-xs/medium",
                      color: "text-subtle",
                      children: n,
                  }),
              ],
          })
        : l;
}
function P(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: i,
            setOpenPopout: a,
            onPopoverRequestClose: s,
            isPopoverVisible: c,
        } = e,
        d = l.useRef(null),
        p = f.Hu.useSetting(),
        h = l.useCallback(
            (e) => {
                if (p !== e) {
                    if (
                        ((0, m._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: f.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: m.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: y.I4_.DMS };
                        b.A.transitionStateToSearchContext(t, e, b.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = {
                            type: y.I4_.CHANNEL,
                            channelId: n,
                        };
                        b.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), f.Hu.updateSetting(e);
                }
            },
            [p, a, t, n],
        ),
        [g, A] = l.useMemo(
            () => [
                p ? j.intl.string(j.t["8lklch"]) : j.intl.string(j.t.ji3jTF),
                p ? j.intl.string(j.t.RMQZCa) : j.intl.string(j.t["v/PagC"]),
            ],
            [p],
        ),
        O = l.useMemo(() => ({ align: "end" }), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.YNO, {
                targetElementRef: d,
                shouldShow: i,
                animation: u.YNO.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(u.W1t, {
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": j.intl.string(j.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, r.jsxs)(
                            u.rXV,
                            {
                                label: j.intl.string(j.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(u.iDA, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: j.intl.string(j.t.jRkYAh),
                                        checked: !p,
                                        action: () => h(!1),
                                    }),
                                    (0, r.jsx)(u.iDA, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: j.intl.string(j.t["lWpJ/t"]),
                                        checked: p,
                                        action: () => h(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, r.jsx)(
                        u.K0,
                        E(x({}, e), {
                            buttonRef: d,
                            variant: "secondary",
                            icon: u.Zes,
                            onClick: () => {
                                a(i ? null : "settings");
                            },
                            "aria-label": j.intl.string(j.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(o.AM, {
                targetElementRef: d,
                shouldShow: c,
                onRequestClose: s,
                title: g,
                body: A,
                caretConfig: O,
                badge: "new",
            }),
        ],
    });
}
function w(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: i, setOpenPopout: a } = e,
        s = l.useRef(null),
        o = l.useMemo(
            () => [
                {
                    label: j.intl.string(j.t.CbaapP),
                    value: y.BBH.NEWEST,
                },
                {
                    label: j.intl.string(j.t.OukXZj),
                    value: y.BBH.OLDEST,
                },
                {
                    label: j.intl.string(j.t.q8gB52),
                    value: y.BBH.MOST_RELEVANT,
                },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                a(null), n(e);
            },
            [a, n],
        );
    return (0, r.jsx)(u.YNO, {
        targetElementRef: s,
        shouldShow: i,
        animation: u.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(u.W1t, {
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": j.intl.string(j.t.utp2hS),
                onSelect: () => a(null),
                children: (0, r.jsx)(
                    u.rXV,
                    {
                        children: o.map((e) => {
                            let { label: n, value: l } = e;
                            return (0, r.jsx)(
                                u.iDA,
                                {
                                    group: "sort-by",
                                    id: "sort-by-option-".concat(l),
                                    label: n,
                                    action: () => c(l),
                                    checked: t === l,
                                },
                                l,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, r.jsx)(
                u.Button,
                E(x({}, e), {
                    buttonRef: s,
                    variant: "secondary",
                    icon: u.JNJ,
                    onClick: () => {
                        a(i ? null : "sort");
                    },
                    text: j.intl.string(j.t.XvNMNk),
                    "aria-label": j.intl.string(j.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
