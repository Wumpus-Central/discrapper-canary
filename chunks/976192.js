t.d(n, {
    Z: function () {
        return I;
    }
});
var i = t(200651),
    a = t(192379),
    l = t(442837),
    r = t(481060),
    o = t(616780),
    d = t(40851),
    u = t(300284),
    s = t(484459),
    c = t(314897),
    p = t(271383),
    f = t(430824),
    v = t(496675),
    _ = t(594174),
    g = t(981631),
    h = t(388032),
    A = t(497523);
function I(e) {
    let { guildId: n, userId: I, analyticsLocation: x, analyticsLocations: b, context: P, icon: m } = e,
        C = f.Z.getGuild(n),
        Z = c.default.getId(),
        y = (0, l.e7)([_.default], () => _.default.getUser(I)),
        k = (0, l.e7)([p.ZP], () => p.ZP.isGuestOrLurker(n, I), [n, I]);
    (0, l.e7)([v.Z], () => v.Z.getGuildVersion(n), [n]);
    let M = a.useMemo(() => ({ [n]: [I] }), [n, I]);
    (0, o.$)(M);
    let N = P === g.IlC.POPOUT,
        L = (0, u.Z)({
            guild: C,
            analyticsLocation: x
        }),
        w = (0, d.Aq)();
    if (null == C || N) return null;
    let O = Z === I && (v.Z.can(g.Plq.CHANGE_NICKNAME, C) || v.Z.can(g.Plq.MANAGE_NICKNAMES, C)),
        W = Z === I,
        G = v.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, I, C);
    if (!(O || G || W) || null == y || k) return null;
    let T = C.hasFeature(g.oNc.HUB) ? h.intl.string(h.t['+MWrWl']) : h.intl.string(h.t['PKQB/P']),
        E = W ? T : h.intl.string(h.t.dilOFx);
    return (0, i.jsx)(r.MenuItem, {
        id: 'change-nickname',
        label: (0, i.jsx)('div', {
            className: A.labelWrapper,
            children: (0, i.jsx)('span', {
                className: A.label,
                children: E
            })
        }),
        icon: m,
        action: () => {
            W
                ? ((0, s.Z)(y.id, y.getAvatarURL(n, 80), { guildId: n }), L(), w.dispatch(g.CkL.POPOUT_CLOSE), (0, r.closeAllModals)())
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await t.e('17712').then(t.bind(t, 620021));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              guildId: n,
                              user: y,
                              analyticsSource: x,
                              analyticsLocations: b
                          });
                  });
        }
    });
}
