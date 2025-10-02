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
    h = n(388032),
    g = n(162985);
let p = (0, d.hQ)(),
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
            [y, E] = l.useState(null),
            [S, j] = l.useState(!1),
            I = async (e) => {
                e.preventDefault(), E(null), j(!0);
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
                    E(new c.Hx(e));
                } finally {
                    j(!1);
                }
            },
            b = h.intl.string(h.t.H1jCHB),
            O = h.intl.string(h.t.YfeHRE);
        if (N) (b = h.intl.string(h.t.LVyxND)), (O = h.intl.string(h.t.ECd7Rk));
        else if (
            (null == _ ? void 0 : _.guild) != null &&
            _.guild.id !== m.fQ &&
            (null == _ ? void 0 : _.approximate_member_count) != null
        ) {
            let { name: e } = _.guild;
            b = h.intl.formatToPlainString(h.t["4T4+p6"], {
                guildName: e,
                count: _.approximate_member_count,
            });
        }
        return (0, r.jsxs)("div", {
            className: g.container,
            children: [
                (0, r.jsx)("div", { className: g.topImage }),
                (0, r.jsx)(s.X6q, {
                    className: a()(g.centerText, g.header),
                    variant: "heading-xl/semibold",
                    children: b,
                }),
                (0, r.jsx)("div", {
                    className: g.descriptionWidth,
                    children: (0, r.jsx)(s.Text, {
                        className: g.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: O,
                    }),
                }),
                (0, r.jsxs)("form", {
                    className: g.formContent,
                    onSubmit: I,
                    children: [
                        (0, r.jsxs)(s.xJW, {
                            children: [
                                (0, r.jsx)(s.vwX, {
                                    id: p,
                                    children: h.intl.string(h.t.kmCxkZ),
                                }),
                                (0, r.jsx)(s.oil, {
                                    placeholder: h.intl.string(h.t.ImAOh4),
                                    onChange: (e) => {
                                        d(e);
                                    },
                                    error: null == y ? void 0 : y.getAnyErrorMessage(),
                                    "aria-labelledby": p,
                                }),
                            ],
                        }),
                        (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            className: g.formDescription,
                            variant: "text-sm/normal",
                            children: h.intl.string(h.t.Cv7mmJ),
                        }),
                        (0, r.jsx)(s.zxk, {
                            type: "submit",
                            variant: "primary",
                            loading: S,
                            text: h.intl.string(h.t["8vmKOz"]),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(s.Text, {
                            className: g.termsPhrase,
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: h.intl.format(h.t.RPT0vr, {
                                termsURL: f.EYA.TERMS,
                                privacyURL: f.EYA.PRIVACY,
                            }),
                        }),
                        N &&
                            (0, r.jsx)("div", {
                                className: g.cancelButton,
                                children: (0, r.jsx)(s.Avr, {
                                    onClick: x,
                                    text: h.intl.string(h.t.hO6qJy),
                                }),
                            }),
                    ],
                }),
            ],
        });
    };
