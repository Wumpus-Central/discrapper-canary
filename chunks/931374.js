"use strict";
n.d(t, {
    cc: () => $,
    p9: () => G,
    dZ: () => ee,
    YU: () => K,
    uN: () => W,
    tC: () => ea,
    Y2: () => j,
    lU: () => P,
    Dn: () => H,
    b8: () => q,
    yM: () => F,
    $8: () => V,
    NI: () => k,
    mK: () => ei,
    Q9: () => Z,
    Sr: () => et,
    ST: () => en,
    i2: () => x,
    nn: () => Q,
    Ny: () => J,
    I7: () => er,
    lW: () => z,
    Wv: () => Y,
    uE: () => B,
});
var i,
    r,
    a = n(582128),
    s = n(687123),
    l = n(17928),
    o = n(228366),
    d = n(155718),
    c = n(475743),
    u = n(653166),
    _ = n(138054),
    E = n(923495),
    A = n(207560),
    h = n(381689),
    I = n(280450),
    f = n(232835),
    p = n(287809),
    T = n(31720),
    m = n(847599),
    g = n(787301),
    S = n(295972);
let N = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-manual-age-assurance-fallback",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var C = n(96358),
    O = n(40449),
    R = n(652215),
    L = n(204925),
    y = n(835002),
    D = n(878400),
    v = n(375708);
let b = new Set([m.q1.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT, m.q1.START_STAGE_PROMPT, m.q1.STAGE_CHANNEL_RAISE_HAND]),
    M = new Set([
        L.w_.NSFW_SERVER,
        L.w_.NSFW_SERVER_INVITE,
        L.w_.NSFW_SERVER_INVITE_EMBED,
        L.w_.LARGE_GUILD,
        L.w_.JOIN_LARGE_GUILD_UNDERAGE,
        L.w_.ACCESS_LARGE_GUILD_UNDERAGE,
    ]);
function P(e) {
    return M.has(e);
}
function U() {
    return E.A.isFeatureAgeGated(s.t.REACTIVE_CHECK);
}
function w() {
    return (0, A.aX)(s.t.REACTIVE_CHECK);
}
function G() {
    let e = p.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return !(t === d.Tk.VERIFIED_ADULT || (U() && t === d.Tk.INFERRED_ADULT));
}
function x() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus !== d.Tk.VERIFIED_ADULT && !t;
}
function k() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus === d.Tk.VERIFIED_TEEN;
}
function F() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_TEEN;
}
function V() {
    let e = p.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === d.Tk.VERIFIED_ADULT || (U() && t === d.Tk.INFERRED_ADULT);
}
function B() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT || t;
}
function H() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT;
}
function j() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus === d.Tk.INFERRED_ADULT);
    return (0, A.aX)(s.t.REACTIVE_CHECK) && e;
}
var W = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    Y =
        (((r = {}).VERIFIED_ADULT = "verified_adult"),
        (r.VERIFIED_TEEN = "verified_teen"),
        (r.ERROR = "error"),
        (r.FAE_FAILED = "fae_failed"),
        (r.ID_FAILED = "id_failed"),
        (r.UNDERAGE = "underage"),
        r);
function K(e, t) {
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== R.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return i?.rawValue.split(",").includes("retry");
}
function $(e, t) {
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== R.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("request_manual_review") === !0 &&
        N.getConfig({ location: "isAgeVerificationMessageWithManualReviewCta" }).enabled
    );
}
function z(e, t) {
    if (null == _.A.getPendingConnection()) return !1;
    let n = f.A.getMessage(e, t);
    if (
        null == n ||
        null == n.embeds ||
        0 === n.embeds.length ||
        null == n.embeds[0].fields ||
        n.embeds[0].type !== R.Auw.AGE_VERIFICATION_SYSTEM_NOTIFICATION
    )
        return !1;
    let i = n.embeds[0].fields.find((e) => "ctas" === e.rawName);
    return (
        i?.rawValue.split(",").includes("connect_to_teen") === !0 &&
        u.q.getConfig({ location: "isAgeVerificationMessageWithConnectToTeenCta" }).enabled
    );
}
function Z() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function q() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function X(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, onMethodUnavailable: r } = e,
        [s, d] = a.useState(!1),
        c = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        { current: u } = a.useRef(c?.ageVerificationStatus),
        _ = a.useCallback(() => {
            o.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: u });
        }, [u]);
    return {
        loading: s,
        startVerification: a.useCallback(
            async (e, a) => {
                d(!0);
                try {
                    o.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let r = await e(),
                        s = T.A.showAgeVerification({
                            method: a?.method,
                            externalWindow: a?.externalWindow,
                            webviewUrl: r.verification_webview_url,
                            verificationRequestId: r.verification_request_id,
                            verificationVendorName: r.verification_vendor_name,
                            incodeParameters: r.incode_parameters,
                            onComplete: t,
                            onClose: _,
                            onCancel: _,
                            entryPoint: n,
                            shouldShowExpressiveModal: i,
                        });
                    !1 === s && (h.A.showFailedToast(y.OB.TIGGER_PAWTECT_ERROR), _());
                } catch (e) {
                    _(),
                        null != r && e?.body?.code === R.t02.AGE_VERIFICATION_METHOD_UNAVAILABLE
                            ? (h.A.showFailedToast(y.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE), r())
                            : h.A.showFailedToast(y.OB.TIGGER_PAWTECT_ERROR);
                } finally {
                    d(!1);
                }
            },
            [t, _, i, n, r],
        ),
    };
}
function Q(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        { loading: s, startVerification: l } = X({ onComplete: t, entryPoint: n, shouldShowExpressiveModal: i });
    return {
        loading: s,
        initiateAgeVerification: a.useCallback(
            (e, t) => l(() => (0, S.uf)({ method: e, classificationId: r ?? void 0, vendor: t })),
            [l, r],
        ),
    };
}
function J(e) {
    let { onComplete: t, entryPoint: n, onMethodUnavailable: i } = e,
        { loading: r, startVerification: s } = X({
            onComplete: t,
            entryPoint: n,
            shouldShowExpressiveModal: !0,
            onMethodUnavailable: i,
        });
    return {
        loading: r,
        initiateAgeVerificationV2: a.useCallback((e) => s(() => (0, S.UQ)(e.method, e.vendor), e), [s]),
    };
}
function ee(e) {
    let t = (0, l.bG)([p.default], () => p.default.getCurrentUser()?.ageVerificationStatus),
        n = (0, c.Ay)(t),
        i = (0, l.bG)([I.default], () => null != I.default.getSuspendedUserToken()),
        r = (0, l.bG)([I.default], () => I.default.isAuthenticated()),
        s = null != n && null != t && n !== t,
        o = !i && !r;
    a.useEffect(() => {
        (s || o) && e();
    }, [e, s, o]);
}
function et(e) {
    return null != e && O.zn.has(e);
}
function en(e) {
    return b.has(e) ? v.intl.string(v.t.lSWVTM) : v.intl.string(v.t.xYXsr6);
}
function ei(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return b.has(e)
        ? v.intl.string(v.t["S/xS/w"])
        : n
          ? v.intl.string(D.default.h7qzoa)
          : null != t
            ? v.intl.format(D.default.RpMIT0, { handleOnHelpUrlHook: t })
            : v.intl.string(v.t.HxS3oQ);
}
function er(e) {
    let t,
        n,
        i =
            ((t = q()),
            (n = (0, A.aX)(s.t.REACTIVE_CHECK)),
            (0, l.bG)([g.A], () => !t && n && g.A.shouldCallReactiveCheck(), [t, n]));
    a.useEffect(() => {
        i && L.Qx.has(e) && (0, C.z)();
    }, [i, e]);
}
async function ea() {
    return !Z() && U() && g.A.shouldCallReactiveCheck() ? await (0, C.z)() : null;
}
