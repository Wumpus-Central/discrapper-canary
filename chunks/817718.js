a.d(t, {
    U3: () => m,
    XM: () => d,
    hd: () => c,
    lI: () => r,
    py: () => u
});
var n = a(481060),
    i = a(819640),
    s = a(585483),
    o = a(981631);
let l = () => i.Z.hasLayers() || (0, n.$sL)(),
    r =
        12633 == a.j
            ? {
                  binds: ['right'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!l()) return s.S.dispatch(o.CkL.CAROUSEL_NEXT), !1;
                  }
              }
            : null,
    c =
        12633 == a.j
            ? {
                  binds: ['left'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!l()) return s.S.dispatch(o.CkL.CAROUSEL_PREV), !1;
                  }
              }
            : null,
    d = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (s.S.dispatch(o.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    u = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (s.S.dispatch(o.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    m = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (s.S.hasSubscribers(o.CkL.MODAL_CLOSE)) return s.S.dispatch(o.CkL.MODAL_CLOSE), !1;
        }
    };
