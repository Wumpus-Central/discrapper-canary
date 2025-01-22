r.d(n, {
    $: function () {
        return c;
    },
    v: function () {
        return u;
    }
});
var i = r(131704),
    a = r(592125),
    o = r(496675),
    s = r(981631);
let l = s.S7T.VIEW_CHANNEL | s.S7T.READ_MESSAGE_HISTORY;
function u(e) {
    return null != e && (e.type === s.d4z.DM || e.type === s.d4z.GROUP_DM || ((0, i.Qm)(e.type) && o.Z.canBasicChannel(l, e)));
}
function c(e) {
    return null != e && u(a.Z.getBasicChannel(e));
}
