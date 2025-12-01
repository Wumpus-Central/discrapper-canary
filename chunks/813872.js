n.d(t, { Z: () => p });
var l = n(54381),
    r = n(473749),
    i = n(442837),
    o = n(481060),
    a = n(570140),
    u = n(189432),
    c = n(189357),
    s = n(728285),
    d = n(887413),
    f = n(359110),
    b = n(433355),
    g = n(592125),
    O = n(271383),
    y = n(944486),
    Z = n(626135),
    v = n(981631),
    E = n(176505),
    m = n(50493),
    j = n(388032);
function p(e) {
    let { userId: t, guildId: n, channelId: p, location: S, onAction: h, appContext: _ } = e,
        P = r.useContext(Z.AnalyticsContext),
        A = (0, s.Aq)(),
        I = (0, i.e7)([y.Z], () => (null != p ? p : y.Z.getChannelId(n, !0)), [p, n]),
        C = (0, i.e7)([O.ZP], () => (null == n ? null : O.ZP.getMember(n, t)), [n, t]),
        M = (0, c.m)(n);
    return null != n && null != C && M
        ? (0, l.jsx)(o.sNh, {
              id: "mod-view",
              label: j.intl.string(j.t.kj3tz2),
              action: () => {
                  null == h || h(), (0, d.i)(_), A.dispatch(v.CkL.POPOUT_CLOSE);
                  let e = g.Z.getChannel(I),
                      l = {
                          modViewPanel: m.k.INFO,
                          sourceLocation: null != S ? S : P.location,
                      };
                  if ((null == e ? void 0 : e.isThread()) && null != e.parent_id) {
                      b.ZP.getCurrentSidebarChannelId(e.parent_id) === e.id &&
                          (a.Z.dispatch({
                              type: "SIDEBAR_CLOSE",
                              baseChannelId: e.parent_id,
                          }),
                          (0, f.Kh)(e.id)),
                          (0, u.r)(n, t, e.parent_id, l);
                      return;
                  }
                  (0, u.r)(n, t, null != I ? I : E.oC.MEMBER_SAFETY, l);
              },
          })
        : null;
}
