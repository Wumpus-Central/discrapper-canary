n.d(t, { B: () => O }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    l = n.n(o),
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
    S = n(594174),
    I = n(449224),
    y = n(358085),
    b = n(981631),
    w = n(37113),
    N = n(761274);
function O() {
    let e = (0, a.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
        t = (0, a.e7)([x.Z], () => x.Z.getChannel(e), [e]),
        o = (0, a.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return l()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        O = null == t ? void 0 : t.getGuildId(),
        T = (0, a.e7)([C.Z], () => (0, u.Z)(C.Z));
    async function j() {
        var e;
        return null !== (e = (await (0, f._Q)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let k = r.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let r = await j(),
            l = (0, y.isWindows)() ? (0, p.Z)(c.ZP, I.Z) : null;
        if (null == l && null == r) return !1;
        let a = null != O ? (null === (n = E.Z.getGuild(O)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: s, resolution: u, fps: f, soundshareEnabled: x } = v.Z.getState(),
            [Z, S] = null !== (i = (0, _.Z)(s, o, a)) && void 0 !== i ? i : [w.LY.RESOLUTION_720, w.ws.FPS_30],
            b = s,
            T = u,
            k = f;
        b !== w.tI.PRESET_CUSTOM && ((T = Z), (k = S)),
            (0, h.Z)(b, T, k, o, a) || ((T = Z), (k = S)),
            (0, h.Z)(b, T, k, o, a, t) || ((b = w.tI.PRESET_VIDEO), (T = w.LY.RESOLUTION_720), (k = w.ws.FPS_30)),
            (0, d.Rc)({
                preset: b,
                resolution: T,
                frameRate: k,
                soundshareEnabled: x
            });
        let R = (0, g.Z)(l, r, c.ZP.getRunningGames()),
            A = !(0, y.isWindows)() || null == R || (null == r ? void 0 : r.id.startsWith('camera:')) || null == R ? null : R.pid,
            L = null,
            P = null;
        return (
            null == A && null != r && ((L = r.id), (P = r.name)),
            !!(C.Z.getUseSystemScreensharePicker() || (await m.Z.hasPermission(N.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, d.WH)(O, e, {
                    pid: A,
                    sourceId: L,
                    sourceName: P,
                    audioSourceId: null,
                    sound: x,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [t, O, o, e]);
    return r.useCallback(async () => {
        !(!T || null == e || (await k())) &&
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('73554')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: O,
                        analyticsLocation: b.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [T, k, O, e]);
}
