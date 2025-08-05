n.d(t, { Z: () => s });
var r = n(442837),
    i = n(872810),
    a = n(199902),
    o = n(314897);
function s(e, t) {
    let n = (0, r.e7)([o.default], () => o.default.getId()),
        s = (0, r.e7)(
            [a.Z],
            () => {
                let t = a.Z.getCurrentUserActiveStream();
                return null != t && t.channelId === e;
            },
            [e]
        );
    return [
        (null == t || t === n) && s,
        (0, r.e7)([a.Z], () => a.Z.isSelfStreamHidden(e), [e]),
        (t) => {
            (0, i.pR)(e, t);
        }
    ];
}
