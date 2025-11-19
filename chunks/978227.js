n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(749210),
    o = n(594174);
function s(e) {
    let t = (0, i.e7)([o.default], () => o.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        r.useEffect(() => {
            null == t &&
                (null == e ? void 0 : e.creator_id) != null &&
                a.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
