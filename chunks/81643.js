n.d(t, {
    Jm: () => _,
    L5: () => f,
    WD: () => m,
    WN: () => h,
    l6: () => g,
    sf: () => d
}),
    n(301563),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(911969),
    a = n(375954),
    s = n(594174),
    l = n(168107),
    c = n(352138),
    u = n(981631);
function d() {
    let e = s.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function f() {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function _() {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function p(e, t) {
    let n = a.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== u.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function h(e, t) {
    return f() && p(e, t);
}
function g() {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED;
}
function m(e) {
    let [t, n] = r.useState(!1);
    return {
        loading: t,
        initiateAgeVerification: r.useCallback(async () => {
            n(!0);
            try {
                let t = await (0, c.K)();
                l.Z.showAgeVerification({
                    webviewUrl: t.verification_webview_url,
                    onComplete: e
                });
            } catch (e) {
            } finally {
                n(!1);
            }
        }, [e])
    };
}
