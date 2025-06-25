n.d(t, {
    AY: () => N,
    F5: () => A,
    Jm: () => E,
    L0: () => O,
    L5: () => g,
    M$: () => b,
    WD: () => S,
    g0: () => y,
    kJ: () => I,
    l6: () => T,
    pY: () => v,
    sf: () => m
}),
    n(35282),
    n(388685);
var r = n(73800),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(375954),
    u = n(594174),
    d = n(168107),
    f = n(352138),
    _ = n(469775),
    p = n(981631),
    h = n(484710);
function m() {
    let e = u.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function g() {
    let e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function E() {
    let e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function b() {
    let e = u.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var y = (function (e) {
        return (e.CTAS = 'ctas'), (e.CONTENT_TYPE = 'content_type'), e;
    })({}),
    O = (function (e) {
        return (e.VERIFIED_ADULT = 'verified_adult'), (e.VERIFIED_TEEN = 'verified_teen'), (e.ERROR = 'error'), e;
    })({});
function v(e, t) {
    let n = c.Z.getMessage(e, t);
    if (null == n || null == n.embeds || 0 === n.embeds.length || null == n.embeds[0].fields || n.embeds[0].type !== p.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION) return !1;
    let r = n.embeds[0].fields.find((e) => 'ctas' === e.rawName);
    return null == r ? void 0 : r.rawValue.split(',').includes('retry');
}
function I() {
    let e = u.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING;
}
function T() {
    let e = (0, i.e7)([u.default], () => u.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED && (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING;
}
function S(e) {
    let [t, n] = r.useState(!1),
        o = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
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
                    let n = await (0, f.K)();
                    d.Z.showAgeVerification({
                        webviewUrl: n.verification_webview_url,
                        onComplete: e,
                        onClose: c,
                        onCancel: c,
                        entryPoint: t
                    });
                } catch (e) {
                    l.Z.showFailedToast(h.wQ.TIGGER_PAWTECT_ERROR), c();
                } finally {
                    n(!1);
                }
            },
            [e, c]
        )
    };
}
function A(e) {
    let t = (0, i.e7)([u.default], () => {
            var e;
            return null == (e = u.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, s.Z)(t);
    r.useEffect(() => {
        null != n && null != t && n !== t && e();
    }, [e, t, n]);
}
function N(e) {
    return null != e && _.dx.has(e);
}
