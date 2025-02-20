n.d(t, { Z: () => _ }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(592125),
    m = n(888592),
    N = n(981631),
    x = n(388032),
    h = n(689602);
let v = (0, d.hQ)(),
    _ = (e) => {
        let { setStep: t, setGuildsInfo: n, email: i, setEmail: d, setGuildId: _, invite: g, onClose: f, isNUXFlow: p } = e,
            [E, S] = r.useState(null),
            [I, j] = r.useState(!1),
            y = async (e) => {
                e.preventDefault(), S(null), j(!0);
                try {
                    var l, r, s, a, d;
                    let e = null !== (d = null !== (a = null == g ? void 0 : null === (l = g.guild) || void 0 === l ? void 0 : l.id) && void 0 !== a ? a : null === (r = u.Z.getChannel(null == g ? void 0 : null === (s = g.channel) || void 0 === s ? void 0 : s.id)) || void 0 === r ? void 0 : r.getGuildId()) && void 0 !== d ? d : void 0;
                    e === m.fQ && (e = void 0);
                    let c = await o.Z.sendVerificationEmail(i, !0, e),
                        N = c.guilds_info;
                    c.has_matching_guild ? (_(e), t(m.tF.VERIFY_PIN)) : 0 === N.length ? t(m.tF.SUBMIT_SCHOOL) : 1 === N.length ? (_(N[0].id), await o.Z.sendVerificationEmail(i, !0, N[0].id), t(m.tF.VERIFY_PIN)) : (n(N), t(m.tF.SELECT_SCHOOL));
                } catch (e) {
                    S(new c.Hx(e));
                } finally {
                    j(!1);
                }
            },
            C = x.NW.string(x.t.H1jCHB),
            T = x.NW.string(x.t.YfeHRE);
        if (p) (C = x.NW.string(x.t.LVyxND)), (T = x.NW.string(x.t.ECd7Rk));
        else if ((null == g ? void 0 : g.guild) != null && g.guild.id !== m.fQ && (null == g ? void 0 : g.approximate_member_count) != null) {
            let { name: e } = g.guild;
            C = x.NW.formatToPlainString(x.t['4T4+p6'], {
                guildName: e,
                count: g.approximate_member_count
            });
        }
        return (0, l.jsxs)('div', {
            className: h.container,
            children: [
                (0, l.jsx)('div', { className: h.topImage }),
                (0, l.jsx)(a.X6q, {
                    className: s()(h.centerText, h.header),
                    variant: 'heading-xl/semibold',
                    children: C
                }),
                (0, l.jsx)('div', {
                    className: h.descriptionWidth,
                    children: (0, l.jsx)(a.Text, {
                        className: h.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: T
                    })
                }),
                (0, l.jsxs)('form', {
                    className: h.formContent,
                    onSubmit: y,
                    children: [
                        (0, l.jsxs)(a.xJW, {
                            children: [
                                (0, l.jsx)(a.vwX, {
                                    id: v,
                                    children: x.NW.string(x.t.kmCxkZ)
                                }),
                                (0, l.jsx)(a.oil, {
                                    placeholder: x.NW.string(x.t.ImAOh4),
                                    onChange: (e) => {
                                        d(e);
                                    },
                                    error: null == E ? void 0 : E.getAnyErrorMessage(),
                                    'aria-labelledby': v
                                })
                            ]
                        }),
                        (0, l.jsx)(a.Text, {
                            color: 'header-secondary',
                            className: h.formDescription,
                            variant: 'text-sm/normal',
                            children: x.NW.string(x.t.Cv7mmJ)
                        }),
                        (0, l.jsx)(a.zxk, {
                            type: 'submit',
                            size: a.zxk.Sizes.LARGE,
                            color: a.zxk.Colors.BRAND,
                            className: h.submitButton,
                            submitting: I,
                            children: x.NW.string(x.t['8vmKOz'])
                        }),
                        (0, l.jsx)(a.Text, {
                            className: h.termsPhrase,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: x.NW.format(x.t.RPT0vr, {
                                termsURL: N.EYA.TERMS,
                                privacyURL: N.EYA.PRIVACY
                            })
                        }),
                        p &&
                            (0, l.jsx)(a.zxk, {
                                look: a.zxk.Looks.LINK,
                                onClick: f,
                                className: h.cancelButton,
                                children: x.NW.string(x.t.hO6qJy)
                            })
                    ]
                })
            ]
        });
    };
