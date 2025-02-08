n.d(t, {
    X: () => S,
    Z: () => x
});
var i,
    l = n(392711),
    r = n.n(l),
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
    _ = g,
    f = !1,
    E = {},
    I = {},
    C = {},
    N = {
        id: null,
        justChanged: !1
    },
    v = {
        id: null,
        justChanged: !1
    },
    T = /\(([^)]+)\)/;
function S(e) {
    if ((0, d.getPlatform)() === d.PlatformTypes.WINDOWS) {
        let t = e.name.match(T);
        if (null != t) return t[1];
    }
    return e.name;
}
function Z(e, t, n) {
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
        this.waitFor(u.Z, c.Z), (_ = null != e ? e : g);
    }
    getUserAgnosticState() {
        return _;
    }
    get initialized() {
        return f;
    }
    get lastDeviceConnected() {
        return C;
    }
    get inputDevices() {
        return E;
    }
    get lastInputSystemDevice() {
        return N;
    }
    get outputDevices() {
        return I;
    }
    get lastOutputSystemDevice() {
        return v;
    }
}
p(A, 'displayName', 'ConnectedDeviceStore'), p(A, 'persistKey', 'ConnectedDeviceStore');
let x = new A(s.Z, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            i = {};
        (N.justChanged = !1),
            t.forEach((e) => {
                if (((i[S(e)] = e.id), e.id === m.w5)) {
                    var t;
                    let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                    n !== N.id && (N.justChanged = !0), (N.id = n);
                }
            });
        let l = {};
        if (
            ((v.justChanged = !1),
            n.forEach((e) => {
                if (((l[S(e)] = e.id), e.id === m.w5)) {
                    var t;
                    let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                    n !== v.id && (v.justChanged = !0), (v.id = n);
                }
            }),
            !f)
        ) {
            (E = i), (I = l), (f = !0);
            return;
        }
        let a = Object.keys(E),
            s = Object.keys(i),
            o = Object.keys(I),
            c = Object.keys(l),
            d = r().difference(a, s),
            u = r().difference(o, c);
        return (
            d.length > 0 || u.length > 0
                ? (C = {})
                : (r()
                      .difference(s, a)
                      .forEach((e) => {
                          C[e] = Z(C[e], e, h.QyF.INPUT);
                      }),
                  r()
                      .difference(c, o)
                      .forEach((e) => {
                          C[e] = Z(C[e], e, h.QyF.OUTPUT);
                      })),
            !(r().isEqual(a, s) && r().isEqual(o, c)) && ((E = i), (I = l), !0)
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
        (C = {}), (_ = { neverShowModal: !0 });
    }
});
