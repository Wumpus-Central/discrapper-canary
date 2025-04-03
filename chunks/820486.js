n.d(t, {
    X: () => v,
    Z: () => T
}),
    n(301563);
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(570140),
    s = n(846027),
    c = n(581883),
    u = n(358085),
    d = n(131951),
    p = n(981631),
    h = n(65154);
function f(e, t, n) {
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
let g = {},
    m = g,
    b = !1,
    _ = {},
    E = {},
    O = {},
    N = {
        id: null,
        justChanged: !1
    },
    y = {
        id: null,
        justChanged: !1
    },
    I = /\(([^)]+)\)/;
function v(e) {
    if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
        let t = e.name.match(I);
        if (null != t) return t[1];
    }
    return e.name;
}
function C(e, t, n) {
    return null == e || e.displayName !== t
        ? {
              displayName: t,
              type: n
          }
        : (e.type === p.QyF.INPUT && n === p.QyF.OUTPUT) || (e.type === p.QyF.OUTPUT && n === p.QyF.INPUT)
          ? {
                displayName: t,
                type: p.QyF.INPUT_AND_OUTPUT
            }
          : e;
}
class S extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(d.Z, c.Z), (m = null != e ? e : g);
    }
    getUserAgnosticState() {
        return m;
    }
    get initialized() {
        return b;
    }
    get lastDeviceConnected() {
        return O;
    }
    get inputDevices() {
        return _;
    }
    get lastInputSystemDevice() {
        return N;
    }
    get outputDevices() {
        return E;
    }
    get lastOutputSystemDevice() {
        return y;
    }
}
f(S, 'displayName', 'ConnectedDeviceStore'), f(S, 'persistKey', 'ConnectedDeviceStore');
let T = new S(o.Z, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            r = {};
        (N.justChanged = !1),
            t.forEach((e) => {
                if (((r[v(e)] = e.id), e.id === h.w5)) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    n !== N.id && (N.justChanged = !0), (N.id = n);
                }
            });
        let i = {};
        if (
            ((y.justChanged = !1),
            n.forEach((e) => {
                if (((i[v(e)] = e.id), e.id === h.w5)) {
                    var t;
                    let n = null != (t = e.originalId) ? t : e.originalName;
                    n !== y.id && (y.justChanged = !0), (y.id = n);
                }
            }),
            !b)
        ) {
            (_ = r), (E = i), (b = !0);
            return;
        }
        let a = Object.keys(_),
            o = Object.keys(r),
            s = Object.keys(E),
            c = Object.keys(i),
            u = l().difference(a, o),
            d = l().difference(s, c);
        return (
            u.length > 0 || d.length > 0
                ? (O = {})
                : (l()
                      .difference(o, a)
                      .forEach((e) => {
                          O[e] = C(O[e], e, p.QyF.INPUT);
                      }),
                  l()
                      .difference(c, s)
                      .forEach((e) => {
                          O[e] = C(O[e], e, p.QyF.OUTPUT);
                      })),
            !(l().isEqual(a, o) && l().isEqual(s, c)) && ((_ = r), (E = i), !0)
        );
    },
    CONNECTED_DEVICE_SET: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: r } = e;
        if (n === p.aVf.INPUT || n === p.aVf.INPUT_AND_OUTPUT) {
            let e = _[t];
            null != e && o.Z.wait(() => s.Z.setInputDevice(e, { location: r }));
        }
        if (n === p.aVf.OUTPUT || n === p.aVf.INPUT_AND_OUTPUT) {
            let e = E[t];
            o.Z.wait(() => s.Z.setOutputDevice(e, { location: r }));
        }
        delete O[t];
    },
    CONNECTED_DEVICE_IGNORE: function (e) {
        let { displayName: t } = e;
        delete O[t];
    },
    CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
        (O = {}), (m = { neverShowModal: !0 });
    }
});
