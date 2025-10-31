n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(755721),
    o = n(481060),
    s = n(626786),
    c = n(361043);
function u(e) {
    let {
        className: t,
        roleColor: n,
        roleName: i,
        hasRemoveIcon: u = !1,
        onClick: d,
        disabled: p = !1,
        verified: f = !1,
    } = e;
    return (0, r.jsx)(a.zx, {
        className: l()(t, c.button),
        look: a.zx.Looks.BLANK,
        size: a.zx.Sizes.NONE,
        onClick: d,
        disabled: p,
        children: (0, r.jsx)(s.Z, {
            className: c.role,
            roleColor: n,
            roleName: i,
            verified: f,
            children:
                u &&
                (0, r.jsx)(o.Dio, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: c.removeRole,
                    colorClass: c.removeRoleIcon,
                }),
        }),
    });
}
