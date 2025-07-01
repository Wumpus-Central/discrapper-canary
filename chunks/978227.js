n.d(t, { Z: () => s });
var r = n(73800),
    l = n(442837),
    i = n(749210),
    a = n(594174);
function s(e) {
    let t = (0, l.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        r.useEffect(() => {
            null == t && (null == e ? void 0 : e.creator_id) != null && i.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
