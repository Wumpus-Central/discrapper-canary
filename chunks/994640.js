n.d(t, { Z: () => f }), n(388685);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(592125),
    m = n(888592),
    x = n(981631),
    h = n(388032),
    _ = n(167150);
let g = (0, d.hQ)(),
    f = (e) => {
        let { setStep: t, setGuildsInfo: n, email: r, setEmail: d, setGuildId: f, invite: N, onClose: v, isNUXFlow: p } = e,
            [E, S] = i.useState(null),
            [I, j] = i.useState(!1),
            y = async (e) => {
                e.preventDefault(), S(null), j(!0);
                try {
                    var l, i, s, a, d;
                    let e = null != (d = null != (a = null == N || null == (l = N.guild) ? void 0 : l.id) ? a : null == (i = u.Z.getChannel(null == N || null == (s = N.channel) ? void 0 : s.id)) ? void 0 : i.getGuildId()) ? d : void 0;
                    e === m.fQ && (e = void 0);
                    let c = await o.Z.sendVerificationEmail(r, !0, e),
                        x = c.guilds_info;
                    c.has_matching_guild ? (f(e), t(m.tF.VERIFY_PIN)) : 0 === x.length ? t(m.tF.SUBMIT_SCHOOL) : 1 === x.length ? (f(x[0].id), await o.Z.sendVerificationEmail(r, !0, x[0].id), t(m.tF.VERIFY_PIN)) : (n(x), t(m.tF.SELECT_SCHOOL));
                } catch (e) {
                    S(new c.Hx(e));
                } finally {
                    j(!1);
                }
            },
            C = h.intl.string(h.t.H1jCHB),
            T = h.intl.string(h.t.YfeHRE);
        if (p) (C = h.intl.string(h.t.LVyxND)), (T = h.intl.string(h.t.ECd7Rk));
        else if ((null == N ? void 0 : N.guild) != null && N.guild.id !== m.fQ && (null == N ? void 0 : N.approximate_member_count) != null) {
            let { name: e } = N.guild;
            C = h.intl.formatToPlainString(h.t['4T4+p6'], {
                guildName: e,
                count: N.approximate_member_count
            });
        }
        return (0, l.jsxs)('div', {
            className: _.container,
            children: [
                (0, l.jsx)('div', { className: _.topImage }),
                (0, l.jsx)(a.X6q, {
                    className: s()(_.centerText, _.header),
                    variant: 'heading-xl/semibold',
                    children: C
                }),
                (0, l.jsx)('div', {
                    className: _.descriptionWidth,
                    children: (0, l.jsx)(a.Text, {
                        className: _.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: T
                    })
                }),
                (0, l.jsxs)('form', {
                    className: _.formContent,
                    onSubmit: y,
                    children: [
                        (0, l.jsxs)(a.xJW, {
                            children: [
                                (0, l.jsx)(a.vwX, {
                                    id: g,
                                    children: h.intl.string(h.t.kmCxkZ)
                                }),
                                (0, l.jsx)(a.oil, {
                                    placeholder: h.intl.string(h.t.ImAOh4),
                                    onChange: (e) => {
                                        d(e);
                                    },
                                    error: null == E ? void 0 : E.getAnyErrorMessage(),
                                    'aria-labelledby': g
                                })
                            ]
                        }),
                        (0, l.jsx)(a.Text, {
                            color: 'header-secondary',
                            className: _.formDescription,
                            variant: 'text-sm/normal',
                            children: h.intl.string(h.t.Cv7mmJ)
                        }),
                        (0, l.jsx)(a.zxk, {
                            type: 'submit',
                            size: a.zxk.Sizes.LARGE,
                            color: a.zxk.Colors.BRAND,
                            className: _.submitButton,
                            submitting: I,
                            children: h.intl.string(h.t['8vmKOz'])
                        }),
                        (0, l.jsx)(a.Text, {
                            className: _.termsPhrase,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: h.intl.format(h.t.RPT0vr, {
                                termsURL: x.EYA.TERMS,
                                privacyURL: x.EYA.PRIVACY
                            })
                        }),
                        p &&
                            (0, l.jsx)(a.zxk, {
                                look: a.zxk.Looks.LINK,
                                onClick: v,
                                className: _.cancelButton,
                                children: h.intl.string(h.t.hO6qJy)
                            })
                    ]
                })
            ]
        });
    };
