n.d(t, { B: () => N }), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(872810),
    c = n(594190),
    u = n(74299),
    h = n(451467),
    _ = n(537413),
    p = n(989941),
    f = n(567126),
    g = n(143135),
    m = n(751571),
    v = n(361291),
    x = n(592125),
    E = n(430824),
    C = n(131951),
    Z = n(944486),
    I = n(594174),
    S = n(449224),
    b = n(358085),
    y = n(981631),
    w = n(37113),
    O = n(761274);
function N(e) {
    let t = (0, a.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
        r = (0, a.e7)([x.Z], () => x.Z.getChannel(t), [t]),
        N = (0, a.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return l()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        T = null == r ? void 0 : r.getGuildId(),
        j = (0, a.e7)([C.Z], () => (0, u.Z)(C.Z));
    async function k() {
        var e;
        return null !== (e = (await (0, f._Q)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let R = o.useCallback(async () => {
        var e, n;
        if (null == r || null == t) return !1;
        let i = await k(),
            o = (0, b.isWindows)() ? (0, p.Z)(c.ZP, S.Z) : null;
        if (null == o && null == i) return !1;
        let l = null != T ? (null === (e = E.Z.getGuild(T)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: a, resolution: s, fps: u, soundshareEnabled: f } = v.Z.getState(),
            [x, Z] = null !== (n = (0, _.Z)(a, N, l)) && void 0 !== n ? n : [w.LY.RESOLUTION_720, w.ws.FPS_30],
            I = a,
            y = s,
            j = u;
        I !== w.tI.PRESET_CUSTOM && ((y = x), (j = Z)),
            (0, h.Z)(I, y, j, N, l) || ((y = x), (j = Z)),
            (0, h.Z)(I, y, j, N, l, r) || ((I = w.tI.PRESET_VIDEO), (y = w.LY.RESOLUTION_720), (j = w.ws.FPS_30)),
            (0, d.Rc)({
                preset: I,
                resolution: y,
                frameRate: j,
                soundshareEnabled: f
            });
        let R = (0, g.Z)(o, i, c.ZP.getRunningGames()),
            A = !(0, b.isWindows)() || null == R || (null == i ? void 0 : i.id.startsWith('camera:')) || null == R ? null : R.pid,
            L = null,
            P = null;
        return (
            null == A && null != i && ((L = i.id), (P = i.name)),
            !!(C.Z.getUseSystemScreensharePicker() || (await m.Z.hasPermission(O.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, d.WH)(T, t, {
                    pid: A,
                    sourceId: L,
                    sourceName: P,
                    audioSourceId: null,
                    sound: f,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [r, T, N, t]);
    return o.useCallback(async () => {
        !(!j || null == t || (await R())) &&
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('79477'), n.e('67266')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: T,
                            analyticsLocation: y.Sbl.UNLOCKED_OVERLAY
                        });
                },
                { contextKey: null != e ? (0, s.VnL)(e) : void 0 }
            );
    }, [j, R, T, t, e]);
}
