n.d(t, { Z: () => i });
var l = n(73800),
    r = n(442837),
    s = n(749210),
    a = n(594174);
function i(e) {
    let t = (0, r.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        l.useEffect(() => {
            null == t && (null == e ? void 0 : e.creator_id) != null && s.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
