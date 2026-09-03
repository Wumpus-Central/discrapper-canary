n.d(t, {
    AN: () => Y,
    cc: () => X,
    p9: () => G,
    I7: () => eo,
    YU: () => Z,
    uN: () => z,
    tC: () => ed,
    Y2: () => $,
    dZ: () => er,
    lU: () => P,
    Dn: () => j,
    b8: () => ee,
    yM: () => V,
    $8: () => B,
    NI: () => F,
    mK: () => el,
    Q9: () => J,
    Sr: () => ea,
    ST: () => es,
    i2: () => x,
    nn: () => en,
    Ny: () => ei,
    H: () => K,
    lW: () => Q,
    Wv: () => q,
    uE: () => H,
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
    T = n(379257),
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
    D = n(841365),
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
function k(e) {
    return e === d.Tk.VERIFIED_TEEN || e === d.Tk.INFERRED_TEEN;
}
function F() {
    return k(p.default.getCurrentUser()?.ageVerificationStatus);
}
function V() {
    return (0, l.bG)([p.default], () => k(p.default.getCurrentUser()?.ageVerificationStatus));
}
function B() {
    let e = p.default.getCurrentUser(),
        t = e?.ageVerificationStatus;
    return t === d.Tk.VERIFIED_ADULT || (U() && t === d.Tk.INFERRED_ADULT);
}
function H() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        t = w() && e?.ageVerificationStatus === d.Tk.INFERRED_ADULT;
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT || t;
}
function j() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus === d.Tk.VERIFIED_ADULT;
}
function W(e) {
    return e === d.Tk.INFERRED_ADULT || e === d.Tk.INFERRED_TEEN;
}
function Y() {
    return W(p.default.getCurrentUser()?.ageVerificationStatus);
}
function K() {
    return (0, l.bG)([p.default], () => W(p.default.getCurrentUser()?.ageVerificationStatus));
}
function $() {
    let e = K();
    return (0, A.aX)(s.t.REACTIVE_CHECK) && e;
}
var z = (((i = {}).CTAS = "ctas"), (i.CONTENT_TYPE = "content_type"), i),
    q =
        (((r = {}).VERIFIED_ADULT = "verified_adult"),
        (r.VERIFIED_TEEN = "verified_teen"),
        (r.ERROR = "error"),
        (r.FAE_FAILED = "fae_failed"),
        (r.ID_FAILED = "id_failed"),
        (r.UNDERAGE = "underage"),
        r);
function Z(e, t) {
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
function X(e, t) {
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
function Q(e, t) {
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
function J() {
    let e = p.default.getCurrentUser();
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function ee() {
    let e = (0, l.bG)([p.default], () => p.default.getCurrentUser());
    return e?.ageVerificationStatus !== d.Tk.UNVERIFIED && e?.ageVerificationStatus !== d.Tk.CLIENT_ONLY_PENDING;
}
function et(e) {
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
function en(e) {
    let { onComplete: t, entryPoint: n, shouldShowExpressiveModal: i = !1, classificationId: r = null } = e,
        { loading: s, startVerification: l } = et({ onComplete: t, entryPoint: n, shouldShowExpressiveModal: i });
    return {
        loading: s,
        initiateAgeVerification: a.useCallback(
            (e, t) => l(() => (0, S.uf)({ method: e, classificationId: r ?? void 0, vendor: t })),
            [l, r],
        ),
    };
}
function ei(e) {
    let { onComplete: t, entryPoint: n, onMethodUnavailable: i } = e,
        { loading: r, startVerification: s } = et({
            onComplete: t,
            entryPoint: n,
            shouldShowExpressiveModal: !0,
            onMethodUnavailable: i,
        });
    return {
        loading: r,
        initiateAgeVerificationV2: a.useCallback((e) => s(() => (0, S.en)(e.method, e.vendor), e), [s]),
    };
}
function er(e) {
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
function ea(e) {
    return null != e && O.zn.has(e);
}
function es(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return b.has(e) ? v.intl.string(v.t.lSWVTM) : t ? v.intl.string(D.default["/kgWIg"]) : v.intl.string(v.t.xYXsr6);
}
function el(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    return b.has(e)
        ? v.intl.string(v.t["S/xS/w"])
        : n
          ? v.intl.string(D.default.h7qzoa)
          : r && null != t && null != i
            ? v.intl.format(D.default["+Ft5ch"], { handleOnHelpUrlHook: t, handleOnTrustedProvidersHook: i })
            : r && null != t
              ? v.intl.format(D.default["22HSSI"], { handleOnHelpUrlHook: t })
              : null != t
                ? v.intl.format(D.default.RpMIT0, { handleOnHelpUrlHook: t })
                : v.intl.string(v.t.HxS3oQ);
}
function eo(e) {
    let t,
        n,
        i =
            ((t = ee()),
            (n = (0, A.aX)(s.t.REACTIVE_CHECK)),
            (0, l.bG)([g.A], () => !t && n && g.A.shouldCallReactiveCheck(), [t, n]));
    a.useEffect(() => {
        i && L.Qx.has(e) && (0, C.z)();
    }, [i, e]);
}
async function ed() {
    return !J() && U() && g.A.shouldCallReactiveCheck() ? await (0, C.z)() : null;
}
