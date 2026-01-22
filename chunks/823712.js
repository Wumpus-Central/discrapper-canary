l.d(t, { A: () => S }), l(896048);
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(311907),
    c = l(3666),
    d = l(582754),
    o = l(397927),
    u = l(770178),
    x = l(765548),
    m = l(736653),
    j = l(716416),
    b = l(786180),
    f = l(742589),
    h = l(761640),
    g = l(836872),
    v = l(985018),
    A = l(947256);
let p = (e) => {
    let { tabs: t, selectedTab: l, onTabSelect: r, onClose: i } = e;
    return (0, n.jsx)(o.W1t, {
        navId: "members-tabs-overflow-menu",
        "aria-label": v.intl.string(v.t.riPnr0),
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
function E(e) {
    let { onTabSelect: t, tabs: l, selectedTab: i } = e,
        a = r.useRef(null),
        c = (0, m.Ay)(),
        u = (0, d.Mw)(c),
        x = r.useMemo(
            () =>
                null !=
                l.find((e) => {
                    let { id: t } = e;
                    return t === i;
                }),
            [i, l],
        ),
        j = x ? "text-strong" : u ? "text-muted" : "text-strong",
        b = x ? o.LU0.colors.TEXT_STRONG : u ? o.LU0.colors.TEXT_MUTED : o.LU0.colors.TEXT_STRONG;
    return (0, n.jsx)(o.YNO, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, n.jsx)(p, {
                selectedTab: i,
                onClose: r,
                tabs: l,
                onTabSelect: t,
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var l, r;
            let { isShown: i } = t;
            return (0, n.jsxs)(
                o.VQ0.Item,
                ((l = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(l);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(l).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = l[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        id: "more",
                        clickableInnerRef: a,
                        color: "text-muted",
                        className: s()(A.OS, { [A.wH]: x }),
                        "aria-label": v.intl.string(v.t["UKOtz+"]),
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: j,
                                children: v.intl.string(v.t["UKOtz+"]),
                            }),
                            i
                                ? (0, n.jsx)(o.tN5, {
                                      size: "sm",
                                      color: b,
                                  })
                                : (0, n.jsx)(o.abt, {
                                      size: "sm",
                                      color: b,
                                  }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var l = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              l.push.apply(l, n);
                          }
                          return l;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                l),
            );
        },
    });
}
function S(e) {
    let t,
        { guildId: l, currentTab: i, onTabSelect: s } = e,
        [d, m] = r.useState(0),
        p = r.useRef(null),
        S = r.useRef(d),
        T = (0, b.H)({ guildId: l }),
        y =
            ((t = null != T ? T : 0),
            [
                {
                    id: g.D.ALL_MEMBERS,
                    label: v.intl.string(v.t.NOOm1Z),
                },
                {
                    id: g.D.PENDING,
                    label:
                        t > 0 ? v.intl.formatToPlainString(v.t["Wo+zL0"], { count: t }) : v.intl.string(v.t["4eQVBO"]),
                },
                {
                    id: g.D.REJECTED,
                    label: v.intl.string(v.t.bSZkla),
                },
                {
                    id: g.D.APPROVED,
                    label: v.intl.string(v.t.aURgY2),
                },
            ]),
        {
            lastVisibleIndex: _,
            onItemLayout: O,
            overflowItemsRef: N,
        } = (0, c.Wv)({
            items: y,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: d - 200,
        }),
        I = (0, a.bG)([h.Ay], () => null != h.Ay.getGuildSidebarState(l), [l]),
        R = (0, j.R)({ guildId: l }),
        D = r.useMemo(() => (i === g.D.ALL_MEMBERS ? I : null != R && null != R.user), [i, I, R]),
        P = r.useMemo(() => y.slice(0, _ + 1), [_, y]),
        C = r.useMemo(() => y.slice(_ + 1), [_, y]),
        M = (0, x.A)((e) => {
            let t = e.contentRect.width;
            null != t && S.current !== t && (m(t), (S.current = t));
        });
    return (
        (0, u.g)(p, M, [D]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(f.A.Divider, { className: A.yF }),
                (0, n.jsxs)("div", {
                    className: A.oB,
                    ref: p,
                    children: [
                        (0, n.jsxs)("div", {
                            className: A.Kk,
                            children: [
                                y.map((e, t) =>
                                    (0, n.jsx)(
                                        c.Ae,
                                        {
                                            index: t,
                                            onItemLayout: O,
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
                                    ref: N,
                                    children: (0, n.jsx)(E, {
                                        tabs: C,
                                        onTabSelect: s,
                                        selectedTab: i,
                                    }),
                                }),
                            ],
                        }),
                        (0, n.jsxs)(o.VQ0, {
                            "aria-label": v.intl.string(v.t.tcvVXM),
                            selectedItem: i,
                            type: "top-pill",
                            onItemSelect: s,
                            children: [
                                P.map((e) =>
                                    (0, n.jsx)(
                                        o.VQ0.Item,
                                        {
                                            id: e.id,
                                            "aria-label": e.label,
                                            children: e.label,
                                        },
                                        e.id,
                                    ),
                                ),
                                0 !== C.length
                                    ? (0, n.jsx)(E, {
                                          tabs: C,
                                          onTabSelect: s,
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
