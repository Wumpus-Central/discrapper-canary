n.d(t, {
    $: () => u,
    v: () => l
});
var i = n(131704),
    r = n(592125),
    a = n(496675),
    s = n(981631);
let o = s.S7T.VIEW_CHANNEL | s.S7T.READ_MESSAGE_HISTORY;
function l(e) {
    return null != e && (e.type === s.d4z.DM || e.type === s.d4z.GROUP_DM || ((0, i.Qm)(e.type) && a.Z.canBasicChannel(o, e)));
}
function u(e) {
    return null != e && l(r.Z.getBasicChannel(e));
}
