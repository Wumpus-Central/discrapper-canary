r.d(t, { default: () => C });
var n = r(200651),
    o = r(192379),
    l = r(481060),
    a = r(230711),
    i = r(782568),
    s = r(168107),
    d = r(480916),
    c = r(81643),
    _ = r(880257),
    I = r(63063),
    E = r(247206),
    u = r(981631),
    f = r(526761),
    h = r(388032),
    m = r(377746),
    A = r(444812);
let C = (e) => {
    let { channelId: t, messageId: C, transitionState: N, onClose: g } = e,
        R = (0, _.Z)(),
        v = (0, c.Jm)(),
        L = (0, E.m8)(),
        b = o.useMemo(() => v && L, [v, L]),
        x = o.useCallback(
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
        o.useEffect(() => {
            (0, E.aP)({
                action: E.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: C
            });
        }, [t, C]),
        (0, n.jsxs)(l.Y0X, {
            transitionState: N,
            'aria-label': h.NW.string(h.t.xdm3XF),
            children: [
                (0, n.jsx)(l.xBx, {
                    separator: !1,
                    className: m.modalHeader,
                    children: (0, n.jsx)('img', {
                        src: A,
                        alt: h.NW.string(h.t.id3fND),
                        className: m.headerImg
                    })
                }),
                (0, n.jsxs)(l.hzk, {
                    className: m.modalBody,
                    children: [
                        (0, n.jsx)(l.X6q, {
                            variant: 'heading-lg/bold',
                            className: m.modalInteriorHeader,
                            children: h.NW.string(h.t.sGW77u)
                        }),
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: b ? h.NW.string(h.t.H2kKw8) : R ? h.NW.string(h.t.XW3vjo) : h.NW.string(h.t.i4daNj)
                        }),
                        (0, n.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                b
                                    ? (0, n.jsx)(l.zxk, {
                                          color: l.zxk.Colors.BRAND,
                                          onClick: function () {
                                              g(), x(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE);
                                          },
                                          fullWidth: !0,
                                          children: h.NW.string(h.t['+2/AhI'])
                                      })
                                    : R
                                      ? (0, n.jsx)(l.zxk, {
                                            color: l.zxk.Colors.BRAND,
                                            onClick: function () {
                                                x(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), a.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2 }), g();
                                            },
                                            fullWidth: !0,
                                            children: h.NW.string(h.t['9D+zGR'])
                                        })
                                      : (0, n.jsx)(l.zxk, {
                                            color: l.zxk.Colors.BRAND,
                                            onClick: () => {
                                                (0, i.Z)(I.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                            },
                                            fullWidth: !0,
                                            children: h.NW.string(h.t.hvVgAQ)
                                        }),
                                (0, n.jsx)(l.zxk, {
                                    color: l.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        g(), x(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: h.NW.string(h.t.bmbHPD)
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: b
                                        ? h.NW.format(h.t['3HvI8P'], {
                                              handleOnHelpUrlHook: () => {
                                                  s.Z.openUrl(I.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), x(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                                              }
                                          })
                                        : h.NW.format(h.t.Ge0HUl, {
                                              handleFalsePositiveHook: () => {
                                                  g(),
                                                      x(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                      (0, l.ZDy)(async () => {
                                                          let { default: e } = await r(788679);
                                                          return (r) =>
                                                              (0, n.jsx)(
                                                                  e,
                                                                  (function (e) {
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
                                                                  })(
                                                                      {
                                                                          channelId: t,
                                                                          messageId: C
                                                                      },
                                                                      r
                                                                  )
                                                              );
                                                      }),
                                                      x(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
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
