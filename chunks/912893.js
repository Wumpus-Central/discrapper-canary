r.d(n, {
    G: function () {
        return o;
    },
    U: function () {
        return a;
    }
});
var i = r(570140);
function a(e, n, r, a) {
    i.Z.dispatch({
        type: 'BURST_REACTION_PICKER_ANIMATION_ADD',
        messageId: e,
        emojiName: n,
        emojiId: r,
        startPosition: a
    });
}
function o(e, n, r) {
    i.Z.dispatch({
        type: 'BURST_REACTION_PICKER_ANIMATION_CLEAR',
        messageId: e,
        emojiName: n,
        emojiId: r
    });
}
