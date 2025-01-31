a.d(n, { Z: () => b });
var i = a(200651),
    t = a(192379),
    l = a(442837),
    r = a(481060),
    o = a(616780),
    s = a(40851),
    u = a(300284),
    d = a(484459),
    c = a(314897),
    p = a(271383),
    _ = a(430824),
    f = a(496675),
    v = a(594174),
    h = a(981631),
    g = a(388032),
    A = a(497523);
function b(e) {
    let { guildId: n, userId: b, analyticsLocation: x, analyticsLocations: I, context: P, icon: C } = e,
        Z = _.Z.getGuild(n),
        N = c.default.getId(),
        m = (0, l.e7)([v.default], () => v.default.getUser(b)),
        y = (0, l.e7)([p.ZP], () => p.ZP.isGuestOrLurker(n, b), [n, b]);
    (0, l.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
    let k = t.useMemo(() => ({ [n]: [b] }), [n, b]);
    (0, o.$)(k);
    let w = P === h.IlC.POPOUT,
        O = (0, u.Z)({
            guild: Z,
            analyticsLocation: x
        }),
        L = (0, s.Aq)();
    if (null == Z || w) return null;
    let T = N === b && (f.Z.can(h.Plq.CHANGE_NICKNAME, Z) || f.Z.can(h.Plq.MANAGE_NICKNAMES, Z)),
        W = N === b,
        G = f.Z.canManageUser(h.Plq.MANAGE_NICKNAMES, b, Z);
    if (!(T || G || W) || null == m || y) return null;
    let E = Z.hasFeature(h.oNc.HUB) ? g.intl.string(g.t['+MWrWl']) : g.intl.string(g.t['PKQB/P']),
        U = W ? E : g.intl.string(g.t.dilOFx);
    return (0, i.jsx)(r.sNh, {
        id: 'change-nickname',
        label: (0, i.jsx)('div', {
            className: A.labelWrapper,
            children: (0, i.jsx)('span', {
                className: A.label,
                children: U
            })
        }),
        icon: C,
        action: () => {
            W
                ? ((0, d.Z)(m.id, m.getAvatarURL(n, 80), { guildId: n }), O(), L.dispatch(h.CkL.POPOUT_CLOSE), (0, r.pTH)())
                : (0, r.ZDy)(async () => {
                      let { default: e } = await a.e('17712').then(a.bind(a, 620021));
                      return (a) =>
                          (0, i.jsx)(e, {
                              ...a,
                              guildId: n,
                              user: m,
                              analyticsSource: x,
                              analyticsLocations: I
                          });
                  });
        }
    });
}
