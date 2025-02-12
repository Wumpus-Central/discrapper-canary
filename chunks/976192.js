l.d(n, { Z: () => N });
var t = l(200651),
    i = l(192379),
    r = l(442837),
    a = l(481060),
    d = l(616780),
    s = l(40851),
    u = l(300284),
    o = l(484459),
    c = l(314897),
    Z = l(271383),
    g = l(430824),
    f = l(496675),
    h = l(594174),
    m = l(981631),
    P = l(388032),
    x = l(423581);
function N(e) {
    let { guildId: n, userId: N, analyticsLocation: b, analyticsLocations: C, context: v, icon: E } = e,
        p = g.Z.getGuild(n),
        O = c.default.getId(),
        j = (0, r.e7)([h.default], () => h.default.getUser(N)),
        T = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, N), [n, N]);
    (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
    let I = i.useMemo(() => ({ [n]: [N] }), [n, N]);
    (0, d.$)(I);
    let _ = v === m.IlC.POPOUT,
        U = (0, u.Z)({
            guild: p,
            analyticsLocation: b
        }),
        A = (0, s.Aq)();
    if (null == p || _) return null;
    let M = O === N && (f.Z.can(m.Plq.CHANGE_NICKNAME, p) || f.Z.can(m.Plq.MANAGE_NICKNAMES, p)),
        S = O === N,
        R = f.Z.canManageUser(m.Plq.MANAGE_NICKNAMES, N, p);
    if (!(M || R || S) || null == j || T) return null;
    let k = p.hasFeature(m.oNc.HUB) ? P.intl.string(P.t['+MWrWl']) : P.intl.string(P.t['PKQB/P']),
        y = S ? k : P.intl.string(P.t.dilOFx);
    return (0, t.jsx)(a.sNh, {
        id: 'change-nickname',
        label: (0, t.jsx)('div', {
            className: x.labelWrapper,
            children: (0, t.jsx)('span', {
                className: x.label,
                children: y
            })
        }),
        icon: E,
        action: () => {
            S
                ? ((0, o.Z)(j.id, j.getAvatarURL(n, 80), { guildId: n }), U(), A.dispatch(m.CkL.POPOUT_CLOSE), (0, a.pTH)())
                : (0, a.ZDy)(async () => {
                      let { default: e } = await l.e('17712').then(l.bind(l, 620021));
                      return (l) =>
                          (0, t.jsx)(e, {
                              ...l,
                              guildId: n,
                              user: j,
                              analyticsSource: b,
                              analyticsLocations: C
                          });
                  });
        }
    });
}
