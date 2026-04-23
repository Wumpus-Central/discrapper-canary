i.d(e, { H: () => h, y: () => C });
var n = i(627968),
    l = i(64700),
    a = i(17928),
    r = i(691540),
    s = i(857250),
    o = i(97483),
    u = i(192308),
    c = i(258585),
    d = i(279250),
    A = i(880144),
    f = i(560595),
    y = i(929921),
    p = i(734057),
    m = i(71393),
    I = i(969341),
    g = i(576705),
    E = i(309010),
    N = i(287809),
    _ = i(652215),
    T = i(753070),
    S = i(985018);
function C(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        } = t,
        u = (0, a.bG)([E.A], () => E.A.getVoiceChannelId()),
        c = (0, a.bG)([p.A], () => p.A.getChannel(u), [u]),
        f = (0, a.bG)([N.default], () => N.default.getCurrentUser()),
        y = (0, a.bG)([I.Ay], () => (0, A.A)(I.Ay)),
        _ = (0, a.bG)([m.A, g.A], () => null != c && (0, d.vz)(c, m.A, g.A));
    return l.useCallback(async () => {
        await v({
            pid: e,
            voiceChannelId: u,
            user: f,
            canGoLive: y,
            canStream: _,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, u, f, y, _, i, n, r, s, o]);
}
async function h(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: a,
            appContext: r,
        } = t,
        s = E.A.getVoiceChannelId(),
        o = p.A.getChannel(s),
        u = N.default.getCurrentUser(),
        c = null != o && (0, d.vz)(o, m.A, g.A),
        f = (0, A.A)(I.Ay);
    await v({
        pid: e,
        voiceChannelId: s,
        user: u,
        canGoLive: f,
        canStream: c,
        analyticsLocation: i,
        allowOneClickGoLive: n,
        onBeforeShowModal: l,
        onOneClickGoLive: a,
        appContext: r,
    });
}
async function v(t) {
    let {
        pid: e,
        voiceChannelId: l,
        user: a,
        canGoLive: d,
        canStream: A,
        allowOneClickGoLive: p,
        onBeforeShowModal: m,
        onOneClickGoLive: I,
        appContext: g,
    } = t;
    if (d && A) {
        if (p && null !== l) {
            let t = y.A.getState().preset;
            if (t === T.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, c.eO)({ location: "overlay _goLive" });
                t = e ? T.jQ.PRESET_AUTO : T.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, f.A)(e, { preset: t });
            if (i) return void I?.();
        }
        if (null == a)
            return void (0, r.P0)((0, s.o)(S.intl.string(S.t.OKnWyb), o.Ck.FAILURE, { appContext: _.BRT.OVERLAY }));
        m?.(),
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([i.e("27713"), i.e("31344")]).then(i.bind(i, 301400));
                    return (i) => (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: !1 });
                },
                { contextKey: null != g ? (0, u.modalContextFromAppContext)(g) : void 0 },
            );
    }
}
