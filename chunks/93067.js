n.d(t, { A: () => v });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(451988),
    o = n(922016),
    u = n(834730),
    c = n(259678),
    d = n(695366),
    m = n(487329),
    p = n(540999),
    g = n(975571),
    f = n(447404),
    h = n(652215),
    A = n(375708),
    x = n(640393);
function v(e) {
    let { errorMessage: t, className: n, avError: s } = e,
        v = i.useRef(null),
        E = "",
        { text: C, node: I } = (function (e) {
            if (null == e) return { text: null, node: null };
            let t = (0, m.B1)(e)?.errorCode,
                n = A.intl.formatToPlainString(A.t.ejOT95, { errorCode: t }),
                i = A.intl.format(A.t.If5Q0h, { errorCode: t, helpDeskURL: g.A.getArticleURL(h.MVz.AV_ERROR_CODES) }),
                s = p.A.isDeveloper;
            return {
                text: s ? `${n} (${e})` : n,
                node: s ? (0, l.jsxs)(l.Fragment, { children: [i, " (", e, ")"] }) : i,
            };
        })(s);
    E = null != C ? `${t} ${C}` : t;
    let [S] = i.useState(new a.Ep()),
        [j, _] = i.useState(!1),
        [N, b] = i.useState(!1),
        y = i.useCallback(() => {
            S.start(
                250,
                () => {
                    _(!1);
                },
                !1,
            );
        }, [S, _]),
        D = i.useCallback(() => {
            S.stop(), _(!0);
        }, [S, _]),
        T = i.useCallback(() => {
            b(!0);
        }, []),
        R = i.useCallback(() => {
            b(!1);
        }, []);
    return (0, l.jsx)(o.Y, {
        renderPopout: () =>
            (0, l.jsx)(f.A, {
                children: (0, l.jsxs)("div", {
                    className: x.SW,
                    onMouseEnter: D,
                    onMouseLeave: y,
                    children: [
                        t,
                        null != I &&
                            (0, l.jsx)(u.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: x.F1,
                                children: I,
                            }),
                    ],
                }),
            }),
        targetElementRef: v,
        shouldShow: N || j,
        position: "bottom",
        children: (e) =>
            (0, l.jsx)(f.A, {
                children: (0, l.jsx)(c.vN, {
                    children: (0, l.jsx)("div", {
                        ref: v,
                        tabIndex: 0,
                        onMouseEnter: D,
                        onMouseLeave: y,
                        onFocus: T,
                        onBlur: R,
                        className: r()(n, x.zr),
                        "aria-label": E,
                        ...e,
                        children: (0, l.jsx)(d.E, {
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
