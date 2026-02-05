a.d(t, { $0: () => d, $4: () => u, B0: () => c, FK: () => o, cu: () => h });
var n = a(397927),
    i = a(186111),
    s = a(203982),
    l = a(652215);
let r = () => i.A.hasLayers() || (0, n.ueM)(),
    o = {
        binds: ["right"],
        comboKeysBindGlobal: !0,
        action() {
            if (!r()) return s._.dispatch(l.jej.CAROUSEL_NEXT), !1;
        },
    },
    c = {
        binds: ["left"],
        comboKeysBindGlobal: !0,
        action() {
            if (!r()) return s._.dispatch(l.jej.CAROUSEL_PREV), !1;
        },
    },
    d = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (s._.dispatch(l.jej.MODAL_CAROUSEL_NEXT), !1),
    },
    u = { binds: ["left", "up"], comboKeysBindGlobal: !0, action: () => (s._.dispatch(l.jej.MODAL_CAROUSEL_PREV), !1) },
    h = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (s._.hasSubscribers(l.jej.MODAL_CLOSE)) return s._.dispatch(l.jej.MODAL_CLOSE), !1;
        },
    };
