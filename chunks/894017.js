r.d(n, {
    Z: function () {
        return o;
    },
    c: function () {
        return s;
    }
});
var i = r(442837),
    a = r(924301);
function o(e, n) {
    return l(
        (0, i.Wu)([a.ZP], () => {
            var e, r;
            return null !== (r = null === (e = a.ZP.getGuildScheduledEvent(n)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== r ? r : [];
        }),
        e
    );
}
function s(e, n) {
    var r, i;
    return l(null !== (i = null === (r = a.ZP.getGuildScheduledEvent(n)) || void 0 === r ? void 0 : r.guild_scheduled_event_exceptions) && void 0 !== i ? i : [], e);
}
function l(e, n) {
    return null == e ? void 0 : e.find((e) => e.event_exception_id === n);
}
