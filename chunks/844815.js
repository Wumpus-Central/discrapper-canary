i.d(e, { j: () => s }), i(896048);
var a = i(64700),
    n = i(25171);
function s(t) {
    let [e, i] = a.useState(null);
    return (
        a.useEffect(() => {
            n.A.isLaunchable(t).then(i);
        }, [t]),
        e
    );
}
