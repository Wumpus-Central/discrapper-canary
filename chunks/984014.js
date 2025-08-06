n.d(t, { Z: () => s });
var r = n(442837),
    i = n(872810),
    o = n(199902),
    a = n(314897);
function s(e, t) {
    let n = (0, r.e7)([a.default], () => a.default.getId()),
        s = (0, r.e7)([o.Z], () => {
            let t = o.Z.getCurrentUserActiveStream();
            return null != t && t.channelId === e;
        }, [e]);
    return [
        (null == t || t === n) && s,
        (0, r.e7)([o.Z], () => o.Z.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, i.pR)(e, t);
        },
    ];
}
