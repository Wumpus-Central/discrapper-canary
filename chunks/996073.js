n.d(t, { Z: () => _ });
var r = n(192379),
    i = n(442837),
    o = n(230711),
    a = n(607070),
    s = n(663389),
    l = n(526761),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = Object.freeze({
        [l.KQ.ProfileCustomizationScrollPositions.TRY_IT_OUT]: c.oAB.PROFILE_CUSTOMIZATION,
        [l.KQ.ProfileCustomizationScrollPositions.GUILD_TAG]: c.oAB.PROFILE_CUSTOMIZATION,
        [l.KQ.AccessibilityScrollPositions.REDUCED_MOTION]: c.oAB.ACCESSIBILITY,
        [l.KQ.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: c.oAB.ACCESSIBILITY,
        [l.KQ.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: c.oAB.ACCESSIBILITY,
        [l.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: c.oAB.VOICE,
        [l.KQ.AppearanceScrollPositions.CUSTOM_APP_ICONS]: c.oAB.APPEARANCE,
        [l.KQ.ContentAndSocialScrollPositions.DM_SAFETY_ALERTS_V2]: c.oAB.CONTENT_AND_SOCIAL,
        [l.KQ.ContentAndSocialScrollPositions.MESSAGE_REQUESTS_V2]: c.oAB.CONTENT_AND_SOCIAL,
        [l.KQ.ContentAndSocialScrollPositions.EXPLICIT_MEDIA_REDACTION_V2]: c.oAB.CONTENT_AND_SOCIAL,
        [l.KQ.ContentAndSocialScrollPositions.RESTRICTED_ACCOUNTS]: c.oAB.CONTENT_AND_SOCIAL
    }),
    _ = function (e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            c = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            u = (0, i.e7)([s.Z], () => s.Z.getScrollPosition());
        (0, r.useEffect)(() => {
            let r = e.current;
            null != r &&
                t === u &&
                setTimeout(() => {
                    let e = requestAnimationFrame(() => {
                        r.scrollIntoView(d({ behavior: c ? 'auto' : 'smooth' }, n)), o.Z.clearScrollPosition(f[t]);
                    });
                    return () => cancelAnimationFrame(e);
                }, l);
        }, [e, t, u, c, n, l]);
    };
