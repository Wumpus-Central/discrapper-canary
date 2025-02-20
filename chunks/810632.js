n.d(t, { B: () => Z }), n(230036), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(872810),
    s = n(594190),
    c = n(74299),
    u = n(451467),
    d = n(537413),
    p = n(989941),
    f = n(567126),
    h = n(143135),
    g = n(751571),
    _ = n(695346),
    m = n(361291),
    v = n(592125),
    O = n(430824),
    b = n(131951),
    y = n(944486),
    E = n(594174),
    x = n(449224),
    I = n(358085),
    S = n(981631),
    C = n(37113),
    j = n(761274),
    w = n(388032);
function Z(e) {
    let t = (0, o.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        Z = (0, o.e7)([v.Z], () => v.Z.getChannel(t), [t]),
        N = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
        P = null == Z ? void 0 : Z.getGuildId(),
        T = (0, o.e7)([b.Z], () => (0, c.Z)(b.Z));
    async function k() {
        var e;
        return null !== (e = (await (0, f._Q)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let A = r.useCallback(async () => {
        var e, n, i;
        if (null == Z || null == t || null == N) return !1;
        let r = await k(),
            o = (0, I.isWindows)() ? (0, p.Z)(s.ZP, x.Z) : null;
        if (null == o && null == r) return !1;
        let l = null != P ? (null === (e = O.Z.getGuild(P)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: c, resolution: f, fps: v, soundshareEnabled: y } = m.Z.getState(),
            [E, S] = null !== (n = (0, d.Z)(c, N, l)) && void 0 !== n ? n : [C.LY.RESOLUTION_720, C.ws.FPS_30],
            w = c,
            T = f,
            A = v;
        w !== C.tI.PRESET_CUSTOM && ((T = E), (A = S)),
            (0, u.Z)(w, T, A, N, l) || ((T = E), (A = S)),
            (0, u.Z)(w, T, A, N, l, Z) || ((w = C.tI.PRESET_VIDEO), (T = C.LY.RESOLUTION_720), (A = C.ws.FPS_30)),
            (0, a.Rc)({
                preset: w,
                resolution: T,
                frameRate: A,
                soundshareEnabled: y
            });
        let D = (0, h.Z)(o, r, s.ZP.getRunningGames()),
            R = !(0, I.isWindows)() || null == D || (null == r ? void 0 : r.id.startsWith('camera:')) || null == D ? null : D.pid,
            L = null,
            W = null;
        return (
            null == R && null != r && ((L = r.id), (W = r.name)),
            !!(b.Z.getUseSystemScreensharePicker() || (await g.Z.hasPermission(j.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, a.WH)(P, t, {
                    pid: R,
                    sourceId: L,
                    sourceName: W,
                    audioSourceId: null,
                    sound: y,
                    previewDisabled: null !== (i = _.I0.getSetting()) && void 0 !== i && i
                }),
                !0)
        );
    }, [Z, P, N, t]);
    return r.useCallback(async () => {
        if (!(!T || null == t || (await A()))) {
            if (null == N) {
                (0, l.showToast)((0, l.createToast)(w.NW.string(w.t.OKnWyc), l.ToastType.FAILURE));
                return;
            }
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('79477'), n.e('20591')]).then(n.bind(n, 60594));
                    return (t) => {
                        var n, r;
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
                            (r = r =
                                {
                                    selectSource: !1,
                                    guildId: P,
                                    analyticsLocation: S.Sbl.UNLOCKED_OVERLAY
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n)
                        );
                    };
                },
                { contextKey: null != e ? (0, l.VnL)(e) : void 0 }
            );
        }
    }, [T, A, P, t, e, N]);
}
