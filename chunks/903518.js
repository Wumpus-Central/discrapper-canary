n.d(t, { Y: () => a });
var l = n(601964),
    r = n(700785),
    i = n(981631);
function a(e, t) {
    return (
        !!(
            (0, l.eM)(e, t) ||
            r.BT({
                permission: i.Plq.ADMINISTRATOR,
                context: e,
                user: t,
            })
        ) ||
        (r.BT({
            permission: i.Plq.MANAGE_GUILD,
            context: e,
            user: t,
        }) &&
            r.BT({
                permission: i.Plq.MANAGE_ROLES,
                context: e,
                user: t,
            }))
    );
}
