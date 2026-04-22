n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(451988),
    o = n(265872),
    d = n(834730),
    c = n(187322),
    u = n(695366),
    _ = n(487329),
    f = n(540999),
    m = n(975571),
    p = n(447404),
    g = n(652215),
    h = n(985018),
    A = n(151802);
function x(e) {
    let { errorMessage: t, className: n, avError: a } = e,
        x = l.useRef(null),
        v = "",
        { text: I, node: E } = (function (e) {
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
    v = null != I ? `${t} ${I}` : t;
    let [C] = l.useState(new s.Ep()),
        [j, N] = l.useState(!1),
        [y, b] = l.useState(!1),
        S = l.useCallback(() => {
            C.start(
                250,
                () => {
                    N(!1);
                },
                !1,
            );
        }, [C, N]),
        w = l.useCallback(() => {
            C.stop(), N(!0);
        }, [C, N]),
        T = l.useCallback(() => {
            b(!0);
        }, []),
        k = l.useCallback(() => {
            b(!1);
        }, []);
    return (0, i.jsx)(o.Y, {
        renderPopout: () =>
            (0, i.jsx)(p.A, {
                children: (0, i.jsxs)("div", {
                    className: A.SW,
                    onMouseEnter: w,
                    onMouseLeave: S,
                    children: [
                        t,
                        null != E &&
                            (0, i.jsx)(d.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: A.F1,
                                children: E,
                            }),
                    ],
                }),
            }),
        targetElementRef: x,
        shouldShow: y || j,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(p.A, {
                children: (0, i.jsx)(c.vN, {
                    children: (0, i.jsx)("div", {
                        ref: x,
                        tabIndex: 0,
                        onMouseEnter: w,
                        onMouseLeave: S,
                        onFocus: T,
                        onBlur: k,
                        className: r()(n, A.zr),
                        "aria-label": v,
                        ...e,
                        children: (0, i.jsx)(u.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: A.QW,
                        }),
                    }),
                }),
            }),
    });
}
