"use strict";
n.d(t, { z: () => a });
var i = n(412703),
    r = n(668824);
function s(e) {
    return {
        url: e.url,
        width: e.width,
        height: e.height,
        thumbnail: e.thumbnail,
        caption: e.caption,
        transcript: e.transcript,
    };
}
let a = (e) => {
    try {
        let t = Object.entries(e.tasks)
            .map((e) => {
                let [t, n] = e;
                return [
                    t,
                    ((e) => {
                        var t, n;
                        switch (e.type) {
                            case i.n.WATCH_VIDEO:
                                let r;
                                return {
                                    type: i.n.WATCH_VIDEO,
                                    target: e.target,
                                    assets:
                                        ((r = { video: s((t = e.assets).video) }),
                                        null != t.video_low_res && (r.videoLowRes = s(t.video_low_res)),
                                        null != t.video_hls && (r.videoHls = s(t.video_hls)),
                                        r),
                                    messages: { videoTitle: e.messages.video_title },
                                };
                            case i.n.WATCH_VIDEO_ON_MOBILE:
                                let a;
                                return {
                                    type: i.n.WATCH_VIDEO_ON_MOBILE,
                                    target: e.target,
                                    assets:
                                        ((a = { video: s((n = e.assets).video) }),
                                        null != n.video_low_res && (a.videoLowRes = s(n.video_low_res)),
                                        null != n.video_hls && (a.videoHls = s(n.video_hls)),
                                        a),
                                    messages: { videoTitle: e.messages.video_title },
                                };
                            case i.n.PLAY_ON_DESKTOP:
                                return { type: i.n.PLAY_ON_DESKTOP, target: e.target, applications: e.applications };
                            case i.n.STREAM_ON_DESKTOP:
                                return { type: i.n.STREAM_ON_DESKTOP, target: e.target, applications: e.applications };
                            case i.n.PLAY_ACTIVITY:
                                return { type: i.n.PLAY_ACTIVITY, target: e.target, applications: e.applications };
                            case i.n.PLAY_ON_XBOX:
                                return {
                                    type: i.n.PLAY_ON_XBOX,
                                    target: e.target,
                                    externalIds: e.external_ids,
                                    applications: e.applications,
                                };
                            case i.n.PLAY_ON_PLAYSTATION:
                                return {
                                    type: i.n.PLAY_ON_PLAYSTATION,
                                    target: e.target,
                                    externalIds: e.external_ids,
                                    applications: e.applications,
                                };
                            case i.n.ACHIEVEMENT_IN_GAME:
                                return {
                                    type: i.n.ACHIEVEMENT_IN_GAME,
                                    target: e.target,
                                    eventName: e.event_name,
                                    messages: {
                                        taskTitle: e.messages.task_title,
                                        taskDescription: e.messages.task_description,
                                    },
                                    applications: e.applications,
                                };
                            case i.n.ACHIEVEMENT_IN_ACTIVITY:
                                return {
                                    type: i.n.ACHIEVEMENT_IN_ACTIVITY,
                                    target: e.target,
                                    eventName: e.event_name,
                                    messages: {
                                        taskTitle: e.messages.task_title,
                                        taskDescription: e.messages.task_description,
                                    },
                                    applications: e.applications,
                                };
                            default:
                                return null;
                        }
                    })(n),
                ];
            })
            .filter((e) => {
                let [t, n] = e;
                return null !== n;
            });
        return { tasks: Object.fromEntries(t), joinOperator: e.join_operator };
    } catch (e) {
        return { tasks: {}, joinOperator: r.K.OR };
    }
};
