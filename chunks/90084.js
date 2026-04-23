r.d(t, { u: () => o });
var l = r(64700),
    n = r(17928),
    a = r(250527),
    s = r(837011);
function o(e) {
    let t = (0, n.bG)([s.A], () => s.A.getProfile(e)),
        r = (0, n.bG)([s.A], () => s.A.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: l.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, a.L4)(e, t);
            },
            [e],
        ),
        fetchStatus: r,
    };
}
