"use strict";
n.d(t, { c: () => a });
var r = n(961350),
    i = n(803301),
    s = n(487329);
let a = {
    getActiveErrors: () =>
        Object.values(i.A.getTimedoutVideos())
            .filter((e) => {
                let { userId: t, videoStreamId: n } = e;
                return r.default.getId() === t && null == n;
            })
            .map((e) => ({ type: s.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM, ...e })),
    makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
};
