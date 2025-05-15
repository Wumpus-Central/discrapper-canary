n.d(t, { Z: () => a }), n(388685);
var r = n(73800),
    i = n(439849);
function a(e, t) {
    let [n, a] = r.useState();
    return (
        r.useEffect(() => {
            if (null == e || null != t) return void a(void 0);
            (0, i.Z)().then((t) => {
                null != t &&
                    t.identifyGame(e, (e, t) => {
                        0 === e && null != t.icon && '' !== t.icon && null != t.name && '' !== t.name && a('data:image/png;base64,'.concat(t.icon));
                    });
            });
        }, [e, t]),
        null != t ? t : n
    );
}
