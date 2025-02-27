n.d(t, {
    U3: () => f,
    XM: () => u,
    hd: () => c,
    lI: () => s,
    py: () => d
});
var r = n(481060),
    i = n(819640),
    o = n(585483),
    a = n(981631);
let l = () => i.Z.hasLayers() || (0, r.$sL)(),
    s =
        12633 == n.j
            ? {
                  binds: ['right'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!l()) return o.S.dispatch(a.CkL.CAROUSEL_NEXT), !1;
                  }
              }
            : null,
    c =
        12633 == n.j
            ? {
                  binds: ['left'],
                  comboKeysBindGlobal: !0,
                  action() {
                      if (!l()) return o.S.dispatch(a.CkL.CAROUSEL_PREV), !1;
                  }
              }
            : null,
    u = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (o.S.dispatch(a.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    d = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (o.S.dispatch(a.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    f = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (o.S.hasSubscribers(a.CkL.MODAL_CLOSE)) return o.S.dispatch(a.CkL.MODAL_CLOSE), !1;
        }
    };
