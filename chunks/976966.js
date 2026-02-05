n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(554146),
    o = n(342494),
    d = n(990078),
    c = n(397927),
    u = n(379848),
    h = n(253932),
    A = n(975571),
    g = n(822382),
    m = n(753806),
    p = n(345859),
    _ = n(145331),
    x = n(121806),
    f = n(652215),
    E = n(49999),
    C = n(985018),
    I = n(620168);
function S(e) {
    let {
            searchContext: t,
            searchMode: n,
            onSearchModeChange: s,
            totalResults: o,
            isIndexing: d,
            isSearching: h,
            documentsIndexed: A,
            selectedChannelId: _,
        } = e,
        S = (0, p.H)(t),
        { totalFilters: N } = (0, x.vj)(S, t),
        T = l.useMemo(() => {
            if (t.type === f.I4_.DMS) {
                let e = (0, g.Zf)(S),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? C.intl.format(C.t.A2dqWG, { filterCount: t }) : C.intl.string(C.t.tc619d);
            }
            return null;
        }, [t.type, S]),
        [j, v] = l.useState(null),
        O = l.useMemo(() => (h ? [] : [r.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [L, D] = (0, u.kn)(O),
        M = L === r.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        G = l.useCallback(
            (e) => {
                null != e && M && D(E.i.USER_DISMISS), v(e);
            },
            [M, D, v],
        ),
        U = l.useCallback(
            (e) => {
                D("user:explicit" === e ? E.i.USER_DISMISS : E.i.AUTO_DISMISS);
            },
            [D],
        ),
        P = l.useCallback(() => {
            G(null), m.A.openSearchFiltersModal(t);
        }, [G, t]),
        k = l.useMemo(() => (N > 0 ? C.intl.format(C.t.uaR4sI, { filterCount: N }) : C.intl.string(C.t.UdhTtk)), [N]),
        w = t.type === f.I4_.DMS || t.type === f.I4_.CHANNEL;
    return (0, i.jsxs)("header", {
        className: a()(I.wL, { [I.g$]: null != T }),
        children: [
            (0, i.jsx)("div", {
                className: I.TN,
                role: "status",
                children: (0, i.jsx)(b, {
                    totalResults: o,
                    subtitle: T,
                    isIndexing: d,
                    isSearching: h,
                    documentsIndexed: A,
                }),
            }),
            (0, i.jsxs)("div", {
                className: I.vd,
                children: [
                    (0, i.jsx)(c.Button, { variant: "secondary", onClick: P, text: k, icon: c.RgP, size: "sm" }),
                    (0, i.jsx)(R, {
                        searchMode: n,
                        onSearchModeChange: s,
                        isPopoutOpen: "sort" === j,
                        setOpenPopout: G,
                    }),
                    w &&
                        (0, i.jsx)(y, {
                            searchContext: t,
                            selectedChannelId: _,
                            isPopoutOpen: "settings" === j,
                            setOpenPopout: G,
                            isPopoverVisible: M,
                            onPopoverRequestClose: U,
                        }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { totalResults: t, subtitle: n, isSearching: l, isIndexing: s, documentsIndexed: a } = e;
    return s
        ? (0, i.jsx)(T, { documentsIndexed: a })
        : l
          ? (0, i.jsx)(j, {})
          : (0, i.jsx)(v, { totalResults: t, subtitle: n });
}
function N() {
    return (0, i.jsx)("div", {
        className: I.zp,
        children: (0, i.jsx)(c.y$y, { type: c.y$y.Type.SPINNING_CIRCLE, className: I.u1, itemClassName: I.pu }),
    });
}
function T(e) {
    let { documentsIndexed: t } = e;
    return (0, i.jsx)(d.m, {
        asContainer: !0,
        text: C.intl.formatToPlainString(C.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, i.jsxs)("div", {
            className: I.q_,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, i.jsx)(c.MzZ, {
                        className: I.Zd,
                        href: A.A.getArticleURL(f.MVz.SEARCH_INDEXING),
                        children: C.intl.string(C.t["G3EA+4"]),
                    }),
                }),
                (0, i.jsx)(N, {}),
            ],
        }),
    });
}
function j() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: C.intl.string(C.t.uixzLf),
            }),
            (0, i.jsx)(N, {}),
        ],
    });
}
function v(e) {
    let { totalResults: t, subtitle: n } = e,
        l = (0, i.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: C.intl.format(C.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, i.jsxs)("div", {
              className: I.hy,
              children: [l, (0, i.jsx)(c.Text, { variant: "text-xs/medium", color: "text-subtle", children: n })],
          })
        : l;
}
function y(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: s,
            setOpenPopout: a,
            onPopoverRequestClose: r,
            isPopoverVisible: d,
        } = e,
        u = l.useRef(null),
        A = h.Hu.useSetting(),
        g = l.useCallback(
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
                        let e = { type: f.I4_.DMS };
                        m.A.transitionStateToSearchContext(t, e, m.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: f.I4_.CHANNEL, channelId: n };
                        m.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), h.Hu.updateSetting(e);
                }
            },
            [A, a, t, n],
        ),
        [p, x] = l.useMemo(
            () => [
                A ? C.intl.string(C.t["8lklch"]) : C.intl.string(C.t.ji3jTF),
                A ? C.intl.string(C.t.RMQZCa) : C.intl.string(C.t["v/PagC"]),
            ],
            [A],
        ),
        E = l.useMemo(() => ({ align: "end" }), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.YNO, {
                targetElementRef: u,
                shouldShow: s,
                animation: c.YNO.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(c.W1t, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": C.intl.string(C.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, i.jsxs)(
                            c.rXV,
                            {
                                label: C.intl.string(C.t["/tMwrA"]),
                                children: [
                                    (0, i.jsx)(c.iDA, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t.jRkYAh),
                                        checked: !A,
                                        action: () => g(!1),
                                    }),
                                    (0, i.jsx)(c.iDA, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t["lWpJ/t"]),
                                        checked: A,
                                        action: () => g(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, i.jsx)(c.K0, {
                        ...e,
                        buttonRef: u,
                        variant: "secondary",
                        icon: c.Zes,
                        onClick: () => {
                            a(s ? null : "settings");
                        },
                        "aria-label": C.intl.string(C.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, i.jsx)(o.AM, {
                targetElementRef: u,
                shouldShow: d,
                onRequestClose: r,
                title: p,
                body: x,
                caretConfig: E,
                badge: "new",
            }),
        ],
    });
}
function R(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: s, setOpenPopout: a } = e,
        r = l.useRef(null),
        o = l.useMemo(
            () => [
                { label: C.intl.string(C.t.CbaapP), value: f.BBH.NEWEST },
                { label: C.intl.string(C.t.OukXZj), value: f.BBH.OLDEST },
                { label: C.intl.string(C.t.q8gB52), value: f.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        d = l.useCallback(
            (e) => {
                a(null), n(e);
            },
            [a, n],
        );
    return (0, i.jsx)(c.YNO, {
        targetElementRef: r,
        shouldShow: s,
        animation: c.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(c.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": C.intl.string(C.t.utp2hS),
                onSelect: () => a(null),
                children: (0, i.jsx)(
                    c.rXV,
                    {
                        children: o.map((e) => {
                            let { label: n, value: l } = e;
                            return (0, i.jsx)(
                                c.iDA,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${l}`,
                                    label: n,
                                    action: () => d(l),
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
            (0, i.jsx)(c.Button, {
                ...e,
                buttonRef: r,
                variant: "secondary",
                icon: c.JNJ,
                onClick: () => {
                    a(s ? null : "sort");
                },
                text: C.intl.string(C.t.XvNMNk),
                "aria-label": C.intl.string(C.t.XvNMNk),
                size: "sm",
            }),
    });
}
