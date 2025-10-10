n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    setCallChatToastsEnabled(e, t) {
        i.Z.dispatch({
            type: "CALL_CHAT_TOASTS_SET_ENABLED",
            channelId: e,
            toastsEnabled: t,
        });
    },
};
