let r;
n.d(t, {
    UB: () => D,
    Uc: () => I,
    ZP: () => H,
    kE: () => L
});
var i,
    o = n(192379),
    a = n(442837),
    s = n(570140),
    l = n(872810),
    c = n(998594),
    u = n(592125),
    d = n(430824),
    f = n(131951),
    _ = n(496675),
    p = n(944486),
    h = n(102172),
    m = n(74299),
    g = n(692417),
    E = n(783443),
    b = n(299570),
    y = n(65154),
    v = n(388032);
function O(e, t, n) {
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
var I = (function (e) {
    return (e[(e.Present = 0)] = 'Present'), (e[(e.Update = 1)] = 'Update'), (e[(e.Cancel = 2)] = 'Cancel'), (e[(e.Error = 3)] = 'Error'), e;
})({});
let S = !1,
    T = 0,
    N = 0,
    A = !1,
    C = {};
function R() {
    return f.Z.supports(y.AN.NATIVE_SCREENSHARE_PICKER);
}
function P() {
    return f.Z.getUseSystemScreensharePicker();
}
function w() {
    let e = P() && (N > 0 || (S && 0 === T));
    if (e !== A) {
        var t, n;
        (A = e), null == (n = f.Z.getMediaEngine()) || null == (t = n.setNativeDesktopVideoSourcePickerActive) || t.call(n, A);
    }
}
function D() {
    return (0, o.useEffect)(
        () => (
            T++,
            w(),
            () => {
                0 == --T && w();
            }
        ),
        []
    );
}
function L() {
    return (0, o.useEffect)(
        () => (
            N++,
            w(),
            () => {
                --N, w();
            }
        ),
        []
    );
}
function x() {
    let e = u.Z.getChannel(p.Z.getVoiceChannelId());
    return (S = null != e && (0, m.Z)(f.Z) && (0, h.JL)(e, d.Z, _.Z, !1)), w(), !1;
}
function M() {
    return null != r ? (0, E.Z)(r) : null;
}
function k() {
    return null != r ? (0, g.Z)(r) : null;
}
function j() {
    var e;
    return {
        sourceId: 'prepicked:0',
        nativePickerStyleUsed: C.lastPresentedPickerStyle,
        sourceName: null != (e = M()) ? e : v.NW.string(v.t['KKcy9/'])
    };
}
class U extends (i = a.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, p.Z, u.Z, d.Z, _.Z], x), c.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, w), x();
    }
    supported() {
        return R();
    }
    enabled() {
        return P();
    }
    releasePickerStream() {
        (0, b.t)();
    }
    getPickerState() {
        return C;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return M();
    }
    getLastPickedContentPID() {
        return k();
    }
    getStreamStartOptions() {
        return j();
    }
}
function G(e) {
    let { existing: t, content: n } = e;
    if (((C = { lastPickerAction: 1 }), (r = n), 0 === T && !t)) {
        let e = u.Z.getChannel(p.Z.getVoiceChannelId());
        null != e && (0, m.Z)(f.Z) && (0, h.JL)(e, d.Z, _.Z, !1) && (0, l.WH)(e.getGuildId(), e.id, j());
    }
}
function B() {
    C = { lastPickerAction: 2 };
}
function F(e) {
    let { error: t } = e;
    C = {
        lastPickerAction: 3,
        lastPickerError: t
    };
}
function V(e) {
    let { style: t } = e;
    C = {
        lastPickerAction: 0,
        lastPresentedPickerStyle: t
    };
}
function Z() {
    C = {};
}
O(U, 'displayName', 'NativeScreenSharePickerStore');
let H = new U(s.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: B,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: F,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: V,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: Z
});
