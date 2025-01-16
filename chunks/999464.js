n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(888592),
    m = n(981631),
    x = n(388032),
    h = n(621475);
let g = (0, d.hQ)();
t.Z = (e) => {
    let { email: t, setStep: n, onBack: l, school: d, setSchool: v } = e,
        [N, j] = s.useState(null),
        [f, C] = s.useState(!1),
        I = async () => {
            j(null), C(!0);
            try {
                await o.Z.signup(t, d), n(u.tF.EMAIL_WAITLIST);
            } catch (e) {
                j(new c.Hx(e));
            } finally {
                C(!1);
            }
        },
        p = async (e) => {
            null != d && '' !== d && e.charCode === m.yXg.ENTER && (await I());
        };
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)('div', { className: h.__invalid_topImage }),
            (0, i.jsx)(r.Heading, {
                className: a()(h.centerText, h.header),
                variant: 'heading-xl/semibold',
                children: x.intl.string(x.t['2FNWBA'])
            }),
            (0, i.jsx)('div', {
                className: h.descriptionWidth,
                children: (0, i.jsx)(r.Text, {
                    className: h.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: x.intl.string(x.t['/4y6o6'])
                })
            }),
            (0, i.jsxs)(r.FormItem, {
                className: h.formItem,
                children: [
                    (0, i.jsx)(r.FormTitle, {
                        id: g,
                        children: x.intl.string(x.t['L+AfJi'])
                    }),
                    (0, i.jsx)(r.TextInput, {
                        onKeyPress: p,
                        placeholder: x.intl.string(x.t.Y1btJS),
                        onChange: (e) => {
                            v(e);
                        },
                        error: null == N ? void 0 : N.getAnyErrorMessage(),
                        'aria-labelledby': g
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.footer,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: h.backButton,
                        onClick: l,
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.NONE,
                        color: r.Button.Colors.PRIMARY,
                        children: x.intl.string(x.t['13/7kZ'])
                    }),
                    (0, i.jsx)(r.Button, {
                        onClick: I,
                        size: r.Button.Sizes.MEDIUM,
                        color: r.Button.Colors.BRAND,
                        className: h.__invalid_submitButton,
                        submitting: f,
                        children: x.intl.string(x.t.PDsYAg)
                    })
                ]
            })
        ]
    });
};
