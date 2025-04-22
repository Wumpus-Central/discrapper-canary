l.d(n, { Y: () => a });
var t = l(700785),
    r = l(981631);
function a(e, n) {
    return (
        !!(
            e.isOwner(n) ||
            t.BT({
                permission: r.Plq.ADMINISTRATOR,
                context: e,
                user: n
            })
        ) ||
        (t.BT({
            permission: r.Plq.MANAGE_GUILD,
            context: e,
            user: n
        }) &&
            t.BT({
                permission: r.Plq.MANAGE_ROLES,
                context: e,
                user: n
            }))
    );
}
