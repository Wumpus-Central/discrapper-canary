n.d(t, { Z: () => l });
var r = n(570140),
    i = n(186901);
let l = {
    [n(981631).Etm.SET_SUPPRESS_NOTIFICATIONS]: {
        scope: i.lH,
        handler(e) {
            let {
                socket: t,
                args: { suppress_notifications: n, target_user_id: i }
            } = e;
            r.Z.dispatch({
                type: 'SET_RPC_NOTIFICATION_SETTINGS',
                socketId: t.id,
                suppressNotifications: n,
                targetUserId: i
            });
        }
    }
};
