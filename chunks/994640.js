n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(755721),
    o = n(481060),
    c = n(231239),
    d = n(881052),
    u = n(313201),
    m = n(592125),
    h = n(888592),
    x = n(981631),
    p = n(388032),
    f = n(330966);
let g = (0, u.hQ)(),
    _ = (e) => {
        let {
                setStep: t,
                setGuildsInfo: n,
                email: i,
                setEmail: u,
                setGuildId: _,
                invite: v,
                onClose: N,
                isNUXFlow: E,
            } = e,
            [S, y] = l.useState(null),
            [j, I] = l.useState(!1),
            b = async (e) => {
                e.preventDefault(), y(null), I(!0);
                try {
                    var r, l, a, s, o;
                    let e =
                        null !=
                        (o =
                            null != (s = null == v || null == (r = v.guild) ? void 0 : r.id)
                                ? s
                                : null == (l = m.Z.getChannel(null == v || null == (a = v.channel) ? void 0 : a.id))
                                  ? void 0
                                  : l.getGuildId())
                            ? o
                            : void 0;
                    e === h.fQ && (e = void 0);
                    let d = await c.Z.sendVerificationEmail(i, !0, e),
                        u = d.guilds_info;
                    d.has_matching_guild
                        ? (_(e), t(h.tF.VERIFY_PIN))
                        : 0 === u.length
                          ? t(h.tF.SUBMIT_SCHOOL)
                          : 1 === u.length
                            ? (_(u[0].id), await c.Z.sendVerificationEmail(i, !0, u[0].id), t(h.tF.VERIFY_PIN))
                            : (n(u), t(h.tF.SELECT_SCHOOL));
                } catch (e) {
                    y(new d.Hx(e));
                } finally {
                    I(!1);
                }
            },
            O = p.intl.string(p.t.H1jCHB),
            C = p.intl.string(p.t.YfeHRE);
        if (E) (O = p.intl.string(p.t.LVyxND)), (C = p.intl.string(p.t.ECd7Rk));
        else if (
            (null == v ? void 0 : v.guild) != null &&
            v.guild.id !== h.fQ &&
            (null == v ? void 0 : v.approximate_member_count) != null
        ) {
            let { name: e } = v.guild;
            O = p.intl.formatToPlainString(p.t["4T4+p6"], {
                guildName: e,
                count: v.approximate_member_count,
            });
        }
        return (0, r.jsxs)("div", {
            className: f.container,
            children: [
                (0, r.jsx)("div", { className: f.topImage }),
                (0, r.jsx)(o.X6q, {
                    className: a()(f.centerText, f.header),
                    variant: "heading-xl/semibold",
                    children: O,
                }),
                (0, r.jsx)("div", {
                    className: f.descriptionWidth,
                    children: (0, r.jsx)(o.Text, {
                        className: f.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: C,
                    }),
                }),
                (0, r.jsxs)("form", {
                    className: f.formContent,
                    onSubmit: b,
                    children: [
                        (0, r.jsxs)(o.xJW, {
                            children: [
                                (0, r.jsx)(o.vwX, {
                                    id: g,
                                    children: p.intl.string(p.t.kmCxkZ),
                                }),
                                (0, r.jsx)(o.oil, {
                                    placeholder: p.intl.string(p.t.ImAOh4),
                                    onChange: (e) => {
                                        u(e);
                                    },
                                    error: null == S ? void 0 : S.getAnyErrorMessage(),
                                    "aria-labelledby": g,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            className: f.formDescription,
                            variant: "text-sm/normal",
                            children: p.intl.string(p.t.Cv7mmJ),
                        }),
                        (0, r.jsx)(s.zx, {
                            type: "submit",
                            size: s.zx.Sizes.LARGE,
                            color: s.zx.Colors.BRAND,
                            className: f.submitButton,
                            submitting: j,
                            children: p.intl.string(p.t["8vmKOz"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: f.termsPhrase,
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: p.intl.format(p.t.RPT0vr, {
                                termsURL: x.EYA.TERMS,
                                privacyURL: x.EYA.PRIVACY,
                            }),
                        }),
                        E &&
                            (0, r.jsx)(s.zx, {
                                look: s.zx.Looks.LINK,
                                onClick: N,
                                className: f.cancelButton,
                                children: p.intl.string(p.t.hO6qJy),
                            }),
                    ],
                }),
            ],
        });
    };
