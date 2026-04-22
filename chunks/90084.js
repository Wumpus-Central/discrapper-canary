l.d(t, { u: () => r });
var i = l(64700),
    n = l(311907),
    s = l(250527),
    a = l(837011);
function r(e) {
    let t = (0, n.bG)([a.A], () => a.A.getProfile(e)),
        l = (0, n.bG)([a.A], () => a.A.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: i.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, s.L4)(e, t);
            },
            [e],
        ),
        fetchStatus: l,
    };
}
