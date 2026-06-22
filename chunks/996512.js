"use strict";
function i(e) {
    return {
        roomId: e.room_id,
        users: e.users.map((e) => ({
            userId: e.user_id,
            position: e.position,
            statusId: e.status_id,
            statusText: e.status_text,
        })),
        background: e.background,
    };
}
n.d(t, { S: () => i });
