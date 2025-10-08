n.d(t, {
    AY: () => L,
    F5: () => D,
    Jm: () => T,
    L0: () => C,
    L5: () => v,
    M$: () => S,
    WD: () => w,
    bj: () => y,
    g0: () => A,
    kJ: () => R,
    l6: () => P,
    pY: () => N,
    sf: () => O,
    yo: () => I,
}),
    n(388685),
    n(35282);
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
    g = n(723359),
    E = n(484710);
let b = new Set([
        g.L0.NSFW_SERVER,
        g.L0.NSFW_SERVER_INVITE,
        g.L0.NSFW_SERVER_INVITE_EMBED,
        g.L0.LARGE_GUILD,
        g.L0.JOIN_LARGE_GUILD_UNDERAGE,
        g.L0.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    y = (e) => b.has(e);
function O() {
    let e = f.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function v() {
    let e = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function I() {
    let e = f.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function T() {
    let e = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function S() {
    let e = f.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var A = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    C = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function N(e, t) {
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
function R() {
    let e = f.default.getCurrentUser();
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function P() {
    let e = (0, i.e7)([f.default], () => f.default.getCurrentUser());
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function w(e) {
    let { onComplete: t, isRetry: n = !1, visibleContent: o = null, shouldShowExpressiveModal: s = !1 } = e,
        [u, d] = r.useState(!1),
        h = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
        { current: m } = r.useRef(null == h ? void 0 : h.ageVerificationStatus),
        g = r.useCallback(() => {
            a.Z.dispatch({
                type: "CLOSE_AGE_VERIFICATION_MODAL",
                status: m,
            }),
                n ||
                    c.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: o,
                    });
        }, [m, n, o]);
    return {
        loading: u,
        initiateAgeVerification: r.useCallback(
            async (e, n) => {
                d(!0);
                try {
                    a.Z.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, p.K)(n);
                    _.Z.showAgeVerification({
                        webviewUrl: r.verification_webview_url,
                        onComplete: t,
                        onClose: g,
                        onCancel: g,
                        entryPoint: e,
                        shouldShowExpressiveModal: s,
                    });
                } catch (e) {
                    l.Z.showFailedToast(E.wQ.TIGGER_PAWTECT_ERROR), g();
                } finally {
                    d(!1);
                }
            },
            [t, g, s],
        ),
    };
}
function D(e) {
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
function L(e) {
    return null != e && h.dx.has(e);
}
