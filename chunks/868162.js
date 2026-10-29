n.d(t, { A: () => S, x: () => N });
var i = n(435558),
    s = n.n(i),
    r = n(17928),
    l = n(73153),
    a = n(827343),
    o = n(617617),
    c = n(999926),
    d = n(763827),
    u = n(723702),
    h = n(792205),
    C = n(731854);
let A = { ignoredDevices: {} },
    g = A,
    E = !1,
    p = {},
    _ = {},
    f = {},
    m = { id: null, justChanged: !1 },
    T = { id: null, justChanged: !1 },
    v = /\((.+)\)\s*$/;
function N(e) {
    if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
        let t = e.name.match(v);
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
function I() {
    let e = !s().isEmpty(f);
    return (e && (f = {}), e);
}
class O extends r.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        (this.waitFor(c.Ay, o.A, d.A), (g = e ?? A));
    }
    getUserAgnosticState() {
        return g;
    }
    get initialized() {
        return E;
    }
    get lastDeviceConnected() {
        return f;
    }
    get inputDevices() {
        return p;
    }
    get lastInputSystemDevice() {
        return m;
    }
    get outputDevices() {
        return _;
    }
    get lastOutputSystemDevice() {
        return T;
    }
}
let S = new O(l.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        ((m.justChanged = !1),
            t.forEach((e) => {
                if (e.id === C.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== m.id && (m.justChanged = !0), (m.id = t));
                    return;
                }
                i[N(e)] = e.id;
            }));
        let r = {};
        if (
            ((T.justChanged = !1),
            n.forEach((e) => {
                if (e.id === C.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== T.id && (T.justChanged = !0), (T.id = t));
                    return;
                }
                r[N(e)] = e.id;
            }),
            !E)
        ) {
            ((p = i), (_ = r), (E = !0));
            return;
        }
        let l = Object.keys(p),
            a = Object.keys(i),
            o = Object.keys(_),
            c = Object.keys(r),
            u = s().difference(l, a),
            A = s().difference(o, c),
            g = s().difference(a, l),
            v = s().difference(c, o);
        return (
            (u.length > 0 || A.length > 0) && (f = {}),
            d.A.isConnected() &&
                (g.forEach((e) => {
                    f[e] = x(f[e], e, h.E.INPUT);
                }),
                v.forEach((e) => {
                    f[e] = x(f[e], e, h.E.OUTPUT);
                })),
            !(s().isEqual(l, a) && s().isEqual(o, c)) && ((p = i), (_ = r), !0)
        );
    },
    RTC_CONNECTION_STATE: function () {
        let e = d.A.isDisconnected() && !s().isEmpty(f);
        return (e && (f = {}), e);
    },
    AUDIO_SET_INPUT_DEVICE: I,
    AUDIO_SET_OUTPUT_DEVICE: I,
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === h.f.INPUT || n === h.f.INPUT_AND_OUTPUT) {
            let e = p[t];
            null != e && a.default.setInputDevice(e, { location: i });
        }
        if (n === h.f.OUTPUT || n === h.f.INPUT_AND_OUTPUT) {
            let e = _[t];
            null != e && a.default.setOutputDevice(e, { location: i });
        }
        f = {};
    },
    CONNECTED_DEVICE_DONT_SWITCH: function () {
        f = {};
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        ((g.ignoredDevices[t] = !0), (f = {}));
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function (e) {
        let { neverShowModal: t } = e;
        (t && (f = {}), (g.neverShowModal = t));
    },
});
