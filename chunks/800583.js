n.d(t, { j: () => o }), n(989349);
var i = n(311907),
    r = n(707539),
    a = n(222823),
    l = n(661191),
    s = n(978914);
function o(e) {
    let t = (0, s.I)(e),
        n = (function (e) {
            let { lastMessageId: t, message: n, loaded: i } = e;
            return i && null != n ? l.default.extractTimestamp(n.id) : null != t ? l.default.extractTimestamp(t) : null;
        })({ lastMessageId: (0, i.bG)([a.Ay], () => a.Ay.lastMessageId(e.id)), ...t });
    return null == n ? "" : (0, r.aK)(n);
}
