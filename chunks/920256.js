n.d(t, { E: () => i });
var r = n(570140);
function i(e) {
    let { channelId: t, enabled: n } = e;
    r.Z.dispatch({
        type: "SET_THREADS_ALSO_SEND_TO_CHANNEL",
        channelId: t,
        enabled: n,
    });
}
