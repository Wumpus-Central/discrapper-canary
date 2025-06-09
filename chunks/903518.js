n.d(t, { Y: () => r });
var l = n(700785),
    i = n(981631);
function r(e, t) {
    return (
        !!(
            e.isOwner(t) ||
            l.BT({
                permission: i.Plq.ADMINISTRATOR,
                context: e,
                user: t
            })
        ) ||
        (l.BT({
            permission: i.Plq.MANAGE_GUILD,
            context: e,
            user: t
        }) &&
            l.BT({
                permission: i.Plq.MANAGE_ROLES,
                context: e,
                user: t
            }))
    );
}
