n.d(t, { i: () => a });
var r = n(804739),
    i = n(981631);
function a(e, t, n) {
    let a = t.getState(e.id, e.branchId),
        o = n.getQueuePosition(e.id, e.branchId),
        s = n.paused;
    if (null != a) {
        if (null == o || -1 === o)
            switch (a.type) {
                case i.vxO.INSTALLING:
                    return i.apO.INSTALL;
                case i.vxO.UPDATING:
                case i.vxO.UPDATE_REQUIRED:
                    return i.apO.UPDATE;
            }
        switch (a.type) {
            case i.vxO.INSTALLING:
            case i.vxO.UPDATING:
            case i.vxO.UPDATE_REQUIRED:
            case i.vxO.REPAIRING:
                if (o > 0) return i.apO.MOVE_UP;
                if (s) return i.apO.RESUME;
                return i.apO.PAUSE;
            case i.vxO.UP_TO_DATE:
                return i.apO.PLAY;
            case i.vxO.UNINSTALLING:
                return null;
        }
    }
    return null != o && o > 0 ? i.apO.MOVE_UP : (0, r.Q)() ? i.apO.INSTALL : null;
}
