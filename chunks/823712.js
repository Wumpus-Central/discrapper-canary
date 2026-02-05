l.d(t, { A: () => v });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    d = l(3666),
    c = l(582754),
    o = l(397927),
    u = l(770178),
    x = l(765548),
    m = l(736653),
    h = l(716416),
    j = l(786180),
    _ = l(742589),
    A = l(761640),
    g = l(836872),
    b = l(985018),
    T = l(947256);
let f = (e) => {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: i } = e;
    return (0, n.jsx)(o.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": b.intl.string(b.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            o.rXV,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, n.jsx)(
                        o.Drp,
                        {
                            id: t,
                            label: i,
                            icon: t === l ? o.yr3 : void 0,
                            leadingAccessory: t === l ? { type: "icon", icon: o.yr3 } : void 0,
                            action: () => s(t),
                        },
                        t,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
};
function E(e) {
    let { onTabSelect: t, tabs: l, selectedTab: i } = e,
        r = s.useRef(null),
        d = (0, m.Ay)(),
        u = (0, c.Mw)(d),
        x = s.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, l],
        ),
        h = x ? "text-strong" : u ? "text-muted" : "text-strong",
        j = x ? o.LU0.colors.TEXT_STRONG : u ? o.LU0.colors.TEXT_MUTED : o.LU0.colors.TEXT_STRONG;
    return (0, n.jsx)(o.YNO, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(f, { selectedTab: i, onClose: s, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsxs)(o.VQ0.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(T.OS, { [T.wH]: x }),
                "aria-label": b.intl.string(b.t["UKOtz+"]),
                children: [
                    (0, n.jsx)(o.Text, { variant: "text-md/medium", color: h, children: b.intl.string(b.t["UKOtz+"]) }),
                    l ? (0, n.jsx)(o.tN5, { size: "sm", color: j }) : (0, n.jsx)(o.abt, { size: "sm", color: j }),
                ],
            });
        },
    });
}
function v(e) {
    let t,
        { guildId: l, currentTab: i, onTabSelect: a } = e,
        [c, m] = s.useState(0),
        f = s.useRef(null),
        v = s.useRef(c),
        S =
            ((t = (0, j.H)({ guildId: l }) ?? 0),
            [
                { id: g.D.ALL_MEMBERS, label: b.intl.string(b.t.NOOm1Z) },
                {
                    id: g.D.PENDING,
                    label:
                        t > 0 ? b.intl.formatToPlainString(b.t["Wo+zL0"], { count: t }) : b.intl.string(b.t["4eQVBO"]),
                },
                { id: g.D.REJECTED, label: b.intl.string(b.t.bSZkla) },
                { id: g.D.APPROVED, label: b.intl.string(b.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: N,
            onItemLayout: I,
            overflowItemsRef: R,
        } = (0, d.Wv)({ items: S, itemGapPx: 16, maxLines: 1, containerWidth: c - 200 }),
        C = (0, r.bG)([A.Ay], () => null != A.Ay.getGuildSidebarState(l), [l]),
        p = (0, h.R)({ guildId: l }),
        M = s.useMemo(() => (i === g.D.ALL_MEMBERS ? C : null != p && null != p.user), [i, C, p]),
        D = s.useMemo(() => S.slice(0, N + 1), [N, S]),
        G = s.useMemo(() => S.slice(N + 1), [N, S]),
        y = (0, x.A)((e) => {
            let t = e.contentRect.width;
            null != t && v.current !== t && (m(t), (v.current = t));
        });
    return (
        (0, u.g)(f, y, [M]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(_.A.Divider, { className: T.yF }),
                (0, n.jsxs)("div", {
                    className: T.oB,
                    ref: f,
                    children: [
                        (0, n.jsxs)("div", {
                            className: T.Kk,
                            children: [
                                S.map((e, t) =>
                                    (0, n.jsx)(
                                        d.Ae,
                                        {
                                            index: t,
                                            onItemLayout: I,
                                            children: (0, n.jsx)(o.VQ0.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, n.jsx)("div", {
                                    ref: R,
                                    children: (0, n.jsx)(E, { tabs: G, onTabSelect: a, selectedTab: i }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(o.VQ0, {
                            "aria-label": b.intl.string(b.t.tcvVXM),
                            selectedItem: i,
                            type: "top-pill",
                            onItemSelect: a,
                            children: [
                                D.map((e) =>
                                    (0, n.jsx)(
                                        o.VQ0.Item,
                                        { id: e.id, "aria-label": e.label, children: e.label },
                                        e.id,
                                    ),
                                ),
                                0 !== G.length ? (0, n.jsx)(E, { tabs: G, onTabSelect: a, selectedTab: i }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
