n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(434404),
    s = n(962086),
    o = n(225675),
    d = n(496675),
    c = n(981631),
    u = n(388032);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.pNK.ROLES;
    return (0, l.e7)([d.Z], () => d.Z.canImpersonateRole(e, t))
        ? (0, i.jsx)(
              a.sNh,
              {
                  id: 'view-as-role',
                  label: u.intl.string(u.t.arFPfH),
                  icon: a.ZSh,
                  action: () => {
                      r.Z.close(),
                          (0, s.iD)(e.id, {
                              type: o.z.ROLES,
                              roles: { [t.id]: t },
                              returnToSection: n
                          });
                  }
              },
              'view-as-role'
          )
        : null;
}
