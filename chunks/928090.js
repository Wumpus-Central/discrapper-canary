r.d(t, { default: () => g }), r(388685);
var n = r(255367),
    s = r(73800),
    i = r(990547),
    a = r(481060),
    o = r(37234),
    l = r(700582),
    c = r(213609),
    d = r(600164),
    u = r(434404),
    m = r(706454),
    f = r(768581),
    p = r(5192),
    _ = r(51144),
    x = r(981631),
    h = r(72766),
    b = r(388032),
    E = r(68976);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let T = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.default.locale;
    return 'https://'.concat(x.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000168511');
};
function g(e) {
    let { guild: t, toUser: m, fromUser: g, onClose: O, transitionState: R } = e,
        [I, y] = s.useState(!1),
        k = t.hasFeature(x.oNc.VERIFIED) || t.hasFeature(x.oNc.PARTNERED),
        v = k ? b.intl.string(b.t.wDkfrK) : null,
        S = k ? b.intl.format(b.t.A37vwM, { ticketUrl: T() }) : null,
        P = t.hasFeature(x.oNc.CREATOR_MONETIZABLE) || t.hasFeature(x.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    async function w(e) {
        await u.Z.transferOwnership(t.id, m.id, h.X.EMAIL, e);
    }
    async function A() {
        await u.Z.sendTransferOwnershipPincode(t.id, !0);
    }
    async function C(e) {
        e.preventDefault(), O();
        try {
            g.mfaEnabled || null == g.email
                ? (await u.Z.transferOwnership(t.id, m.id, g.mfaEnabled ? h.X.MFA : null), (0, o.xf)())
                : (await u.Z.sendTransferOwnershipPincode(t.id),
                  (0, a.ZDy)(async () => {
                      let { default: e } = await r.e('94566').then(r.bind(r, 965072));
                      return (t) =>
                          (0, n.jsx)(
                              e,
                              j(N({}, t), {
                                  onFormSubmit: w,
                                  onResend: A,
                                  onSuccess: o.xf,
                                  headerText: b.intl.string(b.t.Z5s7PD),
                                  confirmButtonText: b.intl.string(b.t.Z5s7PD),
                                  confirmButtonColor: a.zxk.Colors.RED,
                                  impressionName: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                              })
                          );
                  }));
        } catch (e) {
            e.body.code === x.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, a.h7j)((e) =>
                    (0, n.jsx)(
                        a.ConfirmModal,
                        j(N({}, e), {
                            header: b.intl.string(b.t['m+nQlp']),
                            confirmText: b.intl.string(b.t['NX+WJC']),
                            confirmButtonColor: a.zxk.Colors.BRAND,
                            children: (0, n.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: b.intl.format(b.t.wG747e, { server_subscription_owner_transfer_article: x.T23 })
                            })
                        })
                    )
                );
        }
    }
    (0, c.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
    });
    let D = p.ZP.getNickname(t.id, void 0, m),
        Z = m.hasAvatarForGuild(t.id),
        L = () =>
            (0, n.jsxs)('span', {
                className: E.guildTransfer,
                children: [
                    null != t.icon
                        ? (0, n.jsx)(a.qEK, {
                              src: f.ZP.getGuildIconURL({
                                  id: t.id,
                                  icon: t.icon,
                                  size: 16
                              }),
                              size: a.EFr.SIZE_16,
                              className: E.miniGuildIcon,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, n.jsx)(a.Text, {
                        className: E.guildName,
                        variant: 'text-sm/bold',
                        children: t.toString()
                    })
                ]
            });
    return (0, n.jsx)(a.Y0X, {
        transitionState: R,
        children: (0, n.jsxs)('form', {
            onSubmit: C,
            children: [
                (0, n.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        className: E.header,
                        children: b.intl.string(b.t.Z5s7PD)
                    })
                }),
                (0, n.jsxs)(a.hzk, {
                    children: [
                        (0, n.jsx)(a.R94, {
                            type: a.R94.Types.DESCRIPTION,
                            className: E.subHeader,
                            children:
                                null != D || Z
                                    ? b.intl.format(b.t.E90vgo, {
                                          GuildHook: L,
                                          user: (0, _.W5)(m),
                                          AKAHook: function () {
                                              return (0, n.jsxs)('span', {
                                                  className: E.akaTransfer,
                                                  children: [
                                                      (0, n.jsx)(a.IGR, {
                                                          text: b.intl.string(b.t.l1QVfn),
                                                          disableColor: !0,
                                                          className: E.akaBadge
                                                      }),
                                                      Z
                                                          ? (0, n.jsx)(a.qEK, {
                                                                src: m.getAvatarURL(t.id, 16, !0),
                                                                size: a.EFr.SIZE_16,
                                                                className: E.miniAvatar,
                                                                'aria-hidden': !0
                                                            })
                                                          : null,
                                                      (0, n.jsx)(a.Text, {
                                                          className: E.nickname,
                                                          variant: 'text-sm/normal',
                                                          children: null != D ? D : _.ZP.getName(m)
                                                      })
                                                  ]
                                              });
                                          }
                                      })
                                    : b.intl.format(b.t['2XLnGx'], {
                                          GuildHook: L,
                                          user: (0, _.W5)(m)
                                      })
                        }),
                        (0, n.jsxs)(d.Z, {
                            className: E.fromToWrapper,
                            justify: d.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)('div', {
                                    className: E.from,
                                    children: (0, n.jsx)(l.Z, {
                                        user: g,
                                        size: a.EFr.SIZE_80
                                    })
                                }),
                                (0, n.jsx)('div', {
                                    className: E.to,
                                    children: (0, n.jsx)(l.Z, {
                                        user: m,
                                        size: a.EFr.SIZE_80
                                    })
                                })
                            ]
                        }),
                        P &&
                            (0, n.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                className: E.roleSubscriptionText,
                                children: b.intl.format(b.t.LAlucX, { server_subscription_owner_transfer_article: x.T23 })
                            }),
                        (0, n.jsx)(a.j7V, {
                            disabled: k,
                            tooltipNote: v,
                            hideBorder: !0,
                            value: I,
                            onChange: function (e) {
                                y(e);
                            },
                            children: (0, n.jsx)(a.R94, {
                                type: a.R94.Types.DESCRIPTION,
                                children: b.intl.format(b.t.xm6ACA, { username: (0, _.W5)(m) })
                            })
                        }),
                        (0, n.jsx)(a.R94, {
                            className: E.protectedText,
                            type: a.R94.Types.DEFAULT,
                            children: S
                        })
                    ]
                }),
                (0, n.jsxs)(a.mzw, {
                    children: [
                        (0, n.jsx)(a.zxk, {
                            type: 'submit',
                            disabled: !I,
                            color: a.zxk.Colors.RED,
                            children: b.intl.string(b.t.Z5s7PD)
                        }),
                        (0, n.jsx)(a.zxk, {
                            look: a.zxk.Looks.LINK,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: O,
                            children: b.intl.string(b.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
