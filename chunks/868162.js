n.d(t, { A: () => b, x: () => O });
var i = n(435558),
    l = n.n(i),
    r = n(17928),
    s = n(73153),
    a = n(827343),
    o = n(617617),
    d = n(25578),
    c = n(763827),
    u = n(723702),
    A = n(792205),
    E = n(731854);
let h = { ignoredDevices: {} },
    C = h,
    _ = !1,
    g = {},
    I = {},
    T = {},
    p = { id: null, justChanged: !1 },
    N = { id: null, justChanged: !1 },
    S = /\((.+)\)\s*$/;
function O(e) {
    if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
        let t = e.name.match(S);
        if (null != t) return t[1];
    }
    return e.name;
}
function f(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === A.E.INPUT && n === A.E.OUTPUT) || (e.type === A.E.OUTPUT && n === A.E.INPUT)
          ? { displayName: t, type: A.E.INPUT_AND_OUTPUT }
          : e;
}
function L() {
    let e = !l().isEmpty(T);
    return (e && (T = {}), e);
}
class m extends r.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        (this.waitFor(d.Ay, o.A, c.A), (C = e ?? h));
    }
    getUserAgnosticState() {
        return C;
    }
    get initialized() {
        return _;
    }
    get lastDeviceConnected() {
        return T;
    }
    get inputDevices() {
        return g;
    }
    get lastInputSystemDevice() {
        return p;
    }
    get outputDevices() {
        return I;
    }
    get lastOutputSystemDevice() {
        return N;
    }
}
let b = new m(s.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        ((p.justChanged = !1),
            t.forEach((e) => {
                if (e.id === E.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== p.id && (p.justChanged = !0), (p.id = t));
                    return;
                }
                i[O(e)] = e.id;
            }));
        let r = {};
        if (
            ((N.justChanged = !1),
            n.forEach((e) => {
                if (e.id === E.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== N.id && (N.justChanged = !0), (N.id = t));
                    return;
                }
                r[O(e)] = e.id;
            }),
            !_)
        ) {
            ((g = i), (I = r), (_ = !0));
            return;
        }
        let s = Object.keys(g),
            a = Object.keys(i),
            o = Object.keys(I),
            d = Object.keys(r),
            u = l().difference(s, a),
            h = l().difference(o, d),
            C = l().difference(a, s),
            S = l().difference(d, o);
        return (
            (u.length > 0 || h.length > 0) && (T = {}),
            c.A.isConnected() &&
                (C.forEach((e) => {
                    T[e] = f(T[e], e, A.E.INPUT);
                }),
                S.forEach((e) => {
                    T[e] = f(T[e], e, A.E.OUTPUT);
                })),
            !(l().isEqual(s, a) && l().isEqual(o, d)) && ((g = i), (I = r), !0)
        );
    },
    RTC_CONNECTION_STATE: function () {
        let e = c.A.isDisconnected() && !l().isEmpty(T);
        return (e && (T = {}), e);
    },
    AUDIO_SET_INPUT_DEVICE: L,
    AUDIO_SET_OUTPUT_DEVICE: L,
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === A.f.INPUT || n === A.f.INPUT_AND_OUTPUT) {
            let e = g[t];
            null != e && s.h.wait(() => a.A.setInputDevice(e, { location: i }));
        }
        if (n === A.f.OUTPUT || n === A.f.INPUT_AND_OUTPUT) {
            let e = I[t];
            null != e && s.h.wait(() => a.A.setOutputDevice(e, { location: i }));
        }
        T = {};
    },
    CONNECTED_DEVICE_DONT_SWITCH: function () {
        T = {};
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        ((C.ignoredDevices[t] = !0), (T = {}));
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function (e) {
        let { neverShowModal: t } = e;
        (t && (T = {}), (C.neverShowModal = t));
    },
});
