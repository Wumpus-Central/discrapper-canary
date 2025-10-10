n.d(t, { Z: () => T }), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(21260),
    c = n(780384),
    d = n(481060),
    u = n(393903),
    m = n(448986),
    x = n(410030),
    j = n(328977),
    h = n(571728),
    b = n(984370),
    f = n(433355),
    v = n(384433),
    g = n(388032),
    p = n(350013);
let C = (e) => {
    let { tabs: t, selectedTab: n, onTabSelect: r, onClose: i } = e;
    return (0, l.jsx)(d.v2r, {
        navId: "members-tabs-overflow-menu",
        "aria-label": g.intl.string(g.t.riPnr6),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, l.jsx)(
            d.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: i } = e;
                    return (0, l.jsx)(
                        d.sNh,
                        {
                            id: t,
                            label: i,
                            icon: t === n ? d.owK : void 0,
                            action: () => r(t),
                        },
                        t,
                    );
                }),
            },
            "applications-overflow-tabs",
        ),
    });
};
function _(e) {
    let { onTabSelect: t, tabs: n, selectedTab: i } = e,
        s = r.useRef(null),
        o = (0, x.ZP)(),
        u = (0, c.wj)(o),
        m = r.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, n],
        ),
        j = m ? "header-primary" : u ? "text-muted" : "header-primary",
        h = m ? d.TVs.colors.HEADER_PRIMARY : u ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
    return (0, l.jsx)(d.yRy, {
        targetElementRef: s,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, l.jsx)(C, {
                selectedTab: i,
                onClose: r,
                tabs: n,
                onTabSelect: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var n, r;
            let { isShown: i } = t;
            return (0, l.jsxs)(
                d.njP.Item,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        id: "more",
                        clickableInnerRef: s,
                        color: "text-muted",
                        className: a()(p.more, { [p.selected]: m }),
                        "aria-label": g.intl.string(g.t.UKOtz8),
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: j,
                                children: g.intl.string(g.t.UKOtz8),
                            }),
                            i
                                ? (0, l.jsx)(d.u04, {
                                      size: "sm",
                                      color: h,
                                  })
                                : (0, l.jsx)(d.CJ0, {
                                      size: "sm",
                                      color: h,
                                  }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n),
            );
        },
    });
}
function T(e) {
    let t,
        { guildId: n, currentTab: i, onTabSelect: a } = e,
        [c, x] = r.useState(0),
        C = r.useRef(null),
        T = r.useRef(c),
        E = (0, h.A)({ guildId: n }),
        N =
            ((t = null != E ? E : 0),
            [
                {
                    id: v.e.ALL_MEMBERS,
                    label: g.intl.string(g.t.NOOm1d),
                },
                {
                    id: v.e.PENDING,
                    label:
                        t > 0 ? g.intl.formatToPlainString(g.t["Wo+zLy"], { count: t }) : g.intl.string(g.t["4eQVBA"]),
                },
                {
                    id: v.e.REJECTED,
                    label: g.intl.string(g.t.bSZklZ),
                },
                {
                    id: v.e.APPROVED,
                    label: g.intl.string(g.t.aURgY2),
                },
            ]),
        {
            lastVisibleIndex: S,
            onItemLayout: P,
            overflowItemsRef: R,
        } = (0, o.zP)({
            items: N,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: c - 200,
        }),
        I = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(n), [n]),
        Z = (0, j.L)({ guildId: n }),
        O = r.useMemo(() => (i === v.e.ALL_MEMBERS ? I : null != Z && null != Z.user), [i, I, Z]),
        w = r.useMemo(() => N.slice(0, S + 1), [S, N]),
        M = r.useMemo(() => N.slice(S + 1), [S, N]),
        y = (0, m.Z)((e) => {
            let t = e.contentRect.width;
            null != t && T.current !== t && (x(t), (T.current = t));
        });
    return (
        (0, u.s)(C, y, [O]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(b.Z.Divider, { className: p.divider }),
                (0, l.jsxs)("div", {
                    className: p.tabsContainer,
                    ref: C,
                    children: [
                        (0, l.jsxs)("div", {
                            className: p.measurements,
                            children: [
                                N.map((e, t) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: t,
                                            onItemLayout: P,
                                            children: (0, l.jsx)(d.njP.Item, {
                                                id: e.id,
                                                "aria-label": e.label,
                                                children: e.label,
                                            }),
                                        },
                                        e.id,
                                    ),
                                ),
                                (0, l.jsx)("div", {
                                    ref: R,
                                    children: (0, l.jsx)(_, {
                                        tabs: M,
                                        onTabSelect: a,
                                        selectedTab: i,
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(d.njP, {
                            "aria-label": g.intl.string(g.t.tcvVXF),
                            selectedItem: i,
                            type: "top-pill",
                            onItemSelect: a,
                            children: [
                                w.map((e) =>
                                    (0, l.jsx)(
                                        d.njP.Item,
                                        {
                                            id: e.id,
                                            "aria-label": e.label,
                                            children: e.label,
                                        },
                                        e.id,
                                    ),
                                ),
                                0 !== M.length
                                    ? (0, l.jsx)(_, {
                                          tabs: M,
                                          onTabSelect: a,
                                          selectedTab: i,
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
