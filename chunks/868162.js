"use strict";
n.d(t, { A: () => O, x: () => S });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(827343),
    o = n(617617),
    d = n(45630),
    c = n(723702),
    u = n(792205),
    _ = n(731854);
let E = { ignoredDevices: {} },
    A = E,
    h = !1,
    I = {},
    f = {},
    p = {},
    T = { id: null, justChanged: !1 },
    m = { id: null, justChanged: !1 },
    g = /\((.+)\)\s*$/;
function S(e) {
    if ((0, c.getPlatform)() === c.PlatformTypes.WINDOWS) {
        let t = e.name.match(g);
        if (null != t) return t[1];
    }
    return e.name;
}
function N(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === u.E.INPUT && n === u.E.OUTPUT) || (e.type === u.E.OUTPUT && n === u.E.INPUT)
          ? { displayName: t, type: u.E.INPUT_AND_OUTPUT }
          : e;
}
class C extends a.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        this.waitFor(d.Ay, o.A), (A = e ?? E);
    }
    getUserAgnosticState() {
        return A;
    }
    get initialized() {
        return h;
    }
    get lastDeviceConnected() {
        return p;
    }
    get inputDevices() {
        return I;
    }
    get lastInputSystemDevice() {
        return T;
    }
    get outputDevices() {
        return f;
    }
    get lastOutputSystemDevice() {
        return m;
    }
}
let O = new C(s.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        (T.justChanged = !1),
            t.forEach((e) => {
                if (e.id === _.dx) {
                    let t = e.originalId ?? e.originalName;
                    t !== T.id && (T.justChanged = !0), (T.id = t);
                    return;
                }
                i[S(e)] = e.id;
            });
        let a = {};
        if (
            ((m.justChanged = !1),
            n.forEach((e) => {
                if (e.id === _.dx) {
                    let t = e.originalId ?? e.originalName;
                    t !== m.id && (m.justChanged = !0), (m.id = t);
                    return;
                }
                a[S(e)] = e.id;
            }),
            !h)
        ) {
            (I = i), (f = a), (h = !0);
            return;
        }
        let s = Object.keys(I),
            l = Object.keys(i),
            o = Object.keys(f),
            d = Object.keys(a),
            c = r().difference(s, l),
            E = r().difference(o, d),
            A = r().difference(l, s),
            g = r().difference(d, o);
        return (
            (c.length > 0 || E.length > 0) && (p = {}),
            A.forEach((e) => {
                p[e] = N(p[e], e, u.E.INPUT);
            }),
            g.forEach((e) => {
                p[e] = N(p[e], e, u.E.OUTPUT);
            }),
            !(r().isEqual(s, l) && r().isEqual(o, d)) && ((I = i), (f = a), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === u.f.INPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = I[t];
            null != e && s.h.wait(() => l.A.setInputDevice(e, { location: i }));
        }
        if (n === u.f.OUTPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = f[t];
            s.h.wait(() => l.A.setOutputDevice(e, { location: i }));
        }
        delete p[t];
    },
    CONNECTED_DEVICE_DONT_SWITCH: function (e) {
        let { displayName: t } = e;
        delete p[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        (A.ignoredDevices[t] = !0), delete p[t];
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        (p = {}), (A.neverShowModal = !0);
    },
});
