n.d(t, { Z: () => i });
var r = n(192379),
    l = n(442837),
    s = n(749210),
    a = n(594174);
function i(e) {
    let t = (0, l.e7)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        r.useEffect(() => {
            null == t && (null == e ? void 0 : e.creator_id) != null && s.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
