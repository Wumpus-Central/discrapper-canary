n.d(t, { f: () => M }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(835245),
    a = n(724002),
    r = n(287174),
    o = n(487899),
    c = n(311907),
    d = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(735991),
    _ = n(786115),
    m = n(975412),
    g = n(392054),
    p = n(354138),
    f = n(111042),
    x = n(767599),
    E = n(267102),
    I = n(246356),
    C = n(111162),
    N = n(954571),
    T = n(795816),
    S = n(887700),
    b = n(855446),
    y = n(652215),
    v = n(985018),
    j = n(690076);
let R = r.K.APP_LAUNCHER_IN_VOICE_BANNER,
    O = `vc-activities-${(0, s.A)()}`;
function L(e) {
    let t,
        n,
        { channel: s, openInPopout: r, onClick: h } = e,
        { fetchState: g, voiceBannerCollection: E } =
            ((t = (0, c.bG)([C.default], () => C.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            l.useEffect(() => {
                (0, p.An)({ surface: R, activeState: t });
            }, [t]),
            {
                fetchState: (0, c.bG)([f.A], () => f.A.getFetchState({ surface: R, activeState: t })),
                voiceBannerCollection: (0, c.bG)([f.A], () => f.A.getCollections({ surface: R, activeState: t }))[0],
            }),
        I = g === f.e.FETCHING,
        N = l.useMemo(() => {
            let e = E?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [E?.application_directory_collection_items]),
        { trackItemImpressionRef: T } = (0, _.A)({
            applicationId: N?.application.id ?? "",
            applicationFlags: N?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: N?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != N ? (0, A.Ii)(N.application) : void 0,
        });
    return null == N || null == E || I
        ? null
        : (null != N.id &&
              null != N.image_hash &&
              (n = (0, x.DH)({ itemId: N.id, hash: N.image_hash, containerWidth: 584 })),
          (0, i.jsxs)(d.DUT, {
              className: j.V8,
              innerRef: T,
              onClick: () => {
                  h(),
                      (0, m.A)({
                          context: { type: "channel", channel: s },
                          openInPopout: r,
                          analyticsLocation: u.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: N.application.id },
                      });
              },
              children: [
                  (0, i.jsx)("img", { alt: N.description, src: n, className: j.W_ }),
                  (0, i.jsx)("div", { className: j.LV }),
              ],
          }));
}
let M = l.forwardRef(function (e, t) {
    var n;
    let { channel: s, isHovered: a, closePopout: r, onMouseEnter: o, onMouseLeave: c, onClick: A, className: _ } = e,
        { id: p, guild_id: f } = s;
    l.useEffect(() => {
        N.default.track(y.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: p, guild_id: f });
    }, [p, f]),
        l.useEffect(() => {
            a || r();
        }, [r, a]);
    let x = (0, E.Us)(),
        { analyticsLocations: C, newestAnalyticsLocation: R } = (0, h.Ay)(u.A.ACTIVITIES_MINI_SHELF),
        M = x === y.BRT.POPOUT,
        D = ((n = s.getGuildId()), (0, S.A)({ guildId: n }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => T.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let U = l.useCallback(() => {
            (0, m.A)({
                context: null != s ? { type: "channel", channel: s } : { type: "contextless" },
                openInPopout: M,
                analyticsLocation: R,
            }),
                c(),
                A();
        }, [s, R, A, c, M]),
        G = l.useCallback(
            (e) => {
                o(),
                    N.default.track(y.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: s.id,
                        guild_id: s.getGuildId(),
                    });
            },
            [o, s],
        );
    return (0, i.jsx)(h.f5, {
        value: C,
        children: (0, i.jsx)(I.A, {
            children: (0, i.jsxs)(d.lGe, {
                ref: t,
                "aria-labelledby": O,
                className: _,
                children: [
                    (0, i.jsx)(d.Fmo, {
                        forceLevel: 2,
                        children: (0, i.jsx)(d.AC4, {
                            children: (0, i.jsx)(d.H, { id: O, children: v.intl.string(v.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.kL,
                        onMouseEnter: G,
                        onMouseLeave: c,
                        children: [
                            (0, i.jsxs)("div", {
                                className: j.gn,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: j.gH,
                                        children: [
                                            (0, i.jsx)(d.k9F, {
                                                size: "md",
                                                className: j.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, i.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                children: v.intl.string(v.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.DUT, {
                                        className: j.hc,
                                        onClick: U,
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                children: v.intl.string(v.t["K8+z4S"]),
                                            }),
                                            (0, i.jsx)(d._BQ, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: j.O6,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)(L, {
                                openInPopout: M,
                                channel: s,
                                onClick: () => {
                                    A(), r();
                                },
                            }),
                            (0, i.jsx)("div", {
                                className: j.ht,
                                children: D.map((e) =>
                                    (0, i.jsx)(
                                        b.C,
                                        {
                                            context: { channel: s, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                r(), A();
                                            },
                                            aspectRatio: b.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: j.KU,
                                            commandOrigin: g.iw.MINI_SHELF,
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
