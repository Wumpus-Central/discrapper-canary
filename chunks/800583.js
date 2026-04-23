n.d(t, { j: () => c }), n(989349);
var s = n(311907),
    l = n(707539),
    a = n(222823),
    i = n(661191),
    r = n(978914);
function c(e) {
    let t = (0, r.I)(e),
        n = (function (e) {
            let { lastMessageId: t, message: n, loaded: s } = e;
            return s && null != n ? i.default.extractTimestamp(n.id) : null != t ? i.default.extractTimestamp(t) : null;
        })({ lastMessageId: (0, s.bG)([a.Ay], () => a.Ay.lastMessageId(e.id)), ...t });
    return null == n ? "" : (0, l.aK)(n);
}
