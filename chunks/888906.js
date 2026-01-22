n.d(t, {
    A: () => l,
});
var r = n(73153);
let l = {
    search(e, t) {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
            query: e,
            channelId: t,
        });
    },
    clear(e) {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY",
            query: "",
            channelId: e,
        });
    },
    select(e) {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT",
            row: e,
        });
    },
    addUser(e) {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_ADD_USER",
            userId: e,
        });
    },
    removeUser(e) {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER",
            userId: e,
        });
    },
    open(e) {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN",
            channelId: e,
        });
    },
    close() {
        r.h.dispatch({
            type: "PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE",
        });
    },
};
