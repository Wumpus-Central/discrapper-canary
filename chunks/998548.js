n.d(t, { Ev: () => T, Ow: () => E, Xj: () => N, aK: () => S, m3: () => C });
var i = n(627968),
    s = n(64700),
    l = n(687123),
    a = n(397927),
    r = n(935649),
    o = n(847599),
    d = n(36149),
    c = n(444802),
    u = n(207560),
    _ = n(558001),
    m = n(866945),
    g = n(840387),
    A = n(933297),
    x = n(975571),
    h = n(835002),
    p = n(985018);
function T() {
    let e = (0, c.WX)();
    return (0, i.jsx)(m.e, {
        label: p.t.EUo0yj,
        labelHook: () => {
            window.open(x.A.getArticleURL(e), "_blank");
        },
        noticeType: h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function E() {
    return (0, i.jsx)(m.e, {
        label: p.t.OX4ybh,
        labelHook: () => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE });
        },
        noticeType: h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function S() {
    let e = (0, g.Z)(),
        t = (0, c.WX)(),
        n = s.useCallback(() => {
            window.open(x.A.getArticleURL(t), "_blank"),
                (0, _.N)(h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.YX.LEARN_MORE);
        }, [t]),
        l = s.useCallback(() => {
            (0, _.N)(h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (e)
            return {
                type: A.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: l,
                useText: () =>
                    p.intl.format(p.t.EUo0yj, { hook: (e, t) => (0, i.jsx)(a.MzZ, { onClick: n, children: e }, t) }),
            };
    }, [n, e, l]);
}
function C() {
    let e = (0, u.SJ)(),
        t = (0, d.b8)(),
        n = e && !t,
        l = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.YX.LEARN_MORE);
        }, []),
        c = s.useCallback(() => {
            (0, _.N)(h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.YX.VIEWED);
        }, []);
    return s.useMemo(() => {
        if (n)
            return {
                type: A.lT.INLINE_NOTICE,
                noticeType: "info",
                trackView: c,
                useText: () =>
                    p.intl.format(p.t.OX4ybh, { hook: (e, t) => (0, i.jsx)(a.MzZ, { onClick: l, children: e }, t) }),
            };
    }, [l, n, c]);
}
function f() {
    let e = (0, c.WX)();
    s.useEffect(() => {
        (0, _.N)(h.YA.AGE_CONFIRMATION_NOTICE, h.YX.VIEWED);
    }, []);
    let t = s.useCallback(() => {
            window.open(x.A.getArticleURL(e), "_blank"), (0, _.N)(h.YA.AGE_CONFIRMATION_NOTICE, h.YX.LEARN_MORE);
        }, [e]),
        n = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE }),
                (0, _.N)(h.YA.AGE_CONFIRMATION_NOTICE, h.YX.CONFIRM_AGE);
        }, []);
    return (0, i.jsx)(a.po8, {
        messageType: a.YCn.INFO,
        action: (0, i.jsx)(a.QWc, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: p.intl.string(p.t.FDSSia),
            onClick: n,
        }),
        children: p.intl.format(p.t.mFgsfg, { hook: (e, n) => (0, i.jsx)(a.MzZ, { onClick: t, children: e }, n) }),
    });
}
function N() {
    let e = (0, u.aX)(l.t.REACTIVE_CHECK),
        t = (0, d.b8)();
    return s.useMemo(() => {
        if (e && !t) return { type: A.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: f };
    }, [e, t]);
}
