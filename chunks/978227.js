t.d(n, { Z: () => d });
var i = t(192379),
    l = t(442837),
    a = t(749210),
    r = t(594174);
function d(e) {
    let n = (0, l.e7)([r.default], () => r.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        i.useEffect(() => {
            null == n && (null == e ? void 0 : e.creator_id) != null && a.Z.requestMembersById(e.guild_id, e.creator_id);
        }, [e, n]),
        n
    );
}
