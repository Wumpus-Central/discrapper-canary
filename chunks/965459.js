"use strict";
n.d(t, { C: () => u });
var r = n(652896),
    i = n(616356),
    s = n(877717),
    a = n(487329),
    o = n(601900),
    l = n(652215);
let u = {
    getActiveErrors: () => {
        let e = i.A.getCurrentUserActiveStream();
        return null != e && null != s.A.getHookError(l.LU7.SOUND)
            ? [{ type: a.iy.STREAM_SOUNDSHARE_FAILED, ...(0, o.id)((0, r._z)(e)) }]
            : void 0;
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
