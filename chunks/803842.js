if ((n.d(s, { $0: () => l, $4: () => r, B0: () => b, FK: () => d, cu: () => _ }), 21552 == n.j)) var a = n(192308);
var e = n(186111),
    c = n(625494),
    o = n(652215);
function t() {
    return e.A.hasLayers() || (0, a.hasAnyModalOpen)();
}
let d =
        21552 == n.j
            ? {
                  binds: ["right"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!t()) return c._.dispatch(o.jej.CAROUSEL_NEXT), !1;
                  },
              }
            : null,
    b =
        21552 == n.j
            ? {
                  binds: ["left"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!t()) return c._.dispatch(o.jej.CAROUSEL_PREV), !1;
                  },
              }
            : null,
    l = {
        binds: ["right", "down", "space"],
        comboKeysBindGlobal: !0,
        action: () => (c._.dispatch(o.jej.MODAL_CAROUSEL_NEXT), !1),
    },
    r = { binds: ["left", "up"], comboKeysBindGlobal: !0, action: () => (c._.dispatch(o.jej.MODAL_CAROUSEL_PREV), !1) },
    _ = {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
            if (c._.hasSubscribers(o.jej.MODAL_CLOSE)) return c._.dispatch(o.jej.MODAL_CLOSE), !1;
        },
    };
