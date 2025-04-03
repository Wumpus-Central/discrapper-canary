n.d(t, { Y: () => i });
var l = n(700785),
    r = n(981631);
function i(e, t) {
    return (
        !!(
            e.isOwner(t) ||
            l.BT({
                permission: r.Plq.ADMINISTRATOR,
                context: e,
                user: t
            })
        ) ||
        (l.BT({
            permission: r.Plq.MANAGE_GUILD,
            context: e,
            user: t
        }) &&
            l.BT({
                permission: r.Plq.MANAGE_ROLES,
                context: e,
                user: t
            }))
    );
}
