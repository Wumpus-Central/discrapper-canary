function r(e) {
    if (null != e) return "channel_id" in e ? e.channel_id : void 0;
}
function i(e) {
    if (null != e) return "guild_id" in e ? e.guild_id : void 0;
}
n.d(t, {
    D: () => i,
    H: () => r,
});
