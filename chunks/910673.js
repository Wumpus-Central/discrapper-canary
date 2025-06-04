n.d(t, { default: () => A });
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(230711),
    a = n(782568),
    s = n(168107),
    d = n(480916),
    c = n(81643),
    _ = n(880257),
    E = n(63063),
    I = n(247206),
    u = n(981631),
    f = n(526761),
    h = n(388032),
    m = n(618386),
    C = n(444812);
let A = (e) => {
    let { channelId: t, messageId: A, transitionState: R, onClose: g } = e,
        L = (0, _.Z)(),
        x = (0, c.Jm)(),
        P = (0, I.m8)(),
        b = l.useMemo(() => x && P, [x, P]),
        v = l.useCallback(
            (e) => {
                (0, I.aP)({
                    action: e,
                    channelId: t,
                    messageId: A
                });
            },
            [t, A]
        );
    return (
        l.useEffect(() => {
            (0, I.aP)({
                action: I.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: A
            });
        }, [t, A]),
        (0, r.jsxs)(o.Y0X, {
            transitionState: R,
            'aria-label': h.intl.string(h.t.xdm3XF),
            children: [
                (0, r.jsx)(o.xBx, {
                    separator: !1,
                    className: m.modalHeader,
                    children: (0, r.jsx)('img', {
                        src: C,
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
                            children: b ? h.intl.string(h.t.f3ARDQ) : L ? h.intl.string(h.t.XW3vjo) : h.intl.string(h.t.i4daNj)
                        }),
                        (0, r.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                b
                                    ? (0, r.jsx)(o.zxk, {
                                          color: o.zxk.Colors.BRAND,
                                          onClick: function () {
                                              g(), v(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE);
                                          },
                                          fullWidth: !0,
                                          children: h.intl.string(h.t.KPGVWl)
                                      })
                                    : L
                                      ? (0, r.jsx)(o.zxk, {
                                            color: o.zxk.Colors.BRAND,
                                            onClick: function () {
                                                v(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2 }), g();
                                            },
                                            fullWidth: !0,
                                            children: h.intl.string(h.t['9D+zGR'])
                                        })
                                      : (0, r.jsx)(o.zxk, {
                                            color: o.zxk.Colors.BRAND,
                                            onClick: () => {
                                                (0, a.Z)(E.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                            },
                                            fullWidth: !0,
                                            children: h.intl.string(h.t.hvVgAQ)
                                        }),
                                (0, r.jsx)(o.zxk, {
                                    color: o.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        g(), v(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: h.intl.string(h.t.bmbHPD)
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: b
                                        ? h.intl.format(h.t['TGqx+v'], {
                                              handleOnHelpUrlHook: () => {
                                                  s.Z.openUrl(E.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE)), v(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                                              }
                                          })
                                        : h.intl.format(h.t.Ge0HUl, {
                                              handleFalsePositiveHook: () => {
                                                  g(),
                                                      v(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
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
                                                                          messageId: A
                                                                      },
                                                                      n
                                                                  )
                                                              );
                                                      }),
                                                      v(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
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
