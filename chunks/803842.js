n.d(t, {
    $0: () => d,
    $4: () => u,
    B0: () => o,
    FK: () => c,
    cu: () => p,
});
var l = n(397927),
    a = n(186111),
    r = n(203982),
    i = n(652215);
let s = () => a.A.hasLayers() || (0, l.ueM)(),
    c = {
        binds: ["right"],
        comboKeysBindGlobal: !0,
        action() {
            if (!s()) return r._.dispatch(i.jej.CAROUSEL_NEXT), !1;
        },
    },
    o = {
        binds: ["left"],
        comboKeysBindGlobal: !0,
        action() {
            if (!s()) return r._.dispatch(i.jej.CAROUSEL_PREV), !1;
        },
    },
    d = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (r._.dispatch(i.jej.MODAL_CAROUSEL_NEXT), !1),
    },
    u = {
        binds: ["left", "up"],
        comboKeysBindGlobal: !0,
        action: () => (r._.dispatch(i.jej.MODAL_CAROUSEL_PREV), !1),
    },
    p = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (r._.hasSubscribers(i.jej.MODAL_CLOSE)) return r._.dispatch(i.jej.MODAL_CLOSE), !1;
        },
    };
