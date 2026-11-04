(n.d(e, { default: () => D }), n(323874), n(14289), n(35956));
var i = n(477900),
    a = n(582128),
    c = n(17928),
    l = n(876230),
    s = n(192308),
    o = n(224640),
    r = n(20742),
    u = n(430993),
    d = n(696208),
    _ = n(104510),
    p = n(793574),
    b = n(688810),
    U = n(987144),
    f = n(773669),
    A = n(613373),
    L = n(71393),
    R = n(174459),
    E = n(652215),
    M = n(105292),
    O = n(401146),
    y = n(519636);
function D(t) {
    let {
            guildId: e,
            transitionState: D,
            onClose: I,
            analyticsLocation: T,
            sourceAnalyticsLocations: h,
            videoPlacement: G,
        } = t,
        S = (0, c.bG)([L.A], () => (null != e ? L.A.getGuild(e) : null)),
        g = (function (t) {
            let [e, n] = a.useState(void 0);
            return (
                a.useEffect(() => {
                    let e;
                    if (t.startsWith("en")) return;
                    let i = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${t}.vtt`,
                        a = !1;
                    return (
                        fetch(i)
                            .then((t) => {
                                if (t.ok) return t.text();
                            })
                            .then((t) => {
                                a || null == t || n((e = URL.createObjectURL(new Blob([t], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            ((a = !0), null != e && URL.revokeObjectURL(e), n(void 0));
                        }
                    );
                }, [t]),
                e
            );
        })((0, c.bG)([f.default], () => f.default.locale)),
        { analyticsLocations: k } = (0, b.Ay)(h, p.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [j, m] = a.useState(!1),
        C = a.useRef(!1),
        x = a.useRef(null),
        v = a.useRef(null),
        N = a.useMemo(
            () => ({
                ...(null != e ? { guild_id: e } : {}),
                type: E.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: k,
                location_section: T.section,
                location_object: T.object,
                video_placement: G,
            }),
            [T.object, T.section, k, e, G],
        ),
        P = a.useCallback(
            (t) => {
                if (t !== l.Q6.PLAYING || C.current) return;
                C.current = !0;
                let e = x.current?.duration;
                R.default.track(E.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                    ...N,
                    ...(null != e && Number.isFinite(e) ? { video_duration_sec: e } : {}),
                });
            },
            [N],
        ),
        B = a.useCallback(() => {
            let t = x.current?.currentTime,
                e = x.current?.duration;
            R.default.track(E.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                ...N,
                ...(null != t && Number.isFinite(t) ? { seconds_played: t } : {}),
                ...(null != e && Number.isFinite(e) ? { video_duration_sec: e } : {}),
            });
        }, [N]);
    async function w() {
        null != S &&
            (v.current?.pause(),
            m(!0),
            await (0, U.g)({
                analyticsLocations: k,
                analyticsLocation: {
                    page: E.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: E.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: E.ZSU.BUTTON_CTA,
                    objectType: E.btD.BUY,
                },
                guild: S,
                onClose: I,
            }),
            m(!1));
    }
    async function Q() {
        (v.current?.pause(),
            await (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("378357"), n.e("418710")]).then(n.bind(n, 770101));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onSelectGuild: (t) => {
                            (e.onClose(),
                                I(),
                                (0, U.g)({
                                    analyticsLocations: k,
                                    analyticsLocation: {
                                        page: E.liQ.PREMIUM_GUILD_USER_MODAL,
                                        section: E.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                        object: E.ZSU.BUTTON_CTA,
                                        objectType: E.btD.BUY,
                                    },
                                    guild: t,
                                }));
                        },
                    });
            }));
    }
    let F = M.intl.string(M.t["0f1VCH"]);
    return (0, i.jsxs)(o.d, {
        size: "xxl",
        transitionState: D,
        onClose: I,
        "aria-label": F,
        children: [
            (0, i.jsx)(r.rQ, { title: F }),
            (0, i.jsx)(u.c, {
                children: (0, i.jsx)("div", {
                    className: O.K,
                    children: (0, i.jsx)(A.Ft, {
                        ref: x,
                        playerRef: v,
                        parentTransitionState: D,
                        orientation: "landscape",
                        src: "https://cdn.discordapp.com/assets/content/f0b9a61f96ee69dc341c22c04fe6458660d9317caae3d381c05cf8348fca5b95.mp4",
                        poster: y.A,
                        captionTrackUrl: g,
                        autoplay: !0,
                        autoFocus: !0,
                        hidePlaybackSpeedBtn: !0,
                        onPlayerStateChange: P,
                        onEnded: B,
                    }),
                }),
            }),
            (0, i.jsx)(d.H, {
                actions: [
                    null != S
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: _._,
                              text: M.intl.string(M.t.gKmQ1G),
                              onClick: w,
                              loading: j,
                          }
                        : { variant: "primary", size: "md", text: M.intl.string(M.t.BMx1iy), onClick: Q },
                ],
            }),
        ],
    });
}
