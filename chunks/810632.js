n.d(t, {
    B: function () {
        return y;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(872810),
    u = n(594190),
    d = n(74299),
    h = n(451467),
    f = n(537413),
    p = n(989941),
    m = n(567126),
    v = n(143135),
    g = n(751571),
    x = n(361291),
    C = n(592125),
    Z = n(430824),
    _ = n(131951),
    I = n(944486),
    j = n(594174),
    E = n(449224),
    b = n(358085),
    w = n(981631),
    k = n(37113),
    N = n(761274);
function y() {
    let e = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
        t = (0, a.e7)([C.Z], () => C.Z.getChannel(e), [e]),
        r = (0, a.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        y = null == t ? void 0 : t.getGuildId(),
        L = (0, a.e7)([_.Z], () => (0, d.Z)(_.Z));
    async function S() {
        var e;
        return null !== (e = (await (0, m._Q)()).sort((e, t) => (0, m.ov)(t) - (0, m.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let T = l.useCallback(async () => {
        var n, i;
        if (null == t || null == e) return !1;
        let l = await S(),
            o = (0, b.isWindows)() ? (0, p.Z)(u.ZP, E.Z) : null;
        if (null == o && null == l) return !1;
        let a = null != y ? (null === (n = Z.Z.getGuild(y)) || void 0 === n ? void 0 : n.premiumTier) : null,
            { preset: s, resolution: d, fps: m, soundshareEnabled: C } = x.Z.getState(),
            [I, j] = null !== (i = (0, f.Z)(s, r, a)) && void 0 !== i ? i : [k.LY.RESOLUTION_720, k.ws.FPS_30],
            w = s,
            L = d,
            T = m;
        w !== k.tI.PRESET_CUSTOM && ((L = I), (T = j)),
            !(0, h.Z)(w, L, T, r, a) && ((L = I), (T = j)),
            !(0, h.Z)(w, L, T, r, a, t) && ((w = k.tI.PRESET_VIDEO), (L = k.LY.RESOLUTION_720), (T = k.ws.FPS_30)),
            (0, c.Rc)({
                preset: w,
                resolution: L,
                frameRate: T,
                soundshareEnabled: C
            });
        let A = (0, v.Z)(o, l, u.ZP.getRunningGames()),
            O = !(0, b.isWindows)() || null == A || (null == l ? void 0 : l.id.startsWith('camera:')) || null == A ? null : A.pid,
            P = null,
            V = null;
        return (
            null == O && null != l && ((P = l.id), (V = l.name)),
            !!(_.Z.getUseSystemScreensharePicker() || (await g.Z.hasPermission(N.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
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
    }, [t, y, r, e]);
    return l.useCallback(async () => {
        if (!(!L || null == e || (await T())))
            (0, s.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('79360')]).then(n.bind(n, 60594));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        selectSource: !1,
                        guildId: y,
                        analyticsLocation: w.Sbl.UNLOCKED_OVERLAY
                    });
            });
    }, [L, T, y, e]);
}
