t.d(n, {
    U3: () => _,
    XM: () => u,
    hd: () => c,
    lI: () => s,
    py: () => d
});
var a = t(481060),
    i = t(819640),
    r = t(585483),
    l = t(981631);
let o = () => i.Z.hasLayers() || (0, a.$sL)(),
    s =
        12633 == t.j
            ? {
                  binds: ['right'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!o()) return r.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
                  }
              }
            : null,
    c =
        12633 == t.j
            ? {
                  binds: ['left'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!o()) return r.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
                  }
              }
            : null,
    u = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    d = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    _ = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (r.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return r.S.dispatch(l.CkL.MODAL_CLOSE), !1;
        }
    };
