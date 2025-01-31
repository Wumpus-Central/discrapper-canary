n.d(t, { i: () => a });
var i = n(804739),
    r = n(981631);
function a(e, t, n) {
    let a = t.getState(e.id, e.branchId),
        s = n.getQueuePosition(e.id, e.branchId),
        o = n.paused;
    if (null != a) {
        if (null == s || -1 === s)
            switch (a.type) {
                case r.vxO.INSTALLING:
                    return r.apO.INSTALL;
                case r.vxO.UPDATING:
                case r.vxO.UPDATE_REQUIRED:
                    return r.apO.UPDATE;
            }
        switch (a.type) {
            case r.vxO.INSTALLING:
            case r.vxO.UPDATING:
            case r.vxO.UPDATE_REQUIRED:
            case r.vxO.REPAIRING:
                if (s > 0) return r.apO.MOVE_UP;
                if (o) return r.apO.RESUME;
                return r.apO.PAUSE;
            case r.vxO.UP_TO_DATE:
                return r.apO.PLAY;
            case r.vxO.UNINSTALLING:
                return null;
        }
    }
    return null != s && s > 0 ? r.apO.MOVE_UP : (0, i.Q)() ? r.apO.INSTALL : null;
}
