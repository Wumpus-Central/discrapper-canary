n.d(t, {
    m: function () {
        return d;
    },
    p: function () {
        return u;
    }
}),
    n(47120);
var i = n(192379),
    l = n(913527),
    r = n.n(l),
    a = n(881052),
    o = n(709054),
    s = n(693546),
    c = n(246364);
let u = c.tB * c.hW;
function d(e) {
    let { guildId: t, guildJoinRequests: n } = e,
        l = i.useRef(!1),
        [d, h] = i.useState(null),
        p = i.useRef(null),
        m = i.useRef(!1);
    return {
        fetchNextPage: i.useCallback(
            async (e, i) => {
                if (l.current) return;
                let f = ''.concat(e, '-').concat(i),
                    g = !1;
                if ((f !== p.current && ((p.current = f), (m.current = !1), (g = !0)), m.current)) return;
                null != d && h(null);
                let v = (function (e, t, n, i) {
                    let l = n === c.wB.SUBMITTED;
                    if (t === c.Nw.TIMESTAMP_DESC) {
                        if (i) return { before: o.default.fromTimestamp(new Date().getTime()) };
                        {
                            let t = e[e.length - 1];
                            return { before: l ? t.joinRequestId : t.actionedAt };
                        }
                    }
                    if (i) return { after: o.default.fromTimestamp(r()().subtract(180, 'days').valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: l ? t.joinRequestId : t.actionedAt };
                    }
                })(n, e, i, g);
                try {
                    l.current = !0;
                    let e = await s.Z.fetchGuildJoinRequests({
                        guildId: t,
                        status: i,
                        limit: u,
                        force: !0,
                        ...v
                    });
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < u && (m.current = !0);
                    }
                } catch (e) {
                    h(new a.Hx(e).getAnyErrorMessage());
                } finally {
                    l.current = !1;
                }
            },
            [d, t, n]
        ),
        error: d
    };
}
