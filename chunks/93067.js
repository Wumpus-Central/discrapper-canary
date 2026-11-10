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
    h = n(447404),
    f = n(652215),
    x = n(792996),
    A = n(640393);
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
                        n = x.intl.formatToPlainString(x.t.ejOT95, { errorCode: t }),
                        i = x.intl.format(x.t.If5Q0h, {
                            errorCode: t,
                            helpDeskURL: g.A.getArticleURL(f.MVz.AV_ERROR_CODES),
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
                L = i.useCallback(() => {
                    (j.stop(), _(!0));
                }, [j, _]),
                T = i.useCallback(() => {
                    N(!0);
                }, []),
                R = i.useCallback(() => {
                    N(!1);
                }, []);
            return (0, l.jsx)(o.Y, {
                renderPopout: () =>
                    (0, l.jsx)(h.A, {
                        children: (0, l.jsxs)("div", {
                            className: A.SW,
                            onMouseEnter: L,
                            onMouseLeave: y,
                            children: [
                                t,
                                null != I &&
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-muted",
                                        className: A.F1,
                                        children: I,
                                    }),
                            ],
                        }),
                    }),
                targetElementRef: v,
                shouldShow: b || S,
                position: "bottom",
                children: (e) =>
                    (0, l.jsx)(h.A, {
                        children: (0, l.jsx)(c.vN, {
                            children: (0, l.jsx)("div", {
                                ref: v,
                                tabIndex: 0,
                                onMouseEnter: L,
                                onMouseLeave: y,
                                onFocus: T,
                                onBlur: R,
                                className: r()(n, A.zr),
                                "aria-label": E,
                                ...e,
                                children: (0, l.jsx)(d.CircleErrorIcon, {
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
        },
    },
);
