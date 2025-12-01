n.d(t, { Z: () => h }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(575053),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(231338),
    u = n(388032),
    d = n(513761),
    f = n(744481),
    p = n(724641),
    _ = n(184229),
    m = n(504309);
let h = function (e) {
    let t = (0, l.ZP)(),
        n = i.useRef(null),
        [h, g] = i.useState({}),
        E = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (i.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                r = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            g({
                base: {
                    fontFamily: i,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: E,
                    padding: "12px",
                    "::placeholder": { color: r.getPropertyValue("color") },
                    borderRadius: s.TVs.radii.xs,
                },
            });
        }, [n, E]),
        e.type)
    ) {
        case c.He.PRZELEWY24: {
            let i = (0, o.wj)(t) ? _ : m,
                { onNameChange: l, onEmailChange: c, onP24BankChange: f, p24BankValue: p, billingAddressInfo: g } = e;
            return (0, r.jsx)("div", {
                className: d.body,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: u.intl.string(u.t["w/qqKK"]),
                            inputRef: n,
                            name: u.intl.string(u.t["w/qqKK"]),
                            placeholder: u.intl.string(u.t["w/qqKK"]),
                            onChange: (e) => c(e),
                            value: g.email,
                        }),
                        (0, r.jsx)(s.oil, {
                            label: u.intl.string(u.t["yf7ms+"]),
                            name: u.intl.string(u.t["yf7ms+"]),
                            placeholder: u.intl.string(u.t["yf7ms+"]),
                            onChange: (e) => l(e),
                            value: g.name,
                        }),
                        (0, r.jsxs)(s.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    children: u.intl.string(u.t.De3b8t),
                                }),
                                (0, r.jsx)(a.P24BankElement, {
                                    options: {
                                        value: p,
                                        style: h,
                                    },
                                    onChange: (e) => f(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.bankSelectionStub,
                                    children: (0, r.jsx)("img", {
                                        src: i,
                                        alt: "Przelewy24",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case c.He.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: l, epsBankValue: c, billingAddressInfo: _ } = e,
                m = (0, o.wj)(t) ? f : p;
            return (0, r.jsx)("div", {
                className: d.body,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: u.intl.string(u.t.sN3wrd),
                            inputRef: n,
                            name: u.intl.string(u.t.sN3wrd),
                            placeholder: u.intl.string(u.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: _.name,
                        }),
                        (0, r.jsxs)(s.Kqy, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/semibold",
                                    children: u.intl.string(u.t.dFyV07),
                                }),
                                (0, r.jsx)(a.EpsBankElement, {
                                    options: {
                                        value: c,
                                        style: h,
                                    },
                                    onChange: (e) => l(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: d.bankSelectionStub,
                                    children: (0, r.jsx)("img", {
                                        src: m,
                                        alt: "EPS",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        default:
            throw Error("unknown payment source type");
    }
};
