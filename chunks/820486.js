n.d(t, {
    X: () => I,
    Z: () => T
}),
    n(301563);
var r,
    i = n(392711),
    l = n.n(i),
    o = n(442837),
    a = n(570140),
    s = n(846027),
    c = n(581883),
    u = n(358085),
    d = n(131951),
    p = n(981631),
    h = n(65154);
function g(e, t, n) {
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
let f = {},
    m = f,
    b = !1,
    _ = {},
    E = {},
    O = {},
    N = {
        id: null,
        justChanged: !1
    },
    v = {
        id: null,
        justChanged: !1
    },
    y = /\(([^)]+)\)/;
function I(e) {
    if ((0, u.getPlatform)() === u.PlatformTypes.WINDOWS) {
        let t = e.name.match(y);
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
class S extends (r = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(d.Z, c.Z), (m = null != e ? e : f);
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
        return v;
    }
}
g(S, 'displayName', 'ConnectedDeviceStore'), g(S, 'persistKey', 'ConnectedDeviceStore');
let T = new S(a.Z, {
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n } = e,
            r = {};
        (N.justChanged = !1),
            t.forEach((e) => {
                if (((r[I(e)] = e.id), e.id === h.w5)) {
                    var t;
                    let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                    n !== N.id && (N.justChanged = !0), (N.id = n);
                }
            });
        let i = {};
        if (
            ((v.justChanged = !1),
            n.forEach((e) => {
                if (((i[I(e)] = e.id), e.id === h.w5)) {
                    var t;
                    let n = null !== (t = e.originalId) && void 0 !== t ? t : e.originalName;
                    n !== v.id && (v.justChanged = !0), (v.id = n);
                }
            }),
            !b)
        ) {
            (_ = r), (E = i), (b = !0);
            return;
        }
        let o = Object.keys(_),
            a = Object.keys(r),
            s = Object.keys(E),
            c = Object.keys(i),
            u = l().difference(o, a),
            d = l().difference(s, c);
        return (
            u.length > 0 || d.length > 0
                ? (O = {})
                : (l()
                      .difference(a, o)
                      .forEach((e) => {
                          O[e] = C(O[e], e, p.QyF.INPUT);
                      }),
                  l()
                      .difference(c, s)
                      .forEach((e) => {
                          O[e] = C(O[e], e, p.QyF.OUTPUT);
                      })),
            !(l().isEqual(o, a) && l().isEqual(s, c)) && ((_ = r), (E = i), !0)
        );
    },
    CONNECTED_DEVICE_SET: function (e) {
        let { displayName: t, connectedDevicePreference: n, location: r } = e;
        !(function (e, t, n) {
            if (t === p.aVf.INPUT || t === p.aVf.INPUT_AND_OUTPUT) {
                let t = _[e];
                null != t && a.Z.wait(() => s.Z.setInputDevice(t, { location: n }));
            }
            if (t === p.aVf.OUTPUT || t === p.aVf.INPUT_AND_OUTPUT) {
                let t = E[e];
                a.Z.wait(() => s.Z.setOutputDevice(t, { location: n }));
            }
        })(t, n, r),
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
