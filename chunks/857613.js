n.d(t, { c: () => o });
var r = n(990547),
    i = n(912471),
    a = n(15624);
function o() {
    let e = (0, i.Ai)(),
        t = (0, r.getSuperProperties)(),
        n = {},
        o = null == e ? void 0 : e.uuid;
    o !== (null == t ? void 0 : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = o);
    let s = a.Z.getState();
    s !== (null == t ? void 0 : t.client_app_state) && (n.client_app_state = s), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n);
}
