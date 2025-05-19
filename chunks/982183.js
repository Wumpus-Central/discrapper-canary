n.d(t, {
    F7: () => a,
    Qz: () => d,
    Ty: () => u,
    dm: () => c,
    yG: () => s
});
var r,
    i = n(601964),
    l = n(55935),
    o = n(388032);
let s = 'notifications_inbox_guild_id',
    a = new i.ZP({
        id: s,
        name: o.intl.string(o.t.HcoRu7),
        description: ''
    });
var c = (((r = {}).UNREAD = 'UNREAD'), (r.TODAY = 'TODAY'), (r.YESTERDAY = 'YESTERDAY'), (r.OLDER = 'OLDER'), r);
let u = {
    UNREAD: o.t['f1tf/v'],
    TODAY: o.t.F4jZQk,
    YESTERDAY: o.t.gnv4pK,
    OLDER: o.t.exrPZm
};
function d(e, t) {
    if (t.has(e.id)) return 'UNREAD';
    let n = (0, l.wY)(new Date(), e.timestamp);
    return 0 === n ? 'TODAY' : 1 === n ? 'YESTERDAY' : 'OLDER';
}
