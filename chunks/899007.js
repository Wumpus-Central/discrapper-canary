r.d(n, {
    Z: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(420660),
    f = r(100527),
    p = r(906732),
    h = r(140701),
    _ = r(158776),
    m = r(74538),
    g = r(998502),
    E = r(785717),
    v = r(369566),
    y = r(518950),
    b = r(652853),
    I = r(228168),
    T = r(981631),
    S = r(474936),
    A = r(882636);
let C = g.ZP.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;
function N(e) {
    let { user: n, displayProfile: r, guildId: i, channelId: s, profileType: g, animateOnHover: N, onOpenProfile: R, className: O } = e,
        { theme: D } = (0, b.z)(),
        { analyticsLocations: x } = (0, p.ZP)(f.Z.AVATAR),
        { trackUserProfileAction: L } = (0, E.KZ)(),
        w = m.ZP.isPremiumAtLeast(null == r ? void 0 : r.premiumType, S.p9.TIER_2),
        P = o.useMemo(() => n.isNonUserBot() || (0, h.W)(n, s), [n, s]),
        { live: M } = (0, v.Z)(n.id),
        [k] = M,
        { status: U, isMobileOnline: B } = (0, u.cj)([_.Z], () => ({
            status: (0, d.Z)(k) ? T.Skl.STREAMING : _.Z.getStatus(n.id),
            isMobileOnline: _.Z.isMobileOnline(n.id)
        })),
        G = g === I.y0.FULL_SIZE ? c.AvatarSizes.SIZE_120 : c.AvatarSizes.SIZE_80,
        Z = l()(
            A.avatar,
            {
                [A.biteSize]: g === I.y0.BITE_SIZE,
                [A.fullSize]: g === I.y0.FULL_SIZE,
                [A.panel]: g === I.y0.PANEL
            },
            O
        ),
        {
            avatarDecorationSrc: F,
            avatarSrc: V,
            eventHandlers: j
        } = (0, y.Z)({
            user: n,
            guildId: null != r ? r.guildId : i,
            size: G,
            animateOnHover: N
        }),
        H = (0, a.jsx)(C, {
            src: V,
            avatarDecoration: F,
            size: G,
            'aria-label': n.username,
            imageClassName: null != R ? A.overlay : void 0,
            status: P ? T.Skl.UNKNOWN : U,
            statusBackdropColor: w && !P ? (0, c.getStatusBackdropColor)(D) : void 0,
            isMobile: B,
            statusTooltip: !0,
            statusTooltipDelay: I.vB
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
                  L({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: x
                  }),
                      null == R || R();
              },
              children: H
          });
}
