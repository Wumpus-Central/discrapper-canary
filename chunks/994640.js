n.d(t, { Z: () => v }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    r = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(592125),
    m = n(888592),
    x = n(981631),
    h = n(388032),
    _ = n(267096);
let N = (0, d.hQ)(),
    v = (e) => {
        let { setStep: t, setGuildsInfo: n, email: s, setEmail: d, setGuildId: v, invite: g, onClose: E, isNUXFlow: I } = e,
            [f, S] = i.useState(null),
            [p, C] = i.useState(!1),
            T = async (e) => {
                e.preventDefault(), S(null), C(!0);
                try {
                    var l, i, a, r, d;
                    let e = null !== (d = null !== (r = null == g ? void 0 : null === (l = g.guild) || void 0 === l ? void 0 : l.id) && void 0 !== r ? r : null === (i = u.Z.getChannel(null == g ? void 0 : null === (a = g.channel) || void 0 === a ? void 0 : a.id)) || void 0 === i ? void 0 : i.getGuildId()) && void 0 !== d ? d : void 0;
                    e === m.fQ && (e = void 0);
                    let c = await o.Z.sendVerificationEmail(s, !0, e),
                        x = c.guilds_info;
                    c.has_matching_guild ? (v(e), t(m.tF.VERIFY_PIN)) : 0 === x.length ? t(m.tF.SUBMIT_SCHOOL) : 1 === x.length ? (v(x[0].id), await o.Z.sendVerificationEmail(s, !0, x[0].id), t(m.tF.VERIFY_PIN)) : (n(x), t(m.tF.SELECT_SCHOOL));
                } catch (e) {
                    S(new c.Hx(e));
                } finally {
                    C(!1);
                }
            },
            A = h.intl.string(h.t.H1jCHB),
            j = h.intl.string(h.t.YfeHRE);
        if (I) (A = h.intl.string(h.t.LVyxND)), (j = h.intl.string(h.t.ECd7Rk));
        else if ((null == g ? void 0 : g.guild) != null && g.guild.id !== m.fQ && (null == g ? void 0 : g.approximate_member_count) != null) {
            let { name: e } = g.guild;
            A = h.intl.formatToPlainString(h.t['4T4+p6'], {
                guildName: e,
                count: g.approximate_member_count
            });
        }
        return (0, l.jsxs)('div', {
            className: _.container,
            children: [
                (0, l.jsx)('div', { className: _.topImage }),
                (0, l.jsx)(r.X6q, {
                    className: a()(_.centerText, _.header),
                    variant: 'heading-xl/semibold',
                    children: A
                }),
                (0, l.jsx)('div', {
                    className: _.descriptionWidth,
                    children: (0, l.jsx)(r.Text, {
                        className: _.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: j
                    })
                }),
                (0, l.jsxs)('form', {
                    className: _.formContent,
                    onSubmit: T,
                    children: [
                        (0, l.jsxs)(r.xJW, {
                            children: [
                                (0, l.jsx)(r.vwX, {
                                    id: N,
                                    children: h.intl.string(h.t.kmCxkZ)
                                }),
                                (0, l.jsx)(r.oil, {
                                    placeholder: h.intl.string(h.t.ImAOh4),
                                    onChange: (e) => {
                                        d(e);
                                    },
                                    error: null == f ? void 0 : f.getAnyErrorMessage(),
                                    'aria-labelledby': N
                                })
                            ]
                        }),
                        (0, l.jsx)(r.Text, {
                            color: 'header-secondary',
                            className: _.formDescription,
                            variant: 'text-sm/normal',
                            children: h.intl.string(h.t.Cv7mmJ)
                        }),
                        (0, l.jsx)(r.zxk, {
                            type: 'submit',
                            size: r.zxk.Sizes.LARGE,
                            color: r.zxk.Colors.BRAND,
                            className: _.submitButton,
                            submitting: p,
                            children: h.intl.string(h.t['8vmKOz'])
                        }),
                        (0, l.jsx)(r.Text, {
                            className: _.termsPhrase,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: h.intl.format(h.t.RPT0vr, {
                                termsURL: x.EYA.TERMS,
                                privacyURL: x.EYA.PRIVACY
                            })
                        }),
                        I &&
                            (0, l.jsx)(r.zxk, {
                                look: r.zxk.Looks.LINK,
                                onClick: E,
                                className: _.cancelButton,
                                children: h.intl.string(h.t.hO6qJy)
                            })
                    ]
                })
            ]
        });
    };
