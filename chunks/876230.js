"use strict";
n.d(t, { KB: () => l, Q6: () => r, SB: () => i, TJ: () => s, n4: () => o, oA: () => a });
var r = (function (e) {
        return (e.PLAYING = "playing"), (e.PAUSED = "paused"), (e.ENDED = "ended"), e;
    })({}),
    i = (function (e) {
        return (
            (e.ERROR = "ERROR"),
            (e.SOURCE_ERROR = "SOURCE_ERROR"),
            (e.ABORT = "ABORT"),
            (e.EMPTIED = "EMPTIED"),
            (e.STALLED = "STALLED"),
            (e.SUSPEND = "SUSPEND"),
            (e.NO_VALID_SOURCE = "NO_VALID_SOURCE"),
            (e.HLS_NETWORK_ERROR = "HLS_NETWORK_ERROR"),
            (e.HLS_MEDIA_ERROR = "HLS_MEDIA_ERROR"),
            (e.HLS_MUX_ERROR = "HLS_MUX_ERROR"),
            (e.HLS_KEY_SYSTEM_ERROR = "HLS_KEY_SYSTEM_ERROR"),
            (e.HLS_OTHER_ERROR = "HLS_OTHER_ERROR"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e.PLAYBACK = "k"),
            (e.SPACE = " "),
            (e.SEEK_BACK = "j"),
            (e.SEEK_FORWARD = "l"),
            (e.CAPTION = "c"),
            (e.FULLSCREEN = "f"),
            (e.MUTE = "m"),
            e
        );
    })({}),
    a = (function (e) {
        return (e.MD = "md"), (e.LG = "lg"), e;
    })({}),
    o = (function (e) {
        return (e.MD = "md"), (e.LG = "lg"), e;
    })({}),
    l = (function (e) {
        return (
            (e.VISIBILITY = "visibility"),
            (e.FOCUS = "focus"),
            (e.USER = "user"),
            (e.SEEK = "seek"),
            (e.PLAYBACK_COMPLETE = "playback_complete"),
            (e.BUFFERING_RECOVERY = "buffering_recovery"),
            e
        );
    })({});
