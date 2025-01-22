var i = r(200651);
r(192379);
var a = r(392711);
var o = r(481060),
    s = r(570140),
    l = r(846027),
    u = r(872810),
    c = r(695346),
    d = r(199902),
    f = r(314897),
    p = r(650774),
    h = r(19780),
    _ = r(594174),
    m = r(449753),
    g = r(569545),
    E = r(960861),
    v = r(803647),
    y = r(70722),
    b = r(981631);
let I = (0, a.debounce)(u.xc, 1000);
n.Z = {
    init() {
        m.Z.init(),
            E.ZP.initializeIfNeeded(),
            s.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                let { videoState: n } = e,
                    r = d.Z.getCurrentUserActiveStream();
                if (null != r) {
                    let e = n === b.FQ1.PAUSED;
                    (0, u.tK)(r, e);
                }
            }),
            s.Z.subscribe('STREAM_DELETE', (e) => {
                e.reason === b.si2.STREAM_FULL &&
                    ((0, u.aP)(e.streamKey, !1),
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await r.e('63757').then(r.bind(r, 309690));
                        return (n) => (0, i.jsx)(e, { ...n });
                    }));
            }),
            s.Z.subscribe('STREAM_WATCH', (e) => {
                let { streamKey: n, allowMultiple: r } = e;
                if (r) return;
                let i = (0, g.my)(n);
                d.Z.getAllActiveStreams().forEach((e) => {
                    if (e.ownerId !== i.ownerId && e.ownerId !== f.default.getId()) e.ownerId === f.default.getId() && l.Z.setGoLiveSource(null), (0, u.aP)((0, g.V9)(e), !1);
                });
            }),
            s.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                let { voiceStates: n } = e;
                n.forEach((e) => {
                    let { userId: n } = e;
                    if (n !== f.default.getId()) return;
                    let r = d.Z.getAllActiveStreams(),
                        i = h.Z.getChannelId();
                    r.forEach((e) => {
                        e.channelId !== i && (0, v.Z)(e, !1);
                    });
                });
            }),
            s.Z.subscribe('STREAM_CREATE', (e) => {
                var n;
                let { streamKey: r } = e,
                    { ownerId: i, guildId: a } = (0, g.my)(r);
                if (null == a || null == i || i !== (null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return;
                let o = p.Z.getMemberCount(a);
                if (null != o && !(o < 2) && !(o > y.tB)) c.eo.getSetting() && I(r);
            });
    }
};
