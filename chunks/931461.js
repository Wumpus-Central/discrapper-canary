n.d(t, { I: () => f });
var i = n(255367);
n(73800);
var r = n(168107),
    s = n(480916),
    a = n(81643),
    l = n(925513),
    o = n(880257),
    c = n(907995),
    d = n(63063),
    u = n(128064),
    m = n(484710),
    p = n(388032);
function g() {
    let e = (0, l.v6)();
    return (0, i.jsx)(c.f, {
        label: p.t.EUo0ys,
        labelHook: () => {
            window.open(d.Z.getArticleURL(e), "_blank");
        },
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function h() {
    return (0, i.jsx)(c.f, {
        label: p.t.OX4ybm,
        labelHook: () => {
            r.Z.showAgeVerificationGetStartedModal(s.cU.CONTENT_AND_SOCIAL_NOTICE);
        },
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function f() {
    var e;
    let t = null == (e = (0, o.Z)()) || e,
        n = (0, a.l6)();
    return (0, u.pY)("ContentAndSocialNotice") && !n ? (0, i.jsx)(h, {}) : t ? null : (0, i.jsx)(g, {});
}
