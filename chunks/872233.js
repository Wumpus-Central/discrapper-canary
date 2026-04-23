n.d(e, { default: () => T }), n(323874), n(14289), n(35956);
var i = n(627968),
    a = n(64700),
    c = n(224640),
    s = n(20742),
    o = n(430993),
    l = n(696208),
    r = n(17928),
    u = n(192308),
    d = n(104510),
    _ = n(793574),
    p = n(688810),
    b = n(607470),
    A = n(987144),
    U = n(773669),
    f = n(71393),
    L = n(954571),
    y = n(652215),
    E = n(985018),
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
        G = (function (t) {
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
                            (a = !0), null != e && URL.revokeObjectURL(e), n(void 0);
                        }
                    );
                }, [t]),
                e
            );
        })(D),
        { analyticsLocations: h } = (0, p.Ay)(I, _.A.GUILD_POWERUPS_MARKETING_VIDEO_MODAL),
        [m, x] = a.useState(!1),
        C = a.useRef(!1),
        S = a.useRef(null),
        v = a.useMemo(
            () => ({
                ...(null != e ? { guild_id: e } : {}),
                type: y.liQ.PREMIUM_GUILD_USER_MODAL,
                location_stack: h,
                location_section: g.section,
                location_object: g.object,
                video_placement: k,
            }),
            [g.object, g.section, h, e, k],
        ),
        N = a.useCallback(
            (t) => {
                let e = t.currentTarget.duration;
                C.current ||
                    ((C.current = !0),
                    L.default.track(y.HAw.BOOSTING_MARKETING_VIDEO_PLAYED, {
                        ...v,
                        ...(Number.isFinite(e) ? { video_duration_sec: e } : {}),
                    }));
            },
            [v],
        ),
        P = a.useCallback(
            (t) => {
                let e = t.currentTarget.currentTime,
                    n = t.currentTarget.duration;
                L.default.track(y.HAw.BOOSTING_MARKETING_VIDEO_COMPLETED, {
                    ...v,
                    ...(Number.isFinite(e) ? { seconds_played: e } : {}),
                    ...(Number.isFinite(n) ? { video_duration_sec: n } : {}),
                });
            },
            [v],
        );
    async function w() {
        null != j &&
            (S.current?.pause(),
            x(!0),
            await (0, A.g)({
                analyticsLocations: h,
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
                let { default: t } = await n.e("18710").then(n.bind(n, 770101));
                return (e) =>
                    (0, i.jsx)(t, {
                        ...e,
                        onSelectGuild: (t) => {
                            e.onClose(),
                                R(),
                                (0, A.g)({
                                    analyticsLocations: h,
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
    return (0, i.jsxs)(c.d, {
        size: "xxl",
        transitionState: T,
        onClose: R,
        children: [
            (0, i.jsx)(s.rQ, { title: E.intl.string(E.t["0f1VCH"]) }),
            (0, i.jsx)(o.c, {
                children: (0, i.jsx)(b.A, {
                    ref: S,
                    className: M.K,
                    src: "https://cdn.discordapp.com/assets/content/f0b9a61f96ee69dc341c22c04fe6458660d9317caae3d381c05cf8348fca5b95.mp4",
                    poster: O.A,
                    controls: !0,
                    autoPlay: !0,
                    controlsList: "nodownload noremoteplayback noplaybackrate",
                    onPlay: N,
                    onEnded: P,
                    disablePictureInPicture: !0,
                    children: null != G && (0, i.jsx)("track", { src: G, kind: "captions", srcLang: D, default: !0 }),
                }),
            }),
            (0, i.jsx)(l.H, {
                actions: [
                    null != j
                        ? {
                              variant: "expressive",
                              size: "md",
                              icon: d._,
                              text: E.intl.string(E.t.gKmQ1G),
                              onClick: w,
                              loading: m,
                          }
                        : { variant: "primary", size: "md", text: E.intl.string(E.t.BMx1iy), onClick: B },
                ],
            }),
        ],
    });
}
