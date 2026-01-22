n.d(t, { A: () => l });
var r = n(73153),
    i = n(613057);
let l = {
    [n(652215).e$_.SET_SUPPRESS_NOTIFICATIONS]: {
        scope: i.hj,
        handler(e) {
            let {
                socket: t,
                args: { suppress_notifications: n, target_user_id: i },
            } = e;
            r.h.dispatch({
                type: "SET_RPC_NOTIFICATION_SETTINGS",
                socketId: t.id,
                suppressNotifications: n,
                targetUserId: i,
            });
        },
    },
};
