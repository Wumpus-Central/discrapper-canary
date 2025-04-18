n.d(t, { Z: () => _ }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(888592),
    m = n(981631),
    N = n(388032),
    x = n(189390);
let h = (0, d.hQ)(),
    _ = (e) => {
        let { email: t, setStep: n, onBack: i, school: d, setSchool: _ } = e,
            [g, f] = r.useState(null),
            [v, p] = r.useState(!1),
            E = async () => {
                f(null), p(!0);
                try {
                    await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
                } catch (e) {
                    f(new c.Hx(e));
                } finally {
                    p(!1);
                }
            },
            S = async (e) => {
                null != d && '' !== d && e.charCode === m.yXg.ENTER && (await E());
            };
        return (0, l.jsxs)('div', {
            className: x.container,
            children: [
                (0, l.jsx)('div', { className: x.__invalid_topImage }),
                (0, l.jsx)(a.X6q, {
                    className: s()(x.centerText, x.header),
                    variant: 'heading-xl/semibold',
                    children: N.NW.string(N.t['2FNWBA'])
                }),
                (0, l.jsx)('div', {
                    className: x.descriptionWidth,
                    children: (0, l.jsx)(a.Text, {
                        className: x.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: N.NW.string(N.t['/4y6o6'])
                    })
                }),
                (0, l.jsxs)(a.xJW, {
                    className: x.formItem,
                    children: [
                        (0, l.jsx)(a.vwX, {
                            id: h,
                            children: N.NW.string(N.t['L+AfJi'])
                        }),
                        (0, l.jsx)(a.oil, {
                            onKeyPress: S,
                            placeholder: N.NW.string(N.t.Y1btJS),
                            onChange: (e) => {
                                _(e);
                            },
                            error: null == g ? void 0 : g.getAnyErrorMessage(),
                            'aria-labelledby': h
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: x.footer,
                    children: [
                        (0, l.jsx)(a.zxk, {
                            className: x.backButton,
                            onClick: i,
                            look: a.zxk.Looks.LINK,
                            size: a.zxk.Sizes.NONE,
                            color: a.zxk.Colors.PRIMARY,
                            children: N.NW.string(N.t['13/7kZ'])
                        }),
                        (0, l.jsx)(a.zxk, {
                            onClick: E,
                            size: a.zxk.Sizes.MEDIUM,
                            color: a.zxk.Colors.BRAND,
                            className: x.__invalid_submitButton,
                            submitting: v,
                            children: N.NW.string(N.t.PDsYAg)
                        })
                    ]
                })
            ]
        });
    };
