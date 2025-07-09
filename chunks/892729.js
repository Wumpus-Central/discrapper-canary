n.d(t, { Z: () => d });
var i = n(73800),
    r = n(442837),
    s = n(355467),
    a = n(78839),
    l = n(261744),
    o = n(293810);
let c = [];
function d() {
    let { ensureFresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, l.Z)() === o.PY.SUBSCRIBED,
        n = (0, r.e7)([a.Z], () => a.Z.getActiveGuildSubscriptions()),
        d = i.useRef(!1);
    return (
        i.useEffect(() => {
            (function (e) {
                var t;
                let { ensureFresh: n, hasFetched: i, hasRoleSubscriptions: r } = e,
                    s = a.Z.getActiveGuildSubscriptions();
                return ((null != (t = null == s ? void 0 : s.length) ? t : 0) === 0 && !!r) || (!!n && !i) || (!i && !a.Z.hasFetchedSubscriptions());
            })({
                ensureFresh: e,
                hasRoleSubscriptions: t,
                hasFetched: d.current
            }) && ((d.current = !0), s.jg());
        }, [e, t]),
        null != n ? n : c
    );
}
