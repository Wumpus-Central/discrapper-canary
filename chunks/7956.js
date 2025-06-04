n.d(t, { i: () => o });
var r = n(804739),
    i = n(981631);
function o(e, t, n) {
    let o = t.getState(e.id, e.branchId),
        a = n.getQueuePosition(e.id, e.branchId),
        s = n.paused;
    if (null != o) {
        if (null == a || -1 === a)
            switch (o.type) {
                case i.vxO.INSTALLING:
                    return i.apO.INSTALL;
                case i.vxO.UPDATING:
                case i.vxO.UPDATE_REQUIRED:
                    return i.apO.UPDATE;
            }
        switch (o.type) {
            case i.vxO.INSTALLING:
            case i.vxO.UPDATING:
            case i.vxO.UPDATE_REQUIRED:
            case i.vxO.REPAIRING:
                if (a > 0) return i.apO.MOVE_UP;
                if (s) return i.apO.RESUME;
                return i.apO.PAUSE;
            case i.vxO.UP_TO_DATE:
                return i.apO.PLAY;
            case i.vxO.UNINSTALLING:
                return null;
        }
    }
    return null != a && a > 0 ? i.apO.MOVE_UP : (0, r.Q)() ? i.apO.INSTALL : null;
}
