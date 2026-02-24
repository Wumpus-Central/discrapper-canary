n.d(t, { A: () => y });
var a = n(627968),
    r = n(64700),
    i = n(435769),
    c = n(3745),
    o = n(835245),
    s = n(731738),
    p = n(319400),
    d = n(831062),
    h = n(954571),
    l = n(577015),
    u = n(354949),
    f = n(652215);
let y = (e) => {
    let {
            captchaService: t = p.MS.RECAPTCHA,
            sitekey: n,
            rqdata: y,
            onRender: v,
            onVerify: m,
            onError: C,
            onOpen: A,
            onClose: E,
            onChalExpired: b,
            size: R,
            userflow: _,
            ...g
        } = e,
        w = r.useRef(null),
        x = (0, o.A)(),
        [k, S] = r.useState(!1),
        O = r.useCallback(
            (e) => {
                h.default.track(f.HAw.CAPTCHA_EVENT, {
                    captcha_event_name: e,
                    captcha_service: t,
                    sitekey: n,
                    captcha_flow_key: x,
                });
            },
            [x, t, n],
        ),
        I = r.useCallback(
            (e) => {
                d.A.increment({ name: s.K.CAPTCHA_EVENT, tags: [`event_name:${e}`, `captcha_service:${t}`] });
            },
            [t],
        ),
        L = r.useCallback(() => {
            t === p.MS.HCAPTCHA &&
                (null != y && "" !== y && null != w.current && w.current?.setData({ rqdata: y }),
                "invisible" === R && null != w.current && w.current?.execute());
        }, [y, w, R, t]),
        P = r.useCallback(() => {
            k || (O("initial-load"), I("initial-load"), S(!0)), L();
        }, [I, k, O, L]);
    r.useEffect(() => {
        L();
    }, [L]),
        r.useEffect(() => {
            P();
        }, [P]);
    let j = r.useCallback(() => {
            O("error"), I("error"), L(), C?.();
        }, [O, I, L, C]),
        T = r.useCallback(
            (e) => {
                O("verify"), I("verify"), m(e);
            },
            [I, m, O],
        ),
        D = r.useCallback(() => {
            O("render"), (0, l.emitCaptchaDistributionMetric)(_), v?.();
        }, [v, O, _]),
        M = r.useCallback(() => {
            O("open"), I("open"), (0, l.emitCaptchaDistributionMetric)(_), A?.();
        }, [I, A, O, _]),
        N = r.useCallback(() => {
            O("close"), I("cancel"), E?.(), L();
        }, [E, O, I, L]),
        V = r.useCallback(() => {
            O("chal-expire"), I("chal-expire"), b?.();
        }, [b, O, I]);
    return ((null == n || "" === n) && (n = f._Ak), t === p.MS.RECAPTCHA)
        ? (0, a.jsx)(c.A, { ...g, onLoad: P, onRender: D, onVerify: T, onError: j, sitekey: n })
        : t === p.MS.RECAPTCHA_ENTERPRISE
          ? (0, a.jsx)(u.d, { ...g, onLoad: P, onRender: D, onVerify: T, onError: j, sitekey: n, action: _ })
          : t === p.MS.HCAPTCHA
            ? (0, a.jsx)(i.A, {
                  ref: w,
                  ...g,
                  sitekey: n,
                  onLoad: P,
                  onError: j,
                  onVerify: T,
                  onChalExpired: V,
                  onOpen: M,
                  onClose: N,
                  size: R,
                  reCaptchaCompat: !1,
              })
            : (0, a.jsx)(c.A, { ...g, sitekey: n, onLoad: P, onRender: D, onVerify: T, onError: j });
};
