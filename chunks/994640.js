n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(313201),
    u = n(592125),
    m = n(888592),
    f = n(981631),
    p = n(388032),
    h = n(330966);
let g = (0, d.hQ)(),
    v = (e) => {
        let {
                setStep: t,
                setGuildsInfo: n,
                email: i,
                setEmail: d,
                setGuildId: v,
                invite: _,
                onClose: x,
                isNUXFlow: N,
            } = e,
            [E, y] = l.useState(null),
            [S, j] = l.useState(!1),
            I = async (e) => {
                e.preventDefault(), y(null), j(!0);
                try {
                    var r, l, a, s, d;
                    let e =
                        null !=
                        (d =
                            null != (s = null == _ || null == (r = _.guild) ? void 0 : r.id)
                                ? s
                                : null == (l = u.Z.getChannel(null == _ || null == (a = _.channel) ? void 0 : a.id))
                                  ? void 0
                                  : l.getGuildId())
                            ? d
                            : void 0;
                    e === m.fQ && (e = void 0);
                    let c = await o.Z.sendVerificationEmail(i, !0, e),
                        f = c.guilds_info;
                    c.has_matching_guild
                        ? (v(e), t(m.tF.VERIFY_PIN))
                        : 0 === f.length
                          ? t(m.tF.SUBMIT_SCHOOL)
                          : 1 === f.length
                            ? (v(f[0].id), await o.Z.sendVerificationEmail(i, !0, f[0].id), t(m.tF.VERIFY_PIN))
                            : (n(f), t(m.tF.SELECT_SCHOOL));
                } catch (e) {
                    y(new c.Hx(e));
                } finally {
                    j(!1);
                }
            },
            b = p.intl.string(p.t.H1jCHB),
            O = p.intl.string(p.t.YfeHRE);
        if (N) (b = p.intl.string(p.t.LVyxND)), (O = p.intl.string(p.t.ECd7Rk));
        else if (
            (null == _ ? void 0 : _.guild) != null &&
            _.guild.id !== m.fQ &&
            (null == _ ? void 0 : _.approximate_member_count) != null
        ) {
            let { name: e } = _.guild;
            b = p.intl.formatToPlainString(p.t["4T4+p6"], {
                guildName: e,
                count: _.approximate_member_count,
            });
        }
        return (0, r.jsxs)("div", {
            className: h.container,
            children: [
                (0, r.jsx)("div", { className: h.topImage }),
                (0, r.jsx)(s.X6q, {
                    className: a()(h.centerText, h.header),
                    variant: "heading-xl/semibold",
                    children: b,
                }),
                (0, r.jsx)("div", {
                    className: h.descriptionWidth,
                    children: (0, r.jsx)(s.Text, {
                        className: h.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: O,
                    }),
                }),
                (0, r.jsxs)("form", {
                    className: h.formContent,
                    onSubmit: I,
                    children: [
                        (0, r.jsxs)(s.xJW, {
                            children: [
                                (0, r.jsx)(s.vwX, {
                                    id: g,
                                    children: p.intl.string(p.t.kmCxkZ),
                                }),
                                (0, r.jsx)(s.oil, {
                                    placeholder: p.intl.string(p.t.ImAOh4),
                                    onChange: (e) => {
                                        d(e);
                                    },
                                    error: null == E ? void 0 : E.getAnyErrorMessage(),
                                    "aria-labelledby": g,
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            className: h.formDescription,
                            variant: "text-sm/normal",
                            children: p.intl.string(p.t.Cv7mmJ),
                        }),
                        (0, r.jsx)(s.zxk, {
                            type: "submit",
                            variant: "primary",
                            loading: S,
                            text: p.intl.string(p.t["8vmKOz"]),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(s.Text, {
                            className: h.termsPhrase,
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: p.intl.format(p.t.RPT0vr, {
                                termsURL: f.EYA.TERMS,
                                privacyURL: f.EYA.PRIVACY,
                            }),
                        }),
                        N &&
                            (0, r.jsx)("div", {
                                className: h.cancelButton,
                                children: (0, r.jsx)(s.Avr, {
                                    onClick: x,
                                    text: p.intl.string(p.t.hO6qJy),
                                }),
                            }),
                    ],
                }),
            ],
        });
    };
