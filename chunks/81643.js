(n.d(t, {
    AY: () => R,
    F5: () => C,
    Jm: () => y,
    L0: () => I,
    L5: () => b,
    M$: () => O,
    WD: () => N,
    g0: () => v,
    kJ: () => S,
    l6: () => A,
    pY: () => T,
    sf: () => E
}),
    n(35282),
    n(388685));
var r = n(73800),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(420846),
    u = n(314897),
    d = n(375954),
    _ = n(594174),
    f = n(168107),
    p = n(352138),
    h = n(469775),
    m = n(981631),
    g = n(484710);
function E() {
    let e = _.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function b() {
    let e = (0, i.e7)([_.default], () => _.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function y() {
    let e = (0, i.e7)([_.default], () => _.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function O() {
    let e = _.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var v = (function (e) {
        return ((e.CTAS = 'ctas'), (e.CONTENT_TYPE = 'content_type'), e);
    })({}),
    I = (function (e) {
        return ((e.VERIFIED_ADULT = 'verified_adult'), (e.VERIFIED_TEEN = 'verified_teen'), (e.ERROR = 'error'), e);
    })({});
function T(e, t) {
    let n = d.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== m.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function S() {
    let e = _.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING;
}
function A() {
    let e = (0, i.e7)([_.default], () => _.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING;
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, o] = r.useState(!1),
        s = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        { current: u } = r.useRef(null == s ? void 0 : s.ageVerificationStatus),
        d = r.useCallback(() => {
            (a.Z.dispatch({
                type: 'CLOSE_AGE_VERIFICATION_MODAL',
                status: u
            }),
                t ||
                    c.Z.maybeOpenAgeVerificationUserFeedback({
                        location: 'age_verification_intro_screen',
                        didStartVerification: !0
                    }));
        }, [u, t]);
    return {
        loading: n,
        initiateAgeVerification: r.useCallback(
            async (t) => {
                o(!0);
                try {
                    a.Z.dispatch({ type: 'INITIATE_AGE_VERIFICATION' });
                    let n = await (0, p.K)();
                    f.Z.showAgeVerification({
                        webviewUrl: n.verification_webview_url,
                        onComplete: e,
                        onClose: d,
                        onCancel: d,
                        entryPoint: t
                    });
                } catch (e) {
                    (l.Z.showFailedToast(g.wQ.TIGGER_PAWTECT_ERROR), d());
                } finally {
                    o(!1);
                }
            },
            [e, d]
        )
    };
}
function C(e) {
    let t = (0, i.e7)([_.default], () => {
            var e;
            return null == (e = _.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, s.Z)(t),
        a = (0, i.e7)([u.default], () => null != u.default.getSuspendedUserToken()),
        o = (0, i.e7)([u.default], () => u.default.isAuthenticated()),
        l = null != n && null != t && n !== t,
        c = !a && !o;
    r.useEffect(() => {
        (l || c) && e();
    }, [e, l, c]);
}
function R(e) {
    return null != e && h.dx.has(e);
}
