n.d(t, {
    AY: () => L,
    F5: () => x,
    Jm: () => T,
    L0: () => N,
    L5: () => I,
    M$: () => A,
    WD: () => D,
    bj: () => O,
    g0: () => C,
    kJ: () => P,
    l6: () => w,
    pY: () => R,
    sf: () => v,
    yo: () => S,
}),
    n(388685),
    n(35282);
var r = n(647438),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(788080),
    u = n(420846),
    d = n(314897),
    f = n(375954),
    _ = n(594174),
    p = n(168107),
    h = n(352138),
    m = n(469775),
    g = n(981631),
    E = n(723359),
    b = n(484710);
let y = new Set([
        E.L0.NSFW_SERVER,
        E.L0.NSFW_SERVER_INVITE,
        E.L0.NSFW_SERVER_INVITE_EMBED,
        E.L0.LARGE_GUILD,
        E.L0.JOIN_LARGE_GUILD_UNDERAGE,
        E.L0.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    O = (e) => y.has(e);
function v() {
    let e = _.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function I() {
    let e = (0, i.e7)([_.default], () => _.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function S() {
    let e = _.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function T() {
    let e = (0, i.e7)([_.default], () => _.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function A() {
    let e = _.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var C = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    N = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function R(e, t) {
    let n = f.Z.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== g.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return null == r ? void 0 : r.rawValue.split(",").includes("retry");
}
function P() {
    let e = _.default.getCurrentUser();
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function w() {
    let e = (0, i.e7)([_.default], () => _.default.getCurrentUser());
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function D(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: o = !1,
            visibleContent: s = null,
            shouldShowExpressiveModal: d = !1,
            classificationId: f = null,
        } = e,
        [m, g] = r.useState(!1),
        E = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
        { current: y } = r.useRef(null == E ? void 0 : E.ageVerificationStatus),
        O = (0, c.GE)(),
        v = r.useCallback(() => {
            a.Z.dispatch({
                type: "CLOSE_AGE_VERIFICATION_MODAL",
                status: y,
            }),
                o ||
                    O ||
                    u.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: s,
                    });
        }, [y, o, s, O]),
        I = r.useCallback(
            async (e) => {
                g(!0);
                try {
                    a.Z.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, h.pU)({
                        method: e,
                        classificationId: null != f ? f : void 0,
                    });
                    p.Z.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        verificationRequestId: r.verification_request_id,
                        verificationVendorName: r.verification_vendor_name,
                        onComplete: t,
                        onClose: v,
                        onCancel: v,
                        entryPoint: n,
                        shouldShowExpressiveModal: d,
                    });
                } catch (e) {
                    l.Z.showFailedToast(b.wQ.TIGGER_PAWTECT_ERROR), v();
                } finally {
                    g(!1);
                }
            },
            [t, v, d, f, n],
        );
    return {
        loading: m,
        initiateAgeVerification: I,
    };
}
function x(e) {
    let t = (0, i.e7)([_.default], () => {
            var e;
            return null == (e = _.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
        }),
        n = (0, s.Z)(t),
        a = (0, i.e7)([d.default], () => null != d.default.getSuspendedUserToken()),
        o = (0, i.e7)([d.default], () => d.default.isAuthenticated()),
        l = null != n && null != t && n !== t,
        c = !a && !o;
    r.useEffect(() => {
        (l || c) && e();
    }, [e, l, c]);
}
function L(e) {
    return null != e && m.dx.has(e);
}
