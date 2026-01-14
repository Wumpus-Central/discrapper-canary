n.d(t, {
    cs: () => g,
    dL: () => y,
    dZ: () => b,
    jF: () => E,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(168107),
    s = n(480916),
    l = n(925513),
    c = n(711703),
    u = n(907995),
    d = n(981312),
    f = n(970013),
    p = n(63063),
    _ = n(128064),
    m = n(484710),
    h = n(388032);
function g() {
    let e = (0, l.v6)(),
        t = () => {
            window.open(p.Z.getArticleURL(e), "_blank");
        };
    return (0, r.jsx)(u.f, {
        label: h.t.EUo0yj,
        labelHook: t,
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function E() {
    let e = () => {
        o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.CONTENT_AND_SOCIAL_NOTICE });
    };
    return (0, r.jsx)(u.f, {
        label: h.t.OX4ybh,
        labelHook: e,
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function b() {
    let e = (0, d.U)(),
        t = (0, l.v6)(),
        n = i.useCallback(() => {
            window.open(p.Z.getArticleURL(t), "_blank"),
                (0, c.l)(m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.up.LEARN_MORE);
        }, [t]),
        o = i.useCallback(() => {
            (0, c.l)(m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.up.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: f.v.INLINE_NOTICE,
                noticeType: "info",
                trackView: o,
                useText: () =>
                    h.intl.format(h.t.EUo0yj, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                a.eee,
                                {
                                    onClick: n,
                                    children: e,
                                },
                                t,
                            ),
                    }),
            };
    }, [n, e, o]);
}
function y() {
    let e = (0, _.pY)("useContentAndSocialAgeVerificationInlineNotice"),
        t = i.useCallback(() => {
            o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.CONTENT_AND_SOCIAL_NOTICE }),
                (0, c.l)(m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.up.LEARN_MORE);
        }, []),
        n = i.useCallback(() => {
            (0, c.l)(m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.up.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: f.v.INLINE_NOTICE,
                noticeType: "info",
                trackView: n,
                useText: () =>
                    h.intl.format(h.t.OX4ybh, {
                        hook: (e, n) =>
                            (0, r.jsx)(
                                a.eee,
                                {
                                    onClick: t,
                                    children: e,
                                },
                                n,
                            ),
                    }),
            };
    }, [t, e, n]);
}
