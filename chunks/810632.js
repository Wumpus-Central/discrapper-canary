n.d(t, { B: () => w }), n(230036), n(47120);
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
    _ = n(361291),
    m = n(592125),
    v = n(430824),
    O = n(131951),
    b = n(944486),
    y = n(594174),
    E = n(449224),
    x = n(358085),
    I = n(981631),
    S = n(37113),
    C = n(761274),
    j = n(388032);
function w(e) {
    let t = (0, o.e7)([b.Z], () => b.Z.getVoiceChannelId()),
        w = (0, o.e7)([m.Z], () => m.Z.getChannel(t), [t]),
        Z = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        N = null == w ? void 0 : w.getGuildId(),
        P = (0, o.e7)([O.Z], () => (0, c.Z)(O.Z));
    async function T() {
        var e;
        return null !== (e = (await (0, f._Q)()).sort((e, t) => (0, f.ov)(t) - (0, f.ov)(e))[0]) && void 0 !== e ? e : null;
    }
    let k = r.useCallback(async () => {
        var e, n;
        if (null == w || null == t || null == Z) return !1;
        let i = await T(),
            r = (0, x.isWindows)() ? (0, p.Z)(s.ZP, E.Z) : null;
        if (null == r && null == i) return !1;
        let o = null != N ? (null === (e = v.Z.getGuild(N)) || void 0 === e ? void 0 : e.premiumTier) : null,
            { preset: l, resolution: c, fps: f, soundshareEnabled: m } = _.Z.getState(),
            [b, y] = null !== (n = (0, d.Z)(l, Z, o)) && void 0 !== n ? n : [S.LY.RESOLUTION_720, S.ws.FPS_30],
            I = l,
            j = c,
            P = f;
        I !== S.tI.PRESET_CUSTOM && ((j = b), (P = y)),
            (0, u.Z)(I, j, P, Z, o) || ((j = b), (P = y)),
            (0, u.Z)(I, j, P, Z, o, w) || ((I = S.tI.PRESET_VIDEO), (j = S.LY.RESOLUTION_720), (P = S.ws.FPS_30)),
            (0, a.Rc)({
                preset: I,
                resolution: j,
                frameRate: P,
                soundshareEnabled: m
            });
        let k = (0, h.Z)(r, i, s.ZP.getRunningGames()),
            A = !(0, x.isWindows)() || null == k || (null == i ? void 0 : i.id.startsWith('camera:')) || null == k ? null : k.pid,
            D = null,
            R = null;
        return (
            null == A && null != i && ((D = i.id), (R = i.name)),
            !!(O.Z.getUseSystemScreensharePicker() || (await g.Z.hasPermission(C.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 }))) &&
                ((0, a.WH)(N, t, {
                    pid: A,
                    sourceId: D,
                    sourceName: R,
                    audioSourceId: null,
                    sound: m,
                    previewDisabled: !0
                }),
                !0)
        );
    }, [w, N, Z, t]);
    return r.useCallback(async () => {
        if (!(!P || null == t || (await k()))) {
            if (null == Z) {
                (0, l.showToast)((0, l.createToast)(j.NW.string(j.t.OKnWyc), l.ToastType.FAILURE));
                return;
            }
            (0, l.ZDy)(
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
                { contextKey: null != e ? (0, l.VnL)(e) : void 0 }
            );
        }
    }, [P, k, N, t, e, Z]);
}
