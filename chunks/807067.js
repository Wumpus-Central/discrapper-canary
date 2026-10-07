(t.d(n, { f: () => V }), t(938796));
var l = t(477900),
    i = t(582128),
    a = t(132500),
    s = t(724002),
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
    j = t(993748),
    T = t(111042),
    N = t(939635),
    _ = t(267102),
    b = t(246356),
    O = t(111162),
    y = t(174459),
    S = t(795816),
    R = t(648027),
    D = t(855446),
    L = t(652215),
    M = t(375708),
    P = t(472489);
let k = o.K.APP_LAUNCHER_IN_VOICE_BANNER,
    U = `vc-activities-${(0, a.A)()}`;
function G(e) {
    let n,
        t,
        { channel: a, openInPopout: o, onClick: d } = e,
        { fetchState: A, voiceBannerCollection: m } =
            ((n = (0, c.bG)([O.default], () => O.default.onlyShowPreviewAppCollections) ? s.W.PREVIEW : s.W.ACTIVE),
            i.useEffect(() => {
                (0, j.An)({ surface: k, activeState: n });
            }, [n]),
            {
                fetchState: (0, c.bG)([T.A], () => T.A.getFetchState({ surface: k, activeState: n })),
                voiceBannerCollection: (0, c.bG)([T.A], () => T.A.getCollections({ surface: k, activeState: n }))[0],
            }),
        h = A === T.e.FETCHING,
        C = i.useMemo(() => {
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
          (0, l.jsxs)(u.D, {
              className: P.V8,
              innerRef: p,
              onClick: () => {
                  (d(),
                      (0, I.A)({
                          context: { type: "channel", channel: a },
                          openInPopout: o,
                          analyticsLocation: x.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: C.application.id },
                      }));
              },
              children: [
                  (0, l.jsx)("img", { alt: C.description, src: t, className: P.W_ }),
                  (0, l.jsx)("div", { className: P.LV }),
              ],
          }));
}
function V(e) {
    var n;
    let {
            channel: t,
            isHovered: a,
            closePopout: s,
            onMouseEnter: o,
            onMouseLeave: r,
            onClick: c,
            className: f,
            ref: E,
        } = e,
        { id: j, guild_id: T } = t;
    (i.useEffect(() => {
        y.default.track(L.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: j, guild_id: T });
    }, [j, T]),
        i.useEffect(() => {
            a || s();
        }, [s, a]));
    let N = (0, _.Us)(),
        { analyticsLocations: O, newestAnalyticsLocation: k } = (0, g.Ay)(x.A.ACTIVITIES_MINI_SHELF),
        V = N === L.BRT.POPOUT,
        B = ((n = t.getGuildId()), (0, R.A)({ guildId: n }).slice(0, 5));
    i.useEffect(() => {
        let e = setTimeout(() => S.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let H = i.useCallback(() => {
            ((0, I.A)({
                context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                openInPopout: V,
                analyticsLocation: k,
            }),
                r(),
                c());
        }, [t, k, c, r, V]),
        w = i.useCallback(
            (e) => {
                (o(),
                    y.default.track(L.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: t.id,
                        guild_id: t.getGuildId(),
                    }));
            },
            [o, t],
        );
    return (0, l.jsx)(g.f5, {
        value: O,
        children: (0, l.jsx)(b.A, {
            children: (0, l.jsxs)(d.l, {
                ref: E,
                "aria-labelledby": U,
                className: f,
                children: [
                    (0, l.jsx)(A.F, {
                        forceLevel: 2,
                        children: (0, l.jsx)(m.A, {
                            children: (0, l.jsx)(A.H, { id: U, children: M.intl.string(M.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: P.kL,
                        onMouseEnter: w,
                        onMouseLeave: r,
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
                                                children: M.intl.string(M.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(u.D, {
                                        className: P.hc,
                                        onClick: H,
                                        children: [
                                            (0, l.jsx)(C.E, {
                                                variant: "eyebrow",
                                                children: M.intl.string(M.t["K8+z4S"]),
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
                            (0, l.jsx)(G, {
                                openInPopout: V,
                                channel: t,
                                onClick: () => {
                                    (c(), s());
                                },
                            }),
                            (0, l.jsx)("div", {
                                className: P.ht,
                                children: B.map((e) =>
                                    (0, l.jsx)(
                                        D.C,
                                        {
                                            context: { channel: t, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                (s(), c());
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
}
