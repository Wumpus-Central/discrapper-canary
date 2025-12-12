n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(624238),
    s = n(28664),
    c = n(481060),
    u = n(259580),
    d = n(785717),
    f = n(86419),
    g = n(978369),
    p = n(286957),
    m = n(388032),
    b = n(44258);
function h(e) {
    var t;
    let { tags: n, isCurrentUser: l, widgetType: s, applicationId: c, className: u, disableInteraction: h = !1 } = e,
        O = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        v = O.length > 0,
        P = o.qH,
        _ = l && !h && (0, f.M8)(s) && O.length < P,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        w = (0, i.useRef)(new Map()),
        S = (0, i.useRef)(null),
        E = (0, i.useRef)(null),
        [T, C] = (0, i.useState)(0),
        [D, k] = (0, i.useState)(!1),
        N = x(S, E, O, w, C);
    if (
        ((0, i.useEffect)(
            () => (
                N(),
                window.addEventListener("resize", N),
                () => {
                    window.removeEventListener("resize", N);
                }
            ),
            [N, null == O ? void 0 : O.join("")],
        ),
        !v && !_)
    )
        return null;
    let A = D ? O : O.slice(0, O.length - T);
    return (0, r.jsxs)("div", {
        className: a()(b.tagListContainer, u),
        children: [
            v &&
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
                                        applicationId: c,
                                        widgetType: s,
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
            _ &&
                (0, r.jsx)(g.Z, {
                    tags: n,
                    widgetType: s,
                    applicationId: c,
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
            (0, r.jsx)(c.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: h(),
            }),
            n &&
                !a &&
                (0, r.jsx)(s.u, {
                    text: m.intl.string(m.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, r.jsx)(c.P3F, {
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
                        children: (0, r.jsx)(c.Dio, {
                            size: "xxs",
                            color: "currentColor",
                        }),
                    }),
                }),
        ],
    });
};
function O(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, r.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t),
    });
}
function v() {
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
              children: (0, r.jsx)(O, { numberOfOverflowingTags: n }),
          })
        : (0, r.jsx)(s.u, {
              text: u,
              ariaHidden: t,
              children: (0, r.jsx)(c.P3F, {
                  innerRef: o,
                  onClick: t ? l : i,
                  "aria-label": d,
                  className: t ? b.collapseButton : b.expandButton,
                  children: t ? (0, r.jsx)(v, {}) : (0, r.jsx)(O, { numberOfOverflowingTags: n }),
              }),
          });
}
let x = (e, t, n, r, l) =>
    (0, i.useCallback)(() => {
        var i, a, o, s;
        if (null == n) return void l(0);
        let c = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
            u = null != (s = null == (a = t.current) ? void 0 : a.getBoundingClientRect().width) ? s : 0,
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
                if ((g += t.offsetWidth + 4) > 296 - c - u - d) break;
                f++;
            }
        }
        l(n.length - f);
    }, [e, t, null == n ? void 0 : n.join(""), r, l]);
