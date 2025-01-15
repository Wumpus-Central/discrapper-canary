n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    r = n(442837),
    s = n(355467),
    a = n(78839),
    l = n(261744),
    o = n(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, l.Z)() === o.PY.SUBSCRIBED,
        n = (0, r.e7)([a.ZP], () => a.ZP.getActiveGuildSubscriptions()),
        d = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: i, hasRoleSubscriptions: r } = e,
                    s = a.ZP.getActiveGuildSubscriptions();
                return ((null !== (t = null == s ? void 0 : s.length) && void 0 !== t ? t : 0) === 0 && !!r) || (!!n && !i) || (!i && !a.ZP.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current
            }) && ((d.current = !0), s.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
