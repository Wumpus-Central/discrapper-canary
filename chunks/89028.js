t.d(n, { f: () => l });
var i = t(2818),
    r = t(585483),
    s = t(981631);
let l = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: n } = i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (e && !n) return r.S.dispatch(s.CkL.TOGGLE_FOR_LATER), !1;
    }
};
