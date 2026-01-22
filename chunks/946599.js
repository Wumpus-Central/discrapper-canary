n.d(t, { A: () => y }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(926675),
    o = n(990078),
    c = n(397927),
    u = n(147925),
    d = n(183555),
    f = n(735321),
    p = n(122338),
    b = n(394245),
    g = n(985018),
    m = n(542467);
function y(e) {
    var t;
    let { tags: n, isCurrentUser: i, widgetType: o, applicationId: c, className: u, disableInteraction: y = !1 } = e,
        j = null != (t = null == n ? void 0 : n.filter((e) => null != (0, b.W3)(e))) ? t : [],
        x = j.length > 0,
        A = s.Y$,
        w = i && !y && (0, f.mS)(o) && j.length < A,
        { trackUserProfileAction: I } = (0, d.NJ)(),
        P = (0, l.useRef)(new Map()),
        E = (0, l.useRef)(null),
        S = (0, l.useRef)(null),
        [T, _] = (0, l.useState)(0),
        [N, D] = (0, l.useState)(!1),
        R = v(E, S, j, P, _);
    if (
        ((0, l.useEffect)(
            () => (
                R(),
                window.addEventListener("resize", R),
                () => {
                    window.removeEventListener("resize", R);
                }
            ),
            [R, null == j ? void 0 : j.join("")],
        ),
        !x && !w)
    )
        return null;
    let C = N ? j : j.slice(0, j.length - T);
    return (0, r.jsxs)("div", {
        className: a()(m.I4, u),
        children: [
            x &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("ul", {
                            className: m.Tw,
                            "aria-label": g.intl.string(g.t.EfjTi4),
                            children: C.map((e) =>
                                (0, r.jsx)(
                                    O,
                                    {
                                        tag: e,
                                        isCurrentUser: i,
                                        applicationId: c,
                                        widgetType: o,
                                        ref: (t) => {
                                            null != t && P.current.set(e, t);
                                        },
                                        disableInteraction: y,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        T > 0 &&
                            (0, r.jsx)(h, {
                                buttonRef: E,
                                isExpanded: N,
                                numberOfOverflowingTags: T,
                                onExpandTags: () => {
                                    D(!0), I({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    D(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: y,
                            }),
                    ],
                }),
            w &&
                (0, r.jsx)(p.A, {
                    tags: n,
                    widgetType: o,
                    applicationId: c,
                    ref: S,
                }),
        ],
    });
}
let O = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: l, widgetType: i, disableInteraction: a, ref: s } = e,
        { trackUserProfileEditAction: u } = (0, d.NJ)(),
        p = (0, b.W3)(t);
    if (null == p) return null;
    let { getText: y, icon: O } = p;
    return (0, r.jsxs)("li", {
        className: m.Tc,
        ref: s,
        children: [
            (0, r.jsx)(O, { size: "xxs" }),
            (0, r.jsx)(c.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: y(),
            }),
            n &&
                !a &&
                (0, r.jsx)(o.m, {
                    text: g.intl.string(g.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, r.jsx)(c.DUT, {
                        onClick: () => {
                            (0, f.tg)(i, l, t),
                                u({
                                    action: "TAG_REMOVED",
                                    widgetEdited: i,
                                    gameId: l,
                                });
                        },
                        className: m.DT,
                        "aria-label": g.intl.formatToPlainString(g.t.GCn1ne, { tag: y() }),
                        children: (0, r.jsx)(c.PGe, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                    }),
                }),
        ],
    });
};
function j(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t),
    });
}
function x() {
    return (0, r.jsx)(u.A, {
        direction: u.A.Directions.LEFT,
        width: 12,
        height: 12,
        className: m.OW,
    });
}
function h(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: l,
            onCollapseTags: i,
            disableInteraction: a,
            buttonRef: s,
        } = e,
        u = t ? g.intl.string(g.t.z9VPrQ) : g.intl.string(g.t.mriLXL),
        d = t ? g.intl.string(g.t.z9VPrQ) : g.intl.formatToPlainString(g.t.F6iMs4, { count: n });
    return a
        ? (0, r.jsx)("div", {
              className: m.X1,
              ref: s,
              children: (0, r.jsx)(j, { numberOfOverflowingTags: n }),
          })
        : (0, r.jsx)(o.m, {
              text: u,
              ariaHidden: t,
              children: (0, r.jsx)(c.DUT, {
                  innerRef: s,
                  onClick: t ? i : l,
                  "aria-label": d,
                  className: t ? m.cS : m.X1,
                  children: t ? (0, r.jsx)(x, {}) : (0, r.jsx)(j, { numberOfOverflowingTags: n }),
              }),
          });
}
let v = (e, t, n, r, i) =>
    (0, l.useCallback)(() => {
        var l, a, s, o;
        if (null == n) return void i(0);
        let c = null != (l = null == (s = e.current) ? void 0 : s.getBoundingClientRect().width) ? l : 0,
            u = null != (a = null == (o = t.current) ? void 0 : o.getBoundingClientRect().width) ? a : 0,
            d = u > 0 ? 8 : 4,
            f = 0,
            p = 0,
            b = r.current;
        for (let e = 0; e < n.length; e++) {
            let t = b.get(n[e]);
            if (null != t) {
                if ((p += t.offsetWidth + 4) > 296) break;
                f++;
            }
        }
        p = 0;
        for (let e = f; e < n.length; e++) {
            let t = b.get(n[e]);
            if (null != t) {
                if ((p += t.offsetWidth + 4) > 296 - c - u - d) break;
                f++;
            }
        }
        i(n.length - f);
    }, [e, t, null == n ? void 0 : n.join(""), r, i]);
