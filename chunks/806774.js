n.d(t, { M: () => i });
var r = n(570140);
function i(e) {
    let { emojiId: t, userImage: n } = e;
    r.Z.dispatch({
        type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
        emojiId: t,
        userImage: n,
    });
}
