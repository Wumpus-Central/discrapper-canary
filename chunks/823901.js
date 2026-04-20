"use strict";
n.d(t, { H: () => S, y: () => T });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(258585),
    l = n(279250),
    u = n(880144),
    c = n(72432),
    d = n(929921),
    _ = n(734057),
    f = n(71393),
    p = n(430452),
    h = n(576705),
    m = n(309010),
    E = n(287809),
    g = n(652215),
    A = n(753070),
    I = n(985018);
function T(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: r = !1,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: c,
        } = e,
        d = (0, s.bG)([m.A], () => m.A.getVoiceChannelId()),
        g = (0, s.bG)([_.A], () => _.A.getChannel(d), [d]),
        A = (0, s.bG)([E.default], () => E.default.getCurrentUser()),
        I = (0, s.bG)([p.Ay], () => (0, u.A)(p.Ay)),
        T = (0, s.bG)([f.A, h.A], () => null != g && (0, l.vz)(g, f.A, h.A));
    return i.useCallback(async () => {
        await y({
            pid: t,
            voiceChannelId: d,
            user: A,
            canGoLive: I,
            canStream: T,
            analyticsLocation: n,
            allowOneClickGoLive: r,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: c,
        });
    }, [t, d, A, I, T, n, r, a, o, c]);
}
async function S(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: r = !1,
            onBeforeShowModal: i,
            onOneClickGoLive: s,
            appContext: a,
        } = e,
        o = m.A.getVoiceChannelId(),
        c = _.A.getChannel(o),
        d = E.default.getCurrentUser(),
        g = null != c && (0, l.vz)(c, f.A, h.A),
        A = (0, u.A)(p.Ay);
    await y({
        pid: t,
        voiceChannelId: o,
        user: d,
        canGoLive: A,
        canStream: g,
        analyticsLocation: n,
        allowOneClickGoLive: r,
        onBeforeShowModal: i,
        onOneClickGoLive: s,
        appContext: a,
    });
}
async function y(e) {
    let {
        pid: t,
        voiceChannelId: i,
        user: s,
        canGoLive: l,
        canStream: u,
        allowOneClickGoLive: _,
        onBeforeShowModal: f,
        onOneClickGoLive: p,
        appContext: h,
    } = e;
    if (l && u) {
        if (_ && null !== i) {
            let e = d.A.getState().preset;
            if (e === A.jQ.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, o.eO)({ location: "overlay _goLive" });
                e = t ? A.jQ.PRESET_AUTO : A.jQ.PRESET_VIDEO;
            }
            let [n] = await (0, c.A)(t, { preset: e });
            if (n) return void p?.();
        }
        if (null == s)
            return void (0, a.showToast)(
                (0, a.createToast)(I.intl.string(I.t.OKnWyb), a.ToastType.FAILURE, { appContext: g.BRT.OVERLAY }),
            );
        f?.(),
            (0, a.mMO)(
                async () => {
                    let { default: e } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
                    return (n) => (0, r.jsx)(e, { ...n, sourcePID: t, selectSource: !1 });
                },
                { contextKey: null != h ? (0, a.TId)(h) : void 0 },
            );
    }
}
