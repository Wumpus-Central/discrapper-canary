n.d(t, { B: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(872810),
    d = n(594190),
    u = n(74299),
    h = n(451467),
    _ = n(537413),
    m = n(989941),
    g = n(567126),
    p = n(143135),
    f = n(751571),
    x = n(361291),
    v = n(592125),
    C = n(430824),
    b = n(131951),
    Z = n(944486),
    I = n(594174),
    j = n(449224),
    w = n(358085),
    y = n(981631),
    E = n(37113),
    k = n(761274);
function N() {
    let e = (0, l.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
        t = (0, l.e7)([v.Z], () => v.Z.getChannel(e), [e]),
        o = (0, l.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return a()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        N = null == t ? void 0 : t.getGuildId(),
        S = (0, l.e7)([b.Z], () => (0, u.Z)(b.Z));
    async function T() {
        var e;
        return null !== (e = (await (0, g._Q)()).sort((e, t) => (0, g.ov)(t) - (0, g.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let O = r.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let r = await T(),
            a = (0, w.isWindows)() ? (0, m.Z)(d.ZP, j.Z) : null;
        if (null == a && null == r) return !1;
        let l = null != N ? (null === (n = C.Z.getGuild(N)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: s, resolution: u, fps: g, soundshareEnabled: v } = x.Z.getState(),
            [Z, I] = null !== (i = (0, _.Z)(s, o, l)) && void 0 !== i ? i : [E.LY.RESOLUTION_720, E.ws.FPS_30],
            y = s,
            S = u,
            O = g;
        y !== E.tI.PRESET_CUSTOM && ((S = Z), (O = I)),
            (0, h.Z)(y, S, O, o, l) || ((S = Z), (O = I)),
            (0, h.Z)(y, S, O, o, l, t) || ((y = E.tI.PRESET_VIDEO), (S = E.LY.RESOLUTION_720), (O = E.ws.FPS_30)),
            (0, c.Rc)({
                preset: y,
                resolution: S,
                frameRate: O,
                soundshareEnabled: v
            });
        let P = (0, p.Z)(a, r, d.ZP.getRunningGames()),
            L = !(0, w.isWindows)() || null == P || (null == r ? void 0 : r.id.startsWith('camera:')) || null == P ? null : P.pid,
            A = null,
            R = null;
        return (
            null == L && null != r && ((A = r.id), (R = r.name)),
            !!(b.Z.getUseSystemScreensharePicker() || (await f.Z.hasPermission(k.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, c.WH)(N, e, {
                    pid: L,
                    sourceId: A,
                    sourceName: R,
                    audioSourceId: null,
                    sound: v,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [t, N, o, e]);
    return r.useCallback(async () => {
        !(!S || null == e || (await O())) &&
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('73554')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: N,
                        analyticsLocation: y.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [S, O, N, e]);
}
