n.d(t, {
    U3: () => m,
    XM: () => d,
    hd: () => c,
    lI: () => o,
    py: () => u
});
var i = n(481060),
    a = n(819640),
    r = n(585483),
    l = n(981631);
let s = () => a.Z.hasLayers() || (0, i.$sL)(),
    o = {
        binds: ['right'],
        comboKeysBindGlobal: !0,
        action() {
            if (!s()) return r.S.dispatch(l.CkL.CAROUSEL_NEXT), !1;
        }
    },
    c = {
        binds: ['left'],
        comboKeysBindGlobal: !0,
        action() {
            if (!s()) return r.S.dispatch(l.CkL.CAROUSEL_PREV), !1;
        }
    },
    d = {
        binds: ['right', 'down', 'space'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1)
    },
    u = {
        binds: ['left', 'up'],
        comboKeysBindGlobal: !0,
        action: () => (r.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1)
    },
    m = {
        binds: ['esc'],
        comboKeysBindGlobal: !0,
        action() {
            if (r.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return r.S.dispatch(l.CkL.MODAL_CLOSE), !1;
        }
    };
