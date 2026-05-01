t.d(n, { f: () => V }), t(938796);
var l = t(627968),
    i = t(64700),
    s = t(835245),
    a = t(724002),
    r = t(287174),
    o = t(487899),
    c = t(17928),
    u = t(939249),
    d = t(305866),
    A = t(707554),
    h = t(140735),
    m = t(323384),
    C = t(834730),
    E = t(320448),
    p = t(793574),
    g = t(688810),
    x = t(735991),
    I = t(786115),
    f = t(975412),
    T = t(392054),
    v = t(993748),
    _ = t(111042),
    j = t(939635),
    N = t(267102),
    O = t(246356),
    S = t(111162),
    b = t(174459),
    y = t(795816),
    R = t(648027),
    L = t(855446),
    M = t(652215),
    D = t(375708),
    P = t(976524);
let G = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    k = `vc-activities-${(0, s.A)()}`;
function U(e) {
    let n,
        t,
        { channel: s, openInPopout: r, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: h } =
            ((n = (0, c.bG)([S.default], () => S.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            i.useEffect(() => {
                (0, v.An)({ surface: G, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([_.A], () => _.A.getFetchState({ surface: G, activeState: n })),
                voiceBannerCollection: (0, c.bG)([_.A], () => _.A.getCollections({ surface: G, activeState: n }))[0],
            }),
        m = A === _.e.FETCHING,
        C = i.useMemo(() => {
            let e = h?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [h?.application_directory_collection_items]),
        { trackItemImpressionRef: E } = (0, I.A)({
            applicationId: C?.application.id ?? "",
            applicationFlags: C?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: C?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != C ? (0, x.Ii)(C.application) : void 0,
        });
    return null == C || null == h || m
        ? null
        : (null != C.id &&
              null != C.image_hash &&
              (t = (0, j.DH)({ itemId: C.id, hash: C.image_hash, containerWidth: 584 })),
          (0, l.jsxs)(u.D, {
              className: P.V8,
              innerRef: E,
              onClick: () => {
                  d(),
                      (0, f.A)({
                          context: { type: "channel", channel: s },
                          openInPopout: r,
                          analyticsLocation: p.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: C.application.id },
                      });
              },
              children: [
                  (0, l.jsx)("img", { alt: C.description, src: t, className: P.W_ }),
                  (0, l.jsx)("div", { className: P.LV }),
              ],
          }));
}
let V = i.forwardRef(function (e, n) {
    var t;
    let { channel: s, isHovered: a, closePopout: r, onMouseEnter: o, onMouseLeave: c, onClick: x, className: I } = e,
        { id: v, guild_id: _ } = s;
    i.useEffect(() => {
        b.default.track(M.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: v, guild_id: _ });
    }, [v, _]),
        i.useEffect(() => {
            a || r();
        }, [r, a]);
    let j = (0, N.Us)(),
        { analyticsLocations: S, newestAnalyticsLocation: G } = (0, g.Ay)(p.A.ACTIVITIES_MINI_SHELF),
        V = j === M.BRT.POPOUT,
        B = ((t = s.getGuildId()), (0, R.A)({ guildId: t }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => y.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let H = i.useCallback(() => {
            (0, f.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: V,
                analyticsLocation: G,
            }),
                c(),
                x();
        }, [s, G, x, c, V]),
        w = i.useCallback(
            (e) => {
                o(),
                    b.default.track(M.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    });
            },
            [o, s],
        );
    return (0, l.jsx)(g.f5, {
        value: S,
        children: (0, l.jsx)(O.A, {
            children: (0, l.jsxs)(d.l, {
                ref: n,
                "aria-labelledby": k,
                className: I,
                children: [
                    (0, l.jsx)(A.F, {
                        forceLevel: 2,
                        children: (0, l.jsx)(h.A, {
                            children: (0, l.jsx)(A.H, { id: k, children: D.intl.string(D.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: P.kL,
                        onMouseEnter: w,
                        onMouseLeave: c,
                        children: [
                            (0, l.jsxs)("div", {
                                className: P.gn,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: P.gH,
                                        children: [
                                            (0, l.jsx)(m.k, {
                                                size: "md",
                                                className: P.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, l.jsx)(C.E, {
                                                variant: "eyebrow",
                                                children: D.intl.string(D.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(u.D, {
                                        className: P.hc,
                                        onClick: H,
                                        children: [
                                            (0, l.jsx)(C.E, {
                                                variant: "eyebrow",
                                                children: D.intl.string(D.t["K8+z4S"]),
                                            }),
                                            (0, l.jsx)(E._, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: P.O6,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, l.jsx)(U, {
                                openInPopout: V,
                                channel: s,
                                onClick: () => {
                                    x(), r();
                                },
                            }),
                            (0, l.jsx)("div", {
                                className: P.ht,
                                children: B.map((e) =>
                                    (0, l.jsx)(
                                        L.C,
                                        {
                                            context: { channel: s, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                r(), x();
                                            },
                                            aspectRatio: L.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: P.KU,
                                            commandOrigin: T.iw.MINI_SHELF,
                                        },
                                        e.application.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
});
