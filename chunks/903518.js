t.d(n, { Y: () => s });
var l = t(700785),
    i = t(981631);
function s(e, n) {
    return (
        !!(
            e.isOwner(n) ||
            l.BT({
                permission: i.Plq.ADMINISTRATOR,
                context: e,
                user: n
            })
        ) ||
        (l.BT({
            permission: i.Plq.MANAGE_GUILD,
            context: e,
            user: n
        }) &&
            l.BT({
                permission: i.Plq.MANAGE_ROLES,
                context: e,
                user: n
            }))
    );
}
