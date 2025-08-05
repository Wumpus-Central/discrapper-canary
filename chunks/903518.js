t.d(n, { Y: () => i });
var l = t(601964),
    r = t(700785),
    a = t(981631);
function i(e, n) {
    return (
        !!(
            (0, l.eM)(e, n) ||
            r.BT({
                permission: a.Plq.ADMINISTRATOR,
                context: e,
                user: n
            })
        ) ||
        (r.BT({
            permission: a.Plq.MANAGE_GUILD,
            context: e,
            user: n
        }) &&
            r.BT({
                permission: a.Plq.MANAGE_ROLES,
                context: e,
                user: n
            }))
    );
}
