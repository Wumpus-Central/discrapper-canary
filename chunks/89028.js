n.d(t, { f: () => l });
var i = n(2818),
    r = n(585483),
    s = n(981631);
let l = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: t } = i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (e && !t) return r.S.dispatch(s.CkL.TOGGLE_FOR_LATER), !1;
    }
};
