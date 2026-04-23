n.d(t, { Xj: () => b, aK: () => T, m3: () => S });
var i = n(627968),
    s = n(64700),
    l = n(687123),
    a = n(349288),
    r = n(512950),
    o = n(123292),
    d = n(935649),
    u = n(847599),
    c = n(36149),
    g = n(444802),
    m = n(207560),
    _ = n(558001);
n(866945);
var A = n(840387),
    h = n(933297),
    p = n(975571),
    x = n(835002),
    E = n(985018);
function T() {
    let e = (0, A.Z)(),
        t = (0, g.WX)(),
        n = s.useCallback(() => {
            window.open(p.A.getArticleURL(t), "_blank"),
                (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.LEARN_MORE);
        }, [t]),
        l = s.useCallback(() => {
            (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: l,
                useText: () =>
                    E.intl.format(E.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(a.Anchor, { onClick: n, children: e }, t) }),
            };
    }, [n, e, l]);
}
function S() {
    let e = (0, m.SJ)(),
        t = (0, c.b8)(),
        n = e && !t,
        l = s.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.LEARN_MORE);
        }, []),
        r = s.useCallback(() => {
            (0, _.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (n)
            return {
                type: h.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: r,
                useText: () =>
                    E.intl.format(E.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(a.Anchor, { onClick: l, children: e }, t) }),
            };
    }, [l, n, r]);
}
function f() {
    let e = (0, g.WX)();
    s.useEffect(() => {
        (0, _.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.VIEWED);
    }, []);
    let t = s.useCallback(() => {
            window.open(p.A.getArticleURL(e), "_blank"), (0, _.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.LEARN_MORE);
        }, [e]),
        n = s.useCallback(() => {
            d.A.showAgeVerificationGetStartedModal({ entryPoint: u.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.CONFIRM_AGE);
        }, []);
    return (0, i.jsx)(r.p, {
        messageType: r.Y.INFO,
        action: (0, i.jsx)(o.Q, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: E.intl.string(E.t.FDSSia),
            onClick: n,
        }),
        children: E.intl.format(E.t.mFgsfg, { hook: (e, n) => (0, i.jsx)(a.Anchor, { onClick: t, children: e }, n) }),
    });
}
function b() {
    let e = (0, m.aX)(l.t.REACTIVE_CHECK),
        t = (0, c.b8)();
    return s.useMemo(() => {
        if (e && !t) return { type: h.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: f };
    }, [e, t]);
}
