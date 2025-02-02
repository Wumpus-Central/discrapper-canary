n.d(t, { B: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(872810),
    c = n(594190),
    u = n(74299),
    h = n(451467),
    _ = n(537413),
    p = n(989941),
    g = n(567126),
    f = n(143135),
    m = n(751571),
    v = n(361291),
    x = n(592125),
    E = n(430824),
    Z = n(131951),
    C = n(944486),
    I = n(594174),
    S = n(449224),
    b = n(358085),
    y = n(981631),
    N = n(37113),
    w = n(761274);
function T() {
    let e = (0, a.e7)([C.Z], () => C.Z.getVoiceChannelId()),
        t = (0, a.e7)([x.Z], () => x.Z.getChannel(e), [e]),
        r = (0, a.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        T = null == t ? void 0 : t.getGuildId(),
        O = (0, a.e7)([Z.Z], () => (0, u.Z)(Z.Z));
    async function j() {
        var e;
        return null !== (e = (await (0, g._Q)()).sort((e, t) => (0, g.ov)(t) - (0, g.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let k = l.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let l = await j(),
            o = (0, b.isWindows)() ? (0, p.Z)(c.ZP, S.Z) : null;
        if (null == o && null == l) return !1;
        let a = null != T ? (null === (n = E.Z.getGuild(T)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: s, resolution: u, fps: g, soundshareEnabled: x } = v.Z.getState(),
            [C, I] = null !== (i = (0, _.Z)(s, r, a)) && void 0 !== i ? i : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            y = s,
            O = u,
            k = g;
        y !== N.tI.PRESET_CUSTOM && ((O = C), (k = I)),
            (0, h.Z)(y, O, k, r, a) || ((O = C), (k = I)),
            (0, h.Z)(y, O, k, r, a, t) || ((y = N.tI.PRESET_VIDEO), (O = N.LY.RESOLUTION_720), (k = N.ws.FPS_30)),
            (0, d.Rc)({
                preset: y,
                resolution: O,
                frameRate: k,
                soundshareEnabled: x
            });
        let R = (0, f.Z)(o, l, c.ZP.getRunningGames()),
            A = !(0, b.isWindows)() || null == R || (null == l ? void 0 : l.id.startsWith('camera:')) || null == R ? null : R.pid,
            L = null,
            M = null;
        return (
            null == A && null != l && ((L = l.id), (M = l.name)),
            !!(Z.Z.getUseSystemScreensharePicker() || (await m.Z.hasPermission(w.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, d.WH)(T, e, {
                    pid: A,
                    sourceId: L,
                    sourceName: M,
                    audioSourceId: null,
                    sound: x,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [t, T, r, e]);
    return l.useCallback(async () => {
        !(!O || null == e || (await k())) &&
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('73554')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: T,
                        analyticsLocation: y.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [O, k, T, e]);
}
