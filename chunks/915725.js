"use strict";
n.d(t, { Ay: () => $, _c: () => g, he: () => m }), n(321073), n(938796);
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
var A = n(458977),
    h = n(110742),
    I = n(572164),
    f = n(696016),
    p = n(652215),
    T = n(753070);
let m = "default",
    g = "Discord Clips",
    S = {},
    N = {},
    C = {},
    O = [],
    R = 0,
    L = null,
    y = null,
    D = null,
    v = {},
    b = {},
    M = null,
    P = new Set(),
    U = !1,
    w = new Set(),
    G = new Map(),
    x = new Map(),
    k = new Map(),
    F = [],
    V = {
        clipsEnabled: !1,
        storageLocation: m,
        clipsQuality: { resolution: T.on.RESOLUTION_1080, frameRate: T.kn.FPS_30, bitratePercent: f.Y2 },
        clipsLength: f.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        viewerClipsEnabled: !0,
        viewerConnectivity: f.on.ALL,
        maxAutoClips: 20,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    B = {
        clipsSettings: V,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function H() {
    let e;
    if (B.clipsSettings.storageLocation === m && null != o.A && null != o.A.app) {
        try {
            let t = await o.A.app.getPath("videos");
            e = (0, _.CN)(t, g);
        } catch (t) {
            f.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await o.A.app.getPath("documents"));
        }
        (B.clipsSettings.storageLocation = e), K.emitChange();
    }
}
function j(e, t) {
    let n = !1;
    for (let i of e) {
        let e = (0, h.Vi)(i);
        if (null != e)
            for (let r of t) {
                let t = (0, h.Vi)(r);
                null != t && null != (0, h.hL)(e, t) && (G.set(i.id, [...(G.get(i.id) ?? []), r]), (n = !0));
            }
    }
    return n;
}
function W(e) {
    if (!A.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, a.Lt)(e.flags ?? 0, p.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || x.has(e.id)) return !1;
    x.set(e.id, t);
    let n = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === p.SH7.DEFAULT)) return t.message_id;
        })(e),
        i = !(null == n || e.author?.id !== u.default.getId() || w.has(n)) && (w.add(n), !0),
        r = !1;
    return (
        null != n && ((r = j(x.get(n) ?? [], t)), k.set(n, [...(k.get(n) ?? []), ...t])),
        (r = j(t, k.get(e.id) ?? []) || r) || i
    );
}
class Y extends s.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : V, newClipsCount: 0 }),
        (e) => {
            let t = { ...V, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: V.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(453028).Ay.getHardwareEncoding();
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
                        ? V.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? V.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? V.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? V.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? V.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? V.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? V.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
    ];
    initialize(e) {
        null != e && (B = e), H(), this.waitFor(d.Ay);
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
        return O;
    }
    getClipCandidateById(e) {
        return N[e];
    }
    getUserAgnosticState() {
        return B;
    }
    getSettings() {
        return B.clipsSettings;
    }
    getEnableAutoclipping() {
        return B.clipsSettings.enableAutoclipping ?? E.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    hasUserSetAutoclippingSettings() {
        return null != B.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return y;
    }
    getCurrentClipsSession() {
        return D;
    }
    getHistoricalClipsSessionById(e) {
        return v[e];
    }
    devSetLastClipsSession(e) {
        (y = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return L === e;
    }
    getHardwareClassification() {
        return B.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return B.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return B.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return R >= f.VP;
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
        return B.hasClips;
    }
    hasTakenDecoupledClip() {
        return B.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return B.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return B.newClipIds;
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
    hasRepliedWithClip(e) {
        return w.has(e);
    }
    getMatchingPOVAttachments(e) {
        return G.get(e) ?? F;
    }
}
let K = new Y(l.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            B = { ...B, clipsSettings: { ...B.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (R = Math.max(R - 1, 0)),
                t.isCandidate && ((O = [t, ...O]), (N[t.id] = t)),
                null != D &&
                    (D = {
                        ...D,
                        manualClipsSaved: D.manualClipsSaved + +("manual" === t.clipMethod),
                        candidateClipsSaved: D.candidateClipsSaved + +!!t.isCandidate,
                    }),
                t.isCandidate ||
                    ((y = {
                        applicationName: t.applicationName,
                        ended: !1,
                        ...y,
                        newClipIds: [...(y?.newClipIds ?? []), t.id],
                    }),
                    (B = { ...B, newClipIds: [...(B.newClipIds ?? []), t.id] }),
                    (S[t.id] = t),
                    null != t.remoteClipId && (C[t.remoteClipId] = t.id),
                    (B.hasClips = !0));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (y = { applicationName: t.applicationName, ...y, ended: !0, newClipIds: [...(y?.newClipIds ?? []), t.id] }),
                r()(
                    null != D && D.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (D = { ...D, candidateClipsPromoted: D.candidateClipsPromoted + 1 }),
                (B = { ...B, newClipIds: [...(B.newClipIds ?? []), t.id] }),
                (O = O.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete N[t.id],
                (S[t.id] = t),
                (B.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (R += 1), (B.hasTakenDecoupledClip = B.hasTakenDecoupledClip || t === f.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            R = Math.max(R - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === f.RC.BUFFER_WARMING_UP || t === f.RC.BRIDGE_SHUTDOWN) && (R = Math.max(R - 1, 0));
        },
        STREAM_START: function (e) {
            let { sourceName: t, pid: n } = e;
            if (!(0, I.T)()) return !1;
            let i = t;
            if (null != n) {
                let e = d.Ay.getGameForPID(n);
                i = e?.name ?? i;
            }
            if (null == i || "" === i) return !1;
            y = { applicationName: i, newClipIds: [], ended: !1 };
        },
        STREAM_STOP: function (e) {
            let { streamKey: t } = e;
            if (null == y || (0, c.Iy)(t).ownerId !== u.default.getId()) return !1;
            y = 0 === y.newClipIds.length ? null : { ...y, ended: !0 };
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == y) return !1;
            y = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            null != D && (v[D.id] = D),
                (D = { id: t, gameId: n, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 });
        },
        CLIPS_SESSION_STOP: function () {
            if (null == D) return !1;
            (v[D.id] = D), (D = null);
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            B.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            B.newClipIds = B.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((S = {}), (O = []), e.clips))
                t.isCandidate
                    ? ((N[t.id] = t), O.push(t))
                    : ((S[t.id] = t), null != t.remoteClipId && (C[t.remoteClipId] = t.id));
            B.hasClips = Object.keys(S).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = S[e.id];
            (O = O.filter((t) => {
                let { id: n } = t;
                return e.id !== n;
            })),
                delete N[e.id],
                delete S[e.id],
                t?.remoteClipId != null && delete C[t.remoteClipId],
                (B.hasClips = Object.keys(S).length > 0);
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
                n = B.hardwareClassification;
            (B.hardwareClassificationVersion = f.V0),
                (B.hardwareClassification = t),
                B.hardwareClassification === f.k9.MEETS_AUTO_ENABLE &&
                    n !== f.k9.MEETS_AUTO_ENABLE &&
                    (B.clipsSettings.clipsEnabled = !0),
                (B.hardwareClassificationForDecoupled = t);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((M = null), !(0, I.T)())) return !1;
            y = { applicationName: t, newClipIds: [], ended: !1 };
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
                    (B.clipsEducationState.dismissedAt = Date.now()),
                        (B.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (B.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (B.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
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
            return W(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = W(n) || t;
            return t;
        },
        LOGOUT: function () {
            w.clear(), G.clear(), x.clear(), k.clear(), (y = null), (L = null), (b = {});
        },
    }),
    $ = K;
