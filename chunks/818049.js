n.d(t, { A: () => A });
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(892358),
    s = n(475815),
    o = n(341915),
    u = n(245853),
    c = n(579473),
    d = n(590202),
    m = n(971649),
    p = n(651892),
    f = n(73473),
    E = n(717415),
    h = n(98197),
    v = n(583235),
    x = n(654487),
    g = n(985018),
    S = n(221190);
function A(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: A } = e,
        {
            onClose: C,
            sourceQuestContent: _,
            quest: b,
            isFullscreenEnabled: y,
        } = l.useContext(E.VideoQuestModalContext),
        T = (0, m.go)(),
        N = (0, v.H)({ quest: b, onClose: C, sourceQuestContent: _, impressionId: T }),
        D = l.useCallback(
            (e) => {
                if (y) {
                    let e = (0, s.qf)(t.current?.parentNode, t.current);
                    null != e && (0, s.sP)(e);
                }
                n(e, d.Cy.LEARN_MORE), N(e, d.Cy.OPEN_GAME_LINK);
            },
            [y, t, N, n],
        ),
        { title: R, subtitle: L } = {
            title: (0, p.wr)(b),
            subtitle: b.config.ctaConfig.subtitle ?? g.intl.string(g.t.mxaHfx),
        },
        { enabled: I } = u.uK.useConfig({ location: x.rE.VIDEO_MODAL }),
        j = l.useMemo(() => (0, c.tW)(b, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [b]);
    return I
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.nY, { url: j }),
                  (0, r.jsx)(a.KP, {}),
                  (0, r.jsxs)(a.zj, {
                      orientation: A,
                      children: [
                          null != j &&
                              (0, r.jsx)(f.R, {
                                  questOrQuests: b,
                                  questContent: o.uF.VIDEO_MODAL_END_CARD,
                                  sourceQuestContent: _,
                                  children: (e) =>
                                      (0, r.jsx)(a.Kb, {
                                          ref: (t) => {
                                              e.current = t;
                                          },
                                          url: j,
                                          orientation: A,
                                      }),
                              }),
                          (0, r.jsx)(a.lx, {
                              title: R,
                              subtitle: L,
                              ctaBtnLabel: b.config.ctaConfig.buttonLabel,
                              ctaIcon: i.KS6,
                              onCTAClick: () => D(o.uF.VIDEO_MODAL),
                              orientation: A,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  null != j &&
                      (0, r.jsx)(f.R, {
                          questOrQuests: b,
                          questContent: o.uF.VIDEO_MODAL_END_CARD,
                          sourceQuestContent: _,
                          children: (e) =>
                              (0, r.jsx)(a.pK, {
                                  ref: (t) => {
                                      e.current = t;
                                  },
                                  url: j,
                              }),
                      }),
                  (0, r.jsx)("div", { className: S.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(a.OH, {
                      title: R,
                      subtitle: L,
                      icon: i.KS6,
                      className: S.mT,
                      onClick: () => D(o.uF.VIDEO_MODAL),
                      divider: (0, r.jsx)(h.A, { color: "#747783" }),
                  }),
              ],
          });
}
