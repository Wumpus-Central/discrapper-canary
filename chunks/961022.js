t.d(n, { A: () => o });
var r = t(311907),
    l = t(113783),
    i = t(69407),
    s = t(446600),
    a = t(734057),
    c = t(71393);
function o(e) {
    let {
            id: n,
            data: { guild: t, instance: o, speakers: u, participantCount: d },
            context: m,
        } = e,
        g = (0, r.bG)([c.A, a.A], () => {
            var e;
            return c.A.getGuild(null == (e = a.A.getChannel(n)) ? void 0 : e.getGuildId());
        }, [n]),
        h = (0, r.bG)([s.A], () => s.A.getStageInstanceByChannel(n), [n]),
        j = (0, l.E5)(n, i.ip.SPEAKER),
        x = (0, l.zy)(n),
        v = null != h ? j : u,
        p = (null != h ? x : d) - v.length;
    return {
        channelId: n,
        guild: null != g ? g : t,
        stage: null != h ? h : o,
        speakers: v,
        audienceCount: p,
        context: m,
    };
}
