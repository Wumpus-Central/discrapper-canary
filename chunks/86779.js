n.d(t, { Z: () => C }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
var r = n(54381),
    i = n(473749),
    s = n(593473),
    a = n(756647),
    l = n(442837),
    o = n(544891),
    c = n(433517),
    u = n(755721),
    d = n(481060),
    h = n(570140),
    f = n(893776),
    g = n(314897),
    m = n(626135),
    p = n(70956),
    x = n(970648),
    _ = n(981631),
    E = n(388032),
    v = n(646030);
let b = "mweb_handoff_nonce",
    j = "mweb_handoff_nonce_expiration",
    I = +p.Z.Millis.MINUTE,
    N = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    y = new Set(["deep_link_failed"]),
    S = () => {
        c.K.remove(b), c.K.remove(j);
    },
    C = () => {
        let e = (0, l.e7)([g.default], () => g.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, s.parse)(window.location.search),
            p = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            C = null != p ? p : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== p &&
                e !== p &&
                h.Z.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: p,
                });
        }, [p, e]);
        let [T, O] = i.useState(null),
            A = i.useCallback(
                (e) => {
                    O(e),
                        m.default.track(
                            _.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, a.K)(C),
                            },
                            { fingerprint: C },
                        );
                },
                [O, C],
            ),
            Z = c.K.get(b);
        if (
            ("null" === n && null === T && A("deep_link_failed"),
            null != n && "null" !== n && null == Z && null === T && A("nonce_missing"),
            i.useEffect(() => {
                if (null != Z) {
                    let e = c.K.get(j);
                    (null == e || Date.now() >= e) && (A("nonce_expired"), S());
                }
            }, [Z, A]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != Z &&
                    null == T &&
                    o.tn
                        .post({
                            url: _.ANM.HANDOFF_EXCHANGE,
                            body: {
                                key: Z,
                                handoff_token: n,
                            },
                            rejectWithError: !0,
                        })
                        .then((e) => f.Z.loginToken(e.body.token, !1))
                        .then(() => {
                            m.default.track(_.rMx.LOGIN_SUCCESSFUL, {
                                source: _.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, a.K)(C),
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
                            S();
                        });
            }, [n, Z, T, C, A]),
            null == C)
        )
            return null;
        let P =
            null == T
                ? (0, r.jsxs)(r.Fragment, {
                      children: [E.intl.string(E.t.uJ1JsY), (0, r.jsx)("br", {}), E.intl.string(E.t.GHVWAs)],
                  })
                : y.has(T)
                  ? E.intl.string(E.t.EPt55r)
                  : N.has(T)
                    ? E.intl.string(E.t.g87kTp)
                    : void 0;
        return null != T && y.has(T)
            ? (0, r.jsx)("div", {
                  className: v.errorContainer,
                  children: (0, r.jsx)(d.Text, {
                      color: "interactive-text-default",
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
                              let e = x.Z.generateNonce();
                              c.K.set(b, e), c.K.set(j, Date.now() + I);
                              let t = new URL(_.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", C),
                                  (t.search = r.toString()),
                                  m.default.track(
                                      _.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, a.K)(C),
                                          source: "mobile_web_handoff",
                                          destination: _.x0X,
                                      },
                                      {
                                          fingerprint: C,
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
