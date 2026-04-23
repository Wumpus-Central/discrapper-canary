i.d(e, { j: () => s });
var n = i(64700),
    a = i(25171);
function s(t) {
    let [e, i] = n.useState(null);
    return (
        n.useEffect(() => {
            a.A.isLaunchable(t).then(i);
        }, [t]),
        e
    );
}
