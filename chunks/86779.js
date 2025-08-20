n.d(t, { Z: () => S }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    s = n(756647),
    o = n(442837),
    a = n(544891),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    h = n(570140),
    p = n(893776),
    m = n(314897),
    g = n(626135),
    f = n(70956),
    _ = n(970648),
    x = n(981631),
    E = n(388032),
    v = n(78224);
let j = "mweb_handoff_nonce",
    b = "mweb_handoff_nonce_expiration",
    I = +f.Z.Millis.MINUTE,
    O = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    N = new Set(["deep_link_failed"]),
    y = () => {
        c.K.remove(j), c.K.remove(b);
    },
    S = () => {
        let e = (0, o.e7)([m.default], () => m.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            S = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f &&
                e !== f &&
                h.Z.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: f,
                });
        }, [f, e]);
        let [C, Z] = i.useState(null),
            A = i.useCallback(
                (e) => {
                    Z(e),
                        g.default.track(
                            x.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, s.K)(S),
                            },
                            { fingerprint: S },
                        );
                },
                [Z, S],
            ),
            T = c.K.get(j);
        if (
            ("null" === n && null === C && A("deep_link_failed"),
            null != n && "null" !== n && null == T && null === C && A("nonce_missing"),
            i.useEffect(() => {
                if (null != T) {
                    let e = c.K.get(b);
                    (null == e || Date.now() >= e) && (A("nonce_expired"), y());
                }
            }, [T, A]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != T &&
                    null == C &&
                    a.tn
                        .post({
                            url: x.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: T,
                                handoff_token: n,
                            },
                            rejectWithError: !0,
                        })
                        .then((e) => p.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            g.default.track(x.rMx.LOGIN_SUCCESSFUL, {
                                source: x.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, s.K)(S),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            A("handoff_exchange");
                        })
                        .finally(() => {
                            y();
                        });
            }, [n, T, C, S, A]),
            null == S)
        )
            return null;
        let P =
            null == C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [E.intl.string(E.t.uJ1Jsb), (0, r.jsx)("br", {}), E.intl.string(E.t.GHVWAg)],
                  })
                : N.has(C)
                  ? E.intl.string(E.t.EPt55u)
                  : O.has(C)
                    ? E.intl.string(E.t.g87kTk)
                    : void 0;
        return null != C && N.has(C)
            ? (0, r.jsx)("div", {
                  className: v.errorContainer,
                  children: (0, r.jsx)(d.Text, {
                      color: "interactive-normal",
                      variant: "text-sm/semibold",
                      children: P,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: v.container,
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-sm/semibold",
                          children: P,
                      }),
                      (0, r.jsx)(u.zx, {
                          color: u.zx.Colors.BRAND_INVERTED,
                          onClick: () => {
                              let e = _.Z.generateNonce();
                              c.K.set(j, e), c.K.set(b, Date.now() + I);
                              let t = new URL(x.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", S),
                                  (t.search = r.toString()),
                                  g.default.track(
                                      x.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, s.K)(S),
                                          source: "mobile_web_handoff",
                                          destination: x.x0X,
                                      },
                                      {
                                          fingerprint: S,
                                          flush: !0,
                                      },
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, r.jsx)(d.Text, {
                              className: v.buttonText,
                              variant: "text-sm/semibold",
                              children: E.intl.string(E.t["NcC75+"]),
                          }),
                      }),
                  ],
              });
    };
