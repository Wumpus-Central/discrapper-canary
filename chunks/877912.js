n.d(t, { Z: () => o });
var l = n(442837),
    i = n(709054),
    r = n(172029),
    a = n(915553);
function o(e) {
    return (0, l.e7)([r.Z], () => {
        let t = r.Z.getPendingRequestForUser(e);
        return null != t && i.default.extractTimestamp(t) > Date.now() - a.e;
    });
}
