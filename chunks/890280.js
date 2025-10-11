n.d(t, { s: () => i });
var r = n(570140);
function i(e) {
    let { messageId: t, coverImageURL: n } = e;
    r.Z.dispatch({
        type: "SET_MESSAGE_ACTIVITY_INVITE_COVER_IMAGE_URL",
        messageId: t,
        coverImageURL: n,
    });
}
