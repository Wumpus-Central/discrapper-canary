n.d(t, { Z: () => b }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(773603);
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
    m = n(70956),
    p = n(970648),
    f = n(981631),
    E = n(388032),
    x = n(375078);
let I = 'mweb_handoff_nonce',
    C = 'mweb_handoff_nonce_expiration',
    v = 1 * m.Z.Millis.MINUTE,
    N = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    S = new Set(['deep_link_failed']),
    T = () => {
        c.K.remove(I), c.K.remove(C);
    },
    b = () => {
        let e = (0, o.e7)([_.default], () => _.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            m = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            b = null != m ? m : null !== e ? e : void 0;
        r.useEffect(() => {
            null !== m &&
                e !== m &&
                u.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: m
                });
        }, [m, e]);
        let [A, R] = r.useState(null),
            Z = r.useCallback(
                (e) => {
                    R(e),
                        g.default.track(
                            f.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(b)
                            },
                            { fingerprint: b }
                        );
                },
                [R, b]
            ),
            O = c.K.get(I);
        if (
            ('null' === n && null === A && Z('deep_link_failed'),
            null != n && 'null' !== n && null == O && null === A && Z('nonce_missing'),
            r.useEffect(() => {
                if (null != O) {
                    let e = c.K.get(C);
                    (null == e || Date.now() >= e) && (Z('nonce_expired'), T());
                }
            }, [O, Z]),
            r.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != O &&
                    null == A &&
                    s.tn
                        .post({
                            url: f.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: O,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => h.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(f.rMx.LOGIN_SUCCESSFUL, {
                                source: f.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(b)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            Z('handoff_exchange');
                        })
                        .finally(() => {
                            T();
                        });
            }, [n, O, A, b, Z]),
            null == b)
        )
            return null;
        let j =
            null == A
                ? (0, i.jsxs)(i.Fragment, {
                      children: [E.intl.string(E.t.uJ1Jsb), (0, i.jsx)('br', {}), E.intl.string(E.t.GHVWAg)]
                  })
                : S.has(A)
                  ? E.intl.string(E.t.EPt55u)
                  : N.has(A)
                    ? E.intl.string(E.t.g87kTk)
                    : void 0;
        return null != A && S.has(A)
            ? (0, i.jsx)('div', {
                  className: x.errorContainer,
                  children: (0, i.jsx)(d.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: j
                  })
              })
            : (0, i.jsxs)('div', {
                  className: x.container,
                  children: [
                      (0, i.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: j
                      }),
                      (0, i.jsx)(d.zxk, {
                          color: d.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = p.Z.generateNonce();
                              c.K.set(I, e), c.K.set(C, Date.now() + v);
                              let t = new URL(f.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let i = new URLSearchParams();
                              i.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set('key', e),
                                  i.set('fingerprint', b),
                                  (t.search = i.toString()),
                                  g.default.track(
                                      f.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(b),
                                          source: 'mobile_web_handoff',
                                          destination: f.x0X
                                      },
                                      {
                                          fingerprint: b,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, i.jsx)(d.Text, {
                              className: x.buttonText,
                              variant: 'text-sm/semibold',
                              children: E.intl.string(E.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
