n.d(t, { Z: () => N }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(54381),
    i = n(473749),
    s = n(593473),
    l = n(756647),
    a = n(442837),
    o = n(544891),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    h = n(570140),
    g = n(893776),
    p = n(314897),
    m = n(626135),
    f = n(70956),
    _ = n(970648),
    x = n(981631),
    E = n(388032),
    v = n(78224);
let b = "mweb_handoff_nonce",
    j = "mweb_handoff_nonce_expiration",
    I = +f.Z.Millis.MINUTE,
    y = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    S = new Set(["deep_link_failed"]),
    O = () => {
        c.K.remove(b), c.K.remove(j);
    },
    N = () => {
        let e = (0, a.e7)([p.default], () => p.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, s.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            N = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f &&
                e !== f &&
                h.Z.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: f,
                });
        }, [f, e]);
        let [C, T] = i.useState(null),
            A = i.useCallback(
                (e) => {
                    T(e),
                        m.default.track(
                            x.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, l.K)(N),
                            },
                            { fingerprint: N },
                        );
                },
                [T, N],
            ),
            Z = c.K.get(b);
        if (
            ("null" === n && null === C && A("deep_link_failed"),
            null != n && "null" !== n && null == Z && null === C && A("nonce_missing"),
            i.useEffect(() => {
                if (null != Z) {
                    let e = c.K.get(j);
                    (null == e || Date.now() >= e) && (A("nonce_expired"), O());
                }
            }, [Z, A]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != Z &&
                    null == C &&
                    o.tn
                        .post({
                            url: x.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: Z,
                                handoff_token: n,
                            },
                            rejectWithError: !0,
                        })
                        .then((e) => g.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            m.default.track(x.rMx.LOGIN_SUCCESSFUL, {
                                source: x.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.K)(N),
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
                            O();
                        });
            }, [n, Z, C, N, A]),
            null == N)
        )
            return null;
        let P =
            null == C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [E.intl.string(E.t.uJ1JsY), (0, r.jsx)("br", {}), E.intl.string(E.t.GHVWAs)],
                  })
                : S.has(C)
                  ? E.intl.string(E.t.EPt55r)
                  : y.has(C)
                    ? E.intl.string(E.t.g87kTp)
                    : void 0;
        return null != C && S.has(C)
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
                              c.K.set(b, e), c.K.set(j, Date.now() + I);
                              let t = new URL(x.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", N),
                                  (t.search = r.toString()),
                                  m.default.track(
                                      x.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, l.K)(N),
                                          source: "mobile_web_handoff",
                                          destination: x.x0X,
                                      },
                                      {
                                          fingerprint: N,
                                          flush: !0,
                                      },
                                  ),
                                  (window.location.href = t.toString());
                          },
                          children: (0, r.jsx)(d.Text, {
                              className: v.buttonText,
                              variant: "text-sm/semibold",
                              children: E.intl.string(E.t.NcC759),
                          }),
                      }),
                  ],
              });
    };
