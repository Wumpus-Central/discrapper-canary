n.d(t, {
    m: () => u,
    p: () => d
}),
    n(47120);
var i = n(192379),
    l = n(913527),
    r = n.n(l),
    o = n(881052),
    a = n(709054),
    s = n(693546),
    c = n(246364);
let d = c.tB * c.hW;
function u(e) {
    let { guildId: t, guildJoinRequests: n } = e,
        l = i.useRef(!1),
        [u, h] = i.useState(null),
        p = i.useRef(null),
        m = i.useRef(!1);
    return {
        fetchNextPage: i.useCallback(
            async (e, i) => {
                if (l.current) return;
                let g = ''.concat(e, '-').concat(i),
                    f = !1;
                if ((g !== p.current && ((p.current = g), (m.current = !1), (f = !0)), m.current)) return;
                null != u && h(null);
                let _ = (function (e, t, n, i) {
                    let l = n === c.wB.SUBMITTED;
                    if (t === c.Nw.TIMESTAMP_DESC) {
                        if (i) return { before: a.default.fromTimestamp(new Date().getTime()) };
                        {
                            let t = e[e.length - 1];
                            return { before: l ? t.joinRequestId : t.actionedAt };
                        }
                    }
                    if (i) return { after: a.default.fromTimestamp(r()().subtract(180, 'days').valueOf()) };
                    {
                        let t = e[e.length - 1];
                        return { after: l ? t.joinRequestId : t.actionedAt };
                    }
                })(n, e, i, f);
                try {
                    l.current = !0;
                    let e = await s.Z.fetchGuildJoinRequests({
                        guildId: t,
                        status: i,
                        limit: d,
                        force: !0,
                        ..._
                    });
                    if (null != e) {
                        let { guild_join_requests: t } = e.body;
                        t.length < d && (m.current = !0);
                    }
                } catch (e) {
                    h(new o.Hx(e).getAnyErrorMessage());
                } finally {
                    l.current = !1;
                }
            },
            [u, t, n]
        ),
        error: u
    };
}
