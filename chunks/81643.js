n.d(t, {
    F5: () => y,
    Jm: () => g,
    L5: () => m,
    WD: () => b,
    l6: () => v,
    pY: () => E,
    sf: () => h
}),
    n(301563),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(570140),
    a = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(375954),
    u = n(594174),
    d = n(168107),
    f = n(352138),
    _ = n(981631),
    p = n(484710);
function h() {
    let e = u.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== a.F$.VERIFIED_ADULT;
}
function m() {
    let e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== a.F$.VERIFIED_ADULT;
}
function g() {
    let e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === a.F$.VERIFIED_TEEN;
}
function E(e, t) {
    let n = c.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== _.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function v() {
    let e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== a.F$.UNVERIFIED;
}
function b(e) {
    let [t, n] = r.useState(!1),
        a = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        { current: s } = r.useRef(null == a ? void 0 : a.ageVerificationStatus),
        c = r.useCallback(() => {
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
                let t = await (0, f.K)();
                o.Z.dispatch({ type: 'INITIATE_AGE_VERIFICATION' }),
                    d.Z.showAgeVerification({
                        webviewUrl: t.verification_webview_url,
                        onComplete: e,
                        onClose: c
                    });
            } catch (e) {
                l.Z.showFailedToast(p.w.TIGGER_PAWTECT_ERROR);
            } finally {
                n(!1);
            }
        }, [e, c])
    };
}
function y(e) {
    let t = (0, i.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, s.Z)(t);
    r.useEffect(() => {
        null != n && null != t && n !== t && e();
    }, [e, t, n]);
}
