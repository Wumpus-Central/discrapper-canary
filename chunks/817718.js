n.d(t, {
    U3: () => p,
    XM: () => u,
    hd: () => l,
    lI: () => s,
    py: () => d
});
var a = n(481060),
    r = n(819640),
    o = n(585483),
    i = n(981631);
let c = () => r.Z.hasLayers() || (0, a.$sL)(),
    s =
        12633 == n.j
            ? {
                  binds: ['right'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!c()) return o.S.dispatch(i.CkL.CAROUSEL_NEXT), !1;
                  }
              }
            : null,
    l =
        12633 == n.j
            ? {
                  binds: ['left'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!c()) return o.S.dispatch(i.CkL.CAROUSEL_PREV), !1;
                  }
              }
            : null,
    u = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (o.S.dispatch(i.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    d = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (o.S.dispatch(i.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    p = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (o.S.hasSubscribers(i.CkL.MODAL_CLOSE)) return o.S.dispatch(i.CkL.MODAL_CLOSE), !1;
        }
    };
