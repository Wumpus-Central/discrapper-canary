n.d(t, {
    $: () => c,
    v: () => l
});
var r = n(131704),
    i = n(592125),
    o = n(496675),
    a = n(981631);
let s = a.S7T.VIEW_CHANNEL | a.S7T.READ_MESSAGE_HISTORY;
function l(e) {
    return null != e && (e.type === a.d4z.DM || e.type === a.d4z.GROUP_DM || ((0, r.Qm)(e.type) && o.Z.canBasicChannel(s, e)));
}
function c(e) {
    return null != e && l(i.Z.getBasicChannel(e));
}
