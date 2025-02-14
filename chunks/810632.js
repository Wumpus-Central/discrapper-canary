n.d(t, { B: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(872810),
    u = n(594190),
    c = n(74299),
    h = n(451467),
    _ = n(537413),
    p = n(989941),
    f = n(567126),
    m = n(143135),
    g = n(751571),
    v = n(361291),
    E = n(592125),
    x = n(430824),
    I = n(131951),
    C = n(944486),
    S = n(594174),
    Z = n(449224),
    y = n(358085),
    O = n(981631),
    N = n(37113),
    b = n(761274);
function T(e) {
    let t = (0, a.e7)([C.Z], () => C.Z.getVoiceChannelId()),
        r = (0, a.e7)([E.Z], () => E.Z.getChannel(t), [t]),
        T = (0, a.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return o()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        w = null == r ? void 0 : r.getGuildId(),
        A = (0, a.e7)([I.Z], () => (0, c.Z)(I.Z));
    async function j() {
        var e;
        return null !== (e = (await (0, f._Q)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let k = l.useCallback(async () => {
        var e, n;
        if (null == r || null == t) return !1;
        let i = await j(),
            l = (0, y.isWindows)() ? (0, p.Z)(u.ZP, Z.Z) : null;
        if (null == l && null == i) return !1;
        let o = null != w ? (null === (e = x.Z.getGuild(w)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: a, resolution: s, fps: c, soundshareEnabled: f } = v.Z.getState(),
            [E, C] = null !== (n = (0, _.Z)(a, T, o)) && void 0 !== n ? n : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            S = a,
            O = s,
            A = c;
        S !== N.tI.PRESET_CUSTOM && ((O = E), (A = C)),
            (0, h.Z)(S, O, A, T, o) || ((O = E), (A = C)),
            (0, h.Z)(S, O, A, T, o, r) || ((S = N.tI.PRESET_VIDEO), (O = N.LY.RESOLUTION_720), (A = N.ws.FPS_30)),
            (0, d.Rc)({
                preset: S,
                resolution: O,
                frameRate: A,
                soundshareEnabled: f
            });
        let k = (0, m.Z)(l, i, u.ZP.getRunningGames()),
            R = !(0, y.isWindows)() || null == k || (null == i ? void 0 : i.id.startsWith('camera:')) || null == k ? null : k.pid,
            L = null,
            D = null;
        return (
            null == R && null != i && ((L = i.id), (D = i.name)),
            !!(I.Z.getUseSystemScreensharePicker() || (await g.Z.hasPermission(b.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, d.WH)(w, t, {
                    pid: R,
                    sourceId: L,
                    sourceName: D,
                    audioSourceId: null,
                    sound: f,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [r, w, T, t]);
    return l.useCallback(async () => {
        !(!A || null == t || (await k())) &&
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('79477'), n.e('68723')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: w,
                            analyticsLocation: O.Sbl.UNLOCKED_OVERLAY
                        });
                },
                { contextKey: null != e ? (0, s.VnL)(e) : void 0 }
            );
    }, [A, k, w, t, e]);
}
