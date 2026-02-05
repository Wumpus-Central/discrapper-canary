r.d(t, { H: () => i }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(64700),
    l = r(311907),
    u = r(149597),
    s = r(787392);
function i(e) {
    let { userId: t, keyToOmit: r } = e,
        i = n.useMemo(() => {
            if (null == r) return null;
            let e = new Uint8Array(r);
            return (0, u.uo)(e);
        }, [r]);
    return (0, l.bG)([s.A], () => {
        let e = s.A.getUserVerifiedKeys(t);
        return null == e ? 0 : Object.keys(e).filter((e) => e !== i).length;
    }, [i, t]);
}
