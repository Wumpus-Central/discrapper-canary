n.d(t, { A: () => c });
var r = n(136722),
    i = n(317525),
    a = n(71393),
    s = n(652215);
let o = [
        s.rbe.GUILD_TEXT,
        s.rbe.GUILD_VOICE,
        s.rbe.GUILD_ANNOUNCEMENT,
        s.rbe.GUILD_FORUM,
        s.rbe.PUBLIC_THREAD,
        s.rbe.PRIVATE_THREAD,
    ],
    l = r.kg(s.xBc.VIEW_CHANNEL, s.xBc.SEND_MESSAGES);
function c(e) {
    if (null == e || !o.includes(e.type)) return [];
    let t = a.A.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var n, a;
                  return (
                      0 === e.type &&
                      (null == (a = i.A.getRole(t.id, e.id)) || null == (n = a.tags) ? void 0 : n.guild_connections) ===
                          null &&
                      !r.X8(e.deny, l)
                  );
              })
              .map((e) => i.A.getRole(t.id, e.id))
              .filter((e) => null != e);
}
