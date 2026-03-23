n.d(t, { A: () => c }), n(321073);
var i = n(64700),
    l = n(735438),
    a = n(311907),
    s = n(721932),
    r = n(403362),
    o = n(832163),
    d = n(501838);
function c(e) {
    let { wishlist: t, profileOwner: n, currentUser: c } = e,
        u = n.id === c?.id,
        m = i.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
        g = (0, a.bG)([o.A], () => o.A.getStorefrontDetectableGameAndApplicationIds()),
        x = i.useMemo(() => {
            let e = [];
            for (let n of t?.items ?? []) (0, s.$)(n) && g.has(n.sku.applicationId) && e.push(n.sku.applicationId);
            return e;
        }, [t, g]),
        p = (0, d.w)({ userIds: m }),
        f = (0, d.mn)({ userIds: m }),
        h = (0, d.tR)(m),
        _ = (0, d.rY)(),
        A = (0, d.qx)(),
        I = (0, d.px)();
    return i.useMemo(
        () => (0, l.uniq)([...x, ...p, ...f, ...h, ...(u ? [..._, ...A, ...I] : [])].filter(r.Vq)),
        [x, p, f, h, _, A, I, u],
    );
}
