n.d(t, { Z: () => a });
var r = n(442837),
    i = n(872810),
    l = n(199902),
    o = n(314897);
function a(e, t) {
    let n = (0, r.e7)([o.default], () => o.default.getId()),
        a = (0, r.e7)(
            [l.Z],
            () => {
                let t = l.Z.getCurrentUserActiveStream();
                return null != t && t.channelId === e;
            },
            [e]
        );
    return [
        (null == t || t === n) && a,
        (0, r.e7)([l.Z], () => l.Z.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, i.pR)(e, t);
        }
    ];
}
