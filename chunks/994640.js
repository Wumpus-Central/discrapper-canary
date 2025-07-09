(n.d(t, { Z: () => p }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    s = n(755721),
    o = n(481060),
    c = n(231239),
    d = n(881052),
    u = n(313201),
    m = n(592125),
    h = n(888592),
    x = n(981631),
    _ = n(388032),
    g = n(167150);
let f = (0, u.hQ)(),
    p = (e) => {
        let { setStep: t, setGuildsInfo: n, email: r, setEmail: u, setGuildId: p, invite: v, onClose: N, isNUXFlow: E } = e,
            [S, I] = i.useState(null),
            [j, y] = i.useState(!1),
            C = async (e) => {
                (e.preventDefault(), I(null), y(!0));
                try {
                    var l, i, a, s, o;
                    let e = null != (o = null != (s = null == v || null == (l = v.guild) ? void 0 : l.id) ? s : null == (i = m.Z.getChannel(null == v || null == (a = v.channel) ? void 0 : a.id)) ? void 0 : i.getGuildId()) ? o : void 0;
                    e === h.fQ && (e = void 0);
                    let d = await c.Z.sendVerificationEmail(r, !0, e),
                        u = d.guilds_info;
                    d.has_matching_guild ? (p(e), t(h.tF.VERIFY_PIN)) : 0 === u.length ? t(h.tF.SUBMIT_SCHOOL) : 1 === u.length ? (p(u[0].id), await c.Z.sendVerificationEmail(r, !0, u[0].id), t(h.tF.VERIFY_PIN)) : (n(u), t(h.tF.SELECT_SCHOOL));
                } catch (e) {
                    I(new d.Hx(e));
                } finally {
                    y(!1);
                }
            },
            T = _.intl.string(_.t.H1jCHB),
            b = _.intl.string(_.t.YfeHRE);
        if (E) ((T = _.intl.string(_.t.LVyxND)), (b = _.intl.string(_.t.ECd7Rk)));
        else if ((null == v ? void 0 : v.guild) != null && v.guild.id !== h.fQ && (null == v ? void 0 : v.approximate_member_count) != null) {
            let { name: e } = v.guild;
            T = _.intl.formatToPlainString(_.t['4T4+p6'], {
                guildName: e,
                count: v.approximate_member_count
            });
        }
        return (0, l.jsxs)('div', {
            className: g.container,
            children: [
                (0, l.jsx)('div', { className: g.topImage }),
                (0, l.jsx)(o.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: 'heading-xl/semibold',
                    children: T
                }),
                (0, l.jsx)('div', {
                    className: g.descriptionWidth,
                    children: (0, l.jsx)(o.Text, {
                        className: g.centerText,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: b
                    })
                }),
                (0, l.jsxs)('form', {
                    className: g.formContent,
                    onSubmit: C,
                    children: [
                        (0, l.jsxs)(o.xJW, {
                            children: [
                                (0, l.jsx)(o.vwX, {
                                    id: f,
                                    children: _.intl.string(_.t.kmCxkZ)
                                }),
                                (0, l.jsx)(o.oil, {
                                    placeholder: _.intl.string(_.t.ImAOh4),
                                    onChange: (e) => {
                                        u(e);
                                    },
                                    error: null == S ? void 0 : S.getAnyErrorMessage(),
                                    'aria-labelledby': f
                                })
                            ]
                        }),
                        (0, l.jsx)(o.Text, {
                            color: 'header-secondary',
                            className: g.formDescription,
                            variant: 'text-sm/normal',
                            children: _.intl.string(_.t.Cv7mmJ)
                        }),
                        (0, l.jsx)(s.zx, {
                            type: 'submit',
                            size: s.zx.Sizes.LARGE,
                            color: s.zx.Colors.BRAND,
                            className: g.submitButton,
                            submitting: j,
                            children: _.intl.string(_.t['8vmKOz'])
                        }),
                        (0, l.jsx)(o.Text, {
                            className: g.termsPhrase,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: _.intl.format(_.t.RPT0vr, {
                                termsURL: x.EYA.TERMS,
                                privacyURL: x.EYA.PRIVACY
                            })
                        }),
                        E &&
                            (0, l.jsx)(s.zx, {
                                look: s.zx.Looks.LINK,
                                onClick: N,
                                className: g.cancelButton,
                                children: _.intl.string(_.t.hO6qJy)
                            })
                    ]
                })
            ]
        });
    };
