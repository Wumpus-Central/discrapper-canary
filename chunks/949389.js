n.d(t, {
    GO: () => i,
    K7: () => l,
    xm: () => a
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS',
        guildId: e
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'PUBLIC_UPSELL_NOTICE_DISMISS',
        guildId: e
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'MAX_MEMBER_COUNT_NOTICE_DISMISS',
        guildId: e
    });
}
