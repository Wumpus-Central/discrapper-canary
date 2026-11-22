var t = i(621466);
if (221552 == i.j) var n = i(192308);
var r = i(775602),
    a = i(186111),
    l = i(188567),
    s = i(652215);
function c() {
    return a.A.hasLayers() || (0, n.ue)();
}
let d =
        221552 == i.j
            ? {
                  binds: ["right"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!c()) return (l._.dispatch(s.jej.CAROUSEL_NEXT), !1);
                  },
              }
            : null,
    b =
        221552 == i.j
            ? {
                  binds: ["left"],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!c()) return (l._.dispatch(s.jej.CAROUSEL_PREV), !1);
                  },
              }
            : null;
i.d(
    o,
    {},
    {
        $0: {
            binds: ["right", "down"],
            comboKeysBindGlobal: !0,
            action: () => (l._.dispatch(s.jej.MODAL_CAROUSEL_NEXT), !1),
        },
        $4: {
            binds: ["left", "up"],
            comboKeysBindGlobal: !0,
            action: () => (l._.dispatch(s.jej.MODAL_CAROUSEL_PREV), !1),
        },
        B0: b,
        FK: d,
        cu: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action() {
                if (l._.hasSubscribers(s.jej.MODAL_CLOSE)) return (l._.dispatch(s.jej.MODAL_CLOSE), !1);
            },
        },
        gT: {
            binds: ["space"],
            comboKeysBindGlobal: !0,
            action(e) {
                if (
                    !(function (e) {
                        if (e.defaultPrevented) return !0;
                        let { target: o } = e;
                        return (
                            !!(0, t.vq)(o) &&
                            (!!(0, t.Cw)(o) ||
                                (r.Ay.keyboardModeEnabled &&
                                    null !=
                                        o.closest(
                                            'button, a[href], input, select, summary, [role="button"], [role="link"], [role="tab"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="checkbox"], [role="switch"], [role="radio"], [role="option"]',
                                        )))
                        );
                    })(e)
                )
                    return (l._.dispatch(s.jej.MODAL_CAROUSEL_SPACE, { repeat: e.repeat }), !1);
            },
        },
    },
);
