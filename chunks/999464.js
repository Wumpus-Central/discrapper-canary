n.d(t, { Z: () => x }), n(388685);
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
    f = n(388032),
    g = n(946189);
let p = (0, u.hQ)(),
    x = (e) => {
        let { email: t, setStep: n, onBack: i, school: u, setSchool: x } = e,
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
            className: g.container,
            children: [
                (0, r.jsx)("div", { className: g.__invalid_topImage }),
                (0, r.jsx)(o.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: "heading-xl/semibold",
                    children: f.intl.string(f.t["2FNWBA"]),
                }),
                (0, r.jsx)("div", {
                    className: g.descriptionWidth,
                    children: (0, r.jsx)(o.Text, {
                        className: g.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: f.intl.string(f.t["/4y6o6"]),
                    }),
                }),
                (0, r.jsxs)(o.xJW, {
                    className: g.formItem,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            id: p,
                            children: f.intl.string(f.t["L+AfJi"]),
                        }),
                        (0, r.jsx)(o.oil, {
                            onKeyPress: y,
                            placeholder: f.intl.string(f.t.Y1btJS),
                            onChange: (e) => {
                                x(e);
                            },
                            error: null == _ ? void 0 : _.getAnyErrorMessage(),
                            "aria-labelledby": p,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: g.footer,
                    children: [
                        (0, r.jsx)(s.zx, {
                            className: g.backButton,
                            onClick: i,
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.NONE,
                            color: s.zx.Colors.PRIMARY,
                            children: f.intl.string(f.t["13/7kZ"]),
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: g.__invalid_submitButton,
                            children: (0, r.jsx)(o.zxk, {
                                variant: "primary",
                                text: f.intl.string(f.t.PDsYAg),
                                onClick: S,
                                loading: N,
                            }),
                        }),
                    ],
                }),
            ],
        });
    };
