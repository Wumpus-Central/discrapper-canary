"use strict";
if ((n.d(t, { $0: () => u, $4: () => d, B0: () => c, FK: () => o, cu: () => _ }), 21552 == n.j)) var i = n(192308);
var a = n(186111),
    r = n(203982),
    l = n(652215);
let s = () => a.A.hasLayers() || (0, i.hasAnyModalOpen)(),
    o =
        21552 == n.j
            ? {
                  binds: ["right"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!s()) return r._.dispatch(l.jej.CAROUSEL_NEXT), !1;
                  },
              }
            : null,
    c =
        21552 == n.j
            ? {
                  binds: ["left"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!s()) return r._.dispatch(l.jej.CAROUSEL_PREV), !1;
                  },
              }
            : null,
    u = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (r._.dispatch(l.jej.MODAL_CAROUSEL_NEXT), !1),
    },
    d = { binds: ["left", "up"], comboKeysBindGlobal: !0, action: () => (r._.dispatch(l.jej.MODAL_CAROUSEL_PREV), !1) },
    _ = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (r._.hasSubscribers(l.jej.MODAL_CLOSE)) return r._.dispatch(l.jej.MODAL_CLOSE), !1;
        },
    };
