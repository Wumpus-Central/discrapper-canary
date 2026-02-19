"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(554146),
    o = n(342494),
    c = n(990078),
    d = n(397927),
    u = n(379848),
    h = n(253932),
    A = n(975571),
    p = n(822382),
    g = n(753806),
    m = n(345859),
    _ = n(145331),
    f = n(121806),
    x = n(652215),
    C = n(49999),
    E = n(985018),
    I = n(620168);
function b(e) {
    let {
            searchContext: t,
            searchMode: n,
            onSearchModeChange: l,
            totalResults: o,
            isIndexing: c,
            isSearching: h,
            documentsIndexed: A,
            selectedChannelId: _,
        } = e,
        b = (0, m.H)(t),
        { totalFilters: S } = (0, f.vj)(b, t),
        T = s.useMemo(() => {
            if (t.type === x.I4_.DMS) {
                let e = (0, p.Zf)(b),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? E.intl.format(E.t.A2dqWG, { filterCount: t }) : E.intl.string(E.t.tc619d);
            }
            return null;
        }, [t.type, b]),
        [v, y] = s.useState(null),
        O = s.useMemo(() => (h ? [] : [a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [L, M] = (0, u.kn)(O),
        D = L === a.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        G = s.useCallback(
            (e) => {
                null != e && D && M(C.i.USER_DISMISS), y(e);
            },
            [D, M, y],
        ),
        U = s.useCallback(
            (e) => {
                M("user:explicit" === e ? C.i.USER_DISMISS : C.i.AUTO_DISMISS);
            },
            [M],
        ),
        P = s.useCallback(() => {
            G(null), g.A.openSearchFiltersModal(t);
        }, [G, t]),
        w = s.useMemo(() => (S > 0 ? E.intl.format(E.t.uaR4sI, { filterCount: S }) : E.intl.string(E.t.UdhTtk)), [S]),
        k = t.type === x.I4_.DMS || t.type === x.I4_.CHANNEL;
    return (0, i.jsxs)("header", {
        className: r()(I.wL, { [I.g$]: null != T }),
        children: [
            (0, i.jsx)("div", {
                className: I.TN,
                role: "status",
                children: (0, i.jsx)(N, {
                    totalResults: o,
                    subtitle: T,
                    isIndexing: c,
                    isSearching: h,
                    documentsIndexed: A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: I.vd,
                children: [
                    (0, i.jsx)(d.Button, { variant: "secondary", onClick: P, text: w, icon: d.RgP, size: "sm" }),
                    (0, i.jsx)(R, {
                        searchMode: n,
                        onSearchModeChange: l,
                        isPopoutOpen: "sort" === v,
                        setOpenPopout: G,
                    }),
                    k &&
                        (0, i.jsx)(j, {
                            searchContext: t,
                            selectedChannelId: _,
                            isPopoutOpen: "settings" === v,
                            setOpenPopout: G,
                            isPopoverVisible: D,
                            onPopoverRequestClose: U,
                        }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { totalResults: t, subtitle: n, isSearching: s, isIndexing: l, documentsIndexed: r } = e;
    return l
        ? (0, i.jsx)(T, { documentsIndexed: r })
        : s
          ? (0, i.jsx)(v, {})
          : (0, i.jsx)(y, { totalResults: t, subtitle: n });
}
function S() {
    return (0, i.jsx)("div", {
        className: I.zp,
        children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.SPINNING_CIRCLE, className: I.u1, itemClassName: I.pu }),
    });
}
function T(e) {
    let { documentsIndexed: t } = e;
    return (0, i.jsx)(c.m, {
        asContainer: !0,
        text: E.intl.formatToPlainString(E.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, i.jsxs)("div", {
            className: I.q_,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, i.jsx)(d.MzZ, {
                        className: I.Zd,
                        href: A.A.getArticleURL(x.MVz.SEARCH_INDEXING),
                        children: E.intl.string(E.t["G3EA+4"]),
                    }),
                }),
                (0, i.jsx)(S, {}),
            ],
        }),
    });
}
function v() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: E.intl.string(E.t.uixzLf),
            }),
            (0, i.jsx)(S, {}),
        ],
    });
}
function y(e) {
    let { totalResults: t, subtitle: n } = e,
        s = (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: E.intl.format(E.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, i.jsxs)("div", {
              className: I.hy,
              children: [s, (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "text-subtle", children: n })],
          })
        : s;
}
function j(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: l,
            setOpenPopout: r,
            onPopoverRequestClose: a,
            isPopoverVisible: c,
        } = e,
        u = s.useRef(null),
        A = h.Hu.useSetting(),
        p = s.useCallback(
            (e) => {
                if (A !== e) {
                    if (
                        ((0, _._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: h.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: _.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: x.I4_.DMS };
                        g.A.transitionStateToSearchContext(t, e, g.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: x.I4_.CHANNEL, channelId: n };
                        g.A.transitionStateToSearchContext(t, e);
                    }
                    r(null), h.Hu.updateSetting(e);
                }
            },
            [A, r, t, n],
        ),
        [m, f] = s.useMemo(
            () => [
                A ? E.intl.string(E.t["8lklch"]) : E.intl.string(E.t.ji3jTF),
                A ? E.intl.string(E.t.RMQZCa) : E.intl.string(E.t["v/PagC"]),
            ],
            [A],
        ),
        C = s.useMemo(() => ({ align: "end" }), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.YNO, {
                targetElementRef: u,
                shouldShow: l,
                animation: d.YNO.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => r(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(d.W1t, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": E.intl.string(E.t.fb59v0),
                        onSelect: () => r(null),
                        children: (0, i.jsxs)(
                            d.rXV,
                            {
                                label: E.intl.string(E.t["/tMwrA"]),
                                children: [
                                    (0, i.jsx)(d.iDA, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: E.intl.string(E.t.jRkYAh),
                                        checked: !A,
                                        action: () => p(!1),
                                    }),
                                    (0, i.jsx)(d.iDA, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: E.intl.string(E.t["lWpJ/t"]),
                                        checked: A,
                                        action: () => p(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, i.jsx)(d.K0, {
                        ...e,
                        buttonRef: u,
                        variant: "secondary",
                        icon: d.Zes,
                        onClick: () => {
                            r(l ? null : "settings");
                        },
                        "aria-label": E.intl.string(E.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, i.jsx)(o.AM, {
                targetElementRef: u,
                shouldShow: c,
                onRequestClose: a,
                title: m,
                body: f,
                caretConfig: C,
                badge: "new",
            }),
        ],
    });
}
function R(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: l, setOpenPopout: r } = e,
        a = s.useRef(null),
        o = s.useMemo(
            () => [
                { label: E.intl.string(E.t.CbaapP), value: x.BBH.NEWEST },
                { label: E.intl.string(E.t.OukXZj), value: x.BBH.OLDEST },
                { label: E.intl.string(E.t.q8gB52), value: x.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = s.useCallback(
            (e) => {
                r(null), n(e);
            },
            [r, n],
        );
    return (0, i.jsx)(d.YNO, {
        targetElementRef: a,
        shouldShow: l,
        animation: d.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => r(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(d.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": E.intl.string(E.t.utp2hS),
                onSelect: () => r(null),
                children: (0, i.jsx)(
                    d.rXV,
                    {
                        children: o.map((e) => {
                            let { label: n, value: s } = e;
                            return (0, i.jsx)(
                                d.iDA,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${s}`,
                                    label: n,
                                    action: () => c(s),
                                    checked: t === s,
                                },
                                s,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, i.jsx)(d.Button, {
                ...e,
                buttonRef: a,
                variant: "secondary",
                icon: d.JNJ,
                onClick: () => {
                    r(l ? null : "sort");
                },
                text: E.intl.string(E.t.XvNMNk),
                "aria-label": E.intl.string(E.t.XvNMNk),
                size: "sm",
            }),
    });
}
