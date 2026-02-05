t.d(n, { default: () => P });
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(397927),
    a = t(827343),
    s = t(442433),
    o = t(956793),
    d = t(401843),
    c = t(820284),
    u = t(793574),
    A = t(688810),
    g = t(810845),
    h = t(854182),
    p = t(666328),
    f = t(74329),
    I = t(304006),
    m = t(479335),
    x = t(845885),
    b = t(274372),
    C = t(915618),
    j = t(572164),
    S = t(399925),
    v = t(643501),
    V = t(670470),
    G = t(972432),
    E = t(471993),
    w = t(616356),
    T = t(961350),
    M = t(734057),
    y = t(430452),
    X = t(287809),
    _ = t(652896),
    k = t(652215),
    U = t(731854),
    z = t(985018);
function F(e) {
    return (0, i.bG)([w.A], () => {
        let n = w.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, _._z)(n) === (0, _._z)(e);
    });
}
function P(e) {
    let n,
        t,
        w,
        P,
        R,
        D,
        N,
        L,
        O,
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
        ee = (0, i.cf)([X.default], () => W?.ownerId === X.default.getCurrentUser()?.id),
        en = (function (e) {
            let n = F(e),
                t = (0, C.A)(y.A),
                a = (0, j.Et)(),
                s = e.ownerId === T.default.getId(),
                { enableViewerClipping: o, ignoreSenderPreference: d } = V.A.useExperiment(
                    { location: "StreamContextMenu" },
                    { autoTrackExposure: !1 },
                ),
                c = (0, i.bG)([b.A], () => b.A.getIsAtMaxSaveClipOperations()),
                u = (0, i.bG)([b.A], () => b.A.isViewerClippingAllowedForUser(e.ownerId)) || d;
            return t && o && n
                ? (0, l.jsx)(r.Drp, {
                      id: "clip-stream",
                      disabled: !a || !(s || u) || c,
                      label: z.intl.string(z.t.U4URzP),
                      action: () => (s ? (0, S.l0)() : (0, S.yd)((0, _._z)(e))),
                  })
                : null;
        })(W),
        et = F(W),
        el = ((n = F(W)), (t = (0, G.A)(W.ownerId, U.x.STREAM)), n ? t : null),
        ei =
            ((P = (0, i.bG)([v.default], () => null != v.default.getRemoteSessionId())),
            (R = (0, i.bG)([M.A], () => M.A.getChannel(W.channelId), [W.channelId])),
            (D = F(W)),
            ((w = (L = null != (N = X.default.getCurrentUser()) && W.ownerId === N.id)
                ? z.intl.string(z.t.S5anIc)
                : D
                  ? z.intl.string(z.t.q3O3J8)
                  : z.intl.string(z.t["7Xq/nV"])),
            P || (!L && D && R?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(r.Drp, {
                      id: "watch",
                      label: w,
                      action: D
                          ? function () {
                                (0, d.vN)((0, _._z)(W));
                            }
                          : function () {
                                o.default.selectVoiceChannel(W.channelId), (0, d.A9)(W);
                            },
                      icon: $ && D && r.GT3,
                      leadingAccessory: $ && D ? { type: "icon", icon: r.GT3 } : void 0,
                  })),
        er =
            ((O = F(W)),
            (B = (0, i.bG)([y.A], () => y.A.isLocalMute(W.ownerId, U.x.STREAM))),
            (Q = null != (J = X.default.getCurrentUser()) && W.ownerId === J.id),
            !O || Q
                ? null
                : (0, l.jsx)(r.sLh, {
                      id: "mute",
                      label: z.intl.string(z.t.sWmtI6),
                      action: function () {
                          a.A.toggleLocalMute(W.ownerId, U.x.STREAM);
                      },
                      checked: B,
                  })),
        ea = (function (e) {
            let n = F(e),
                t = e.ownerId === T.default.getId(),
                s = y.A.supports(U.O5.SIDECHAIN_COMPRESSION),
                o = (0, i.bG)([y.A], () => y.A.getSidechainCompression()),
                d = (0, i.bG)([y.A], () => y.A.getSidechainCompressionStrength()),
                { analyticsLocations: c } = (0, A.Ay)();
            return !t && n && s
                ? (0, l.jsxs)(r.rXV, {
                      children: [
                          (0, l.jsx)(r.sLh, {
                              id: "sidechain-compression",
                              label: z.intl.string(z.t["/jwMtn"]),
                              subtext: z.intl.string(z.t.zlA23F),
                              action: () => a.A.setSidechainCompression(!o, { analyticsLocations: c }),
                              checked: o,
                          }),
                          (0, l.jsx)(r.aK1, {
                              id: "sidechain-parameters",
                              label: z.intl.string(z.t.fhEzfj),
                              control: (e, n) =>
                                  (0, l.jsx)(r.i42, {
                                      ...e,
                                      ref: n,
                                      value: d,
                                      maxValue: 100,
                                      onChange: (e) =>
                                          a.A.setSidechainCompressionStrength(e, { analyticsLocations: c }),
                                      "aria-label": z.intl.string(z.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })(W),
        es = (0, f.A)(W, Z, q),
        eo = (0, p.A)(W.channelId, W.ownerId),
        ed = (0, h.A)(W.channelId),
        ec = (0, g.A)(W.channelId, (0, _._z)(W)),
        eu = (0, i.bG)([M.A], () => M.A.getChannel(W.channelId), [W.channelId]),
        eA = (0, I.h)({ stream: W, channelId: W.channelId }),
        eg = (0, m.u)({ userId: W.ownerId, channelId: W.channelId, guildId: W.guildId, minimal: $ }),
        { analyticsLocations: eh } = (0, A.Ay)(u.A.STREAM_CONTEXT_MENU),
        ep = (0, x.E)({
            stream: W,
            handleGoLive: () => (0, E.A)(W.guildId, W.channelId, eh),
            minimal: $,
            appContext: Z,
        });
    return $
        ? (0, l.jsx)(A.f5, {
              value: eh,
              children: (0, l.jsxs)(r.W1t, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: s.Z_,
                  "aria-label": z.intl.string(z.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: K,
                  onInteraction: H,
                  children: [
                      (0, l.jsx)(r.rXV, { children: ee ? ep : ei }),
                      (0, l.jsxs)(r.rXV, { children: [er, el] }),
                      (0, l.jsx)(r.rXV, { children: ec }),
                      ea,
                      et
                          ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(r.bXX, {}),
                                    (0, l.jsxs)(r.Drp, {
                                        id: "more-options",
                                        label: z.intl.string(z.t.PdRCRg),
                                        children: [eo, eA, eg, es],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, l.jsx)(c.A, {
              context: Y,
              object: k.ZSU.CONTEXT_MENU,
              children: (0, l.jsxs)(r.W1t, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: s.Z_,
                  "aria-label": z.intl.string(z.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: K,
                  onInteraction: H,
                  children: [
                      (0, l.jsx)(r.rXV, { children: (0, l.jsxs)(l.Fragment, { children: [ei, en, er, eA, eg] }) }),
                      (0, l.jsx)(r.rXV, { children: el }),
                      (0, l.jsx)(r.rXV, { children: ec }),
                      ea,
                      (0, l.jsxs)(r.rXV, { children: [eu?.isGuildStageVoice() ? null : ed, eo, et && es] }),
                  ],
              }),
          });
}
