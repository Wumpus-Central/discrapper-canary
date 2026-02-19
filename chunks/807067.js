"use strict";
n.d(t, { f: () => M }), n(938796);
var i = n(627968),
    s = n(64700),
    l = n(835245),
    r = n(724002),
    a = n(287174),
    o = n(487899),
    c = n(311907),
    d = n(397927),
    u = n(793574),
    h = n(688810),
    A = n(735991),
    p = n(786115),
    g = n(975412),
    m = n(392054),
    _ = n(354138),
    f = n(111042),
    x = n(767599),
    C = n(267102),
    E = n(246356),
    I = n(111162),
    b = n(954571),
    N = n(795816),
    S = n(887700),
    T = n(855446),
    v = n(652215),
    y = n(985018),
    j = n(176187);
let R = a.K.APP_LAUNCHER_IN_VOICE_BANNER,
    O = `vc-activities-${(0, l.A)()}`;
function L(e) {
    let t,
        n,
        { channel: l, openInPopout: a, onClick: h } = e,
        { fetchState: m, voiceBannerCollection: C } =
            ((t = (0, c.bG)([I.default], () => I.default.onlyShowPreviewAppCollections) ? r.W.PREVIEW : r.W.ACTIVE),
            s.useEffect(() => {
                (0, _.An)({ surface: R, activeState: t });
            }, [t]),
            {
                fetchState: (0, c.bG)([f.A], () => f.A.getFetchState({ surface: R, activeState: t })),
                voiceBannerCollection: (0, c.bG)([f.A], () => f.A.getCollections({ surface: R, activeState: t }))[0],
            }),
        E = m === f.e.FETCHING,
        b = s.useMemo(() => {
            let e = C?.application_directory_collection_items[0];
            return null == e ? null : e.type === o.L.APPLICATION_BANNER ? e : null;
        }, [C?.application_directory_collection_items]),
        { trackItemImpressionRef: N } = (0, p.A)({
            applicationId: b?.application.id ?? "",
            applicationFlags: b?.application.flags,
            sectionName: "app_launcher_in_voice_banner",
            sectionPosition: b?.position,
            sectionOverallPosition: 0,
            promotionalLabel: null != b ? (0, A.Ii)(b.application) : void 0,
        });
    return null == b || null == C || E
        ? null
        : (null != b.id &&
              null != b.image_hash &&
              (n = (0, x.DH)({ itemId: b.id, hash: b.image_hash, containerWidth: 584 })),
          (0, i.jsxs)(d.DUT, {
              className: j.V8,
              innerRef: N,
              onClick: () => {
                  h(),
                      (0, g.A)({
                          context: { type: "channel", channel: l },
                          openInPopout: a,
                          analyticsLocation: u.A.APP_LAUNCHER_IN_VOICE_BANNER,
                          initialState: { applicationId: b.application.id },
                      });
              },
              children: [
                  (0, i.jsx)("img", { alt: b.description, src: n, className: j.W_ }),
                  (0, i.jsx)("div", { className: j.LV }),
              ],
          }));
}
let M = s.forwardRef(function (e, t) {
    var n;
    let { channel: l, isHovered: r, closePopout: a, onMouseEnter: o, onMouseLeave: c, onClick: A, className: p } = e,
        { id: _, guild_id: f } = l;
    s.useEffect(() => {
        b.default.track(v.HAw.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, { channel_id: _, guild_id: f });
    }, [_, f]),
        s.useEffect(() => {
            r || a();
        }, [a, r]);
    let x = (0, C.Us)(),
        { analyticsLocations: I, newestAnalyticsLocation: R } = (0, h.Ay)(u.A.ACTIVITIES_MINI_SHELF),
        M = x === v.BRT.POPOUT,
        D = ((n = l.getGuildId()), (0, S.A)({ guildId: n }).slice(0, 5));
    s.useEffect(() => {
        let e = setTimeout(() => N.LK(), 1e3);
        return () => clearTimeout(e);
    }, []);
    let G = s.useCallback(() => {
            (0, g.A)({
                context: null != l ? { type: "channel", channel: l } : { type: "contextless" },
                openInPopout: M,
                analyticsLocation: R,
            }),
                c(),
                A();
        }, [l, R, A, c, M]),
        U = s.useCallback(
            (e) => {
                o(),
                    b.default.track(v.HAw.ACTIVITIES_MINI_SHELF_HOVERED, {
                        channel_id: l.id,
                        guild_id: l.getGuildId(),
                    });
            },
            [o, l],
        );
    return (0, i.jsx)(h.f5, {
        value: I,
        children: (0, i.jsx)(E.A, {
            children: (0, i.jsxs)(d.lGe, {
                ref: t,
                "aria-labelledby": O,
                className: p,
                children: [
                    (0, i.jsx)(d.Fmo, {
                        forceLevel: 2,
                        children: (0, i.jsx)(d.AC4, {
                            children: (0, i.jsx)(d.H, { id: O, children: y.intl.string(y.t["2lnYtB"]) }),
                        }),
                    }),
                    (0, i.jsxs)("div", {
                        className: j.kL,
                        onMouseEnter: U,
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
                                                children: y.intl.string(y.t.f3Cz25),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(d.DUT, {
                                        className: j.hc,
                                        onClick: G,
                                        children: [
                                            (0, i.jsx)(d.Text, {
                                                variant: "eyebrow",
                                                children: y.intl.string(y.t["K8+z4S"]),
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
                                channel: l,
                                onClick: () => {
                                    A(), a();
                                },
                            }),
                            (0, i.jsx)("div", {
                                className: j.ht,
                                children: D.map((e) =>
                                    (0, i.jsx)(
                                        T.C,
                                        {
                                            context: { channel: l, type: "channel" },
                                            activityItem: e,
                                            onClick: () => {
                                                a(), A();
                                            },
                                            aspectRatio: T.C.AspectRatio.THIRTEEN_BY_ELEVEN,
                                            animatedDivClass: j.KU,
                                            commandOrigin: m.iw.MINI_SHELF,
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
