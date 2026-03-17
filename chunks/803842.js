a.d(t, { $0: () => d, $4: () => u, B0: () => c, FK: () => o, cu: () => m });
var n = a(397927),
    i = a(186111),
    l = a(203982),
    s = a(652215);
let r = () => i.A.hasLayers() || (0, n.ueM)(),
    o =
        21552 == a.j
            ? {
                  binds: ["right"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!r()) return l._.dispatch(s.jej.CAROUSEL_NEXT), !1;
                  },
              }
            : null,
    c =
        21552 == a.j
            ? {
                  binds: ["left"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!r()) return l._.dispatch(s.jej.CAROUSEL_PREV), !1;
                  },
              }
            : null,
    d = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (l._.dispatch(s.jej.MODAL_CAROUSEL_NEXT), !1),
    },
    u = { binds: ["left", "up"], comboKeysBindGlobal: !0, action: () => (l._.dispatch(s.jej.MODAL_CAROUSEL_PREV), !1) },
    m = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (l._.hasSubscribers(s.jej.MODAL_CLOSE)) return l._.dispatch(s.jej.MODAL_CLOSE), !1;
        },
    };
