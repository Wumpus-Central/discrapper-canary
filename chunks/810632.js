n.d(t, { B: () => j }), n(230036), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(872810),
    c = n(594190),
    s = n(74299),
    u = n(451467),
    d = n(537413),
    _ = n(830461),
    h = n(989941),
    f = n(567126),
    p = n(143135),
    g = n(751571),
    v = n(695346),
    b = n(361291),
    y = n(592125),
    m = n(430824),
    I = n(131951),
    O = n(944486),
    N = n(594174),
    C = n(449224),
    S = n(358085),
    x = n(145597),
    w = n(981631),
    T = n(37113),
    P = n(761274),
    E = n(388032);
function j(e) {
    let t = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId()),
        j = (0, r.e7)([y.Z], () => y.Z.getChannel(t), [t]),
        Z = (0, r.e7)([N.default], () => N.default.getCurrentUser()),
        A = null == j ? void 0 : j.getGuildId(),
        W = (0, r.e7)([I.Z], () => (0, s.Z)(I.Z));
    async function k() {
        var e;
        return null !== (e = (await (0, _._)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let R = o.useCallback(async () => {
        var e, n, i;
        if (null == j || null == t || null == Z) return !1;
        let o = await k(),
            r = (0, S.isWindows)() ? (0, h.Z)(c.ZP, C.Z) : null;
        if (null == r && null == o) return !1;
        let a = null != A ? (null === (e = m.Z.getGuild(A)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: s, resolution: _, fps: f, soundshareEnabled: y } = b.Z.getState(),
            [O, N] = null !== (n = (0, d.Z)(s, Z, a)) && void 0 !== n ? n : [T.LY.RESOLUTION_720, T.ws.FPS_30],
            x = s,
            w = _,
            E = f;
        x !== T.tI.PRESET_CUSTOM && ((w = O), (E = N)),
            (0, u.Z)(x, w, E, Z, a) || ((w = O), (E = N)),
            (0, u.Z)(x, w, E, Z, a, j) || ((x = T.tI.PRESET_VIDEO), (w = T.LY.RESOLUTION_720), (E = T.ws.FPS_30)),
            (0, l.Rc)({
                preset: x,
                resolution: w,
                frameRate: E,
                soundshareEnabled: y
            });
        let W = (0, p.Z)(r, o, c.ZP.getRunningGames()),
            R = !(0, S.isWindows)() || null == W || (null == o ? void 0 : o.id.startsWith('camera:')) || null == W ? null : W.pid,
            D = null,
            B = null;
        return (
            null == R && null != o && ((D = o.id), (B = o.name)),
            !!(I.Z.getUseSystemScreensharePicker() || (await g.Z.hasPermission(P.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, l.WH)(A, t, {
                    pid: R,
                    sourceId: D,
                    sourceName: B,
                    audioSourceId: null,
                    sound: y,
                    previewDisabled: null !== (i = v.I0.getSetting()) && void 0 !== i && i
                }),
                !0)
        );
    }, [j, A, Z, t]);
    return o.useCallback(async () => {
        if (!(!W || null == t || (await R()))) {
            if (null == Z) {
                (0, a.showToast)((0, a.createToast)(E.NW.string(E.t.OKnWyc), a.ToastType.FAILURE));
                return;
            }
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('79477'), n.e('53175')]).then(n.bind(n, 60594));
                    return (t) => {
                        var n, o;
                        return (0, i.jsx)(
                            e,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (o = o =
                                {
                                    sourcePID: (0, x.QF)(),
                                    selectSource: !1,
                                    guildId: A,
                                    analyticsLocation: w.Sbl.UNLOCKED_OVERLAY
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            n)
                        );
                    };
                },
                { contextKey: null != e ? (0, a.VnL)(e) : void 0 }
            );
        }
    }, [W, R, A, t, e, Z]);
}
