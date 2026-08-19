n.d(t, { default: () => T }), n(323874), n(14289), n(35956);
var i = n(477900),
    a = n(582128),
    c = n(224640),
    l = n(20742),
    s = n(430993),
    o = n(696208),
    r = n(17928),
    u = n(876230),
    d = n(192308),
    _ = n(104510),
    p = n(793574),
    b = n(688810),
    U = n(987144),
    f = n(773669),
    A = n(613373),
    y = n(71393),
    L = n(174459),
    R = n(652215),
    E = n(375708),
    M = n(401146),
    O = n(519636);
function T(e) {
    let {
            guildId: t,
            transitionState: T,
            onClose: I,
            analyticsLocation: h,
            sourceAnalyticsLocations: j,
            videoPlacement: D,
        } = e,
        G = (0, r.bG)([y.A], () => (null != t ? y.A.getGuild(t) : null)),
        S = (function (e) {
            let [t, n] = a.useState(void 0);
            return (
                a.useEffect(() => {
                    let t;
                    if (e.startsWith("en")) return;
                    let i = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${e}.vtt`,
                        a = !1;
                    return (
                        fetch(i)
                            .then((e) => {
                                if (e.ok) return e.text();
                            })
                            .then((e) => {
                                a || null == e || n((t = URL.createObjectURL(new Blob([e], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            (a = !0), null != t && URL.revokeObjectURL(t), n(void 0);
                        }
                    );
                }, [e]),
                t
            );
        })((0, r.bG)([f.default], () => f.default.locale)),
        { analyticsLocations: g } = (0, b.Ay)(j, p.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [k, m] = a.useState(!1),
        C = a.useRef(!1),
        x = a.useRef(null),
        v = a.useRef(null),
        N = a.useMemo(
            () => ({
                ...(null != t ? { guild_id: t } : {}),
                type: R.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: g,
                location_section: h.section,
                location_object: h.object,
                video_placement: D,
            }),
            [h.object, h.section, g, t, D],
        ),
        P = a.useCallback(
            (e) => {
                if (e !== u.Q6.PLAYING || C.current) return;
                C.current = !0;
                let t = x.current?.duration;
                L.default.track(R.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                    ...N,
                    ...(null != t && Number.isFinite(t) ? { video_duration_sec: t } : {}),
                });
            },
            [N],
        ),
        B = a.useCallback(() => {
            let e = x.current?.currentTime,
                t = x.current?.duration;
            L.default.track(R.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                ...N,
                ...(null != e && Number.isFinite(e) ? { seconds_played: e } : {}),
                ...(null != t && Number.isFinite(t) ? { video_duration_sec: t } : {}),
            });
        }, [N]);
    async function w() {
        null != G &&
            (v.current?.pause(),
            m(!0),
            await (0, U.g)({
                analyticsLocations: g,
                analyticsLocation: {
                    page: R.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: R.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: R.ZSU.BUTTON_CTA,
                    objectType: R.AnalyticsObjectTypes.BUY,
                },
                guild: G,
                onClose: I,
            }),
            m(!1));
    }
    async function Q() {
        v.current?.pause(),
            await (0, d.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("677508"), n.e("418710")]).then(n.bind(n, 770101));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onSelectGuild: (e) => {
                            t.onClose(),
                                I(),
                                (0, U.g)({
                                    analyticsLocations: g,
                                    analyticsLocation: {
                                        page: R.liQ.PREMIUM_GUILD_USER_MODAL,
                                        section: R.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                        object: R.ZSU.BUTTON_CTA,
                                        objectType: R.AnalyticsObjectTypes.BUY,
                                    },
                                    guild: e,
                                });
                        },
                    });
            });
    }
    let F = E.intl.string(E.t["0f1VCH"]);
    return (0, i.jsxs)(c.d, {
        size: "xxl",
        transitionState: T,
        onClose: I,
        "aria-label": F,
        children: [
            (0, i.jsx)(l.rQ, { title: F }),
            (0, i.jsx)(s.c, {
                children: (0, i.jsx)("div", {
                    className: M.K,
                    children: (0, i.jsx)(A.Ft, {
                        ref: x,
                        playerRef: v,
                        parentTransitionState: T,
                        orientation: "landscape",
                        src: "https://cdn.discordapp.com/assets/content/f0b9a61f96ee69dc341c22c04fe6458660d9317caae3d381c05cf8348fca5b95.mp4",
                        poster: O.A,
                        captionTrackUrl: S,
                        autoplay: !0,
                        autoFocus: !0,
                        hidePlaybackSpeedBtn: !0,
                        onPlayerStateChange: P,
                        onEnded: B,
                    }),
                }),
            }),
            (0, i.jsx)(o.H, {
                actions: [
                    null != G
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: _._,
                              text: E.intl.string(E.t.gKmQ1G),
                              onClick: w,
                              loading: k,
                          }
                        : { variant: "primary", size: "md", text: E.intl.string(E.t.BMx1iy), onClick: Q },
                ],
            }),
        ],
    });
}
