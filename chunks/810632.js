n.d(t, {
    B: function () {
        return L;
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
    u = n(594190),
    d = n(74299),
    h = n(451467),
    f = n(537413),
    m = n(989941),
    v = n(567126),
    p = n(143135),
    x = n(751571),
    g = n(361291),
    C = n(592125),
    Z = n(430824),
    I = n(131951),
    _ = n(944486),
    j = n(594174),
    E = n(449224),
    b = n(358085),
    w = n(981631),
    N = n(37113),
    k = n(761274);
function L() {
    let e = (0, a.e7)([_.Z], () => _.Z.getVoiceChannelId()),
        t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
        l = (0, a.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        L = null == t ? void 0 : t.getGuildId(),
        S = (0, a.e7)([I.Z], () => (0, d.Z)(I.Z));
    async function y() {
        var e;
        return null !== (e = (await (0, v._Q)()).sort((e, t) => (0, v.ov)(t) - (0, v.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let T = r.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let r = await y(),
            o = (0, b.isWindows)() ? (0, m.Z)(u.ZP, E.Z) : null;
        if (null == o && null == r) return !1;
        let a = null != L ? (null === (n = Z.Z.getGuild(L)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: s, resolution: d, fps: v, soundshareEnabled: C } = g.Z.getState(),
            [_, j] = null !== (i = (0, f.Z)(s, l, a)) && void 0 !== i ? i : [N.LY.RESOLUTION_720, N.ws.FPS_30],
            w = s,
            S = d,
            T = v;
        w !== N.tI.PRESET_CUSTOM && ((S = _), (T = j)),
            !(0, h.Z)(w, S, T, l, a) && ((S = _), (T = j)),
            !(0, h.Z)(w, S, T, l, a, t) && ((w = N.tI.PRESET_VIDEO), (S = N.LY.RESOLUTION_720), (T = N.ws.FPS_30)),
            (0, c.Rc)({
                preset: w,
                resolution: S,
                frameRate: T,
                soundshareEnabled: C
            });
        let A = (0, p.Z)(o, r, u.ZP.getRunningGames()),
            O = !(0, b.isWindows)() || null == A || (null == r ? void 0 : r.id.startsWith('camera:')) || null == A ? null : A.pid,
            V = null,
            M = null;
        return (
            null == O && null != r && ((V = r.id), (M = r.name)),
            !!(I.Z.getUseSystemScreensharePicker() || (await x.Z.hasPermission(k.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, c.WH)(L, e, {
                    pid: O,
                    sourceId: V,
                    sourceName: M,
                    audioSourceId: null,
                    sound: C,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [t, L, l, e]);
    return r.useCallback(async () => {
        if (!(!S || null == e || (await T())))
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('73554')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: L,
                        analyticsLocation: w.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [S, T, L, e]);
}
