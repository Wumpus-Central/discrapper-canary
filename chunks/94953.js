n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(616780),
    o = n(100527),
    c = n(931240),
    u = n(353093),
    d = n(314897),
    g = n(271383),
    b = n(430824),
    p = n(496675),
    f = n(594174),
    S = n(981631),
    N = n(388032);
function O(e) {
    let { guildId: t, userId: n, analyticsLocation: O, analyticsLocations: E, context: h, icon: y } = e,
        j = (0, s.e7)([b.Z], () => b.Z.getGuild(t), [t]),
        _ = (0, s.e7)([d.default], () => d.default.getId()),
        P = (0, s.e7)([f.default], () => f.default.getUser(n)),
        v = (0, s.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, n), [t, n]),
        A = r.useMemo(() => ({ [t]: [n] }), [t, n]),
        m = (0, u.EJ)(j);
    (0, a.$)(A);
    let x = h === S.IlC.POPOUT,
        L = _ === n,
        [I, Z] = (0, s.Wu)([p.Z], () => (null == j ? [!1, !1] : [_ === n && (p.Z.can(S.Plq.CHANGE_NICKNAME, j) || p.Z.can(S.Plq.MANAGE_NICKNAMES, j)), p.Z.canManageUser(S.Plq.MANAGE_NICKNAMES, n, j)]), [_, n, j]),
        M = r.useCallback(
            (e, t) => () => {
                (0, c.nE)(e, t, o.Z.CONTEXT_MENU);
            },
            []
        );
    return null != j && !x && (I || Z || L) && null != P && !v && m && P.isStaff()
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(l.sNh, {
                      id: 'adopt-clan-identity',
                      label: N.NW.string(N.t.A2gzRU),
                      icon: y,
                      action: M(t, !0)
                  }),
                  (0, i.jsx)(l.sNh, {
                      id: 'deadopt-clan-identity',
                      label: N.NW.string(N.t.RFfO9v),
                      icon: y,
                      action: M(null, null)
                  })
              ]
          })
        : null;
}
