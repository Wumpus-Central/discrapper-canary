i.d(e, { u: () => r });
var u = i(582128),
    a = i(17928),
    c = i(250527),
    n = i(837011);
function r(t) {
    let e = (0, a.bG)([n.A], () => n.A.getProfile(t)),
        i = (0, a.bG)([n.A], () => n.A.getFetchStatus(t));
    return {
        guildProfile: e,
        fetchGuildProfile: u.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, c.L4)(t, e);
            },
            [t],
        ),
        fetchStatus: i,
    };
}
