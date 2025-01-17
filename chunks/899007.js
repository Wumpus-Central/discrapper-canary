r.d(n, {
    Z: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(420660),
    f = r(100527),
    _ = r(906732),
    h = r(140701),
    p = r(158776),
    m = r(74538),
    g = r(998502),
    E = r(785717),
    v = r(369566),
    I = r(518950),
    T = r(652853),
    b = r(228168),
    y = r(981631),
    S = r(474936),
    A = r(882636);
let N = g.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;
function C(e) {
    let { user: n, displayProfile: r, guildId: i, channelId: o, profileType: g, animateOnHover: C, onOpenProfile: R, className: O } = e,
        { theme: D } = (0, T.z)(),
        { analyticsLocations: L } = (0, _.ZP)(f.Z.AVATAR),
        { trackUserProfileAction: x } = (0, E.KZ)(),
        w = m.ZP.isPremiumAtLeast(null == r ? void 0 : r.premiumType, S.p9.TIER_2),
        P = s.useMemo(() => n.isNonUserBot() || (0, h.W)(n, o), [n, o]),
        { live: M } = (0, v.Z)(n.id),
        [k] = M,
        { status: U, isMobileOnline: B } = (0, u.cj)([p.Z], () => ({
            status: (0, d.Z)(k) ? y.Skl.STREAMING : p.Z.getStatus(n.id),
            isMobileOnline: p.Z.isMobileOnline(n.id)
        })),
        G = g === b.y0.FULL_SIZE ? c.AvatarSizes.SIZE_120 : c.AvatarSizes.SIZE_80,
        Z = l()(
            A.avatar,
            {
                [A.biteSize]: g === b.y0.BITE_SIZE,
                [A.fullSize]: g === b.y0.FULL_SIZE,
                [A.panel]: g === b.y0.PANEL
            },
            O
        ),
        {
            avatarDecorationSrc: F,
            avatarSrc: V,
            eventHandlers: j
        } = (0, I.Z)({
            user: n,
            guildId: null != r ? r.guildId : i,
            size: G,
            animateOnHover: C
        }),
        H = (0, a.jsx)(N, {
            src: V,
            avatarDecoration: F,
            size: G,
            'aria-label': n.username,
            imageClassName: null != R ? A.overlay : void 0,
            status: P ? y.Skl.UNKNOWN : U,
            statusBackdropColor: w && !P ? (0, c.getStatusBackdropColor)(D) : void 0,
            isMobile: B,
            statusTooltip: !0,
            statusTooltipDelay: b.vB
        });
    return null == R
        ? (0, a.jsx)('div', {
              ...j,
              className: Z,
              children: H
          })
        : (0, a.jsx)(c.Clickable, {
              ...j,
              className: l()(Z, A.clickable),
              focusProps: { ringClassName: A.focusRing },
              onClick: () => {
                  x({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: L
                  }),
                      null == R || R();
              },
              children: H
          });
}
