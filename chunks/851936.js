"use strict";
n.d(t, { L: () => a });
var r = n(626584),
    i = n(111162),
    s = n(818348);
function a() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = i.default.isLoggingQuestEvents,
        a = e?.config.messages.questName,
        o = null != t ? `-${t}` : "",
        l = null != a ? `-${a})` : "",
        u = `QuestLogger${o}${l}`,
        c = new r.A(u);
    return {
        log: n ? c.log : s.tE,
        warn: n ? c.warn : s.tE,
        error: n ? c.error : s.tE,
        info: n ? c.info : s.tE,
        verbose: n ? c.verbose : s.tE,
        trace: n ? c.trace : s.tE,
    };
}
