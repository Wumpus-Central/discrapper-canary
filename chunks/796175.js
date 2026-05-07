t.d(e, { default: () => k });
var l = t(627968);
t(64700);
var i = t(17928),
    r = t(477782),
    a = t(959988),
    d = t(964355),
    s = t(980707),
    c = t(827343),
    o = t(442433),
    u = t(730852),
    h = t(401843),
    g = t(820284),
    I = t(793574),
    A = t(688810),
    x = t(810845),
    j = t(854182),
    f = t(286710),
    S = t(74329),
    b = t(304006),
    m = t(479335),
    C = t(405916),
    p = t(643501),
    G = t(972432),
    w = t(471993),
    E = t(616356),
    v = t(495544),
    X = t(734057),
    _ = t(235058),
    y = t(287809),
    M = t(652896),
    R = t(652215),
    T = t(731854),
    z = t(375708);
function N(n) {
    return (0, i.bG)([E.A], () => {
        let e = E.A.getActiveStreamForApplicationStream(n);
        return null != e && (0, M._z)(e) === (0, M._z)(n);
    });
}
function k(n) {
    let e,
        t,
        E,
        k,
        O,
        U,
        L,
        V,
        F,
        D,
        W,
        Z,
        {
            stream: q,
            analyticsContext: P,
            appContext: Q,
            exitFullscreen: H,
            onSelect: J,
            onInteraction: K,
            minimal: B = !1,
        } = n,
        Y = (0, i.cf)([y.default], () => q?.ownerId === y.default.getCurrentUser()?.id),
        $ = N(q),
        nn = ((e = N(q)), (t = (0, G.A)(q.ownerId, T.x.STREAM)), e ? t : null),
        ne =
            ((k = (0, i.bG)([p.default], () => null != p.default.getRemoteSessionId())),
            (O = (0, i.bG)([X.A], () => X.A.getChannel(q.channelId), [q.channelId])),
            (U = N(q)),
            ((E = (V = null != (L = y.default.getCurrentUser()) && q.ownerId === L.id)
                ? z.intl.string(z.t.S5anIc)
                : U
                  ? z.intl.string(z.t.q3O3J8)
                  : z.intl.string(z.t["7Xq/nV"])),
            k || (!V && U && O?.isGuildStageVoice()))
                ? null
                : (0, l.jsx)(r.Dr, {
                      id: "watch",
                      label: E,
                      action: U
                          ? function () {
                                (0, h.vN)((0, M._z)(q));
                            }
                          : function () {
                                u.default.selectVoiceChannel(q.channelId), (0, h.A9)(q);
                            },
                      icon: B && U && a.G,
                      leadingAccessory: B && U ? { type: "icon", icon: a.G } : void 0,
                  })),
        nt =
            ((F = N(q)),
            (D = (0, i.bG)([_.Ay], () => _.Ay.isLocalMute(q.ownerId, T.x.STREAM))),
            (Z = null != (W = y.default.getCurrentUser()) && q.ownerId === W.id),
            !F || Z
                ? null
                : (0, l.jsx)(r.sL, {
                      id: "mute",
                      label: z.intl.string(z.t.sWmtI6),
                      action: function () {
                          c.A.toggleLocalMute(q.ownerId, T.x.STREAM);
                      },
                      checked: D,
                  })),
        nl = (function (n) {
            let e = N(n),
                t = n.ownerId === v.default.getId(),
                a = _.Ay.supports(T.O5.SIDECHAIN_COMPRESSION),
                s = (0, i.bG)([_.Ay], () => _.Ay.getSidechainCompression()),
                o = (0, i.bG)([_.Ay], () => _.Ay.getSidechainCompressionStrength()),
                { analyticsLocations: u } = (0, A.Ay)();
            return !t && e && a
                ? (0, l.jsxs)(r.rX, {
                      children: [
                          (0, l.jsx)(r.sL, {
                              id: "sidechain-compression",
                              label: z.intl.string(z.t["/jwMtn"]),
                              subtext: z.intl.string(z.t.zlA23F),
                              action: () => c.A.setSidechainCompression(!s, { analyticsLocations: u }),
                              checked: s,
                          }),
                          (0, l.jsx)(r.aK, {
                              id: "sidechain-parameters",
                              label: z.intl.string(z.t.fhEzfj),
                              control: (n, e) =>
                                  (0, l.jsx)(d.i, {
                                      ...n,
                                      ref: e,
                                      value: o,
                                      maxValue: 100,
                                      onChange: (n) =>
                                          c.A.setSidechainCompressionStrength(n, { analyticsLocations: u }),
                                      "aria-label": z.intl.string(z.t.fhEzfj),
                                  }),
                          }),
                      ],
                  })
                : null;
        })(q),
        ni = (0, S.A)(q, Q, H),
        nr = (0, f.A)(q.channelId, q.ownerId),
        na = (0, j.A)(q.channelId),
        nd = (0, x.A)(q.channelId, (0, M._z)(q)),
        ns = (0, i.bG)([X.A], () => X.A.getChannel(q.channelId), [q.channelId]),
        nc = (0, b.h)({ stream: q, channelId: q.channelId }),
        no = (0, m.u)({ userId: q.ownerId, channelId: q.channelId, guildId: q.guildId, minimal: B }),
        { analyticsLocations: nu } = (0, A.Ay)(I.A.STREAM_CONTEXT_MENU),
        nh = (0, C.E)({
            stream: q,
            handleGoLive: () => (0, w.A)(q.guildId, q.channelId, nu),
            minimal: B,
            appContext: Q,
        });
    return B
        ? (0, l.jsx)(A.f5, {
              value: nu,
              children: (0, l.jsxs)(s.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": z.intl.string(z.t.Gl3Q30),
                  variant: "fixed",
                  onSelect: J,
                  onInteraction: K,
                  children: [
                      (0, l.jsx)(r.rX, { children: Y ? nh : ne }),
                      (0, l.jsxs)(r.rX, { children: [nt, nn] }),
                      (0, l.jsx)(r.rX, { children: nd }),
                      nl,
                      $
                          ? (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(r.bX, {}),
                                    (0, l.jsxs)(r.Dr, {
                                        id: "more-options",
                                        label: z.intl.string(z.t.PdRCRg),
                                        children: [nr, nc, no, ni],
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          })
        : (0, l.jsx)(g.A, {
              context: P,
              object: R.ZSU.CONTEXT_MENU,
              children: (0, l.jsxs)(s.W, {
                  "data-menu-migrated-auto": !0,
                  navId: "stream-context",
                  onClose: o.Z_,
                  "aria-label": z.intl.string(z.t.Gl3Q30),
                  variant: "flexible",
                  onSelect: J,
                  onInteraction: K,
                  children: [
                      (0, l.jsx)(r.rX, { children: (0, l.jsxs)(l.Fragment, { children: [ne, nt, nc, no] }) }),
                      (0, l.jsx)(r.rX, { children: nn }),
                      (0, l.jsx)(r.rX, { children: nd }),
                      nl,
                      (0, l.jsxs)(r.rX, { children: [ns?.isGuildStageVoice() ? null : na, nr, $ && ni] }),
                  ],
              }),
          });
}
