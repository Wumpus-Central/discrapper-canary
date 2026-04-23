t.d(n, { f: () => U }), t(938796);
var l = t(627968),
    i = t(64700),
    a = t(835245),
    s = t(724002),
    r = t(287174),
    o = t(487899),
    c = t(311907),
    u = t(939249),
    d = t(305866),
    A = t(707554),
    h = t(140735),
    p = t(323384),
    m = t(834730),
    g = t(320448),
    f = t(793574),
    C = t(688810),
    E = t(735991),
    v = t(786115),
    I = t(975412),
    x = t(392054),
    T = t(354138),
    _ = t(111042),
    j = t(767599),
    N = t(267102),
    b = t(246356),
    y = t(111162),
    S = t(954571),
    O = t(795816),
    L = t(887700),
    R = t(855446),
    M = t(652215),
    D = t(985018),
    P = t(976524);
let G = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    k = `vc-activities-${(0, a.A)()}`;
function V(e) {
    let n,
        t,
        { channel: a, openInPopout: r, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: h } =
            ((n = (0, c.bG)([y.default], () => y.default.onlyShowPreviewAppCollections) ? s.W.PREVIEW : s.W.ACTIVE),
            i.useEffect(() => {
                (0, T.An)({ surface: G, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([_.A], () => _.A.getFetchState({ surface: G, activeState: n })),
                voiceBannerCollection: (0, c.bG)([_.A], () => _.A.getCollections({ surface: G, activeState: n }))[0],
            }),
        p = A === _.e.FETCHING,
        m = i.useMemo(() => {
            let e = h?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [h?.application_directory_collection_items]),
        { trackItemImpressionRef: g } = (0, v.A)({
            applicationId: m?.application.id ?? "",
            applicationFlags: m?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: m?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != m ? (0, E.Ii)(m.application) : void 0,
        });
    return null == m || null == h || p
        ? null
        : (null != m.id &&
              null != m.image_hash &&
              (t = (0, j.DH)({ itemId: m.id, hash: m.image_hash, containerWidth: 584 })),
          (0, l.jsxs)(u.D, {
              className: P.V8,
              innerRef: g,
              onClick: () => {
                  d(),
                      (0, I.A)({
                          context: { type: "channel", channel: a },
                          openInPopout: r,
                          analyticsLocation: f.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: m.application.id },
                      });
              },
              children: [
                  (0, l.jsx)("img", { alt: m.description, src: t, className: P.W_ }),
                  (0, l.jsx)("div", { className: P.LV }),
              ],
          }));
}
let U = i.forwardRef(function (e, n) {
    var t;
    let { channel: a, isHovered: s, closePopout: r, onMouseEnter: o, onMouseLeave: c, onClick: E, className: v } = e,
        { id: T, guild_id: _ } = a;
    i.useEffect(() => {
        S.default.track(M.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: T, guild_id: _ });
    }, [T, _]),
        i.useEffect(() => {
            s || r();
        }, [r, s]);
    let j = (0, N.Us)(),
        { analyticsLocations: y, newestAnalyticsLocation: G } = (0, C.Ay)(f.A.ACTIVITIES_MINI_SHELF),
        U = j === M.BRT.POPOUT,
        B = ((t = a.getGuildId()), (0, L.A)({ guildId: t }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => O.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let w = i.useCallback(() => {
            (0, I.A)({
                context: null != a ? { type: "channel", channel: a } : { type: "contextless" },
                openInPopout: U,
                analyticsLocation: G,
            }),
                c(),
                E();
        }, [a, G, E, c, U]),
        H = i.useCallback(
            (e) => {
                o(),
                    S.default.track(M.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: a.id,
                        guild_id: a.getGuildId(),
                    });
            },
            [o, a],
        );
    return (0, l.jsx)(C.f5, {
        value: y,
        children: (0, l.jsx)(b.A, {
            children: (0, l.jsxs)(d.l, {
                ref: n,
                "aria-labelledby": k,
                className: v,
                children: [
                    (0, l.jsx)(A.F, {
                        forceLevel: 2,
                        children: (0, l.jsx)(h.A, {
                            children: (0, l.jsx)(A.H, { id: k, children: D.intl.string(D.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: P.kL,
                        onMouseEnter: H,
                        onMouseLeave: c,
                        children: [
                            (0, l.jsxs)("div", {
                                className: P.gn,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: P.gH,
                                        children: [
                                            (0, l.jsx)(p.k, {
                                                size: "md",
                                                className: P.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, l.jsx)(m.E, {
                                                variant: "eyebrow",
                                                children: D.intl.string(D.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(u.D, {
                                        className: P.hc,
                                        onClick: w,
                                        children: [
                                            (0, l.jsx)(m.E, {
                                                variant: "eyebrow",
                                                children: D.intl.string(D.t["K8+z4S"]),
                                            }),
                                            (0, l.jsx)(g._, {
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
                            (0, l.jsx)(V, {
                                openInPopout: U,
                                channel: a,
                                onClick: () => {
                                    E(), r();
                                },
                            }),
                            (0, l.jsx)("div", {
                                className: P.ht,
                                children: B.map((e) =>
                                    (0, l.jsx)(
                                        R.C,
                                        {
                                            context: { channel: a, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                r(), E();
                                            },
                                            aspectRatio: R.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: P.KU,
                                            commandOrigin: x.iw.MINI_SHELF,
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
