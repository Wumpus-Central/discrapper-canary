t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    s = t(481060),
    r = t(616780),
    u = t(100527),
    o = t(931240),
    d = t(353093),
    c = t(314897),
    g = t(271383),
    E = t(430824),
    h = t(496675),
    M = t(594174),
    f = t(981631),
    _ = t(388032);
function N(e) {
    let { guildId: n, userId: t, analyticsLocation: N, analyticsLocations: S, context: I, icon: p } = e,
        m = (0, a.e7)([E.Z], () => E.Z.getGuild(n), [n]),
        x = (0, a.e7)([c.default], () => c.default.getId()),
        L = (0, a.e7)([M.default], () => M.default.getUser(t)),
        A = (0, a.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, t), [n, t]),
        b = l.useMemo(() => ({ [n]: [t] }), [n, t]),
        Z = (0, d.EJ)(m);
    (0, r.$)(b);
    let v = I === f.IlC.POPOUT,
        G = x === t,
        [C, j] = (0, a.Wu)(
            [h.Z],
            () => {
                if (null == m) return [!1, !1];
                let e = x === t && (h.Z.can(f.Plq.CHANGE_NICKNAME, m) || h.Z.can(f.Plq.MANAGE_NICKNAMES, m));
                return [e, h.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, t, m)];
            },
            [x, t, m]
        ),
        T = l.useCallback(
            (e, n) => () => {
                (0, o.nE)(e, n, u.Z.CONTEXT_MENU);
            },
            []
        );
    return null != m && !v && (C || j || G) && null != L && !A && Z && L.isStaff()
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(s.MenuItem, {
                      id: 'adopt-clan-identity',
                      label: _.intl.string(_.t.A2gzRU),
                      icon: p,
                      action: T(n, !0)
                  }),
                  (0, i.jsx)(s.MenuItem, {
                      id: 'deadopt-clan-identity',
                      label: _.intl.string(_.t.RFfO9v),
                      icon: p,
                      action: T(null, null)
                  })
              ]
          })
        : null;
}
