"use strict";
n.d(t, { A: () => s });
var i = n(607399),
    r = n(652215);
function s() {
    if (i.Fr) return null;
    let { default: e } = n(773371),
        { default: t } = n(256415),
        { DEV_PID: s, getPID: a } = n(9302),
        o = e.isFocusedPidOutOfProcess() || e.isCurrentPidOutOfProcess(),
        l = t.isPinned(r.uss.TEXT);
    switch (!0) {
        case __OVERLAY__ && t.isInstanceLocked():
            return r.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case __OVERLAY__ && l:
            return r.Xmn.OVERLAY_UNLOCKED_PINNED;
        case __OVERLAY__ && !t.isInstanceLocked():
            return r.Xmn.OVERLAY_UNLOCKED;
        case o && e.isFocusedPidInputLocked():
            return r.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case o && !e.isFocusedPidInputLocked():
            return r.Xmn.OVERLAY_UNLOCKED;
        default:
            return null;
    }
}
