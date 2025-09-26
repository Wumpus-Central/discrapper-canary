n.d(t, {
    Ku: () => l,
    MK: () => u,
    ml: () => c,
});
var r = n(481060),
    i = n(570140),
    a = n(728285),
    o = n(434404),
    s = n(981631);
function l(e) {
    let { guildId: t, autoOpenFileInput: n, analyticsLocation: i } = e;
    c({ autoOpen: n }), o.Z.open(t, s.pNK.EMOJI, i);
    let l = (0, a.Su)();
    null != l && l.windowDispatch.dispatch(s.CkL.POPOUT_CLOSE), (0, r.pTH)();
}
function c(e) {
    let { autoOpen: t } = e;
    i.Z.dispatch({
        type: "EMOJI_FILE_INPUT_AUTO_OPEN",
        autoOpen: t,
    });
}
function u(e) {
    let { emojiId: t, userImage: n } = e;
    i.Z.dispatch({
        type: "EMOJI_CACHE_RAW_EMOJI_ASSET",
        emojiId: t,
        userImage: n,
    });
}
