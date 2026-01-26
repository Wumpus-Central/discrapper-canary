n.d(t, {
    default: () => U,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(827343),
    o = n(442433),
    c = n(956793),
    s = n(401843),
    u = n(820284),
    d = n(793574),
    p = n(688810),
    b = n(810845),
    g = n(854182),
    f = n(666328),
    A = n(74329),
    h = n(304006),
    j = n(479335),
    m = n(845885),
    O = n(274372),
    v = n(915618),
    y = n(572164),
    I = n(399925),
    x = n(643501),
    S = n(670470),
    w = n(972432),
    C = n(471993),
    P = n(616356),
    E = n(961350),
    V = n(734057),
    G = n(430452),
    T = n(287809),
    k = n(652896),
    D = n(652215),
    M = n(731854),
    X = n(985018);

function _(e) {
    return (0, l.bG)([P.A], () => {
        let t = P.A.getActiveStreamForApplicationStream(e);
        return null != t && (0, k._z)(t) === (0, k._z)(e);
    });
}

function U(e) {
    let t,
        n,
        P,
        U,
        z,
        F,
        R,
        N,
        L,
        B,
        J,
        Q,
        {
            stream: W,
            analyticsContext: Y,
            appContext: Z,
            exitFullscreen: q,
            onSelect: K,
            onInteraction: H,
            minimal: $ = !1,
        } = e,
        ee = (0, l.cf)([T.default], () => {
            var e;
            return (null == W ? void 0 : W.ownerId) === (null == (e = T.default.getCurrentUser()) ? void 0 : e.id);
        }),
        et = (function (e) {
            let t = _(e),
                n = (0, v.A)(G.A),
                a = (0, y.Et)(),
                o = e.ownerId === E.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = S.A.useExperiment(
                    {
                        location: "StreamContextMenu",
                    },
                    {
                        autoTrackExposure: !1,
                    },
                ),
                u = (0, l.bG)([O.A], () => O.A.getIsAtMaxSaveClipOperations()),
                d = (0, l.bG)([O.A], () => O.A.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(i.Drp, {
                      id: "clip-stream",
                      disabled: !a || !(o || d) || u,
                      label: X.intl.string(X.t.U4URzP),
                      action: () => (o ? (0, I.l0)() : (0, I.yd)((0, k._z)(e))),
                  })
                : null;
        })(W),
        en = _(W),
        er = ((t = _(W)), (n = (0, w.A)(W.ownerId, M.x.STREAM)), t ? n : null),
        el =
            ((U = (0, l.bG)([x.default], () => null != x.default.getRemoteSessionId())),
            (z = (0, l.bG)([V.A], () => V.A.getChannel(W.channelId), [W.channelId])),
            (F = _(W)),
            ((P = (N = null != (R = T.default.getCurrentUser()) && W.ownerId === R.id)
                ? X.intl.string(X.t.S5anIc)
                : F
                  ? X.intl.string(X.t.q3O3J8)
                  : X.intl.string(X.t["7Xq/nV"])),
            U || (!N && F && (null == z ? void 0 : z.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(i.Drp, {
                      id: "watch",
                      label: P,
                      action: F
                          ? function () {
                                (0, s.vN)((0, k._z)(W));
                            }
                          : function () {
                                c.default.selectVoiceChannel(W.channelId), (0, s.A9)(W);
                            },
                      icon: $ && F && i.GT3,
                      leadingAccessory:
                          $ && F
                              ? {
                                    type: "icon",
                                    icon: i.GT3,
                                }
                              : void 0,
                  })),
        ei =
            ((L = _(W)),
            (B = (0, l.bG)([G.A], () => G.A.isLocalMute(W.ownerId, M.x.STREAM))),
            (Q = null != (J = T.default.getCurrentUser()) && W.ownerId === J.id),
            !L || Q
                ? null
                : (0, r.jsx)(i.sLh, {
                      id: "mute",
                      label: X.intl.string(X.t.sWmtI6),
                      action: function () {
                          a.A.toggleLocalMute(W.ownerId, M.x.STREAM);
                      },
                      checked: B,
                  })),
        ea = (function (e) {
            let t = _(e),
                n = e.ownerId === E.default.getId(),
                o = G.A.supports(M.O5.SIDECHAIN_COMPRESSION),
                c = (0, l.bG)([G.A], () => G.A.getSidechainCompression()),
                s = (0, l.bG)([G.A], () => G.A.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, p.Ay)();
            return !n && t && o
                ? (0, r.jsxs)(i.rXV, {
                      children: [
                          (0, r.jsx)(i.sLh, {
                              id: "sidechain-compression",
                              label: X.intl.string(X.t["/jwMtn"]),
                              subtext: X.intl.string(X.t.zlA23F),
                              action: () =>
                                  a.A.setSidechainCompression(!c, {
                                      analyticsLocations: u,
                                  }),
                              checked: c,
                          }),
                          (0, r.jsx)(i.aK1, {
                              id: "sidechain-parameters",
                              label: X.intl.string(X.t.fhEzfj),
                              control: (e, t) => {
                                  var n, l;
                                  return (0, r.jsx)(
                                      i.i42,
                                      ((n = (function (e) {
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
                                                      var r;
                                                      (r = n[t]),
                                                          t in e
                                                              ? Object.defineProperty(e, t, {
                                                                    value: r,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                                })
                                                              : (e[t] = r);
                                                  });
                                          }
                                          return e;
                                      })({}, e)),
                                      (l = l =
                                          {
                                              ref: t,
                                              value: s,
                                              maxValue: 100,
                                              onChange: (e) =>
                                                  a.A.setSidechainCompressionStrength(e, {
                                                      analyticsLocations: u,
                                                  }),
                                              "aria-label": X.intl.string(X.t.fhEzfj),
                                          }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(l)).forEach(function (e) {
                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                            }),
                                      n),
                                  );
                              },
                          }),
                      ],
                  })
                : null;
        })(W),
        eo = (0, A.A)(W, Z, q),
        ec = (0, f.A)(W.channelId, W.ownerId),
        es = (0, g.A)(W.channelId),
        eu = (0, b.A)(W.channelId, (0, k._z)(W)),
        ed = (0, l.bG)([V.A], () => V.A.getChannel(W.channelId), [W.channelId]),
        ep = (0, h.h)({
            stream: W,
            channelId: W.channelId,
        }),
        eb = (0, j.u)({
            userId: W.ownerId,
            channelId: W.channelId,
            guildId: W.guildId,
            minimal: $,
        }),
        { analyticsLocations: eg } = (0, p.Ay)(d.A.STREAM_CONTEXT_MENU),
        ef = (0, m.E)({
            stream: W,
            handleGoLive: () => (0, C.A)(W.guildId, W.channelId, eg),
            minimal: $,
            appContext: Z,
        });
    return $
        ? (0, r.jsx)(p.f5, {
              value: eg,
              children: (0, r.jsxs)(i.W1t, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": X.intl.string(X.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: K,
                  onInteraction: H,
                  children: [
                      (0, r.jsx)(i.rXV, {
                          children: ee ? ef : el,
                      }),
                      (0, r.jsxs)(i.rXV, {
                          children: [ei, er],
                      }),
                      (0, r.jsx)(i.rXV, {
                          children: eu,
                      }),
                      ea,
                      en
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(i.bXX, {}),
                                    (0, r.jsxs)(i.Drp, {
                                        id: "more-options",
                                        label: X.intl.string(X.t.PdRCRg),
                                        children: [ec, ep, eb, eo],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, r.jsx)(u.A, {
              context: Y,
              object: D.ZSU.CONTEXT_MENU,
              children: (0, r.jsxs)(i.W1t, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": X.intl.string(X.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: K,
                  onInteraction: H,
                  children: [
                      (0, r.jsx)(i.rXV, {
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [el, et, ei, ep, eb],
                          }),
                      }),
                      (0, r.jsx)(i.rXV, {
                          children: er,
                      }),
                      (0, r.jsx)(i.rXV, {
                          children: eu,
                      }),
                      ea,
                      (0, r.jsxs)(i.rXV, {
                          children: [(null == ed ? void 0 : ed.isGuildStageVoice()) ? null : es, ec, en && eo],
                      }),
                  ],
              }),
          });
}
