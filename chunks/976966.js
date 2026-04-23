s.d(t, { A: () => w });
var n = s(627968),
    a = s(64700),
    l = s(503698),
    r = s.n(l),
    i = s(554146),
    o = s(265486),
    c = s(990078),
    u = s(821609),
    d = s(783977),
    h = s(289873),
    g = s(834730),
    p = s(349288),
    m = s(265872),
    x = s(861672),
    f = s(477782),
    C = s(408278),
    S = s(625903),
    A = s(112173),
    _ = s(932001),
    b = s(93055),
    R = s(253932),
    I = s(975571),
    y = s(822382),
    E = s(753806),
    j = s(345859),
    k = s(145331),
    T = s(121806),
    N = s(652215),
    v = s(49999),
    M = s(985018),
    P = s(853279);
function w(e) {
    let {
            searchContext: t,
            searchMode: s,
            onSearchModeChange: l,
            totalResults: o,
            isIndexing: c,
            isSearching: h,
            documentsIndexed: g,
            selectedChannelId: p,
        } = e,
        m = (0, j.H)(t),
        { totalFilters: x } = (0, T.vj)(m, t),
        f = a.useMemo(() => {
            if (t.type === N.I4_.DMS) {
                let e = (0, y.Zf)(m),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? M.intl.format(M.t.A2dqWG, { filterCount: t }) : M.intl.string(M.t.tc619d);
            }
            return null;
        }, [t.type, m]),
        [C, S] = a.useState(null),
        A = a.useMemo(() => (h ? [] : [i.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [h]),
        [R, I] = (0, _.kn)(A),
        k = R === i.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        w = a.useCallback(
            (e) => {
                null != e && k && I(v.i.USER_DISMISS), S(e);
            },
            [k, I, S],
        ),
        H = a.useCallback(
            (e) => {
                I("user:explicit" === e ? v.i.USER_DISMISS : v.i.AUTO_DISMISS);
            },
            [I],
        ),
        B = a.useCallback(() => {
            w(null), E.A.openSearchFiltersModal(t);
        }, [w, t]),
        L = a.useMemo(() => (x > 0 ? M.intl.format(M.t.uaR4sI, { filterCount: x }) : M.intl.string(M.t.UdhTtk)), [x]),
        D = !(0, b.DZ)() && (t.type === N.I4_.DMS || t.type === N.I4_.CHANNEL);
    return (0, n.jsxs)("header", {
        className: r()(P.wL, { [P.g$]: null != f }),
        children: [
            (0, n.jsx)("div", {
                className: P.TN,
                role: "status",
                children: (0, n.jsx)(O, {
                    totalResults: o,
                    subtitle: f,
                    isIndexing: c,
                    isSearching: h,
                    documentsIndexed: g,
                }),
            }),
            (0, n.jsxs)("div", {
                className: P.vd,
                children: [
                    (0, n.jsx)(u.$, { variant: "secondary", onClick: B, text: L, icon: d.R, size: "sm" }),
                    (0, n.jsx)(q, {
                        searchMode: s,
                        onSearchModeChange: l,
                        isPopoutOpen: "sort" === C,
                        setOpenPopout: w,
                    }),
                    D &&
                        (0, n.jsx)(U, {
                            searchContext: t,
                            selectedChannelId: p,
                            isPopoutOpen: "settings" === C,
                            setOpenPopout: w,
                            isPopoverVisible: k,
                            onPopoverRequestClose: H,
                        }),
                ],
            }),
        ],
    });
}
function O(e) {
    let { totalResults: t, subtitle: s, isSearching: a, isIndexing: l, documentsIndexed: r } = e;
    return l
        ? (0, n.jsx)(B, { documentsIndexed: r })
        : a
          ? (0, n.jsx)(L, {})
          : (0, n.jsx)(D, { totalResults: t, subtitle: s });
}
function H() {
    return (0, n.jsx)("div", {
        className: P.zp,
        children: (0, n.jsx)(h.y, { type: h.y.Type.SPINNING_CIRCLE, className: P.u1, itemClassName: P.pu }),
    });
}
function B(e) {
    let { documentsIndexed: t } = e;
    return (0, n.jsx)(c.m, {
        asContainer: !0,
        text: M.intl.formatToPlainString(M.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, n.jsxs)("div", {
            className: P.q_,
            children: [
                (0, n.jsx)(g.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, n.jsx)(p.Anchor, {
                        className: P.Zd,
                        href: I.A.getArticleURL(N.MVz.SEARCH_INDEXING),
                        children: M.intl.string(M.t["G3EA+4"]),
                    }),
                }),
                (0, n.jsx)(H, {}),
            ],
        }),
    });
}
function L() {
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(g.E, { variant: "text-md/medium", color: "text-default", children: M.intl.string(M.t.uixzLf) }),
            (0, n.jsx)(H, {}),
        ],
    });
}
function D(e) {
    let { totalResults: t, subtitle: s } = e,
        a = (0, n.jsx)(g.E, {
            variant: "text-md/medium",
            color: "text-strong",
            children: M.intl.format(M.t.ZGVL3g, { count: t }),
        });
    return null != s
        ? (0, n.jsxs)("div", {
              className: P.hy,
              children: [a, (0, n.jsx)(g.E, { variant: "text-xs/medium", color: "text-subtle", children: s })],
          })
        : a;
}
function U(e) {
    let {
            searchContext: t,
            selectedChannelId: s,
            isPopoutOpen: l,
            setOpenPopout: r,
            onPopoverRequestClose: i,
            isPopoverVisible: c,
        } = e,
        u = a.useRef(null),
        d = R.Hu.useSetting(),
        h = a.useCallback(
            (e) => {
                if (d !== e) {
                    if (
                        ((0, k._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: R.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: k.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: N.I4_.DMS };
                        E.A.transitionStateToSearchContext(t, e, E.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: N.I4_.CHANNEL, channelId: s };
                        E.A.transitionStateToSearchContext(t, e);
                    }
                    r(null), R.Hu.updateSetting(e);
                }
            },
            [d, r, t, s],
        ),
        [g, p] = a.useMemo(
            () => [
                d ? M.intl.string(M.t["8lklch"]) : M.intl.string(M.t.ji3jTF),
                d ? M.intl.string(M.t.RMQZCa) : M.intl.string(M.t["v/PagC"]),
            ],
            [d],
        ),
        A = a.useMemo(() => ({ align: "end" }), []);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(m.Y, {
                targetElementRef: u,
                shouldShow: l,
                animation: m.Y.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => r(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, n.jsx)(x.W, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": M.intl.string(M.t.fb59v0),
                        onSelect: () => r(null),
                        children: (0, n.jsxs)(
                            f.rX,
                            {
                                label: M.intl.string(M.t["/tMwrA"]),
                                children: [
                                    (0, n.jsx)(f.iD, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: M.intl.string(M.t.jRkYAh),
                                        checked: !d,
                                        action: () => h(!1),
                                    }),
                                    (0, n.jsx)(f.iD, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: M.intl.string(M.t["lWpJ/t"]),
                                        checked: d,
                                        action: () => h(!0),
                                    }),
                                ],
                            },
                            "xdm-search-items",
                        ),
                    });
                },
                children: (e) =>
                    (0, n.jsx)(C.K, {
                        ...e,
                        buttonRef: u,
                        variant: "secondary",
                        icon: S.Z,
                        onClick: () => {
                            r(l ? null : "settings");
                        },
                        "aria-label": M.intl.string(M.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, n.jsx)(o.A, {
                targetElementRef: u,
                shouldShow: c,
                onRequestClose: i,
                title: g,
                body: p,
                caretConfig: A,
                badge: "new",
            }),
        ],
    });
}
function q(e) {
    let { searchMode: t, onSearchModeChange: s, isPopoutOpen: l, setOpenPopout: r } = e,
        i = a.useRef(null),
        o = a.useMemo(
            () => [
                { label: M.intl.string(M.t.CbaapP), value: N.BBH.NEWEST },
                { label: M.intl.string(M.t.OukXZj), value: N.BBH.OLDEST },
                { label: M.intl.string(M.t.q8gB52), value: N.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = a.useCallback(
            (e) => {
                r(null), s(e);
            },
            [r, s],
        );
    return (0, n.jsx)(m.Y, {
        targetElementRef: i,
        shouldShow: l,
        animation: m.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => r(null),
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(x.W, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: s,
                "aria-label": M.intl.string(M.t.utp2hS),
                onSelect: () => r(null),
                children: (0, n.jsx)(
                    f.rX,
                    {
                        children: o.map((e) => {
                            let { label: s, value: a } = e;
                            return (0, n.jsx)(
                                f.iD,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${a}`,
                                    label: s,
                                    action: () => c(a),
                                    checked: t === a,
                                },
                                a,
                            );
                        }),
                    },
                    "sort-by",
                ),
            });
        },
        children: (e) =>
            (0, n.jsx)(u.$, {
                ...e,
                buttonRef: i,
                variant: "secondary",
                icon: A.J,
                onClick: () => {
                    r(l ? null : "sort");
                },
                text: M.intl.string(M.t.XvNMNk),
                "aria-label": M.intl.string(M.t.XvNMNk),
                size: "sm",
            }),
    });
}
