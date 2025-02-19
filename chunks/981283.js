n.d(t, { Z: () => I });
var r = n(200651);
n(192379);
var i = n(392711),
    o = n(481060),
    a = n(570140),
    s = n(846027),
    l = n(872810),
    c = n(695346),
    u = n(199902),
    d = n(314897),
    f = n(650774),
    p = n(19780),
    _ = n(594174),
    h = n(449753),
    m = n(569545),
    g = n(960861),
    E = n(803647),
    v = n(70722),
    b = n(981631);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let S = (0, i.debounce)(l.xc, 1000),
    I = {
        init() {
            h.Z.init(),
                g.ZP.initializeIfNeeded(),
                a.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                    let { videoState: t } = e,
                        n = u.Z.getCurrentUserActiveStream();
                    if (null != n) {
                        let e = t === b.FQ1.PAUSED;
                        (0, l.tK)(n, e);
                    }
                }),
                a.Z.subscribe('STREAM_DELETE', (e) => {
                    e.reason === b.si2.STREAM_FULL &&
                        ((0, l.aP)(e.streamKey, !1),
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('63757').then(n.bind(n, 309690));
                            return (t) => (0, r.jsx)(e, O({}, t));
                        }));
                }),
                a.Z.subscribe('STREAM_WATCH', (e) => {
                    let { streamKey: t, allowMultiple: n } = e;
                    if (n) return;
                    let r = (0, m.my)(t);
                    u.Z.getAllActiveStreams().forEach((e) => {
                        e.ownerId !== r.ownerId && e.ownerId !== d.default.getId() && (e.ownerId === d.default.getId() && s.Z.setGoLiveSource(null), (0, l.aP)((0, m.V9)(e), !1));
                    });
                }),
                a.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                    let { voiceStates: t } = e;
                    t.forEach((e) => {
                        let { userId: t } = e;
                        if (t !== d.default.getId()) return;
                        let n = u.Z.getAllActiveStreams(),
                            r = p.Z.getChannelId();
                        n.forEach((e) => {
                            e.channelId !== r && (0, E.Z)(e, !1);
                        });
                    });
                }),
                a.Z.subscribe('STREAM_CREATE', (e) => {
                    var t;
                    let { streamKey: n } = e,
                        { ownerId: r, guildId: i } = (0, m.my)(n);
                    if (null == i || null == r || r !== (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                    let o = f.Z.getMemberCount(i);
                    null != o && !(o < 2) && !(o > v.tB) && c.eo.getSetting() && S(n);
                });
        }
    };
