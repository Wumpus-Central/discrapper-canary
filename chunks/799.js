n.d(t, { y: () => l });
var i = n(77729),
    r = n(649223),
    a = n(214859),
    s = n(696016);
async function l(e, t) {
    let n = t(e.resolved[0].clip),
        l = await (0, r.N)(i.A.clips.getClipProtocolURLFromPath(n));
    if (!(l.width > 0 && l.height > 0))
        throw Error(`auto-montage: invalid source resolution ${l.width}x${l.height} for ${n}`);
    return (
        s.nx.info(
            `decider: auto-montage output resolution ${l.width}x${l.height} taken from ${n}, fps ${e.config.fps} from clips quality settings`,
        ),
        (0, a.V1)(e, t, l)
    );
}
