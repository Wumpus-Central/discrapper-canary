t.d(n, { A: () => o });
var i = t(311907),
    l = t(113783),
    a = t(69407),
    r = t(446600),
    s = t(734057),
    c = t(71393);
function o(e) {
    let {
            id: n,
            data: { guild: t, instance: o, speakers: d, participantCount: u },
            context: g,
        } = e,
        A = (0, i.bG)([c.A, s.A], () => c.A.getGuild(s.A.getChannel(n)?.getGuildId()), [n]),
        h = (0, i.bG)([r.A], () => r.A.getStageInstanceByChannel(n), [n]),
        m = (0, l.E5)(n, a.ip.SPEAKER),
        x = (0, l.zy)(n),
        C = null != h ? m : d,
        v = (null != h ? x : u) - C.length;
    return { channelId: n, guild: A ?? t, stage: h ?? o, speakers: C, audienceCount: v, context: g };
}
