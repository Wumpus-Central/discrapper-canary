n.d(t, {
    M$: () => b,
    ZW: () => m,
    Zw: () => g
}),
    n(789020);
var r = n(115911),
    i = n(570140),
    l = n(728345),
    o = n(812206),
    a = n(914946),
    s = n(973616),
    c = n(314897),
    u = n(19780),
    d = n(630388),
    p = n(774226),
    h = n(317381),
    f = n(981631);
async function g(e) {
    var t, n;
    let { applicationId: r, socketId: u } = e,
        g = h.ZP.getCurrentEmbeddedActivity();
    if ((null == g ? void 0 : g.applicationId) !== r) return;
    let _ = g.compositeInstanceId,
        E = null !== (t = o.Z.getApplication(r)) && void 0 !== t ? t : s.ZP.createFromServer(await l.ZP.fetchApplication(r));
    if (!(0, p.Kb)(E) || null == _ || null == E || !(0, d.yE)(E.flags, f.udG.EMBEDDED)) return;
    let O = {
            type: 0,
            session_id: null !== (n = c.default.getSessionId()) && void 0 !== n ? n : void 0,
            name: E.name,
            application_id: r,
            secrets: { join: crypto.randomUUID() },
            party: {
                id: crypto.randomUUID(),
                size: b
            },
            flags: 0,
            metadata: { embedded_activity_instance_id: _ }
        },
        N = (0, a.S5)(O, !0);
    N > 0 &&
        (O.flags = m({
            flags: N,
            embeddedActivity: g
        })),
        i.Z.dispatch({
            type: 'LOCAL_ACTIVITY_UPDATE',
            socketId: u,
            activity: O
        });
}
function m(e) {
    let { flags: t, embeddedActivity: n } = e;
    t |= f.xjy.CONTEXTLESS;
    let i = u.Z.getChannelId();
    return null != i && n.location.kind === r.X.CONTEXTLESS && n.location.starting_channel_id === i && (t |= f.xjy.PARTY_PRIVACY_VOICE_CHANNEL), t;
}
let b = [1, 0];
