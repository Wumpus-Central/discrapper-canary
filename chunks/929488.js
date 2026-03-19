n.d(t, { A: () => v }), n(321073);
var r = n(627968),
    a = n(64700),
    i = n(435769),
    c = n(3745),
    o = n(835245),
    s = n(731738),
    p = n(319400),
    d = n(831062),
    l = n(954571),
    h = n(577015),
    u = n(354949),
    f = n(652215);
let y = new Set([
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
                captchaService: t = p.MS.RECAPTCHA,
                sitekey: n,
                rqdata: v,
                onRender: m,
                onVerify: C,
                onError: A,
                onOpen: E,
                onClose: b,
                onChalExpired: R,
                size: _,
                userflow: g,
                ...w
            } = e,
            x = a.useRef(null),
            k = (0, o.A)(),
            [S, O] = a.useState(!1),
            I = a.useCallback(
                (e) => {
                    l.default.track(f.HAw.CAPTCHA_EVENT, {
                        captcha_event_name: e,
                        captcha_service: t,
                        sitekey: n,
                        captcha_flow_key: k,
                    });
                },
                [k, t, n],
            ),
            L = a.useCallback(
                (e, n) => {
                    let r = [`event_name:${e}`, `captcha_service:${t}`];
                    null != n && r.push(`error_code:${n}`), d.A.increment({ name: s.K.CAPTCHA_EVENT, tags: r });
                },
                [t],
            ),
            P = a.useCallback(() => {
                t === p.MS.HCAPTCHA &&
                    (null != v && "" !== v && null != x.current && x.current?.setData({ rqdata: v }),
                    "invisible" === _ && null != x.current && x.current?.execute());
            }, [v, x, _, t]),
            j = a.useCallback(() => {
                S || (I("initial-load"), L("initial-load"), O(!0)), P();
            }, [L, S, I, P]);
        a.useEffect(() => {
            P();
        }, [P]),
            a.useEffect(() => {
                j();
            }, [j]);
        let T = a.useCallback(
                (e) => {
                    I("error"), L("error", null != e && y.has(e) ? e : "unknown"), P(), A?.();
                },
                [I, L, P, A],
            ),
            D = a.useCallback(
                (e) => {
                    I("verify"), L("verify"), C(e);
                },
                [L, C, I],
            ),
            M = a.useCallback(() => {
                I("render"), (0, h.emitCaptchaDistributionMetric)(g), m?.();
            }, [m, I, g]),
            N = a.useCallback(() => {
                I("open"), L("open"), (0, h.emitCaptchaDistributionMetric)(g), E?.();
            }, [L, E, I, g]),
            V = a.useCallback(() => {
                I("close"), L("cancel"), b?.(), P();
            }, [b, I, L, P]),
            H = a.useCallback(() => {
                I("chal-expire"), L("chal-expire"), R?.();
            }, [R, I, L]);
        return ((null == n || "" === n) && (n = f._Ak), t === p.MS.RECAPTCHA)
            ? (0, r.jsx)(c.A, { ...w, onLoad: j, onRender: M, onVerify: D, onError: T, sitekey: n })
            : t === p.MS.RECAPTCHA_ENTERPRISE
              ? (0, r.jsx)(u.d, { ...w, onLoad: j, onRender: M, onVerify: D, onError: T, sitekey: n, action: g })
              : t === p.MS.HCAPTCHA
                ? (0, r.jsx)(i.A, {
                      ref: x,
                      ...w,
                      sitekey: n,
                      onLoad: j,
                      onError: T,
                      onVerify: D,
                      onChalExpired: H,
                      onOpen: N,
                      onClose: V,
                      size: _,
                      reCaptchaCompat: !1,
                  })
                : (0, r.jsx)(c.A, { ...w, sitekey: n, onLoad: j, onRender: M, onVerify: D, onError: T });
    };
