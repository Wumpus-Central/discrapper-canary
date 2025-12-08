n.d(t, { R: () => a }), n(388685);
var r = n(473749),
    i = n(433517),
    l = n(493773);
function a(e, t) {
    let [n, a] = r.useState(() => {
        let n = i.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, l.ZP)(() => {
            null == i.K.get(e) && i.K.set(e, t);
        }),
        [
            n,
            r.useCallback(
                (t) => {
                    a(t), i.K.set(e, t);
                },
                [e],
            ),
        ]
    );
}
