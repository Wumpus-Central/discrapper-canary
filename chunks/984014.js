n.d(t, { Z: () => s });
var i = n(442837),
    l = n(872810),
    a = n(199902),
    r = n(314897);
function s(e, t) {
    let n = (0, i.e7)([r.default], () => r.default.getId()),
        s = (0, i.e7)(
            [a.Z],
            () => {
                let t = a.Z.getCurrentUserActiveStream();
                return null != t && t.channelId === e;
            },
            [e]
        );
    return [
        (null == t || t === n) && s,
        (0, i.e7)([a.Z], () => a.Z.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, l.pR)(e, t);
        }
    ];
}
