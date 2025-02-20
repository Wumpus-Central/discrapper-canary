n.d(t, {
    G: () => o,
    U: () => i
});
var r = n(570140);
function i(e, t, n, i) {
    r.Z.dispatch({
        type: 'BURST_REACTION_PICKER_ANIMATION_ADD',
        messageId: e,
        emojiName: t,
        emojiId: n,
        startPosition: i
    });
}
function o(e, t, n) {
    r.Z.dispatch({
        type: 'BURST_REACTION_PICKER_ANIMATION_CLEAR',
        messageId: e,
        emojiName: t,
        emojiId: n
    });
}
