var i = n(77729),
    r = n(649223),
    a = n(335182),
    s = n(696016);
n.d(
    t,
    {},
    {
        y: async function (e, t) {
            let n = t(e.resolved[0].clip),
                l = await (0, r.N)(i.A.clips.getClipProtocolURLFromPath(n));
            if (!(l.width > 0 && l.height > 0))
                throw Error(`auto-montage: invalid source resolution ${l.width}x${l.height} for ${n}`);
            return (
                s.GU.info(
                    `decider: auto-montage output resolution ${l.width}x${l.height} taken from ${n}, fps ${e.config.fps} from clips quality settings`,
                ),
                (0, a.V1)(e, t, l)
            );
        },
    },
);
