(n.d(t, {
    AY: () => C,
    F5: () => N,
    Jm: () => b,
    L0: () => v,
    L5: () => E,
    M$: () => y,
    WD: () => A,
    g0: () => O,
    kJ: () => T,
    l6: () => S,
    pY: () => I,
    sf: () => g
}),
    n(35282),
    n(388685));
var r = n(73800),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(314897),
    u = n(375954),
    d = n(594174),
    f = n(168107),
    _ = n(352138),
    p = n(469775),
    h = n(981631),
    m = n(484710);
function g() {
    let e = d.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function E() {
    let e = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function b() {
    let e = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function y() {
    let e = d.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var O = (function (e) {
        return ((e.CTAS = 'ctas'), (e.CONTENT_TYPE = 'content_type'), e);
    })({}),
    v = (function (e) {
        return ((e.VERIFIED_ADULT = 'verified_adult'), (e.VERIFIED_TEEN = 'verified_teen'), (e.ERROR = 'error'), e);
    })({});
function I(e, t) {
    let n = u.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== h.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function T() {
    let e = d.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING;
}
function S() {
    let e = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING;
}
function A(e) {
    let [t, n] = r.useState(!1),
        o = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        { current: s } = r.useRef(null == o ? void 0 : o.ageVerificationStatus),
        c = r.useCallback(() => {
            a.Z.dispatch({
                type: 'CLOSE_AGE_VERIFICATION_MODAL',
                status: s
            });
        }, [s]);
    return {
        loading: t,
        initiateAgeVerification: r.useCallback(
            async (t) => {
                n(!0);
                try {
                    a.Z.dispatch({ type: 'INITIATE_AGE_VERIFICATION' });
                    let n = await (0, _.K)();
                    f.Z.showAgeVerification({
                        webviewUrl: n.verification_webview_url,
                        onComplete: e,
                        onClose: c,
                        onCancel: c,
                        entryPoint: t
                    });
                } catch (e) {
                    (l.Z.showFailedToast(m.wQ.TIGGER_PAWTECT_ERROR), c());
                } finally {
                    n(!1);
                }
            },
            [e, c]
        )
    };
}
function N(e) {
    let t = (0, i.e7)([d.default], () => {
            var e;
            return null == (e = d.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, s.Z)(t),
        a = (0, i.e7)([c.default], () => null != c.default.getSuspendedUserToken()),
        o = (0, i.e7)([c.default], () => c.default.isAuthenticated()),
        l = null != n && null != t && n !== t,
        u = !a && !o;
    r.useEffect(() => {
        (l || u) && e();
    }, [e, l, u]);
}
function C(e) {
    return null != e && p.dx.has(e);
}
