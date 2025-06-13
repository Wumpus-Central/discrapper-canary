n.d(e, { default: () => A });
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(230711),
    a = n(782568),
    s = n(168107),
    d = n(480916),
    c = n(81643),
    E = n(880257),
    _ = n(63063),
    u = n(247206),
    I = n(470734),
    f = n(981631),
    m = n(526761),
    C = n(388032),
    h = n(618386),
    g = n(444812);
let A = (t) => {
    let { channelId: e, messageId: A, transitionState: R, onClose: v } = t,
        L = (0, E.Z)(),
        x = (0, c.Jm)(),
        p = (0, u.m8)(),
        b = (0, I.pn)('SensitiveContentFilterSetting'),
        M = l.useMemo(() => x && p, [x, p]),
        T = l.useCallback(
            (t) => {
                (0, u.aP)({
                    action: t,
                    channelId: e,
                    messageId: A
                });
            },
            [e, A]
        );
    return (
        l.useEffect(() => {
            (0, u.aP)({
                action: u.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: e,
                messageId: A
            });
        }, [e, A]),
        (0, r.jsxs)(i.Y0X, {
            transitionState: R,
            'aria-label': C.intl.string(C.t.xdm3XF),
            parentComponent: 'ExplicitMediaLearnMoreModal',
            children: [
                (0, r.jsx)(i.xBx, {
                    separator: !1,
                    className: h.modalHeader,
                    children: (0, r.jsx)('img', {
                        src: g,
                        alt: C.intl.string(C.t.id3fND),
                        className: h.headerImg
                    })
                }),
                (0, r.jsxs)(i.hzk, {
                    className: h.modalBody,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-lg/bold',
                            className: h.modalInteriorHeader,
                            children: C.intl.string(C.t.sGW77u)
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (function () {
                                if (M) return C.intl.string(C.t.f3ARDQ);
                                let t = b ? C.intl.string(C.t.RUw0ZG) : C.intl.string(C.t.XW3vjo),
                                    e = b ? C.intl.string(C.t['E/oQYG']) : C.intl.string(C.t.i4daNj);
                                return L ? t : e;
                            })()
                        }),
                        (0, r.jsxs)('div', {
                            className: h.buttonContainer,
                            children: [
                                M
                                    ? (0, r.jsx)(i.zxk, {
                                          color: i.zxk.Colors.BRAND,
                                          onClick: function () {
                                              v(), T(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE);
                                          },
                                          fullWidth: !0,
                                          children: C.intl.string(C.t.KPGVWl)
                                      })
                                    : L
                                      ? (0, r.jsx)(i.zxk, {
                                            color: i.zxk.Colors.BRAND,
                                            onClick: function () {
                                                T(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), o.Z.open(f.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: m.FY.EXPLICIT_MEDIA_REDACTION_V2 }), v();
                                            },
                                            fullWidth: !0,
                                            children: C.intl.string(C.t['9D+zGR'])
                                        })
                                      : (0, r.jsx)(i.zxk, {
                                            color: i.zxk.Colors.BRAND,
                                            onClick: () => {
                                                (0, a.Z)(_.Z.getArticleURL(f.BhN.EXPLICIT_MEDIA_REDACTION));
                                            },
                                            fullWidth: !0,
                                            children: C.intl.string(C.t.hvVgAQ)
                                        }),
                                (0, r.jsx)(i.zxk, {
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: function () {
                                        v(), T(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: C.intl.string(C.t.bmbHPD)
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: M
                                        ? C.intl.format(C.t['TGqx+v'], {
                                              handleOnHelpUrlHook: () => {
                                                  s.Z.openUrl(_.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)), T(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE);
                                              }
                                          })
                                        : C.intl.format(C.t.Ge0HUl, {
                                              handleFalsePositiveHook: () => {
                                                  v(),
                                                      T(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                      (0, i.ZDy)(async () => {
                                                          let { default: t } = await n(788679);
                                                          return (n) =>
                                                              (0, r.jsx)(
                                                                  t,
                                                                  (function (t) {
                                                                      for (var e = 1; e < arguments.length; e++) {
                                                                          var n = null != arguments[e] ? arguments[e] : {},
                                                                              r = Object.keys(n);
                                                                          'function' == typeof Object.getOwnPropertySymbols &&
                                                                              (r = r.concat(
                                                                                  Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                                  })
                                                                              )),
                                                                              r.forEach(function (e) {
                                                                                  var r;
                                                                                  (r = n[e]),
                                                                                      e in t
                                                                                          ? Object.defineProperty(t, e, {
                                                                                                value: r,
                                                                                                enumerable: !0,
                                                                                                configurable: !0,
                                                                                                writable: !0
                                                                                            })
                                                                                          : (t[e] = r);
                                                                              });
                                                                      }
                                                                      return t;
                                                                  })(
                                                                      {
                                                                          channelId: e,
                                                                          messageId: A
                                                                      },
                                                                      n
                                                                  )
                                                              );
                                                      }),
                                                      T(u.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE);
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
