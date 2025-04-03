n.d(t, { Z: () => O }), n(47120), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(773603);
var r = n(200651),
    i = n(192379),
    o = n(593473),
    a = n(756647),
    l = n(442837),
    s = n(544891),
    c = n(433517),
    u = n(481060),
    d = n(570140),
    p = n(893776),
    g = n(314897),
    h = n(626135),
    f = n(70956),
    m = n(970648),
    _ = n(981631),
    b = n(388032),
    x = n(493148);
let N = 'mweb_handoff_nonce',
    v = 'mweb_handoff_nonce_expiration',
    E = +f.Z.Millis.MINUTE,
    I = new Set(['nonce_missing', 'nonce_expired', 'handoff_exchange']),
    j = new Set(['deep_link_failed']),
    S = () => {
        c.K.remove(N), c.K.remove(v);
    },
    O = () => {
        let e = (0, l.e7)([g.default], () => g.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, o.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            O = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f &&
                e !== f &&
                d.Z.dispatch({
                    type: 'FINGERPRINT',
                    fingerprint: f
                });
        }, [f, e]);
        let [C, y] = i.useState(null),
            T = i.useCallback(
                (e) => {
                    y(e),
                        h.default.track(
                            _.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(O)
                            },
                            { fingerprint: O }
                        );
                },
                [y, O]
            ),
            P = c.K.get(N);
        if (
            ('null' === n && null === C && T('deep_link_failed'),
            null != n && 'null' !== n && null == P && null === C && T('nonce_missing'),
            i.useEffect(() => {
                if (null != P) {
                    let e = c.K.get(v);
                    (null == e || Date.now() >= e) && (T('nonce_expired'), S());
                }
            }, [P, T]),
            i.useEffect(() => {
                null != n &&
                    'null' !== n &&
                    null != P &&
                    null == C &&
                    s.tn
                        .post({
                            url: _.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: P,
                                handoff_token: n
                            },
                            rejectWithError: !0
                        })
                        .then((e) => p.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            h.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                                source: _.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(O)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete('handoff_token'), t.delete('fingerprint'), (e.search = t.toString()), window.history.pushState(null, '', e);
                        })
                        .catch(() => {
                            T('handoff_exchange');
                        })
                        .finally(() => {
                            S();
                        });
            }, [n, P, C, O, T]),
            null == O)
        )
            return null;
        let A =
            null == C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [b.NW.string(b.t.uJ1Jsb), (0, r.jsx)('br', {}), b.NW.string(b.t.GHVWAg)]
                  })
                : j.has(C)
                  ? b.NW.string(b.t.EPt55u)
                  : I.has(C)
                    ? b.NW.string(b.t.g87kTk)
                    : void 0;
        return null != C && j.has(C)
            ? (0, r.jsx)('div', {
                  className: x.errorContainer,
                  children: (0, r.jsx)(u.Text, {
                      color: 'interactive-normal',
                      variant: 'text-sm/semibold',
                      children: A
                  })
              })
            : (0, r.jsxs)('div', {
                  className: x.container,
                  children: [
                      (0, r.jsx)(u.Text, {
                          variant: 'text-sm/semibold',
                          children: A
                      }),
                      (0, r.jsx)(u.zxk, {
                          color: u.zxk.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = m.Z.generateNonce();
                              c.K.set(N, e), c.K.set(v, Date.now() + E);
                              let t = new URL(_.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete('fingerprint'), n.delete('handoff_token');
                              let r = new URLSearchParams();
                              r.set('redirect', encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set('key', e),
                                  r.set('fingerprint', O),
                                  (t.search = r.toString()),
                                  h.default.track(
                                      _.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(O),
                                          source: 'mobile_web_handoff',
                                          destination: _.x0X
                                      },
                                      {
                                          fingerprint: O,
                                          flush: !0
                                      }
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, r.jsx)(u.Text, {
                              className: x.buttonText,
                              variant: 'text-sm/semibold',
                              children: b.NW.string(b.t['NcC75+'])
                          })
                      })
                  ]
              });
    };
