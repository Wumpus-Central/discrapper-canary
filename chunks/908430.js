r.d(t, { f: () => o }), r(388685), r(539854);
var n = r(647438),
    l = r(399606),
    a = r(570140),
    i = r(615006);
function o() {
    let e = n.useRef(new Map()),
        t = (0, l.e7)([i.Z], () => i.Z.getUserDiscounts());
    n.useEffect(() => {
        let r = e.current,
            n = Date.now(),
            l = [];
        return (
            t.forEach((e) => {
                if (null == e.expiresAt) return;
                let t = e.expiresAt.getTime() - n;
                if (t <= 0) l.push(e.discountId);
                else {
                    let n = setTimeout(() => {
                        a.Z.dispatch({
                            type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                            discountIds: [e.discountId],
                        }),
                            r.delete(e.discountId);
                    }, t);
                    r.set(e.discountId, n);
                }
            }),
            l.length > 0 &&
                a.Z.dispatch({
                    type: "COLLECTIBLES_USER_DISCOUNTS_EXPIRED",
                    discountIds: l,
                }),
            () => {
                r.forEach((e) => clearTimeout(e)), r.clear();
            }
        );
    }, [t]);
}
