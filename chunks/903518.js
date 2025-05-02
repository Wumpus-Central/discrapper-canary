t.d(n, { Y: () => a });
var l = t(700785),
    r = t(981631);
function a(e, n) {
    return (
        !!(
            e.isOwner(n) ||
            l.BT({
                permission: r.Plq.ADMINISTRATOR,
                context: e,
                user: n
            })
        ) ||
        (l.BT({
            permission: r.Plq.MANAGE_GUILD,
            context: e,
            user: n
        }) &&
            l.BT({
                permission: r.Plq.MANAGE_ROLES,
                context: e,
                user: n
            }))
    );
}
