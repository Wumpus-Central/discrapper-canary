r.d(n, {
    UB: function () {
        return O;
    },
    Uc: function () {
        return i;
    },
    kE: function () {
        return D;
    }
});
var i,
    a,
    o = r(192379),
    s = r(442837),
    l = r(570140),
    u = r(872810),
    c = r(998594),
    d = r(592125),
    f = r(430824),
    p = r(131951),
    h = r(496675),
    _ = r(944486),
    m = r(102172),
    g = r(74299),
    E = r(299570),
    v = r(65154);
function y(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.Present = 0)] = 'Present'), (e[(e.Update = 1)] = 'Update'), (e[(e.Cancel = 2)] = 'Cancel'), (e[(e.Error = 3)] = 'Error');
})(i || (i = {}));
let b = !1,
    I = 0,
    T = 0,
    S = !1,
    A = {};
function C() {
    return p.Z.supports(v.AN.NATIVE_SCREENSHARE_PICKER);
}
function N() {
    return p.Z.getUseSystemScreensharePicker();
}
function R() {
    let e = N() && (T > 0 || (b && 0 === I));
    if (e !== S) {
        var n, r;
        (S = e), null === (r = p.Z.getMediaEngine()) || void 0 === r || null === (n = r.setNativeDesktopVideoSourcePickerActive) || void 0 === n || n.call(r, S);
    }
}
function O() {
    return (0, o.useEffect)(
        () => (
            I++,
            R(),
            () => {
                0 == --I && R();
            }
        ),
        []
    );
}
function D() {
    return (0, o.useEffect)(
        () => (
            T++,
            R(),
            () => {
                --T, R();
            }
        ),
        []
    );
}
function L() {
    let e = d.Z.getChannel(_.Z.getVoiceChannelId());
    return (b = null != e && (0, g.Z)(p.Z) && (0, m.JL)(e, f.Z, h.Z, !1)), R(), !1;
}
class x extends (a = s.ZP.Store) {
    initialize() {
        this.syncWith([p.Z, _.Z, d.Z, f.Z, h.Z], L), c.Z.subscribe({ location: 'NativeScreenSharePickerStore_initialize' }, R), L();
    }
    supported() {
        return C();
    }
    enabled() {
        return N();
    }
    releasePickerStream() {
        (0, E.t)();
    }
    getPickerState() {
        return A;
    }
}
function w(e) {
    let { existing: n } = e;
    if (((A = { lastPickerAction: 1 }), 0 === I && !n)) {
        let e = d.Z.getChannel(_.Z.getVoiceChannelId());
        null != e && (0, g.Z)(p.Z) && (0, m.JL)(e, f.Z, h.Z, !1) && (0, u.WH)(e.getGuildId(), e.id, { sourceId: 'prepicked:0' });
    }
}
function P() {
    A = { lastPickerAction: 2 };
}
function M(e) {
    let { error: n } = e;
    A = {
        lastPickerAction: 3,
        lastPickerError: n
    };
}
function k() {
    A = { lastPickerAction: 0 };
}
function U() {
    A = {};
}
y(x, 'displayName', 'NativeScreenSharePickerStore'),
    (n.ZP = new x(l.Z, {
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: w,
        NATIVE_SCREEN_SHARE_PICKER_CANCEL: P,
        NATIVE_SCREEN_SHARE_PICKER_ERROR: M,
        NATIVE_SCREEN_SHARE_PICKER_PRESENT: k,
        NATIVE_SCREEN_SHARE_PICKER_RELEASE: U
    }));
