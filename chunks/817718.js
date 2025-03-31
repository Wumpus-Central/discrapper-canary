n.d(t, {
    U3: () => p,
    XM: () => d,
    hd: () => c,
    lI: () => s,
    py: () => u
});
var r = n(481060),
    a = n(819640),
    i = n(585483),
    l = n(981631);
let o = () => a.Z.hasLayers() || (0, r.$sL)(),
    s = {
        binds: ['right'],
        comboKeysBindGlobal: !0,
        action() {
            if (!o()) return i.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
        }
    },
    c = {
        binds: ['left'],
        comboKeysBindGlobal: !0,
        action() {
            if (!o()) return i.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
        }
    },
    d = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    u = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    p = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (i.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return i.S.dispatch(l.CkL.MODAL_CLOSE), !1;
        }
    };
