"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(554146),
    o = n(342494),
    c = n(990078),
    d = n(397927),
    u = n(932001),
    h = n(93055),
    A = n(253932),
    m = n(975571),
    _ = n(822382),
    p = n(753806),
    g = n(345859),
    f = n(145331),
    x = n(121806),
    C = n(652215),
    E = n(49999),
    I = n(985018),
    N = n(620168);
function b(e) {
    let {
            searchContext: t,
            searchMode: n,
            onSearchModeChange: l,
            totalResults: o,
            isIndexing: c,
            isSearching: A,
            documentsIndexed: m,
            selectedChannelId: f,
        } = e,
        b = (0, g.H)(t),
        { totalFilters: T } = (0, x.vj)(b, t),
        v = s.useMemo(() => {
            if (t.type === C.I4_.DMS) {
                let e = (0, _.Zf)(b),
                    t = e.channel_id?.length ?? 0;
                return t > 0 ? I.intl.format(I.t.A2dqWG, { filterCount: t }) : I.intl.string(I.t.tc619d);
            }
            return null;
        }, [t.type, b]),
        [y, j] = s.useState(null),
        L = s.useMemo(() => (A ? [] : [r.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER]), [A]),
        [M, D] = (0, u.kn)(L),
        G = M === r.M.CROSS_DM_SEARCH_SETTING_EDUCATION_POPOVER,
        U = s.useCallback(
            (e) => {
                null != e && G && D(E.i.USER_DISMISS), j(e);
            },
            [G, D, j],
        ),
        P = s.useCallback(
            (e) => {
                D("user:explicit" === e ? E.i.USER_DISMISS : E.i.AUTO_DISMISS);
            },
            [D],
        ),
        w = s.useCallback(() => {
            U(null), p.A.openSearchFiltersModal(t);
        }, [U, t]),
        k = s.useMemo(() => (T > 0 ? I.intl.format(I.t.uaR4sI, { filterCount: T }) : I.intl.string(I.t.UdhTtk)), [T]),
        V = !(0, h.DZ)() && (t.type === C.I4_.DMS || t.type === C.I4_.CHANNEL);
    return (0, i.jsxs)("header", {
        className: a()(N.wL, { [N.g$]: null != v }),
        children: [
            (0, i.jsx)("div", {
                className: N.TN,
                role: "status",
                children: (0, i.jsx)(S, {
                    totalResults: o,
                    subtitle: v,
                    isIndexing: c,
                    isSearching: A,
                    documentsIndexed: m,
                }),
            }),
            (0, i.jsxs)("div", {
                className: N.vd,
                children: [
                    (0, i.jsx)(d.Button, { variant: "secondary", onClick: w, text: k, icon: d.RgP, size: "sm" }),
                    (0, i.jsx)(O, {
                        searchMode: n,
                        onSearchModeChange: l,
                        isPopoutOpen: "sort" === y,
                        setOpenPopout: U,
                    }),
                    V &&
                        (0, i.jsx)(R, {
                            searchContext: t,
                            selectedChannelId: f,
                            isPopoutOpen: "settings" === y,
                            setOpenPopout: U,
                            isPopoverVisible: G,
                            onPopoverRequestClose: P,
                        }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { totalResults: t, subtitle: n, isSearching: s, isIndexing: l, documentsIndexed: a } = e;
    return l
        ? (0, i.jsx)(v, { documentsIndexed: a })
        : s
          ? (0, i.jsx)(y, {})
          : (0, i.jsx)(j, { totalResults: t, subtitle: n });
}
function T() {
    return (0, i.jsx)("div", {
        className: N.zp,
        children: (0, i.jsx)(d.y$y, { type: d.y$y.Type.SPINNING_CIRCLE, className: N.u1, itemClassName: N.pu }),
    });
}
function v(e) {
    let { documentsIndexed: t } = e;
    return (0, i.jsx)(c.m, {
        asContainer: !0,
        text: I.intl.formatToPlainString(I.t["4Y3O+O"], { count: t ?? "" }),
        children: (0, i.jsxs)("div", {
            className: N.q_,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    children: (0, i.jsx)(d.MzZ, {
                        className: N.Zd,
                        href: m.A.getArticleURL(C.MVz.SEARCH_INDEXING),
                        children: I.intl.string(I.t["G3EA+4"]),
                    }),
                }),
                (0, i.jsx)(T, {}),
            ],
        }),
    });
}
function y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: I.intl.string(I.t.uixzLf),
            }),
            (0, i.jsx)(T, {}),
        ],
    });
}
function j(e) {
    let { totalResults: t, subtitle: n } = e,
        s = (0, i.jsx)(d.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: I.intl.format(I.t.ZGVL3g, { count: t }),
        });
    return null != n
        ? (0, i.jsxs)("div", {
              className: N.hy,
              children: [s, (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "text-subtle", children: n })],
          })
        : s;
}
function R(e) {
    let {
            searchContext: t,
            selectedChannelId: n,
            isPopoutOpen: l,
            setOpenPopout: a,
            onPopoverRequestClose: r,
            isPopoverVisible: c,
        } = e,
        u = s.useRef(null),
        h = A.Hu.useSetting(),
        m = s.useCallback(
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
                        let e = { type: C.I4_.DMS };
                        p.A.transitionStateToSearchContext(t, e, p.A.cleanUpPrivateChannelSearchState);
                    } else {
                        let e = { type: C.I4_.CHANNEL, channelId: n };
                        p.A.transitionStateToSearchContext(t, e);
                    }
                    a(null), A.Hu.updateSetting(e);
                }
            },
            [h, a, t, n],
        ),
        [_, g] = s.useMemo(
            () => [
                h ? I.intl.string(I.t["8lklch"]) : I.intl.string(I.t.ji3jTF),
                h ? I.intl.string(I.t.RMQZCa) : I.intl.string(I.t["v/PagC"]),
            ],
            [h],
        ),
        x = s.useMemo(() => ({ align: "end" }), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.YNO, {
                targetElementRef: u,
                shouldShow: l,
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
                        "aria-label": I.intl.string(I.t.fb59v0),
                        onSelect: () => a(null),
                        children: (0, i.jsxs)(
                            d.rXV,
                            {
                                label: I.intl.string(I.t["/tMwrA"]),
                                children: [
                                    (0, i.jsx)(d.iDA, {
                                        id: "xdm-search-disabled",
                                        group: "xdm-search-items",
                                        label: I.intl.string(I.t.jRkYAh),
                                        checked: !h,
                                        action: () => m(!1),
                                    }),
                                    (0, i.jsx)(d.iDA, {
                                        id: "xdm-search-enabled",
                                        group: "xdm-search-items",
                                        label: I.intl.string(I.t["lWpJ/t"]),
                                        checked: h,
                                        action: () => m(!0),
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
                            a(l ? null : "settings");
                        },
                        "aria-label": I.intl.string(I.t["3D5yo/"]),
                        size: "sm",
                    }),
            }),
            (0, i.jsx)(o.AM, {
                targetElementRef: u,
                shouldShow: c,
                onRequestClose: r,
                title: _,
                body: g,
                caretConfig: x,
                badge: "new",
            }),
        ],
    });
}
function O(e) {
    let { searchMode: t, onSearchModeChange: n, isPopoutOpen: l, setOpenPopout: a } = e,
        r = s.useRef(null),
        o = s.useMemo(
            () => [
                { label: I.intl.string(I.t.CbaapP), value: C.BBH.NEWEST },
                { label: I.intl.string(I.t.OukXZj), value: C.BBH.OLDEST },
                { label: I.intl.string(I.t.q8gB52), value: C.BBH.MOST_RELEVANT },
            ],
            [],
        ),
        c = s.useCallback(
            (e) => {
                a(null), n(e);
            },
            [a, n],
        );
    return (0, i.jsx)(d.YNO, {
        targetElementRef: r,
        shouldShow: l,
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
                "aria-label": I.intl.string(I.t.utp2hS),
                onSelect: () => a(null),
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
                buttonRef: r,
                variant: "secondary",
                icon: d.JNJ,
                onClick: () => {
                    a(l ? null : "sort");
                },
                text: I.intl.string(I.t.XvNMNk),
                "aria-label": I.intl.string(I.t.XvNMNk),
                size: "sm",
            }),
    });
}
