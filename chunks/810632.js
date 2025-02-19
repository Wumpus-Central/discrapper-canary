n.d(t, { B: () => Z }), n(230036), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(872810),
    u = n(594190),
    d = n(74299),
    p = n(451467),
    f = n(537413),
    h = n(989941),
    g = n(567126),
    _ = n(143135),
    m = n(751571),
    v = n(361291),
    O = n(592125),
    b = n(430824),
    y = n(131951),
    E = n(944486),
    x = n(594174),
    S = n(449224),
    C = n(358085),
    I = n(981631),
    j = n(37113),
    w = n(761274);
function Z(e) {
    let t = (0, a.e7)([E.Z], () => E.Z.getVoiceChannelId()),
        o = (0, a.e7)([O.Z], () => O.Z.getChannel(t), [t]),
        Z = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, 'useGoLiveImmidateAction: user cannot be undefined'), e;
        }),
        N = null == o ? void 0 : o.getGuildId(),
        P = (0, a.e7)([y.Z], () => (0, d.Z)(y.Z));
    async function T() {
        var e;
        return null !== (e = (await (0, g._Q)()).sort((e, t) => (0, g.ov)(t) - (0, g.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let k = r.useCallback(async () => {
        var e, n;
        if (null == o || null == t) return !1;
        let i = await T(),
            r = (0, C.isWindows)() ? (0, h.Z)(u.ZP, S.Z) : null;
        if (null == r && null == i) return !1;
        let l = null != N ? (null === (e = b.Z.getGuild(N)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: a, resolution: s, fps: d, soundshareEnabled: g } = v.Z.getState(),
            [O, E] = null !== (n = (0, f.Z)(a, Z, l)) && void 0 !== n ? n : [j.LY.RESOLUTION_720, j.ws.FPS_30],
            x = a,
            I = s,
            P = d;
        x !== j.tI.PRESET_CUSTOM && ((I = O), (P = E)),
            (0, p.Z)(x, I, P, Z, l) || ((I = O), (P = E)),
            (0, p.Z)(x, I, P, Z, l, o) || ((x = j.tI.PRESET_VIDEO), (I = j.LY.RESOLUTION_720), (P = j.ws.FPS_30)),
            (0, c.Rc)({
                preset: x,
                resolution: I,
                frameRate: P,
                soundshareEnabled: g
            });
        let k = (0, _.Z)(r, i, u.ZP.getRunningGames()),
            A = !(0, C.isWindows)() || null == k || (null == i ? void 0 : i.id.startsWith('camera:')) || null == k ? null : k.pid,
            D = null,
            R = null;
        return (
            null == A && null != i && ((D = i.id), (R = i.name)),
            !!(y.Z.getUseSystemScreensharePicker() || (await m.Z.hasPermission(w.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, c.WH)(N, t, {
                    pid: A,
                    sourceId: D,
                    sourceName: R,
                    audioSourceId: null,
                    sound: g,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [o, N, Z, t]);
    return r.useCallback(async () => {
        !(!P || null == t || (await k())) &&
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('79477'), n.e('17923')]).then(n.bind(n, 60594));
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
                                    guildId: N,
                                    analyticsLocation: I.Sbl.UNLOCKED_OVERLAY
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
                { contextKey: null != e ? (0, s.VnL)(e) : void 0 }
            );
    }, [P, k, N, t, e]);
}
