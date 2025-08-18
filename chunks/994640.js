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
    f = n(981631),
    g = n(388032),
    p = n(330966);
let x = (0, u.hQ)(),
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
            [j, b] = l.useState(!1),
            I = async (e) => {
                e.preventDefault(), y(null), b(!0);
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
                    b(!1);
                }
            },
            O = g.intl.string(g.t.H1jCHB),
            T = g.intl.string(g.t.YfeHRE);
        if (E) (O = g.intl.string(g.t.LVyxND)), (T = g.intl.string(g.t.ECd7Rk));
        else if (
            (null == v ? void 0 : v.guild) != null &&
            v.guild.id !== h.fQ &&
            (null == v ? void 0 : v.approximate_member_count) != null
        ) {
            let { name: e } = v.guild;
            O = g.intl.formatToPlainString(g.t["4T4+p6"], {
                guildName: e,
                count: v.approximate_member_count,
            });
        }
        return (0, r.jsxs)("div", {
            className: p.container,
            children: [
                (0, r.jsx)("div", { className: p.topImage }),
                (0, r.jsx)(o.X6q, {
                    className: a()(p.centerText, p.header),
                    variant: "heading-xl/semibold",
                    children: O,
                }),
                (0, r.jsx)("div", {
                    className: p.descriptionWidth,
                    children: (0, r.jsx)(o.Text, {
                        className: p.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: T,
                    }),
                }),
                (0, r.jsxs)("form", {
                    className: p.formContent,
                    onSubmit: I,
                    children: [
                        (0, r.jsxs)(o.xJW, {
                            children: [
                                (0, r.jsx)(o.vwX, {
                                    id: x,
                                    children: g.intl.string(g.t.kmCxkZ),
                                }),
                                (0, r.jsx)(o.oil, {
                                    placeholder: g.intl.string(g.t.ImAOh4),
                                    onChange: (e) => {
                                        u(e);
                                    },
                                    error: null == S ? void 0 : S.getAnyErrorMessage(),
                                    "aria-labelledby": x,
                                }),
                            ],
                        }),
                        (0, r.jsx)(o.Text, {
                            color: "header-secondary",
                            className: p.formDescription,
                            variant: "text-sm/normal",
                            children: g.intl.string(g.t.Cv7mmJ),
                        }),
                        (0, r.jsx)(s.zx, {
                            type: "submit",
                            size: s.zx.Sizes.LARGE,
                            color: s.zx.Colors.BRAND,
                            className: p.submitButton,
                            submitting: j,
                            children: g.intl.string(g.t["8vmKOz"]),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: p.termsPhrase,
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: g.intl.format(g.t.RPT0vr, {
                                termsURL: f.EYA.TERMS,
                                privacyURL: f.EYA.PRIVACY,
                            }),
                        }),
                        E &&
                            (0, r.jsx)(s.zx, {
                                look: s.zx.Looks.LINK,
                                onClick: N,
                                className: p.cancelButton,
                                children: g.intl.string(g.t.hO6qJy),
                            }),
                    ],
                }),
            ],
        });
    };
