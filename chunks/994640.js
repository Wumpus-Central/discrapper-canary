n.d(t, { Z: () => p }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(231239),
    c = n(881052),
    d = n(592125),
    u = n(888592),
    m = n(981631),
    g = n(388032),
    f = n(330966);
let p = (e) => {
    let { setStep: t, setGuildsInfo: n, email: i, setEmail: p, setGuildId: h, invite: _, onClose: v, isNUXFlow: x } = e,
        [N, E] = l.useState(null),
        [y, S] = l.useState(!1),
        j = async (e) => {
            e.preventDefault(), E(null), S(!0);
            try {
                var r, l, a, s, m;
                let e =
                    null !=
                    (m =
                        null != (s = null == _ || null == (r = _.guild) ? void 0 : r.id)
                            ? s
                            : null == (l = d.Z.getChannel(null == _ || null == (a = _.channel) ? void 0 : a.id))
                              ? void 0
                              : l.getGuildId())
                        ? m
                        : void 0;
                e === u.fQ && (e = void 0);
                let c = await o.Z.sendVerificationEmail(i, !0, e),
                    g = c.guilds_info;
                c.has_matching_guild
                    ? (h(e), t(u.tF.VERIFY_PIN))
                    : 0 === g.length
                      ? t(u.tF.SUBMIT_SCHOOL)
                      : 1 === g.length
                        ? (h(g[0].id), await o.Z.sendVerificationEmail(i, !0, g[0].id), t(u.tF.VERIFY_PIN))
                        : (n(g), t(u.tF.SELECT_SCHOOL));
            } catch (e) {
                E(new c.Hx(e));
            } finally {
                S(!1);
            }
        },
        I = g.intl.string(g.t.H1jCHB),
        O = g.intl.string(g.t.YfeHRE);
    if (x) (I = g.intl.string(g.t.LVyxND)), (O = g.intl.string(g.t.ECd7Rk));
    else if (
        (null == _ ? void 0 : _.guild) != null &&
        _.guild.id !== u.fQ &&
        (null == _ ? void 0 : _.approximate_member_count) != null
    ) {
        let { name: e } = _.guild;
        I = g.intl.formatToPlainString(g.t["4T4+p6"], {
            guildName: e,
            count: _.approximate_member_count,
        });
    }
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)("div", { className: f.topImage }),
            (0, r.jsx)(s.Heading, {
                className: a()(f.centerText, f.header),
                variant: "heading-xl/semibold",
                children: I,
            }),
            (0, r.jsx)("div", {
                className: f.descriptionWidth,
                children: (0, r.jsx)(s.Text, {
                    className: f.centerText,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: O,
                }),
            }),
            (0, r.jsxs)("form", {
                className: f.formContent,
                onSubmit: j,
                children: [
                    (0, r.jsx)(s.oil, {
                        label: g.intl.string(g.t.kmCxkZ),
                        placeholder: g.intl.string(g.t.ImAOh4),
                        onChange: (e) => {
                            p(e);
                        },
                        error: null == N ? void 0 : N.getAnyErrorMessage(),
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        className: f.formDescription,
                        variant: "text-sm/normal",
                        children: g.intl.string(g.t.Cv7mmJ),
                    }),
                    (0, r.jsx)(s.Button, {
                        type: "submit",
                        variant: "primary",
                        loading: y,
                        text: g.intl.string(g.t["8vmKOz"]),
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(s.Text, {
                        className: f.termsPhrase,
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: g.intl.format(g.t.RPT0vr, {
                            termsURL: m.EYA.TERMS,
                            privacyURL: m.EYA.PRIVACY,
                        }),
                    }),
                    x &&
                        (0, r.jsx)("div", {
                            className: f.cancelButton,
                            children: (0, r.jsx)(s.Avr, {
                                onClick: v,
                                text: g.intl.string(g.t.hO6qJy),
                            }),
                        }),
                ],
            }),
        ],
    });
};
