if (221552 == e.j) var n = e(192308);
var a = e(186111),
    c = e(188567),
    o = e(652215);
function t() {
    return a.A.hasLayers() || (0, n.ue)();
}
let d =
        221552 == e.j
            ? {
                  binds: ["right"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!t()) return (c._.dispatch(o.jej.CAROUSEL_NEXT), !1);
                  },
              }
            : null,
    b =
        221552 == e.j
            ? {
                  binds: ["left"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!t()) return (c._.dispatch(o.jej.CAROUSEL_PREV), !1);
                  },
              }
            : null;
e.d(
    s,
    {},
    {
        $0: {
            binds: ["right", "down", "space"],
            comboKeysBindGlobal: !0,
            action: () => (c._.dispatch(o.jej.MODAL_CAROUSEL_NEXT), !1),
        },
        $4: {
            binds: ["left", "up"],
            comboKeysBindGlobal: !0,
            action: () => (c._.dispatch(o.jej.MODAL_CAROUSEL_PREV), !1),
        },
        B0: b,
        FK: d,
        cu: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                if (c._.hasSubscribers(o.jej.MODAL_CLOSE)) return (c._.dispatch(o.jej.MODAL_CLOSE), !1);
            },
        },
    },
);
