var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(451988),
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
            let { errorMessage: t, className: n, avError: r } = e,
                v = i.useRef(null),
                E = "",
                { text: C, node: j } = (function (e) {
                    if (null == e) return { text: null, node: null };
                    let t = (0, m.B1)(e)?.errorCode,
                        n = A.intl.formatToPlainString(A.t.ejOT95, { errorCode: t }),
                        i = A.intl.format(A.t.If5Q0h, {
                            errorCode: t,
                            helpDeskURL: g.A.getArticleURL(h.MVz.AV_ERROR_CODES),
                        }),
                        r = p.A.isDeveloper;
                    return {
                        text: r ? `${n} (${e})` : n,
                        node: r ? (0, l.jsxs)(l.Fragment, { children: [i, " (", e, ")"] }) : i,
                    };
                })(r);
            E = null != C ? `${t} ${C}` : t;
            let [S] = i.useState(new s.Ep()),
                [I, b] = i.useState(!1),
                [y, _] = i.useState(!1),
                N = i.useCallback(() => {
                    S.start(
                        250,
                        () => {
                            b(!1);
                        },
                        !1,
                    );
                }, [S, b]),
                w = i.useCallback(() => {
                    (S.stop(), b(!0));
                }, [S, b]),
                k = i.useCallback(() => {
                    _(!0);
                }, []),
                R = i.useCallback(() => {
                    _(!1);
                }, []);
            return (0, l.jsx)(o.Y, {
                renderPopout: () =>
                    (0, l.jsx)(f.A, {
                        children: (0, l.jsxs)("div", {
                            className: x.SW,
                            onMouseEnter: w,
                            onMouseLeave: N,
                            children: [
                                t,
                                null != j &&
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-muted",
                                        className: x.F1,
                                        children: j,
                                    }),
                            ],
                        }),
                    }),
                targetElementRef: v,
                shouldShow: y || I,
                position: "bottom",
                children: (e) =>
                    (0, l.jsx)(f.A, {
                        children: (0, l.jsx)(c.vN, {
                            children: (0, l.jsx)("div", {
                                ref: v,
                                tabIndex: 0,
                                onMouseEnter: w,
                                onMouseLeave: N,
                                onFocus: k,
                                onBlur: R,
                                className: a()(n, x.zr),
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
