n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(451988),
    o = n(397927),
    c = n(709710),
    d = n(540999),
    u = n(975571),
    h = n(447404),
    m = n(652215),
    A = n(985018),
    p = n(156255);
function g(e) {
    let { errorMessage: t, className: n, avError: a } = e,
        g = l.useRef(null),
        f = "",
        { text: _, node: E } = (function (e) {
            if (null == e) return { text: null, node: null };
            let t = (0, c.B1)(e)?.errorCode,
                n = A.intl.formatToPlainString(A.t.ejOT95, { errorCode: t }),
                l = A.intl.format(A.t.If5Q0h, { errorCode: t, helpDeskURL: u.A.getArticleURL(m.MVz.AV_ERROR_CODES) }),
                a = d.A.isDeveloper;
            return {
                text: a ? `${n} (${e})` : n,
                node: a ? (0, i.jsxs)(i.Fragment, { children: [l, " (", e, ")"] }) : l,
            };
        })(a);
    f = null != _ ? `${t} ${_}` : t;
    let [C] = l.useState(new r.Ep()),
        [x, S] = l.useState(!1),
        [T, I] = l.useState(!1),
        N = l.useCallback(() => {
            C.start(
                250,
                () => {
                    S(!1);
                },
                !1,
            );
        }, [C, S]),
        v = l.useCallback(() => {
            C.stop(), S(!0);
        }, [C, S]),
        y = l.useCallback(() => {
            I(!0);
        }, []),
        b = l.useCallback(() => {
            I(!1);
        }, []);
    return (0, i.jsx)(o.YNO, {
        renderPopout: () =>
            (0, i.jsx)(h.A, {
                children: (0, i.jsxs)("div", {
                    className: p.SW,
                    onMouseEnter: v,
                    onMouseLeave: N,
                    children: [
                        t,
                        null != E &&
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: p.F1,
                                children: E,
                            }),
                    ],
                }),
            }),
        targetElementRef: g,
        shouldShow: T || x,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(h.A, {
                children: (0, i.jsx)(o.vN3, {
                    children: (0, i.jsx)("div", {
                        ref: g,
                        tabIndex: 0,
                        onMouseEnter: v,
                        onMouseLeave: N,
                        onFocus: y,
                        onBlur: b,
                        className: s()(n, p.zr),
                        "aria-label": f,
                        ...e,
                        children: (0, i.jsx)(o.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: p.QW,
                        }),
                    }),
                }),
            }),
    });
}
