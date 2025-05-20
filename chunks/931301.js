n.d(t, { Z: () => o });
var r = n(981631);
let i = !1;
function o() {
    let { default: e } = n(808506),
        { default: t } = n(237997),
        { DEV_PID: o, getPID: a } = n(145597),
        s = i ? a() === o : e.isFocusedPidOutOfProcess(),
        l = t.isPinned(r.Odu.TEXT);
    switch (!0) {
        case __OVERLAY__ && t.isInstanceLocked():
            return r.ADE.OVERLAY_LOCKED_ACTIVATED;
        case __OVERLAY__ && l:
            return r.ADE.OVERLAY_UNLOCKED_PINNED;
        case __OVERLAY__ && !t.isInstanceLocked():
            return r.ADE.OVERLAY_UNLOCKED;
        case s && e.isFocusedPidInputLocked():
            return r.ADE.OVERLAY_LOCKED_ACTIVATED;
        case s && l:
            return r.ADE.OVERLAY_UNLOCKED_PINNED;
        case s && !e.isFocusedPidInputLocked():
            return r.ADE.OVERLAY_UNLOCKED;
        default:
            return null;
    }
}
