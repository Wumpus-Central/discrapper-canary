n.d(t, { Z: () => N }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(888592),
    m = n(981631),
    x = n(388032),
    h = n(621475);
let v = (0, d.hQ)(),
    N = (e) => {
        let { email: t, setStep: n, onBack: s, school: d, setSchool: N } = e,
            [_, g] = i.useState(null),
            [f, p] = i.useState(!1),
            E = async () => {
                g(null), p(!0);
                try {
                    await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
                } catch (e) {
                    g(new c.Hx(e));
                } finally {
                    p(!1);
                }
            },
            I = async (e) => {
                null != d && '' !== d && e.charCode === m.yXg.ENTER && (await E());
            };
        return (0, l.jsxs)('div', {
            className: h.container,
            children: [
                (0, l.jsx)('div', { className: h.__invalid_topImage }),
                (0, l.jsx)(r.X6q, {
                    className: a()(h.centerText, h.header),
                    variant: 'heading-xl/semibold',
                    children: x.intl.string(x.t['2FNWBA'])
                }),
                (0, l.jsx)('div', {
                    className: h.descriptionWidth,
                    children: (0, l.jsx)(r.Text, {
                        className: h.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: x.intl.string(x.t['/4y6o6'])
                    })
                }),
                (0, l.jsxs)(r.xJW, {
                    className: h.formItem,
                    children: [
                        (0, l.jsx)(r.vwX, {
                            id: v,
                            children: x.intl.string(x.t['L+AfJi'])
                        }),
                        (0, l.jsx)(r.oil, {
                            onKeyPress: I,
                            placeholder: x.intl.string(x.t.Y1btJS),
                            onChange: (e) => {
                                N(e);
                            },
                            error: null == _ ? void 0 : _.getAnyErrorMessage(),
                            'aria-labelledby': v
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: h.footer,
                    children: [
                        (0, l.jsx)(r.zxk, {
                            className: h.backButton,
                            onClick: s,
                            look: r.zxk.Looks.LINK,
                            size: r.zxk.Sizes.NONE,
                            color: r.zxk.Colors.PRIMARY,
                            children: x.intl.string(x.t['13/7kZ'])
                        }),
                        (0, l.jsx)(r.zxk, {
                            onClick: E,
                            size: r.zxk.Sizes.MEDIUM,
                            color: r.zxk.Colors.BRAND,
                            className: h.__invalid_submitButton,
                            submitting: f,
                            children: x.intl.string(x.t.PDsYAg)
                        })
                    ]
                })
            ]
        });
    };
