n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(642128),
    u = n(442837),
    d = n(481060),
    p = n(846027),
    h = n(578976),
    f = n(518950),
    m = n(937995),
    g = n(199902),
    b = n(131951),
    _ = n(594174),
    C = n(63063),
    y = n(5192),
    x = n(823961),
    v = n(981631),
    j = n(37113),
    O = n(388032),
    E = n(15322),
    N = n(574169);
function I(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let P = (e) => 1 - Math.pow(1 - e, 3);
function S(e) {
    let { channel: t, buyer: l, onClose: a, dismissibleContent: S } = e,
        Z = (0, u.Wu)([g.Z], () => g.Z.getAllActiveStreams()),
        T = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        A = null != Z.find((e) => e.ownerId === (null == T ? void 0 : T.id)),
        w = (0, u.e7)([x.Z], () => x.Z.getPreviousGoLiveSettings()),
        R = A && null != w && w.resolution !== j.LY.RESOLUTION_1440 && w.frameRate !== j.ws.FPS_60,
        [M, k] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        k(!0);
    }, []);
    let L = (0, i.useContext)(m.h9),
        D = (0, d.q_F)({
            from: M
                ? {
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(30px) scale(0.9)'
                  }
                : {},
            to: {
                opacity: 1,
                transform: L ? 'translateX(-50%) translateY(0px) scale(1)' : 'translateX(-50%) translateY(-66px) scale(1)'
            },
            config: {
                duration: 250,
                easing: P,
                immediate: !M
            }
        }),
        { avatarSrc: W, eventHandlers: U } = (0, f.Z)({
            user: l,
            size: d.EFr.SIZE_48,
            animateOnHover: !0
        }),
        B = y.ZP.getName(t.guild_id, t.id, l),
        H = A && !R,
        F = t.hdStreamingUntil;
    if (null == F || null == l || null == T) return null;
    let G = s()(F).diff(s()(), 'hours'),
        V = S
            ? O.NW.format(O.t['6LrV9f'], {
                  username: B,
                  num: G,
                  helpCenterLink: C.Z.getArticleURL(v.BhN.HD_STREAMING_POTION)
              })
            : l.id === T.id
              ? O.NW.string(O.t.IjKvNT)
              : !0 === A
                ? O.NW.format(O.t.JkWoqK, {
                      username: B,
                      helpCenterLink: C.Z.getArticleURL(v.BhN.HD_STREAMING_POTION)
                  })
                : O.NW.formatToPlainString(O.t.vNbVXF, { username: B }),
        z = R ? O.NW.string(O.t.o7NIjY) : H ? O.NW.string(O.t.r6xhBw) : O.NW.string(O.t.yKw8Dg);
    return null == l || null == T
        ? null
        : (0, r.jsxs)(c.animated.div, {
              style: D,
              className: E.banner,
              children: [
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(
                              d.qEK,
                              I(
                                  {
                                      src: W,
                                      'aria-label': l.username,
                                      size: d.EFr.SIZE_48
                                  },
                                  U
                              )
                          ),
                          (0, r.jsx)('img', {
                              className: E.potion,
                              src: N,
                              alt: ''
                          })
                      ]
                  }),
                  (0, r.jsx)(d.X6q, {
                      variant: 'heading-sm/medium',
                      children: V
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
                                      return p.Z.setGoLiveSource(n), void a();
                                  }
                                  if (H) return void a();
                                  (0, d.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('46746'), n.e('52657')]).then(n.bind(n, 60594));
                                      return (t) => (0, r.jsx)(e, I({ analyticsLocation: 'HDStreamingPotionBanner' }, t));
                                  }),
                                      a();
                              },
                              className: o()({ [E.actionButton]: !0 !== A }),
                              children: z
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
