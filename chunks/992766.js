n.d(t, { A: () => x });
var l = n(477900);
n(582128);
var i = n(164636),
    a = n(192308),
    r = n(477782),
    s = n(80320),
    A = n(855986),
    d = n(71393),
    c = n(576705),
    o = n(977997),
    f = n(147036),
    u = n(818348),
    g = n(495867),
    p = n(284009),
    y = n.n(p),
    h = n(827343),
    T = n(597798),
    I = n(754712),
    S = n(433061),
    b = n(350701),
    G = n(857253),
    N = n(417869),
    O = n(403362),
    P = n(652215),
    m = n(565787),
    v = n(481606),
    k = n(790381),
    X = n(266080),
    C = n(544105);
function Y(e) {
    return null != e ? (0, m.k)(e === C.f$.XBOX ? X.A : k.A) : v.q;
}
var w = n(792996);
function x(e) {
    let t = (0, i.bG)([g.A], () => g.A.getChannelId() === e.id),
        p = (0, G.A)(),
        m = p?.channelId === e.id,
        v = (0, A.bG)([c.A], () => null == e || !c.A.can(u.xB.CONNECT, e), [e]) && !e.isPrivate(),
        k = (0, A.bG)([o.A, d.A], () => (0, f.Pd)(e, o.A, d.A)),
        X = (!(0, i.bG)([o.A], () => o.A.isInChannel(e.id)) && k) || v,
        C = (0, A.yK)([N.A], () =>
            [
                N.A.getAccount(null, P.fg2.XBOX),
                N.A.getAccount(null, P.fg2.PLAYSTATION),
                N.A.getAccount(null, P.fg2.PLAYSTATION_STAGING),
            ].filter(O.Vq),
        );
    if (e.isGuildStageVoice() || (!m && 0 === C.length)) return null;
    let x = Y(void 0);
    return m
        ? (0, l.jsx)(r.Dr, {
              label: w.intl.string(w.t.PlwgdU),
              id: "handoff",
              action: () => {
                  let e, t;
                  ((e = p.sessionId ?? ""),
                      (0, S.Fc)(e),
                      (0, S.ZG)(),
                      (t = void 0 ?? p.channelId),
                      y()(null != t, "attempted to transfer to unknown channel"),
                      p.selfMute !== I.Ay.isSelfMute() && h.default.toggleSelfMute(),
                      p.selfDeaf !== I.Ay.isSelfDeaf() && h.default.toggleSelfDeaf(),
                      (0, b.A)(t, "discord_client", e),
                      T.default.selectVoiceChannel(t, !1));
              },
              icon: x,
              leadingAccessory: { type: "icon", icon: x },
              disabled: X,
          })
        : C.map((i) => {
              var A, d;
              let c = Y(i.type);
              return (0, l.jsx)(
                  r.Dr,
                  {
                      id: `transfer-${i.type}-${i.id}`,
                      label:
                          ((A = i.type),
                          (d = t),
                          A === P.fg2.XBOX
                              ? d
                                  ? w.intl.string(w.t["qVE/VF"])
                                  : w.intl.string(w.t.E8euSk)
                              : A === P.fg2.PLAYSTATION
                                ? d
                                    ? w.intl.string(w.t.vzfxmY)
                                    : w.intl.string(w.t.QxEYDj)
                                : A === P.fg2.PLAYSTATION_STAGING
                                  ? d
                                      ? w.intl.string(w.t.BDiXtV)
                                      : w.intl.string(w.t["bhdB9+"])
                                  : void 0),
                      action: () => {
                          !i.twoWayLink || i.revoked
                              ? (0, s.A)({ platformType: i.type, location: "Console Transfer Item" })
                              : i.type === P.fg2.XBOX
                                ? (0, a.mM)(async () => {
                                      let { default: t } = await Promise.all([
                                          n.e(72338),
                                          n.e(648241),
                                          n.e(595429),
                                          n.e(595948),
                                          n.e(525989),
                                          n.e(898038),
                                      ]).then(n.bind(n, 351637));
                                      return (n) => (0, l.jsx)(t, { ...n, channel: e });
                                  })
                                : (i.type === P.fg2.PLAYSTATION || i.type === P.fg2.PLAYSTATION_STAGING) &&
                                  (0, a.mM)(async () => {
                                      let { default: t } = await Promise.all([
                                          n.e(622936),
                                          n.e(187880),
                                          n.e(571210),
                                          n.e(861293),
                                      ]).then(n.bind(n, 971642));
                                      return (n) => (0, l.jsx)(t, { ...n, platform: i.type, channel: e });
                                  });
                      },
                      icon: c,
                      leadingAccessory: { type: "icon", icon: c },
                      disabled: X,
                  },
                  i.id,
              );
          });
}
