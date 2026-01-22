n.d(t, {
    A: () => U,
    L: () => m,
}),
    n(638769),
    n(896048),
    n(205816),
    n(446912);
var r,
    i = n(107678),
    a = n(653922),
    s = n(311907),
    o = n(73153),
    l = n(77729),
    c = n(626584),
    u = n(736666),
    d = n(805026);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var m = (function (e) {
    return (
        (e.ERROR_DOWNLOADING_DEPENDENCY = "ERROR_DOWNLOADING_DEPENDENCY"),
        (e.ERROR_ACTIVATING_VOICE_FILTER = "ERROR_ACTIVATING_VOICE_FILTER"),
        e
    );
})({});
let g = new c.A("VoiceFilterStore"),
    E = {
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
    b = null;

function y() {
    return (null === l.A || void 0 === l.A ? void 0 : l.A.remoteApp.getVersion()) === "0.0.0";
}

function O(e) {
    return e.available ? 0 : e.temporarilyAvailable ? 1 : 2;
}

function A(e) {
    if (null != e) {
        let t = new Date(),
            n = new Date(e.current_set_start),
            r = new Date(e.current_set_end),
            i = new Date(e.next_set_start),
            a = new Date(e.next_set_end);
        if (t >= n && t < r)
            return {
                currentSet: e.current_set,
                catalogUpdateTime: r,
            };
        if (t >= i && t < a)
            return {
                currentSet: e.next_set,
                catalogUpdateTime: a,
            };
    }
    return {
        currentSet: [],
        catalogUpdateTime: void 0,
    };
}

function v(e) {
    null == E.limitedTimeVoices
        ? g.warn("No limited time voices available to update")
        : ((E.limitedTimeVoices.current_set_end = e.toISOString()),
          (E.limitedTimeVoices.next_set_start = e.toISOString()),
          (E.limitedTimeVoices.next_set_end = (0, i.default)(e, 2).toISOString()),
          N());
}

function S(e) {
    return Object.entries(e)
        .sort((e, t) => O(e[1]) - O(t[1]))
        .map((e) => {
            let [t] = e;
            return t;
        });
}

function I(e) {
    let { catalog: t, initialModelState: n } = e,
        r = y();
    (E.catalogFetchFailed = !1), (E.models = t.models), (E.limitedTimeVoices = t.limited_time_voices);
    let i = {},
        a = A(E.limitedTimeVoices);
    if (((E.catalogUpdateTime = a.catalogUpdateTime), r))
        for (let e of Object.keys(d.y))
            i[e] = h(p({}, d.y[e]), {
                id: e,
                modelIds: void 0,
                available: !0,
            });
    for (let { id: e, models: n, available: s } of t.voices)
        Object.hasOwn(d.y, e) &&
            (i[e] = h(p({}, d.y[e]), {
                id: e,
                modelIds: n,
                available: !!r || s,
                temporarilyAvailable: a.currentSet.includes(e),
            }));
    (E.voiceFilters = i),
        (E.sortedVoiceFilters = S(E.voiceFilters)),
        (E.catalogLastFetchTime = new Date()),
        null != n &&
            (Object.keys(E.modelState).length > 0
                ? (E.modelState = n)
                : g.warn("Attempted to replace existing model state with initial model state"));
}

function T() {
    E.catalogFetchFailed = !0;
}
class C extends (r = s.Ay.Store) {
    getVoiceFilterModels() {
        return E.models;
    }
    getVoiceFilters() {
        return E.voiceFilters;
    }
    getVoiceFilter(e) {
        return E.voiceFilters[e];
    }
    getModelState(e) {
        return E.modelState[e];
    }
    getOngoingDownloads() {
        return Object.fromEntries(
            Object.entries(E.modelState).filter((e) => {
                let [t, { status: n }] = e;
                return n === u.u.DOWNLOADING;
            }),
        );
    }
    isVoiceFilterDownloaded(e) {
        var t, n;
        return Object.values(null != (t = null == (n = E.voiceFilters[e]) ? void 0 : n.modelIds) ? t : {}).every(
            (e) => {
                var t;
                return (null == (t = E.modelState[e]) ? void 0 : t.status) === u.u.DOWNLOADED;
            },
        );
    }
    isModelDownloaded(e) {
        var t;
        return (null == (t = E.modelState[e]) ? void 0 : t.status) === u.u.DOWNLOADED;
    }
    getSortedVoiceFilters() {
        return E.sortedVoiceFilters.map((e) => E.voiceFilters[e]);
    }
    getCatalogLastFetchTime() {
        return E.catalogLastFetchTime;
    }
    getCatalogUpdateTime() {
        return E.catalogUpdateTime;
    }
    getLimitedTimeVoices() {
        return E.limitedTimeVoices;
    }
    isNativeModuleLoaded() {
        return E.nativeVoiceFilterModuleState === u.R.LOADED;
    }
    isNativeModuleLoading() {
        return E.nativeVoiceFilterModuleState === u.R.LOADING;
    }
    hasNativeModuleFailed() {
        return E.nativeVoiceFilterModuleState === u.R.FAILED;
    }
    getCatalogFetchFailed() {
        return E.catalogFetchFailed;
    }
    getError() {
        return E.error;
    }
    getLastReportedLagTimestamp() {
        return b;
    }
}

function N() {
    let e = A(E.limitedTimeVoices);
    (E.catalogUpdateTime = e.catalogUpdateTime),
        Object.keys(E.voiceFilters).forEach((t) => {
            E.voiceFilters[t].temporarilyAvailable = e.currentSet.includes(t);
        }),
        (E.sortedVoiceFilters = S(E.voiceFilters));
}

function R(e) {
    let { modelId: t } = e;
    E.modelState[t] = h(p({}, E.modelState[t]), {
        status: u.u.DOWNLOADING,
        downloadedBytes: 0,
    });
}

function w(e) {
    let { modelId: t, downloadedBytes: n, totalBytes: r } = e;
    E.modelState[t] = h(p({}, E.modelState[t]), {
        downloadedBytes: n,
        totalBytes: r,
    });
}

function P(e) {
    var t;
    let { modelId: n, error: r } = e;
    (null == (t = E.modelState[n]) ? void 0 : t.status) !== u.u.DOWNLOADED &&
        ((E.modelState[n] = h(p({}, E.modelState[n]), {
            status: u.u.MISSING,
        })),
        "USER_CANCELED_DOWNLOAD" in (null != r ? r : {}) || (E.error = "ERROR_DOWNLOADING_DEPENDENCY"));
}

function D(e) {
    let { modelId: t } = e;
    E.modelState[t] = h(p({}, E.modelState[t]), {
        status: u.u.DOWNLOADED,
        downloadedBytes: void 0,
    });
}

function x(e) {
    let { timeInSeconds: t } = e;
    v((0, a.A)(new Date(), t));
}

function L(e) {
    E.nativeVoiceFilterModuleState = e.state;
}

function j() {
    E.error = "ERROR_ACTIVATING_VOICE_FILTER";
}

function M() {
    E.error = null;
}

function k() {
    b = Date.now();
}
f(C, "displayName", "VoiceFilterStore");
let U = new C(o.h, {
    VOICE_FILTER_DOWNLOAD_STARTED: R,
    VOICE_FILTER_DOWNLOAD_PROGRESS: w,
    VOICE_FILTER_DOWNLOAD_FAILED: P,
    VOICE_FILTER_FILE_READY: D,
    VOICE_FILTER_CATALOG_FETCH_SUCCESS: I,
    VOICE_FILTER_CATALOG_FETCH_FAILED: T,
    VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES: N,
    VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: x,
    VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE: L,
    VOICE_FILTER_APPLY_FAILED: j,
    VOICE_FILTER_REQUEST_SWITCH: M,
    VOICE_FILTER_LAGGING: k,
});
