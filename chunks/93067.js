n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(451988),
    o = n(265872),
    u = n(834730),
    c = n(559106),
    d = n(695366),
    m = n(487329),
    p = n(540999),
    g = n(975571),
    f = n(447404),
    x = n(652215),
    h = n(105292),
    A = n(640393);
function v(e) {
    let { errorMessage: t, className: n, avError: s } = e,
        v = l.useRef(null),
        E = "",
        { text: C, node: j } = (function (e) {
            if (null == e) return { text: null, node: null };
            let t = (0, m.B1)(e)?.errorCode,
                n = h.intl.formatToPlainString(h.t.ejOT95, { errorCode: t }),
                l = h.intl.format(h.t.If5Q0h, { errorCode: t, helpDeskURL: g.A.getArticleURL(x.MVz.AV_ERROR_CODES) }),
                s = p.A.isDeveloper;
            return {
                text: s ? `${n} (${e})` : n,
                node: s ? (0, i.jsxs)(i.Fragment, { children: [l, " (", e, ")"] }) : l,
            };
        })(s);
    E = null != C ? `${t} ${C}` : t;
    let [I] = l.useState(new a.Ep()),
        [S, _] = l.useState(!1),
        [N, b] = l.useState(!1),
        y = l.useCallback(() => {
            I.start(
                250,
                () => {
                    _(!1);
                },
                !1,
            );
        }, [I, _]),
        T = l.useCallback(() => {
            (I.stop(), _(!0));
        }, [I, _]),
        L = l.useCallback(() => {
            b(!0);
        }, []),
        D = l.useCallback(() => {
            b(!1);
        }, []);
    return (0, i.jsx)(o.Y, {
        renderPopout: () =>
            (0, i.jsx)(f.A, {
                children: (0, i.jsxs)("div", {
                    className: A.SW,
                    onMouseEnter: T,
                    onMouseLeave: y,
                    children: [
                        t,
                        null != j &&
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/semibold",
                                color: "text-muted",
                                className: A.F1,
                                children: j,
                            }),
                    ],
                }),
            }),
        targetElementRef: v,
        shouldShow: N || S,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(f.A, {
                children: (0, i.jsx)(c.vN, {
                    children: (0, i.jsx)("div", {
                        ref: v,
                        tabIndex: 0,
                        onMouseEnter: T,
                        onMouseLeave: y,
                        onFocus: L,
                        onBlur: D,
                        className: r()(n, A.zr),
                        "aria-label": E,
                        ...e,
                        children: (0, i.jsx)(d.E, {
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
