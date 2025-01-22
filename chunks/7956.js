r.d(n, {
    i: function () {
        return o;
    }
});
var i = r(804739),
    a = r(981631);
function o(e, n, r) {
    let o = n.getState(e.id, e.branchId),
        s = r.getQueuePosition(e.id, e.branchId),
        l = r.paused;
    if (null != o) {
        if (null == s || -1 === s)
            switch (o.type) {
                case a.vxO.INSTALLING:
                    return a.apO.INSTALL;
                case a.vxO.UPDATING:
                case a.vxO.UPDATE_REQUIRED:
                    return a.apO.UPDATE;
            }
        switch (o.type) {
            case a.vxO.INSTALLING:
            case a.vxO.UPDATING:
            case a.vxO.UPDATE_REQUIRED:
            case a.vxO.REPAIRING:
                if (s > 0) return a.apO.MOVE_UP;
                if (l) return a.apO.RESUME;
                return a.apO.PAUSE;
            case a.vxO.UP_TO_DATE:
                return a.apO.PLAY;
            case a.vxO.UNINSTALLING:
                return null;
        }
    }
    return null != s && s > 0 ? a.apO.MOVE_UP : (0, i.Q)() ? a.apO.INSTALL : null;
}
