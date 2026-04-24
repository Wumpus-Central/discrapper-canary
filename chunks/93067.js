n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(451988),
    o = n(922016),
    d = n(834730),
    c = n(187322),
    u = n(695366),
    _ = n(487329),
    f = n(540999),
    m = n(975571),
    p = n(447404),
    g = n(652215),
    h = n(985018),
    x = n(151802);
function v(e) {
    let { errorMessage: t, className: n, avError: a } = e,
        v = l.useRef(null),
        A = "",
        { text: I, node: C } = (function (e) {
            if (null == e) return { text: null, node: null };
            let t = (0, _.B1)(e)?.errorCode,
                n = h.intl.formatToPlainString(h.t.ejOT95, { errorCode: t }),
                l = h.intl.format(h.t.If5Q0h, { errorCode: t, helpDeskURL: m.A.getArticleURL(g.MVz.AV_ERROR_CODES) }),
                a = f.A.isDeveloper;
            return {
                text: a ? `${n} (${e})` : n,
                node: a ? (0, i.jsxs)(i.Fragment, { children: [l, " (", e, ")"] }) : l,
            };
        })(a);
    A = null != I ? `${t} ${I}` : t;
    let [E] = l.useState(new s.Ep()),
        [j, b] = l.useState(!1),
        [N, S] = l.useState(!1),
        y = l.useCallback(() => {
            E.start(
                250,
                () => {
                    b(!1);
                },
                !1,
            );
        }, [E, b]),
        w = l.useCallback(() => {
            E.stop(), b(!0);
        }, [E, b]),
        T = l.useCallback(() => {
            S(!0);
        }, []),
        R = l.useCallback(() => {
            S(!1);
        }, []);
    return (0, i.jsx)(o.Y, {
        renderPopout: () =>
            (0, i.jsx)(p.A, {
                children: (0, i.jsxs)("div", {
                    className: x.SW,
                    onMouseEnter: w,
                    onMouseLeave: y,
                    children: [
                        t,
                        null != C &&
                            (0, i.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: x.F1,
                                children: C,
                            }),
                    ],
                }),
            }),
        targetElementRef: v,
        shouldShow: N || j,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(p.A, {
                children: (0, i.jsx)(c.vN, {
                    children: (0, i.jsx)("div", {
                        ref: v,
                        tabIndex: 0,
                        onMouseEnter: w,
                        onMouseLeave: y,
                        onFocus: T,
                        onBlur: R,
                        className: r()(n, x.zr),
                        "aria-label": A,
                        ...e,
                        children: (0, i.jsx)(u.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: x.QW,
                        }),
                    }),
                }),
            }),
    });
}
