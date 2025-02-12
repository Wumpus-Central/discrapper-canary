n.d(s, { default: () => R }), n(47120);
var t = n(200651),
    r = n(192379),
    i = n(990547),
    a = n(481060),
    o = n(37234),
    l = n(700582),
    c = n(213609),
    d = n(600164),
    u = n(434404),
    m = n(706454),
    _ = n(768581),
    x = n(5192),
    f = n(51144),
    h = n(981631),
    p = n(72766),
    E = n(388032),
    N = n(141693);
let T = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.default.locale;
    return 'https://'.concat(h.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000168511');
};
function R(e) {
    let { guild: s, toUser: m, fromUser: R, onClose: I, transitionState: g } = e,
        [j, k] = r.useState(!1),
        A = s.hasFeature(h.oNc.VERIFIED) || s.hasFeature(h.oNc.PARTNERED),
        b = A ? E.intl.string(E.t.wDkfrK) : null,
        S = A ? E.intl.format(E.t.A37vwM, { ticketUrl: T() }) : null,
        v = s.hasFeature(h.oNc.CREATOR_MONETIZABLE) || s.hasFeature(h.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    async function C(e) {
        await u.Z.transferOwnership(s.id, m.id, p.X.EMAIL, e);
    }
    async function Z() {
        await u.Z.sendTransferOwnershipPincode(s.id, !0);
    }
    async function O(e) {
        e.preventDefault(), I();
        try {
            R.mfaEnabled || null == R.email
                ? (await u.Z.transferOwnership(s.id, m.id, R.mfaEnabled ? p.X.MFA : null), (0, o.xf)())
                : (await u.Z.sendTransferOwnershipPincode(s.id),
                  (0, a.ZDy)(async () => {
                      let { default: e } = await n.e('94566').then(n.bind(n, 965072));
                      return (s) =>
                          (0, t.jsx)(e, {
                              ...s,
                              onFormSubmit: C,
                              onResend: Z,
                              onSuccess: o.xf,
                              headerText: E.intl.string(E.t.Z5s7PD),
                              confirmButtonText: E.intl.string(E.t.Z5s7PD),
                              confirmButtonColor: a.zxk.Colors.RED,
                              impressionName: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                          });
                  }));
        } catch (e) {
            e.body.code === h.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, a.h7j)((e) =>
                    (0, t.jsx)(a.ConfirmModal, {
                        ...e,
                        header: E.intl.string(E.t['m+nQlp']),
                        confirmText: E.intl.string(E.t['NX+WJC']),
                        confirmButtonColor: a.zxk.Colors.BRAND,
                        children: (0, t.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: E.intl.format(E.t.wG747e, { server_subscription_owner_transfer_article: h.T23 })
                        })
                    })
                );
        }
    }
    (0, c.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
    });
    let y = x.ZP.getNickname(s.id, void 0, m),
        D = m.hasAvatarForGuild(s.id),
        w = () =>
            (0, t.jsxs)('span', {
                className: N.guildTransfer,
                children: [
                    null != s.icon
                        ? (0, t.jsx)(a.qEK, {
                              src: _.ZP.getGuildIconURL({
                                  id: s.id,
                                  icon: s.icon,
                                  size: 16
                              }),
                              size: a.EFr.SIZE_16,
                              className: N.miniGuildIcon,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, t.jsx)(a.Text, {
                        className: N.guildName,
                        variant: 'text-sm/bold',
                        children: s.toString()
                    })
                ]
            });
    return (0, t.jsx)(a.Y0X, {
        transitionState: g,
        children: (0, t.jsxs)('form', {
            onSubmit: O,
            children: [
                (0, t.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        className: N.header,
                        children: E.intl.string(E.t.Z5s7PD)
                    })
                }),
                (0, t.jsxs)(a.hzk, {
                    children: [
                        (0, t.jsx)(a.R94, {
                            type: a.R94.Types.DESCRIPTION,
                            className: N.subHeader,
                            children:
                                null != y || D
                                    ? E.intl.format(E.t.E90vgo, {
                                          GuildHook: w,
                                          user: (0, f.W5)(m),
                                          AKAHook: function () {
                                              return (0, t.jsxs)('span', {
                                                  className: N.akaTransfer,
                                                  children: [
                                                      (0, t.jsx)(a.IGR, {
                                                          text: E.intl.string(E.t.l1QVfn),
                                                          disableColor: !0,
                                                          className: N.akaBadge
                                                      }),
                                                      D
                                                          ? (0, t.jsx)(a.qEK, {
                                                                src: m.getAvatarURL(s.id, 16, !0),
                                                                size: a.EFr.SIZE_16,
                                                                className: N.miniAvatar,
                                                                'aria-hidden': !0
                                                            })
                                                          : null,
                                                      (0, t.jsx)(a.Text, {
                                                          className: N.nickname,
                                                          variant: 'text-sm/normal',
                                                          children: null != y ? y : f.ZP.getName(m)
                                                      })
                                                  ]
                                              });
                                          }
                                      })
                                    : E.intl.format(E.t['2XLnGx'], {
                                          GuildHook: w,
                                          user: (0, f.W5)(m)
                                      })
                        }),
                        (0, t.jsxs)(d.Z, {
                            className: N.fromToWrapper,
                            justify: d.Z.Justify.CENTER,
                            children: [
                                (0, t.jsx)('div', {
                                    className: N.from,
                                    children: (0, t.jsx)(l.Z, {
                                        user: R,
                                        size: a.EFr.SIZE_80
                                    })
                                }),
                                (0, t.jsx)('div', {
                                    className: N.to,
                                    children: (0, t.jsx)(l.Z, {
                                        user: m,
                                        size: a.EFr.SIZE_80
                                    })
                                })
                            ]
                        }),
                        v &&
                            (0, t.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                className: N.roleSubscriptionText,
                                children: E.intl.format(E.t.LAlucX, { server_subscription_owner_transfer_article: h.T23 })
                            }),
                        (0, t.jsx)(a.j7V, {
                            disabled: A,
                            tooltipNote: b,
                            hideBorder: !0,
                            value: j,
                            onChange: function (e) {
                                k(e);
                            },
                            children: (0, t.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                children: E.intl.format(E.t.xm6ACA, { username: (0, f.W5)(m) })
                            })
                        }),
                        (0, t.jsx)(a.R94, {
                            className: N.protectedText,
                            type: a.R94.Types.DEFAULT,
                            children: S
                        })
                    ]
                }),
                (0, t.jsxs)(a.mzw, {
                    children: [
                        (0, t.jsx)(a.zxk, {
                            type: 'submit',
                            disabled: !j,
                            color: a.zxk.Colors.RED,
                            children: E.intl.string(E.t.Z5s7PD)
                        }),
                        (0, t.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: I,
                            children: E.intl.string(E.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
