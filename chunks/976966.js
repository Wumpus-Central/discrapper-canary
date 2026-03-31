n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(554146),
    o = n(342494),
    c = n(990078),
    d = n(397927),
    u = n(932001),
    h = n(93055),
    A = n(253932),
    _ = n(975571),
    m = n(822382),
    g = n(753806),
    p = n(345859),
    f = n(145331),
    x = n(121806),
    E = n(652215),
    I = n(49999),
    C = n(985018),
    N = n(353231);
function T(e) {
    let {
            searchContext: t,
            searchMode: n,
            onSearchModeChange: s,
            totalResults: o,
            isIndexing: c,
            isSearching: A,
            documentsIndexed: _,
            selectedChannelId: f,
        } = e,
        T = (0, p.H)(t),
        { totalFilters: b } = (0, x.vj)(T, t),
        y = l.useMemo(() => {
            if (t.type === E.I4_.DMS) {
                let e = (0, m.Zf)(T),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? C.intl.format(C.t.A2dqWG, { filterCount: t }) : C.intl.string(C.t.tc619d);
            }
            return null;
        }, [t.type, T]),
        [v, j] = l.useState(null),
        L = l.useMemo(() => (A ? [] : [r.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [A]),
        [M, D] = (0, u.kn)(L),
        U = M === r.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        G = l.useCallback(
            (e) => {
                null != e && U && D(I.i.USER_DISMISS), j(e);
            },
            [U, D, j],
        ),
        P = l.useCallback(
            (e) => {
                D("user:explicit" === e ? I.i.USER_DISMISS : I.i.AUTO_DISMISS);
            },
            [D],
        ),
        k = l.useCallback(() => {
            G(null), g.A.openSearchFiltersModal(t);
        }, [G, t]),
        w = l.useMemo(() => (b > 0 ? C.intl.format(C.t.uaR4sI, { filterCount: b }) : C.intl.string(C.t.UdhTtk)), [b]),
        B = !(0, h.DZ)() && (t.type === E.I4_.DMS || t.type === E.I4_.CHANNEL);
    return (0, i.jsxs)("header", {
        className: a()(N.wL, { [N.g$]: null != y }),
        children: [
            (0, i.jsx)("div", {
                className: N.TN,
                role: "status",
                children: (0, i.jsx)(S, {
                    totalResults: o,
                    subtitle: y,
                    isIndexing: c,
                    isSearching: A,
                    documentsIndexed: _,
                }),
            }),
            (0, i.jsxs)("div", {
                className: N.vd,
                children: [
                    (0, i.jsx)(d.Button, { variant: "secondary", onClick: k, text: w, icon: d.RgP, size: "sm" }),
                    (0, i.jsx)(O, {
                        searchMode: n,
                        onSearchModeChange: s,
                        isPopoutOpen: "sort" === v,
                        setOpenPopout: G,
                    }),
                    B &&
                        (0, i.jsx)(R, {
                            searchContext: t,
                            selectedChannelId: f,
                            isPopoutOpen: "settings" === v,
                            setOpenPopout: G,
                            isPopoverVisible: U,
                            onPopoverRequestClose: P,
                        }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { totalResults: t, subtitle: n, isSearching: l, isIndexing: s, documentsIndexed: a } = e;
    return s
        ? (0, i.jsx)(y, { documentsIndexed: a })
        : l
          ? (0, i.jsx)(v, {})
          : (0, i.jsx)(j, { totalResults: t, subtitle: n });
}
function b() {
    return (0, i.jsx)("div", {
        className: N.zp,
        children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.SPINNING_CIRCLE, className: N.u1, itemClassName: N.pu }),
    });
}
function y(e) {
    let { documentsIndexed: t } = e;
    return (0, i.jsx)(c.m, {
        asContainer: !0,
        text: C.intl.formatToPlainString(C.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, i.jsxs)("div", {
            className: N.q_,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, i.jsx)(d.MzZ, {
                        className: N.Zd,
                        href: _.A.getArticleURL(E.MVz.SEARCH_INDEXING),
                        children: C.intl.string(C.t["G3EA+4"]),
                    }),
                }),
                (0, i.jsx)(b, {}),
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
                children: C.intl.string(C.t.uixzLf),
            }),
            (0, i.jsx)(b, {}),
        ],
    });
}
function j(e) {
    let { totalResults: t, subtitle: n } = e,
        l = (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: C.intl.format(C.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, i.jsxs)("div", {
              className: N.hy,
              children: [l, (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "text-subtle", children: n })],
          })
        : l;
}
function R(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: s,
            setOpenPopout: a,
            onPopoverRequestClose: r,
            isPopoverVisible: c,
        } = e,
        u = l.useRef(null),
        h = A.Hu.useSetting(),
        _ = l.useCallback(
            (e) => {
                if (h !== e) {
                    if (
                        ((0, f._k)({
                            searchContext: t,
                            prevIsCrossDMSettingEnabled: A.Hu.getSetting(),
                            isCrossDMSettingEnabled: e,
                            location: f.vy.SEARCH_HEADER,
                        }),
                        e)
                    ) {
                        let e = { type: E.I4_.DMS };
                        g.A.transitionStateToSearchContext(t, e, g.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: E.I4_.CHANNEL, channelId: n };
                        g.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), A.Hu.updateSetting(e);
                }
            },
            [h, a, t, n],
        ),
        [m, p] = l.useMemo(
            () => [
                h ? C.intl.string(C.t["8lklch"]) : C.intl.string(C.t.ji3jTF),
                h ? C.intl.string(C.t.RMQZCa) : C.intl.string(C.t["v/PagC"]),
            ],
            [h],
        ),
        x = l.useMemo(() => ({ align: "end" }), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.YNO, {
                targetElementRef: u,
                shouldShow: s,
                animation: d.YNO.Animation.NONE,
                position: "bottom",
                align: "right",
                onRequestClose: () => a(null),
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(d.W1t, {
                        "data-menu-migrated-auto": !0,
                        navId: "search-settings-cog",
                        onClose: t,
                        "aria-label": C.intl.string(C.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, i.jsxs)(
                            d.rXV,
                            {
                                label: C.intl.string(C.t["/tMwrA"]),
                                children: [
                                    (0, i.jsx)(d.iDA, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t.jRkYAh),
                                        checked: !h,
                                        action: () => _(!1),
                                    }),
                                    (0, i.jsx)(d.iDA, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: C.intl.string(C.t["lWpJ/t"]),
                                        checked: h,
                                        action: () => _(!0),
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
                            a(s ? null : "settings");
                        },
                        "aria-label": C.intl.string(C.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, i.jsx)(o.AM, {
                targetElementRef: u,
                shouldShow: c,
                onRequestClose: r,
                title: m,
                body: p,
                caretConfig: x,
                badge: "new",
            }),
        ],
    });
}
function O(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: s, setOpenPopout: a } = e,
        r = l.useRef(null),
        o = l.useMemo(
            () => [
                { label: C.intl.string(C.t.CbaapP), value: E.BBH.NEWEST },
                { label: C.intl.string(C.t.OukXZj), value: E.BBH.OLDEST },
                { label: C.intl.string(C.t.q8gB52), value: E.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = l.useCallback(
            (e) => {
                a(null), n(e);
            },
            [a, n],
        );
    return (0, i.jsx)(d.YNO, {
        targetElementRef: r,
        shouldShow: s,
        animation: d.YNO.Animation.NONE,
        position: "bottom",
        align: "right",
        onRequestClose: () => a(null),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(d.W1t, {
                "data-menu-migrated-auto": !0,
                navId: "search-result-sort-menu",
                onClose: n,
                "aria-label": C.intl.string(C.t.utp2hS),
                onSelect: () => a(null),
                children: (0, i.jsx)(
                    d.rXV,
                    {
                        children: o.map((e) => {
                            let { label: n, value: l } = e;
                            return (0, i.jsx)(
                                d.iDA,
                                {
                                    group: "sort-by",
                                    id: `sort-by-option-${l}`,
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
            (0, i.jsx)(d.Button, {
                ...e,
                buttonRef: r,
                variant: "secondary",
                icon: d.JNJ,
                onClick: () => {
                    a(s ? null : "sort");
                },
                text: C.intl.string(C.t.XvNMNk),
                "aria-label": C.intl.string(C.t.XvNMNk),
                size: "sm",
            }),
    });
}
