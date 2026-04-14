n.d(t, { A: () => v }), n(321073);
var r = n(627968),
    a = n(64700),
    i = n(435769),
    c = n(3745),
    o = n(835245),
    s = n(507981),
    d = n(731738),
    l = n(319400),
    p = n(831062),
    h = n(954571),
    u = n(577015),
    f = n(354949),
    y = n(652215);
let m = new Set([
        "rate-limited",
        "network-error",
        "invalid-data",
        "challenge-error",
        "challenge-closed",
        "challenge-expired",
        "missing-captcha",
        "invalid-captcha-id",
        "internal-error",
        "script-error",
    ]),
    v = (e) => {
        let {
                captchaService: t = l.MS.RECAPTCHA,
                sitekey: n,
                rqdata: v,
                onRender: C,
                onVerify: E,
                onError: b,
                onOpen: A,
                onClose: w,
                onChalExpired: g,
                size: R,
                userflow: _,
                ...x
            } = e,
            k = a.useRef(null),
            S = (0, o.A)(),
            [O, I] = a.useState(!1),
            L = a.useCallback(
                (e) => {
                    h.default.track(y.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: t,
                        sitekey: n,
                        captcha_flow_key: S,
                    });
                },
                [S, t, n],
            ),
            j = a.useCallback(
                (e, n) => {
                    let r = [`event_name:${e}`, `captcha_service:${t}`];
                    null != n && r.push(`error_code:${n}`), p.A.increment({ name: d.K.CAPTCHA_EVENT, tags: r });
                },
                [t],
            ),
            P = a.useCallback(() => {
                t === l.MS.HCAPTCHA &&
                    (null != v && "" !== v && null != k.current && k.current?.setData({ rqdata: v }),
                    "invisible" === R && null != k.current && k.current?.execute());
            }, [v, k, R, t]),
            T = a.useCallback(() => {
                O || (L("initial-load"), j("initial-load"), I(!0)), P();
            }, [j, O, L, P]);
        a.useEffect(() => {
            P();
        }, [P]),
            a.useEffect(() => {
                T();
            }, [T]);
        let D = a.useCallback(
                (e) => {
                    L("error"), j("error", null != e && m.has(e) ? e : "unknown"), P(), b?.();
                },
                [L, j, P, b],
            ),
            M = a.useCallback(
                (e) => {
                    L("verify"), j("verify"), E(e);
                },
                [j, E, L],
            ),
            N = a.useCallback(() => {
                L("render"), (0, u.emitCaptchaDistributionMetric)(_), C?.();
            }, [C, L, _]),
            V = a.useCallback(() => {
                L("open"), j("open"), (0, u.emitCaptchaDistributionMetric)(_), A?.();
            }, [j, A, L, _]),
            H = a.useCallback(() => {
                L("close"), j("cancel"), w?.(), P();
            }, [w, L, j, P]),
            z = a.useCallback(() => {
                L("chal-expire"), j("chal-expire"), g?.();
            }, [g, L, j]);
        return ((null == n || "" === n) && (n = y._Ak), t === l.MS.RECAPTCHA)
            ? (0, r.jsx)(c.A, { ...x, onLoad: T, onRender: N, onVerify: M, onError: D, sitekey: n })
            : t === l.MS.RECAPTCHA_ENTERPRISE
              ? (0, r.jsx)(f.d, { ...x, onLoad: T, onRender: N, onVerify: M, onError: D, sitekey: n, action: _ })
              : t === l.MS.HCAPTCHA
                ? (0, r.jsx)(i.A, {
                      ref: k,
                      ...x,
                      sitekey: n,
                      onLoad: T,
                      onError: D,
                      onVerify: M,
                      onChalExpired: z,
                      onOpen: V,
                      onClose: H,
                      size: R,
                      reCaptchaCompat: !1,
                  })
                : t === l.MS.TURNSTILE
                  ? (0, r.jsx)(s.A, {
                        sitekey: n,
                        theme: x.theme,
                        size: R,
                        onLoad: T,
                        onVerify: M,
                        onError: D,
                        onExpire: z,
                    })
                  : (0, r.jsx)(c.A, { ...x, sitekey: n, onLoad: T, onRender: N, onVerify: M, onError: D });
    };
