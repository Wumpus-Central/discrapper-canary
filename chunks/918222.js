n.d(t, { R: () => o }), n(388685);
var r = n(647438),
    i = n(433517),
    a = n(493773);
function o(e, t) {
    let [n, o] = r.useState(() => {
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
                    o(t), i.K.set(e, t);
                },
                [e],
            ),
        ]
    );
}
