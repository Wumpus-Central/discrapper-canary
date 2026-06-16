"use strict";
n.d(t, { A: () => u });
var i = n(136722),
    r = n(317525),
    s = n(71393),
    a = n(652215);
let o = [
        a.rbe.GUILD_TEXT,
        a.rbe.GUILD_VOICE,
        a.rbe.GUILD_ANNOUNCEMENT,
        a.rbe.GUILD_FORUM,
        a.rbe.PUBLIC_THREAD,
        a.rbe.PRIVATE_THREAD,
    ],
    l = i.kg(a.xBc.VIEW_CHANNEL, a.xBc.SEND_MESSAGES);
function u(e) {
    if (null == e || !o.includes(e.type)) return [];
    let t = s.A.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter(
                  (e) => 0 === e.type && r.A.getRole(t.id, e.id)?.tags?.guild_connections === null && !i.X8(e.deny, l),
              )
              .map((e) => r.A.getRole(t.id, e.id))
              .filter((e) => null != e);
}
