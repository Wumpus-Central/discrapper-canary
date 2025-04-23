n.d(t, { Z: () => s }), n(388685);
var r = n(442837),
    i = n(823379),
    l = n(905128),
    o = n(535396);
function s(e) {
    return (0, r.Wu)([l.Z], () => {
        let t = l.Z.getStateForGuild(e);
        return null == t
            ? []
            : Array.from(o.KW.values())
                  .map((e) => t.allPowerups[e])
                  .filter(i.lm);
    });
}
