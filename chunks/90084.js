"use strict";
n.d(t, { u: () => o });
var r = n(64700),
    i = n(311907),
    a = n(250527),
    s = n(837011);
function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getProfile(e)),
        n = (0, i.bG)([s.A], () => s.A.getFetchStatus(e));
    return {
        guildProfile: t,
        fetchGuildProfile: r.useCallback(
            async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return await (0, a.L4)(e, t);
            },
            [e],
        ),
        fetchStatus: n,
    };
}
