n.d(t, { I: () => m });
var r = n(951288);
n(647438);
var i = n(168107),
    a = n(480916),
    o = n(81643),
    s = n(925513),
    l = n(880257),
    c = n(907995),
    u = n(63063),
    d = n(128064),
    f = n(484710),
    _ = n(388032);
function p() {
    let e = (0, s.v6)(),
        t = () => {
            window.open(u.Z.getArticleURL(e), "_blank");
        };
    return (0, r.jsx)(c.f, {
        label: _.t.EUo0ys,
        labelHook: t,
        noticeType: f.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function h() {
    let e = () => {
        i.Z.showAgeVerificationGetStartedModal(a.cU.CONTENT_AND_SOCIAL_NOTICE);
    };
    return (0, r.jsx)(c.f, {
        label: _.t.OX4ybm,
        labelHook: e,
        noticeType: f.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function m() {
    var e;
    let t = null == (e = (0, l.Z)()) || e,
        n = (0, o.l6)();
    return (0, d.pY)("ContentAndSocialNotice") && !n ? (0, r.jsx)(h, {}) : t ? null : (0, r.jsx)(p, {});
}
