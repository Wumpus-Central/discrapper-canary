n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(554146),
    o = n(342494),
    c = n(990078),
    u = n(397927),
    d = n(379848),
    p = n(253932),
    h = n(975571),
    f = n(822382),
    g = n(753806),
    m = n(345859),
    b = n(145331),
    A = n(121806),
    y = n(652215),
    _ = n(49999),
    O = n(985018),
    j = n(620168);

function v(e) {
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

function x(e, t) {
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

function E(e) {
    let {
            searchContext: t,
            searchMode: n,
            onSearchModeChange: i,
            totalResults: o,
            isIndexing: c,
            isSearching: p,
            documentsIndexed: h,
            selectedChannelId: b,
        } = e,
        v = (0, m.H)(t),
        { totalFilters: x } = (0, A.vj)(v, t),
        E = l.useMemo(() => {
            if (t.type === y.I4_.DMS) {
                var e, n;
                let t = null != (e = null == (n = (0, f.Zf)(v).channel_id) ? void 0 : n.length) ? e : 0;
                return t > 0
                    ? O.intl.format(O.t.A2dqWG, {
                          filterCount: t,
                      })
                    : O.intl.string(O.t.tc619d);
            }
            return null;
        }, [t.type, v]),
        [S, I] = l.useState(null),
        N = l.useMemo(() => (p ? [] : [a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [p]),
        [T, R] = (0, d.kn)(N),
        D = T === a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        M = l.useCallback(
            (e) => {
                null != e && D && R(_.i.USER_DISMISS), I(e);
            },
            [D, R, I],
        ),
        L = l.useCallback(
            (e) => {
                R("user:explicit" === e ? _.i.USER_DISMISS : _.i.AUTO_DISMISS);
            },
            [R],
        ),
        k = l.useCallback(() => {
            M(null), g.A.openSearchFiltersModal(t);
        }, [M, t]),
        G = l.useMemo(
            () =>
                x > 0
                    ? O.intl.format(O.t.uaR4sI, {
                          filterCount: x,
                      })
                    : O.intl.string(O.t.UdhTtk),
            [x],
        ),
        U = t.type === y.I4_.DMS || t.type === y.I4_.CHANNEL;
    return (0, r.jsxs)("header", {
        className: s()(j.wL, {
            [j.g$]: null != E,
        }),
        children: [
            (0, r.jsx)("div", {
                className: j.TN,
                role: "status",
                children: (0, r.jsx)(C, {
                    totalResults: o,
                    subtitle: E,
                    isIndexing: c,
                    isSearching: p,
                    documentsIndexed: h,
                }),
            }),
            (0, r.jsxs)("div", {
                className: j.vd,
                children: [
                    (0, r.jsx)(u.Button, {
                        variant: "secondary",
                        onClick: k,
                        text: G,
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
                            selectedChannelId: b,
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
    let { totalResults: t, subtitle: n, isSearching: l, isIndexing: i, documentsIndexed: s } = e;
    return i
        ? (0, r.jsx)(I, {
              documentsIndexed: s,
          })
        : l
          ? (0, r.jsx)(N, {})
          : (0, r.jsx)(T, {
                totalResults: t,
                subtitle: n,
            });
}

function S() {
    return (0, r.jsx)("div", {
        className: j.zp,
        children: (0, r.jsx)(u.y$y, {
            type: u.y$y.Type.SPINNING_CIRCLE,
            className: j.u1,
            itemClassName: j.pu,
        }),
    });
}

function I(e) {
    let { documentsIndexed: t } = e;
    return (0, r.jsx)(c.m, {
        asContainer: !0,
        text: O.intl.formatToPlainString(O.t["4Y3O+O"], {
            count: null != t ? t : "",
        }),
        children: (0, r.jsxs)("div", {
            className: j.q_,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, r.jsx)(u.MzZ, {
                        className: j.Zd,
                        href: h.A.getArticleURL(y.MVz.SEARCH_INDEXING),
                        children: O.intl.string(O.t["G3EA+4"]),
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
                children: O.intl.string(O.t.uixzLf),
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
            children: O.intl.format(O.t.ZGVL3g, {
                count: t,
            }),
        });
    return null != n
        ? (0, r.jsxs)("div", {
              className: j.hy,
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
            setOpenPopout: s,
            onPopoverRequestClose: a,
            isPopoverVisible: c,
        } = e,
        d = l.useRef(null),
        h = p.Hu.useSetting(),
        f = l.useCallback(
            (e) => {
                if (h !== e) {
                    if (
                        ((0, b._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: p.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: b.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = {
                            type: y.I4_.DMS,
                        };
                        g.A.transitionStateToSearchContext(t, e, g.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = {
                            type: y.I4_.CHANNEL,
                            channelId: n,
                        };
                        g.A.transitionStateToSearchContext(t, e);
                    }
                    s(null), p.Hu.updateSetting(e);
                }
            },
            [h, s, t, n],
        ),
        [m, A] = l.useMemo(
            () => [
                h ? O.intl.string(O.t["8lklch"]) : O.intl.string(O.t.ji3jTF),
                h ? O.intl.string(O.t.RMQZCa) : O.intl.string(O.t["v/PagC"]),
            ],
            [h],
        ),
        _ = l.useMemo(
            () => ({
                align: "end",
            }),
            [],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.YNO, {
                targetElementRef: d,
                shouldShow: i,
                animation: u.YNO.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => s(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(u.W1t, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": O.intl.string(O.t.fb59v0),
                        onSelect: () => s(null),
                        children: (0, r.jsxs)(
                            u.rXV,
                            {
                                label: O.intl.string(O.t["/tMwrA"]),
                                children: [
                                    (0, r.jsx)(u.iDA, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: O.intl.string(O.t.jRkYAh),
                                        checked: !h,
                                        action: () => f(!1),
                                    }),
                                    (0, r.jsx)(u.iDA, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: O.intl.string(O.t["lWpJ/t"]),
                                        checked: h,
                                        action: () => f(!0),
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
                        x(v({}, e), {
                            buttonRef: d,
                            variant: "secondary",
                            icon: u.Zes,
                            onClick: () => {
                                s(i ? null : "settings");
                            },
                            "aria-label": O.intl.string(O.t["3D5yo/"]),
                            size: "sm",
                        }),
                    ),
            }),
            (0, r.jsx)(o.AM, {
                targetElementRef: d,
                shouldShow: c,
                onRequestClose: a,
                title: m,
                body: A,
                caretConfig: _,
                badge: "new",
            }),
        ],
    });
}

function w(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: i, setOpenPopout: s } = e,
        a = l.useRef(null),
        o = l.useMemo(
            () => [
                {
                    label: O.intl.string(O.t.CbaapP),
                    value: y.BBH.NEWEST,
                },
                {
                    label: O.intl.string(O.t.OukXZj),
                    value: y.BBH.OLDEST,
                },
                {
                    label: O.intl.string(O.t.q8gB52),
                    value: y.BBH.MOST_RELEVANT,
                },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                s(null), n(e);
            },
            [s, n],
        );
    return (0, r.jsx)(u.YNO, {
        targetElementRef: a,
        shouldShow: i,
        animation: u.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => s(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(u.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": O.intl.string(O.t.utp2hS),
                onSelect: () => s(null),
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
                x(v({}, e), {
                    buttonRef: a,
                    variant: "secondary",
                    icon: u.JNJ,
                    onClick: () => {
                        s(i ? null : "sort");
                    },
                    text: O.intl.string(O.t.XvNMNk),
                    "aria-label": O.intl.string(O.t.XvNMNk),
                    size: "sm",
                }),
            ),
    });
}
