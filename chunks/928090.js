(r.d(t, { default: () => g }), r(388685));
var n = r(255367),
    s = r(73800),
    i = r(990547),
    a = r(755721),
    o = r(481060),
    c = r(37234),
    l = r(700582),
    d = r(213609),
    u = r(600164),
    m = r(434404),
    f = r(706454),
    p = r(768581),
    _ = r(5192),
    x = r(51144),
    h = r(981631),
    b = r(72766),
    E = r(388032),
    j = r(68976);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function T(e, t) {
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
let O = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
    return 'https://'.concat(h.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000168511');
};
function g(e) {
    let { guild: t, toUser: f, fromUser: g, onClose: y, transitionState: R } = e,
        [I, v] = s.useState(!1),
        w = t.features.has(h.oNc.VERIFIED) || t.features.has(h.oNc.PARTNERED),
        S = w ? E.intl.string(E.t.wDkfrK) : null,
        P = w ? E.intl.format(E.t.A37vwM, { ticketUrl: O() }) : null,
        A = t.features.has(h.oNc.CREATOR_MONETIZABLE) || t.features.has(h.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    async function k(e) {
        await m.Z.transferOwnership(t.id, f.id, b.X.EMAIL, e);
    }
    async function C() {
        await m.Z.sendTransferOwnershipPincode(t.id, !0);
    }
    async function D(e) {
        (e.preventDefault(), y());
        try {
            g.mfaEnabled || null == g.email
                ? (await m.Z.transferOwnership(t.id, f.id, g.mfaEnabled ? b.X.MFA : null), (0, c.xf)())
                : (await m.Z.sendTransferOwnershipPincode(t.id),
                  (0, o.ZDy)(async () => {
                      let { default: e } = await r.e('94566').then(r.bind(r, 965072));
                      return (t) =>
                          (0, n.jsx)(
                              e,
                              T(N({}, t), {
                                  onFormSubmit: k,
                                  onResend: C,
                                  onSuccess: c.xf,
                                  headerText: E.intl.string(E.t.Z5s7PD),
                                  confirmButtonText: E.intl.string(E.t.Z5s7PD),
                                  confirmButtonColor: a.zx.Colors.RED,
                                  impressionName: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
                              })
                          );
                  }));
        } catch (e) {
            e.body.code === h.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, o.h7j)((e) =>
                    (0, n.jsx)(
                        o.ConfirmModal,
                        T(N({}, e), {
                            header: E.intl.string(E.t['m+nQlp']),
                            confirmText: E.intl.string(E.t['NX+WJC']),
                            confirmButtonColor: a.zx.Colors.BRAND,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: E.intl.format(E.t.wG747e, { server_subscription_owner_transfer_article: h.T23 })
                            })
                        })
                    )
                );
        }
    }
    (0, d.Z)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
    });
    let Z = _.ZP.getNickname(t.id, void 0, f),
        L = f.hasAvatarForGuild(t.id),
        F = () =>
            (0, n.jsxs)('span', {
                className: j.guildTransfer,
                children: [
                    null != t.icon
                        ? (0, n.jsx)(o.qEK, {
                              src: p.ZP.getGuildIconURL({
                                  id: t.id,
                                  icon: t.icon,
                                  size: 16
                              }),
                              size: o.EFr.SIZE_16,
                              className: j.miniGuildIcon,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, n.jsx)(o.Text, {
                        className: j.guildName,
                        variant: 'text-sm/bold',
                        children: t.name
                    })
                ]
            });
    return (0, n.jsx)(o.Y0X, {
        transitionState: R,
        parentComponent: 'TransferOwnership',
        children: (0, n.jsxs)('form', {
            onSubmit: D,
            children: [
                (0, n.jsx)(o.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(o.X6q, {
                        variant: 'heading-lg/semibold',
                        className: j.header,
                        children: E.intl.string(E.t.Z5s7PD)
                    })
                }),
                (0, n.jsxs)(o.hzk, {
                    children: [
                        (0, n.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            className: j.subHeader,
                            children:
                                null != Z || L
                                    ? E.intl.format(E.t.E90vgo, {
                                          GuildHook: F,
                                          user: (0, x.W5)(f),
                                          AKAHook: function () {
                                              return (0, n.jsxs)('span', {
                                                  className: j.akaTransfer,
                                                  children: [
                                                      (0, n.jsx)(o.IGR, {
                                                          text: E.intl.string(E.t.l1QVfn),
                                                          disableColor: !0,
                                                          className: j.akaBadge
                                                      }),
                                                      L
                                                          ? (0, n.jsx)(o.qEK, {
                                                                src: f.getAvatarURL(t.id, 16, !0),
                                                                size: o.EFr.SIZE_16,
                                                                className: j.miniAvatar,
                                                                'aria-hidden': !0
                                                            })
                                                          : null,
                                                      (0, n.jsx)(o.Text, {
                                                          className: j.nickname,
                                                          variant: 'text-sm/normal',
                                                          children: null != Z ? Z : x.ZP.getName(f)
                                                      })
                                                  ]
                                              });
                                          }
                                      })
                                    : E.intl.format(E.t['2XLnGx'], {
                                          GuildHook: F,
                                          user: (0, x.W5)(f)
                                      })
                        }),
                        (0, n.jsxs)(u.Z, {
                            className: j.fromToWrapper,
                            justify: u.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)('div', {
                                    className: j.from,
                                    children: (0, n.jsx)(l.Z, {
                                        user: g,
                                        size: o.EFr.SIZE_80
                                    })
                                }),
                                (0, n.jsx)('div', {
                                    className: j.to,
                                    children: (0, n.jsx)(l.Z, {
                                        user: f,
                                        size: o.EFr.SIZE_80
                                    })
                                })
                            ]
                        }),
                        A &&
                            (0, n.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                className: j.roleSubscriptionText,
                                children: E.intl.format(E.t.LAlucX, { server_subscription_owner_transfer_article: h.T23 })
                            }),
                        (0, n.jsx)(o.j7V, {
                            disabled: w,
                            tooltipNote: S,
                            hideBorder: !0,
                            value: I,
                            onChange: function (e) {
                                v(e);
                            },
                            children: (0, n.jsx)(o.R94, {
                                type: o.R94.Types.DESCRIPTION,
                                children: E.intl.format(E.t.xm6ACA, { username: (0, x.W5)(f) })
                            })
                        }),
                        (0, n.jsx)(o.R94, {
                            className: j.protectedText,
                            type: o.R94.Types.DEFAULT,
                            children: P
                        })
                    ]
                }),
                (0, n.jsx)(o.mzw, {
                    children: (0, n.jsxs)(o.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, n.jsx)(o.zxk, {
                                variant: 'critical-primary',
                                text: E.intl.string(E.t.Z5s7PD),
                                type: 'submit',
                                disabled: !I
                            }),
                            (0, n.jsx)(o.zxk, {
                                variant: 'secondary',
                                text: E.intl.string(E.t['ETE/oK']),
                                onClick: y
                            })
                        ]
                    })
                })
            ]
        })
    });
}
