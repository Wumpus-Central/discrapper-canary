n.d(t, { c: () => a });
var r = n(990547),
    i = n(912471),
    o = n(15624);
function a() {
    let e = (0, i.Ai)(),
        t = (0, r.getSuperProperties)(),
        n = {},
        a = null == e ? void 0 : e.uuid;
    a !== (null == t ? void 0 : t.client_heartbeat_session_id) && (n.client_heartbeat_session_id = a);
    let s = o.Z.getState();
    s !== (null == t ? void 0 : t.client_app_state) && (n.client_app_state = s), Object.keys(n).length > 0 && (0, r.extendSuperProperties)(n);
}
