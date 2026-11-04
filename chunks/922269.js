t.d(s, { default: () => g });
var i,
    n = t(477900),
    a = t(582128),
    r = t(613412),
    l = t(139033),
    o = t(189213),
    c = t(192308),
    d = t(97808),
    u = t(778712),
    m = t(834730),
    f = t(805251),
    E = t(683071),
    h = t(150934),
    _ = t(398590),
    A = t(966327),
    N = t(139286),
    p = t(235986),
    x = t(727419),
    I = t(773669),
    R = t(486020),
    j = t(562153),
    y = t(427262),
    S = t(652215),
    b = (((i = {}).MFA = "mfa"), (i.SMS = "sms"), (i.EMAIL = "email"), i),
    v = t(792996),
    w = t(430918);
let O = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.locale;
    return `https://${S.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function g(e) {
    let { guild: s, toUser: i, fromUser: I, onClose: g, transitionState: T } = e,
        [L, M] = a.useState(!1),
        C = s.features.has(S.GuildFeatures.VERIFIED) || s.features.has(S.GuildFeatures.PARTNERED),
        F = C ? v.intl.format(v.t.A37vwK, { ticketUrl: O() }) : null,
        k =
            s.features.has(S.GuildFeatures.CREATOR_MONETIZABLE) ||
            s.features.has(S.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function G(e) {
        await x.A.transferOwnership(s.id, i.id, b.EMAIL, e);
    }
    async function P() {
        await x.A.sendTransferOwnershipPincode(s.id, !0);
    }
    (0, N.A)({ type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let Z = j.Ay.getNickname(s.id, void 0, i),
        D = i.hasAvatarForGuild(s.id);
    function H() {
        return (0, n.jsxs)("span", {
            className: w.v_,
            children: [
                null != s.icon
                    ? (0, n.jsx)(d.eu, {
                          src: R.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 16 }),
                          size: u._3.SIZE_16,
                          className: w.sD,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, n.jsx)(m.E, { className: w.J5, variant: "body-sm/semibold", children: s.name }),
            ],
        });
    }
    return (0, n.jsx)("form", {
        onSubmit: async function (e) {
            (e.preventDefault(), g());
            try {
                I.mfaEnabled || null == I.email
                    ? (await x.A.transferOwnership(s.id, i.id, I.mfaEnabled ? b.MFA : null), (0, _.jH)())
                    : (await x.A.sendTransferOwnershipPincode(s.id),
                      (0, c.mM)(async () => {
                          let { default: e } = await Promise.all([t.e(932606), t.e(919840)]).then(t.bind(t, 79779));
                          return (s) =>
                              (0, n.jsx)(e, {
                                  ...s,
                                  onFormSubmit: G,
                                  onResend: P,
                                  onSuccess: _.jH,
                                  headerText: v.intl.string(v.t.Z5s7PM),
                                  confirmButtonText: v.intl.string(v.t.Z5s7PM),
                                  confirmButtonVariant: "critical-primary",
                                  impression: {
                                      impressionName: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                                  },
                              });
                      }));
            } catch (e) {
                e.body.code === S.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                    (0, l.A)({
                        title: v.intl.string(v.t["m+nQlm"]),
                        subtitle: v.intl.format(v.t.wG747U, { server_subscription_owner_transfer_article: S.Oi0 }),
                        confirmText: v.intl.string(v.t["NX+WJN"]),
                    });
            }
        },
        children: (0, n.jsxs)(o.a, {
            title: v.intl.string(v.t.Z5s7PM),
            actions: [
                { text: v.intl.string(v.t["ETE/oC"]), onClick: g, variant: "secondary" },
                { text: v.intl.string(v.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !L },
            ],
            onClose: g,
            transitionState: T,
            children: [
                (0, n.jsx)(m.E, {
                    variant: "body-sm/normal",
                    className: w.uI,
                    children:
                        null != Z || D
                            ? v.intl.format(v.t.E90vgp, {
                                  GuildHook: H,
                                  user: (0, y.QV)(i),
                                  AKAHook: function () {
                                      return (0, n.jsxs)("span", {
                                          className: w.Dy,
                                          children: [
                                              (0, n.jsx)("span", {
                                                  className: w.RV,
                                                  children: (0, n.jsx)(f.E, {
                                                      type: { text: v.intl.string(v.t.l1QVfj) },
                                                      variant: "secondary",
                                                  }),
                                              }),
                                              D
                                                  ? (0, n.jsx)(d.eu, {
                                                        src: i.getAvatarURL(s.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: w.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, n.jsx)(m.E, {
                                                  className: w.$R,
                                                  variant: "body-sm/normal",
                                                  children: Z ?? y.Ay.getName(i),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : v.intl.format(v.t["2XLnG0"], { GuildHook: H, user: (0, y.QV)(i) }),
                }),
                (0, n.jsxs)(p.A, {
                    className: w.nS,
                    justify: p.A.Justify.CENTER,
                    children: [
                        (0, n.jsx)("div", {
                            className: w.HT,
                            children: (0, n.jsx)(A.A, { user: I, size: u._3.SIZE_80 }),
                        }),
                        (0, n.jsx)("div", {
                            className: w.to,
                            children: (0, n.jsx)(A.A, { user: i, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                k &&
                    (0, n.jsx)("div", {
                        className: w.rk,
                        children: (0, n.jsx)(E.w, {
                            type: "info",
                            message: v.intl.format(v.t.LAlucb, { server_subscription_owner_transfer_article: S.Oi0 }),
                            role: "none",
                        }),
                    }),
                (0, n.jsx)(h.S, {
                    label: v.intl.format(v.t.xm6ACJ, { username: (0, y.QV)(i) }),
                    disabled: C,
                    checked: L,
                    onChange: function (e) {
                        M(e);
                    },
                }),
                null != F && (0, n.jsx)(E.w, { type: "warning", message: F, role: "none" }),
            ],
        }),
    });
}
