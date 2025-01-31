n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    s = n(442837),
    a = n(481060),
    r = n(616780),
    d = n(100527),
    u = n(931240),
    c = n(353093),
    o = n(314897),
    g = n(271383),
    E = n(430824),
    h = n(496675),
    S = n(594174),
    N = n(981631),
    _ = n(388032);
function f(e) {
    let { guildId: t, userId: n, analyticsLocation: f, analyticsLocations: Z, context: x, icon: A } = e,
        p = (0, s.e7)([E.Z], () => E.Z.getGuild(t), [t]),
        L = (0, s.e7)([o.default], () => o.default.getId()),
        b = (0, s.e7)([S.default], () => S.default.getUser(n)),
        v = (0, s.e7)([g.ZP], () => g.ZP.isGuestOrLurker(t, n), [t, n]),
        I = l.useMemo(() => ({ [t]: [n] }), [t, n]),
        m = (0, c.EJ)(p);
    (0, r.$)(I);
    let M = x === N.IlC.POPOUT,
        j = L === n,
        [T, O] = (0, s.Wu)([h.Z], () => (null == p ? [!1, !1] : [L === n && (h.Z.can(N.Plq.CHANGE_NICKNAME, p) || h.Z.can(N.Plq.MANAGE_NICKNAMES, p)), h.Z.canManageUser(N.Plq.MANAGE_NICKNAMES, n, p)]), [L, n, p]),
        C = l.useCallback(
            (e, t) => () => {
                (0, u.nE)(e, t, d.Z.CONTEXT_MENU);
            },
            []
        );
    return null != p && !M && (T || O || j) && null != b && !v && m && b.isStaff()
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(a.sNh, {
                      id: 'adopt-clan-identity',
                      label: _.intl.string(_.t.A2gzRU),
                      icon: A,
                      action: C(t, !0)
                  }),
                  (0, i.jsx)(a.sNh, {
                      id: 'deadopt-clan-identity',
                      label: _.intl.string(_.t.RFfO9v),
                      icon: A,
                      action: C(null, null)
                  })
              ]
          })
        : null;
}
