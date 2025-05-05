let r;
n.d(t, {
    UB: () => w,
    Uc: () => v,
    ZP: () => Z,
    kE: () => D
});
var i,
    a = n(73800),
    o = n(442837),
    s = n(570140),
    l = n(872810),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    f = n(496675),
    _ = n(944486),
    p = n(102172),
    h = n(74299),
    m = n(692417),
    g = n(783443),
    E = n(299570),
    b = n(65154),
    y = n(388032);
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
var v = (function (e) {
    return (e[(e.Present = 0)] = 'Present'), (e[(e.Update = 1)] = 'Update'), (e[(e.Cancel = 2)] = 'Cancel'), (e[(e.Error = 3)] = 'Error'), e;
})({});
let I = !1,
    S = 0,
    T = 0,
    A = !1,
    N = {};
function C() {
    return d.Z.supports(b.AN.NATIVE_SCREENSHARE_PICKER);
}
function R() {
    return d.Z.getUseSystemScreensharePicker();
}
function P() {
    let e = R() && (T > 0 || (I && 0 === S));
    if (e !== A) {
        var t, n;
        (A = e), null == (n = d.Z.getMediaEngine()) || null == (t = n.setNativeDesktopVideoSourcePickerActive) || t.call(n, A);
    }
}
function w() {
    return (0, a.useEffect)(
        () => (
            S++,
            P(),
            () => {
                0 == --S && P();
            }
        ),
        []
    );
}
function D() {
    return (0, a.useEffect)(
        () => (
            T++,
            P(),
            () => {
                --T, P();
            }
        ),
        []
    );
}
function L() {
    let e = c.Z.getChannel(_.Z.getVoiceChannelId());
    return (I = null != e && (0, h.Z)(d.Z) && (0, p.JL)(e, u.Z, f.Z, !1)), P(), !1;
}
function x() {
    return null != r ? (0, g.Z)(r) : null;
}
function M() {
    return null != r ? (0, m.Z)(r) : null;
}
function k() {
    var e;
    return {
        sourceId: 'prepicked:0',
        nativePickerStyleUsed: N.lastPresentedPickerStyle,
        sourceName: null != (e = x()) ? e : y.intl.string(y.t['KKcy9/'])
    };
}
class j extends (i = o.ZP.Store) {
    initialize() {
        this.syncWith([d.Z, _.Z, c.Z, u.Z, f.Z], L), L();
    }
    supported() {
        return C();
    }
    enabled() {
        return R();
    }
    releasePickerStream() {
        (0, E.t)();
    }
    getPickerState() {
        return N;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return x();
    }
    getLastPickedContentPID() {
        return M();
    }
    getStreamStartOptions() {
        return k();
    }
}
function U(e) {
    let { existing: t, content: n } = e;
    if (((N = { lastPickerAction: 1 }), (r = n), 0 === S && !t)) {
        let e = c.Z.getChannel(_.Z.getVoiceChannelId());
        null != e && (0, h.Z)(d.Z) && (0, p.JL)(e, u.Z, f.Z, !1) && (0, l.WH)(e.getGuildId(), e.id, k());
    }
}
function G() {
    N = { lastPickerAction: 2 };
}
function B(e) {
    let { error: t } = e;
    N = {
        lastPickerAction: 3,
        lastPickerError: t
    };
}
function V(e) {
    let { style: t } = e;
    N = {
        lastPickerAction: 0,
        lastPresentedPickerStyle: t
    };
}
function F() {
    N = {};
}
O(j, 'displayName', 'NativeScreenSharePickerStore');
let Z = new j(s.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: U,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: G,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: B,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: V,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: F
});
