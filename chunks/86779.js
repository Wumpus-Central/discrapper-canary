n.d(t, { Z: () => S }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(593473),
    a = n(756647),
    o = n(442837),
    s = n(544891),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(893776),
    p = n(314897),
    m = n(626135),
    g = n(70956),
    f = n(970648),
    _ = n(981631),
    x = n(388032),
    E = n(493148);
let b = 'mweb_handoff_nonce',
    I = 'mweb_handoff_nonce_expiration',
    v = +g.Z.Millis.MINUTE,
    O = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    N = new Set(['deep_link_failed']),
    j = () => {
        c.K.remove(b), c.K.remove(I);
    },
    S = () => {
        let e = (0, o.e7)([p.default], () => p.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            g = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            S = null != g ? g : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== g &&
                e !== g &&
                d.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: g
                });
        }, [g, e]);
        let [y, C] = i.useState(null),
            T = i.useCallback(
                (e) => {
                    C(e),
                        m.default.track(
                            _.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(S)
                            },
                            { fingerprint: S }
                        );
                },
                [C, S]
            ),
            A = c.K.get(b);
        if (
            ('null' === n && null === y && T('deep_link_failed'),
            null != n && 'null' !== n && null == A && null === y && T('nonce_missing'),
            i.useEffect(() => {
                if (null != A) {
                    let e = c.K.get(I);
                    (null == e || Date.now() >= e) && (T('nonce_expired'), j());
                }
            }, [A, T]),
            i.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != A &&
                    null == y &&
                    s.tn
                        .post({
                            url: _.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: A,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => h.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            m.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                                source: _.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(S)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            T('handoff_exchange');
                        })
                        .finally(() => {
                            j();
                        });
            }, [n, A, y, S, T]),
            null == S)
        )
            return null;
        let P =
            null == y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [x.intl.string(x.t.uJ1Jsb), (0, r.jsx)('br', {}), x.intl.string(x.t.GHVWAg)]
                  })
                : N.has(y)
                  ? x.intl.string(x.t.EPt55u)
                  : O.has(y)
                    ? x.intl.string(x.t.g87kTk)
                    : void 0;
        return null != y && N.has(y)
            ? (0, r.jsx)('div', {
                  className: E.errorContainer,
                  children: (0, r.jsx)(u.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: P
                  })
              })
            : (0, r.jsxs)('div', {
                  className: E.container,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: 'text-sm/semibold',
                          children: P
                      }),
                      (0, r.jsx)(u.zxk, {
                          color: u.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = f.Z.generateNonce();
                              c.K.set(b, e), c.K.set(I, Date.now() + v);
                              let t = new URL(_.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let r = new URLSearchParams();
                              r.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set('key', e),
                                  r.set('fingerprint', S),
                                  (t.search = r.toString()),
                                  m.default.track(
                                      _.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(S),
                                          source: 'mobile_web_handoff',
                                          destination: _.x0X
                                      },
                                      {
                                          fingerprint: S,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, r.jsx)(u.Text, {
                              className: E.buttonText,
                              variant: 'text-sm/semibold',
                              children: x.intl.string(x.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
