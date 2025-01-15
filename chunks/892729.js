n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    s = n(442837),
    r = n(355467),
    a = n(78839),
    l = n(261744),
    o = n(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, l.Z)() === o.PY.SUBSCRIBED,
        n = (0, s.e7)([a.ZP], () => a.ZP.getActiveGuildSubscriptions()),
        d = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: i, hasRoleSubscriptions: s } = e,
                    r = a.ZP.getActiveGuildSubscriptions();
                return ((null !== (t = null == r ? void 0 : r.length) && void 0 !== t ? t : 0) === 0 && !!s) || (!!n && !i) || (!i && !a.ZP.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current
            }) && ((d.current = !0), r.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
