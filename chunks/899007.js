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
    b = n(503981);
let S = h.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function A(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: h, profileType: A, animateOnHover: N, onOpenProfile: C, className: R, previewStatus: O } = e,
        { theme: D } = (0, v.z)(),
        { analyticsLocations: L } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: x } = (0, m.KZ)(),
        P = p.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, T.p9.TIER_2),
        w = r.useMemo(() => t.isNonUserBot() || (0, f.W)(t, h), [t, h]),
        { live: M } = (0, g.Z)(t.id),
        [k] = M,
        { status: U, isMobileOnline: G } = (0, o.cj)([_.Z], () => ({
            status: (0, u.Z)(k) ? I.Skl.STREAMING : _.Z.getStatus(t.id),
            isMobileOnline: _.Z.isMobileOnline(t.id)
        })),
        B = void 0 !== O ? O : U,
        Z = A === y.y0.FULL_SIZE ? l.EFr.SIZE_120 : l.EFr.SIZE_80,
        F = s()(
            b.avatar,
            {
                [b.biteSize]: A === y.y0.BITE_SIZE,
                [b.fullSize]: A === y.y0.FULL_SIZE,
                [b.panel]: A === y.y0.PANEL
            },
            R
        ),
        {
            avatarDecorationSrc: V,
            avatarSrc: j,
            eventHandlers: H
        } = (0, E.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: Z,
            animateOnHover: N
        }),
        Y = (0, i.jsx)(S, {
            src: j,
            avatarDecoration: V,
            size: Z,
            'aria-label': t.username,
            imageClassName: null != C ? b.overlay : void 0,
            status: w ? I.Skl.UNKNOWN : B,
            statusBackdropColor: P && !w ? (0, l.QFD)(D) : void 0,
            isMobile: G,
            statusTooltip: !0,
            statusTooltipDelay: y.vB
        });
    return null == C
        ? (0, i.jsx)('div', {
              ...H,
              className: F,
              children: Y
          })
        : (0, i.jsx)(l.P3F, {
              ...H,
              className: s()(F, b.clickable),
              focusProps: { ringClassName: b.focusRing },
              onClick: () => {
                  x({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: L
                  }),
                      null == C || C();
              },
              children: Y
          });
}
