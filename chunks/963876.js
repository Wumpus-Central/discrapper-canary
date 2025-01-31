n.d(t, { Z: () => l });
var i = n(570140);
let l = {
    setCallChatToastsEnabled(e, t) {
        i.Z.dispatch({
            type: 'CALL_CHAT_TOASTS_SET_ENABLED',
            channelId: e,
            toastsEnabled: t
        });
    }
};
