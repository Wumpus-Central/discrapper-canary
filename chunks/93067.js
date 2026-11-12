var l = n(477900),
    i = n(582128),
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
    h = n(652215),
    A = n(792996),
    x = n(640393);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { errorMessage: t, className: n, avError: s } = e,
                v = i.useRef(null),
                E = "",
                { text: C, node: I } = (function (e) {
                    if (null == e) return { text: null, node: null };
                    let t = (0, m.B1)(e)?.errorCode,
                        n = A.intl.formatToPlainString(A.t.ejOT95, { errorCode: t }),
                        i = A.intl.format(A.t.If5Q0h, {
                            errorCode: t,
                            helpDeskURL: g.A.getArticleURL(h.MVz.AV_ERROR_CODES),
                        }),
                        s = p.A.isDeveloper;
                    return {
                        text: s ? `${n} (${e})` : n,
                        node: s ? (0, l.jsxs)(l.Fragment, { children: [i, " (", e, ")"] }) : i,
                    };
                })(s);
            E = null != C ? `${t} ${C}` : t;
            let [j] = i.useState(new a.Ep()),
                [S, _] = i.useState(!1),
                [b, N] = i.useState(!1),
                y = i.useCallback(() => {
                    j.start(
                        250,
                        () => {
                            _(!1);
                        },
                        !1,
                    );
                }, [j, _]),
                R = i.useCallback(() => {
                    (j.stop(), _(!0));
                }, [j, _]),
                T = i.useCallback(() => {
                    N(!0);
                }, []),
                L = i.useCallback(() => {
                    N(!1);
                }, []);
            return (0, l.jsx)(o.Y, {
                renderPopout: () =>
                    (0, l.jsx)(f.A, {
                        children: (0, l.jsxs)("div", {
                            className: x.SW,
                            onMouseEnter: R,
                            onMouseLeave: y,
                            children: [
                                t,
                                null != I &&
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-muted",
                                        className: x.F1,
                                        children: I,
                                    }),
                            ],
                        }),
                    }),
                targetElementRef: v,
                shouldShow: b || S,
                position: "bottom",
                children: (e) =>
                    (0, l.jsx)(f.A, {
                        children: (0, l.jsx)(c.vN, {
                            children: (0, l.jsx)("div", {
                                ref: v,
                                tabIndex: 0,
                                onMouseEnter: R,
                                onMouseLeave: y,
                                onFocus: T,
                                onBlur: L,
                                className: r()(n, x.zr),
                                "aria-label": E,
                                ...e,
                                children: (0, l.jsx)(d.CircleErrorIcon, {
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
        },
    },
);
