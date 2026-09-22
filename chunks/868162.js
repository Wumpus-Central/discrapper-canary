n.d(t, { A: () => L, x: () => S });
var i = n(435558),
    l = n.n(i),
    r = n(17928),
    s = n(228366),
    a = n(827343),
    o = n(617617),
    d = n(25578),
    c = n(723702),
    u = n(792205),
    A = n(731854);
let h = { ignoredDevices: {} },
    E = h,
    g = !1,
    C = {},
    _ = {},
    I = {},
    T = { id: null, justChanged: !1 },
    p = { id: null, justChanged: !1 },
    N = /\((.+)\)\s*$/;
function S(e) {
    if ((0, c.getPlatform)() === c.PlatformTypes.WINDOWS) {
        let t = e.name.match(N);
        if (null != t) return t[1];
    }
    return e.name;
}
function f(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === u.E.INPUT && n === u.E.OUTPUT) || (e.type === u.E.OUTPUT && n === u.E.INPUT)
          ? { displayName: t, type: u.E.INPUT_AND_OUTPUT }
          : e;
}
class m extends r.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        (this.waitFor(d.Ay, o.A), (E = e ?? h));
    }
    getUserAgnosticState() {
        return E;
    }
    get initialized() {
        return g;
    }
    get lastDeviceConnected() {
        return I;
    }
    get inputDevices() {
        return C;
    }
    get lastInputSystemDevice() {
        return T;
    }
    get outputDevices() {
        return _;
    }
    get lastOutputSystemDevice() {
        return p;
    }
}
let L = new m(s.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        ((T.justChanged = !1),
            t.forEach((e) => {
                if (e.id === A.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== T.id && (T.justChanged = !0), (T.id = t));
                    return;
                }
                i[S(e)] = e.id;
            }));
        let r = {};
        if (
            ((p.justChanged = !1),
            n.forEach((e) => {
                if (e.id === A.dx) {
                    let t = e.originalId ?? e.originalName;
                    (t !== p.id && (p.justChanged = !0), (p.id = t));
                    return;
                }
                r[S(e)] = e.id;
            }),
            !g)
        ) {
            ((C = i), (_ = r), (g = !0));
            return;
        }
        let s = Object.keys(C),
            a = Object.keys(i),
            o = Object.keys(_),
            d = Object.keys(r),
            c = l().difference(s, a),
            h = l().difference(o, d),
            E = l().difference(a, s),
            N = l().difference(d, o);
        return (
            (c.length > 0 || h.length > 0) && (I = {}),
            E.forEach((e) => {
                I[e] = f(I[e], e, u.E.INPUT);
            }),
            N.forEach((e) => {
                I[e] = f(I[e], e, u.E.OUTPUT);
            }),
            !(l().isEqual(s, a) && l().isEqual(o, d)) && ((C = i), (_ = r), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === u.f.INPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = C[t];
            null != e && s.h.wait(() => a.A.setInputDevice(e, { location: i }));
        }
        if (n === u.f.OUTPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = _[t];
            null != e && s.h.wait(() => a.A.setOutputDevice(e, { location: i }));
        }
        I = {};
    },
    CONNECTED_DEVICE_DONT_SWITCH: function () {
        I = {};
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        ((E.ignoredDevices[t] = !0), (I = {}));
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function (e) {
        let { neverShowModal: t } = e;
        (t && (I = {}), (E.neverShowModal = t));
    },
});
