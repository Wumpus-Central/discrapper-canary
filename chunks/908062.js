n.d(t, { Z: () => a }), n(388685);
var r = n(442837),
    i = n(823379),
    l = n(905128),
    o = n(535396);
function a(e) {
    return (0, r.e7)([l.Z], () => {
        let t = l.Z.getStateForGuild(e);
        return null == t
            ? []
            : Array.from(o.KW.values())
                  .map((e) => t.powerups.get(e))
                  .filter(i.lm);
    });
}
