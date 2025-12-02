n.d(t, { Z: () => j });
var l = n(54381),
    r = n(473749),
    i = n(442837),
    a = n(481060),
    o = n(570140),
    u = n(189432),
    c = n(189357),
    s = n(728285),
    d = n(887413),
    f = n(359110),
    b = n(433355),
    g = n(592125),
    O = n(271383),
    E = n(944486),
    p = n(626135),
    y = n(981631),
    Z = n(176505),
    P = n(50493),
    m = n(388032);
function j(e) {
    let { userId: t, guildId: n, channelId: j, location: h, onAction: v, appContext: _ } = e,
        S = r.useContext(p.AnalyticsContext),
        M = (0, s.Aq)(),
        C = (0, i.e7)([E.Z], () => (null != j ? j : E.Z.getChannelId(n, !0)), [j, n]),
        I = (0, i.e7)([O.ZP], () => (null == n ? null : O.ZP.getMember(n, t)), [n, t]),
        N = (0, c.m)(n);
    return null != n && null != I && N
        ? (0, l.jsx)(a.sNh, {
              id: "mod-view",
              label: m.intl.string(m.t.kj3tz2),
              action: () => {
                  null == v || v(), (0, d.i)(_), M.dispatch(y.CkL.POPOUT_CLOSE);
                  let e = g.Z.getChannel(C),
                      l = {
                          modViewPanel: P.k.INFO,
                          sourceLocation: null != h ? h : S.location,
                      };
                  if ((null == e ? void 0 : e.isThread()) && null != e.parent_id) {
                      b.ZP.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (o.Z.dispatch({
                              type: "SIDEBAR_CLOSE",
                              baseChannelId: e.parent_id,
                          }),
                          (0, f.Kh)(e.id)),
                          (0, u.r)(n, t, e.parent_id, l);
                      return;
                  }
                  (0, u.r)(n, t, null != C ? C : Z.oC.MEMBER_SAFETY, l);
              },
          })
        : null;
}
