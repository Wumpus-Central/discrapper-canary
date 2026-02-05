"use strict";
n.d(t, { A: () => u });
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
function u(e) {
    if (null == e || !o.includes(e.type)) return [];
    let t = a.A.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter(
                  (e) => 0 === e.type && i.A.getRole(t.id, e.id)?.tags?.guild_connections === null && !r.X8(e.deny, l),
              )
              .map((e) => i.A.getRole(t.id, e.id))
              .filter((e) => null != e);
}
