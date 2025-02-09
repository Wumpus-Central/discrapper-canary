n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(420660),
    c = n(100527),
    d = n(906732),
    f = n(140701),
    _ = n(158776),
    p = n(74538),
    h = n(998502),
    m = n(785717),
    g = n(369566),
    E = n(518950),
    v = n(652853),
    y = n(228168),
    I = n(981631),
    T = n(474936),
    b = n(720947);
let S = h.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function A(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: h, profileType: A, animateOnHover: N, onOpenProfile: C, className: R } = e,
        { theme: O } = (0, v.z)(),
        { analyticsLocations: D } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: L } = (0, m.KZ)(),
        x = p.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, T.p9.TIER_2),
        w = r.useMemo(() => t.isNonUserBot() || (0, f.W)(t, h), [t, h]),
        { live: P } = (0, g.Z)(t.id),
        [M] = P,
        { status: k, isMobileOnline: U } = (0, o.cj)([_.Z], () => ({
            status: (0, u.Z)(M) ? I.Skl.STREAMING : _.Z.getStatus(t.id),
            isMobileOnline: _.Z.isMobileOnline(t.id)
        })),
        G = A === y.y0.FULL_SIZE ? l.EFr.SIZE_120 : l.EFr.SIZE_80,
        B = s()(
            b.avatar,
            {
                [b.biteSize]: A === y.y0.BITE_SIZE,
                [b.fullSize]: A === y.y0.FULL_SIZE,
                [b.panel]: A === y.y0.PANEL
            },
            R
        ),
        {
            avatarDecorationSrc: Z,
            avatarSrc: F,
            eventHandlers: V
        } = (0, E.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: G,
            animateOnHover: N
        }),
        j = (0, i.jsx)(S, {
            src: F,
            avatarDecoration: Z,
            size: G,
            'aria-label': t.username,
            imageClassName: null != C ? b.overlay : void 0,
            status: w ? I.Skl.UNKNOWN : k,
            statusBackdropColor: x && !w ? (0, l.QFD)(O) : void 0,
            isMobile: U,
            statusTooltip: !0,
            statusTooltipDelay: y.vB
        });
    return null == C
        ? (0, i.jsx)('div', {
              ...V,
              className: B,
              children: j
          })
        : (0, i.jsx)(l.P3F, {
              ...V,
              className: s()(B, b.clickable),
              focusProps: { ringClassName: b.focusRing },
              onClick: () => {
                  L({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: D
                  }),
                      null == C || C();
              },
              children: j
          });
}
