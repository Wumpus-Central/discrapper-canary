n.d(t, { Y: () => a });
var l = n(601964),
    i = n(700785),
    r = n(981631);
function a(e, t) {
    return (
        !!(
            (0, l.eM)(e, t) ||
            i.BT({
                permission: r.Plq.ADMINISTRATOR,
                context: e,
                user: t,
            })
        ) ||
        (i.BT({
            permission: r.Plq.MANAGE_GUILD,
            context: e,
            user: t,
        }) &&
            i.BT({
                permission: r.Plq.MANAGE_ROLES,
                context: e,
                user: t,
            }))
    );
}
