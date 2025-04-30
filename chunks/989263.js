n.d(t, {
    $: () => c,
    v: () => l
});
var r = n(131704),
    i = n(592125),
    a = n(496675),
    o = n(981631);
let s = o.S7T.VIEW_CHANNEL | o.S7T.READ_MESSAGE_HISTORY;
function l(e) {
    return null != e && (e.type === o.d4z.DM || e.type === o.d4z.GROUP_DM || ((0, r.Qm)(e.type) && a.Z.canBasicChannel(s, e)));
}
function c(e) {
    return null != e && l(i.Z.getBasicChannel(e));
}
