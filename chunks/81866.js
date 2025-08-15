n.d(t, { Z: () => o });
var r = n(442837),
    i = n(835473),
    a = n(91896);
function o(e) {
    let t = (0, r.e7)([a.Z], () => {
        let t = a.Z.getGameRelationshipsForUser(e);
        if (0 !== t.length) return t[0].applicationId;
    });
    return (0, i.q)(t);
}
