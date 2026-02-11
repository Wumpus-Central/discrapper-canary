"use strict";
n.d(t, { A: () => P, L: () => d }), n(205816);
var r = n(107678),
    i = n(653922),
    a = n(311907),
    s = n(73153),
    o = n(77729),
    l = n(626584),
    u = n(736666),
    c = n(805026),
    d = (function (e) {
        return (
            (e.ERROR_DOWNLOADING_DEPENDENCY = "ERROR_DOWNLOADING_DEPENDENCY"),
            (e.ERROR_ACTIVATING_VOICE_FILTER = "ERROR_ACTIVATING_VOICE_FILTER"),
            e
        );
    })({});
let _ = new l.A("VoiceFilterStore"),
    f = {
        nativeVoiceFilterModuleState: u.R.UNINITIALIZED,
        models: {},
        voiceFilters: {},
        modelState: {},
        sortedVoiceFilters: [],
        catalogFetchFailed: !1,
        catalogLastFetchTime: void 0,
        catalogUpdateTime: void 0,
        limitedTimeVoices: void 0,
        error: null,
    },
    h = null;
function p() {
    return o.A?.remoteApp.getVersion() === "0.0.0";
}
function g(e) {
    return e.available ? 0 : e.temporarilyAvailable ? 1 : 2;
}
function E(e) {
    if (null != e) {
        let t = new Date(),
            n = new Date(e.current_set_start),
            r = new Date(e.current_set_end),
            i = new Date(e.next_set_start),
            a = new Date(e.next_set_end);
        if (t >= n && t < r) return { currentSet: e.current_set, catalogUpdateTime: r };
        if (t >= i && t < a) return { currentSet: e.next_set, catalogUpdateTime: a };
    }
    return { currentSet: [], catalogUpdateTime: void 0 };
}
function A(e) {
    null == f.limitedTimeVoices
        ? _.warn("No limited time voices available to update")
        : ((f.limitedTimeVoices.current_set_end = e.toISOString()),
          (f.limitedTimeVoices.next_set_start = e.toISOString()),
          (f.limitedTimeVoices.next_set_end = (0, r.default)(e, 2).toISOString()),
          v());
}
function I(e) {
    return Object.entries(e)
        .sort((e, t) => g(e[1]) - g(t[1]))
        .map((e) => {
            let [t] = e;
            return t;
        });
}
function T(e) {
    let { catalog: t, initialModelState: n } = e,
        r = p();
    (f.catalogFetchFailed = !1), (f.models = t.models), (f.limitedTimeVoices = t.limited_time_voices);
    let i = {},
        a = E(f.limitedTimeVoices);
    if (((f.catalogUpdateTime = a.catalogUpdateTime), r))
        for (let e of Object.keys(c.y)) i[e] = { ...c.y[e], id: e, modelIds: void 0, available: !0 };
    for (let { id: e, models: n, available: s } of t.voices)
        Object.hasOwn(c.y, e) &&
            (i[e] = {
                ...c.y[e],
                id: e,
                modelIds: n,
                available: !!r || s,
                temporarilyAvailable: a.currentSet.includes(e),
            });
    (f.voiceFilters = i),
        (f.sortedVoiceFilters = I(f.voiceFilters)),
        (f.catalogLastFetchTime = new Date()),
        null != n &&
            (Object.keys(f.modelState).length > 0
                ? (f.modelState = n)
                : _.warn("Attempted to replace existing model state with initial model state"));
}
function y() {
    f.catalogFetchFailed = !0;
}
class S extends a.Ay.Store {
    static displayName = "VoiceFilterStore";
    getVoiceFilterModels() {
        return f.models;
    }
    getVoiceFilters() {
        return f.voiceFilters;
    }
    getVoiceFilter(e) {
        return f.voiceFilters[e];
    }
    getModelState(e) {
        return f.modelState[e];
    }
    getOngoingDownloads() {
        return Object.fromEntries(
            Object.entries(f.modelState).filter((e) => {
                let [t, { status: n }] = e;
                return n === u.u.DOWNLOADING;
            }),
        );
    }
    isModelDownloaded(e) {
        return f.modelState[e]?.status === u.u.DOWNLOADED;
    }
    getSortedVoiceFilters() {
        return f.sortedVoiceFilters.map((e) => f.voiceFilters[e]);
    }
    getCatalogLastFetchTime() {
        return f.catalogLastFetchTime;
    }
    getCatalogUpdateTime() {
        return f.catalogUpdateTime;
    }
    getLimitedTimeVoices() {
        return f.limitedTimeVoices;
    }
    isNativeModuleLoaded() {
        return f.nativeVoiceFilterModuleState === u.R.LOADED;
    }
    isNativeModuleLoading() {
        return f.nativeVoiceFilterModuleState === u.R.LOADING;
    }
    hasNativeModuleFailed() {
        return f.nativeVoiceFilterModuleState === u.R.FAILED;
    }
    getCatalogFetchFailed() {
        return f.catalogFetchFailed;
    }
    getError() {
        return f.error;
    }
    getLastReportedLagTimestamp() {
        return h;
    }
}
function v() {
    let e = E(f.limitedTimeVoices);
    (f.catalogUpdateTime = e.catalogUpdateTime),
        Object.keys(f.voiceFilters).forEach((t) => {
            f.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t);
        }),
        (f.sortedVoiceFilters = I(f.voiceFilters));
}
function C(e) {
    let { modelId: t } = e;
    f.modelState[t] = { ...f.modelState[t], status: u.u.DOWNLOADING, downloadedBytes: 0 };
}
function b(e) {
    let { modelId: t, downloadedBytes: n, totalBytes: r } = e;
    f.modelState[t] = { ...f.modelState[t], downloadedBytes: n, totalBytes: r };
}
function N(e) {
    let { modelId: t, error: n } = e;
    f.modelState[t]?.status !== u.u.DOWNLOADED &&
        ((f.modelState[t] = { ...f.modelState[t], status: u.u.MISSING }),
        "USER_CANCELED_DOWNLOAD" in (n ?? {}) || (f.error = "ERROR_DOWNLOADING_DEPENDENCY"));
}
function R(e) {
    let { modelId: t } = e;
    f.modelState[t] = { ...f.modelState[t], status: u.u.DOWNLOADED, downloadedBytes: void 0 };
}
function O(e) {
    let { timeInSeconds: t } = e;
    A((0, i.A)(new Date(), t));
}
function D(e) {
    f.nativeVoiceFilterModuleState = e.state;
}
function L() {
    f.error = "ERROR_ACTIVATING_VOICE_FILTER";
}
function w() {
    f.error = null;
}
function x() {
    h = Date.now();
}
let P = new S(s.h, {
    VOICE_FILTER_DOWNLOAD_STARTED: C,
    VOICE_FILTER_DOWNLOAD_PROGRESS: b,
    VOICE_FILTER_DOWNLOAD_FAILED: N,
    VOICE_FILTER_FILE_READY: R,
    VOICE_FILTER_CATALOG_FETCH_SUCCESS: T,
    VOICE_FILTER_CATALOG_FETCH_FAILED: y,
    VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: v,
    VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: O,
    VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: D,
    VOICE_FILTER_APPLY_FAILED: L,
    VOICE_FILTER_REQUEST_SWITCH: w,
    VOICE_FILTER_LAGGING: x,
});
