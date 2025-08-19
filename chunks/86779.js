n.d(t, { Z: () => S }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    a = n(756647),
    o = n(442837),
    s = n(544891),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    h = n(570140),
    p = n(893776),
    m = n(314897),
    f = n(626135),
    g = n(70956),
    _ = n(970648),
    x = n(981631),
    b = n(388032),
    v = n(78224);
let E = "mweb_handoff_nonce",
    j = "mweb_handoff_nonce_expiration",
    I = +g.Z.Millis.MINUTE,
    y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    O = new Set(["deep_link_failed"]),
    N = () => {
        c.K.remove(E), c.K.remove(j);
    },
    S = () => {
        let e = (0, o.e7)([m.default], () => m.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, l.parse)(window.location.search),
            g = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            S = null != g ? g : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== g &&
                e !== g &&
                h.Z.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: g,
                });
        }, [g, e]);
        let [C, T] = i.useState(null),
            A = i.useCallback(
                (e) => {
                    T(e),
                        f.default.track(
                            x.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(S),
                            },
                            { fingerprint: S },
                        );
                },
                [T, S],
            ),
            Z = c.K.get(E);
        if (
            ("null" === n && null === C && A("deep_link_failed"),
            null != n && "null" !== n && null == Z && null === C && A("nonce_missing"),
            i.useEffect(() => {
                if (null != Z) {
                    let e = c.K.get(j);
                    (null == e || Date.now() >= e) && (A("nonce_expired"), N());
                }
            }, [Z, A]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != Z &&
                    null == C &&
                    s.tn
                        .post({
                            url: x.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: Z,
                                handoff_token: n,
                            },
                            rejectWithError: !0,
                        })
                        .then((e) => p.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            f.default.track(x.rMx.LOGIN_SUCCESSFUL, {
                                source: x.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(S),
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
                            N();
                        });
            }, [n, Z, C, S, A]),
            null == S)
        )
            return null;
        let P =
            null == C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [b.intl.string(b.t.uJ1Jsb), (0, r.jsx)("br", {}), b.intl.string(b.t.GHVWAg)],
                  })
                : O.has(C)
                  ? b.intl.string(b.t.EPt55u)
                  : y.has(C)
                    ? b.intl.string(b.t.g87kTk)
                    : void 0;
        return null != C && O.has(C)
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
                              c.K.set(E, e), c.K.set(j, Date.now() + I);
                              let t = new URL(x.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", S),
                                  (t.search = r.toString()),
                                  f.default.track(
                                      x.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(S),
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
                              children: b.intl.string(b.t["NcC75+"]),
                          }),
                      }),
                  ],
              });
    };
