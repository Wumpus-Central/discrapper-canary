n.d(t, { Z: () => R }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(420660),
    u = n(100527),
    d = n(906732),
    f = n(140701),
    p = n(158776),
    _ = n(74538),
    h = n(998502),
    m = n(785717),
    g = n(369566),
    E = n(518950),
    v = n(652853),
    b = n(228168),
    y = n(981631),
    O = n(474936),
    S = n(715047);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = h.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function R(e) {
    let { user: t, displayProfile: n, guildId: o, channelId: h, profileType: I, animateOnHover: N, onOpenProfile: R, className: P, previewStatus: w } = e,
        { theme: D } = (0, v.z)(),
        { analyticsLocations: x } = (0, d.ZP)(u.Z.AVATAR),
        { trackUserProfileAction: L } = (0, m.KZ)(),
        M = _.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, O.p9.TIER_2),
        k = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, h), [t, h]),
        { live: j } = (0, g.Z)(t.id),
        [U] = j,
        { status: G, isMobileOnline: B } = (0, s.cj)([p.Z], () => ({
            status: (0, c.Z)(U) ? y.Skl.STREAMING : p.Z.getStatus(t.id),
            isMobileOnline: p.Z.isMobileOnline(t.id)
        })),
        Z = void 0 !== w ? w : G,
        F = I === b.y0.FULL_SIZE ? l.EFr.SIZE_120 : l.EFr.SIZE_80,
        V = a()(
            S.avatar,
            {
                [S.biteSize]: I === b.y0.BITE_SIZE,
                [S.fullSize]: I === b.y0.FULL_SIZE,
                [S.panel]: I === b.y0.PANEL
            },
            P
        ),
        {
            avatarDecorationSrc: H,
            avatarSrc: W,
            eventHandlers: Y
        } = (0, E.Z)({
            user: t,
            guildId: null != n ? n.guildId : o,
            size: F,
            animateOnHover: N
        }),
        K = (0, r.jsx)(C, {
            src: W,
            avatarDecoration: H,
            size: F,
            'aria-label': t.username,
            imageClassName: null != R ? S.overlay : void 0,
            status: k ? y.Skl.UNKNOWN : Z,
            statusBackdropColor: M && !k ? (0, l.QFD)(D) : void 0,
            isMobile: B,
            statusTooltip: !0,
            statusTooltipDelay: b.vB
        });
    return null == R
        ? (0, r.jsx)(
              'div',
              A(T({}, Y), {
                  className: V,
                  children: K
              })
          )
        : (0, r.jsx)(
              l.P3F,
              A(T({}, Y), {
                  className: a()(V, S.clickable),
                  focusProps: { ringClassName: S.focusRing },
                  onClick: () => {
                      L({
                          action: 'PRESS_VIEW_PROFILE',
                          analyticsLocations: x
                      }),
                          null == R || R();
                  },
                  children: K
              })
          );
}
