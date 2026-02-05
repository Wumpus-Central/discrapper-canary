"use strict";
n.d(t, { N: () => s });
var r = n(73153),
    i = n(300649),
    a = n(405473);
async function s(e, t, n) {
    let s = await (0, i.y)(e, t, n);
    if (s.type === a.r.ERROR) throw s.body;
    let { body: o } = s;
    r.h.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
        guildId: e,
        members: o.members,
        page_result_count: o.page_result_count,
        total_result_count: o.total_result_count,
    });
}
