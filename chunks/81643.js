n.d(t, {
    F5: () => v,
    Jm: () => h,
    L5: () => p,
    WD: () => E,
    l6: () => g,
    pY: () => m,
    sf: () => _
}),
    n(301563),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(570140),
    a = n(911969),
    s = n(110924),
    l = n(375954),
    c = n(594174),
    u = n(168107),
    d = n(352138),
    f = n(981631);
function _() {
    let e = c.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== a.F$.VERIFIED_ADULT;
}
function p() {
    let e = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== a.F$.VERIFIED_ADULT;
}
function h() {
    let e = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === a.F$.VERIFIED_TEEN;
}
function m(e, t) {
    let n = l.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== f.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function g() {
    let e = (0, i.e7)([c.default], () => c.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== a.F$.UNVERIFIED;
}
function E(e) {
    let [t, n] = r.useState(!1),
        a = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        { current: s } = r.useRef(null == a ? void 0 : a.ageVerificationStatus),
        l = r.useCallback(() => {
            o.Z.dispatch({
                type: 'CLOSE_AGE_VERIFICATION_MODAL',
                status: s
            });
        }, [s]);
    return {
        loading: t,
        initiateAgeVerification: r.useCallback(async () => {
            n(!0);
            try {
                let t = await (0, d.K)();
                o.Z.dispatch({ type: 'INITIATE_AGE_VERIFICATION' }),
                    u.Z.showAgeVerification({
                        webviewUrl: t.verification_webview_url,
                        onComplete: e,
                        onClose: l
                    });
            } catch (e) {
            } finally {
                n(!1);
            }
        }, [e, l])
    };
}
function v(e) {
    let t = (0, i.e7)([c.default], () => {
            var e;
            return null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, s.Z)(t);
    r.useEffect(() => {
        null != n && null != t && n !== t && e();
    }, [e, t, n]);
}
