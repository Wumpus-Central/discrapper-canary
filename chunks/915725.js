(n.d(t, { Ay: () => j, _c: () => f, he: () => I }), n(321073), n(938796));
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
var u = n(458977),
    _ = n(110742),
    E = n(696016),
    A = n(652215),
    h = n(753070);
let I = "default",
    f = "Discord Clips",
    p = {},
    T = {},
    g = [],
    m = 0,
    S = null,
    N = null,
    C = null,
    O = {},
    R = null,
    L = new Set(),
    y = !1,
    D = new Set(),
    v = new Map(),
    b = new Map(),
    M = new Map(),
    P = [],
    U = {
        clipsEnabled: !1,
        storageLocation: I,
        clipsQuality: { resolution: h.on.RESOLUTION_1080, frameRate: h.kn.FPS_30, bitratePercent: E.Y2 },
        clipsLength: E.LX.SECONDS_30,
        remindersEnabled: !0,
        decoupledClipsEnabled: !1,
        maxAutoClips: 20,
        clipSignals: { enableDistributedSignals: !0, enableGameSignals: !0 },
        debugTooltipsEnabled: !1,
        enableAutoclipping: void 0,
        showPovClipsInGallery: !1,
    },
    w = {
        clipsSettings: U,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function G() {
    let e;
    if (w.clipsSettings.storageLocation === I && null != s.A && null != s.A.app) {
        try {
            let t = await s.A.app.getPath("videos");
            e = (0, d.CN)(t, f);
        } catch (t) {
            (E.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await s.A.app.getPath("documents")));
        }
        ((w.clipsSettings.storageLocation = e), H.emitChange());
    }
}
function x() {
    let e = [];
    return (null != N && e.push(N), null != C && C !== N && e.push(C), e);
}
function k(e, t) {
    null == e || (t(e), e.hasClips && (null == C || C.startedAt <= e.startedAt) && (C = e));
}
function F(e, t) {
    let n = !1;
    for (let i of e)
        for (let e of t)
            null != (0, _.hL)(i, e) && (v.set(i.attachmentId, [...(v.get(i.attachmentId) ?? []), e]), (n = !0));
    return n;
}
function B(e) {
    if (!u.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, i.Lt)(e.flags ?? 0, A.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || b.has(e.id)) return !1;
    let n = (function (e, t) {
        let n = [];
        for (let i of t) {
            let t = (0, _.Vi)(i);
            null != t && n.push({ ...t, messageId: e.id, channelId: e.channel_id, attachmentId: i.id });
        }
        return n;
    })(e, t);
    b.set(e.id, n);
    let r = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === A.SH7.DEFAULT)) return t.message_id;
        })(e),
        a = !(null == r || e.author?.id !== o.default.getId() || D.has(r)) && (D.add(r), !0),
        s = !1;
    return (
        null != r && ((s = F(b.get(r) ?? [], n)), M.set(r, [...(M.get(r) ?? []), ...n])),
        (s = F(n, M.get(e.id) ?? []) || s) || a
    );
}
class V extends r.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : U, newClipsCount: 0 }),
        (e) => {
            let t = { ...U, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: U.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(25578).Ay.getHardwareEncoding();
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
                        ? U.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? U.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? U.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? U.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? U.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? U.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? U.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
    ];
    initialize(e) {
        (null != e && (w = e), G(), this.waitFor(l.Ay));
    }
    getClips() {
        return p;
    }
    getClipById(e) {
        return p[e];
    }
    getClipByRemoteId(e) {
        let t = T[e];
        if (null != t) return p[t];
    }
    getClipCandidates() {
        return x().flatMap((e) => e.candidates);
    }
    getPendingMontageClips() {
        return g;
    }
    getUserAgnosticState() {
        return w;
    }
    getSettings() {
        return w.clipsSettings;
    }
    getEnableAutoclipping() {
        return w.clipsSettings.enableAutoclipping ?? c.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    hasUserSetAutoclippingSettings() {
        return null != w.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return C;
    }
    getActiveClipsSession() {
        return N;
    }
    devSetLastClipsSession(e) {
        ((C = e), this.emitChange());
    }
    getClipsWarningShown(e) {
        return S === e;
    }
    getHardwareClassification() {
        return w.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return w.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return w.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return m >= E.VP;
    }
    getLastClipsError() {
        return R;
    }
    isClipsEnabledForUser(e) {
        return O[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return O[e]?.allowVoiceRecording ?? !1;
    }
    hasClips() {
        return w.hasClips;
    }
    hasTakenDecoupledClip() {
        return w.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return w.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return w.newClipIds;
    }
    isClipExporting(e) {
        return L.has(e);
    }
    getExportingClipIds() {
        return L;
    }
    isAutoStashEnabled() {
        return y;
    }
    hasRepliedWithClip(e) {
        return D.has(e);
    }
    getMatchingPOVReferences(e) {
        return v.get(e) ?? P;
    }
}
let H = new V(a.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            w = { ...w, clipsSettings: { ...w.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t, session: n } = e;
            ((m = Math.max(m - 1, 0)),
                k(n, (e) => e.recordSavedClip(t)),
                t.isCandidate ||
                    ((w = { ...w, newClipIds: [...(w.newClipIds ?? []), t.id] }),
                    (p[t.id] = t),
                    null != t.remoteClipId && (T[t.remoteClipId] = t.id),
                    (w.hasClips = !0)));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t, session: n } = e;
            (k(n, (e) => e.recordPromotedClip(t)),
                (w = { ...w, newClipIds: [...(w.newClipIds ?? []), t.id] }),
                (p[t.id] = t),
                (w.hasClips = !0));
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            ((m += 1), (w.hasTakenDecoupledClip = w.hasTakenDecoupledClip || t === E.Fv.DECOUPLED));
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            m = Math.max(m - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === E.RC.BUFFER_WARMING_UP || t === E.RC.BRIDGE_SHUTDOWN) && (m = Math.max(m - 1, 0));
        },
        CLIPS_CLEAR_LAST_CLIPS_SESSION: function () {
            if (null == C) return !1;
            C = null;
        },
        CLIPS_SESSION_START: function (e) {
            let { session: t } = e;
            (N?.end(), (N = t));
        },
        CLIPS_SESSION_STOP: function () {
            if (null == N) return !1;
            (N.end(), (N = null));
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            w.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            w.newClipIds = w.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((p = {}), e.clips)) {
                if (t.isCandidate) return;
                ((p[t.id] = t), null != t.remoteClipId && (T[t.remoteClipId] = t.id));
            }
            w.hasClips = Object.keys(p).length > 0;
        },
        CLIPS_DELETE_CLIP: function (e) {
            let t = p[e.id];
            for (let t of x()) t.removeCandidate(e.id);
            (delete p[e.id],
                t?.remoteClipId != null && delete T[t.remoteClipId],
                (w.hasClips = Object.keys(p).length > 0));
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            if (t.isCandidate) return !1;
            ((p[t.id] = t), null != t.remoteClipId && (T[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            O[e.userId] = {
                clipsEnabled: (0, i.Lt)(e.flags, A.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, i.Lt)(e.flags, A.Ajs.ALLOW_VOICE_RECORDING),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            S = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== S && (S = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = w.hardwareClassification;
            ((w.hardwareClassificationVersion = E.V0),
                (w.hardwareClassification = t),
                w.hardwareClassification === E.k9.MEETS_AUTO_ENABLE &&
                    n !== E.k9.MEETS_AUTO_ENABLE &&
                    (w.clipsSettings.clipsEnabled = !0),
                (w.hardwareClassificationForDecoupled = t));
        },
        CLIPS_INIT: function () {
            R = null;
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            R = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case E.P4.Error:
                    R = null;
                    break;
                case E.P4.Disabled:
                case E.P4.Enabled:
                    ((w.clipsEducationState.dismissedAt = Date.now()),
                        (w.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (w.clipsEducationState.numberOfTimesDismissed += 1));
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (w.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            L = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            g = [
                t,
                ...g.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t, session: n } = e;
            ((g = g.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (p[t.id] = t),
                k(n, (e) => e.recordMontageClip(t)),
                ((w = { ...w, newClipIds: [...(w.newClipIds ?? []), t.id] }).hasClips = !0));
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            g = g.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            y = t;
        },
        MESSAGE_CREATE: function (e) {
            return B(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = B(n) || t;
            return t;
        },
        LOGOUT: function () {
            (D.clear(), v.clear(), b.clear(), M.clear(), (N = null), (C = null), (S = null), (O = {}));
        },
    }),
    j = H;
