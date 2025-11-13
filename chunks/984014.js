n.d(t, { Z: () => o });
var i = n(442837),
    r = n(872810),
    l = n(199902),
    a = n(314897);
function o(e, t) {
    let n = (0, i.e7)([a.default], () => a.default.getId()),
        o = (0, i.e7)([l.Z], () => {
            let t = l.Z.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]);
    return [
        (null == t || t === n) && o,
        (0, i.e7)([l.Z], () => l.Z.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, r.pR)(e, t);
        },
    ];
}
