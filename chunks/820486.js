n.d(t, {
    X: function () {
        return T;
    }
});
var i,
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    s = n(570140),
    o = n(846027),
    c = n(581883),
    d = n(358085),
    u = n(131951),
    h = n(981631),
    m = n(65154);
function p(e, t, n) {
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
    f = g,
    _ = !1,
    E = {},
    I = {},
    C = {},
    v = {
        id: null,
        justChanged: !1
    },
    N = {
        id: null,
        justChanged: !1
    },
    S = /\(([^)]+)\)/;
function T(e) {
    if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
        let t = e.name.match(S);
        if (null != t) return t[1];
    }
    return e.name;
}
function b(e, t, n) {
    return null == e || e.displayName !== t
        ? {
              displayName: t,
              type: n
          }
        : (e.type === h.QyF.INPUT && n === h.QyF.OUTPUT) || (e.type === h.QyF.OUTPUT && n === h.QyF.INPUT)
          ? {
                displayName: t,
                type: h.QyF.INPUT_AND_OUTPUT
            }
          : e;
}
class A extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z, c.Z), (f = null != e ? e : g);
    }
    getUserAgnosticState() {
        return f;
    }
    get initialized() {
        return _;
    }
    get lastDeviceConnected() {
        return C;
    }
    get inputDevices() {
        return E;
    }
    get lastInputSystemDevice() {
        return v;
    }
    get outputDevices() {
        return I;
    }
    get lastOutputSystemDevice() {
        return N;
    }
}
p(A, 'displayName', 'ConnectedDeviceStore'),
    p(A, 'persistKey', 'ConnectedDeviceStore'),
    (t.Z = new A(s.Z, {
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n } = e,
                i = {};
            (v.justChanged = !1),
                t.forEach((e) => {
                    if (((i[T(e)] = e.id), e.id === m.w5)) {
                        var t;
                        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                        n !== v.id && (v.justChanged = !0), (v.id = n);
                    }
                });
            let r = {};
            if (
                ((N.justChanged = !1),
                n.forEach((e) => {
                    if (((r[T(e)] = e.id), e.id === m.w5)) {
                        var t;
                        let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                        n !== N.id && (N.justChanged = !0), (N.id = n);
                    }
                }),
                !_)
            ) {
                (E = i), (I = r), (_ = !0);
                return;
            }
            let a = Object.keys(E),
                s = Object.keys(i),
                o = Object.keys(I),
                c = Object.keys(r),
                d = l().difference(a, s),
                u = l().difference(o, c);
            return (
                d.length > 0 || u.length > 0
                    ? (C = {})
                    : (l()
                          .difference(s, a)
                          .forEach((e) => {
                              C[e] = b(C[e], e, h.QyF.INPUT);
                          }),
                      l()
                          .difference(c, o)
                          .forEach((e) => {
                              C[e] = b(C[e], e, h.QyF.OUTPUT);
                          })),
                !(l().isEqual(a, s) && l().isEqual(o, c)) && ((E = i), (I = r), !0)
            );
        },
        CONNECTED_DEVICE_SET: function (e) {
            let { displayName: t, connectedDevicePreference: n, location: i } = e;
            !(function (e, t, n) {
                if (t === h.aVf.INPUT || t === h.aVf.INPUT_AND_OUTPUT) {
                    let t = E[e];
                    null != t && s.Z.wait(() => o.Z.setInputDevice(t, { location: n }));
                }
                if (t === h.aVf.OUTPUT || t === h.aVf.INPUT_AND_OUTPUT) {
                    let t = I[e];
                    s.Z.wait(() => o.Z.setOutputDevice(t, { location: n }));
                }
            })(t, n, i),
                delete C[t];
        },
        CONNECTED_DEVICE_IGNORE: function (e) {
            let { displayName: t } = e;
            delete C[t];
        },
        CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
            (C = {}), (f = { neverShowModal: !0 });
        }
    }));
