n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(575053),
    o = n(120356),
    s = n.n(o),
    l = n(692547),
    c = n(481060),
    u = n(219929),
    d = n(388032),
    f = n(391901),
    p = n(979712);
let _ = function (e) {
    let t = i.useRef(null),
        { stripeType: n, flipped: o, updateCompleted: _, onFocus: m, onBlur: h } = e,
        [g, E] = i.useState(u.Qy.UNKNOWN),
        [b, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        [S, I] = i.useState(null),
        [T, C] = i.useState({}),
        A = (0, a.useElements)(),
        N = i.useCallback(() => {
            if (null != A)
                switch (n) {
                    case "cardNumber": {
                        let e = A.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = A.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = A.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [A, n]),
        P = i.useCallback(
            (e) => {
                O || e.empty || v(!0), null != _ && _(e.complete), null != e.error && y(!1);
            },
            [O, _],
        ),
        R = i.useCallback(() => {
            y(!0), null == m || m();
        }, [m]),
        D = i.useCallback(() => {
            y(!1), null == h || h();
        }, [h]),
        w = i.useCallback(() => {
            if (null != A)
                switch (n) {
                    case "cardNumber": {
                        let e = A.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            g !== e.brand && E(e.brand),
                                e.empty && O
                                    ? I(d.intl.string(d.t.eOIfuy))
                                    : null != e.error
                                      ? I(d.intl.string(d.t.x4pWtJ))
                                      : I(null),
                                P(e);
                        }),
                            e.on("focus", R),
                            e.on("blur", D);
                        break;
                    }
                    case "cardExpiry": {
                        let e = A.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && O) ? I(d.intl.string(d.t["9/zZdl"])) : I(null), P(e);
                        }),
                            e.on("focus", R),
                            e.on("blur", D);
                        break;
                    }
                    case "cardCvc": {
                        let e = A.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && O) ? I(d.intl.string(d.t.ro4isZ)) : I(null), P(e);
                        }),
                            e.on("focus", R),
                            e.on("blur", D);
                    }
                }
        }, [D, P, R, g, A, O, n]);
    i.useEffect(
        () => (
            w(),
            () => {
                N();
            }
        ),
        [w, N],
    );
    let x = (0, c.dQu)(l.Z.colors.TEXT_SUBTLE).hex(),
        L = (0, c.dQu)(l.Z.colors.TEXT_STRONG).hex();
    function j() {
        return s()(f.cardInput, {
            [f.cardInputError]: null !== S,
            [f.cardInputFocused]: b,
            [f.cardNumberInput]: "cardNumber" === n,
        });
    }
    function M() {
        switch (n) {
            case "cardNumber":
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.ZP, {
                            className: f.cardIcon,
                            type: g,
                            flipped: o,
                        }),
                        (0, r.jsx)(a.CardNumberElement, {
                            options: {
                                style: T,
                                placeholder: d.intl.string(d.t.gPRHfw),
                                disableLink: !1,
                            },
                            className: j(),
                        }),
                    ],
                });
            case "cardExpiry":
                return (0, r.jsx)(a.CardExpiryElement, {
                    options: {
                        style: T,
                        placeholder: d.intl.string(d.t.xeEWQ6),
                    },
                    className: j(),
                });
            case "cardCvc":
                return (0, r.jsx)(a.CardCvcElement, {
                    options: {
                        style: T,
                        placeholder: d.intl.string(d.t.wZz04F),
                    },
                    className: j(),
                });
        }
    }
    return (
        i.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                r = n.getPropertyValue("font-family");
            C({
                base: {
                    fontFamily: r,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: L,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: x },
                },
            });
        }, [t, x, L]),
        (0, r.jsxs)("div", {
            className: f.cardNumberWrapper,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", {
                    ref: t,
                    className: s()(f.hiddenDiv, p.input),
                }),
                M(),
                (0, r.jsx)(c.pdY, { error: S }),
            ],
        })
    );
};
