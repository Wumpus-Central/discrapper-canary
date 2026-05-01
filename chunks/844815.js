n.d(i, { j: () => e });
var u = n(64700),
    l = n(738533);
function e(a) {
    let [i, n] = u.useState(null);
    return (u.useEffect(() => {
        null != a &&
            l.A.isLaunchable(a).then((i) => {
                n({ applicationId: a.id, isLaunchable: i });
            });
    }, [a]),
    null == a || i?.applicationId !== a.id)
        ? null
        : i.isLaunchable;
}
