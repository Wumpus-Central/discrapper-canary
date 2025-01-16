n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    a = n.n(l),
    r = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(592125),
    m = n(888592),
    x = n(981631),
    h = n(388032),
    g = n(569055);
let v = (0, d.hQ)();
t.Z = (e) => {
    let { setStep: t, setGuildsInfo: n, email: l, setEmail: d, setGuildId: N, invite: j, onClose: f, isNUXFlow: C } = e,
        [I, p] = s.useState(null),
        [S, T] = s.useState(!1),
        b = async (e) => {
            e.preventDefault(), p(null), T(!0);
            try {
                var i, s, a, r, d;
                let e = null !== (d = null !== (r = null == j ? void 0 : null === (i = j.guild) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : null === (s = u.Z.getChannel(null == j ? void 0 : null === (a = j.channel) || void 0 === a ? void 0 : a.id)) || void 0 === s ? void 0 : s.getGuildId()) && void 0 !== d ? d : void 0;
                e === m.fQ && (e = void 0);
                let c = await o.Z.sendVerificationEmail(l, !0, e),
                    x = c.guilds_info;
                c.has_matching_guild ? (N(e), t(m.tF.VERIFY_PIN)) : 0 === x.length ? t(m.tF.SUBMIT_SCHOOL) : 1 === x.length ? (N(x[0].id), await o.Z.sendVerificationEmail(l, !0, x[0].id), t(m.tF.VERIFY_PIN)) : (n(x), t(m.tF.SELECT_SCHOOL));
            } catch (e) {
                p(new c.Hx(e));
            } finally {
                T(!1);
            }
        },
        _ = h.intl.string(h.t.H1jCHB),
        E = h.intl.string(h.t.YfeHRE);
    if (C) (_ = h.intl.string(h.t.LVyxND)), (E = h.intl.string(h.t.ECd7Rk));
    else if ((null == j ? void 0 : j.guild) != null && j.guild.id !== m.fQ && (null == j ? void 0 : j.approximate_member_count) != null) {
        let { name: e } = j.guild;
        _ = h.intl.formatToPlainString(h.t['4T4+p6'], {
            guildName: e,
            count: j.approximate_member_count
        });
    }
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsx)('div', { className: g.topImage }),
            (0, i.jsx)(r.Heading, {
                className: a()(g.centerText, g.header),
                variant: 'heading-xl/semibold',
                children: _
            }),
            (0, i.jsx)('div', {
                className: g.descriptionWidth,
                children: (0, i.jsx)(r.Text, {
                    className: g.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: E
                })
            }),
            (0, i.jsxs)('form', {
                className: g.formContent,
                onSubmit: b,
                children: [
                    (0, i.jsxs)(r.FormItem, {
                        children: [
                            (0, i.jsx)(r.FormTitle, {
                                id: v,
                                children: h.intl.string(h.t.kmCxkZ)
                            }),
                            (0, i.jsx)(r.TextInput, {
                                placeholder: h.intl.string(h.t.ImAOh4),
                                onChange: (e) => {
                                    d(e);
                                },
                                error: null == I ? void 0 : I.getAnyErrorMessage(),
                                'aria-labelledby': v
                            })
                        ]
                    }),
                    (0, i.jsx)(r.Text, {
                        color: 'header-secondary',
                        className: g.formDescription,
                        variant: 'text-sm/normal',
                        children: h.intl.string(h.t.Cv7mmJ)
                    }),
                    (0, i.jsx)(r.Button, {
                        type: 'submit',
                        size: r.Button.Sizes.LARGE,
                        color: r.Button.Colors.BRAND,
                        className: g.submitButton,
                        submitting: S,
                        children: h.intl.string(h.t['8vmKOz'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: g.termsPhrase,
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        children: h.intl.format(h.t.RPT0vr, {
                            termsURL: x.EYA.TERMS,
                            privacyURL: x.EYA.PRIVACY
                        })
                    }),
                    C &&
                        (0, i.jsx)(r.Button, {
                            look: r.Button.Looks.LINK,
                            onClick: f,
                            className: g.cancelButton,
                            children: h.intl.string(h.t.hO6qJy)
                        })
                ]
            })
        ]
    });
};
