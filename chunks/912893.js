n.d(t, {
    G: () => a,
    U: () => r
});
var i = n(570140);
function r(e, t, n, r) {
    i.Z.dispatch({
        type: 'BURST_REACTION_PICKER_ANIMATION_ADD',
        messageId: e,
        emojiName: t,
        emojiId: n,
        startPosition: r
    });
}
function a(e, t, n) {
    i.Z.dispatch({
        type: 'BURST_REACTION_PICKER_ANIMATION_CLEAR',
        messageId: e,
        emojiName: t,
        emojiId: n
    });
}
