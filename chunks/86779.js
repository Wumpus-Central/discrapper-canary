n.d(t, { Z: () => C }), n(388685), n(35282), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(457542);
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
    m = n(314897),
    p = n(626135),
    f = n(70956),
    _ = n(970648),
    x = n(981631),
    E = n(388032),
    v = n(78224);
let j = "mweb_handoff_nonce",
    b = "mweb_handoff_nonce_expiration",
    I = +f.Z.Millis.MINUTE,
    N = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    y = new Set(["deep_link_failed"]),
    S = () => {
        c.K.remove(j), c.K.remove(b);
    },
    C = () => {
        let e = (0, a.e7)([m.default], () => m.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, s.parse)(window.location.search),
            f = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            C = null != f ? f : null !== e ? e : void 0;
        i.useEffect(() => {
            null !== f &&
                e !== f &&
                h.Z.dispatch({
                    type: "FINGERPRINT",
                    fingerprint: f,
                });
        }, [f, e]);
        let [O, T] = i.useState(null),
            A = i.useCallback(
                (e) => {
                    T(e),
                        p.default.track(
                            x.rMx.MOBILE_WEB_HANDOFF_FAILURE,
                            {
                                reason: e,
                                fingerprint: (0, l.K)(C),
                            },
                            { fingerprint: C },
                        );
                },
                [T, C],
            ),
            Z = c.K.get(j);
        if (
            ("null" === n && null === O && A("deep_link_failed"),
            null != n && "null" !== n && null == Z && null === O && A("nonce_missing"),
            i.useEffect(() => {
                if (null != Z) {
                    let e = c.K.get(b);
                    (null == e || Date.now() >= e) && (A("nonce_expired"), S());
                }
            }, [Z, A]),
            i.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != Z &&
                    null == O &&
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
                            p.default.track(x.rMx.LOGIN_SUCCESSFUL, {
                                source: x.uRl.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, l.K)(C),
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
            }, [n, Z, O, C, A]),
            null == C)
        )
            return null;
        let P =
            null == O
                ? (0, r.jsxs)(r.Fragment, {
                      children: [E.intl.string(E.t.uJ1JsY), (0, r.jsx)("br", {}), E.intl.string(E.t.GHVWAs)],
                  })
                : y.has(O)
                  ? E.intl.string(E.t.EPt55r)
                  : N.has(O)
                    ? E.intl.string(E.t.g87kTp)
                    : void 0;
        return null != O && y.has(O)
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
                              let e = _.Z.generateNonce();
                              c.K.set(j, e), c.K.set(b, Date.now() + I);
                              let t = new URL(x.x0X),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let r = new URLSearchParams();
                              r.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  r.set("key", e),
                                  r.set("fingerprint", C),
                                  (t.search = r.toString()),
                                  p.default.track(
                                      x.rMx.DEEP_LINK_CLICKED,
                                      {
                                          fingerprint: (0, l.K)(C),
                                          source: "mobile_web_handoff",
                                          destination: x.x0X,
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
