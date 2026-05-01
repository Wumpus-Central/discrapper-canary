r.d(t, { u: () => s });
var l = r(64700),
    n = r(17928),
    u = r(250527),
    i = r(837011);
function s(e) {
    let t = (0, n.bG)([i.A], () => i.A.getProfile(e)),
        r = (0, n.bG)([i.A], () => i.A.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: l.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, u.L4)(e, t);
            },
            [e],
        ),
        fetchStatus: r,
    };
}
