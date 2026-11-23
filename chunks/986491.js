n.d(t, { A: () => I });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(855986),
    s = n(192308),
    o = n(821609),
    u = n(403581),
    c = n(793574),
    d = n(688810),
    m = n(676030),
    p = n(71393),
    g = n(287809),
    f = n(129230),
    h = n(834708),
    A = n(154486);
let x = (0, n(945810).mj)({
    name: "2026-10-hd-streaming-contextual-referrals",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = n(232198),
    E = n(652215),
    C = n(753070),
    j = n(792996),
    S = n(890054);
function I(e) {
    let { streamerId: t, guildId: n, idle: i } = e,
        r = (0, a.bG)([g.default], () => g.default.getUser(t) ?? null, [t]),
        s = (0, a.bG)([p.A], () => (null != n ? (p.A.getGuild(n)?.premiumTier ?? null) : null), [n]),
        o = (0, m.A)(C.jQ.PRESET_VIDEO, C.on.RESOLUTION_1080, C.kn.FPS_60, r ?? void 0, s),
        u = (0, h.d)(r),
        c = x.useConfig({ location: "HD_STREAMING_CONTEXTUAL_UPSELL" }).enabled;
    return null != r && u && !o && c ? (0, l.jsx)(b, { streamer: r, idle: i }) : null;
}
function b(e) {
    let { streamer: t, idle: n } = e;
    return (0, A.p)(t.id) ? (0, l.jsx)(y, { recipient: t, idle: n }) : null;
}
function y(e) {
    let { recipient: t, idle: i } = e,
        { analyticsLocations: a } = (0, d.Ay)(c.A.HD_STREAMING_CONTEXTUAL_UPSELL);
    return (0, l.jsx)("div", {
        className: r()(S.x, { [S.N]: i }),
        children: (0, l.jsx)(o.$, {
            variant: "overlay-primary",
            size: "sm",
            text: j.intl.string(j.t["n/a182"]),
            icon: u.NitroWheelIcon,
            onClick: function (e) {
                (e.stopPropagation(),
                    f.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: a }),
                    (0, s.mM)(async () => {
                        let { default: e } = await Promise.all([
                            n.e(768071),
                            n.e(492599),
                            n.e(531741),
                            n.e(465157),
                            n.e(819305),
                            n.e(313699),
                        ]).then(n.bind(n, 536110));
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                recipient: t,
                                sourceAnalyticsLocation: c.A.HD_STREAMING_CONTEXTUAL_UPSELL,
                                modalVariant: v.H.HD_STREAMING,
                            });
                    }));
            },
            onDoubleClick: (e) => e.stopPropagation(),
            onMouseDown: (e) => e.stopPropagation(),
        }),
    });
}
