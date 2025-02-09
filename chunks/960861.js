n.d(t, {
    UB: () => R,
    Uc: () => v,
    ZP: () => U,
    kE: () => O
});
var i,
    r = n(192379),
    a = n(442837),
    s = n(570140),
    o = n(872810),
    l = n(998594),
    u = n(592125),
    c = n(430824),
    d = n(131951),
    f = n(496675),
    _ = n(944486),
    p = n(102172),
    h = n(74299),
    m = n(299570),
    g = n(65154);
function E(e, t, n) {
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
var v = (function (e) {
    return (e[(e.Present = 0)] = 'Present'), (e[(e.Update = 1)] = 'Update'), (e[(e.Cancel = 2)] = 'Cancel'), (e[(e.Error = 3)] = 'Error'), e;
})({});
let y = !1,
    I = 0,
    T = 0,
    b = !1,
    S = {};
function A() {
    return d.Z.supports(g.AN.NATIVE_SCREENSHARE_PICKER);
}
function N() {
    return d.Z.getUseSystemScreensharePicker();
}
function C() {
    let e = N() && (T > 0 || (y && 0 === I));
    if (e !== b) {
        var t, n;
        (b = e), null === (n = d.Z.getMediaEngine()) || void 0 === n || null === (t = n.setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, b);
    }
}
function R() {
    return (0, r.useEffect)(
        () => (
            I++,
            C(),
            () => {
                0 == --I && C();
            }
        ),
        []
    );
}
function O() {
    return (0, r.useEffect)(
        () => (
            T++,
            C(),
            () => {
                --T, C();
            }
        ),
        []
    );
}
function D() {
    let e = u.Z.getChannel(_.Z.getVoiceChannelId());
    return (y = null != e && (0, h.Z)(d.Z) && (0, p.JL)(e, c.Z, f.Z, !1)), C(), !1;
}
class L extends (i = a.ZP.Store) {
    initialize() {
        this.syncWith([d.Z, _.Z, u.Z, c.Z, f.Z], D), l.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, C), D();
    }
    supported() {
        return A();
    }
    enabled() {
        return N();
    }
    releasePickerStream() {
        (0, m.t)();
    }
    getPickerState() {
        return S;
    }
}
function x(e) {
    let { existing: t } = e;
    if (((S = { lastPickerAction: 1 }), 0 === I && !t)) {
        let e = u.Z.getChannel(_.Z.getVoiceChannelId());
        null != e &&
            (0, h.Z)(d.Z) &&
            (0, p.JL)(e, c.Z, f.Z, !1) &&
            (0, o.WH)(e.getGuildId(), e.id, {
                sourceId: 'prepicked:0',
                nativePickerStyleUsed: S.lastPresentedPickerStyle
            });
    }
}
function w() {
    S = { lastPickerAction: 2 };
}
function P(e) {
    let { error: t } = e;
    S = {
        lastPickerAction: 3,
        lastPickerError: t
    };
}
function M(e) {
    let { style: t } = e;
    S = {
        lastPickerAction: 0,
        lastPresentedPickerStyle: t
    };
}
function k() {
    S = {};
}
E(L, 'displayName', 'NativeScreenSharePickerStore');
let U = new L(s.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: x,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: w,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: P,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: M,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: k
});
