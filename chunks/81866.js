n.d(t, { Z: () => a });
var r = n(442837),
    i = n(835473),
    o = n(91896);
function a(e) {
    let t = (0, r.e7)([o.Z], () => {
        let t = o.Z.getGameRelationshipsForUser(e);
        if (0 !== t.length) return t[0].applicationId;
    });
    return (0, i.q)(t);
}
