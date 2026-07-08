"use strict";
n.d(t, { S: () => s });
var i = n(872772);
function r(e) {
    return {
        objectId: e.object_id,
        createdBy: e.created_by,
        updatedAt: null != e.updated_at ? new Date(e.updated_at) : void 0,
        updatedBy: e.updated_by,
    };
}
function a(e) {
    return e.object_type === i.N.PLANT
        ? { objectType: i.N.PLANT, ...r(e) }
        : { objectType: i.N.NOTE, ...r(e), content: e.content, position: e.position };
}
function s(e) {
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
            return e.set(+n, i.map(a)), e;
        }, new Map()),
    };
}
