n.d(t, { default: () => C });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(230711),
    a = n(782568),
    s = n(168107),
    d = n(480916),
    c = n(81643),
    _ = n(880257),
    I = n(63063),
    E = n(247206),
    u = n(981631),
    f = n(526761),
    h = n(388032),
    m = n(618386),
    A = n(444812);
let C = (e) => {
    let { channelId: t, messageId: C, transitionState: g, onClose: R } = e,
        L = (0, _.Z)(),
        b = (0, c.Jm)(),
        x = (0, E.m8)(),
        v = l.useMemo(() => b && x, [b, x]),
        N = l.useCallback(
            (e) => {
                (0, E.aP)({
                    action: e,
                    channelId: t,
                    messageId: C
                });
            },
            [t, C]
        );
    return (
        l.useEffect(() => {
            (0, E.aP)({
                action: E.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: C
            });
        }, [t, C]),
        (0, r.jsxs)(o.Y0X, {
            transitionState: g,
            'aria-label': h.intl.string(h.t.xdm3XF),
            children: [
                (0, r.jsx)(o.xBx, {
                    separator: !1,
                    className: m.modalHeader,
                    children: (0, r.jsx)('img', {
                        src: A,
                        alt: h.intl.string(h.t.id3fND),
                        className: m.headerImg
                    })
                }),
                (0, r.jsxs)(o.hzk, {
                    className: m.modalBody,
                    children: [
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            className: m.modalInteriorHeader,
                            children: h.intl.string(h.t.sGW77u)
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: v ? h.intl.string(h.t.H2kKw8) : L ? h.intl.string(h.t.XW3vjo) : h.intl.string(h.t.i4daNj)
                        }),
                        (0, r.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                v
                                    ? (0, r.jsx)(o.zxk, {
                                          color: o.zxk.Colors.BRAND,
                                          onClick: function () {
                                              R(), N(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE);
                                          },
                                          fullWidth: !0,
                                          children: h.intl.string(h.t['+2/AhI'])
                                      })
                                    : L
                                      ? (0, r.jsx)(o.zxk, {
                                            color: o.zxk.Colors.BRAND,
                                            onClick: function () {
                                                N(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2 }), R();
                                            },
                                            fullWidth: !0,
                                            children: h.intl.string(h.t['9D+zGR'])
                                        })
                                      : (0, r.jsx)(o.zxk, {
                                            color: o.zxk.Colors.BRAND,
                                            onClick: () => {
                                                (0, a.Z)(I.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                            },
                                            fullWidth: !0,
                                            children: h.intl.string(h.t.hvVgAQ)
                                        }),
                                (0, r.jsx)(o.zxk, {
                                    color: o.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        R(), N(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: h.intl.string(h.t.bmbHPD)
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: v
                                        ? h.intl.format(h.t['3HvI8P'], {
                                              handleOnHelpUrlHook: () => {
                                                  s.Z.openUrl(I.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), N(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                                              }
                                          })
                                        : h.intl.format(h.t.Ge0HUl, {
                                              handleFalsePositiveHook: () => {
                                                  R(),
                                                      N(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                      (0, o.ZDy)(async () => {
                                                          let { default: e } = await n(788679);
                                                          return (n) =>
                                                              (0, r.jsx)(
                                                                  e,
                                                                  (function (e) {
                                                                      for (var t = 1; t < arguments.length; t++) {
                                                                          var n = null != arguments[t] ? arguments[t] : {},
                                                                              r = Object.keys(n);
                                                                          'function' == typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                                  })
                                                                              )),
                                                                              r.forEach(function (t) {
                                                                                  var r;
                                                                                  (r = n[t]),
                                                                                      t in e
                                                                                          ? Object.defineProperty(e, t, {
                                                                                                value: r,
                                                                                                enumerable: !0,
                                                                                                configurable: !0,
                                                                                                writable: !0
                                                                                            })
                                                                                          : (e[t] = r);
                                                                              });
                                                                      }
                                                                      return e;
                                                                  })(
                                                                      {
                                                                          channelId: t,
                                                                          messageId: C
                                                                      },
                                                                      n
                                                                  )
                                                              );
                                                      }),
                                                      N(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
                                              }
                                          })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
