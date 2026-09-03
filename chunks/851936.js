n.d(t, { L: () => s });
var i = n(626584),
    r = n(111162),
    a = n(818348);
function s() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = r.default.isLoggingQuestEvents,
        s = e?.config.messages.questName,
        l = null != t ? `-${t}` : "",
        o = null != s ? `-${s})` : "",
        d = `QuestLogger${l}${o}`,
        c = new i.A(d);
    return {
        log: n ? c.log : a.tE,
        warn: n ? c.warn : a.tE,
        error: n ? c.error : a.tE,
        info: n ? c.info : a.tE,
        verbose: n ? c.verbose : a.tE,
        trace: n ? c.trace : a.tE,
    };
}
