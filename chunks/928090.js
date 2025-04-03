t.d(r, { default: () => g }), t(47120);
var n = t(200651),
    s = t(192379),
    a = t(990547),
    i = t(481060),
    o = t(37234),
    c = t(700582),
    l = t(213609),
    d = t(600164),
    u = t(434404),
    m = t(706454),
    f = t(768581),
    p = t(5192),
    _ = t(51144),
    N = t(981631),
    x = t(72766),
    h = t(388032),
    b = t(68976);
function E(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
function j(e, r) {
    return (
        (r = null != r ? r : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e
    );
}
let T = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.default.locale;
    return 'https://'.concat(N.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000168511');
};
function g(e) {
    let { guild: r, toUser: m, fromUser: g, onClose: O, transitionState: R } = e,
        [I, y] = s.useState(!1),
        k = r.hasFeature(N.oNc.VERIFIED) || r.hasFeature(N.oNc.PARTNERED),
        v = k ? h.NW.string(h.t.wDkfrK) : null,
        S = k ? h.NW.format(h.t.A37vwM, { ticketUrl: T() }) : null,
        P = r.hasFeature(N.oNc.CREATOR_MONETIZABLE) || r.hasFeature(N.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    async function w(e) {
        await u.Z.transferOwnership(r.id, m.id, x.X.EMAIL, e);
    }
    async function A() {
        await u.Z.sendTransferOwnershipPincode(r.id, !0);
    }
    async function W(e) {
        e.preventDefault(), O();
        try {
            g.mfaEnabled || null == g.email
                ? (await u.Z.transferOwnership(r.id, m.id, g.mfaEnabled ? x.X.MFA : null), (0, o.xf)())
                : (await u.Z.sendTransferOwnershipPincode(r.id),
                  (0, i.ZDy)(async () => {
                      let { default: e } = await t.e('94566').then(t.bind(t, 965072));
                      return (r) =>
                          (0, n.jsx)(
                              e,
                              j(E({}, r), {
                                  onFormSubmit: w,
                                  onResend: A,
                                  onSuccess: o.xf,
                                  headerText: h.NW.string(h.t.Z5s7PD),
                                  confirmButtonText: h.NW.string(h.t.Z5s7PD),
                                  confirmButtonColor: i.zxk.Colors.RED,
                                  impressionName: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                              })
                          );
                  }));
        } catch (e) {
            e.body.code === N.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, i.h7j)((e) =>
                    (0, n.jsx)(
                        i.ConfirmModal,
                        j(E({}, e), {
                            header: h.NW.string(h.t['m+nQlp']),
                            confirmText: h.NW.string(h.t['NX+WJC']),
                            confirmButtonColor: i.zxk.Colors.BRAND,
                            children: (0, n.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: h.NW.format(h.t.wG747e, { server_subscription_owner_transfer_article: N.T23 })
                            })
                        })
                    )
                );
        }
    }
    (0, l.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
    });
    let C = p.ZP.getNickname(r.id, void 0, m),
        D = m.hasAvatarForGuild(r.id),
        Z = () =>
            (0, n.jsxs)('span', {
                className: b.guildTransfer,
                children: [
                    null != r.icon
                        ? (0, n.jsx)(i.qEK, {
                              src: f.ZP.getGuildIconURL({
                                  id: r.id,
                                  icon: r.icon,
                                  size: 16
                              }),
                              size: i.EFr.SIZE_16,
                              className: b.miniGuildIcon,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, n.jsx)(i.Text, {
                        className: b.guildName,
                        variant: 'text-sm/bold',
                        children: r.toString()
                    })
                ]
            });
    return (0, n.jsx)(i.Y0X, {
        transitionState: R,
        children: (0, n.jsxs)('form', {
            onSubmit: W,
            children: [
                (0, n.jsx)(i.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(i.X6q, {
                        variant: 'heading-lg/semibold',
                        className: b.header,
                        children: h.NW.string(h.t.Z5s7PD)
                    })
                }),
                (0, n.jsxs)(i.hzk, {
                    children: [
                        (0, n.jsx)(i.R94, {
                            type: i.R94.Types.DESCRIPTION,
                            className: b.subHeader,
                            children:
                                null != C || D
                                    ? h.NW.format(h.t.E90vgo, {
                                          GuildHook: Z,
                                          user: (0, _.W5)(m),
                                          AKAHook: function () {
                                              return (0, n.jsxs)('span', {
                                                  className: b.akaTransfer,
                                                  children: [
                                                      (0, n.jsx)(i.IGR, {
                                                          text: h.NW.string(h.t.l1QVfn),
                                                          disableColor: !0,
                                                          className: b.akaBadge
                                                      }),
                                                      D
                                                          ? (0, n.jsx)(i.qEK, {
                                                                src: m.getAvatarURL(r.id, 16, !0),
                                                                size: i.EFr.SIZE_16,
                                                                className: b.miniAvatar,
                                                                'aria-hidden': !0
                                                            })
                                                          : null,
                                                      (0, n.jsx)(i.Text, {
                                                          className: b.nickname,
                                                          variant: 'text-sm/normal',
                                                          children: null != C ? C : _.ZP.getName(m)
                                                      })
                                                  ]
                                              });
                                          }
                                      })
                                    : h.NW.format(h.t['2XLnGx'], {
                                          GuildHook: Z,
                                          user: (0, _.W5)(m)
                                      })
                        }),
                        (0, n.jsxs)(d.Z, {
                            className: b.fromToWrapper,
                            justify: d.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)('div', {
                                    className: b.from,
                                    children: (0, n.jsx)(c.Z, {
                                        user: g,
                                        size: i.EFr.SIZE_80
                                    })
                                }),
                                (0, n.jsx)('div', {
                                    className: b.to,
                                    children: (0, n.jsx)(c.Z, {
                                        user: m,
                                        size: i.EFr.SIZE_80
                                    })
                                })
                            ]
                        }),
                        P &&
                            (0, n.jsx)(i.R94, {
                                type: i.R94.Types.DESCRIPTION,
                                className: b.roleSubscriptionText,
                                children: h.NW.format(h.t.LAlucX, { server_subscription_owner_transfer_article: N.T23 })
                            }),
                        (0, n.jsx)(i.j7V, {
                            disabled: k,
                            tooltipNote: v,
                            hideBorder: !0,
                            value: I,
                            onChange: function (e) {
                                y(e);
                            },
                            children: (0, n.jsx)(i.R94, {
                                type: i.R94.Types.DESCRIPTION,
                                children: h.NW.format(h.t.xm6ACA, { username: (0, _.W5)(m) })
                            })
                        }),
                        (0, n.jsx)(i.R94, {
                            className: b.protectedText,
                            type: i.R94.Types.DEFAULT,
                            children: S
                        })
                    ]
                }),
                (0, n.jsxs)(i.mzw, {
                    children: [
                        (0, n.jsx)(i.zxk, {
                            type: 'submit',
                            disabled: !I,
                            color: i.zxk.Colors.RED,
                            children: h.NW.string(h.t.Z5s7PD)
                        }),
                        (0, n.jsx)(i.zxk, {
                            look: i.zxk.Looks.LINK,
                            color: i.zxk.Colors.PRIMARY,
                            onClick: O,
                            children: h.NW.string(h.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
