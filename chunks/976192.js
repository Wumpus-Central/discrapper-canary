t.d(n, {
    Z: function () {
        return v;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(616780),
    o = t(40851),
    d = t(300284),
    s = t(484459),
    c = t(314897),
    Z = t(271383),
    f = t(430824),
    m = t(496675),
    g = t(594174),
    M = t(981631),
    x = t(388032),
    h = t(497523);
function v(e) {
    let { guildId: n, userId: v, analyticsLocation: p, analyticsLocations: b, context: I, icon: C } = e,
        P = f.Z.getGuild(n),
        E = c.default.getId(),
        j = (0, r.e7)([g.default], () => g.default.getUser(v)),
        T = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, v), [n, v]);
    (0, r.e7)([m.Z], () => m.Z.getGuildVersion(n), [n]);
    let N = i.useMemo(() => ({ [n]: [v] }), [n, v]);
    (0, u.$)(N);
    let O = I === M.IlC.POPOUT,
        U = (0, d.Z)({
            guild: P,
            analyticsLocation: p
        }),
        A = (0, o.Aq)();
    if (null == P || O) return null;
    let _ = E === v && (m.Z.can(M.Plq.CHANGE_NICKNAME, P) || m.Z.can(M.Plq.MANAGE_NICKNAMES, P)),
        R = E === v,
        S = m.Z.canManageUser(M.Plq.MANAGE_NICKNAMES, v, P);
    if (!(_ || S || R) || null == j || T) return null;
    let L = P.hasFeature(M.oNc.HUB) ? x.intl.string(x.t['+MWrWl']) : x.intl.string(x.t['PKQB/P']),
        k = R ? L : x.intl.string(x.t.dilOFx);
    return (0, l.jsx)(a.MenuItem, {
        id: 'change-nickname',
        label: (0, l.jsx)('div', {
            className: h.labelWrapper,
            children: (0, l.jsx)('span', {
                className: h.label,
                children: k
            })
        }),
        icon: C,
        action: () => {
            R
                ? ((0, s.Z)(j.id, j.getAvatarURL(n, 80), { guildId: n }), U(), A.dispatch(M.CkL.POPOUT_CLOSE), (0, a.closeAllModals)())
                : (0, a.openModalLazy)(async () => {
                      let { default: e } = await t.e('17712').then(t.bind(t, 620021));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              guildId: n,
                              user: j,
                              analyticsSource: p,
                              analyticsLocations: b
                          });
                  });
        }
    });
}
