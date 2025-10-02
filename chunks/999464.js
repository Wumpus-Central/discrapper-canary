n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(888592),
    m = n(981631),
    f = n(388032),
    h = n(192354);
let g = (0, d.hQ)(),
    p = (e) => {
        let { email: t, setStep: n, onBack: i, school: d, setSchool: p } = e,
            [v, _] = l.useState(null),
            [x, N] = l.useState(!1),
            y = async () => {
                _(null), N(!0);
                try {
                    await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
                } catch (e) {
                    _(new c.Hx(e));
                } finally {
                    N(!1);
                }
            },
            E = async (e) => {
                null != d && "" !== d && e.charCode === m.yXg.ENTER && (await y());
            };
        return (0, r.jsxs)("div", {
            className: h.container,
            children: [
                (0, r.jsx)("div", { className: h.__invalid_topImage }),
                (0, r.jsx)(s.X6q, {
                    className: a()(h.centerText, h.header),
                    variant: "heading-xl/semibold",
                    children: f.intl.string(f.t["2FNWBA"]),
                }),
                (0, r.jsx)("div", {
                    className: h.descriptionWidth,
                    children: (0, r.jsx)(s.Text, {
                        className: h.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: f.intl.string(f.t["/4y6o6"]),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: h.formItem,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            id: g,
                            children: f.intl.string(f.t["L+AfJi"]),
                        }),
                        (0, r.jsx)(s.oil, {
                            onKeyPress: E,
                            placeholder: f.intl.string(f.t.Y1btJS),
                            onChange: (e) => {
                                p(e);
                            },
                            error: null == v ? void 0 : v.getAnyErrorMessage(),
                            "aria-labelledby": g,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.footer,
                    children: [
                        (0, r.jsx)(s.Avr, {
                            variant: "secondary",
                            onClick: i,
                            text: f.intl.string(f.t["13/7kZ"]),
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            text: f.intl.string(f.t.PDsYAg),
                            onClick: y,
                            loading: x,
                        }),
                    ],
                }),
            ],
        });
    };
