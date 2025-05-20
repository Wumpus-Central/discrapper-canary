n.d(t, { Z: () => g }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(888592),
    m = n(981631),
    x = n(388032),
    h = n(257356);
let _ = (0, d.hQ)(),
    g = (e) => {
        let { email: t, setStep: n, onBack: r, school: d, setSchool: g } = e,
            [f, N] = i.useState(null),
            [v, p] = i.useState(!1),
            E = async () => {
                N(null), p(!0);
                try {
                    await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
                } catch (e) {
                    N(new c.Hx(e));
                } finally {
                    p(!1);
                }
            },
            S = async (e) => {
                null != d && '' !== d && e.charCode === m.yXg.ENTER && (await E());
            };
        return (0, l.jsxs)('div', {
            className: h.container,
            children: [
                (0, l.jsx)('div', { className: h.__invalid_topImage }),
                (0, l.jsx)(a.X6q, {
                    className: s()(h.centerText, h.header),
                    variant: 'heading-xl/semibold',
                    children: x.intl.string(x.t['2FNWBA'])
                }),
                (0, l.jsx)('div', {
                    className: h.descriptionWidth,
                    children: (0, l.jsx)(a.Text, {
                        className: h.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: x.intl.string(x.t['/4y6o6'])
                    })
                }),
                (0, l.jsxs)(a.xJW, {
                    className: h.formItem,
                    children: [
                        (0, l.jsx)(a.vwX, {
                            id: _,
                            children: x.intl.string(x.t['L+AfJi'])
                        }),
                        (0, l.jsx)(a.oil, {
                            onKeyPress: S,
                            placeholder: x.intl.string(x.t.Y1btJS),
                            onChange: (e) => {
                                g(e);
                            },
                            error: null == f ? void 0 : f.getAnyErrorMessage(),
                            'aria-labelledby': _
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: h.footer,
                    children: [
                        (0, l.jsx)(a.zxk, {
                            className: h.backButton,
                            onClick: r,
                            look: a.zxk.Looks.LINK,
                            size: a.zxk.Sizes.NONE,
                            color: a.zxk.Colors.PRIMARY,
                            children: x.intl.string(x.t['13/7kZ'])
                        }),
                        (0, l.jsx)(a.zxk, {
                            onClick: E,
                            size: a.zxk.Sizes.MEDIUM,
                            color: a.zxk.Colors.BRAND,
                            className: h.__invalid_submitButton,
                            submitting: v,
                            children: x.intl.string(x.t.PDsYAg)
                        })
                    ]
                })
            ]
        });
    };
