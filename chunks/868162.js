n.d(t, { A: () => x, x: () => T });
var i = n(735438),
    l = n.n(i),
    r = n(311907),
    a = n(73153),
    s = n(827343),
    o = n(617617),
    d = n(430452),
    c = n(723702),
    u = n(792205),
    A = n(731854);
let h = { ignoredDevices: {} },
    _ = h,
    m = !1,
    g = {},
    p = {},
    E = {},
    I = { id: null, justChanged: !1 },
    f = { id: null, justChanged: !1 },
    C = /\((.+)\)\s*$/;
function T(e) {
    if ((0, c.getPlatform)() === c.PlatformTypes.WINDOWS) {
        let t = e.name.match(C);
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
class S extends r.Ay.DeviceSettingsStore {
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
        return g;
    }
    get lastInputSystemDevice() {
        return I;
    }
    get outputDevices() {
        return p;
    }
    get lastOutputSystemDevice() {
        return f;
    }
}
let x = new S(a.h, {
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
        let r = {};
        if (
            ((f.justChanged = !1),
            n.forEach((e) => {
                if (((r[T(e)] = e.id), e.id === A.dx)) {
                    let t = e.originalId ?? e.originalName;
                    t !== f.id && (f.justChanged = !0), (f.id = t);
                }
            }),
            !m)
        ) {
            (g = i), (p = r), (m = !0);
            return;
        }
        let a = Object.keys(g),
            s = Object.keys(i),
            o = Object.keys(p),
            d = Object.keys(r),
            c = l().difference(a, s),
            h = l().difference(o, d);
        return (
            c.length > 0 || h.length > 0
                ? (E = {})
                : (l()
                      .difference(s, a)
                      .forEach((e) => {
                          E[e] = N(E[e], e, u.E.INPUT);
                      }),
                  l()
                      .difference(d, o)
                      .forEach((e) => {
                          E[e] = N(E[e], e, u.E.OUTPUT);
                      })),
            !(l().isEqual(a, s) && l().isEqual(o, d)) && ((g = i), (p = r), !0)
        );
    },
    CONNECTED_DEVICE_SWITCH: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: i } = e;
        if (n === u.f.INPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = g[t];
            null != e && a.h.wait(() => s.A.setInputDevice(e, { location: i }));
        }
        if (n === u.f.OUTPUT || n === u.f.INPUT_AND_OUTPUT) {
            let e = p[t];
            a.h.wait(() => s.A.setOutputDevice(e, { location: i }));
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
