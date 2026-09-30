l.d(e, { Ay: () => d, Fd: () => u, JL: () => a });
var t = l(734057),
    r = l(576705),
    i = l(652215);
function u(n) {
    if (null == n.parent_id) return null;
    let e = t.A.getChannel(n.parent_id);
    return null != e && e.isCategory() ? e : null;
}
function a(n) {
    return null == n || r.A.can(i.xBc.VIEW_CHANNEL, n);
}
function d(n, e) {
    return r.A.can(i.xBc.MANAGE_CHANNELS, n ?? e);
}
