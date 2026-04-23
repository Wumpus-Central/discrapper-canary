"use strict";
n.d(t, { N: () => a });
var r = n(73153),
    i = n(300649),
    s = n(405473);
async function a(e, t, n) {
    let a = await (0, i.y)(e, t, n);
    if (a.type === s.r.ERROR) throw a.body;
    let { body: o } = a;
    r.h.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
        guildId: e,
        members: o.members,
        page_result_count: o.page_result_count,
        total_result_count: o.total_result_count,
    });
}
