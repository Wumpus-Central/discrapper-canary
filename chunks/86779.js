n(47120), n(315314), n(610138), n(216116), n(78328), n(815648), n(773603);
var i,
    r,
    s = n(200651),
    l = n(192379),
    o = n(593473),
    a = n(756647),
    c = n(442837),
    d = n(544891),
    u = n(433517),
    h = n(481060),
    f = n(570140),
    g = n(893776),
    m = n(314897),
    p = n(626135),
    x = n(70956),
    _ = n(970648),
    E = n(981631),
    I = n(388032),
    v = n(924469);
let N = 'mweb_handoff_nonce',
    C = 'mweb_handoff_nonce_expiration',
    b = 1 * x.Z.Millis.MINUTE;
((r = i || (i = {})).NONCE_MISSING = 'nonce_missing'), (r.NONCE_EXPIRED = 'nonce_expired'), (r.NULL_HANDOFF_TOKEN = 'deep_link_failed'), (r.HANDOFF_EXCHANGE = 'handoff_exchange');
let T = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    Z = new Set(['deep_link_failed']),
    S = () => {
        u.K.remove(N), u.K.remove(C);
    };
t.Z = () => {
    let e = (0, c.e7)([m.default], () => m.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, o.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        r = null != i ? i : null !== e ? e : void 0;
    l.useEffect(() => {
        null !== i &&
            e !== i &&
            f.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: i
            });
    }, [i, e]);
    let [x, A] = l.useState(null),
        j = l.useCallback(
            (e) => {
                A(e),
                    p.default.track(
                        E.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                        {
                            reason: e,
                            fingerprint: (0, a.K)(r)
                        },
                        { fingerprint: r }
                    );
            },
            [A, r]
        ),
        R = u.K.get(N);
    if (
        ('null' === n && null === x && j('deep_link_failed'),
        null != n && 'null' !== n && null == R && null === x && j('nonce_missing'),
        l.useEffect(() => {
            if (null != R) {
                let e = u.K.get(C);
                (null == e || Date.now() >= e) && (j('nonce_expired'), S());
            }
        }, [R, j]),
        l.useEffect(() => {
            null != n &&
                'null' !== n &&
                null != R &&
                null == x &&
                d.tn
                    .post({
                        url: E.ANM.HANDOFF_EXCHANGE,
                        body: {
                            key: R,
                            handoff_token: n
                        },
                        rejectWithError: !0
                    })
                    .then((e) => g.Z.loginToken(e.body.token, !1))
                    .then(() => {
                        p.default.track(E.rMx.LOGIN_SUCCESSFUL, {
                            source: E.uRl.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, a.K)(r)
                        });
                        let e = new URL(window.location.href),
                            t = new URLSearchParams(e.search);
                        t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                    })
                    .catch(() => {
                        j('handoff_exchange');
                    })
                    .finally(() => {
                        S();
                    });
        }, [n, R, x, r, j]),
        null == r)
    )
        return null;
    let P = (() => {
        if (null == x)
            return (0, s.jsxs)(s.Fragment, {
                children: [I.intl.string(I.t.uJ1Jsb), (0, s.jsx)('br', {}), I.intl.string(I.t.GHVWAg)]
            });
        if (Z.has(x)) return I.intl.string(I.t.EPt55u);
        if (T.has(x)) return I.intl.string(I.t.g87kTk);
    })();
    return null != x && Z.has(x)
        ? (0, s.jsx)('div', {
              className: v.errorContainer,
              children: (0, s.jsx)(h.Text, {
                  color: 'interactive-normal',
                  variant: 'text-sm/semibold',
                  children: P
              })
          })
        : (0, s.jsxs)('div', {
              className: v.container,
              children: [
                  (0, s.jsx)(h.Text, {
                      variant: 'text-sm/semibold',
                      children: P
                  }),
                  (0, s.jsx)(h.Button, {
                      color: h.Button.Colors.BRAND_INVERTED,
                      onClick: () => {
                          let e = _.Z.generateNonce();
                          u.K.set(N, e), u.K.set(C, Date.now() + b);
                          let t = new URL(E.x0X),
                              n = new URLSearchParams(window.location.search);
                          n.delete('fingerprint'), n.delete('handoff_token');
                          let i = new URLSearchParams();
                          i.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                              i.set('key', e),
                              i.set('fingerprint', r),
                              (t.search = i.toString()),
                              p.default.track(
                                  E.rMx.DEEP_LINK_CLICKED,
                                  {
                                      fingerprint: (0, a.K)(r),
                                      source: 'mobile_web_handoff',
                                      destination: E.x0X
                                  },
                                  {
                                      fingerprint: r,
                                      flush: !0
                                  }
                              ),
                              (window.location.href = t.toString());
                      },
                      children: (0, s.jsx)(h.Text, {
                          className: v.buttonText,
                          variant: 'text-sm/semibold',
                          children: I.intl.string(I.t['NcC75+'])
                      })
                  })
              ]
          });
};
