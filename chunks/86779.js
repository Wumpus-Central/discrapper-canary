n.d(t, { Z: () => S }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(200651),
    i = n(192379),
    s = n(593473),
    l = n(756647),
    o = n(442837),
    a = n(544891),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(893776),
    p = n(314897),
    g = n(626135),
    f = n(70956),
    m = n(970648),
    _ = n(981631),
    N = n(388032),
    x = n(493148);
let b = 'mweb_handoff_nonce',
    E = 'mweb_handoff_nonce_expiration',
    v = +f.Z.Millis.MINUTE,
    j = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    I = new Set(['deep_link_failed']),
    O = () => {
        c.K.remove(b), c.K.remove(E);
    },
    S = () => {
        let e = (0, o.e7)([p.default], () => p.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, s.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            S = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f &&
                e !== f &&
                d.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: f
                });
        }, [f, e]);
        let [y, C] = i.useState(null),
            P = i.useCallback(
                (e) => {
                    C(e),
                        g.default.track(
                            _.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, l.K)(S)
                            },
                            { fingerprint: S }
                        );
                },
                [C, S]
            ),
            A = c.K.get(b);
        if (
            ('null' === n && null === y && P('deep_link_failed'),
            null != n && 'null' !== n && null == A && null === y && P('nonce_missing'),
            i.useEffect(() => {
                if (null != A) {
                    let e = c.K.get(E);
                    (null == e || Date.now() >= e) && (P('nonce_expired'), O());
                }
            }, [A, P]),
            i.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != A &&
                    null == y &&
                    a.tn
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
                            g.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                                source: _.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.K)(S)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            P('handoff_exchange');
                        })
                        .finally(() => {
                            O();
                        });
            }, [n, A, y, S, P]),
            null == S)
        )
            return null;
        let T =
            null == y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [N.NW.string(N.t.uJ1Jsb), (0, r.jsx)('br', {}), N.NW.string(N.t.GHVWAg)]
                  })
                : I.has(y)
                  ? N.NW.string(N.t.EPt55u)
                  : j.has(y)
                    ? N.NW.string(N.t.g87kTk)
                    : void 0;
        return null != y && I.has(y)
            ? (0, r.jsx)('div', {
                  className: x.errorContainer,
                  children: (0, r.jsx)(u.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: T
                  })
              })
            : (0, r.jsxs)('div', {
                  className: x.container,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: 'text-sm/semibold',
                          children: T
                      }),
                      (0, r.jsx)(u.zxk, {
                          color: u.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = m.Z.generateNonce();
                              c.K.set(b, e), c.K.set(E, Date.now() + v);
                              let t = new URL(_.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let r = new URLSearchParams();
                              r.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set('key', e),
                                  r.set('fingerprint', S),
                                  (t.search = r.toString()),
                                  g.default.track(
                                      _.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, l.K)(S),
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
                              className: x.buttonText,
                              variant: 'text-sm/semibold',
                              children: N.NW.string(N.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
