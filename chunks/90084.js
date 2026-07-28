r.d(t, { u: () => i });
var l = r(582128),
    n = r(17928),
    o = r(250527),
    u = r(837011);
function i(e) {
    let t = (0, n.bG)([u.A], () => u.A.getProfile(e)),
        r = (0, n.bG)([u.A], () => u.A.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: l.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, o.L4)(e, t);
            },
            [e],
        ),
        fetchStatus: r,
    };
}
