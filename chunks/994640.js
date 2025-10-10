n.d(t, { Z: () => g }), n(388685);
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
    f = n(388032),
    p = n(330966);
let g = (e) => {
    let { setStep: t, setGuildsInfo: n, email: i, setEmail: g, setGuildId: h, invite: _, onClose: v, isNUXFlow: x } = e,
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
                    f = c.guilds_info;
                c.has_matching_guild
                    ? (h(e), t(u.tF.VERIFY_PIN))
                    : 0 === f.length
                      ? t(u.tF.SUBMIT_SCHOOL)
                      : 1 === f.length
                        ? (h(f[0].id), await o.Z.sendVerificationEmail(i, !0, f[0].id), t(u.tF.VERIFY_PIN))
                        : (n(f), t(u.tF.SELECT_SCHOOL));
            } catch (e) {
                E(new c.Hx(e));
            } finally {
                S(!1);
            }
        },
        I = f.intl.string(f.t.H1jCHB),
        O = f.intl.string(f.t.YfeHRE);
    if (x) (I = f.intl.string(f.t.LVyxND)), (O = f.intl.string(f.t.ECd7Rk));
    else if (
        (null == _ ? void 0 : _.guild) != null &&
        _.guild.id !== u.fQ &&
        (null == _ ? void 0 : _.approximate_member_count) != null
    ) {
        let { name: e } = _.guild;
        I = f.intl.formatToPlainString(f.t["4T4+p6"], {
            guildName: e,
            count: _.approximate_member_count,
        });
    }
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsx)("div", { className: p.topImage }),
            (0, r.jsx)(s.X6q, {
                className: a()(p.centerText, p.header),
                variant: "heading-xl/semibold",
                children: I,
            }),
            (0, r.jsx)("div", {
                className: p.descriptionWidth,
                children: (0, r.jsx)(s.Text, {
                    className: p.centerText,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: O,
                }),
            }),
            (0, r.jsxs)("form", {
                className: p.formContent,
                onSubmit: j,
                children: [
                    (0, r.jsx)(s.oil, {
                        label: f.intl.string(f.t.kmCxkZ),
                        placeholder: f.intl.string(f.t.ImAOh4),
                        onChange: (e) => {
                            g(e);
                        },
                        error: null == N ? void 0 : N.getAnyErrorMessage(),
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "header-secondary",
                        className: p.formDescription,
                        variant: "text-sm/normal",
                        children: f.intl.string(f.t.Cv7mmJ),
                    }),
                    (0, r.jsx)(s.zxk, {
                        type: "submit",
                        variant: "primary",
                        loading: y,
                        text: f.intl.string(f.t["8vmKOz"]),
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(s.Text, {
                        className: p.termsPhrase,
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: f.intl.format(f.t.RPT0vr, {
                            termsURL: m.EYA.TERMS,
                            privacyURL: m.EYA.PRIVACY,
                        }),
                    }),
                    x &&
                        (0, r.jsx)("div", {
                            className: p.cancelButton,
                            children: (0, r.jsx)(s.Avr, {
                                onClick: v,
                                text: f.intl.string(f.t.hO6qJy),
                            }),
                        }),
                ],
            }),
        ],
    });
};
