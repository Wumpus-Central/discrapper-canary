n.d(t, { Z: () => j }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(642128),
    d = n(442837),
    u = n(481060),
    h = n(846027),
    p = n(578976),
    m = n(518950),
    f = n(937995),
    g = n(199902),
    _ = n(131951),
    C = n(594174),
    x = n(63063),
    v = n(5192),
    E = n(823961),
    I = n(981631),
    b = n(37113),
    Z = n(388032),
    N = n(246295),
    T = n(574169);
let S = (e) => 1 - Math.pow(1 - e, 3);
function j(e) {
    let { channel: t, buyer: a, onClose: s, dismissibleContent: j } = e,
        y = (0, d.Wu)([g.Z], () => g.Z.getAllActiveStreams()),
        A = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        P = null != y.find((e) => e.ownerId === (null == A ? void 0 : A.id)),
        R = (0, d.e7)([E.Z], () => E.Z.getPreviousGoLiveSettings()),
        M = P && null != R && R.resolution !== b.LY.RESOLUTION_1440 && R.frameRate !== b.ws.FPS_60,
        [L, k] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
        k(!0);
    }, []);
    let O = (0, l.useContext)(f.h9),
        D = (0, u.q_F)({
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
                easing: S,
                immediate: !L
            }
        }),
        { avatarSrc: w, eventHandlers: U } = (0, m.Z)({
            user: a,
            size: u.EFr.SIZE_48,
            animateOnHover: !0
        }),
        B = v.ZP.getName(t.guild_id, t.id, a),
        F = P && !M,
        H = t.hdStreamingUntil;
    if (null == H || null == a || null == A) return null;
    let G = o()(H).diff(o()(), 'hours'),
        V = j
            ? Z.intl.format(Z.t['6LrV9f'], {
                  username: B,
                  num: G,
                  helpCenterLink: x.Z.getArticleURL(I.BhN.HD_STREAMING_POTION)
              })
            : a.id === A.id
              ? Z.intl.string(Z.t.IjKvNT)
              : !0 === P
                ? Z.intl.format(Z.t.JkWoqK, {
                      username: B,
                      helpCenterLink: x.Z.getArticleURL(I.BhN.HD_STREAMING_POTION)
                  })
                : Z.intl.formatToPlainString(Z.t.vNbVXF, { username: B }),
        z = M ? Z.intl.string(Z.t.o7NIjY) : F ? Z.intl.string(Z.t.r6xhBw) : Z.intl.string(Z.t.yKw8Dg);
    return null == a || null == A
        ? null
        : (0, i.jsxs)(c.animated.div, {
              style: D,
              className: N.banner,
              children: [
                  (0, i.jsxs)('div', {
                      children: [
                          (0, i.jsx)(u.qEK, {
                              src: w,
                              'aria-label': a.username,
                              size: u.EFr.SIZE_48,
                              ...U
                          }),
                          (0, i.jsx)('img', {
                              className: N.potion,
                              src: T,
                              alt: ''
                          })
                      ]
                  }),
                  (0, i.jsx)(u.X6q, {
                      variant: 'heading-sm/medium',
                      children: V
                  }),
                  (0, i.jsxs)('div', {
                      className: N.subsection,
                      children: [
                          (0, i.jsx)(u.zxk, {
                              onClick: () => {
                                  if (M) {
                                      let e = E.Z.getPreviousGoLiveSettings(),
                                          t = _.Z.getGoLiveSource();
                                      if (null == e) {
                                          s();
                                          return;
                                      }
                                      let n = (0, p.s)(e.resolution, e.frameRate, t);
                                      h.Z.setGoLiveSource(n), s();
                                      return;
                                  }
                                  if (F) {
                                      s();
                                      return;
                                  }
                                  (0, u.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('88833')]).then(n.bind(n, 60594));
                                      return (t) =>
                                          (0, i.jsx)(e, {
                                              analyticsLocation: 'HDStreamingPotionBanner',
                                              ...t
                                          });
                                  }),
                                      s();
                              },
                              className: r()({ [N.actionButton]: !0 !== P }),
                              children: z
                          }),
                          !F &&
                              (0, i.jsx)(u.P3F, {
                                  className: N.x,
                                  onClick: s,
                                  children: (0, i.jsx)(u.Dio, { name: 'close' })
                              })
                      ]
                  })
              ]
          });
}
