t.d(n, { default: () => P });
var l = t(627968);
t(64700);
var i = t(311907),
    r = t(477782),
    a = t(959988),
    s = t(964355),
    d = t(861672),
    c = t(827343),
    o = t(442433),
    u = t(956793),
    A = t(401843),
    h = t(820284),
    g = t(793574),
    I = t(688810),
    f = t(810845),
    m = t(854182),
    p = t(666328),
    x = t(74329),
    b = t(304006),
    j = t(479335),
    C = t(845885),
    v = t(643501),
    S = t(972432),
    y = t(471993),
    E = t(616356),
    G = t(961350),
    _ = t(734057),
    T = t(430452),
    w = t(287809),
    M = t(652896),
    V = t(652215),
    X = t(731854),
    k = t(985018);
function L(e) {
    return (0, i.bG)([E.A], () => {
        let n = E.A.getActiveStreamForApplicationStream(e);
        return null != n && (0, M._z)(n) === (0, M._z)(e);
    });
}
function P(e) {
    let n,
        t,
        E,
        P,
        U,
        F,
        R,
        z,
        D,
        N,
        O,
        J,
        {
            stream: H,
            analyticsContext: Q,
            appContext: W,
            exitFullscreen: Y,
            onSelect: Z,
            onInteraction: q,
            minimal: B = !1,
        } = e,
        K = (0, i.cf)([w.default], () => H?.ownerId === w.default.getCurrentUser()?.id),
        $ = L(H),
        ee = ((n = L(H)), (t = (0, S.A)(H.ownerId, X.x.STREAM)), n ? t : null),
        en =
            ((P = (0, i.bG)([v.default], () => null != v.default.getRemoteSessionId())),
            (U = (0, i.bG)([_.A], () => _.A.getChannel(H.channelId), [H.channelId])),
            (F = L(H)),
            ((E = (z = null != (R = w.default.getCurrentUser()) && H.ownerId === R.id)
                ? k.intl.string(k.t.S5anIc)
                : F
                  ? k.intl.string(k.t.q3O3J8)
                  : k.intl.string(k.t["7Xq/nV"])),
            P || (!z && F && U?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "watch",
                      label: E,
                      action: F
                          ? function () {
                                (0, A.vN)((0, M._z)(H));
                            }
                          : function () {
                                u.default.selectVoiceChannel(H.channelId), (0, A.A9)(H);
                            },
                      icon: B && F && a.G,
                      leadingAccessory: B && F ? { type: "icon", icon: a.G } : void 0,
                  })),
        et =
            ((D = L(H)),
            (N = (0, i.bG)([T.Ay], () => T.Ay.isLocalMute(H.ownerId, X.x.STREAM))),
            (J = null != (O = w.default.getCurrentUser()) && H.ownerId === O.id),
            !D || J
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "mute",
                      label: k.intl.string(k.t.sWmtI6),
                      action: function () {
                          c.A.toggleLocalMute(H.ownerId, X.x.STREAM);
                      },
                      checked: N,
                  })),
        el = (function (e) {
            let n = L(e),
                t = e.ownerId === G.default.getId(),
                a = T.Ay.supports(X.O5.SIDECHAIN_COMPRESSION),
                d = (0, i.bG)([T.Ay], () => T.Ay.getSidechainCompression()),
                o = (0, i.bG)([T.Ay], () => T.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, I.Ay)();
            return !t && n && a
                ? (0, l.jsxs)(r.rX, {
                      children: [
                          (0, l.jsx)(r.sL, {
                              id: "sidechain-compression",
                              label: k.intl.string(k.t["/jwMtn"]),
                              subtext: k.intl.string(k.t.zlA23F),
                              action: () => c.A.setSidechainCompression(!d, { analyticsLocations: u }),
                              checked: d,
                          }),
                          (0, l.jsx)(r.aK, {
                              id: "sidechain-parameters",
                              label: k.intl.string(k.t.fhEzfj),
                              control: (e, n) =>
                                  (0, l.jsx)(s.i, {
                                      ...e,
                                      ref: n,
                                      value: o,
                                      maxValue: 100,
                                      onChange: (e) =>
                                          c.A.setSidechainCompressionStrength(e, { analyticsLocations: u }),
                                      "aria-label": k.intl.string(k.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })(H),
        ei = (0, x.A)(H, W, Y),
        er = (0, p.A)(H.channelId, H.ownerId),
        ea = (0, m.A)(H.channelId),
        es = (0, f.A)(H.channelId, (0, M._z)(H)),
        ed = (0, i.bG)([_.A], () => _.A.getChannel(H.channelId), [H.channelId]),
        ec = (0, b.h)({ stream: H, channelId: H.channelId }),
        eo = (0, j.u)({ userId: H.ownerId, channelId: H.channelId, guildId: H.guildId, minimal: B }),
        { analyticsLocations: eu } = (0, I.Ay)(g.A.STREAM_CONTEXT_MENU),
        eA = (0, C.E)({
            stream: H,
            handleGoLive: () => (0, y.A)(H.guildId, H.channelId, eu),
            minimal: B,
            appContext: W,
        });
    return B
        ? (0, l.jsx)(I.f5, {
              value: eu,
              children: (0, l.jsxs)(d.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": k.intl.string(k.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: Z,
                  onInteraction: q,
                  children: [
                      (0, l.jsx)(r.rX, { children: K ? eA : en }),
                      (0, l.jsxs)(r.rX, { children: [et, ee] }),
                      (0, l.jsx)(r.rX, { children: es }),
                      el,
                      $
                          ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(r.bX, {}),
                                    (0, l.jsxs)(r.Dr, {
                                        id: "more-options",
                                        label: k.intl.string(k.t.PdRCRg),
                                        children: [er, ec, eo, ei],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, l.jsx)(h.A, {
              context: Q,
              object: V.ZSU.CONTEXT_MENU,
              children: (0, l.jsxs)(d.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": k.intl.string(k.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: Z,
                  onInteraction: q,
                  children: [
                      (0, l.jsx)(r.rX, { children: (0, l.jsxs)(l.Fragment, { children: [en, et, ec, eo] }) }),
                      (0, l.jsx)(r.rX, { children: ee }),
                      (0, l.jsx)(r.rX, { children: es }),
                      el,
                      (0, l.jsxs)(r.rX, { children: [ed?.isGuildStageVoice() ? null : ea, er, $ && ei] }),
                  ],
              }),
          });
}
