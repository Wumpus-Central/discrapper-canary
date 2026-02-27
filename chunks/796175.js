t.d(n, { default: () => X });
var l = t(627968);
t(64700);
var i = t(311907),
    a = t(397927),
    r = t(827343),
    s = t(442433),
    d = t(956793),
    o = t(401843),
    c = t(820284),
    u = t(793574),
    A = t(688810),
    h = t(810845),
    g = t(854182),
    p = t(666328),
    f = t(74329),
    I = t(304006),
    m = t(479335),
    b = t(845885),
    x = t(643501),
    C = t(972432),
    j = t(471993),
    v = t(616356),
    S = t(961350),
    y = t(734057),
    V = t(430452),
    E = t(287809),
    T = t(652896),
    G = t(652215),
    _ = t(731854),
    w = t(985018);
function M(e) {
    return (0, i.bG)([v.A], () => {
        let n = v.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, T._z)(n) === (0, T._z)(e);
    });
}
function X(e) {
    let n,
        t,
        v,
        X,
        k,
        P,
        L,
        U,
        F,
        R,
        z,
        D,
        {
            stream: N,
            analyticsContext: O,
            appContext: B,
            exitFullscreen: J,
            onSelect: H,
            onInteraction: Q,
            minimal: W = !1,
        } = e,
        Y = (0, i.cf)([E.default], () => N?.ownerId === E.default.getCurrentUser()?.id),
        Z = M(N),
        q = ((n = M(N)), (t = (0, C.A)(N.ownerId, _.x.STREAM)), n ? t : null),
        K =
            ((X = (0, i.bG)([x.default], () => null != x.default.getRemoteSessionId())),
            (k = (0, i.bG)([y.A], () => y.A.getChannel(N.channelId), [N.channelId])),
            (P = M(N)),
            ((v = (U = null != (L = E.default.getCurrentUser()) && N.ownerId === L.id)
                ? w.intl.string(w.t.S5anIc)
                : P
                  ? w.intl.string(w.t.q3O3J8)
                  : w.intl.string(w.t["7Xq/nV"])),
            X || (!U && P && k?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(a.Drp, {
                      id: "watch",
                      label: v,
                      action: P
                          ? function () {
                                (0, o.vN)((0, T._z)(N));
                            }
                          : function () {
                                d.default.selectVoiceChannel(N.channelId), (0, o.A9)(N);
                            },
                      icon: W && P && a.GT3,
                      leadingAccessory: W && P ? { type: "icon", icon: a.GT3 } : void 0,
                  })),
        $ =
            ((F = M(N)),
            (R = (0, i.bG)([V.Ay], () => V.Ay.isLocalMute(N.ownerId, _.x.STREAM))),
            (D = null != (z = E.default.getCurrentUser()) && N.ownerId === z.id),
            !F || D
                ? null
                : (0, l.jsx)(a.sLh, {
                      id: "mute",
                      label: w.intl.string(w.t.sWmtI6),
                      action: function () {
                          r.A.toggleLocalMute(N.ownerId, _.x.STREAM);
                      },
                      checked: R,
                  })),
        ee = (function (e) {
            let n = M(e),
                t = e.ownerId === S.default.getId(),
                s = V.Ay.supports(_.O5.SIDECHAIN_COMPRESSION),
                d = (0, i.bG)([V.Ay], () => V.Ay.getSidechainCompression()),
                o = (0, i.bG)([V.Ay], () => V.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: c } = (0, A.Ay)();
            return !t && n && s
                ? (0, l.jsxs)(a.rXV, {
                      children: [
                          (0, l.jsx)(a.sLh, {
                              id: "sidechain-compression",
                              label: w.intl.string(w.t["/jwMtn"]),
                              subtext: w.intl.string(w.t.zlA23F),
                              action: () => r.A.setSidechainCompression(!d, { analyticsLocations: c }),
                              checked: d,
                          }),
                          (0, l.jsx)(a.aK1, {
                              id: "sidechain-parameters",
                              label: w.intl.string(w.t.fhEzfj),
                              control: (e, n) =>
                                  (0, l.jsx)(a.i42, {
                                      ...e,
                                      ref: n,
                                      value: o,
                                      maxValue: 100,
                                      onChange: (e) =>
                                          r.A.setSidechainCompressionStrength(e, { analyticsLocations: c }),
                                      "aria-label": w.intl.string(w.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })(N),
        en = (0, f.A)(N, B, J),
        et = (0, p.A)(N.channelId, N.ownerId),
        el = (0, g.A)(N.channelId),
        ei = (0, h.A)(N.channelId, (0, T._z)(N)),
        ea = (0, i.bG)([y.A], () => y.A.getChannel(N.channelId), [N.channelId]),
        er = (0, I.h)({ stream: N, channelId: N.channelId }),
        es = (0, m.u)({ userId: N.ownerId, channelId: N.channelId, guildId: N.guildId, minimal: W }),
        { analyticsLocations: ed } = (0, A.Ay)(u.A.STREAM_CONTEXT_MENU),
        eo = (0, b.E)({
            stream: N,
            handleGoLive: () => (0, j.A)(N.guildId, N.channelId, ed),
            minimal: W,
            appContext: B,
        });
    return W
        ? (0, l.jsx)(A.f5, {
              value: ed,
              children: (0, l.jsxs)(a.W1t, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: s.Z_,
                  "aria-label": w.intl.string(w.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: H,
                  onInteraction: Q,
                  children: [
                      (0, l.jsx)(a.rXV, { children: Y ? eo : K }),
                      (0, l.jsxs)(a.rXV, { children: [$, q] }),
                      (0, l.jsx)(a.rXV, { children: ei }),
                      ee,
                      Z
                          ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(a.bXX, {}),
                                    (0, l.jsxs)(a.Drp, {
                                        id: "more-options",
                                        label: w.intl.string(w.t.PdRCRg),
                                        children: [et, er, es, en],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, l.jsx)(c.A, {
              context: O,
              object: G.ZSU.CONTEXT_MENU,
              children: (0, l.jsxs)(a.W1t, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: s.Z_,
                  "aria-label": w.intl.string(w.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: H,
                  onInteraction: Q,
                  children: [
                      (0, l.jsx)(a.rXV, { children: (0, l.jsxs)(l.Fragment, { children: [K, $, er, es] }) }),
                      (0, l.jsx)(a.rXV, { children: q }),
                      (0, l.jsx)(a.rXV, { children: ei }),
                      ee,
                      (0, l.jsxs)(a.rXV, { children: [ea?.isGuildStageVoice() ? null : el, et, Z && en] }),
                  ],
              }),
          });
}
