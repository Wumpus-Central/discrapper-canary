n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(888592),
    u = n(981631),
    m = n(388032),
    g = n(946189);
let f = (e) => {
    let { email: t, setStep: n, onBack: i, school: f, setSchool: p } = e,
        [h, _] = l.useState(null),
        [v, x] = l.useState(!1),
        N = async () => {
            _(null), x(!0);
            try {
                await o.Z.signup(t, f), n(d.tF.EMAIL_WAITLIST);
            } catch (e) {
                _(new c.Hx(e));
            } finally {
                x(!1);
            }
        },
        E = async (e) => {
            null != f && "" !== f && e.charCode === u.yXg.ENTER && (await N());
        };
    return (0, r.jsxs)("div", {
        className: g.container,
        children: [
            (0, r.jsx)("div", { className: g.__invalid_topImage }),
            (0, r.jsx)(s.Heading, {
                className: a()(g.centerText, g.header),
                variant: "heading-xl/semibold",
                children: m.intl.string(m.t["2FNWBA"]),
            }),
            (0, r.jsx)("div", {
                className: g.descriptionWidth,
                children: (0, r.jsx)(s.Text, {
                    className: g.centerText,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: m.intl.string(m.t["/4y6o6"]),
                }),
            }),
            (0, r.jsx)("div", {
                className: g.formItem,
                children: (0, r.jsx)(s.oil, {
                    label: m.intl.string(m.t["L+AfJi"]),
                    onKeyPress: E,
                    placeholder: m.intl.string(m.t.Y1btJS),
                    onChange: (e) => {
                        p(e);
                    },
                    error: null == h ? void 0 : h.getAnyErrorMessage(),
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.footer,
                children: [
                    (0, r.jsx)(s.Avr, {
                        variant: "secondary",
                        onClick: i,
                        text: m.intl.string(m.t["13/7kZ"]),
                    }),
                    (0, r.jsx)(s.Button, {
                        variant: "primary",
                        text: m.intl.string(m.t.PDsYAg),
                        onClick: N,
                        loading: v,
                    }),
                ],
            }),
        ],
    });
};
