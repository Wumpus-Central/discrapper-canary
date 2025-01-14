n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(476183),
    d = n(442837),
    u = n(481060),
    h = n(846027),
    p = n(578976),
    m = n(518950),
    f = n(937995),
    g = n(199902),
    C = n(131951),
    x = n(594174),
    v = n(63063),
    _ = n(5192),
    I = n(823961),
    E = n(981631),
    b = n(37113),
    Z = n(388032),
    N = n(687919),
    S = n(574169);
let T = (e) => 1 - Math.pow(1 - e, 3);
function j(e) {
    let { channel: t, buyer: r, onClose: s, dismissibleContent: j } = e,
        A = (0, d.Wu)([g.Z], () => g.Z.getAllActiveStreams()),
        y = (0, d.e7)([x.default], () => x.default.getCurrentUser()),
        P = null != A.find((e) => e.ownerId === (null == y ? void 0 : y.id)),
        M = (0, d.e7)([I.Z], () => I.Z.getPreviousGoLiveSettings()),
        R = P && null != M && M.resolution !== b.LY.RESOLUTION_1440 && M.frameRate !== b.ws.FPS_60,
        [L, k] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        k(!0);
    }, []);
    let O = (0, l.useContext)(f.h9),
        D = (0, u.useSpring)({
            from: L
                ? {
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(30px) scale(0.9)'
                  }
                : {},
            to: {
                opacity: 1,
                transform: O ? 'translateX(-50%) translateY(0px) scale(1)' : 'translateX(-50%) translateY(-66px) scale(1)'
            },
            config: {
                duration: 250,
                easing: T,
                immediate: !L
            }
        }),
        { avatarSrc: w, eventHandlers: B } = (0, m.Z)({
            user: r,
            size: u.AvatarSizes.SIZE_48,
            animateOnHover: !0
        }),
        U = _.ZP.getName(t.guild_id, t.id, r),
        H = P && !R,
        G = t.hdStreamingUntil;
    if (null == G || null == r || null == y) return null;
    let F = o()(G).diff(o()(), 'hours'),
        V = j
            ? Z.intl.format(Z.t['6LrV9f'], {
                  username: U,
                  num: F,
                  helpCenterLink: v.Z.getArticleURL(E.BhN.HD_STREAMING_POTION)
              })
            : r.id === y.id
              ? Z.intl.string(Z.t.IjKvNT)
              : !0 === P
                ? Z.intl.format(Z.t.JkWoqK, {
                      username: U,
                      helpCenterLink: v.Z.getArticleURL(E.BhN.HD_STREAMING_POTION)
                  })
                : Z.intl.formatToPlainString(Z.t.vNbVXF, { username: U }),
        z = R ? Z.intl.string(Z.t.o7NIjY) : H ? Z.intl.string(Z.t.r6xhBw) : Z.intl.string(Z.t.yKw8Dg);
    return null == r || null == y
        ? null
        : (0, i.jsxs)(c.animated.div, {
              style: D,
              className: N.banner,
              children: [
                  (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(u.Avatar, {
                              src: w,
                              'aria-label': r.username,
                              size: u.AvatarSizes.SIZE_48,
                              ...B
                          }),
                          (0, i.jsx)('img', {
                              className: N.potion,
                              src: S,
                              alt: ''
                          })
                      ]
                  }),
                  (0, i.jsx)(u.Heading, {
                      variant: 'heading-sm/medium',
                      children: V
                  }),
                  (0, i.jsxs)('div', {
                      className: N.subsection,
                      children: [
                          (0, i.jsx)(u.Button, {
                              onClick: () => {
                                  if (R) {
                                      let e = I.Z.getPreviousGoLiveSettings(),
                                          t = C.Z.getGoLiveSource();
                                      if (null == e) {
                                          s();
                                          return;
                                      }
                                      let n = (0, p.s)(e.resolution, e.frameRate, t);
                                      h.Z.setGoLiveSource(n), s();
                                      return;
                                  }
                                  if (H) {
                                      s();
                                      return;
                                  }
                                  (0, u.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('57252')]).then(n.bind(n, 60594));
                                      return (t) =>
                                          (0, i.jsx)(e, {
                                              analyticsLocation: 'HDStreamingPotionBanner',
                                              ...t
                                          });
                                  }),
                                      s();
                              },
                              className: a()({ [N.actionButton]: !0 !== P }),
                              children: z
                          }),
                          !H &&
                              (0, i.jsx)(u.Clickable, {
                                  className: N.x,
                                  onClick: s,
                                  children: (0, i.jsx)(u.XSmallIcon, { name: 'close' })
                              })
                      ]
                  })
              ]
          });
}
