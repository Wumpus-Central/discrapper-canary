n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(755721),
    o = n(481060),
    c = n(231239),
    d = n(881052),
    u = n(313201),
    m = n(888592),
    h = n(981631),
    x = n(388032),
    p = n(946189);
let f = (0, u.hQ)(),
    g = (e) => {
        let { email: t, setStep: n, onBack: i, school: u, setSchool: g } = e,
            [_, v] = l.useState(null),
            [N, E] = l.useState(!1),
            S = async () => {
                v(null), E(!0);
                try {
                    await c.Z.signup(t, u), n(m.tF.EMAIL_WAITLIST);
                } catch (e) {
                    v(new d.Hx(e));
                } finally {
                    E(!1);
                }
            },
            y = async (e) => {
                null != u && "" !== u && e.charCode === h.yXg.ENTER && (await S());
            };
        return (0, r.jsxs)("div", {
            className: p.container,
            children: [
                (0, r.jsx)("div", { className: p.__invalid_topImage }),
                (0, r.jsx)(o.X6q, {
                    className: a()(p.centerText, p.header),
                    variant: "heading-xl/semibold",
                    children: x.intl.string(x.t["2FNWBA"]),
                }),
                (0, r.jsx)("div", {
                    className: p.descriptionWidth,
                    children: (0, r.jsx)(o.Text, {
                        className: p.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: x.intl.string(x.t["/4y6o6"]),
                    }),
                }),
                (0, r.jsxs)(o.xJW, {
                    className: p.formItem,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            id: f,
                            children: x.intl.string(x.t["L+AfJi"]),
                        }),
                        (0, r.jsx)(o.oil, {
                            onKeyPress: y,
                            placeholder: x.intl.string(x.t.Y1btJS),
                            onChange: (e) => {
                                g(e);
                            },
                            error: null == _ ? void 0 : _.getAnyErrorMessage(),
                            "aria-labelledby": f,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: p.footer,
                    children: [
                        (0, r.jsx)(s.zx, {
                            className: p.backButton,
                            onClick: i,
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.NONE,
                            color: s.zx.Colors.PRIMARY,
                            children: x.intl.string(x.t["13/7kZ"]),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: p.__invalid_submitButton,
                            children: (0, r.jsx)(o.zxk, {
                                variant: "primary",
                                text: x.intl.string(x.t.PDsYAg),
                                onClick: S,
                                loading: N,
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
