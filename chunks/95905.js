"use strict";
n.d(t, { A: () => r });
var l = n(627968);
n(64700);
var a = n(834730),
    s = n(763754),
    i = n(447215);
let r = (e) => {
    let { message: t, originalAuthor: n, channel: r } = e,
        o = (0, s.d8)(n, r),
        d = o?.nick ?? n?.username ?? "",
        c = (0, i.P)({
            user: n ?? void 0,
            channelId: r.id,
            guildId: r.guild_id,
            messageId: t?.id,
            stopPropagation: !0,
        })(o ?? void 0)(d, r.id);
    return (0, l.jsx)(a.E, { variant: "text-md/semibold", children: c });
};
