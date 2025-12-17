r.d(t, { Z: () => p }), r(388685);
var n = r(54381),
    i = r(473749),
    l = r(793030),
    o = r(481060),
    a = r(231239),
    c = r(881052),
    s = r(592125),
    u = r(888592),
    d = r(981631),
    f = r(388032),
    O = r(838840);
let p = (e) => {
    var t,
        r,
        { setStep: p, setGuildsInfo: y, email: b, setEmail: g, setGuildId: j, invite: m } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["setStep", "setGuildsInfo", "email", "setEmail", "setGuildId", "invite"]);
    let [h, E] = i.useState(null),
        [S, I] = i.useState(!1),
        P = async (e) => {
            e.preventDefault(), E(null), I(!0);
            try {
                var t, r, n, i, l;
                let e =
                    null !=
                    (l =
                        null != (i = null == m || null == (t = m.guild) ? void 0 : t.id)
                            ? i
                            : null == (r = s.Z.getChannel(null == m || null == (n = m.channel) ? void 0 : n.id))
                              ? void 0
                              : r.getGuildId())
                        ? l
                        : void 0;
                e === u.fQ && (e = void 0);
                let o = await a.Z.sendVerificationEmail(b, !0, e),
                    c = o.guilds_info;
                o.has_matching_guild
                    ? (j(e), p(u.tF.VERIFY_PIN))
                    : 0 === c.length
                      ? p(u.tF.SUBMIT_SCHOOL)
                      : 1 === c.length
                        ? (j(c[0].id), await a.Z.sendVerificationEmail(b, !0, c[0].id), p(u.tF.VERIFY_PIN))
                        : (y(c), p(u.tF.SELECT_SCHOOL));
            } catch (e) {
                E(new c.Hx(e));
            } finally {
                I(!1);
            }
        },
        _ = f.intl.string(f.t.H1jCHH);
    if (
        (null == m ? void 0 : m.guild) != null &&
        m.guild.id !== u.fQ &&
        (null == m ? void 0 : m.approximate_member_count) != null
    ) {
        let { name: e } = m.guild;
        _ = f.intl.formatToPlainString(f.t["4T4+p1"], {
            guildName: e,
            count: m.approximate_member_count,
        });
    }
    return (0, n.jsx)("form", {
        className: O.formContent,
        onSubmit: P,
        children: (0, n.jsxs)(
            l.Modal,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({}, v)),
            (r = r =
                {
                    title: _,
                    actions: [
                        {
                            variant: "primary",
                            type: "submit",
                            loading: S,
                            text: f.intl.string(f.t["8vmKO0"]),
                        },
                    ],
                    children: [
                        (0, n.jsx)(o.oil, {
                            label: f.intl.string(f.t.kmCxkf),
                            placeholder: f.intl.string(f.t.ImAOh5),
                            onChange: (e) => {
                                g(e);
                            },
                            error: null == h ? void 0 : h.getAnyErrorMessage(),
                        }),
                        (0, n.jsx)(o.Text, {
                            className: O.termsPhrase,
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: f.intl.format(f.t.cgT481, {
                                termsURL: d.EYA.TERMS,
                                privacyURL: d.EYA.PRIVACY,
                            }),
                        }),
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        ),
    });
};
