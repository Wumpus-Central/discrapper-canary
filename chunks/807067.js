(t.d(n, { f: () => V }), t(938796));
var i = t(477900),
    l = t(582128),
    s = t(132500),
    a = t(724002),
    r = t(287174),
    o = t(487899),
    c = t(17928),
    u = t(939249),
    d = t(305866),
    A = t(707554),
    h = t(140735),
    m = t(323384),
    g = t(834730),
    x = t(320448),
    C = t(793574),
    f = t(688810),
    p = t(735991),
    E = t(786115),
    j = t(975412),
    v = t(392054),
    I = t(993748),
    N = t(111042),
    _ = t(939635),
    T = t(267102),
    b = t(246356),
    S = t(111162),
    y = t(174459),
    O = t(795816),
    R = t(648027),
    L = t(855446),
    M = t(652215),
    D = t(105292),
    G = t(472489);
let P = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    k = `vc-activities-${(0, s.A)()}`;
function U(e) {
    let n,
        t,
        { channel: s, openInPopout: r, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: h } =
            ((n = (0, c.bG)([S.default], () => S.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            l.useEffect(() => {
                (0, I.An)({ surface: P, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([N.A], () => N.A.getFetchState({ surface: P, activeState: n })),
                voiceBannerCollection: (0, c.bG)([N.A], () => N.A.getCollections({ surface: P, activeState: n }))[0],
            }),
        m = A === N.e.FETCHING,
        g = l.useMemo(() => {
            let e = h?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [h?.application_directory_collection_items]),
        { trackItemImpressionRef: x } = (0, E.A)({
            applicationId: g?.application.id ?? "",
            applicationFlags: g?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: g?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != g ? (0, p.Ii)(g.application) : void 0,
        });
    return null == g || null == h || m
        ? null
        : (null != g.id &&
              null != g.image_hash &&
              (t = (0, _.DH)({ itemId: g.id, hash: g.image_hash, containerWidth: 584 })),
          (0, i.jsxs)(u.D, {
              className: G.V8,
              innerRef: x,
              onClick: () => {
                  (d(),
                      (0, j.A)({
                          context: { type: "channel", channel: s },
                          openInPopout: r,
                          analyticsLocation: C.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: g.application.id },
                      }));
              },
              children: [
                  (0, i.jsx)("img", { alt: g.description, src: t, className: G.W_ }),
                  (0, i.jsx)("div", { className: G.LV }),
              ],
          }));
}
function V(e) {
    var n;
    let {
            channel: t,
            isHovered: s,
            closePopout: a,
            onMouseEnter: r,
            onMouseLeave: o,
            onClick: c,
            className: p,
            ref: E,
        } = e,
        { id: I, guild_id: N } = t;
    (l.useEffect(() => {
        y.default.track(M.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: I, guild_id: N });
    }, [I, N]),
        l.useEffect(() => {
            s || a();
        }, [a, s]));
    let _ = (0, T.Us)(),
        { analyticsLocations: S, newestAnalyticsLocation: P } = (0, f.Ay)(C.A.ACTIVITIES_MINI_SHELF),
        V = _ === M.BRT.POPOUT,
        B = ((n = t.getGuildId()), (0, R.A)({ guildId: n }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => O.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let w = l.useCallback(() => {
            ((0, j.A)({
                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                openInPopout: V,
                analyticsLocation: P,
            }),
                o(),
                c());
        }, [t, P, c, o, V]),
        H = l.useCallback(
            (e) => {
                (r(),
                    y.default.track(M.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: t.id,
                        guild_id: t.getGuildId(),
                    }));
            },
            [r, t],
        );
    return (0, i.jsx)(f.f5, {
        value: S,
        children: (0, i.jsx)(b.A, {
            children: (0, i.jsxs)(d.l, {
                ref: E,
                "aria-labelledby": k,
                className: p,
                children: [
                    (0, i.jsx)(A.F, {
                        forceLevel: 2,
                        children: (0, i.jsx)(h.A, {
                            children: (0, i.jsx)(A.H, { id: k, children: D.intl.string(D.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: G.kL,
                        onMouseEnter: H,
                        onMouseLeave: o,
                        children: [
                            (0, i.jsxs)("div", {
                                className: G.gn,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: G.gH,
                                        children: [
                                            (0, i.jsx)(m.k, {
                                                size: "md",
                                                className: G.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, i.jsx)(g.E, {
                                                variant: "eyebrow",
                                                children: D.intl.string(D.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(u.D, {
                                        className: G.hc,
                                        onClick: w,
                                        children: [
                                            (0, i.jsx)(g.E, {
                                                variant: "eyebrow",
                                                children: D.intl.string(D.t["K8+z4S"]),
                                            }),
                                            (0, i.jsx)(x._, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: G.O6,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(U, {
                                openInPopout: V,
                                channel: t,
                                onClick: () => {
                                    (c(), a());
                                },
                            }),
                            (0, i.jsx)("div", {
                                className: G.ht,
                                children: B.map((e) =>
                                    (0, i.jsx)(
                                        L.C,
                                        {
                                            context: { channel: t, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                (a(), c());
                                            },
                                            aspectRatio: L.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: G.KU,
                                            commandOrigin: v.iw.MINI_SHELF,
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
}
