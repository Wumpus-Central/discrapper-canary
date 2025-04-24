n.d(t, { Z: () => N }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(200651),
    i = n(192379),
    l = n(593473),
    s = n(756647),
    o = n(442837),
    a = n(544891),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    h = n(893776),
    g = n(314897),
    p = n(626135),
    f = n(70956),
    m = n(970648),
    _ = n(981631),
    x = n(388032),
    E = n(493148);
let b = 'mweb_handoff_nonce',
    v = 'mweb_handoff_nonce_expiration',
    j = +f.Z.Millis.MINUTE,
    I = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    O = new Set(['deep_link_failed']),
    S = () => {
        c.K.remove(b), c.K.remove(v);
    },
    N = () => {
        let e = (0, o.e7)([g.default], () => g.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            N = null != f ? f : null !== e ? e : void 0;
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
                        p.default.track(
                            _.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, s.K)(N)
                            },
                            { fingerprint: N }
                        );
                },
                [C, N]
            ),
            Z = c.K.get(b);
        if (
            ('null' === n && null === y && P('deep_link_failed'),
            null != n && 'null' !== n && null == Z && null === y && P('nonce_missing'),
            i.useEffect(() => {
                if (null != Z) {
                    let e = c.K.get(v);
                    (null == e || Date.now() >= e) && (P('nonce_expired'), S());
                }
            }, [Z, P]),
            i.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != Z &&
                    null == y &&
                    a.tn
                        .post({
                            url: _.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: Z,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => h.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            p.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                                source: _.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, s.K)(N)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            P('handoff_exchange');
                        })
                        .finally(() => {
                            S();
                        });
            }, [n, Z, y, N, P]),
            null == N)
        )
            return null;
        let A =
            null == y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [x.intl.string(x.t.uJ1Jsb), (0, r.jsx)('br', {}), x.intl.string(x.t.GHVWAg)]
                  })
                : O.has(y)
                  ? x.intl.string(x.t.EPt55u)
                  : I.has(y)
                    ? x.intl.string(x.t.g87kTk)
                    : void 0;
        return null != y && O.has(y)
            ? (0, r.jsx)('div', {
                  className: E.errorContainer,
                  children: (0, r.jsx)(u.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: A
                  })
              })
            : (0, r.jsxs)('div', {
                  className: E.container,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: 'text-sm/semibold',
                          children: A
                      }),
                      (0, r.jsx)(u.zxk, {
                          color: u.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = m.Z.generateNonce();
                              c.K.set(b, e), c.K.set(v, Date.now() + j);
                              let t = new URL(_.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let r = new URLSearchParams();
                              r.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set('key', e),
                                  r.set('fingerprint', N),
                                  (t.search = r.toString()),
                                  p.default.track(
                                      _.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, s.K)(N),
                                          source: 'mobile_web_handoff',
                                          destination: _.x0X
                                      },
                                      {
                                          fingerprint: N,
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
