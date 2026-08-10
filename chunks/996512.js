"use strict";
n.d(t, { S: () => d, r: () => s });
var i = n(821578),
    r = n(872772),
    a = n(189998);
function s(e) {
    let { seats: t } = a.iX[i.I.DEFAULT];
    return t.find((t) => t.position.x === e.x && t.position.y === e.y);
}
function l(e) {
    return {
        objectId: e.object_id,
        createdBy: e.created_by,
        updatedAt: null != e.updated_at ? new Date(e.updated_at) : void 0,
        updatedBy: e.updated_by,
    };
}
function o(e) {
    return e.object_type === r.N.PLANT
        ? { objectType: r.N.PLANT, ...l(e) }
        : { objectType: r.N.NOTE, ...l(e), content: e.content, position: e.position };
}
function d(e) {
    return {
        roomId: e.room_id,
        users: e.users.reduce(
            (e, t) => (
                e.set(t.user_id, {
                    userId: t.user_id,
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
            return e.set(+n, i.map(o)), e;
        }, new Map()),
    };
}
