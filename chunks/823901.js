n.d(t, { H: () => I, y: () => S });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(258585),
    o = n(279250),
    d = n(880144),
    u = n(72432),
    c = n(929921),
    h = n(734057),
    A = n(71393),
    m = n(430452),
    g = n(576705),
    p = n(309010),
    f = n(287809),
    _ = n(652215),
    E = n(753070),
    x = n(985018);
function S(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: s,
            onOneClickGoLive: r,
            appContext: u,
        } = e,
        c = (0, a.bG)([p.A], () => p.A.getVoiceChannelId()),
        _ = (0, a.bG)([h.A], () => h.A.getChannel(c), [c]),
        E = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        x = (0, a.bG)([m.Ay], () => (0, d.A)(m.Ay)),
        S = (0, a.bG)([A.A, g.A], () => null != _ && (0, o.vz)(_, A.A, g.A));
    return l.useCallback(async () => {
        await T({
            pid: t,
            voiceChannelId: c,
            user: E,
            canGoLive: x,
            canStream: S,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: s,
            onOneClickGoLive: r,
            appContext: u,
        });
    }, [t, c, E, x, S, n, i, s, r, u]);
}
async function I(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: a,
            appContext: s,
        } = e,
        r = p.A.getVoiceChannelId(),
        u = h.A.getChannel(r),
        c = f.default.getCurrentUser(),
        _ = null != u && (0, o.vz)(u, A.A, g.A),
        E = (0, d.A)(m.Ay);
    await T({
        pid: t,
        voiceChannelId: r,
        user: c,
        canGoLive: E,
        canStream: _,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: l,
        onOneClickGoLive: a,
        appContext: s,
    });
}
async function T(e) {
    let {
        pid: t,
        voiceChannelId: l,
        user: a,
        canGoLive: o,
        canStream: d,
        allowOneClickGoLive: h,
        onBeforeShowModal: A,
        onOneClickGoLive: m,
        appContext: g,
    } = e;
    if (o && d) {
        if (h && null !== l) {
            let e = c.A.getState().preset;
            if (e === E.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, r.eO)({ location: "overlay _goLive" });
                e = t ? E.jQ.PRESET_AUTO : E.jQ.PRESET_VIDEO;
            }
            let [n] = await (0, u.A)(t, { preset: e });
            if (n) return void m?.();
        }
        if (null == a)
            return void (0, s.showToast)(
                (0, s.createToast)(x.intl.string(x.t.OKnWyb), s.ToastType.FAILURE, { appContext: _.BRT.OVERLAY }),
            );
        A?.(),
            (0, s.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
                    return (n) => (0, i.jsx)(e, { ...n, sourcePID: t, selectSource: !1 });
                },
                { contextKey: null != g ? (0, s.TId)(g) : void 0 },
            );
    }
}
