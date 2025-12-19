n.d(t, { R: () => a }), n(388685);
var i = n(473749),
    r = n(433517),
    l = n(493773);
function a(e, t) {
    let [n, a] = i.useState(() => {
        let n = r.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, l.ZP)(() => {
            null == r.K.get(e) && r.K.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    a(t), r.K.set(e, t);
                },
                [e],
            ),
        ]
    );
}
