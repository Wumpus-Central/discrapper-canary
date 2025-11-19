n.d(t, { R: () => l }), n(388685);
var r = n(473749),
    i = n(433517),
    a = n(493773);
function l(e, t) {
    let [n, l] = r.useState(() => {
        let n = i.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, a.ZP)(() => {
            null == i.K.get(e) && i.K.set(e, t);
        }),
        [
            n,
            r.useCallback(
                (t) => {
                    l(t), i.K.set(e, t);
                },
                [e],
            ),
        ]
    );
}
