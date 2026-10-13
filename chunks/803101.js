n.d(t, { $: () => r, a: () => i });
var l = n(371169);
function i(e, t, n) {
    return t?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : n;
}
async function r(e, t) {
    (e.guild_id !== t || e.preview_guild_id !== t) && (await (0, l.M7)(e.id, { guild_id: t, preview_guild_id: t }));
}
