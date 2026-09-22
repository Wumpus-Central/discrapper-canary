(t.d(n, { f: () => V }), t(938796));
var i = t(477900),
    l = t(582128),
    s = t(132500),
    a = t(724002),
    o = t(287174),
    r = t(487899),
    c = t(17928),
    u = t(939249),
    d = t(305866),
    A = t(707554),
    m = t(140735),
    h = t(323384),
    C = t(834730),
    p = t(320448),
    x = t(793574),
    g = t(688810),
    f = t(735991),
    E = t(786115),
    I = t(975412),
    v = t(392054),
    T = t(993748),
    j = t(111042),
    N = t(939635),
    _ = t(267102),
    O = t(246356),
    b = t(111162),
    y = t(174459),
    S = t(795816),
    R = t(648027),
    D = t(855446),
    L = t(652215),
    M = t(375708),
    P = t(472489);
let k = o.K.APP_LAUNCHER_IN_VOICE_BANNER,
    U = `vc-activities-${(0, s.A)()}`;
function G(e) {
    let n,
        t,
        { channel: s, openInPopout: o, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: m } =
            ((n = (0, c.bG)([b.default], () => b.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            l.useEffect(() => {
                (0, T.An)({ surface: k, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([j.A], () => j.A.getFetchState({ surface: k, activeState: n })),
                voiceBannerCollection: (0, c.bG)([j.A], () => j.A.getCollections({ surface: k, activeState: n }))[0],
            }),
        h = A === j.e.FETCHING,
        C = l.useMemo(() => {
            let e = m?.application_directory_collection_items[0];
            return null == e ? null : e.type === r.L.APPLICATION_BANNER ? e : null;
        }, [m?.application_directory_collection_items]),
        { trackItemImpressionRef: p } = (0, E.A)({
            applicationId: C?.application.id ?? "",
            applicationFlags: C?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: C?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != C ? (0, f.Ii)(C.application) : void 0,
        });
    return null == C || null == m || h
        ? null
        : (null != C.id &&
              null != C.image_hash &&
              (t = (0, N.DH)({ itemId: C.id, hash: C.image_hash, containerWidth: 584 })),
          (0, i.jsxs)(u.D, {
              className: P.V8,
              innerRef: p,
              onClick: () => {
                  (d(),
                      (0, I.A)({
                          context: { type: "channel", channel: s },
                          openInPopout: o,
                          analyticsLocation: x.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: C.application.id },
                      }));
              },
              children: [
                  (0, i.jsx)("img", { alt: C.description, src: t, className: P.W_ }),
                  (0, i.jsx)("div", { className: P.LV }),
              ],
          }));
}
let V = l.forwardRef(function (e, n) {
    var t;
    let { channel: s, isHovered: a, closePopout: o, onMouseEnter: r, onMouseLeave: c, onClick: f, className: E } = e,
        { id: T, guild_id: j } = s;
    (l.useEffect(() => {
        y.default.track(L.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: T, guild_id: j });
    }, [T, j]),
        l.useEffect(() => {
            a || o();
        }, [o, a]));
    let N = (0, _.Us)(),
        { analyticsLocations: b, newestAnalyticsLocation: k } = (0, g.Ay)(x.A.ACTIVITIES_MINI_SHELF),
        V = N === L.BRT.POPOUT,
        B = ((t = s.getGuildId()), (0, R.A)({ guildId: t }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => S.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let w = l.useCallback(() => {
            ((0, I.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: V,
                analyticsLocation: k,
            }),
                c(),
                f());
        }, [s, k, f, c, V]),
        H = l.useCallback(
            (e) => {
                (r(),
                    y.default.track(L.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    }));
            },
            [r, s],
        );
    return (0, i.jsx)(g.f5, {
        value: b,
        children: (0, i.jsx)(O.A, {
            children: (0, i.jsxs)(d.l, {
                ref: n,
                "aria-labelledby": U,
                className: E,
                children: [
                    (0, i.jsx)(A.F, {
                        forceLevel: 2,
                        children: (0, i.jsx)(m.A, {
                            children: (0, i.jsx)(A.H, { id: U, children: M.intl.string(M.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: P.kL,
                        onMouseEnter: H,
                        onMouseLeave: c,
                        children: [
                            (0, i.jsxs)("div", {
                                className: P.gn,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: P.gH,
                                        children: [
                                            (0, i.jsx)(h.k, {
                                                size: "md",
                                                className: P.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, i.jsx)(C.E, {
                                                variant: "eyebrow",
                                                children: M.intl.string(M.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(u.D, {
                                        className: P.hc,
                                        onClick: w,
                                        children: [
                                            (0, i.jsx)(C.E, {
                                                variant: "eyebrow",
                                                children: M.intl.string(M.t["K8+z4S"]),
                                            }),
                                            (0, i.jsx)(p._, {
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
                            (0, i.jsx)(G, {
                                openInPopout: V,
                                channel: s,
                                onClick: () => {
                                    (f(), o());
                                },
                            }),
                            (0, i.jsx)("div", {
                                className: P.ht,
                                children: B.map((e) =>
                                    (0, i.jsx)(
                                        D.C,
                                        {
                                            context: { channel: s, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                (o(), f());
                                            },
                                            aspectRatio: D.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: P.KU,
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
});
