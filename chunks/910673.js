r.d(t, { default: () => C });
var n = r(200651),
    l = r(192379),
    o = r(481060),
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
    m = r(618386),
    A = r(444812);
let C = (e) => {
    let { channelId: t, messageId: C, transitionState: N, onClose: g } = e,
        R = (0, _.Z)(),
        L = (0, c.Jm)(),
        b = (0, E.m8)(),
        x = l.useMemo(() => L && b, [L, b]),
        v = l.useCallback(
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
        (0, n.jsxs)(o.Y0X, {
            transitionState: N,
            'aria-label': h.NW.string(h.t.xdm3XF),
            children: [
                (0, n.jsx)(o.xBx, {
                    separator: !1,
                    className: m.modalHeader,
                    children: (0, n.jsx)('img', {
                        src: A,
                        alt: h.NW.string(h.t.id3fND),
                        className: m.headerImg
                    })
                }),
                (0, n.jsxs)(o.hzk, {
                    className: m.modalBody,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            variant: 'heading-lg/bold',
                            className: m.modalInteriorHeader,
                            children: h.NW.string(h.t.sGW77u)
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: x ? h.NW.string(h.t.H2kKw8) : R ? h.NW.string(h.t.XW3vjo) : h.NW.string(h.t.i4daNj)
                        }),
                        (0, n.jsxs)('div', {
                            className: m.buttonContainer,
                            children: [
                                x
                                    ? (0, n.jsx)(o.zxk, {
                                          color: o.zxk.Colors.BRAND,
                                          onClick: function () {
                                              g(), v(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE);
                                          },
                                          fullWidth: !0,
                                          children: h.NW.string(h.t['+2/AhI'])
                                      })
                                    : R
                                      ? (0, n.jsx)(o.zxk, {
                                            color: o.zxk.Colors.BRAND,
                                            onClick: function () {
                                                v(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), a.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2 }), g();
                                            },
                                            fullWidth: !0,
                                            children: h.NW.string(h.t['9D+zGR'])
                                        })
                                      : (0, n.jsx)(o.zxk, {
                                            color: o.zxk.Colors.BRAND,
                                            onClick: () => {
                                                (0, i.Z)(I.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                            },
                                            fullWidth: !0,
                                            children: h.NW.string(h.t.hvVgAQ)
                                        }),
                                (0, n.jsx)(o.zxk, {
                                    color: o.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        g(), v(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: h.NW.string(h.t.bmbHPD)
                                }),
                                (0, n.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: x
                                        ? h.NW.format(h.t['3HvI8P'], {
                                              handleOnHelpUrlHook: () => {
                                                  s.Z.openUrl(I.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_UK_AND_AUS_ONLY_LEARN_MORE)), v(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                                              }
                                          })
                                        : h.NW.format(h.t.Ge0HUl, {
                                              handleFalsePositiveHook: () => {
                                                  g(),
                                                      v(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                      (0, o.ZDy)(async () => {
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
                                                      v(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
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
