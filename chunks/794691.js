"use strict";
n.d(t, { A: () => s });
var r = n(607399),
    i = n(652215);
let a = !1;
function s() {
    if (r.Fr) return null;
    let { default: e } = n(242286),
        { default: t } = n(256415),
        { DEV_PID: s, getPID: o } = n(9302),
        l = a ? o() === s : e.isFocusedPidOutOfProcess() || e.isCurrentPidOutOfProcess(),
        u = t.isPinned(i.uss.TEXT);
    switch (!0) {
        case __OVERLAY__ && t.isInstanceLocked():
            return i.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case __OVERLAY__ && u:
            return i.Xmn.OVERLAY_UNLOCKED_PINNED;
        case __OVERLAY__ && !t.isInstanceLocked():
            return i.Xmn.OVERLAY_UNLOCKED;
        case l && e.isFocusedPidInputLocked():
            return i.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case l && !e.isFocusedPidInputLocked():
            return i.Xmn.OVERLAY_UNLOCKED;
        default:
            return null;
    }
}
