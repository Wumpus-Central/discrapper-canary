var i = n(435558),
    r = n.n(i),
    s = n(855986),
    l = n(73153),
    a = n(827343),
    o = n(617617),
    c = n(754712),
    d = n(495867),
    u = n(723702),
    h = n(792205),
    C = n(731854);
let E = { ignoredDevices: {} },
    A = E,
    _ = !1,
    p = {},
    g = {},
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
function x(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === h.E.INPUT && n === h.E.OUTPUT) || (e.type === h.E.OUTPUT && n === h.E.INPUT)
          ? { displayName: t, type: h.E.INPUT_AND_OUTPUT }
          : e;
}
function S() {
    let e = !r().isEmpty(m);
    return (e && (m = {}), e);
}
class O extends s.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        (this.waitFor(c.Ay, o.A, d.A), (A = e ?? E));
    }
    getUserAgnosticState() {
        return A;
    }
    get initialized() {
        return _;
    }
    get lastDeviceConnected() {
        return m;
    }
    get inputDevices() {
        return p;
    }
    get lastInputSystemDevice() {
        return T;
    }
    get outputDevices() {
        return g;
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
            ((p = i), (g = s), (_ = !0));
            return;
        }
        let l = Object.keys(p),
            a = Object.keys(i),
            o = Object.keys(g),
            c = Object.keys(s),
            u = r().difference(l, a),
            E = r().difference(o, c),
            A = r().difference(a, l),
            f = r().difference(c, o);
        return (
            (u.length > 0 || E.length > 0) && (m = {}),
            d.A.isConnected() &&
                (A.forEach((e) => {
                    m[e] = x(m[e], e, h.E.INPUT);
                }),
                f.forEach((e) => {
                    m[e] = x(m[e], e, h.E.OUTPUT);
                })),
            !(r().isEqual(l, a) && r().isEqual(o, c)) && ((p = i), (g = s), !0)
        );
    },
    RTC_CONNECTION_STATE: function () {
        let e = d.A.isDisconnected() && !r().isEmpty(m);
        return (e && (m = {}), e);
    },
    AUDIO_SET_INPUT_DEVICE: S,
    AUDIO_SET_OUTPUT_DEVICE: S,
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === h.f.INPUT || n === h.f.INPUT_AND_OUTPUT) {
            let e = p[t];
            null != e && a.default.setInputDevice(e, { location: i });
        }
        if (n === h.f.OUTPUT || n === h.f.INPUT_AND_OUTPUT) {
            let e = g[t];
            null != e && a.default.setOutputDevice(e, { location: i });
        }
        m = {};
    },
    CONNECTED_DEVICE_DONT_SWITCH: function () {
        m = {};
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        ((A.ignoredDevices[t] = !0), (m = {}));
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function (e) {
        let { neverShowModal: t } = e;
        (t && (m = {}), (A.neverShowModal = t));
    },
});
n.d(t, {}, { A: v, x: I });
