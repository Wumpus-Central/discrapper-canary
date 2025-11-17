n.d(t, { default: () => D });
var r = n(54381);
n(473749);
var l = n(442837),
    i = n(481060),
    o = n(846027),
    a = n(239091),
    c = n(287734),
    s = n(872810),
    u = n(410575),
    d = n(100527),
    f = n(906732),
    p = n(434500),
    g = n(441061),
    b = n(431368),
    h = n(418469),
    j = n(701098),
    m = n(607783),
    I = n(786138),
    O = n(435064),
    Z = n(779618),
    v = n(341569),
    S = n(39604),
    y = n(258609),
    x = n(441167),
    w = n(700994),
    C = n(76021),
    P = n(199902),
    k = n(314897),
    E = n(592125),
    A = n(131951),
    V = n(594174),
    T = n(569545),
    N = n(981631),
    M = n(65154),
    _ = n(388032);
function F(e) {
    return (0, l.e7)([P.Z], () => {
        let t = P.Z.getActiveStreamForApplicationStream(e);
        return null != t && (0, T.V9)(t) === (0, T.V9)(e);
    });
}
function D(e) {
    let {
            stream: t,
            analyticsContext: n,
            appContext: P,
            exitFullscreen: D,
            onSelect: Q,
            onInteraction: U,
            minimal: R = !1,
        } = e,
        G = (0, l.cj)([V.default], () => {
            var e;
            return (null == t ? void 0 : t.ownerId) === (null == (e = V.default.getCurrentUser()) ? void 0 : e.id);
        }),
        Y = (function (e) {
            let t = F(e),
                n = (0, Z.Z)(A.Z),
                o = (0, v.z8)(),
                a = e.ownerId === k.default.getId(),
                { enableViewerClipping: c, ignoreSenderPreference: s } = x.Z.useExperiment(
                    { location: "StreamContextMenu" },
                    { autoTrackExposure: !1 },
                ),
                u = (0, l.e7)([O.Z], () => O.Z.getIsAtMaxSaveClipOperations()),
                d = (0, l.e7)([O.Z], () => O.Z.isViewerClippingAllowedForUser(e.ownerId)) || s;
            return n && c && t
                ? (0, r.jsx)(i.sNh, {
                      id: "clip-stream",
                      disabled: !o || !(a || d) || u,
                      label: _.intl.string(_.t.U4URzP),
                      action: () => (a ? (0, S.br)() : (0, S.C1)((0, T.V9)(e))),
                  })
                : null;
        })(t),
        z = F(t),
        J = (function (e) {
            let t = F(e),
                n = (0, w.Z)(e.ownerId, M.Yn.STREAM);
            return t ? n : null;
        })(t),
        L = (function (e, t) {
            let n,
                o = (0, l.e7)([y.default], () => null != y.default.getRemoteSessionId()),
                a = (0, l.e7)([E.Z], () => E.Z.getChannel(e.channelId), [e.channelId]),
                u = F(e),
                d = V.default.getCurrentUser(),
                f = null != d && e.ownerId === d.id;
            return ((n = f ? _.intl.string(_.t.S5anIc) : u ? _.intl.string(_.t.q3O3J8) : _.intl.string(_.t["7Xq/nV"])),
            o || (!f && u && (null == a ? void 0 : a.isGuildStageVoice())))
                ? null
                : (0, r.jsx)(i.sNh, {
                      id: "watch",
                      label: n,
                      action: u
                          ? function () {
                                (0, s.g)((0, T.V9)(e));
                            }
                          : function () {
                                c.default.selectVoiceChannel(e.channelId), (0, s.rn)(e);
                            },
                      icon: t && u && i.g5r,
                  });
        })(t, R),
        B = (function (e) {
            let t = F(e),
                n = (0, l.e7)([A.Z], () => A.Z.isLocalMute(e.ownerId, M.Yn.STREAM)),
                a = V.default.getCurrentUser(),
                c = null != a && e.ownerId === a.id;
            return !t || c
                ? null
                : (0, r.jsx)(i.S89, {
                      id: "mute",
                      label: _.intl.string(_.t.sWmtI6),
                      action: function () {
                          o.Z.toggleLocalMute(e.ownerId, M.Yn.STREAM);
                      },
                      checked: n,
                  });
        })(t),
        X = (function (e) {
            let t = F(e),
                n = e.ownerId === k.default.getId(),
                a = A.Z.supports(M.AN.SIDECHAIN_COMPRESSION),
                c = (0, l.e7)([A.Z], () => A.Z.getSidechainCompression()),
                s = (0, l.e7)([A.Z], () => A.Z.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, f.ZP)();
            return !n && t && a
                ? (0, r.jsxs)(i.kSQ, {
                      children: [
                          (0, r.jsx)(i.S89, {
                              id: "sidechain-compression",
                              label: _.intl.string(_.t["/jwMtn"]),
                              subtext: _.intl.string(_.t.zlA23F),
                              action: () => o.Z.setSidechainCompression(!c, { analyticsLocations: u }),
                              checked: c,
                          }),
                          (0, r.jsx)(i.II_, {
                              id: "sidechain-parameters",
                              label: _.intl.string(_.t.fhEzfj),
                              control: (e, t) => {
                                  var n, l;
                                  return (0, r.jsx)(
                                      i._wy,
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
                                                  o.Z.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                              "aria-label": _.intl.string(_.t.fhEzfj),
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
        })(t),
        q = (0, h.Z)(t, P, D),
        H = (0, b.Z)(t.channelId, t.ownerId),
        W = (0, g.Z)(t.channelId),
        K = (0, p.Z)(t.channelId, (0, T.V9)(t)),
        $ = (0, l.e7)([E.Z], () => E.Z.getChannel(t.channelId), [t.channelId]),
        ee = (0, j.G)({
            stream: t,
            channelId: t.channelId,
        }),
        et = (0, m.B)({
            userId: t.ownerId,
            channelId: t.channelId,
            guildId: t.guildId,
            minimal: R,
        }),
        { analyticsLocations: en } = (0, f.ZP)(d.Z.STREAM_CONTEXT_MENU),
        er = (0, I.b)({
            stream: t,
            handleGoLive: () => (0, C.Z)(t.guildId, t.channelId, en),
            minimal: R,
            appContext: P,
        });
    return R
        ? (0, r.jsx)(f.Gt, {
              value: en,
              children: (0, r.jsxs)(i.v2r, {
                  navId: "stream-context",
                  onClose: a.Zy,
                  "aria-label": _.intl.string(_.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: Q,
                  onInteraction: U,
                  children: [
                      (0, r.jsx)(i.kSQ, { children: G ? er : L }),
                      (0, r.jsxs)(i.kSQ, {
                          children: [B, J],
                      }),
                      (0, r.jsx)(i.kSQ, { children: K }),
                      X,
                      z
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(i.Clw, {}),
                                    (0, r.jsxs)(i.sNh, {
                                        id: "more-options",
                                        label: _.intl.string(_.t.PdRCRg),
                                        children: [H, et, ee, q],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, r.jsx)(u.Z, {
              context: n,
              object: N.qAy.CONTEXT_MENU,
              children: (0, r.jsxs)(i.v2r, {
                  navId: "stream-context",
                  onClose: a.Zy,
                  "aria-label": _.intl.string(_.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: Q,
                  onInteraction: U,
                  children: [
                      (0, r.jsx)(i.kSQ, {
                          children: (0, r.jsxs)(r.Fragment, {
                              children: [L, Y, B, ee, et],
                          }),
                      }),
                      (0, r.jsx)(i.kSQ, { children: J }),
                      (0, r.jsx)(i.kSQ, { children: K }),
                      X,
                      (0, r.jsxs)(i.kSQ, {
                          children: [(null == $ ? void 0 : $.isGuildStageVoice()) ? null : W, H, z && q],
                      }),
                  ],
              }),
          });
}
