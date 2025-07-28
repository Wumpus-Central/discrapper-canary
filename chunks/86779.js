(n.d(t, { Z: () => N }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542));
var r = n(255367),
    i = n(73800),
    l = n(593473),
    s = n(756647),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    h = n(570140),
    p = n(893776),
    g = n(314897),
    m = n(626135),
    f = n(70956),
    _ = n(970648),
    x = n(981631),
    b = n(388032),
    E = n(493148);
let v = 'mweb_handoff_nonce',
    I = 'mweb_handoff_nonce_expiration',
    j = +f.Z.Millis.MINUTE,
    O = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    S = new Set(['deep_link_failed']),
    y = () => {
        (c.K.remove(v), c.K.remove(I));
    },
    N = () => {
        let e = (0, a.e7)([g.default], () => g.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            N = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f &&
                e !== f &&
                h.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: f
                });
        }, [f, e]);
        let [C, A] = i.useState(null),
            T = i.useCallback(
                (e) => {
                    (A(e),
                        m.default.track(
                            x.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, s.K)(N)
                            },
                            { fingerprint: N }
                        ));
                },
                [A, N]
            ),
            P = c.K.get(v);
        if (
            ('null' === n && null === C && T('deep_link_failed'),
            null != n && 'null' !== n && null == P && null === C && T('nonce_missing'),
            i.useEffect(() => {
                if (null != P) {
                    let e = c.K.get(I);
                    (null == e || Date.now() >= e) && (T('nonce_expired'), y());
                }
            }, [P, T]),
            i.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != P &&
                    null == C &&
                    o.tn
                        .post({
                            url: x.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: P,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => p.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            m.default.track(x.rMx.LOGIN_SUCCESSFUL, {
                                source: x.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, s.K)(N)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            (t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e));
                        })
                        .catch(() => {
                            T('handoff_exchange');
                        })
                        .finally(() => {
                            y();
                        });
            }, [n, P, C, N, T]),
            null == N)
        )
            return null;
        let Z =
            null == C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [b.intl.string(b.t.uJ1Jsb), (0, r.jsx)('br', {}), b.intl.string(b.t.GHVWAg)]
                  })
                : S.has(C)
                  ? b.intl.string(b.t.EPt55u)
                  : O.has(C)
                    ? b.intl.string(b.t.g87kTk)
                    : void 0;
        return null != C && S.has(C)
            ? (0, r.jsx)('div', {
                  className: E.errorContainer,
                  children: (0, r.jsx)(d.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: Z
                  })
              })
            : (0, r.jsxs)('div', {
                  className: E.container,
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: 'text-sm/semibold',
                          children: Z
                      }),
                      (0, r.jsx)(u.zx, {
                          color: u.zx.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = _.Z.generateNonce();
                              (c.K.set(v, e), c.K.set(I, Date.now() + j));
                              let t = new URL(x.x0X),
                                  n = new URLSearchParams(window.location.search);
                              (n.delete('fingerprint'), n.delete('handoff_token'));
                              let r = new URLSearchParams();
                              (r.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set('key', e),
                                  r.set('fingerprint', N),
                                  (t.search = r.toString()),
                                  m.default.track(
                                      x.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, s.K)(N),
                                          source: 'mobile_web_handoff',
                                          destination: x.x0X
                                      },
                                      {
                                          fingerprint: N,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString()));
                          },
                          children: (0, r.jsx)(d.Text, {
                              className: E.buttonText,
                              variant: 'text-sm/semibold',
                              children: b.intl.string(b.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
