n.d(t, { f: () => a });
var r = n(2818),
    i = n(585483),
    s = n(981631);
let a = {
    binds: ['mod+l'],
    comboKeysBindGlobal: !0,
    action() {
        let { enabled: e, inInbox: t } = r.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 });
        if (e && !t) return i.S.dispatch(s.CkL.TOGGLE_FOR_LATER), !1;
    }
};
