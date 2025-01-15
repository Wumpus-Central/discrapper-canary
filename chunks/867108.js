n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(434404),
    o = n(962086),
    s = n(225675),
    d = n(496675),
    c = n(981631),
    u = n(388032);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.pNK.ROLES;
    return (0, l.e7)([d.Z], () => d.Z.canImpersonateRole(e, t))
        ? (0, i.jsx)(
              r.MenuItem,
              {
                  id: 'view-as-role',
                  label: u.intl.string(u.t.arFPfH),
                  icon: r.ArrowSmallRightIcon,
                  action: () => {
                      a.Z.close(),
                          (0, o.iD)(e.id, {
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
