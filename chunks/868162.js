n.d(t, { A: () => x, x: () => N });
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    l = n(73153),
    s = n(827343),
    o = n(617617),
    d = n(430452),
    c = n(723702),
    u = n(792205),
    A = n(731854);
let h = { ignoredDevices: {} },
    _ = h,
    m = !1,
    p = {},
    g = {},
    E = {},
    I = { id: null, justChanged: !1 },
    f = { id: null, justChanged: !1 },
    C = /\(([^)]+)\)/;
function N(e) {
    if ((0, c.getPlatform)() === c.PlatformTypes.WINDOWS) {
        let t = e.name.match(C);
        if (null != t) return t[1];
    }
    return e.name;
}
function T(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === u.E.INPUT && n === u.E.OUTPUT) || (e.type === u.E.OUTPUT && n === u.E.INPUT)
          ? { displayName: t, type: u.E.INPUT_AND_OUTPUT }
          : e;
}
class S extends a.Ay.DeviceSettingsStore {
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
        return m;
    }
    get lastDeviceConnected() {
        return E;
    }
    get inputDevices() {
        return p;
    }
    get lastInputSystemDevice() {
        return I;
    }
    get outputDevices() {
        return g;
    }
    get lastOutputSystemDevice() {
        return f;
    }
}
let x = new S(l.h, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        (I.justChanged = !1),
            t.forEach((e) => {
                if (((i[N(e)] = e.id), e.id === A.dx)) {
                    let t = e.originalId ?? e.originalName;
                    t !== I.id && (I.justChanged = !0), (I.id = t);
                }
            });
        let a = {};
        if (
            ((f.justChanged = !1),
            n.forEach((e) => {
                if (((a[N(e)] = e.id), e.id === A.dx)) {
                    let t = e.originalId ?? e.originalName;
                    t !== f.id && (f.justChanged = !0), (f.id = t);
                }
            }),
            !m)
        ) {
            (p = i), (g = a), (m = !0);
            return;
        }
        let l = Object.keys(p),
            s = Object.keys(i),
            o = Object.keys(g),
            d = Object.keys(a),
            c = r().difference(l, s),
            h = r().difference(o, d);
        return (
            c.length > 0 || h.length > 0
                ? (E = {})
                : (r()
                      .difference(s, l)
                      .forEach((e) => {
                          E[e] = T(E[e], e, u.E.INPUT);
                      }),
                  r()
                      .difference(d, o)
                      .forEach((e) => {
                          E[e] = T(E[e], e, u.E.OUTPUT);
                      })),
            !(r().isEqual(l, s) && r().isEqual(o, d)) && ((p = i), (g = a), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === u.f.INPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = p[t];
            null != e && l.h.wait(() => s.A.setInputDevice(e, { location: i }));
        }
        if (n === u.f.OUTPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = g[t];
            l.h.wait(() => s.A.setOutputDevice(e, { location: i }));
        }
        delete E[t];
    },
    CONNECTED_DEVICE_DONT_SWITCH: function (e) {
        let { displayName: t } = e;
        delete E[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        (_.ignoredDevices[t] = !0), delete E[t];
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        (E = {}), (_.neverShowModal = !0);
    },
});
