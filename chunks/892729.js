n.d(t, { Z: () => d });
var i = n(73800),
    r = n(442837),
    s = n(355467),
    l = n(78839),
    a = n(261744),
    o = n(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, a.Z)() === o.PY.SUBSCRIBED,
        n = (0, r.e7)([l.ZP], () => l.ZP.getActiveGuildSubscriptions()),
        d = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: i, hasRoleSubscriptions: r } = e,
                    s = l.ZP.getActiveGuildSubscriptions();
                return ((null != (t = null == s ? void 0 : s.length) ? t : 0) === 0 && !!r) || (!!n && !i) || (!i && !l.ZP.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current
            }) && ((d.current = !0), s.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
