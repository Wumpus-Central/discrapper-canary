n.d(l, { $: () => a, a: () => i });
var e = n(371169);
function i(t, l, n) {
    return l?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : n;
}
async function a(t, l) {
    (t.guild_id !== l || t.preview_guild_id !== l) && (await (0, e.M7)(t.id, { guild_id: l, preview_guild_id: l }));
}
