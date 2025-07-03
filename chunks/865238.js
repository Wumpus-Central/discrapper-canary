(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(405499),
    u = n(442837),
    d = n(481060),
    p = n(846027),
    h = n(578976),
    f = n(518950),
    m = n(937995),
    g = n(199902),
    b = n(131951),
    _ = n(594174),
    y = n(63063),
    C = n(5192),
    x = n(823961),
    v = n(981631),
    j = n(37113),
    O = n(388032),
    E = n(15322),
    S = n(574169);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let P = (e) => 1 - Math.pow(1 - e, 3);
function Z(e) {
    let { channel: t, buyer: l, onClose: a, dismissibleContent: Z } = e,
        N = (0, u.Wu)([g.Z], () => g.Z.getAllActiveStreams()),
        T = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        A = null != N.find((e) => e.ownerId === (null == T ? void 0 : T.id)),
        w = (0, u.e7)([x.Z], () => x.Z.getPreviousGoLiveSettings()),
        R = A && null != w && w.resolution !== j.LY.RESOLUTION_1440 && w.frameRate !== j.ws.FPS_60,
        [k, M] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        M(!0);
    }, []);
    let D = (0, i.useContext)(m.h9),
        L = (0, d.q_F)({
            from: k
                ? {
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(30px) scale(0.9)'
                  }
                : {},
            to: {
                opacity: 1,
                transform: D ? 'translateX(-50%) translateY(0px) scale(1)' : 'translateX(-50%) translateY(-66px) scale(1)'
            },
            config: {
                duration: 250,
                easing: P,
                immediate: !k
            }
        }),
        { avatarSrc: U, eventHandlers: B } = (0, f.Z)({
            user: l,
            size: d.EFr.SIZE_48,
            animateOnHover: !0
        }),
        F = C.ZP.getName(t.guild_id, t.id, l),
        H = A && !R,
        G = t.hdStreamingUntil;
    if (null == G || null == l || null == T) return null;
    let V = s()(G).diff(s()(), 'hours'),
        z = Z
            ? O.intl.format(O.t['6LrV9f'], {
                  username: F,
                  num: V,
                  helpCenterLink: y.Z.getArticleURL(v.BhN.HD_STREAMING_POTION)
              })
            : l.id === T.id
              ? O.intl.string(O.t.IjKvNT)
              : !0 === A
                ? O.intl.format(O.t.JkWoqK, {
                      username: F,
                      helpCenterLink: y.Z.getArticleURL(v.BhN.HD_STREAMING_POTION)
                  })
                : O.intl.formatToPlainString(O.t.vNbVXF, { username: F }),
        W = R ? O.intl.string(O.t.o7NIjY) : H ? O.intl.string(O.t.r6xhBw) : O.intl.string(O.t.yKw8Dg);
    return null == l || null == T
        ? null
        : (0, r.jsxs)(c.animated.div, {
              style: L,
              className: E.banner,
              children: [
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(
                              d.qEK,
                              I(
                                  {
                                      src: U,
                                      'aria-label': l.username,
                                      size: d.EFr.SIZE_48
                                  },
                                  B
                              )
                          ),
                          (0, r.jsx)('img', {
                              className: E.potion,
                              src: S,
                              alt: ''
                          })
                      ]
                  }),
                  (0, r.jsx)(d.X6q, {
                      variant: 'heading-sm/medium',
                      children: z
                  }),
                  (0, r.jsxs)('div', {
                      className: E.subsection,
                      children: [
                          (0, r.jsx)(d.zxk, {
                              onClick: () => {
                                  if (R) {
                                      let e = x.Z.getPreviousGoLiveSettings(),
                                          t = b.Z.getGoLiveSource();
                                      if (null == e) return void a();
                                      let n = (0, h.s_)(e.resolution, e.frameRate, t);
                                      return (p.Z.setGoLiveSource(n), void a());
                                  }
                                  if (H) return void a();
                                  ((0, d.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('46746'), n.e('52657')]).then(n.bind(n, 60594));
                                      return (t) => (0, r.jsx)(e, I({ analyticsLocation: 'HDStreamingPotionBanner' }, t));
                                  }),
                                      a());
                              },
                              className: o()({ [E.actionButton]: !0 !== A }),
                              children: W
                          }),
                          !H &&
                              (0, r.jsx)(d.P3F, {
                                  className: E.x,
                                  onClick: a,
                                  children: (0, r.jsx)(d.Dio, { name: 'close' })
                              })
                      ]
                  })
              ]
          });
}
