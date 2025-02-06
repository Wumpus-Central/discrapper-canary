n.d(t, { Z: () => S }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(593473),
    a = n(756647),
    o = n(442837),
    s = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(570140),
    h = n(893776),
    _ = n(314897),
    g = n(626135),
    p = n(70956),
    m = n(970648),
    f = n(981631),
    x = n(388032),
    E = n(924469);
let I = 'mweb_handoff_nonce',
    v = 'mweb_handoff_nonce_expiration',
    N = 1 * p.Z.Millis.MINUTE,
    b = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    C = new Set(['deep_link_failed']),
    T = () => {
        c.K.remove(I), c.K.remove(v);
    },
    S = () => {
        let e = (0, o.e7)([_.default], () => _.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            p = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            S = null != p ? p : null !== e ? e : void 0;
        r.useEffect(() => {
            null !== p &&
                e !== p &&
                u.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: p
                });
        }, [p, e]);
        let [A, Z] = r.useState(null),
            j = r.useCallback(
                (e) => {
                    Z(e),
                        g.default.track(
                            f.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(S)
                            },
                            { fingerprint: S }
                        );
                },
                [Z, S]
            ),
            R = c.K.get(I);
        if (
            ('null' === n && null === A && j('deep_link_failed'),
            null != n && 'null' !== n && null == R && null === A && j('nonce_missing'),
            r.useEffect(() => {
                if (null != R) {
                    let e = c.K.get(v);
                    (null == e || Date.now() >= e) && (j('nonce_expired'), T());
                }
            }, [R, j]),
            r.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != R &&
                    null == A &&
                    s.tn
                        .post({
                            url: f.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: R,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => h.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(f.rMx.LOGIN_SUCCESSFUL, {
                                source: f.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(S)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            j('handoff_exchange');
                        })
                        .finally(() => {
                            T();
                        });
            }, [n, R, A, S, j]),
            null == S)
        )
            return null;
        let L =
            null == A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [x.intl.string(x.t.uJ1Jsb), (0, i.jsx)('br', {}), x.intl.string(x.t.GHVWAg)]
                  })
                : C.has(A)
                  ? x.intl.string(x.t.EPt55u)
                  : b.has(A)
                    ? x.intl.string(x.t.g87kTk)
                    : void 0;
        return null != A && C.has(A)
            ? (0, i.jsx)('div', {
                  className: E.errorContainer,
                  children: (0, i.jsx)(d.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: L
                  })
              })
            : (0, i.jsxs)('div', {
                  className: E.container,
                  children: [
                      (0, i.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: L
                      }),
                      (0, i.jsx)(d.zxk, {
                          color: d.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = m.Z.generateNonce();
                              c.K.set(I, e), c.K.set(v, Date.now() + N);
                              let t = new URL(f.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let i = new URLSearchParams();
                              i.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set('key', e),
                                  i.set('fingerprint', S),
                                  (t.search = i.toString()),
                                  g.default.track(
                                      f.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(S),
                                          source: 'mobile_web_handoff',
                                          destination: f.x0X
                                      },
                                      {
                                          fingerprint: S,
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
