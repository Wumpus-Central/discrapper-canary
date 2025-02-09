n.d(t, { Z: () => d });
var i = n(192379),
    s = n(442837),
    l = n(355467),
    r = n(78839),
    a = n(261744),
    o = n(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, a.Z)() === o.PY.SUBSCRIBED,
        n = (0, s.e7)([r.ZP], () => r.ZP.getActiveGuildSubscriptions()),
        d = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: i, hasRoleSubscriptions: s } = e,
                    l = r.ZP.getActiveGuildSubscriptions();
                return ((null !== (t = null == l ? void 0 : l.length) && void 0 !== t ? t : 0) === 0 && !!s) || (!!n && !i) || (!i && !r.ZP.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current
            }) && ((d.current = !0), l.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
