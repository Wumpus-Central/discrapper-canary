"use strict";
n.d(t, { Ay: () => H, _c: () => g, he: () => m }), n(321073), n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(228366),
    o = n(77729),
    d = n(952818),
    c = n(652896),
    u = n(280450),
    _ = n(741394);
let E = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-autoclipping-default-override",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var A = n(372684),
    h = n(458977),
    I = n(572164),
    f = n(696016),
    p = n(652215),
    T = n(753070);
let m = "default",
    g = "Discord Clips",
    S = {},
    N = {},
    C = {},
    R = [],
    O = 0,
    L = null,
    D = null,
    y = null,
    v = {},
    b = {},
    M = null,
    P = new Set(),
    U = !1,
    w = new Map(),
    G = {
        clipsEnabled: !1,
        storageLocation: m,
        clipsQuality: { resolution: T.on.RESOLUTION_1080, frameRate: T.kn.FPS_30 },
        clipsLength: f.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: f.on.ALL,
        maxAutoClips: f.T2,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    x = {
        clipsSettings: G,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function k() {
    let e;
    if (x.clipsSettings.storageLocation === m && null != o.A && null != o.A.app) {
        try {
            let t = await o.A.app.getPath("videos");
            e = (0, _.CN)(t, g);
        } catch (t) {
            f.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await o.A.app.getPath("documents"));
        }
        (x.clipsSettings.storageLocation = e), B.emitChange();
    }
}
function F(e, t, n) {
    if (!h.A.getConfig({ location: "trackSharedRemoteClipId" }).enableDistributedClips || n !== u.default.getId())
        return !1;
    let i = !1;
    for (let n of t) {
        if (null == n.clip_remote_id) continue;
        let t = w.get(e);
        null == t && ((t = new Set()), w.set(e, t)), t.add(n.clip_remote_id), (i = !0);
    }
    return i;
}
class V extends s.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : G, newClipsCount: 0 }),
        (e) => {
            let t = { ...G, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: G.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(186295).Ay.getHardwareEncoding();
            return {
                ...e,
                clipsSettings: {
                    ...e.clipsSettings,
                    clipsEnabled: !!t && e.clipsSettings.clipsEnabled,
                    decoupledClipsEnabled: !!t && e.clipsSettings.decoupledClipsEnabled,
                },
            };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [], newClipIDs: void 0 }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality:
                    "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality
                        ? G.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? G.remindersEnabled,
            },
        }),
        (e) => ({
            ...e,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                maxAutoClips: e.clipsSettings.maxAutoClips ?? G.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? G.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? G.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? G.showPovClipsInGallery,
            },
        }),
    ];
    initialize(e) {
        null != e && (x = e), k(), this.waitFor(d.Ay);
    }
    getClips() {
        return S;
    }
    getClipById(e) {
        return S[e];
    }
    getClipByRemoteId(e) {
        let t = C[e];
        if (null != t) return S[t];
    }
    getClipCandidates() {
        return R;
    }
    getClipCandidateById(e) {
        return N[e];
    }
    getUserAgnosticState() {
        return x;
    }
    getSettings() {
        return x.clipsSettings;
    }
    getEnableAutoclipping() {
        return x.clipsSettings.enableAutoclipping ?? E.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    hasUserSetAutoclippingSettings() {
        return null != x.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return D;
    }
    getCurrentClipsSession() {
        return y;
    }
    getHistoricalClipsSessionById(e) {
        return v[e];
    }
    devSetLastClipsSession(e) {
        (D = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return L === e;
    }
    getHardwareClassification() {
        return x.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return x.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return x.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return O >= f.VP;
    }
    getLastClipsError() {
        return M;
    }
    isClipsEnabledForUser(e) {
        return b[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return b[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return b[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return x.hasClips;
    }
    hasTakenDecoupledClip() {
        return x.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return x.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return x.newClipIds;
    }
    isClipExporting(e) {
        return P.has(e);
    }
    getExportingClipIds() {
        return P;
    }
    isAutoStashEnabled() {
        return U;
    }
    wasClipSharedInChannel(e, t) {
        let n = w.get(t);
        return n?.has(e) ?? !1;
    }
}
let B = new V(l.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            x = { ...x, clipsSettings: { ...x.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (O = Math.max(O - 1, 0)),
                t.isCandidate && ((R = [t, ...R]), (N[t.id] = t)),
                null != y &&
                    (y = {
                        ...y,
                        manualClipsSaved: y.manualClipsSaved + +("manual" === t.clipMethod),
                        candidateClipsSaved: y.candidateClipsSaved + +!!t.isCandidate,
                    }),
                t.isCandidate ||
                    ((D = {
                        applicationName: t.applicationName,
                        ended: !1,
                        ...D,
                        newClipIds: [...(D?.newClipIds ?? []), t.id],
                    }),
                    (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                    (S[t.id] = t),
                    null != t.remoteClipId && (C[t.remoteClipId] = t.id),
                    (x.hasClips = !0));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (D = { applicationName: t.applicationName, ...D, ended: !0, newClipIds: [...(D?.newClipIds ?? []), t.id] }),
                r()(
                    null != y && y.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (y = { ...y, candidateClipsPromoted: y.candidateClipsPromoted + 1 }),
                (x = { ...x, newClipIds: [...(x.newClipIds ?? []), t.id] }),
                (R = R.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete N[t.id],
                (S[t.id] = t),
                (x.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (O += 1), (x.hasTakenDecoupledClip = x.hasTakenDecoupledClip || t === f.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            O = Math.max(O - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === A.RC.BUFFER_WARMING_UP || t === A.RC.BRIDGE_SHUTDOWN) && (O = Math.max(O - 1, 0));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!(0, I.TD)()) return !1;
            let i = t;
            if (null != n) {
                let e = d.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            D = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (null == D || (0, c.Iy)(t).ownerId !== u.default.getId()) return !1;
            D = 0 === D.newClipIds.length ? null : { ...D, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == D) return !1;
            D = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            null != y && (v[y.id] = y),
                (y = { id: t, gameId: n, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 });
        },
        CLIPS_SESSION_STOP: function () {
            if (null == y) return !1;
            (v[y.id] = y), (y = null);
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            x.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            x.newClipIds = x.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((S = {}), (R = []), e.clips))
                t.isCandidate
                    ? ((N[t.id] = t), R.push(t))
                    : ((S[t.id] = t), null != t.remoteClipId && (C[t.remoteClipId] = t.id));
            x.hasClips = Object.keys(S).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = S[e.id];
            (R = R.filter((t) => {
                let { id: n } = t;
                return e.id !== n;
            })),
                delete N[e.id],
                delete S[e.id],
                t?.remoteClipId != null && delete C[t.remoteClipId],
                (x.hasClips = Object.keys(S).length > 0);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (N[t.id] = t) : ((S[t.id] = t), null != t.remoteClipId && (C[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            b[e.userId] = {
                clipsEnabled: (0, a.Lt)(e.flags, p.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, a.Lt)(e.flags, p.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, a.Lt)(e.flags, p.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            L = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== L && (L = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = x.hardwareClassification;
            (x.hardwareClassificationVersion = f.V0),
                (x.hardwareClassification = t),
                x.hardwareClassification === A.k9.MEETS_AUTO_ENABLE &&
                    n !== A.k9.MEETS_AUTO_ENABLE &&
                    (x.clipsSettings.clipsEnabled = !0);
            let i = x.hardwareClassificationForDecoupled;
            (x.hardwareClassificationForDecoupled = t),
                x.hardwareClassificationForDecoupled === A.k9.MEETS_AUTO_ENABLE &&
                    i !== A.k9.MEETS_AUTO_ENABLE &&
                    x.clipsSettings.clipsEnabled &&
                    (x.clipsSettings.decoupledClipsEnabled = !0);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((M = null), !(0, I.TD)())) return !1;
            D = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            M = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case f.P4.Error:
                    M = null;
                    break;
                case f.P4.Disabled:
                case f.P4.Enabled:
                    (x.clipsEducationState.dismissedAt = Date.now()),
                        (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (x.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (x.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            P = new Set(t ?? []);
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            U = t;
        },
        MESSAGE_CREATE: function (e) {
            return F(e.channelId, e.message.attachments ?? [], e.message.author?.id);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = t || F(e.channelId, n.attachments ?? [], n.author?.id);
            return t;
        },
        LOGOUT: function () {
            w.clear(), (D = null), (L = null), (b = {});
        },
    }),
    H = B;
