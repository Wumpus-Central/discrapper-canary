n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(420660),
    u = n(100527),
    d = n(906732),
    f = n(140701),
    p = n(158776),
    _ = n(74538),
    m = n(998502),
    h = n(785717),
    g = n(369566),
    E = n(518950),
    b = n(652853),
    y = n(228168),
    O = n(981631),
    v = n(474936),
    S = n(671955),
    I = n(108096);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = m.ZP.getEnableHardwareAcceleration() ? l.Xo$ : l.qEK;
function R(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            channelId: m,
            themeType: T,
            animateOnHover: A,
            onOpenProfile: R,
            className: w,
            previewStatus: D,
        } = e,
        { theme: x } = (0, b.z)(),
        { analyticsLocations: L } = (0, d.ZP)(u.Z.AVATAR),
        { trackUserProfileAction: j } = (0, h.KZ)(),
        M = _.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.PremiumTypes.TIER_2),
        k = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, m), [t, m]),
        { live: U } = (0, g.Z)(t.id),
        [G] = U,
        { status: Z, isMobileOnline: B } = (0, s.cj)([p.Z], () => ({
            status: (0, c.Z)(G) ? O.Skl.STREAMING : p.Z.getStatus(t.id),
            isMobileOnline: p.Z.isMobileOnline(t.id),
        })),
        F = void 0 !== D ? D : Z,
        V = [S.l.MODAL, S.l.MODAL_V2].includes(T) ? l.EFr.SIZE_120 : l.EFr.SIZE_80,
        H = o()(I.avatar, w),
        {
            avatarDecorationSrc: Y,
            avatarSrc: W,
            eventHandlers: K,
        } = (0, E.Z)({
            userId: t.id,
            guildId: null != n ? n.guildId : a,
            size: V,
            animateOnHover: A,
        }),
        z = (0, r.jsx)(P, {
            src: W,
            avatarDecoration: Y,
            size: V,
            "aria-label": t.username,
            imageClassName: null != R ? I.overlay : void 0,
            status: k ? O.Skl.UNKNOWN : F,
            statusBackdropColor: M && !k ? (0, l.QFD)(x) : void 0,
            isMobile: B,
            statusTooltip: !0,
            statusTooltipDelay: y.vB,
        });
    return null == R
        ? (0, r.jsx)(
              "div",
              N(C({}, K), {
                  className: H,
                  children: z,
              }),
          )
        : (0, r.jsx)(
              l.P3F,
              N(C({}, K), {
                  className: o()(H, I.clickable),
                  focusProps: { ringClassName: I.focusRing },
                  onClick: () => {
                      j({
                          action: "PRESS_VIEW_PROFILE",
                          analyticsLocations: L,
                      }),
                          null == R || R();
                  },
                  children: z,
              }),
          );
}
