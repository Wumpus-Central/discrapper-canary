t.d(n, { f: () => U }), t(938796);
var l = t(477900),
    i = t(582128),
    s = t(132500),
    a = t(724002),
    r = t(287174),
    o = t(487899),
    c = t(17928),
    u = t(939249),
    d = t(305866),
    A = t(707554),
    m = t(140735),
    h = t(323384),
    C = t(834730),
    E = t(320448),
    p = t(793574),
    g = t(688810),
    f = t(735991),
    x = t(786115),
    I = t(975412),
    T = t(392054),
    v = t(993748),
    _ = t(111042),
    j = t(939635),
    N = t(267102),
    b = t(246356),
    S = t(111162),
    O = t(174459),
    y = t(795816),
    R = t(648027),
    M = t(855446),
    L = t(652215),
    D = t(375708),
    P = t(472489);
let k = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    G = `vc-activities-${(0, s.A)()}`;
function V(e) {
    let n,
        t,
        { channel: s, openInPopout: r, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: m } =
            ((n = (0, c.bG)([S.default], () => S.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            i.useEffect(() => {
                (0, v.An)({ surface: k, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([_.A], () => _.A.getFetchState({ surface: k, activeState: n })),
                voiceBannerCollection: (0, c.bG)([_.A], () => _.A.getCollections({ surface: k, activeState: n }))[0],
            }),
        h = A === _.e.FETCHING,
        C = i.useMemo(() => {
            let e = m?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [m?.application_directory_collection_items]),
        { trackItemImpressionRef: E } = (0, x.A)({
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
              (t = (0, j.DH)({ itemId: C.id, hash: C.image_hash, containerWidth: 584 })),
          (0, l.jsxs)(u.D, {
              className: P.V8,
              innerRef: E,
              onClick: () => {
                  d(),
                      (0, I.A)({
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
let U = i.forwardRef(function (e, n) {
    var t;
    let { channel: s, isHovered: a, closePopout: r, onMouseEnter: o, onMouseLeave: c, onClick: f, className: x } = e,
        { id: v, guild_id: _ } = s;
    i.useEffect(() => {
        O.default.track(L.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: v, guild_id: _ });
    }, [v, _]),
        i.useEffect(() => {
            a || r();
        }, [r, a]);
    let j = (0, N.Us)(),
        { analyticsLocations: S, newestAnalyticsLocation: k } = (0, g.Ay)(p.A.ACTIVITIES_MINI_SHELF),
        U = j === L.BRT.POPOUT,
        B = ((t = s.getGuildId()), (0, R.A)({ guildId: t }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => y.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let H = i.useCallback(() => {
            (0, I.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: U,
                analyticsLocation: k,
            }),
                c(),
                f();
        }, [s, k, f, c, U]),
        w = i.useCallback(
            (e) => {
                o(),
                    O.default.track(L.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    });
            },
            [o, s],
        );
    return (0, l.jsx)(g.f5, {
        value: S,
        children: (0, l.jsx)(b.A, {
            children: (0, l.jsxs)(d.l, {
                ref: n,
                "aria-labelledby": G,
                className: x,
                children: [
                    (0, l.jsx)(A.F, {
                        forceLevel: 2,
                        children: (0, l.jsx)(m.A, {
                            children: (0, l.jsx)(A.H, { id: G, children: D.intl.string(D.t["2lnYtB"]) }),
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
                                            (0, l.jsx)(h.k, {
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
                            (0, l.jsx)(V, {
                                openInPopout: U,
                                channel: s,
                                onClick: () => {
                                    f(), r();
                                },
                            }),
                            (0, l.jsx)("div", {
                                className: P.ht,
                                children: B.map((e) =>
                                    (0, l.jsx)(
                                        M.C,
                                        {
                                            context: { channel: s, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                r(), f();
                                            },
                                            aspectRatio: M.C.AspectRatio.THIRTEEN_BY_ELEVEN,
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
