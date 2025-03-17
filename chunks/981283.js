n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(392711),
    o = n(481060),
    a = n(570140),
    s = n(846027),
    l = n(872810),
    c = n(785141),
    u = n(252158),
    d = n(695346),
    f = n(199902),
    _ = n(314897),
    p = n(650774),
    h = n(19780),
    m = n(594174),
    g = n(449753),
    E = n(569545),
    b = n(960861),
    v = n(803647),
    y = n(70722),
    O = n(981631);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
let T = (0, i.debounce)(l.xc, 1000),
    N = {
        init() {
            g.Z.init(),
                b.ZP.initializeIfNeeded(),
                a.Z.subscribe('MEDIA_ENGINE_VIDEO_STATE_CHANGED', (e) => {
                    let { videoState: t } = e,
                        n = f.Z.getCurrentUserActiveStream();
                    if (null != n) {
                        let e = t === O.FQ1.PAUSED;
                        (0, l.tK)(n, e);
                    }
                }),
                a.Z.subscribe('STREAM_DELETE', (e) => {
                    e.reason === O.si2.STREAM_FULL &&
                        ((0, c.kr)(c.u.STREAM_FULL, (0, u.J)(e.streamKey)),
                        (0, l.aP)(e.streamKey, !1),
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('63757').then(n.bind(n, 309690));
                            return (t) => (0, r.jsx)(e, S({}, t));
                        }));
                }),
                a.Z.subscribe('STREAM_WATCH', (e) => {
                    let { streamKey: t, allowMultiple: n } = e;
                    if (n) return;
                    let r = (0, E.my)(t);
                    f.Z.getAllActiveStreams().forEach((e) => {
                        e.ownerId !== r.ownerId && e.ownerId !== _.default.getId() && (e.ownerId === _.default.getId() && s.Z.setGoLiveSource(null), (0, l.aP)((0, E.V9)(e), !1));
                    });
                }),
                a.Z.subscribe('VOICE_STATE_UPDATES', (e) => {
                    let { voiceStates: t } = e;
                    t.forEach((e) => {
                        let { userId: t } = e;
                        if (t !== _.default.getId()) return;
                        let n = f.Z.getAllActiveStreams(),
                            r = h.Z.getChannelId();
                        n.forEach((e) => {
                            e.channelId !== r && (0, v.Z)(e, !1);
                        });
                    });
                }),
                a.Z.subscribe('STREAM_CREATE', (e) => {
                    var t;
                    let { streamKey: n } = e,
                        { ownerId: r, guildId: i } = (0, E.my)(n);
                    if (null == i || null == r || r !== (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
                    let o = p.Z.getMemberCount(i);
                    null != o && !(o < 2) && !(o > y.tB) && d.eo.getSetting() && T(n);
                });
        }
    };
