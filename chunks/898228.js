"use strict";
n.d(t, { F: () => s });
var r = n(961350),
    i = n(803301),
    a = n(709710);
let s = {
    getActiveErrors: () =>
        Object.values(i.A.getTimedoutVideos())
            .filter((e) => {
                let { userId: t, videoStreamId: n } = e;
                return r.default.getId() !== t && null != n;
            })
            .map((e) => ({ type: a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT, ...e })),
    makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
};
