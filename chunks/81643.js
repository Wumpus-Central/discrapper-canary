n.d(t, {
    AY: () => G,
    B7: () => Z,
    F5: () => U,
    Jm: () => P,
    L0: () => x,
    L5: () => A,
    M$: () => R,
    WD: () => k,
    bj: () => T,
    g0: () => D,
    gD: () => w,
    kJ: () => j,
    l6: () => M,
    pY: () => L,
    s2: () => F,
    sf: () => C,
    yo: () => N,
}),
    n(388685),
    n(35282);
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(681678),
    c = n(788080),
    u = n(420846),
    d = n(314897),
    f = n(375954),
    p = n(594174),
    _ = n(168107),
    m = n(480916),
    h = n(352138),
    g = n(469775),
    E = n(981631),
    b = n(723359),
    y = n(484710),
    O = n(144287),
    v = n(388032);
let S = new Set([m.cU.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, m.cU.START_STAGE_PROMPT, m.cU.STAGE_CHANNEL_RAISE_HAND]),
    I = new Set([
        b.L0.NSFW_SERVER,
        b.L0.NSFW_SERVER_INVITE,
        b.L0.NSFW_SERVER_INVITE_EMBED,
        b.L0.LARGE_GUILD,
        b.L0.JOIN_LARGE_GUILD_UNDERAGE,
        b.L0.ACCESS_LARGE_GUILD_UNDERAGE,
    ]),
    T = (e) => I.has(e);
function C() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function A() {
    let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.VERIFIED_ADULT;
}
function N() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function P() {
    let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_TEEN;
}
function R() {
    let e = p.default.getCurrentUser();
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
function w() {
    let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
    return (null == e ? void 0 : e.ageVerificationStatus) === o.F$.VERIFIED_ADULT;
}
var D = (function (e) {
        return (e.CTAS = "ctas"), (e.CONTENT_TYPE = "content_type"), e;
    })({}),
    x = (function (e) {
        return (e.VERIFIED_ADULT = "verified_adult"), (e.VERIFIED_TEEN = "verified_teen"), (e.ERROR = "error"), e;
    })({});
function L(e, t) {
    let n = f.Z.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== E.hBH.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let r = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return null == r ? void 0 : r.rawValue.split(",").includes("retry");
}
function j() {
    let e = p.default.getCurrentUser();
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function M() {
    let e = (0, i.e7)([p.default], () => p.default.getCurrentUser());
    return (
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.UNVERIFIED &&
        (null == e ? void 0 : e.ageVerificationStatus) !== o.F$.CLIENT_ONLY_PENDING
    );
}
function k(e) {
    let {
            onComplete: t,
            entryPoint: n,
            isRetry: o = !1,
            visibleContent: s = null,
            shouldShowExpressiveModal: d = !1,
            classificationId: f = null,
        } = e,
        [m, g] = r.useState(!1),
        E = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
        { current: b } = r.useRef(null == E ? void 0 : E.ageVerificationStatus),
        O = (0, c.GE)(),
        v = r.useCallback(() => {
            a.Z.dispatch({
                type: "CLOSE_AGE_VERIFICATION_MODAL",
                status: b,
            }),
                o ||
                    O ||
                    u.Z.maybeOpenAgeVerificationUserFeedback({
                        location: "age_verification_intro_screen",
                        visibleContent: s,
                    });
        }, [b, o, s, O]),
        S = r.useCallback(
            async (e) => {
                g(!0);
                try {
                    a.Z.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await (0, h.pU)({
                        method: e,
                        classificationId: null != f ? f : void 0,
                    });
                    _.Z.showAgeVerification({
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
                    l.Z.showFailedToast(y.wQ.TIGGER_PAWTECT_ERROR), v();
                } finally {
                    g(!1);
                }
            },
            [t, v, d, f, n],
        );
    return {
        loading: m,
        initiateAgeVerification: S,
    };
}
function U(e) {
    let t = (0, i.e7)([p.default], () => {
            var e;
            return null == (e = p.default.getCurrentUser()) ? void 0 : e.ageVerificationStatus;
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
function G(e) {
    return null != e && g.dx.has(e);
}
function Z(e) {
    return S.has(e) ? v.intl.string(v.t.lSWVTM) : v.intl.string(v.t.JHNunj);
}
function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return S.has(e)
        ? v.intl.string(v.t["S/xS/w"])
        : n
          ? v.intl.string(O.default["1/6wta"])
          : v.intl.format(O.default.RpMIT0, { handleOnHelpUrlHook: t });
}
