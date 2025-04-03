n.d(t, { e: () => l }), n(789020);
var r = n(544891),
    i = n(570140),
    o = n(962086),
    a = n(160404),
    s = n(981631);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return a.Z.isFullServerPreview(e)
        ? void (0, o.aq)(e, { memberOptions: t })
        : (i.Z.dispatch({
              type: 'GUILD_MEMBER_UPDATE_LOCAL',
              guildId: e,
              roles: t.roles,
              flags: t.flags
          }),
          r.tn.patch({
              url: s.ANM.SET_GUILD_MEMBER(e),
              body: t,
              oldFormErrors: !!n || void 0,
              rejectWithError: !1
          }));
}
