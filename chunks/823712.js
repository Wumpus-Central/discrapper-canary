l.d(t, { A: () => D });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    o = l(3666),
    d = l(462887),
    c = l(861672),
    u = l(477782),
    x = l(628284),
    m = l(827734),
    h = l(265872),
    j = l(761508),
    _ = l(834730),
    A = l(900797),
    g = l(847374),
    f = l(770178),
    E = l(765548),
    v = l(736653),
    b = l(716416),
    N = l(786180),
    S = l(742589),
    C = l(761640),
    p = l(836872),
    I = l(985018),
    T = l(256177);
let R = (e) => {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: i } = e;
    return (0, n.jsx)(c.W, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": I.intl.string(I.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            u.rX,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, n.jsx)(
                        u.Dr,
                        {
                            id: t,
                            label: i,
                            icon: t === l ? x.y : void 0,
                            leadingAccessory: t === l ? { type: "icon", icon: x.y } : void 0,
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
function M(e) {
    let { onTabSelect: t, tabs: l, selectedTab: i } = e,
        r = s.useRef(null),
        o = (0, v.Ay)(),
        c = (0, d.M)(o),
        u = s.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, l],
        ),
        x = u ? "text-strong" : c ? "text-muted" : "text-strong",
        f = u ? m.A.colors.TEXT_STRONG : c ? m.A.colors.TEXT_MUTED : m.A.colors.TEXT_STRONG;
    return (0, n.jsx)(h.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, n.jsx)(R, { selectedTab: i, onClose: s, tabs: l, onTabSelect: t });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsxs)(j.V.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(T.OS, { [T.wH]: u }),
                "aria-label": I.intl.string(I.t["UKOtz+"]),
                children: [
                    (0, n.jsx)(_.E, { variant: "text-md/medium", color: x, children: I.intl.string(I.t["UKOtz+"]) }),
                    l ? (0, n.jsx)(A.t, { size: "sm", color: f }) : (0, n.jsx)(g.a, { size: "sm", color: f }),
                ],
            });
        },
    });
}
function D(e) {
    let t,
        { guildId: l, currentTab: i, onTabSelect: a } = e,
        [d, c] = s.useState(0),
        u = s.useRef(null),
        x = s.useRef(d),
        m =
            ((t = (0, N.H)({ guildId: l }) ?? 0),
            [
                { id: p.D.ALL_MEMBERS, label: I.intl.string(I.t.NOOm1Z) },
                {
                    id: p.D.PENDING,
                    label:
                        t > 0 ? I.intl.formatToPlainString(I.t["Wo+zL0"], { count: t }) : I.intl.string(I.t["4eQVBO"]),
                },
                { id: p.D.REJECTED, label: I.intl.string(I.t.bSZkla) },
                { id: p.D.APPROVED, label: I.intl.string(I.t.aURgY2) },
            ]),
        {
            lastVisibleIndex: h,
            onItemLayout: _,
            overflowItemsRef: A,
        } = (0, o.Wv)({ items: m, itemGapPx: 16, maxLines: 1, containerWidth: d - 200 }),
        g = (0, r.bG)([C.Ay], () => null != C.Ay.getGuildSidebarState(l), [l]),
        v = (0, b.R)({ guildId: l }),
        R = s.useMemo(() => (i === p.D.ALL_MEMBERS ? g : null != v && null != v.user), [i, g, v]),
        D = s.useMemo(() => m.slice(0, h + 1), [h, m]),
        y = s.useMemo(() => m.slice(h + 1), [h, m]),
        G = (0, E.A)((e) => {
            let t = e.contentRect.width;
            null != t && x.current !== t && (c(t), (x.current = t));
        });
    return (
        (0, f.g)(u, G, [R]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(S.A.Divider, { className: T.yF }),
                (0, n.jsxs)("div", {
                    className: T.oB,
                    ref: u,
                    children: [
                        (0, n.jsxs)("div", {
                            className: T.Kk,
                            children: [
                                m.map((e, t) =>
                                    (0, n.jsx)(
                                        o.Ae,
                                        {
                                            index: t,
                                            onItemLayout: _,
                                            children: (0, n.jsx)(j.V.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, n.jsx)("div", {
                                    ref: A,
                                    children: (0, n.jsx)(M, { tabs: y, onTabSelect: a, selectedTab: i }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(j.V, {
                            "aria-label": I.intl.string(I.t.tcvVXM),
                            selectedItem: i,
                            type: "top-pill",
                            onItemSelect: a,
                            children: [
                                D.map((e) =>
                                    (0, n.jsx)(j.V.Item, { id: e.id, "aria-label": e.label, children: e.label }, e.id),
                                ),
                                0 !== y.length ? (0, n.jsx)(M, { tabs: y, onTabSelect: a, selectedTab: i }) : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
