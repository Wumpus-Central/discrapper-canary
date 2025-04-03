n.d(t, { Z: () => d });
var r = n(192379),
    i = n(442837),
    s = n(355467),
    a = n(78839),
    l = n(261744),
    o = n(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, l.Z)() === o.PY.SUBSCRIBED,
        n = (0, i.e7)([a.ZP], () => a.ZP.getActiveGuildSubscriptions()),
        d = r.useRef(!1);
    return (
        r.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: r, hasRoleSubscriptions: i } = e,
                    s = a.ZP.getActiveGuildSubscriptions();
                return ((null != (t = null == s ? void 0 : s.length) ? t : 0) === 0 && !!i) || (!!n && !r) || (!r && !a.ZP.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current
            }) && ((d.current = !0), s.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
