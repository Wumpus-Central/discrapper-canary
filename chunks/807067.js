n.d(t, { f: () => R }), n(938796), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(835245),
    a = n(724002),
    s = n(287174),
    o = n(487899),
    c = n(311907),
    u = n(397927),
    d = n(793574),
    f = n(688810),
    p = n(735991),
    h = n(786115),
    b = n(975412),
    g = n(392054),
    m = n(354138),
    A = n(111042),
    y = n(767599),
    O = n(267102),
    j = n(246356),
    v = n(111162),
    x = n(954571),
    E = n(795816),
    _ = n(887700),
    C = n(855446),
    S = n(652215),
    I = n(985018),
    N = n(176187);
let T = s.K.APP_LAUNCHER_IN_VOICE_BANNER,
    P = "vc-activities-".concat((0, i.A)());
function w(e) {
    var t;
    let n,
        i,
        { channel: s, openInPopout: f, onClick: g } = e,
        { fetchState: O, voiceBannerCollection: j } =
            ((n = (0, c.bG)([v.default], () => v.default.onlyShowPreviewAppCollections) ? a.W.PREVIEW : a.W.ACTIVE),
            l.useEffect(() => {
                (0, m.An)({
                    surface: T,
                    activeState: n,
                });
            }, [n]),
            {
                fetchState: (0, c.bG)([A.A], () =>
                    A.A.getFetchState({
                        surface: T,
                        activeState: n,
                    }),
                ),
                voiceBannerCollection: (0, c.bG)([A.A], () =>
                    A.A.getCollections({
                        surface: T,
                        activeState: n,
                    }),
                )[0],
            }),
        x = O === A.e.FETCHING,
        E = l.useMemo(() => {
            let e = null == j ? void 0 : j.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [null == j ? void 0 : j.application_directory_collection_items]),
        { trackItemImpressionRef: _ } = (0, h.A)({
            applicationId: null != (t = null == E ? void 0 : E.application.id) ? t : "",
            applicationFlags: null == E ? void 0 : E.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: null == E ? void 0 : E.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != E ? (0, p.Ii)(E.application) : void 0,
        });
    return null == E || null == j || x
        ? null
        : (null != E.id &&
              null != E.image_hash &&
              (i = (0, y.DH)({
                  itemId: E.id,
                  hash: E.image_hash,
                  containerWidth: 584,
              })),
          (0, r.jsxs)(u.DUT, {
              className: N.V8,
              innerRef: _,
              onClick: () => {
                  g(),
                      (0, b.A)({
                          context: {
                              type: "channel",
                              channel: s,
                          },
                          openInPopout: f,
                          analyticsLocation: d.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: E.application.id },
                      });
              },
              children: [
                  (0, r.jsx)("img", {
                      alt: E.description,
                      src: i,
                      className: N.W_,
                  }),
                  (0, r.jsx)("div", { className: N.LV }),
              ],
          }));
}
let R = l.forwardRef(function (e, t) {
    var n;
    let { channel: i, isHovered: a, closePopout: s, onMouseEnter: o, onMouseLeave: c, onClick: p, className: h } = e,
        { id: m, guild_id: A } = i;
    l.useEffect(() => {
        x.default.track(S.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
            channel_id: m,
            guild_id: A,
        });
    }, [m, A]),
        l.useEffect(() => {
            a || s();
        }, [s, a]);
    let y = (0, O.Us)(),
        { analyticsLocations: v, newestAnalyticsLocation: T } = (0, f.Ay)(d.A.ACTIVITIES_MINI_SHELF),
        R = y === S.BRT.POPOUT,
        D = ((n = i.getGuildId()), (0, _.A)({ guildId: n }).slice(0, 5));
    l.useEffect(() => {
        let e = setTimeout(() => E.LK(), 1000);
        return () => clearTimeout(e);
    }, []);
    let M = l.useCallback(() => {
            (0, b.A)({
                context:
                    null != i
                        ? {
                              type: "channel",
                              channel: i,
                          }
                        : { type: "contextless" },
                openInPopout: R,
                analyticsLocation: T,
            }),
                c(),
                p();
        }, [i, T, p, c, R]),
        L = l.useCallback(
            (e) => {
                o(),
                    x.default.track(S.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: i.id,
                        guild_id: i.getGuildId(),
                    });
            },
            [o, i],
        );
    return (0, r.jsx)(f.f5, {
        value: v,
        children: (0, r.jsx)(j.A, {
            children: (0, r.jsxs)(u.lGe, {
                ref: t,
                "aria-labelledby": P,
                className: h,
                children: [
                    (0, r.jsx)(u.Fmo, {
                        forceLevel: 2,
                        children: (0, r.jsx)(u.AC4, {
                            children: (0, r.jsx)(u.H, {
                                id: P,
                                children: I.intl.string(I.t["2lnYtB"]),
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: N.kL,
                        onMouseEnter: L,
                        onMouseLeave: c,
                        children: [
                            (0, r.jsxs)("div", {
                                className: N.gn,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: N.gH,
                                        children: [
                                            (0, r.jsx)(u.bxf, {
                                                size: "md",
                                                className: N.ch,
                                                color: "var(--interactive-text-active)",
                                            }),
                                            (0, r.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                children: I.intl.string(I.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)(u.DUT, {
                                        className: N.hc,
                                        onClick: M,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                variant: "eyebrow",
                                                children: I.intl.string(I.t["K8+z4S"]),
                                            }),
                                            (0, r.jsx)(u._BQ, {
                                                size: "custom",
                                                width: 12,
                                                height: 12,
                                                color: "var(--interactive-text-active)",
                                                className: N.O6,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(w, {
                                openInPopout: R,
                                channel: i,
                                onClick: () => {
                                    p(), s();
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: N.ht,
                                children: D.map((e) =>
                                    (0, r.jsx)(
                                        C.C,
                                        {
                                            context: {
                                                channel: i,
                                                type: "channel",
                                            },
                                            activityItem: e,
                                            onClick: () => {
                                                s(), p();
                                            },
                                            aspectRatio: C.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: N.KU,
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
