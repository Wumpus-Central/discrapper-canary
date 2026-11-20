var i = n(435558),
    r = n.n(i),
    s = n(855986),
    l = n(73153),
    a = n(827343),
    o = n(617617),
    c = n(988468),
    d = n(495867),
    u = n(723702),
    h = n(792205),
    C = n(731854);
let A = { ignoredDevices: {} },
    E = A,
    _ = !1,
    g = {},
    p = {},
    m = {},
    T = { id: null, justChanged: !1 },
    N = { id: null, justChanged: !1 },
    f = /\((.+)\)\s*$/;
function I(e) {
    if ((0, u.uo)() === u.fg.WINDOWS) {
        let t = e.name.match(f);
        if (null != t) return t[1];
    }
    return e.name;
}
function S(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === h.E.INPUT && n === h.E.OUTPUT) || (e.type === h.E.OUTPUT && n === h.E.INPUT)
          ? { displayName: t, type: h.E.INPUT_AND_OUTPUT }
          : e;
}
function x() {
    let e = !r().isEmpty(m);
    return (e && (m = {}), e);
}
class O extends s.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        (this.waitFor(c.Ay, o.A, d.A), (E = e ?? A));
    }
    getUserAgnosticState() {
        return E;
    }
    get initialized() {
        return _;
    }
    get lastDeviceConnected() {
        return m;
    }
    get inputDevices() {
        return g;
    }
    get lastInputSystemDevice() {
        return T;
    }
    get outputDevices() {
        return p;
    }
    get lastOutputSystemDevice() {
        return N;
    }
}
let v = new O(l.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        ((T.justChanged = !1),
            t.forEach((e) => {
                if (e.id === C.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== T.id && (T.justChanged = !0), (T.id = t));
                    return;
                }
                i[I(e)] = e.id;
            }));
        let s = {};
        if (
            ((N.justChanged = !1),
            n.forEach((e) => {
                if (e.id === C.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== N.id && (N.justChanged = !0), (N.id = t));
                    return;
                }
                s[I(e)] = e.id;
            }),
            !_)
        ) {
            ((g = i), (p = s), (_ = !0));
            return;
        }
        let l = Object.keys(g),
            a = Object.keys(i),
            o = Object.keys(p),
            c = Object.keys(s),
            u = r().difference(l, a),
            A = r().difference(o, c),
            E = r().difference(a, l),
            f = r().difference(c, o);
        return (
            (u.length > 0 || A.length > 0) && (m = {}),
            d.A.isConnected() &&
                (E.forEach((e) => {
                    m[e] = S(m[e], e, h.E.INPUT);
                }),
                f.forEach((e) => {
                    m[e] = S(m[e], e, h.E.OUTPUT);
                })),
            !(r().isEqual(l, a) && r().isEqual(o, c)) && ((g = i), (p = s), !0)
        );
    },
    RTC_CONNECTION_STATE: function () {
        let e = d.A.isDisconnected() && !r().isEmpty(m);
        return (e && (m = {}), e);
    },
    AUDIO_SET_INPUT_DEVICE: x,
    AUDIO_SET_OUTPUT_DEVICE: x,
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === h.f.INPUT || n === h.f.INPUT_AND_OUTPUT) {
            let e = g[t];
            null != e && a.default.setInputDevice(e, { location: i });
        }
        if (n === h.f.OUTPUT || n === h.f.INPUT_AND_OUTPUT) {
            let e = p[t];
            null != e && a.default.setOutputDevice(e, { location: i });
        }
        m = {};
    },
    CONNECTED_DEVICE_DONT_SWITCH: function () {
        m = {};
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        ((E.ignoredDevices[t] = !0), (m = {}));
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function (e) {
        let { neverShowModal: t } = e;
        (t && (m = {}), (E.neverShowModal = t));
    },
});
n.d(t, {}, { A: v, x: I });
