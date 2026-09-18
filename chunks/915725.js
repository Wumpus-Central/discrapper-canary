(n.d(t, { Ay: () => Y, _c: () => p, he: () => f }), n(321073), n(938796));
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
    m = {},
    S = [],
    N = [],
    C = 0,
    O = null,
    R = null,
    L = null,
    y = {},
    D = null,
    v = new Set(),
    b = !1,
    M = new Set(),
    P = new Map(),
    U = new Map(),
    w = new Map(),
    G = [],
    x = {
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
    k = {
        clipsSettings: x,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function F() {
    let e;
    if (k.clipsSettings.storageLocation === f && null != s.A && null != s.A.app) {
        try {
            let t = await s.A.app.getPath("videos");
            e = (0, d.CN)(t, p);
        } catch (t) {
            (A.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await s.A.app.getPath("documents")));
        }
        ((k.clipsSettings.storageLocation = e), W.emitChange());
    }
}
function B(e, t) {
    null == e || (t(e), e.hasClips && (null == L || L.startedAt <= e.startedAt) && (L = e));
}
function V(e, t) {
    let n = !1;
    for (let i of e)
        for (let e of t)
            null != (0, E.hL)(i, e) && (P.set(i.attachmentId, [...(P.get(i.attachmentId) ?? []), e]), (n = !0));
    return n;
}
function H(e) {
    if (!_.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, i.Lt)(e.flags ?? 0, h.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || U.has(e.id)) return !1;
    let n = (function (e, t) {
        let n = [];
        for (let i of t) {
            let t = (0, E.Vi)(i);
            null != t && n.push({ ...t, messageId: e.id, channelId: e.channel_id, attachmentId: i.id });
        }
        return n;
    })(e, t);
    U.set(e.id, n);
    let r = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === h.SH7.DEFAULT)) return t.message_id;
        })(e),
        a = !(null == r || e.author?.id !== o.default.getId() || M.has(r)) && (M.add(r), !0),
        s = !1;
    return (
        null != r && ((s = V(U.get(r) ?? [], n)), w.set(r, [...(w.get(r) ?? []), ...n])),
        (s = V(n, w.get(e.id) ?? []) || s) || a
    );
}
class j extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : x, newClipsCount: 0 }),
        (e) => {
            let t = { ...x, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: x.decoupledClipsEnabled } }),
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
                        ? x.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? x.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? x.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? x.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? x.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? x.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? x.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
    ];
    initialize(e) {
        (null != e && (k = e), F(), this.waitFor(l.Ay));
    }
    getClips() {
        return T;
    }
    getClipById(e) {
        return T[e];
    }
    getClipByRemoteId(e) {
        let t = m[e];
        if (null != t) return T[t];
    }
    getClipCandidates() {
        return S;
    }
    getPendingMontageClips() {
        return N;
    }
    getClipCandidateById(e) {
        return g[e];
    }
    getUserAgnosticState() {
        return k;
    }
    getSettings() {
        return k.clipsSettings;
    }
    getEnableAutoclipping() {
        return k.clipsSettings.enableAutoclipping ?? c.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    hasUserSetAutoclippingSettings() {
        return null != k.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return L;
    }
    getActiveClipsSession() {
        return R;
    }
    devSetLastClipsSession(e) {
        ((L = e), this.emitChange());
    }
    getClipsWarningShown(e) {
        return O === e;
    }
    getHardwareClassification() {
        return k.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return k.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return k.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return C >= A.VP;
    }
    getLastClipsError() {
        return D;
    }
    isClipsEnabledForUser(e) {
        return y[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return y[e]?.allowVoiceRecording ?? !1;
    }
    hasClips() {
        return k.hasClips;
    }
    hasTakenDecoupledClip() {
        return k.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return k.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return k.newClipIds;
    }
    isClipExporting(e) {
        return v.has(e);
    }
    getExportingClipIds() {
        return v;
    }
    isAutoStashEnabled() {
        return b;
    }
    hasRepliedWithClip(e) {
        return M.has(e);
    }
    getMatchingPOVReferences(e) {
        return P.get(e) ?? G;
    }
}
let W = new j(a.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            k = { ...k, clipsSettings: { ...k.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t, session: n } = e;
            ((C = Math.max(C - 1, 0)),
                t.isCandidate && ((S = [t, ...S]), (g[t.id] = t)),
                B(n, (e) => e.recordSavedClip(t)),
                t.isCandidate ||
                    ((k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }),
                    (T[t.id] = t),
                    null != t.remoteClipId && (m[t.remoteClipId] = t.id),
                    (k.hasClips = !0)));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t, session: n } = e;
            (B(n, (e) => e.recordPromotedClip(t)),
                (k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }),
                (S = S.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete g[t.id],
                (T[t.id] = t),
                (k.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            ((C += 1), (k.hasTakenDecoupledClip = k.hasTakenDecoupledClip || t === A.Fv.DECOUPLED));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            C = Math.max(C - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === A.RC.BUFFER_WARMING_UP || t === A.RC.BRIDGE_SHUTDOWN) && (C = Math.max(C - 1, 0));
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == L) return !1;
            L = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { sessionId: t, gameId: n } = e;
            (R?.end(), (R = new u.k(t, n)));
        },
        CLIPS_SESSION_STOP: function () {
            if (null == R) return !1;
            (R.end(), (R = null));
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            k.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            k.newClipIds = k.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((T = {}), (S = []), e.clips))
                t.isCandidate
                    ? ((g[t.id] = t), S.push(t))
                    : ((T[t.id] = t), null != t.remoteClipId && (m[t.remoteClipId] = t.id));
            k.hasClips = Object.keys(T).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = T[e.id];
            ((S = S.filter((t) => {
                let { id: n } = t;
                return e.id !== n;
            })),
                delete g[e.id],
                delete T[e.id],
                t?.remoteClipId != null && delete m[t.remoteClipId],
                (k.hasClips = Object.keys(T).length > 0));
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (g[t.id] = t) : ((T[t.id] = t), null != t.remoteClipId && (m[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            y[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, h.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, h.Ajs.ALLOW_VOICE_RECORDING),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            O = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== O && (O = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = k.hardwareClassification;
            ((k.hardwareClassificationVersion = A.V0),
                (k.hardwareClassification = t),
                k.hardwareClassification === A.k9.MEETS_AUTO_ENABLE &&
                    n !== A.k9.MEETS_AUTO_ENABLE &&
                    (k.clipsSettings.clipsEnabled = !0),
                (k.hardwareClassificationForDecoupled = t));
        },
        CLIPS_INIT: function () {
            D = null;
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            D = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case A.P4.Error:
                    D = null;
                    break;
                case A.P4.Disabled:
                case A.P4.Enabled:
                    ((k.clipsEducationState.dismissedAt = Date.now()),
                        (k.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (k.clipsEducationState.numberOfTimesDismissed += 1));
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (k.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            v = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            N = [
                t,
                ...N.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t, session: n } = e;
            ((N = N.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (T[t.id] = t),
                B(n, (e) => e.recordMontageClip(t)),
                ((k = { ...k, newClipIds: [...(k.newClipIds ?? []), t.id] }).hasClips = !0));
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            N = N.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            b = t;
        },
        MESSAGE_CREATE: function (e) {
            return H(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = H(n) || t;
            return t;
        },
        LOGOUT: function () {
            (M.clear(), P.clear(), U.clear(), w.clear(), (R = null), (L = null), (O = null), (y = {}));
        },
    }),
    Y = W;
