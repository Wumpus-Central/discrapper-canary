n.d(t, {
    AY: () => P,
    F5: () => R,
    Jm: () => O,
    L0: () => T,
    L5: () => b,
    M$: () => v,
    WD: () => N,
    g0: () => I,
    kJ: () => A,
    l6: () => C,
    pY: () => S,
    sf: () => E,
    yo: () => y,
}),
    n(35282),
    n(388685);
var r = n(647438),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(420846),
    u = n(314897),
    d = n(375954),
    f = n(594174),
    _ = n(168107),
    p = n(352138),
    h = n(469775),
    m = n(981631),
    g = n(484710);
function E() {
    let e = f.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function b() {
    let e = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function y() {
    let e = f.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function O() {
    let e = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function v() {
    let e = f.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var I = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    T = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function S(e, t) {
    let n = d.Z.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== m.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return null == r ? void 0 : r.rawValue.split(",").includes("retry");
}
function A() {
    let e = f.default.getCurrentUser();
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function C() {
    let e = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        [s, u] = r.useState(!1),
        d = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        { current: h } = r.useRef(null == d ? void 0 : d.ageVerificationStatus),
        m = r.useCallback(() => {
            a.Z.dispatch({
                type: "CLOSE_AGE_VERIFICATION_MODAL",
                status: h,
            }),
                t ||
                    c.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: n,
                    });
        }, [h, t, n]);
    return {
        loading: s,
        initiateAgeVerification: r.useCallback(
            async (t, n) => {
                u(!0);
                try {
                    a.Z.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, p.K)(n);
                    _.Z.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        onComplete: e,
                        onClose: m,
                        onCancel: m,
                        entryPoint: t,
                        shouldShowExpressiveModal: o,
                    });
                } catch (e) {
                    l.Z.showFailedToast(g.wQ.TIGGER_PAWTECT_ERROR), m();
                } finally {
                    u(!1);
                }
            },
            [e, m, o],
        ),
    };
}
function R(e) {
    let t = (0, i.e7)([f.default], () => {
            var e;
            return null == (e = f.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
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
function P(e) {
    return null != e && h.dx.has(e);
}
