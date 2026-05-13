n.d(e, { default: () => T }), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    c = n(224640),
    s = n(20742),
    l = n(430993),
    o = n(696208),
    r = n(17928),
    u = n(192308),
    d = n(104510),
    _ = n(793574),
    p = n(688810),
    b = n(607470),
    A = n(987144),
    U = n(773669),
    f = n(71393),
    L = n(174459),
    y = n(652215),
    E = n(375708),
    M = n(33759),
    O = n(519636);
function T(t) {
    let {
            guildId: e,
            transitionState: T,
            onClose: R,
            analyticsLocation: g,
            sourceAnalyticsLocations: I,
            videoPlacement: k,
        } = t,
        j = (0, r.bG)([f.A], () => (null != e ? f.A.getGuild(e) : null)),
        D = (0, r.bG)([U.default], () => U.default.locale),
        m = (function (t) {
            let [e, n] = i.useState(void 0);
            return (
                i.useEffect(() => {
                    let e;
                    if (t.startsWith("en")) return;
                    let a = `https://${window.GLOBAL_ENV.CDN_HOST}/assets/boosting/marketing/captions/boosting_marketing_video_captions_${t}.vtt`,
                        i = !1;
                    return (
                        fetch(a)
                            .then((t) => {
                                if (t.ok) return t.text();
                            })
                            .then((t) => {
                                i || null == t || n((e = URL.createObjectURL(new Blob([t], { type: "text/vtt" }))));
                            })
                            .catch(() => {}),
                        () => {
                            (i = !0), null != e && URL.revokeObjectURL(e), n(void 0);
                        }
                    );
                }, [t]),
                e
            );
        })(D),
        { analyticsLocations: G } = (0, p.Ay)(I, _.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [h, x] = i.useState(!1),
        C = i.useRef(!1),
        S = i.useRef(null),
        P = i.useMemo(
            () => ({
                ...(null != e ? { guild_id: e } : {}),
                type: y.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: G,
                location_section: g.section,
                location_object: g.object,
                video_placement: k,
            }),
            [g.object, g.section, G, e, k],
        ),
        v = i.useCallback(
            (t) => {
                let e = t.currentTarget.duration;
                C.current ||
                    ((C.current = !0),
                    L.default.track(y.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...P,
                        ...(Number.isFinite(e) ? { video_duration_sec: e } : {}),
                    }));
            },
            [P],
        ),
        N = i.useCallback(
            (t) => {
                let e = t.currentTarget.currentTime,
                    n = t.currentTarget.duration;
                L.default.track(y.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...P,
                    ...(Number.isFinite(e) ? { seconds_played: e } : {}),
                    ...(Number.isFinite(n) ? { video_duration_sec: n } : {}),
                });
            },
            [P],
        );
    async function w() {
        null != j &&
            (S.current?.pause(),
            x(!0),
            await (0, A.g)({
                analyticsLocations: G,
                analyticsLocation: {
                    page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                    section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                    object: y.ZSU.BUTTON_CTA,
                    objectType: y.AnalyticsObjectTypes.BUY,
                },
                guild: j,
                onClose: R,
            }),
            x(!1));
    }
    async function B() {
        S.current?.pause(),
            await (0, u.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("93010"), n.e("18710")]).then(n.bind(n, 770101));
                return (e) =>
                    (0, a.jsx)(t, {
                        ...e,
                        onSelectGuild: (t) => {
                            e.onClose(),
                                R(),
                                (0, A.g)({
                                    analyticsLocations: G,
                                    analyticsLocation: {
                                        page: y.liQ.PREMIUM_GUILD_USER_MODAL,
                                        section: y.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
                                        object: y.ZSU.BUTTON_CTA,
                                        objectType: y.AnalyticsObjectTypes.BUY,
                                    },
                                    guild: t,
                                });
                        },
                    });
            });
    }
    let H = E.intl.string(E.t["0f1VCH"]);
    return (0, a.jsxs)(c.d, {
        size: "xxl",
        transitionState: T,
        onClose: R,
        "aria-label": H,
        children: [
            (0, a.jsx)(s.rQ, { title: H }),
            (0, a.jsx)(l.c, {
                children: (0, a.jsx)(b.A, {
                    ref: S,
                    className: M.K,
                    src: "https://cdn.discordapp.com/assets/content/f0b9a61f96ee69dc341c22c04fe6458660d9317caae3d381c05cf8348fca5b95.mp4",
                    poster: O.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: v,
                    onEnded: N,
                    disablePictureInPicture: !0,
                    children: null != m && (0, a.jsx)("track", { src: m, kind: "captions", srcLang: D, default: !0 }),
                }),
            }),
            (0, a.jsx)(o.H, {
                actions: [
                    null != j
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: d._,
                              text: E.intl.string(E.t.gKmQ1G),
                              onClick: w,
                              loading: h,
                          }
                        : { variant: "primary", size: "md", text: E.intl.string(E.t.BMx1iy), onClick: B },
                ],
            }),
        ],
    });
}
