(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(264738),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    h = n(846027),
    f = n(578976),
    m = n(518950),
    g = n(937995),
    b = n(199902),
    _ = n(131951),
    y = n(594174),
    C = n(63063),
    x = n(5192),
    v = n(823961),
    O = n(981631),
    j = n(37113),
    E = n(388032),
    S = n(15322),
    I = n(574169);
function P(e) {
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
let Z = (e) => 1 - Math.pow(1 - e, 3);
function T(e) {
    let { channel: t, buyer: l, onClose: o, dismissibleContent: T } = e,
        N = (0, u.Wu)([b.Z], () => b.Z.getAllActiveStreams()),
        A = (0, u.e7)([y.default], () => y.default.getCurrentUser()),
        w = null != N.find((e) => e.ownerId === (null == A ? void 0 : A.id)),
        R = (0, u.e7)([v.Z], () => v.Z.getPreviousGoLiveSettings()),
        M = w && null != R && R.resolution !== j.LY.RESOLUTION_1440 && R.frameRate !== j.ws.FPS_60,
        [D, k] = (0, i.useState)(!1);
    (0, i.useEffect)(() => {
        k(!0);
    }, []);
    let L = (0, i.useContext)(g.h9),
        U = (0, p.q_F)({
            from: D
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
                easing: Z,
                immediate: !D
            }
        }),
        { avatarSrc: B, eventHandlers: F } = (0, m.Z)({
            userId: l.id,
            size: p.EFr.SIZE_48,
            animateOnHover: !0
        }),
        H = x.ZP.getName(t.guild_id, t.id, l),
        G = w && !M,
        V = t.hdStreamingUntil;
    if (null == V || null == l || null == A) return null;
    let z = s()(V).diff(s()(), 'hours'),
        W = T
            ? E.intl.format(E.t['6LrV9f'], {
                  username: H,
                  num: z,
                  helpCenterLink: C.Z.getArticleURL(O.BhN.HD_STREAMING_POTION)
              })
            : l.id === A.id
              ? E.intl.string(E.t.IjKvNT)
              : !0 === w
                ? E.intl.format(E.t.JkWoqK, {
                      username: H,
                      helpCenterLink: C.Z.getArticleURL(O.BhN.HD_STREAMING_POTION)
                  })
                : E.intl.formatToPlainString(E.t.vNbVXF, { username: H }),
        Y = M ? E.intl.string(E.t.o7NIjY) : G ? E.intl.string(E.t.r6xhBw) : E.intl.string(E.t.yKw8Dg);
    return null == l || null == A
        ? null
        : (0, r.jsxs)(c.animated.div, {
              style: U,
              className: S.banner,
              children: [
                  (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(
                              p.qEK,
                              P(
                                  {
                                      src: B,
                                      'aria-label': l.username,
                                      size: p.EFr.SIZE_48
                                  },
                                  F
                              )
                          ),
                          (0, r.jsx)('img', {
                              className: S.potion,
                              src: I,
                              alt: ''
                          })
                      ]
                  }),
                  (0, r.jsx)(p.X6q, {
                      variant: 'heading-sm/medium',
                      children: W
                  }),
                  (0, r.jsxs)('div', {
                      className: S.subsection,
                      children: [
                          (0, r.jsx)(d.zx, {
                              onClick: () => {
                                  if (M) {
                                      let e = v.Z.getPreviousGoLiveSettings(),
                                          t = _.Z.getGoLiveSource();
                                      if (null == e) return void o();
                                      let n = (0, f.s_)(e.resolution, e.frameRate, t);
                                      return (h.Z.setGoLiveSource(n), void o());
                                  }
                                  if (G) return void o();
                                  ((0, p.ZDy)(async () => {
                                      let { default: e } = await Promise.all([n.e('46746'), n.e('52657')]).then(n.bind(n, 60594));
                                      return (t) => (0, r.jsx)(e, P({ analyticsLocation: 'HDStreamingPotionBanner' }, t));
                                  }),
                                      o());
                              },
                              className: a()({ [S.actionButton]: !0 !== w }),
                              children: Y
                          }),
                          !G &&
                              (0, r.jsx)(p.P3F, {
                                  className: S.x,
                                  onClick: o,
                                  children: (0, r.jsx)(p.Dio, { name: 'close' })
                              })
                      ]
                  })
              ]
          });
}
