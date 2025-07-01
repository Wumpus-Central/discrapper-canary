(n.d(t, { Z: () => S }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542));
var r = n(255367),
    i = n(73800),
    l = n(593473),
    s = n(756647),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(893776),
    p = n(314897),
    g = n(626135),
    m = n(70956),
    f = n(970648),
    _ = n(981631),
    x = n(388032),
    b = n(493148);
let E = 'mweb_handoff_nonce',
    v = 'mweb_handoff_nonce_expiration',
    I = +m.Z.Millis.MINUTE,
    j = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    O = new Set(['deep_link_failed']),
    y = () => {
        (c.K.remove(E), c.K.remove(v));
    },
    S = () => {
        let e = (0, a.e7)([p.default], () => p.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            m = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            S = null != m ? m : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== m &&
                e !== m &&
                d.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: m
                });
        }, [m, e]);
        let [N, C] = i.useState(null),
            A = i.useCallback(
                (e) => {
                    (C(e),
                        g.default.track(
                            _.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, s.K)(S)
                            },
                            { fingerprint: S }
                        ));
                },
                [C, S]
            ),
            T = c.K.get(E);
        if (
            ('null' === n && null === N && A('deep_link_failed'),
            null != n && 'null' !== n && null == T && null === N && A('nonce_missing'),
            i.useEffect(() => {
                if (null != T) {
                    let e = c.K.get(v);
                    (null == e || Date.now() >= e) && (A('nonce_expired'), y());
                }
            }, [T, A]),
            i.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != T &&
                    null == N &&
                    o.tn
                        .post({
                            url: _.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: T,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => h.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                                source: _.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, s.K)(S)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            (t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e));
                        })
                        .catch(() => {
                            A('handoff_exchange');
                        })
                        .finally(() => {
                            y();
                        });
            }, [n, T, N, S, A]),
            null == S)
        )
            return null;
        let P =
            null == N
                ? (0, r.jsxs)(r.Fragment, {
                      children: [x.intl.string(x.t.uJ1Jsb), (0, r.jsx)('br', {}), x.intl.string(x.t.GHVWAg)]
                  })
                : O.has(N)
                  ? x.intl.string(x.t.EPt55u)
                  : j.has(N)
                    ? x.intl.string(x.t.g87kTk)
                    : void 0;
        return null != N && O.has(N)
            ? (0, r.jsx)('div', {
                  className: b.errorContainer,
                  children: (0, r.jsx)(u.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: P
                  })
              })
            : (0, r.jsxs)('div', {
                  className: b.container,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: 'text-sm/semibold',
                          children: P
                      }),
                      (0, r.jsx)(u.zxk, {
                          color: u.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = f.Z.generateNonce();
                              (c.K.set(E, e), c.K.set(v, Date.now() + I));
                              let t = new URL(_.x0X),
                                  n = new URLSearchParams(window.location.search);
                              (n.delete('fingerprint'), n.delete('handoff_token'));
                              let r = new URLSearchParams();
                              (r.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set('key', e),
                                  r.set('fingerprint', S),
                                  (t.search = r.toString()),
                                  g.default.track(
                                      _.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, s.K)(S),
                                          source: 'mobile_web_handoff',
                                          destination: _.x0X
                                      },
                                      {
                                          fingerprint: S,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString()));
                          },
                          children: (0, r.jsx)(u.Text, {
                              className: b.buttonText,
                              variant: 'text-sm/semibold',
                              children: x.intl.string(x.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
