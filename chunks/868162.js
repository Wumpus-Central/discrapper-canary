n.d(t, { A: () => O, x: () => T });
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    l = n(73153),
    s = n(827343),
    o = n(617617),
    d = n(430452),
    u = n(723702),
    c = n(792205),
    A = n(731854);
let h = { ignoredDevices: {} },
    _ = h,
    E = !1,
    p = {},
    m = {},
    g = {},
    I = { id: null, justChanged: !1 },
    C = { id: null, justChanged: !1 },
    f = /\((.+)\)\s*$/;
function T(e) {
    if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
        let t = e.name.match(f);
        if (null != t) return t[1];
    }
    return e.name;
}
function S(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === c.E.INPUT && n === c.E.OUTPUT) || (e.type === c.E.OUTPUT && n === c.E.INPUT)
          ? { displayName: t, type: c.E.INPUT_AND_OUTPUT }
          : e;
}
class N extends a.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        this.waitFor(d.Ay, o.A), (_ = e ?? h);
    }
    getUserAgnosticState() {
        return _;
    }
    get initialized() {
        return E;
    }
    get lastDeviceConnected() {
        return g;
    }
    get inputDevices() {
        return p;
    }
    get lastInputSystemDevice() {
        return I;
    }
    get outputDevices() {
        return m;
    }
    get lastOutputSystemDevice() {
        return C;
    }
}
let O = new N(l.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        (I.justChanged = !1),
            t.forEach((e) => {
                if (((i[T(e)] = e.id), e.id === A.dx)) {
                    let t = e.originalId ?? e.originalName;
                    t !== I.id && (I.justChanged = !0), (I.id = t);
                }
            });
        let a = {};
        if (
            ((C.justChanged = !1),
            n.forEach((e) => {
                if (((a[T(e)] = e.id), e.id === A.dx)) {
                    let t = e.originalId ?? e.originalName;
                    t !== C.id && (C.justChanged = !0), (C.id = t);
                }
            }),
            !E)
        ) {
            (p = i), (m = a), (E = !0);
            return;
        }
        let l = Object.keys(p),
            s = Object.keys(i),
            o = Object.keys(m),
            d = Object.keys(a),
            u = r().difference(l, s),
            h = r().difference(o, d);
        return (
            u.length > 0 || h.length > 0
                ? (g = {})
                : (r()
                      .difference(s, l)
                      .forEach((e) => {
                          g[e] = S(g[e], e, c.E.INPUT);
                      }),
                  r()
                      .difference(d, o)
                      .forEach((e) => {
                          g[e] = S(g[e], e, c.E.OUTPUT);
                      })),
            !(r().isEqual(l, s) && r().isEqual(o, d)) && ((p = i), (m = a), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === c.f.INPUT || n === c.f.INPUT_AND_OUTPUT) {
            let e = p[t];
            null != e && l.h.wait(() => s.A.setInputDevice(e, { location: i }));
        }
        if (n === c.f.OUTPUT || n === c.f.INPUT_AND_OUTPUT) {
            let e = m[t];
            l.h.wait(() => s.A.setOutputDevice(e, { location: i }));
        }
        delete g[t];
    },
    CONNECTED_DEVICE_DONT_SWITCH: function (e) {
        let { displayName: t } = e;
        delete g[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        (_.ignoredDevices[t] = !0), delete g[t];
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        (g = {}), (_.neverShowModal = !0);
    },
});
