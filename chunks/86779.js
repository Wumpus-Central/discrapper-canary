n.d(t, { Z: () => T }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(773603);
var i = n(200651),
    r = n(192379),
    a = n(593473),
    l = n(756647),
    o = n(442837),
    s = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(570140),
    h = n(893776),
    _ = n(314897),
    m = n(626135),
    g = n(70956),
    p = n(970648),
    f = n(981631),
    x = n(388032),
    E = n(435695);
let I = 'mweb_handoff_nonce',
    v = 'mweb_handoff_nonce_expiration',
    C = 1 * g.Z.Millis.MINUTE,
    N = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    b = new Set(['deep_link_failed']),
    S = () => {
        c.K.remove(I), c.K.remove(v);
    },
    T = () => {
        let e = (0, o.e7)([_.default], () => _.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, a.parse)(window.location.search),
            g = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            T = null != g ? g : null !== e ? e : void 0;
        r.useEffect(() => {
            null !== g &&
                e !== g &&
                u.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: g
                });
        }, [g, e]);
        let [A, R] = r.useState(null),
            Z = r.useCallback(
                (e) => {
                    R(e),
                        m.default.track(
                            f.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, l.K)(T)
                            },
                            { fingerprint: T }
                        );
                },
                [R, T]
            ),
            j = c.K.get(I);
        if (
            ('null' === n && null === A && Z('deep_link_failed'),
            null != n && 'null' !== n && null == j && null === A && Z('nonce_missing'),
            r.useEffect(() => {
                if (null != j) {
                    let e = c.K.get(v);
                    (null == e || Date.now() >= e) && (Z('nonce_expired'), S());
                }
            }, [j, Z]),
            r.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != j &&
                    null == A &&
                    s.tn
                        .post({
                            url: f.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: j,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => h.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            m.default.track(f.rMx.LOGIN_SUCCESSFUL, {
                                source: f.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.K)(T)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            Z('handoff_exchange');
                        })
                        .finally(() => {
                            S();
                        });
            }, [n, j, A, T, Z]),
            null == T)
        )
            return null;
        let O =
            null == A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [x.intl.string(x.t.uJ1Jsb), (0, i.jsx)('br', {}), x.intl.string(x.t.GHVWAg)]
                  })
                : b.has(A)
                  ? x.intl.string(x.t.EPt55u)
                  : N.has(A)
                    ? x.intl.string(x.t.g87kTk)
                    : void 0;
        return null != A && b.has(A)
            ? (0, i.jsx)('div', {
                  className: E.errorContainer,
                  children: (0, i.jsx)(d.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: O
                  })
              })
            : (0, i.jsxs)('div', {
                  className: E.container,
                  children: [
                      (0, i.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: O
                      }),
                      (0, i.jsx)(d.zxk, {
                          color: d.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = p.Z.generateNonce();
                              c.K.set(I, e), c.K.set(v, Date.now() + C);
                              let t = new URL(f.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let i = new URLSearchParams();
                              i.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set('key', e),
                                  i.set('fingerprint', T),
                                  (t.search = i.toString()),
                                  m.default.track(
                                      f.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, l.K)(T),
                                          source: 'mobile_web_handoff',
                                          destination: f.x0X
                                      },
                                      {
                                          fingerprint: T,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, i.jsx)(d.Text, {
                              className: E.buttonText,
                              variant: 'text-sm/semibold',
                              children: x.intl.string(x.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
