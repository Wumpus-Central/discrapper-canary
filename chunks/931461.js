n.d(t, { I: () => v });
var r = n(951288);
n(647438);
var i = n(493683),
    a = n(168107),
    o = n(480916),
    s = n(81643),
    l = n(925513),
    c = n(915009),
    u = n(880257),
    d = n(631885),
    f = n(907995),
    _ = n(63063),
    p = n(128064),
    h = n(342386),
    m = n(484710),
    g = n(388032),
    E = n(345909);
function b() {
    let e = (0, l.v6)(),
        t = () => {
            window.open(_.Z.getArticleURL(e), "_blank");
        };
    return (0, r.jsx)(f.f, {
        label: g.t.EUo0ys,
        labelHook: t,
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
}
function y() {
    let e = () => {
        a.Z.showAgeVerificationGetStartedModal({ entryPoint: o.cU.CONTENT_AND_SOCIAL_NOTICE });
    };
    return (0, r.jsx)(f.f, {
        label: g.t.OX4ybm,
        labelHook: e,
        noticeType: m.nq.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
    });
}
function O() {
    let e = (0, d.ZM)(),
        t = () => {
            (0, h.default)(), i.Z.openPrivateChannel({ recipientIds: e });
        };
    return (0, r.jsx)(f.f, {
        label: E.default.i284fX,
        labelHook: t,
        noticeType: m.nq.CONTENT_AND_SOCIAL_PARENTAL_CONTROLS_NOTICE,
    });
}
function v() {
    var e;
    let t = null == (e = (0, u.Z)()) || e,
        n = (0, s.l6)(),
        i = (0, p.pY)("ContentAndSocialNotice");
    return (0, c.LN)() ? (0, r.jsx)(O, {}) : i && !n ? (0, r.jsx)(y, {}) : t ? null : (0, r.jsx)(b, {});
}
