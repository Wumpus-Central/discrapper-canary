n.d(t, { Z: () => s });
var i = n(192379),
    l = n(442837),
    a = n(749210),
    r = n(594174);
function s(e) {
    let t = (0, l.e7)([r.default], () => r.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        i.useEffect(() => {
            null == t && (null == e ? void 0 : e.creator_id) != null && a.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
