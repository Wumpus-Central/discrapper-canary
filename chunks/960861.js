let r;
n.d(t, {
    UB: () => D,
    Uc: () => S,
    ZP: () => H,
    kE: () => x,
});
var i,
    a = n(473749),
    o = n(442837),
    s = n(570140),
    l = n(872810),
    c = n(361291),
    u = n(592125),
    d = n(430824),
    f = n(131951),
    p = n(496675),
    _ = n(944486),
    m = n(102172),
    h = n(74299),
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
var S = (function (e) {
    return (
        (e[(e.Present = 0)] = "Present"),
        (e[(e.Update = 1)] = "Update"),
        (e[(e.Cancel = 2)] = "Cancel"),
        (e[(e.Error = 3)] = "Error"),
        e
    );
})({});
let I = !1,
    T = 0,
    A = 0,
    C = !1,
    N = {};
function P() {
    return f.Z.supports(y.AN.NATIVE_SCREENSHARE_PICKER);
}
function R() {
    return f.Z.getUseSystemScreensharePicker();
}
function w() {
    let e = R() && (A > 0 || (I && 0 === T));
    if (e !== C) {
        var t, n;
        (C = e),
            null == (n = f.Z.getMediaEngine()) ||
                null == (t = n.setNativeDesktopVideoSourcePickerActive) ||
                t.call(n, C);
    }
}
function D() {
    return (0, a.useEffect)(
        () => (
            T++,
            w(),
            () => {
                0 == --T && w();
            }
        ),
        [],
    );
}
function x() {
    return (0, a.useEffect)(
        () => (
            A++,
            w(),
            () => {
                --A, w();
            }
        ),
        [],
    );
}
function L() {
    let e = u.Z.getChannel(_.Z.getVoiceChannelId());
    return (I = null != e && (0, h.Z)(f.Z) && (0, m.JL)(e, d.Z, p.Z, !1)), w(), !1;
}
function j() {
    return null != r ? (0, E.Z)(r) : null;
}
function M() {
    return null != r ? (0, g.Z)(r) : null;
}
function k() {
    var e;
    let { soundshareEnabled: t } = c.Z.getState();
    return {
        sourceId: "prepicked:0",
        nativePickerStyleUsed: N.lastPresentedPickerStyle,
        sourceName: null != (e = j()) ? e : O.intl.string(O.t.KKcy95),
        sound: t,
    };
}
class U extends (i = o.ZP.Store) {
    initialize() {
        this.syncWith([f.Z, _.Z, u.Z, d.Z, p.Z], L), L();
    }
    supported() {
        return P();
    }
    enabled() {
        return R();
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
        return j();
    }
    getLastPickedContentPID() {
        return M();
    }
    getStreamStartOptions() {
        return k();
    }
}
function G(e) {
    let { existing: t, content: n } = e;
    if (((N = { lastPickerAction: 1 }), (r = n), 0 === T && !t)) {
        let e = u.Z.getChannel(_.Z.getVoiceChannelId());
        null != e && (0, h.Z)(f.Z) && (0, m.JL)(e, d.Z, p.Z, !1) && (0, l.WH)(e.getGuildId(), e.id, k());
    }
}
function Z() {
    N = { lastPickerAction: 2 };
}
function B(e) {
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
    NATIVE_SCREEN_SHARE_PICKER_CANCEL: Z,
    NATIVE_SCREEN_SHARE_PICKER_ERROR: B,
    NATIVE_SCREEN_SHARE_PICKER_PRESENT: F,
    NATIVE_SCREEN_SHARE_PICKER_RELEASE: V,
});
