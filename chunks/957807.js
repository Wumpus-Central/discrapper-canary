"use strict";
n.d(t, { A: () => I, U: () => h });
var i = n(582128),
    r = n(505779),
    a = n(17928),
    s = n(376728),
    l = n(311043),
    o = n(569926),
    d = n(184989),
    c = n(299091),
    u = n(927813),
    _ = n(652215);
function E(e) {
    let t = e?.websites?.find((e) => {
            let { category: t } = e;
            return t === r.V.DISCORD;
        }),
        n = t?.url.split("/").pop();
    return null != n && "" !== n ? n : null;
}
let A = (0, a.UT)(c.A, {
    getQueryId: _.fic.GAME_PROFILE_INVITE,
    staleAfter: 5 * u.A.Seconds.MINUTE,
    failureStaleAfter: 5 * u.A.Seconds.MINUTE,
    get: (e) => {
        if (null == e) return null;
        let t = c.A.getInvite(e);
        return null == t ||
            t.state === _.elq.RESOLVING ||
            t.state === _.elq.EXPIRED ||
            t.state === _.elq.BANNED ||
            (null != t.expires_at && new Date(t.expires_at).getTime() <= Date.now())
            ? null
            : t;
    },
    load: async (e) => {
        if (null == e) return;
        let { invite: t } = await s.Ay.resolveInvite(e, "game_profile");
        if (null == t) throw Error(`Failed to resolve game profile invite: ${e}`);
    },
});
function h(e) {
    o.I.fetchMany([e]).then(() => {
        let t = E(l.A.getGame(e));
        null != t && A.fetchMany([t]);
    });
}
let I = function (e, t) {
    let n = i.useRef(t);
    i.useEffect(() => {
        n.current = t;
    }, [t]);
    let { data: r } = A(E(e)),
        s = (0, a.bG)([d.A], () => r?.guild?.id != null && d.A.isMember(r?.guild?.id));
    return (
        i.useEffect(() => {
            null != r && n.current?.(r);
        }, [r]),
        { invite: r, isMember: s }
    );
};
