n.d(t, {
    B: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(872810),
    d = n(594190),
    u = n(74299),
    h = n(451467),
    m = n(537413),
    p = n(989941),
    x = n(567126),
    g = n(143135),
    v = n(751571),
    f = n(361291),
    C = n(592125),
    Z = n(430824),
    b = n(131951),
    j = n(944486),
    _ = n(594174),
    I = n(449224),
    E = n(358085),
    k = n(981631),
    N = n(37113),
    w = n(761274);
function y() {
    let e = (0, a.e7)([j.Z], () => j.Z.getVoiceChannelId()),
        t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
        l = (0, a.e7)([_.default], () => {
            let e = _.default.getCurrentUser();
            return o()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        y = null == t ? void 0 : t.getGuildId(),
        T = (0, a.e7)([b.Z], () => (0, u.Z)(b.Z));
    async function S() {
        var e;
        return null !== (e = (await (0, x._Q)()).sort((e, t) => (0, x.ov)(t) - (0, x.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let L = r.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let r = await S(),
            o = (0, E.isWindows)() ? (0, p.Z)(d.ZP, I.Z) : null;
        if (null == o && null == r) return !1;
        let a = null != y ? (null === (n = Z.Z.getGuild(y)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: s, resolution: u, fps: x, soundshareEnabled: C } = f.Z.getState(),
            [j, _] = null !== (i = (0, m.Z)(s, l, a)) && void 0 !== i ? i : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            k = s,
            T = u,
            L = x;
        k !== N.tI.PRESET_CUSTOM && ((T = j), (L = _)),
            !(0, h.Z)(k, T, L, l, a) && ((T = j), (L = _)),
            !(0, h.Z)(k, T, L, l, a, t) && ((k = N.tI.PRESET_VIDEO), (T = N.LY.RESOLUTION_720), (L = N.ws.FPS_30)),
            (0, c.Rc)({
                preset: k,
                resolution: T,
                frameRate: L,
                soundshareEnabled: C
            });
        let A = (0, g.Z)(o, r, d.ZP.getRunningGames()),
            O = !(0, E.isWindows)() || null == A || (null == r ? void 0 : r.id.startsWith('camera:')) || null == A ? null : A.pid,
            P = null,
            V = null;
        return (
            null == O && null != r && ((P = r.id), (V = r.name)),
            !!(b.Z.getUseSystemScreensharePicker() || (await v.Z.hasPermission(w.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, c.WH)(y, e, {
                    pid: O,
                    sourceId: P,
                    sourceName: V,
                    audioSourceId: null,
                    sound: C,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [t, y, l, e]);
    return r.useCallback(async () => {
        if (!(!T || null == e || (await L())))
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('73554')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: y,
                        analyticsLocation: k.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [T, L, y, e]);
}
