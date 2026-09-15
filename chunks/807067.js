(t.d(n, { f: () => V }), t(938796));
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
    p = t(320448),
    g = t(793574),
    E = t(688810),
    f = t(735991),
    x = t(786115),
    v = t(975412),
    I = t(392054),
    T = t(993748),
    j = t(111042),
    N = t(939635),
    _ = t(267102),
    b = t(246356),
    O = t(111162),
    S = t(174459),
    y = t(795816),
    R = t(648027),
    M = t(855446),
    L = t(652215),
    D = t(375708),
    P = t(472489);
let k = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    G = `vc-activities-${(0, s.A)()}`;
function U(e) {
    let n,
        t,
        { channel: s, openInPopout: r, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: m } =
            ((n = (0, c.bG)([O.default], () => O.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            i.useEffect(() => {
                (0, T.An)({ surface: k, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([j.A], () => j.A.getFetchState({ surface: k, activeState: n })),
                voiceBannerCollection: (0, c.bG)([j.A], () => j.A.getCollections({ surface: k, activeState: n }))[0],
            }),
        h = A === j.e.FETCHING,
        C = i.useMemo(() => {
            let e = m?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [m?.application_directory_collection_items]),
        { trackItemImpressionRef: p } = (0, x.A)({
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
          (0, l.jsxs)(u.D, {
              className: P.V8,
              innerRef: p,
              onClick: () => {
                  (d(),
                      (0, v.A)({
                          context: { type: "channel", channel: s },
                          openInPopout: r,
                          analyticsLocation: g.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: C.application.id },
                      }));
              },
              children: [
                  (0, l.jsx)("img", { alt: C.description, src: t, className: P.W_ }),
                  (0, l.jsx)("div", { className: P.LV }),
              ],
          }));
}
let V = i.forwardRef(function (e, n) {
    var t;
    let { channel: s, isHovered: a, closePopout: r, onMouseEnter: o, onMouseLeave: c, onClick: f, className: x } = e,
        { id: T, guild_id: j } = s;
    (i.useEffect(() => {
        S.default.track(L.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: T, guild_id: j });
    }, [T, j]),
        i.useEffect(() => {
            a || r();
        }, [r, a]));
    let N = (0, _.Us)(),
        { analyticsLocations: O, newestAnalyticsLocation: k } = (0, E.Ay)(g.A.ACTIVITIES_MINI_SHELF),
        V = N === L.BRT.POPOUT,
        B = ((t = s.getGuildId()), (0, R.A)({ guildId: t }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => y.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let H = i.useCallback(() => {
            ((0, v.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: V,
                analyticsLocation: k,
            }),
                c(),
                f());
        }, [s, k, f, c, V]),
        w = i.useCallback(
            (e) => {
                (o(),
                    S.default.track(L.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    }));
            },
            [o, s],
        );
    return (0, l.jsx)(E.f5, {
        value: O,
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
                                            (0, l.jsx)(p._, {
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
                                    (f(), r());
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
                                                (r(), f());
                                            },
                                            aspectRatio: M.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: P.KU,
                                            commandOrigin: I.iw.MINI_SHELF,
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
