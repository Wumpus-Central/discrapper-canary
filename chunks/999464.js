(n.d(t, { Z: () => f }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    s = n(755721),
    o = n(481060),
    c = n(231239),
    d = n(881052),
    u = n(313201),
    m = n(888592),
    h = n(981631),
    x = n(388032),
    _ = n(257356);
let g = (0, u.hQ)(),
    f = (e) => {
        let { email: t, setStep: n, onBack: r, school: u, setSchool: f } = e,
            [p, v] = i.useState(null),
            [N, E] = i.useState(!1),
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
            I = async (e) => {
                null != u && '' !== u && e.charCode === h.yXg.ENTER && (await S());
            };
        return (0, l.jsxs)('div', {
            className: _.container,
            children: [
                (0, l.jsx)('div', { className: _.__invalid_topImage }),
                (0, l.jsx)(o.X6q, {
                    className: a()(_.centerText, _.header),
                    variant: 'heading-xl/semibold',
                    children: x.intl.string(x.t['2FNWBA'])
                }),
                (0, l.jsx)('div', {
                    className: _.descriptionWidth,
                    children: (0, l.jsx)(o.Text, {
                        className: _.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: x.intl.string(x.t['/4y6o6'])
                    })
                }),
                (0, l.jsxs)(o.xJW, {
                    className: _.formItem,
                    children: [
                        (0, l.jsx)(o.vwX, {
                            id: g,
                            children: x.intl.string(x.t['L+AfJi'])
                        }),
                        (0, l.jsx)(o.oil, {
                            onKeyPress: I,
                            placeholder: x.intl.string(x.t.Y1btJS),
                            onChange: (e) => {
                                f(e);
                            },
                            error: null == p ? void 0 : p.getAnyErrorMessage(),
                            'aria-labelledby': g
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: _.footer,
                    children: [
                        (0, l.jsx)(s.zx, {
                            className: _.backButton,
                            onClick: r,
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.NONE,
                            color: s.zx.Colors.PRIMARY,
                            children: x.intl.string(x.t['13/7kZ'])
                        }),
                        (0, l.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: _.__invalid_submitButton,
                            children: (0, l.jsx)(o.zxk, {
                                variant: 'primary',
                                text: x.intl.string(x.t.PDsYAg),
                                onClick: S,
                                loading: N
                            })
                        })
                    ]
                })
            ]
        });
    };
