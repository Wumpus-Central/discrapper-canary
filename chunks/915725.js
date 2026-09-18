(n.d(t, { Ay: () => W, _c: () => p, he: () => f }), n(321073), n(938796));
var i = n(665260),
    r = n(17928),
    a = n(228366),
    s = n(77729),
    l = n(952818),
    o = n(280450),
    d = n(741394);
let c = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-autoclipping-default-override",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = n(218467),
    _ = n(458977),
    E = n(110742),
    A = n(696016),
    h = n(652215),
    I = n(753070);
let f = "default",
    p = "Discord Clips",
    T = {},
    g = {},
    m = [],
    S = 0,
    N = null,
    C = null,
    O = null,
    R = {},
    L = null,
    y = new Set(),
    D = !1,
    v = new Set(),
    b = new Map(),
    M = new Map(),
    P = new Map(),
    U = [],
    w = {
        clipsEnabled: !1,
        storageLocation: f,
        clipsQuality: { resolution: I.on.RESOLUTION_1080, frameRate: I.kn.FPS_30, bitratePercent: A.Y2 },
        clipsLength: A.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        maxAutoClips: 20,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    G = {
        clipsSettings: w,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function x() {
    let e;
    if (G.clipsSettings.storageLocation === f && null != s.A && null != s.A.app) {
        try {
            let t = await s.A.app.getPath("videos");
            e = (0, d.CN)(t, p);
        } catch (t) {
            (A.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await s.A.app.getPath("documents")));
        }
        ((G.clipsSettings.storageLocation = e), j.emitChange());
    }
}
function k() {
    let e = [];
    return (null != C && e.push(C), null != O && O !== C && e.push(O), e);
}
function F(e, t) {
    null == e || (t(e), e.hasClips && (null == O || O.startedAt <= e.startedAt) && (O = e));
}
function B(e, t) {
    let n = !1;
    for (let i of e)
        for (let e of t)
            null != (0, E.hL)(i, e) && (b.set(i.attachmentId, [...(b.get(i.attachmentId) ?? []), e]), (n = !0));
    return n;
}
function V(e) {
    if (!_.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, i.Lt)(e.flags ?? 0, h.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || M.has(e.id)) return !1;
    let n = (function (e, t) {
        let n = [];
        for (let i of t) {
            let t = (0, E.Vi)(i);
            null != t && n.push({ ...t, messageId: e.id, channelId: e.channel_id, attachmentId: i.id });
        }
        return n;
    })(e, t);
    M.set(e.id, n);
    let r = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === h.SH7.DEFAULT)) return t.message_id;
        })(e),
        a = !(null == r || e.author?.id !== o.default.getId() || v.has(r)) && (v.add(r), !0),
        s = !1;
    return (
        null != r && ((s = B(M.get(r) ?? [], n)), P.set(r, [...(P.get(r) ?? []), ...n])),
        (s = B(n, P.get(e.id) ?? []) || s) || a
    );
}
class H extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : w, newClipsCount: 0 }),
        (e) => {
            let t = { ...w, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: w.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(544576).Ay.getHardwareEncoding();
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
                        ? w.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? w.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? w.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? w.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? w.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? w.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? w.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
    ];
    initialize(e) {
        (null != e && (G = e), x(), this.waitFor(l.Ay));
    }
    getClips() {
        return T;
    }
    getClipById(e) {
        return T[e];
    }
    getClipByRemoteId(e) {
        let t = g[e];
        if (null != t) return T[t];
    }
    getClipCandidates() {
        return k().flatMap((e) => e.candidates);
    }
    getPendingMontageClips() {
        return m;
    }
    getClipCandidateById(e) {
        for (let t of k()) {
            let n = t.getCandidate(e);
            if (null != n) return n;
        }
    }
    getUserAgnosticState() {
        return G;
    }
    getSettings() {
        return G.clipsSettings;
    }
    getEnableAutoclipping() {
        return G.clipsSettings.enableAutoclipping ?? c.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    hasUserSetAutoclippingSettings() {
        return null != G.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return O;
    }
    getActiveClipsSession() {
        return C;
    }
    devSetLastClipsSession(e) {
        ((O = e), this.emitChange());
    }
    getClipsWarningShown(e) {
        return N === e;
    }
    getHardwareClassification() {
        return G.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return G.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return G.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return S >= A.VP;
    }
    getLastClipsError() {
        return L;
    }
    isClipsEnabledForUser(e) {
        return R[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return R[e]?.allowVoiceRecording ?? !1;
    }
    hasClips() {
        return G.hasClips;
    }
    hasTakenDecoupledClip() {
        return G.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return G.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return G.newClipIds;
    }
    isClipExporting(e) {
        return y.has(e);
    }
    getExportingClipIds() {
        return y;
    }
    isAutoStashEnabled() {
        return D;
    }
    hasRepliedWithClip(e) {
        return v.has(e);
    }
    getMatchingPOVReferences(e) {
        return b.get(e) ?? U;
    }
}
let j = new H(a.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            G = { ...G, clipsSettings: { ...G.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t, session: n } = e;
            ((S = Math.max(S - 1, 0)),
                F(n, (e) => e.recordSavedClip(t)),
                t.isCandidate ||
                    ((G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                    (T[t.id] = t),
                    null != t.remoteClipId && (g[t.remoteClipId] = t.id),
                    (G.hasClips = !0)));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t, session: n } = e;
            (F(n, (e) => e.recordPromotedClip(t)),
                (G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }),
                (T[t.id] = t),
                (G.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            ((S += 1), (G.hasTakenDecoupledClip = G.hasTakenDecoupledClip || t === A.Fv.DECOUPLED));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            S = Math.max(S - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === A.RC.BUFFER_WARMING_UP || t === A.RC.BRIDGE_SHUTDOWN) && (S = Math.max(S - 1, 0));
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == O) return !1;
            O = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            (C?.end(), (C = new u.k(t, n)));
        },
        CLIPS_SESSION_STOP: function () {
            if (null == C) return !1;
            (C.end(), (C = null));
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            G.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            G.newClipIds = G.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((T = {}), e.clips)) {
                if (t.isCandidate) return;
                ((T[t.id] = t), null != t.remoteClipId && (g[t.remoteClipId] = t.id));
            }
            G.hasClips = Object.keys(T).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = T[e.id];
            for (let t of k()) t.removeCandidate(e.id);
            (delete T[e.id],
                t?.remoteClipId != null && delete g[t.remoteClipId],
                (G.hasClips = Object.keys(T).length > 0));
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            if (t.isCandidate) for (let e of k()) e.updateCandidate(t);
            else ((T[t.id] = t), null != t.remoteClipId && (g[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            R[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, h.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, h.Ajs.ALLOW_VOICE_RECORDING),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            N = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== N && (N = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = G.hardwareClassification;
            ((G.hardwareClassificationVersion = A.V0),
                (G.hardwareClassification = t),
                G.hardwareClassification === A.k9.MEETS_AUTO_ENABLE &&
                    n !== A.k9.MEETS_AUTO_ENABLE &&
                    (G.clipsSettings.clipsEnabled = !0),
                (G.hardwareClassificationForDecoupled = t));
        },
        CLIPS_INIT: function () {
            L = null;
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            L = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case A.P4.Error:
                    L = null;
                    break;
                case A.P4.Disabled:
                case A.P4.Enabled:
                    ((G.clipsEducationState.dismissedAt = Date.now()),
                        (G.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (G.clipsEducationState.numberOfTimesDismissed += 1));
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (G.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            y = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            m = [
                t,
                ...m.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t, session: n } = e;
            ((m = m.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (T[t.id] = t),
                F(n, (e) => e.recordMontageClip(t)),
                ((G = { ...G, newClipIds: [...(G.newClipIds ?? []), t.id] }).hasClips = !0));
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            m = m.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            D = t;
        },
        MESSAGE_CREATE: function (e) {
            return V(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = V(n) || t;
            return t;
        },
        LOGOUT: function () {
            (v.clear(), b.clear(), M.clear(), P.clear(), (C = null), (O = null), (N = null), (R = {}));
        },
    }),
    W = j;
