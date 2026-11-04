var i = n(821578),
    r = n(750459),
    a = n(558076),
    s = n(872772),
    l = n(538517);
function o(e) {
    return {
        objectId: e.object_id,
        createdBy: e.created_by,
        updatedAt: null != e.updated_at ? new Date(e.updated_at) : void 0,
        updatedBy: e.updated_by,
    };
}
function d(e) {
    return e.object_type === s.N.PLANT
        ? { objectType: s.N.PLANT, ...o(e) }
        : { objectType: s.N.NOTE, ...o(e), content: e.content, position: e.position };
}
n.d(
    t,
    {},
    {
        S: function (e) {
            return {
                roomId: e.room_id,
                users: e.users.reduce(
                    (e, t) => (
                        e.set(t.user_id, {
                            userId: t.user_id,
                            seat: t.seat,
                            position: t.position,
                            statusId: t.status_id,
                            statusText: t.status_text,
                        }),
                        e
                    ),
                    new Map(),
                ),
                background: e.background,
                objects: Object.entries(e.objects).reduce((e, t) => {
                    let [n, i] = t;
                    return (e.set(+n, i.map(d)), e);
                }, new Map()),
            };
        },
        r: function (e, t, n) {
            let s = a.A.getRoom(n)?.background ?? i.I.DEFAULT,
                { seats: o } = l.iX[s];
            return null != e && e !== r.x.UNSET
                ? o[e]
                : Object.values(o).find((e) => e.position.x === t.x && e.position.y === t.y);
        },
    },
);
