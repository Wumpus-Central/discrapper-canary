"use strict";
n.d(t, { A: () => d });
var i = n(136722),
    r = n(317525),
    a = n(71393),
    s = n(652215);
let l = [
        s.rbe.GUILD_TEXT,
        s.rbe.GUILD_VOICE,
        s.rbe.GUILD_ANNOUNCEMENT,
        s.rbe.GUILD_FORUM,
        s.rbe.PUBLIC_THREAD,
        s.rbe.PRIVATE_THREAD,
    ],
    o = i.kg(s.xBc.VIEW_CHANNEL, s.xBc.SEND_MESSAGES);
function d(e) {
    if (null == e || !l.includes(e.type)) return [];
    let t = a.A.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter(
                  (e) => 0 === e.type && r.A.getRole(t.id, e.id)?.tags?.guild_connections === null && !i.X8(e.deny, o),
              )
              .map((e) => r.A.getRole(t.id, e.id))
              .filter((e) => null != e);
}
