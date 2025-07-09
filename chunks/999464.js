(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    l = n(73800),
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
    x = n(257356);
let p = (0, u.hQ)(),
    g = (e) => {
        let { email: t, setStep: n, onBack: i, school: u, setSchool: g } = e,
            [_, v] = l.useState(null),
            [N, E] = l.useState(!1),
            S = async () => {
                (v(null), E(!0));
                try {
                    (await c.Z.signup(t, u), n(m.tF.EMAIL_WAITLIST));
                } catch (e) {
                    v(new d.Hx(e));
                } finally {
                    E(!1);
                }
            },
            y = async (e) => {
                null != u && '' !== u && e.charCode === h.yXg.ENTER && (await S());
            };
        return (0, r.jsxs)('div', {
            className: x.container,
            children: [
                (0, r.jsx)('div', { className: x.__invalid_topImage }),
                (0, r.jsx)(o.X6q, {
                    className: a()(x.centerText, x.header),
                    variant: 'heading-xl/semibold',
                    children: f.intl.string(f.t['2FNWBA'])
                }),
                (0, r.jsx)('div', {
                    className: x.descriptionWidth,
                    children: (0, r.jsx)(o.Text, {
                        className: x.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: f.intl.string(f.t['/4y6o6'])
                    })
                }),
                (0, r.jsxs)(o.xJW, {
                    className: x.formItem,
                    children: [
                        (0, r.jsx)(o.vwX, {
                            id: p,
                            children: f.intl.string(f.t['L+AfJi'])
                        }),
                        (0, r.jsx)(o.oil, {
                            onKeyPress: y,
                            placeholder: f.intl.string(f.t.Y1btJS),
                            onChange: (e) => {
                                g(e);
                            },
                            error: null == _ ? void 0 : _.getAnyErrorMessage(),
                            'aria-labelledby': p
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: x.footer,
                    children: [
                        (0, r.jsx)(s.zx, {
                            className: x.backButton,
                            onClick: i,
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.NONE,
                            color: s.zx.Colors.PRIMARY,
                            children: f.intl.string(f.t['13/7kZ'])
                        }),
                        (0, r.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: x.__invalid_submitButton,
                            children: (0, r.jsx)(o.zxk, {
                                variant: 'primary',
                                text: f.intl.string(f.t.PDsYAg),
                                onClick: S,
                                loading: N
                            })
                        })
                    ]
                })
            ]
        });
    };
