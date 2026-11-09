n.d(t, { A: () => S });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(855986),
    a = n(192308),
    o = n(821609),
    u = n(403581),
    c = n(793574),
    d = n(688810),
    m = n(676030),
    p = n(71393),
    g = n(287809),
    h = n(129230),
    f = n(834708),
    x = n(154486);
let A = (0, n(945810).mj)({
    name: "2026-10-hd-streaming-contextual-referrals",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var v = n(232198),
    E = n(652215),
    C = n(753070),
    I = n(792996),
    j = n(890054);
function S(e) {
    let { streamerId: t, guildId: n, idle: i } = e,
        s = (0, r.bG)([g.default], () => g.default.getUser(t) ?? null, [t]),
        a = (0, r.bG)([p.A], () => (null != n ? (p.A.getGuild(n)?.premiumTier ?? null) : null), [n]),
        o = (0, m.A)(C.jQ.PRESET_VIDEO, C.on.RESOLUTION_1080, C.kn.FPS_60, s ?? void 0, a),
        u = (0, f.d)(s),
        c = A.useConfig({ location: "HD_STREAMING_CONTEXTUAL_UPSELL" }).enabled;
    return null != s && u && !o && c ? (0, l.jsx)(_, { streamer: s, idle: i }) : null;
}
function _(e) {
    let { streamer: t, idle: n } = e;
    return (0, x.p)(t.id) ? (0, l.jsx)(b, { recipient: t, idle: n }) : null;
}
function b(e) {
    let { recipient: t, idle: i } = e,
        { analyticsLocations: r } = (0, d.Ay)(c.A.HD_STREAMING_CONTEXTUAL_UPSELL);
    return (0, l.jsx)("div", {
        className: s()(j.x, { [j.N]: i }),
        children: (0, l.jsx)(o.$, {
            variant: "overlay-primary",
            size: "sm",
            text: I.intl.string(I.t["n/a182"]),
            icon: u.NitroWheelIcon,
            onClick: function (e) {
                (e.stopPropagation(),
                    h.default.track(E.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: r }),
                    (0, a.mM)(async () => {
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
