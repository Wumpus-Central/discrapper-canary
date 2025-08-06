n.d(t, { Z: () => s });
var r = n(73800),
    i = n(442837),
    o = n(749210),
    a = n(594174);
function s(e) {
    let t = (0, i.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        r.useEffect(() => {
            null == t &&
                (null == e ? void 0 : e.creator_id) != null &&
                o.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
