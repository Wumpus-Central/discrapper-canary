n.d(t, {
    H: () => b,
    y: () => v,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(258585),
    s = n(279250),
    c = n(880144),
    u = n(72432),
    d = n(929921),
    p = n(734057),
    h = n(71393),
    f = n(430452),
    m = n(576705),
    g = n(309010),
    y = n(287809),
    A = n(652215),
    O = n(753070),
    E = n(985018);

function v(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: u,
        } = e,
        d = (0, l.bG)([g.A], () => g.A.getVoiceChannelId()),
        A = (0, l.bG)([p.A], () => p.A.getChannel(d), [d]),
        O = (0, l.bG)([y.default], () => y.default.getCurrentUser()),
        E = (0, l.bG)([f.A], () => (0, c.A)(f.A)),
        v = (0, l.bG)([h.A, m.A], () => null != A && (0, s.vz)(A, h.A, m.A));
    return r.useCallback(async () => {
        await S({
            pid: t,
            voiceChannelId: d,
            user: O,
            canGoLive: E,
            canStream: v,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: u,
        });
    }, [t, d, O, E, v, n, i, a, o, u]);
}
async function b(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: l,
            appContext: a,
        } = e,
        o = g.A.getVoiceChannelId(),
        u = p.A.getChannel(o),
        d = y.default.getCurrentUser(),
        A = null != u && (0, s.vz)(u, h.A, m.A),
        O = (0, c.A)(f.A);
    await S({
        pid: t,
        voiceChannelId: o,
        user: d,
        canGoLive: O,
        canStream: A,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: l,
        appContext: a,
    });
}
async function S(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: l,
        canGoLive: s,
        canStream: c,
        allowOneClickGoLive: p,
        onBeforeShowModal: h,
        onOneClickGoLive: f,
        appContext: m,
    } = e;
    if (s && c) {
        if (p && null !== r) {
            let e = d.A.getState().preset;
            if (e === O.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, o.eO)({
                    location: "overlay _goLive",
                });
                e = t ? O.jQ.PRESET_AUTO : O.jQ.PRESET_VIDEO;
            }
            let [n] = await (0, u.A)(t, {
                preset: e,
            });
            if (n) {
                null == f || f();
                return;
            }
        }
        if (null == l)
            return void (0, a.showToast)(
                (0, a.createToast)(E.intl.string(E.t.OKnWyb), a.ToastType.FAILURE, {
                    appContext: A.BRT.OVERLAY,
                }),
            );
        null == h || h(),
            (0, a.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("14476")]).then(n.bind(n, 648230));
                    return (n) => {
                        var r, l;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    sourcePID: t,
                                    selectSource: !1,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r),
                        );
                    };
                },
                {
                    contextKey: null != m ? (0, a.TId)(m) : void 0,
                },
            );
    }
}
