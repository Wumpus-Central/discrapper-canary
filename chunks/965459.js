"use strict";
n.d(t, { C: () => u });
var r = n(652896),
    i = n(616356),
    a = n(877717),
    s = n(709710),
    o = n(601900),
    l = n(652215);
let u = {
    getActiveErrors: () => {
        let e = i.A.getCurrentUserActiveStream();
        return null != e && null != a.A.getHookError(l.LU7.SOUND)
            ? [{ type: s.iy.STREAM_SOUNDSHARE_FAILED, ...(0, o.id)((0, r._z)(e)) }]
            : void 0;
    },
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
