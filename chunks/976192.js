t.d(e, {
    Z: function () {
        return m;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(442837),
    u = t(481060),
    a = t(616780),
    o = t(40851),
    d = t(300284),
    s = t(484459),
    c = t(314897),
    f = t(271383),
    _ = t(430824),
    E = t(496675),
    p = t(594174),
    g = t(981631),
    h = t(388032),
    A = t(241287);
function m(n) {
    let { guildId: e, userId: m, analyticsLocation: M, analyticsLocations: Z, context: T, icon: I } = n,
        v = _.Z.getGuild(e),
        b = c.default.getId(),
        C = (0, l.e7)([p.default], () => p.default.getUser(m)),
        S = (0, l.e7)([f.ZP], () => f.ZP.isGuestOrLurker(e, m), [e, m]);
    (0, l.e7)([E.Z], () => E.Z.getGuildVersion(e), [e]);
    let x = r.useMemo(() => ({ [e]: [m] }), [e, m]);
    (0, a.$)(x);
    let N = T === g.IlC.POPOUT,
        y = (0, d.Z)({
            guild: v,
            analyticsLocation: M
        }),
        O = (0, o.Aq)();
    if (null == v || N) return null;
    let P = b === m && (E.Z.can(g.Plq.CHANGE_NICKNAME, v) || E.Z.can(g.Plq.MANAGE_NICKNAMES, v)),
        U = b === m,
        j = E.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, m, v);
    if (!(P || j || U) || null == C || S) return null;
    let D = v.hasFeature(g.oNc.HUB) ? h.intl.string(h.t['+MWrWl']) : h.intl.string(h.t['PKQB/P']),
        G = U ? D : h.intl.string(h.t.dilOFx);
    return (0, i.jsx)(u.MenuItem, {
        id: 'change-nickname',
        label: (0, i.jsx)('div', {
            className: A.labelWrapper,
            children: (0, i.jsx)('span', {
                className: A.label,
                children: G
            })
        }),
        icon: I,
        action: () => {
            U
                ? ((0, s.Z)(C.id, C.getAvatarURL(e, 80), { guildId: e }), y(), O.dispatch(g.CkL.POPOUT_CLOSE), (0, u.closeAllModals)())
                : (0, u.openModalLazy)(async () => {
                      let { default: n } = await t.e('17712').then(t.bind(t, 620021));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              guildId: e,
                              user: C,
                              analyticsSource: M,
                              analyticsLocations: Z
                          });
                  });
        }
    });
}
