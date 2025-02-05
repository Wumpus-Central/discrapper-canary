n.d(t, { Z: () => A }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(773603);
var i = n(200651),
    r = n(192379),
    l = n(593473),
    a = n(756647),
    o = n(442837),
    s = n(544891),
    c = n(433517),
    d = n(481060),
    u = n(570140),
    _ = n(893776),
    h = n(314897),
    g = n(626135),
    p = n(70956),
    m = n(970648),
    f = n(981631),
    E = n(388032),
    I = n(924469);
let x = 'mweb_handoff_nonce',
    C = 'mweb_handoff_nonce_expiration',
    N = 1 * p.Z.Millis.MINUTE,
    v = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    T = new Set(['deep_link_failed']),
    S = () => {
        c.K.remove(x), c.K.remove(C);
    },
    A = () => {
        let e = (0, o.e7)([h.default], () => h.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            p = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            A = null != p ? p : null !== e ? e : void 0;
        r.useEffect(() => {
            null !== p &&
                e !== p &&
                u.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: p
                });
        }, [p, e]);
        let [b, Z] = r.useState(null),
            R = r.useCallback(
                (e) => {
                    Z(e),
                        g.default.track(
                            f.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(A)
                            },
                            { fingerprint: A }
                        );
                },
                [Z, A]
            ),
            L = c.K.get(x);
        if (
            ('null' === n && null === b && R('deep_link_failed'),
            null != n && 'null' !== n && null == L && null === b && R('nonce_missing'),
            r.useEffect(() => {
                if (null != L) {
                    let e = c.K.get(C);
                    (null == e || Date.now() >= e) && (R('nonce_expired'), S());
                }
            }, [L, R]),
            r.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != L &&
                    null == b &&
                    s.tn
                        .post({
                            url: f.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: L,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => _.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(f.rMx.LOGIN_SUCCESSFUL, {
                                source: f.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(A)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            R('handoff_exchange');
                        })
                        .finally(() => {
                            S();
                        });
            }, [n, L, b, A, R]),
            null == A)
        )
            return null;
        let j =
            null == b
                ? (0, i.jsxs)(i.Fragment, {
                      children: [E.intl.string(E.t.uJ1Jsb), (0, i.jsx)('br', {}), E.intl.string(E.t.GHVWAg)]
                  })
                : T.has(b)
                  ? E.intl.string(E.t.EPt55u)
                  : v.has(b)
                    ? E.intl.string(E.t.g87kTk)
                    : void 0;
        return null != b && T.has(b)
            ? (0, i.jsx)('div', {
                  className: I.errorContainer,
                  children: (0, i.jsx)(d.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: j
                  })
              })
            : (0, i.jsxs)('div', {
                  className: I.container,
                  children: [
                      (0, i.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: j
                      }),
                      (0, i.jsx)(d.zxk, {
                          color: d.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = m.Z.generateNonce();
                              c.K.set(x, e), c.K.set(C, Date.now() + N);
                              let t = new URL(f.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let i = new URLSearchParams();
                              i.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set('key', e),
                                  i.set('fingerprint', A),
                                  (t.search = i.toString()),
                                  g.default.track(
                                      f.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(A),
                                          source: 'mobile_web_handoff',
                                          destination: f.x0X
                                      },
                                      {
                                          fingerprint: A,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, i.jsx)(d.Text, {
                              className: I.buttonText,
                              variant: 'text-sm/semibold',
                              children: E.intl.string(E.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
