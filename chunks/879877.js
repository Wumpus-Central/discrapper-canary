n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(624238),
    c = n(28664),
    s = n(481060),
    u = n(259580),
    d = n(785717),
    f = n(86419),
    g = n(978369),
    p = n(286957),
    m = n(388032),
    b = n(44258);
function h(e) {
    var t;
    let { tags: n, isCurrentUser: l, widgetType: c, applicationId: s, className: u, disableInteraction: h = !1 } = e,
        v = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        O = v.length > 0,
        _ = o.qH,
        P = l && !h && (0, f.M8)(c) && v.length < _,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        w = (0, i.useRef)(new Map()),
        S = (0, i.useRef)(null),
        E = (0, i.useRef)(null),
        [T, C] = (0, i.useState)(0),
        [D, k] = (0, i.useState)(!1),
        N = x(S, E, v, w, C);
    if (
        ((0, i.useEffect)(
            () => (
                N(),
                window.addEventListener("resize", N),
                () => {
                    window.removeEventListener("resize", N);
                }
            ),
            [N, null == v ? void 0 : v.join("")],
        ),
        !O && !P)
    )
        return null;
    let A = D ? v : v.slice(0, v.length - T);
    return (0, r.jsxs)("div", {
        className: a()(b.tagListContainer, u),
        children: [
            O &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("ul", {
                            className: b.tagList,
                            "aria-label": m.intl.string(m.t.EfjTi4),
                            children: A.map((e) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        tag: e,
                                        isCurrentUser: l,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && w.current.set(e, t);
                                        },
                                        disableInteraction: h,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        T > 0 &&
                            (0, r.jsx)(j, {
                                buttonRef: S,
                                isExpanded: D,
                                numberOfOverflowingTags: T,
                                onExpandTags: () => {
                                    k(!0), I({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    k(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: h,
                            }),
                    ],
                }),
            P &&
                (0, r.jsx)(g.Z, {
                    tags: n,
                    widgetType: c,
                    applicationId: s,
                    ref: E,
                }),
        ],
    });
}
let y = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: i, widgetType: l, disableInteraction: a, ref: o } = e,
        { trackUserProfileEditAction: u } = (0, d.KZ)(),
        g = (0, p.zK)(t);
    if (null == g) return null;
    let { getText: h, icon: y } = g;
    return (0, r.jsxs)("li", {
        className: b.tag,
        ref: o,
        children: [
            (0, r.jsx)(y, { size: "xxs" }),
            (0, r.jsx)(s.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: h(),
            }),
            n &&
                !a &&
                (0, r.jsx)(c.u, {
                    text: m.intl.string(m.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, r.jsx)(s.P3F, {
                        onClick: () => {
                            (0, f.RZ)(l, i, t),
                                u({
                                    action: "TAG_REMOVED",
                                    widgetEdited: l,
                                    gameId: i,
                                });
                        },
                        className: b.removeButton,
                        "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, { tag: h() }),
                        children: (0, r.jsx)(s.Dio, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                    }),
                }),
        ],
    });
};
function v(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, r.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t),
    });
}
function O() {
    return (0, r.jsx)(u.Z, {
        direction: u.Z.Directions.LEFT,
        width: 12,
        height: 12,
        className: b.caret,
    });
}
function j(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: i,
            onCollapseTags: l,
            disableInteraction: a,
            buttonRef: o,
        } = e,
        u = t ? m.intl.string(m.t.z9VPrQ) : m.intl.string(m.t.mriLXL),
        d = t ? m.intl.string(m.t.z9VPrQ) : m.intl.formatToPlainString(m.t.F6iMs4, { count: n });
    return a
        ? (0, r.jsx)("div", {
              className: b.expandButton,
              ref: o,
              children: (0, r.jsx)(v, { numberOfOverflowingTags: n }),
          })
        : (0, r.jsx)(c.u, {
              text: u,
              ariaHidden: t,
              children: (0, r.jsx)(s.P3F, {
                  innerRef: o,
                  onClick: t ? l : i,
                  "aria-label": d,
                  className: t ? b.collapseButton : b.expandButton,
                  children: t ? (0, r.jsx)(O, {}) : (0, r.jsx)(v, { numberOfOverflowingTags: n }),
              }),
          });
}
let x = (e, t, n, r, l) =>
    (0, i.useCallback)(() => {
        var i, a, o, c;
        if (null == n) return void l(0);
        let s = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
            u = null != (c = null == (a = t.current) ? void 0 : a.getBoundingClientRect().width) ? c : 0,
            d = u > 0 ? 8 : 4,
            f = 0,
            g = 0,
            p = r.current;
        for (let e = 0; e < n.length; e++) {
            let t = p.get(n[e]);
            if (null != t) {
                if ((g += t.offsetWidth + 4) > 296) break;
                f++;
            }
        }
        g = 0;
        for (let e = f; e < n.length; e++) {
            let t = p.get(n[e]);
            if (null != t) {
                if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
                f++;
            }
        }
        l(n.length - f);
    }, [e, t, null == n ? void 0 : n.join(""), r, l]);
