if ((n.d(t, { $0: () => d, $4: () => u, B0: () => c, FK: () => o, cu: () => m }), 21552 == n.j)) var a = n(192308);
var i = n(186111),
    l = n(203982),
    r = n(652215);
let s = () => i.A.hasLayers() || (0, a.hasAnyModalOpen)(),
    o =
        21552 == n.j
            ? {
                  binds: ["right"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!s()) return l._.dispatch(r.jej.CAROUSEL_NEXT), !1;
                  },
              }
            : null,
    c =
        21552 == n.j
            ? {
                  binds: ["left"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!s()) return l._.dispatch(r.jej.CAROUSEL_PREV), !1;
                  },
              }
            : null,
    d = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (l._.dispatch(r.jej.MODAL_CAROUSEL_NEXT), !1),
    },
    u = { binds: ["left", "up"], comboKeysBindGlobal: !0, action: () => (l._.dispatch(r.jej.MODAL_CAROUSEL_PREV), !1) },
    m = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (l._.hasSubscribers(r.jej.MODAL_CLOSE)) return l._.dispatch(r.jej.MODAL_CLOSE), !1;
        },
    };
