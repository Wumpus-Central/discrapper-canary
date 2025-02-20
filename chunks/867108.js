n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(434404),
    a = n(962086),
    s = n(225675),
    c = n(496675),
    d = n(981631),
    u = n(388032);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.pNK.ROLES;
    return (0, i.e7)([c.Z], () => c.Z.canImpersonateRole(e, t))
        ? (0, r.jsx)(
              l.sNh,
              {
                  id: 'view-as-role',
                  label: u.NW.string(u.t.arFPfH),
                  icon: l.ZSh,
                  action: () => {
                      o.Z.close(),
                          (0, a.iD)(e.id, {
                              type: s.z.ROLES,
                              roles: { [t.id]: t },
                              returnToSection: n
                          });
                  }
              },
              'view-as-role'
          )
        : null;
}
