t.d(n, { A: () => o });
var l = t(311907),
    i = t(113783),
    a = t(69407),
    s = t(446600),
    r = t(734057),
    c = t(71393);
function o(e) {
    let {
            id: n,
            data: { guild: t, instance: o, speakers: d, participantCount: u },
            context: g,
        } = e,
        A = (0, l.bG)([c.A, r.A], () => c.A.getGuild(r.A.getChannel(n)?.getGuildId()), [n]),
        m = (0, l.bG)([s.A], () => s.A.getStageInstanceByChannel(n), [n]),
        h = (0, i.E5)(n, a.ip.SPEAKER),
        v = (0, i.zy)(n),
        C = null != m ? h : d,
        x = (null != m ? v : u) - C.length;
    return { channelId: n, guild: A ?? t, stage: m ?? o, speakers: C, audienceCount: x, context: g };
}
