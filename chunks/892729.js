n.d(t, { Z: () => d });
var r = n(473749),
    i = n(442837),
    a = n(355467),
    o = n(78839),
    s = n(261744),
    l = n(293810);
let c = [];
function u(e) {
    var t;
    let { ensureFresh: n, hasFetched: r, hasRoleSubscriptions: i } = e,
        a = o.Z.getActiveGuildSubscriptions();
    return (
        ((null != (t = null == a ? void 0 : a.length) ? t : 0) === 0 && !!i) ||
        (!!n && !r) ||
        (!r && !o.Z.hasFetchedSubscriptions())
    );
}
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, s.Z)() === l.PY.SUBSCRIBED,
        n = (0, i.e7)([o.Z], () => o.Z.getActiveGuildSubscriptions()),
        d = r.useRef(!1);
    return (
        r.useEffect(() => {
            u({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current,
            }) && ((d.current = !0), a.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
