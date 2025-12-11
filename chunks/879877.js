n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(624238),
    c = n(28664),
    s = n(481060),
    u = n(259580),
    d = n(785717),
    f = n(86419),
    g = n(978369),
    p = n(286957),
    b = n(388032),
    m = n(260968);
function h(e) {
    var t;
    let { tags: n, isCurrentUser: a, widgetType: c, applicationId: s, className: u, disableInteraction: h = !1 } = e,
        v = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        O = v.length > 0,
        P = o.qH,
        I = a && !h && (0, f.M8)(c) && v.length < P,
        { trackUserProfileAction: w } = (0, d.KZ)(),
        S = (0, i.useRef)(new Map()),
        E = (0, i.useRef)(null),
        _ = (0, i.useRef)(null),
        [T, C] = (0, i.useState)(0),
        [D, k] = (0, i.useState)(!1),
        N = x(E, _, v, S, C);
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
        !O && !I)
    )
        return null;
    let A = D ? v : v.slice(0, v.length - T);
    return (0, r.jsxs)("div", {
        className: l()(m.tagListContainer, u),
        children: [
            O &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("ul", {
                            className: m.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: A.map((e) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        tag: e,
                                        isCurrentUser: a,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && S.current.set(e, t);
                                        },
                                        disableInteraction: h,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        T > 0 &&
                            (0, r.jsx)(j, {
                                buttonRef: E,
                                isExpanded: D,
                                numberOfOverflowingTags: T,
                                onExpandTags: () => {
                                    k(!0), w({ action: "EXPAND_GAME_TAGS" });
                                },
                                onCollapseTags: () => {
                                    k(!1), w({ action: "COLLAPSE_GAME_TAGS" });
                                },
                                disableInteraction: h,
                            }),
                    ],
                }),
            I &&
                (0, r.jsx)(g.Z, {
                    tags: n,
                    widgetType: c,
                    applicationId: s,
                    ref: _,
                }),
        ],
    });
}
let y = (e) => {
    let { tag: t, isCurrentUser: n, applicationId: i, widgetType: a, disableInteraction: l, ref: o } = e,
        { trackUserProfileEditAction: u } = (0, d.KZ)(),
        g = (0, p.zK)(t);
    if (null == g) return null;
    let { getText: h, icon: y } = g;
    return (0, r.jsxs)("li", {
        className: m.tag,
        ref: o,
        children: [
            (0, r.jsx)(y, { size: "xxs" }),
            (0, r.jsx)(s.Text, {
                variant: "text-xxs/medium",
                color: "text-subtle",
                children: h(),
            }),
            n &&
                !l &&
                (0, r.jsx)(c.u, {
                    text: b.intl.string(b.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, r.jsx)(s.P3F, {
                        onClick: () => {
                            (0, f.RZ)(a, i, t),
                                u({
                                    action: "TAG_REMOVED",
                                    widgetEdited: a,
                                    gameId: i,
                                });
                        },
                        className: m.removeButton,
                        "aria-label": b.intl.formatToPlainString(b.t.GCn1ne, { tag: h() }),
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
        className: m.caret,
    });
}
function j(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: i,
            onCollapseTags: a,
            disableInteraction: l,
            buttonRef: o,
        } = e,
        u = t ? b.intl.string(b.t.z9VPrQ) : b.intl.string(b.t.mriLXL),
        d = t ? b.intl.string(b.t.z9VPrQ) : b.intl.formatToPlainString(b.t.F6iMs4, { count: n });
    return l
        ? (0, r.jsx)("div", {
              className: m.expandButton,
              ref: o,
              children: (0, r.jsx)(v, { numberOfOverflowingTags: n }),
          })
        : (0, r.jsx)(c.u, {
              text: u,
              ariaHidden: t,
              children: (0, r.jsx)(s.P3F, {
                  innerRef: o,
                  onClick: t ? a : i,
                  "aria-label": d,
                  className: t ? m.collapseButton : m.expandButton,
                  children: t ? (0, r.jsx)(O, {}) : (0, r.jsx)(v, { numberOfOverflowingTags: n }),
              }),
          });
}
let x = (e, t, n, r, a) =>
    (0, i.useCallback)(() => {
        var i, l, o, c;
        if (null == n) return void a(0);
        let s = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
            u = null != (c = null == (l = t.current) ? void 0 : l.getBoundingClientRect().width) ? c : 0,
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
        a(n.length - f);
    }, [e, t, null == n ? void 0 : n.join(""), r, a]);
