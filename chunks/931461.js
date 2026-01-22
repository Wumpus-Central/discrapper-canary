n.d(t, {
    cs: () => E,
    dL: () => O,
    dZ: () => y,
    jF: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(168107),
    s = n(480916),
    l = n(925513),
    c = n(980945),
    u = n(711703),
    d = n(907995),
    f = n(981312),
    p = n(970013),
    _ = n(63063),
    h = n(312870),
    m = n(484710),
    g = n(388032);
function E() {
    let e = (0, l.v6)(),
        t = () => {
            window.open(_.Z.getArticleURL(e), "_blank");
        };
    return (0, r.jsx)(d.f, {
        label: g.t.EUo0yj,
        labelHook: t,
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function b() {
    let e = () => {
        o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.CONTENT_AND_SOCIAL_NOTICE });
    };
    return (0, r.jsx)(d.f, {
        label: g.t.OX4ybh,
        labelHook: e,
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function y() {
    let e = (0, f.U)(),
        t = (0, l.v6)(),
        n = i.useCallback(() => {
            window.open(_.Z.getArticleURL(t), "_blank"),
                (0, u.l)(m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.up.LEARN_MORE);
        }, [t]),
        o = i.useCallback(() => {
            (0, u.l)(m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, m.up.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (e)
            return {
                type: p.v.INLINE_NOTICE,
                noticeType: "info",
                trackView: o,
                useText: () =>
                    g.intl.format(g.t.EUo0yj, {
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
function O() {
    let e = (0, c.yx)(),
        t = (0, h.s)("useContentAndSocialAgeVerificationInlineNotice"),
        n = e || t,
        l = i.useCallback(() => {
            o.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.CONTENT_AND_SOCIAL_NOTICE }),
                (0, u.l)(m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.up.LEARN_MORE);
        }, []),
        d = i.useCallback(() => {
            (0, u.l)(m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, m.up.VIEWED);
        }, []);
    return i.useMemo(() => {
        if (n)
            return {
                type: p.v.INLINE_NOTICE,
                noticeType: "info",
                trackView: d,
                useText: () =>
                    g.intl.format(g.t.OX4ybh, {
                        hook: (e, t) =>
                            (0, r.jsx)(
                                a.eee,
                                {
                                    onClick: l,
                                    children: e,
                                },
                                t,
                            ),
                    }),
            };
    }, [l, n, d]);
}
