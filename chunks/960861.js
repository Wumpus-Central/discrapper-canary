let r;
n.d(t, {
    UB: () => w,
    Uc: () => I,
    ZP: () => H,
    kE: () => x,
});
var i,
    a = n(647438),
    o = n(442837),
    s = n(570140),
    l = n(872810),
    c = n(361291),
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
    O = n(388032);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var I = (function (e) {
    return (
        (e[(e.Present = 0)] = "Present"),
        (e[(e.Update = 1)] = "Update"),
        (e[(e.Cancel = 2)] = "Cancel"),
        (e[(e.Error = 3)] = "Error"),
        e
    );
})({});
let T = !1,
    S = 0,
    A = 0,
    C = !1,
    N = {};
function R() {
    return f.Z.supports(y.AN.NATIVE_SCREENSHARE_PICKER);
}
function P() {
    return f.Z.getUseSystemScreensharePicker();
}
function D() {
    let e = P() && (A > 0 || (T && 0 === S));
    if (e !== C) {
        var t, n;
        (C = e),
            null == (n = f.Z.getMediaEngine()) ||
                null == (t = n.setNativeDesktopVideoSourcePickerActive) ||
                t.call(n, C);
    }
}
function w() {
    return (0, a.useEffect)(
        () => (
            S++,
            D(),
            () => {
                0 == --S && D();
            }
        ),
        [],
    );
}
function x() {
    return (0, a.useEffect)(
        () => (
            A++,
            D(),
            () => {
                --A, D();
            }
        ),
        [],
    );
}
function L() {
    let e = u.Z.getChannel(p.Z.getVoiceChannelId());
    return (T = null != e && (0, m.Z)(f.Z) && (0, h.JL)(e, d.Z, _.Z, !1)), D(), !1;
}
function M() {
    return null != r ? (0, E.Z)(r) : null;
}
function j() {
    return null != r ? (0, g.Z)(r) : null;
}
function k() {
    var e;
    let { soundshareEnabled: t } = c.Z.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: N.lastPresentedPickerStyle,
        sourceName: null != (e = M()) ? e : O.intl.string(O.t.KKcy95),
        sound: t,
    };
}
class U extends (i = o.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, p.Z, u.Z, d.Z, _.Z], L), L();
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
        return N;
    }
    getLastPickedContent() {
        return r;
    }
    getLastPickedContentTitle() {
        return M();
    }
    getLastPickedContentPID() {
        return j();
    }
    getStreamStartOptions() {
        return k();
    }
}
function G(e) {
    let { existing: t, content: n } = e;
    if (((N = { lastPickerAction: 1 }), (r = n), 0 === S && !t)) {
        let e = u.Z.getChannel(p.Z.getVoiceChannelId());
        null != e && (0, m.Z)(f.Z) && (0, h.JL)(e, d.Z, _.Z, !1) && (0, l.WH)(e.getGuildId(), e.id, k());
    }
}
function B() {
    N = { lastPickerAction: 2 };
}
function Z(e) {
    let { error: t } = e;
    N = {
        lastPickerAction: 3,
        lastPickerError: t,
    };
}
function F(e) {
    let { style: t } = e;
    N = {
        lastPickerAction: 0,
        lastPresentedPickerStyle: t,
    };
}
function V() {
    N = {};
}
v(U, "displayName", "NativeScreenSharePickerStore");
let H = new U(s.Z, {
    NATIVE_SCREEN_SHARE_PICKER_UPDATE: G,
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: B,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: Z,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: F,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: V,
});
