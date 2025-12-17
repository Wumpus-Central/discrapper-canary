n.d(t, { Z: () => m });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(434404),
    o = n(962086),
    s = n(225675),
    c = n(496675),
    d = n(981631),
    u = n(388032);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.pNK.ROLES;
    return (0, r.e7)([c.Z], () => c.Z.canImpersonateRole(e, t))
        ? (0, i.jsx)(
              l.sNh,
              {
                  id: "view-as-role",
                  label: u.intl.string(u.t.arFPfJ),
                  icon: l.ZSh,
                  action: () => {
                      a.Z.close(),
                          (0, o.iD)(e.id, {
                              type: s.z.ROLES,
                              roles: { [t.id]: t },
                              returnToSection: n,
                          });
                  },
              },
              "view-as-role",
          )
        : null;
}
