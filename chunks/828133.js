n.d(t, { A: () => N });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(192308),
    u = n(821609),
    c = n(403581),
    d = n(793574),
    m = n(688810),
    g = n(427358),
    p = n(994500),
    f = n(287809),
    h = n(174459),
    x = n(158045),
    A = n(851746),
    v = n(103411),
    E = n(326084);
let C = (0, n(945810).mj)({
    name: "2026-10-hd-streaming-contextual-referrals",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(232198),
    I = n(652215),
    S = n(105292),
    _ = n(890054);
function N(e) {
    let { streamerId: t, idle: n } = e,
        l = (0, a.bG)([f.default], () => f.default.getUser(t) ?? null, [t]),
        s = (0, v.m)(),
        r = x.Ay.canStreamQuality(x.Ay.StreamQuality.HIGH, l),
        o = (0, a.bG)(
            [p.A, g.A, A.A],
            () => {
                if (null == l) return !1;
                let e = g.A.getUserAffinity(l.id),
                    t = A.A.getReferralsRemaining();
                return (
                    !l.bot &&
                    p.A.isFriend(l.id) &&
                    !p.A.isBlockedOrIgnored(l.id) &&
                    e?.communicationRank != null &&
                    e.communicationRank <= 20 &&
                    null != t &&
                    t > 0 &&
                    !A.A.getSentUserIds().includes(l.id)
                );
            },
            [l],
        ),
        u = C.useConfig({ location: "HD_STREAMING_CONTEXTUAL_UPSELL" }).enabled;
    return null != l && s && o && !r && u ? (0, i.jsx)(b, { streamer: l, idle: n }) : null;
}
function b(e) {
    var t;
    let n,
        s,
        { streamer: r, idle: o } = e;
    return ((t = r.id),
    (n = (0, a.bG)([A.A], () => null != t && A.A.getEligibleUsers().has(t), [t])),
    (s = (0, a.bG)([A.A], () => null != t && A.A.hasFetchedUserEligibility(t), [t])),
    l.useEffect(() => {
        if (null != t && !s) {
            let e = A.A.getSentUserIds();
            A.A.isFetchingUserEligibility(t) || e.includes(t) || (0, E.dy)([t]);
        }
    }, [t, s]),
    n)
        ? (0, i.jsx)(y, { recipient: r, idle: o })
        : null;
}
function y(e) {
    let { recipient: t, idle: l } = e,
        { analyticsLocations: s } = (0, m.Ay)(d.A.HD_STREAMING_CONTEXTUAL_UPSELL);
    return (0, i.jsx)("div", {
        className: r()(_.x, { [_.N]: l }),
        children: (0, i.jsx)(u.$, {
            variant: "overlay-primary",
            size: "sm",
            text: S.intl.string(S.t.JSSBzo),
            icon: c.t,
            onClick: function (e) {
                (e.stopPropagation(),
                    h.default.track(I.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("962811"),
                            n.e("492599"),
                            n.e("868214"),
                            n.e("661814"),
                            n.e("819305"),
                            n.e("313699"),
                        ]).then(n.bind(n, 536110));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                recipient: t,
                                sourceAnalyticsLocation: d.A.HD_STREAMING_CONTEXTUAL_UPSELL,
                                modalVariant: j.H.HD_STREAMING,
                            });
                    }));
            },
            onDoubleClick: (e) => e.stopPropagation(),
            onMouseDown: (e) => e.stopPropagation(),
        }),
    });
}
