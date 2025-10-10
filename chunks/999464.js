n.d(t, { Z: () => g }), n(388685);
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
    p = n(946189);
let h = (0, d.hQ)(),
    g = (e) => {
        let { email: t, setStep: n, onBack: i, school: d, setSchool: g } = e,
            [v, _] = l.useState(null),
            [x, N] = l.useState(!1),
            E = async () => {
                _(null), N(!0);
                try {
                    await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
                } catch (e) {
                    _(new c.Hx(e));
                } finally {
                    N(!1);
                }
            },
            y = async (e) => {
                null != d && "" !== d && e.charCode === m.yXg.ENTER && (await E());
            };
        return (0, r.jsxs)("div", {
            className: p.container,
            children: [
                (0, r.jsx)("div", { className: p.__invalid_topImage }),
                (0, r.jsx)(s.X6q, {
                    className: a()(p.centerText, p.header),
                    variant: "heading-xl/semibold",
                    children: f.intl.string(f.t["2FNWBA"]),
                }),
                (0, r.jsx)("div", {
                    className: p.descriptionWidth,
                    children: (0, r.jsx)(s.Text, {
                        className: p.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: f.intl.string(f.t["/4y6o6"]),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.formItem,
                    children: [
                        (0, r.jsx)(s.vwX, {
                            id: h,
                            children: f.intl.string(f.t["L+AfJi"]),
                        }),
                        (0, r.jsx)(s.oil, {
                            onKeyPress: y,
                            placeholder: f.intl.string(f.t.Y1btJS),
                            onChange: (e) => {
                                g(e);
                            },
                            error: null == v ? void 0 : v.getAnyErrorMessage(),
                            "aria-labelledby": h,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: p.footer,
                    children: [
                        (0, r.jsx)(s.Avr, {
                            variant: "secondary",
                            onClick: i,
                            text: f.intl.string(f.t["13/7kZ"]),
                        }),
                        (0, r.jsx)(s.zxk, {
                            variant: "primary",
                            text: f.intl.string(f.t.PDsYAg),
                            onClick: E,
                            loading: x,
                        }),
                    ],
                }),
            ],
        });
    };
