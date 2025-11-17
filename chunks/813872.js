n.d(t, { Z: () => P });
var l = n(54381),
    i = n(473749),
    r = n(442837),
    o = n(481060),
    a = n(570140),
    s = n(189432),
    u = n(189357),
    d = n(728285),
    c = n(887413),
    g = n(359110),
    Z = n(433355),
    f = n(592125),
    b = n(271383),
    m = n(944486),
    O = n(626135),
    h = n(981631),
    E = n(176505),
    v = n(50493),
    j = n(388032);
function P(e) {
    let { userId: t, guildId: n, channelId: P, location: p, onAction: S, appContext: y } = e,
        C = i.useContext(O.AnalyticsContext),
        I = (0, d.Aq)(),
        M = (0, r.e7)([m.Z], () => (null != P ? P : m.Z.getChannelId(n, !0)), [P, n]),
        x = (0, r.e7)([b.ZP], () => (null == n ? null : b.ZP.getMember(n, t)), [n, t]),
        N = (0, u.m)(n);
    return null != n && null != x && N
        ? (0, l.jsx)(o.sNh, {
              id: "mod-view",
              label: j.intl.string(j.t.kj3tz2),
              action: () => {
                  null == S || S(), (0, c.i)(y), I.dispatch(h.CkL.POPOUT_CLOSE);
                  let e = f.Z.getChannel(M),
                      l = {
                          modViewPanel: v.k.INFO,
                          sourceLocation: null != p ? p : C.location,
                      };
                  if ((null == e ? void 0 : e.isThread()) && null != e.parent_id) {
                      Z.ZP.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (a.Z.dispatch({
                              type: "SIDEBAR_CLOSE",
                              baseChannelId: e.parent_id,
                          }),
                          (0, g.Kh)(e.id)),
                          (0, s.r)(n, t, e.parent_id, l);
                      return;
                  }
                  (0, s.r)(n, t, null != M ? M : E.oC.MEMBER_SAFETY, l);
              },
          })
        : null;
}
