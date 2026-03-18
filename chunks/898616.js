n.d(t, { A: () => d });
var i = n(64700),
    l = n(311907),
    a = n(721932),
    s = n(71393),
    r = n(871123),
    o = n(501838);
function d(e) {
    let { wishlist: t, profileOwner: n, currentUser: d } = e,
        c = n.id === d?.id,
        u = i.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
        g = (0, l.bG)([s.A], () => s.A.getGuild((0, r.zf)())),
        m = t?.items.some((e) => (0, a.$)(e)) ?? !1,
        x = (0, o.gT)({ userIds: u }),
        p = (0, o.K6)({ userIds: u }),
        f = (0, o.l1)(u),
        h = (0, o.hJ)(),
        _ = (0, o.ok)();
    return m || x || p || f || (c && (null != g || h || _));
}
