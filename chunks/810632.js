n.d(t, { B: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
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
    E = n(592125),
    I = n(430824),
    x = n(131951),
    C = n(944486),
    S = n(594174),
    Z = n(449224),
    y = n(358085),
    b = n(981631),
    O = n(37113),
    N = n(761274);
function T(e) {
    let t = (0, a.e7)([C.Z], () => C.Z.getVoiceChannelId()),
        l = (0, a.e7)([E.Z], () => E.Z.getChannel(t), [t]),
        T = (0, a.e7)([S.default], () => {
            let e = S.default.getCurrentUser();
            return o()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        w = null == l ? void 0 : l.getGuildId(),
        k = (0, a.e7)([x.Z], () => (0, u.Z)(x.Z));
    async function A() {
        var e;
        return null !== (e = (await (0, f._Q)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let j = r.useCallback(async () => {
        var e, n;
        if (null == l || null == t) return !1;
        let i = await A(),
            r = (0, y.isWindows)() ? (0, p.Z)(c.ZP, Z.Z) : null;
        if (null == r && null == i) return !1;
        let o = null != w ? (null === (e = I.Z.getGuild(w)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: a, resolution: s, fps: u, soundshareEnabled: f } = v.Z.getState(),
            [E, C] = null !== (n = (0, _.Z)(a, T, o)) && void 0 !== n ? n : [O.LY.RESOLUTION_720, O.ws.FPS_30],
            S = a,
            b = s,
            k = u;
        S !== O.tI.PRESET_CUSTOM && ((b = E), (k = C)),
            (0, h.Z)(S, b, k, T, o) || ((b = E), (k = C)),
            (0, h.Z)(S, b, k, T, o, l) || ((S = O.tI.PRESET_VIDEO), (b = O.LY.RESOLUTION_720), (k = O.ws.FPS_30)),
            (0, d.Rc)({
                preset: S,
                resolution: b,
                frameRate: k,
                soundshareEnabled: f
            });
        let j = (0, g.Z)(r, i, c.ZP.getRunningGames()),
            R = !(0, y.isWindows)() || null == j || (null == i ? void 0 : i.id.startsWith('camera:')) || null == j ? null : j.pid,
            L = null,
            D = null;
        return (
            null == R && null != i && ((L = i.id), (D = i.name)),
            !!(x.Z.getUseSystemScreensharePicker() || (await m.Z.hasPermission(N.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
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
    }, [l, w, T, t]);
    return r.useCallback(async () => {
        !(!k || null == t || (await j())) &&
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('79477'), n.e('52211')]).then(n.bind(n, 60594));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            selectSource: !1,
                            guildId: w,
                            analyticsLocation: b.Sbl.UNLOCKED_OVERLAY
                        });
                },
                { contextKey: null != e ? (0, s.VnL)(e) : void 0 }
            );
    }, [k, j, w, t, e]);
}
