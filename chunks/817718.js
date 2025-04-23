n.d(t, {
    U3: () => p,
    XM: () => d,
    hd: () => c,
    lI: () => o,
    py: () => u
});
var r = n(481060),
    i = n(819640),
    a = n(585483),
    l = n(981631);
let s = () => i.Z.hasLayers() || (0, r.$sL)(),
    o = {
        binds: ['right'],
        comboKeysBindGlobal: !0,
        action() {
            if (!s()) return a.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
        }
    },
    c = {
        binds: ['left'],
        comboKeysBindGlobal: !0,
        action() {
            if (!s()) return a.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
        }
    },
    d = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (a.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    u = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (a.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    p = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (a.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return a.S.dispatch(l.CkL.MODAL_CLOSE), !1;
        }
    };
