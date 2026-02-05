n.d(t, { f: () => D }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(835245),
    a = n(724002),
    r = n(287174),
    o = n(487899),
    d = n(311907),
    c = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(735991),
    g = n(786115),
    m = n(975412),
    p = n(392054),
    _ = n(354138),
    x = n(111042),
    f = n(767599),
    E = n(267102),
    C = n(246356),
    I = n(111162),
    S = n(954571),
    b = n(795816),
    N = n(887700),
    T = n(855446),
    j = n(652215),
    v = n(985018),
    y = n(176187);
let R = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    O = `vc-activities-${(0, s.A)()}`;
function L(e) {
    let t,
        n,
        { channel: s, openInPopout: r, onClick: h } = e,
        { fetchState: p, voiceBannerCollection: E } =
            ((t = (0, d.bG)([I.default], () => I.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            l.useEffect(() => {
                (0, _.An)({ surface: R, activeState: t });
            }, [t]),
            {
                fetchState: (0, d.bG)([x.A], () => x.A.getFetchState({ surface: R, activeState: t })),
                voiceBannerCollection: (0, d.bG)([x.A], () => x.A.getCollections({ surface: R, activeState: t }))[0],
            }),
        C = p === x.e.FETCHING,
        S = l.useMemo(() => {
            let e = E?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [E?.application_directory_collection_items]),
        { trackItemImpressionRef: b } = (0, g.A)({
            applicationId: S?.application.id ?? "",
            applicationFlags: S?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: S?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != S ? (0, A.Ii)(S.application) : void 0,
        });
    return null == S || null == E || C
        ? null
        : (null != S.id &&
              null != S.image_hash &&
              (n = (0, f.DH)({ itemId: S.id, hash: S.image_hash, containerWidth: 584 })),
          (0, i.jsxs)(c.DUT, {
              className: y.V8,
              innerRef: b,
              onClick: () => {
                  h(),
                      (0, m.A)({
                          context: { type: "channel", channel: s },
                          openInPopout: r,
                          analyticsLocation: u.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: S.application.id },
                      });
              },
              children: [
                  (0, i.jsx)("img", { alt: S.description, src: n, className: y.W_ }),
                  (0, i.jsx)("div", { className: y.LV }),
              ],
          }));
}
let D = l.forwardRef(function (e, t) {
    var n;
    let { channel: s, isHovered: a, closePopout: r, onMouseEnter: o, onMouseLeave: d, onClick: A, className: g } = e,
        { id: _, guild_id: x } = s;
    l.useEffect(() => {
        S.default.track(j.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: _, guild_id: x });
    }, [_, x]),
        l.useEffect(() => {
            a || r();
        }, [r, a]);
    let f = (0, E.Us)(),
        { analyticsLocations: I, newestAnalyticsLocation: R } = (0, h.Ay)(u.A.ACTIVITIES_MINI_SHELF),
        D = f === j.BRT.POPOUT,
        M = ((n = s.getGuildId()), (0, N.A)({ guildId: n }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => b.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let G = l.useCallback(() => {
            (0, m.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: D,
                analyticsLocation: R,
            }),
                d(),
                A();
        }, [s, R, A, d, D]),
        U = l.useCallback(
            (e) => {
                o(),
                    S.default.track(j.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    });
            },
            [o, s],
        );
    return (0, i.jsx)(h.f5, {
        value: I,
        children: (0, i.jsx)(C.A, {
            children: (0, i.jsxs)(c.lGe, {
                ref: t,
                "aria-labelledby": O,
                className: g,
                children: [
                    (0, i.jsx)(c.Fmo, {
                        forceLevel: 2,
                        children: (0, i.jsx)(c.AC4, {
                            children: (0, i.jsx)(c.H, { id: O, children: v.intl.string(v.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: y.kL,
                        onMouseEnter: U,
                        onMouseLeave: d,
                        children: [
                            (0, i.jsxs)("div", {
                                className: y.gn,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: y.gH,
                                        children: [
                                            (0, i.jsx)(c.k9F, {
                                                size: "md",
                                                className: y.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "eyebrow",
                                                children: v.intl.string(v.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.DUT, {
                                        className: y.hc,
                                        onClick: G,
                                        children: [
                                            (0, i.jsx)(c.Text, {
                                                variant: "eyebrow",
                                                children: v.intl.string(v.t["K8+z4S"]),
                                            }),
                                            (0, i.jsx)(c._BQ, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: y.O6,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(L, {
                                openInPopout: D,
                                channel: s,
                                onClick: () => {
                                    A(), r();
                                },
                            }),
                            (0, i.jsx)("div", {
                                className: y.ht,
                                children: M.map((e) =>
                                    (0, i.jsx)(
                                        T.C,
                                        {
                                            context: { channel: s, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                r(), A();
                                            },
                                            aspectRatio: T.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: y.KU,
                                            commandOrigin: p.iw.MINI_SHELF,
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
