n.d(t, { Z: () => c });
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(626786),
    s = n(361043);
function c(e) {
    let {
        className: t,
        roleColor: n,
        roleName: r,
        hasRemoveIcon: c = !1,
        onClick: u,
        disabled: d = !1,
        verified: p = !1,
    } = e;
    return (0, i.jsx)(a.P3F, {
        className: l()(t, s.button, { [s.disabled]: d }),
        onClick: d ? void 0 : u,
        "aria-disabled": d,
        role: "button",
        children: (0, i.jsx)(o.Z, {
            className: s.role,
            roleColor: n,
            roleName: r,
            verified: p,
            children:
                c &&
                (0, i.jsx)(a.Dio, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: s.removeRole,
                    colorClass: s.removeRoleIcon,
                }),
        }),
    });
}
