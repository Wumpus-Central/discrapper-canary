n.d(t, { r: () => o });
var r = n(600553),
    i = n(981631);
function o(e) {
    return null == e
        ? i.pNK.OVERVIEW
        : (0, r.i1)({
                guildId: e,
                location: 'getDefaultGuildSettingsSection'
            })
          ? i.pNK.PROFILE
          : i.pNK.OVERVIEW;
}
