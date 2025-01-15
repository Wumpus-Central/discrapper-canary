var i = r(192379),
    a = r(442837),
    s = r(230711),
    o = r(607070),
    l = r(663389),
    u = r(526761),
    c = r(981631);
let d = Object.freeze({
        [u.KQ.ProfileCustomizationScrollPositions.TRY_IT_OUT]: c.oAB.PROFILE_CUSTOMIZATION,
        [u.KQ.AccessibilityScrollPositions.REDUCED_MOTION]: c.oAB.ACCESSIBILITY,
        [u.KQ.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: c.oAB.ACCESSIBILITY,
        [u.KQ.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: c.oAB.ACCESSIBILITY,
        [u.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: c.oAB.VOICE,
        [u.KQ.AppearanceScrollPositions.CUSTOM_APP_ICONS]: c.oAB.APPEARANCE,
        [u.KQ.ContentAndSocialScrollPositions.DM_SAFETY_ALERTS_V2]: c.oAB.CONTENT_AND_SOCIAL,
        [u.KQ.ContentAndSocialScrollPositions.MESSAGE_REQUESTS_V2]: c.oAB.CONTENT_AND_SOCIAL,
        [u.KQ.ContentAndSocialScrollPositions.EXPLICIT_MEDIA_REDACTION_V2]: c.oAB.CONTENT_AND_SOCIAL,
        [u.KQ.ContentAndSocialScrollPositions.RESTRICTED_ACCOUNTS]: c.oAB.CONTENT_AND_SOCIAL
    }),
    f = function (e, n, r) {
        let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
            f = (0, a.e7)([l.Z], () => l.Z.getScrollPosition());
        (0, i.useEffect)(() => {
            let i = e.current;
            if (null != i && n === f)
                setTimeout(() => {
                    let e = requestAnimationFrame(() => {
                        i.scrollIntoView({
                            behavior: c ? 'auto' : 'smooth',
                            ...r
                        }),
                            s.Z.clearScrollPosition(d[n]);
                    });
                    return () => cancelAnimationFrame(e);
                }, u);
        }, [e, n, f, c, r, u]);
    };
n.Z = f;
