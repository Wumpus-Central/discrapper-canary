n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(268350);
function s(e) {
    let [t, n] = r.useState(!0);
    return (
        r.useEffect(() => {
            let t = !1;
            return (
                (async () => {
                    n(!0), await (0, i.pk)(e), t || n(!1);
                })(),
                () => {
                    t = !0;
                }
            );
        }, [e]),
        { isLoading: t }
    );
}
