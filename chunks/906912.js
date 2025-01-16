n.d(t, {
    U: function () {
        return o;
    }
}),
    n(653041);
var i = n(192379),
    r = n(442837),
    s = n(149418),
    a = n(881998);
let l = [];
function o() {
    let e = (0, r.e7)([a.Z], () => a.Z.getApps());
    return i.useMemo(() => {
        if (null == e) return l;
        let t = [];
        return (
            e.forEach((e) => {
                let { application: n } = e;
                (0, s.Z)(n) && t.push(n);
            }),
            t
        );
    }, [e]);
}
