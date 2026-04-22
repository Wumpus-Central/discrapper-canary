n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(990078),
    o = n(834730),
    c = n(939249),
    d = n(789645),
    u = n(147925),
    _ = n(183555),
    g = n(735321),
    f = n(122338),
    m = n(394245),
    x = n(985018),
    p = n(767070);
function I(e) {
    let { tags: t, isCurrentUser: n, widgetType: l, applicationId: r, className: o, disableInteraction: c = !1 } = e,
        d = t?.filter((e) => null != (0, m.W3)(e)) ?? [],
        u = d.length > 0,
        I = n && !c && (0, g.mS)(l) && d.length < 20,
        { trackUserProfileAction: h } = (0, _.NJ)(),
        E = (0, a.useRef)(new Map()),
        b = (0, a.useRef)(null),
        j = (0, a.useRef)(null),
        [T, N] = (0, a.useState)(0),
        [S, k] = (0, a.useState)(!1),
        O = C(b, j, d, E, N);
    if (
        ((0, a.useEffect)(
            () => (
                O(),
                window.addEventListener("resize", O),
                () => {
                    window.removeEventListener("resize", O);
                }
            ),
            [O, d?.join("")],
        ),
        !u && !I)
    )
        return null;
    let L = S ? d : d.slice(0, d.length - T);
    return (0, i.jsxs)("div", {
        className: s()(p.I4, o),
        children: [
            u &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("ul", {
                            className: p.Tw,
                            "aria-label": x.intl.string(x.t.EfjTi4),
                            children: L.map((e) =>
                                (0, i.jsx)(
                                    A,
                                    {
                                        tag: e,
                                        isCurrentUser: n,
                                        applicationId: r,
                                        widgetType: l,
                                        ref: (t) => {
                                            null != t && E.current.set(e, t);
                                        },
                                        disableInteraction: c,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        T > 0 &&
                            (0, i.jsx)(v, {
                                buttonRef: b,
                                isExpanded: S,
                                numberOfOverflowingTags: T,
                                onExpandTags: () => {
                                    k(!0), h({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    k(!1), h({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: c,
                            }),
                    ],
                }),
            I && (0, i.jsx)(f.A, { tags: t, widgetType: l, applicationId: r, ref: j }),
        ],
    });
}
let A = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: a, widgetType: l, disableInteraction: s, ref: u } = e,
        { trackUserProfileEditAction: f } = (0, _.NJ)(),
        I = (0, m.W3)(t);
    if (null == I) return null;
    let { getText: A, icon: h } = I;
    return (0, i.jsxs)("li", {
        className: p.Tc,
        ref: u,
        children: [
            (0, i.jsx)(h, { size: "xxs" }),
            (0, i.jsx)(o.E, { variant: "text-xxs/medium", color: "text-subtle", children: A() }),
            n &&
                !s &&
                (0, i.jsx)(r.m, {
                    text: x.intl.string(x.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(c.D, {
                        onClick: () => {
                            (0, g.tg)(l, a, t), f({ action: "TAG_REMOVED", widgetEdited: l, gameId: a });
                        },
                        className: p.DT,
                        "aria-label": x.intl.formatToPlainString(x.t.GCn1ne, { tag: A() }),
                        children: (0, i.jsx)(d.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
};
function h(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, i.jsx)(o.E, { variant: "text-xxs/medium", color: "none", children: `+${t}` });
}
function E() {
    return (0, i.jsx)(u.A, { direction: u.A.Directions.LEFT, width: 12, height: 12, className: p.OW });
}
function v(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: a,
            onCollapseTags: l,
            disableInteraction: s,
            buttonRef: o,
        } = e,
        d = t ? x.intl.string(x.t.z9VPrQ) : x.intl.string(x.t.mriLXL),
        u = t ? x.intl.string(x.t.z9VPrQ) : x.intl.formatToPlainString(x.t.F6iMs4, { count: n });
    return s
        ? (0, i.jsx)("div", { className: p.X1, ref: o, children: (0, i.jsx)(h, { numberOfOverflowingTags: n }) })
        : (0, i.jsx)(r.m, {
              text: d,
              ariaHidden: t,
              children: (0, i.jsx)(c.D, {
                  innerRef: o,
                  onClick: t ? l : a,
                  "aria-label": u,
                  className: t ? p.cS : p.X1,
                  children: t ? (0, i.jsx)(E, {}) : (0, i.jsx)(h, { numberOfOverflowingTags: n }),
              }),
          });
}
let C = (e, t, n, i, l) =>
    (0, a.useCallback)(() => {
        if (null == n) return void l(0);
        let a = e.current?.getBoundingClientRect().width ?? 0,
            s = t.current?.getBoundingClientRect().width ?? 0,
            r = s > 0 ? 8 : 4,
            o = 0,
            c = 0,
            d = i.current;
        for (let e = 0; e < n.length; e++) {
            let t = d.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296) break;
                o++;
            }
        }
        c = 0;
        for (let e = o; e < n.length; e++) {
            let t = d.get(n[e]);
            if (null != t) {
                if ((c += t.offsetWidth + 4) > 296 - a - s - r) break;
                o++;
            }
        }
        l(n.length - o);
    }, [e, t, n?.join(""), i, l]);
