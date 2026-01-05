n.d(t, { Z: () => c }), n(388685);
var r = n(473749),
    i = n(787695),
    s = n(759479),
    l = n(855403),
    o = n(324805);
function c(e, t, n) {
    let c = (0, i.Z)({ location: o.dr.STREAM_SOURCE_SELECT });
    return r.useMemo(() => {
        if (null == n || !c) return null;
        for (let o of n) {
            var r, i;
            let n = t.find((e) => (0, l.Z)(o.id, e.windowHandle));
            if ((null == n ? void 0 : n.id) == null) continue;
            let c = (0, s.lQ)(e, n.id);
            if (
                null != c &&
                (null == (r = c.userStatus) ? void 0 : r.enrolledAt) != null &&
                (null == (i = c.userStatus) ? void 0 : i.completedAt) == null
            )
                return {
                    source: o,
                    quest: c,
                };
        }
        return null;
    }, [c, e, t, n]);
}
