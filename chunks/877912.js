n.d(t, { Z: () => o });
var r = n(442837),
    i = n(709054),
    l = n(172029),
    a = n(915553);
function o(e) {
    return (0, r.e7)([l.Z], () => {
        let t = l.Z.getPendingRequestForUser(e);
        return null != t && i.default.extractTimestamp(t) > Date.now() - a.e;
    });
}
