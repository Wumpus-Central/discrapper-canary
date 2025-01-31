n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(392711),
    a = n(481060),
    s = n(570140),
    o = n(846027),
    l = n(872810),
    u = n(695346),
    c = n(199902),
    d = n(314897),
    f = n(650774),
    _ = n(19780),
    p = n(594174),
    h = n(449753),
    m = n(569545),
    g = n(960861),
    E = n(803647),
    v = n(70722),
    y = n(981631);
let I = (0, r.debounce)(l.xc, 1000),
    b = {
        init() {
            h.Z.init(),
                g.ZP.initializeIfNeeded(),
                s.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                    let { videoState: t } = e,
                        n = c.Z.getCurrentUserActiveStream();
                    if (null != n) {
                        let e = t === y.FQ1.PAUSED;
                        (0, l.tK)(n, e);
                    }
                }),
                s.Z.subscribe('STREAM_DELETE', (e) => {
                    e.reason === y.si2.STREAM_FULL &&
                        ((0, l.aP)(e.streamKey, !1),
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('63757').then(n.bind(n, 309690));
                            return (t) => (0, i.jsx)(e, { ...t });
                        }));
                }),
                s.Z.subscribe('STREAM_WATCH', (e) => {
                    let { streamKey: t, allowMultiple: n } = e;
                    if (n) return;
                    let i = (0, m.my)(t);
                    c.Z.getAllActiveStreams().forEach((e) => {
                        e.ownerId !== i.ownerId && e.ownerId !== d.default.getId() && (e.ownerId === d.default.getId() && o.Z.setGoLiveSource(null), (0, l.aP)((0, m.V9)(e), !1));
                    });
                }),
                s.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                    let { voiceStates: t } = e;
                    t.forEach((e) => {
                        let { userId: t } = e;
                        if (t !== d.default.getId()) return;
                        let n = c.Z.getAllActiveStreams(),
                            i = _.Z.getChannelId();
                        n.forEach((e) => {
                            e.channelId !== i && (0, E.Z)(e, !1);
                        });
                    });
                }),
                s.Z.subscribe('STREAM_CREATE', (e) => {
                    var t;
                    let { streamKey: n } = e,
                        { ownerId: i, guildId: r } = (0, m.my)(n);
                    if (null == r || null == i || i !== (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                    let a = f.Z.getMemberCount(r);
                    null != a && !(a < 2) && !(a > v.tB) && u.eo.getSetting() && I(n);
                });
        }
    };
