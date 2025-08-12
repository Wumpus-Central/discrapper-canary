n.d(t, { Z: () => s });
var r = n(442837),
    i = n(709054),
    o = n(172029),
    a = n(915553);
function s(e) {
    return (0, r.e7)([o.Z], () => {
        let t = o.Z.getPendingRequestForUser(e);
        return null != t && i.default.extractTimestamp(t) > Date.now() - a.e;
    });
}
