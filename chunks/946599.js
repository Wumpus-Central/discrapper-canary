n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a);
n(926675);
var s = n(990078),
    o = n(397927),
    d = n(147925),
    c = n(183555),
    u = n(735321),
    g = n(122338),
    m = n(394245),
    x = n(985018),
    f = n(542467);
function h(e) {
    let { tags: t, isCurrentUser: n, widgetType: a, applicationId: s, className: o, disableInteraction: d = !1 } = e,
        h = t?.filter((e) => null != (0, m.W3)(e)) ?? [],
        _ = h.length > 0,
        A = n && !d && (0, u.mS)(a) && h.length < 20,
        { trackUserProfileAction: v } = (0, c.NJ)(),
        T = (0, l.useRef)(new Map()),
        E = (0, l.useRef)(null),
        b = (0, l.useRef)(null),
        [y, C] = (0, l.useState)(0),
        [N, S] = (0, l.useState)(!1),
        w = j(E, b, h, T, C);
    if (
        ((0, l.useEffect)(
            () => (
                w(),
                window.addEventListener("resize", w),
                () => {
                    window.removeEventListener("resize", w);
                }
            ),
            [w, h?.join("")],
        ),
        !_ && !A)
    )
        return null;
    let k = N ? h : h.slice(0, h.length - y);
    return (0, i.jsxs)("div", {
        className: r()(f.I4, o),
        children: [
            _ &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: f.Tw,
                            "aria-label": x.intl.string(x.t.EfjTi4),
                            children: k.map((e) =>
                                (0, i.jsx)(
                                    p,
                                    {
                                        tag: e,
                                        isCurrentUser: n,
                                        applicationId: s,
                                        widgetType: a,
                                        ref: (t) => {
                                            null != t && T.current.set(e, t);
                                        },
                                        disableInteraction: d,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        y > 0 &&
                            (0, i.jsx)(I, {
                                buttonRef: E,
                                isExpanded: N,
                                numberOfOverflowingTags: y,
                                onExpandTags: () => {
                                    S(!0), v({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    S(!1), v({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: d,
                            }),
                    ],
                }),
            A && (0, i.jsx)(g.A, { tags: t, widgetType: a, applicationId: s, ref: b }),
        ],
    });
}
let p = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: l, widgetType: a, disableInteraction: r, ref: d } = e,
        { trackUserProfileEditAction: g } = (0, c.NJ)(),
        h = (0, m.W3)(t);
    if (null == h) return null;
    let { getText: p, icon: _ } = h;
    return (0, i.jsxs)("li", {
        className: f.Tc,
        ref: d,
        children: [
            (0, i.jsx)(_, { size: "xxs" }),
            (0, i.jsx)(o.Text, { variant: "text-xxs/medium", color: "text-subtle", children: p() }),
            n &&
                !r &&
                (0, i.jsx)(s.m, {
                    text: x.intl.string(x.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(o.DUT, {
                        onClick: () => {
                            (0, u.tg)(a, l, t), g({ action: "TAG_REMOVED", widgetEdited: a, gameId: l });
                        },
                        className: f.DT,
                        "aria-label": x.intl.formatToPlainString(x.t.GCn1ne, { tag: p() }),
                        children: (0, i.jsx)(o.PGe, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
};
function _(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(o.Text, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function A() {
    return (0, i.jsx)(d.A, { direction: d.A.Directions.LEFT, width: 12, height: 12, className: f.OW });
}
function I(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: a,
            disableInteraction: r,
            buttonRef: d,
        } = e,
        c = t ? x.intl.string(x.t.z9VPrQ) : x.intl.string(x.t.mriLXL),
        u = t ? x.intl.string(x.t.z9VPrQ) : x.intl.formatToPlainString(x.t.F6iMs4, { count: n });
    return r
        ? (0, i.jsx)("div", { className: f.X1, ref: d, children: (0, i.jsx)(_, { numberOfOverflowingTags: n }) })
        : (0, i.jsx)(s.m, {
              text: c,
              ariaHidden: t,
              children: (0, i.jsx)(o.DUT, {
                  innerRef: d,
                  onClick: t ? a : l,
                  "aria-label": u,
                  className: t ? f.cS : f.X1,
                  children: t ? (0, i.jsx)(A, {}) : (0, i.jsx)(_, { numberOfOverflowingTags: n }),
              }),
          });
}
let j = (e, t, n, i, a) =>
    (0, l.useCallback)(() => {
        if (null == n) return void a(0);
        let l = e.current?.getBoundingClientRect().width ?? 0,
            r = t.current?.getBoundingClientRect().width ?? 0,
            s = r > 0 ? 8 : 4,
            o = 0,
            d = 0,
            c = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        d = 0;
        for (let e = o; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((d += t.offsetWidth + 4) > 296 - l - r - s) break;
                o++;
            }
        }
        a(n.length - o);
    }, [e, t, n?.join(""), i, a]);
