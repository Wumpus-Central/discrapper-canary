"use strict";
function i(e) {
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
    };
}
n.d(t, { S: () => i });
