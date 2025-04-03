n.d(t, { R: () => a }), n(47120);
var r = n(192379),
    i = n(433517),
    s = n(493773);
function a(e, t) {
    let [n, a] = r.useState(() => {
        let n = i.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, s.ZP)(() => {
            null == i.K.get(e) && i.K.set(e, t);
        }),
        [
            n,
            r.useCallback(
                (t) => {
                    a(t), i.K.set(e, t);
                },
                [e]
            )
        ]
    );
}
