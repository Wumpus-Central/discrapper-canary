n.d(t, { Z: () => S }), n(388685);
var l = n(54381),
    r = n(473749),
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
    b = n(571728),
    h = n(984370),
    f = n(433355),
    g = n(384433),
    p = n(388032),
    v = n(350013);
let C = (e) => {
    let { tabs: t, selectedTab: n, onTabSelect: r, onClose: i } = e;
    return (0, l.jsx)(d.v2r, {
        navId: "members-tabs-overflow-menu",
        "aria-label": p.intl.string(p.t.riPnr0),
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
        b = m ? d.TVs.colors.HEADER_PRIMARY : u ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
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
                        className: a()(v.more, { [v.selected]: m }),
                        "aria-label": p.intl.string(p.t["UKOtz+"]),
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                color: j,
                                children: p.intl.string(p.t["UKOtz+"]),
                            }),
                            i
                                ? (0, l.jsx)(d.u04, {
                                      size: "sm",
                                      color: b,
                                  })
                                : (0, l.jsx)(d.CJ0, {
                                      size: "sm",
                                      color: b,
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
function S(e) {
    let t,
        { guildId: n, currentTab: i, onTabSelect: a } = e,
        [c, x] = r.useState(0),
        C = r.useRef(null),
        S = r.useRef(c),
        T = (0, b.A)({ guildId: n }),
        E =
            ((t = null != T ? T : 0),
            [
                {
                    id: g.e.ALL_MEMBERS,
                    label: p.intl.string(p.t.NOOm1Z),
                },
                {
                    id: g.e.PENDING,
                    label:
                        t > 0 ? p.intl.formatToPlainString(p.t["Wo+zL0"], { count: t }) : p.intl.string(p.t["4eQVBO"]),
                },
                {
                    id: g.e.REJECTED,
                    label: p.intl.string(p.t.bSZkla),
                },
                {
                    id: g.e.APPROVED,
                    label: p.intl.string(p.t.aURgY2),
                },
            ]),
        {
            lastVisibleIndex: N,
            onItemLayout: O,
            overflowItemsRef: P,
        } = (0, o.zP)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: c - 200,
        }),
        y = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(n), [n]),
        I = (0, j.L)({ guildId: n }),
        R = r.useMemo(() => (i === g.e.ALL_MEMBERS ? y : null != I && null != I.user), [i, y, I]),
        w = r.useMemo(() => E.slice(0, N + 1), [N, E]),
        A = r.useMemo(() => E.slice(N + 1), [N, E]),
        M = (0, m.Z)((e) => {
            let t = e.contentRect.width;
            null != t && S.current !== t && (x(t), (S.current = t));
        });
    return (
        (0, u.s)(C, M, [R]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.Z.Divider, { className: v.divider }),
                (0, l.jsxs)("div", {
                    className: v.tabsContainer,
                    ref: C,
                    children: [
                        (0, l.jsxs)("div", {
                            className: v.measurements,
                            children: [
                                E.map((e, t) =>
                                    (0, l.jsx)(
                                        o.AJ,
                                        {
                                            index: t,
                                            onItemLayout: O,
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
                                    ref: P,
                                    children: (0, l.jsx)(_, {
                                        tabs: A,
                                        onTabSelect: a,
                                        selectedTab: i,
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(d.njP, {
                            "aria-label": p.intl.string(p.t.tcvVXM),
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
                                0 !== A.length
                                    ? (0, l.jsx)(_, {
                                          tabs: A,
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
