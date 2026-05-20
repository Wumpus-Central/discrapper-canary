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
    I = i(761853),
    E = i(576705),
    g = i(309010),
    _ = i(287809),
    N = i(652215),
    S = i(753070),
    T = i(375708);
function C(t) {
    let {
            pid: e,
            analyticsLocation: i,
            allowOneClickGoLive: n = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        } = t,
        u = (0, a.bG)([g.A], () => g.A.getVoiceChannelId()),
        c = (0, a.bG)([p.A], () => p.A.getChannel(u), [u]),
        f = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
        y = (0, a.bG)([I.Ay], () => (0, A.A)(I.Ay)),
        N = (0, a.bG)([m.A, E.A], () => null != c && (0, d.vz)(c, m.A, E.A));
    return l.useCallback(async () => {
        await v({
            pid: e,
            voiceChannelId: u,
            user: f,
            canGoLive: y,
            canStream: N,
            analyticsLocation: i,
            allowOneClickGoLive: n,
            onBeforeShowModal: r,
            onOneClickGoLive: s,
            appContext: o,
        });
    }, [e, u, f, y, N, i, n, r, s, o]);
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
        s = g.A.getVoiceChannelId(),
        o = p.A.getChannel(s),
        u = _.default.getCurrentUser(),
        c = null != o && (0, d.vz)(o, m.A, E.A),
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
        appContext: E,
    } = t;
    if (d && A) {
        if (p && null !== l) {
            let t = y.A.getState().preset;
            if (t === S.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: e } = (0, c.eO)({ location: "overlay _goLive" });
                t = e ? S.jQ.PRESET_AUTO : S.jQ.PRESET_VIDEO;
            }
            let [i] = await (0, f.A)(e, { preset: t });
            if (i) return void I?.();
        }
        if (null == a)
            return void (0, r.P0)((0, s.o)(T.intl.string(T.t.OKnWyb), o.Ck.FAILURE, { appContext: N.BRT.OVERLAY }));
        m?.(),
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        i.e("8516"),
                        i.e("17918"),
                        i.e("76171"),
                        i.e("38601"),
                        i.e("36946"),
                        i.e("6809"),
                        i.e("44801"),
                        i.e("44727"),
                        i.e("25241"),
                        i.e("6565"),
                        i.e("14304"),
                        i.e("82001"),
                        i.e("91782"),
                        i.e("90088"),
                    ]).then(i.bind(i, 266536));
                    return (i) => (0, n.jsx)(t, { ...i, sourcePID: e, selectSource: !1 });
                },
                { contextKey: null != E ? (0, u.modalContextFromAppContext)(E) : void 0 },
            );
    }
}
