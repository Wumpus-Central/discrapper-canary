n.d(t, { f: () => o }), n(388685), n(539854);
var r = n(473749),
    l = n(399606),
    i = n(570140),
    a = n(615006);
function o() {
    let e = r.useRef(new Map()),
        t = (0, l.e7)([a.Z], () => a.Z.getUserDiscounts());
    r.useEffect(() => {
        let n = e.current,
            r = Date.now(),
            l = [];
        return (
            t.forEach((e) => {
                if (null == e.expiresAt) return;
                let t = e.expiresAt.getTime() - r;
                if (t <= 0) l.push(e.discountId);
                else {
                    let r = setTimeout(() => {
                        i.Z.dispatch({
                            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                            discountIds: [e.discountId],
                        }),
                            n.delete(e.discountId);
                    }, t);
                    n.set(e.discountId, r);
                }
            }),
            l.length > 0 &&
                i.Z.dispatch({
                    type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                    discountIds: l,
                }),
            () => {
                n.forEach((e) => clearTimeout(e)), n.clear();
            }
        );
    }, [t]);
}
