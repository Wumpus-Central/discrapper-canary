n.d(t, { Ay: () => z, _c: () => g, he: () => m }), n(321073), n(938796);
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
    R = [],
    L = 0,
    y = null,
    D = null,
    v = null,
    b = {},
    M = {},
    P = null,
    U = new Set(),
    w = !1,
    G = new Set(),
    x = new Map(),
    k = new Map(),
    F = new Map(),
    V = [],
    B = {
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
    H = {
        clipsSettings: B,
        hardwareClassification: null,
        hardwareClassificationForDecoupled: null,
        hardwareClassificationVersion: 0,
        newClipIds: [],
        hasClips: !1,
        hasTakenDecoupledClip: !1,
        clipsEducationState: { dismissedAt: null, numberOfGamesLaunchedSinceDismissal: 0, numberOfTimesDismissed: 0 },
    };
async function j() {
    let e;
    if (H.clipsSettings.storageLocation === m && null != o.A && null != o.A.app) {
        try {
            let t = await o.A.app.getPath("videos");
            e = (0, _.CN)(t, g);
        } catch (t) {
            f.nx.error("Failed to resolve videos path for default storage migration", t),
                (e = await o.A.app.getPath("documents"));
        }
        (H.clipsSettings.storageLocation = e), $.emitChange();
    }
}
function W(e, t) {
    let n = !1;
    for (let i of e) {
        let e = (0, h.Vi)(i);
        if (null != e)
            for (let r of t) {
                let t = (0, h.Vi)(r);
                null != t && null != (0, h.hL)(e, t) && (x.set(i.id, [...(x.get(i.id) ?? []), r]), (n = !0));
            }
    }
    return n;
}
function Y(e) {
    if (!A.A.getConfig({ location: "trackClipMessage" }).enableDistributedClips) return !1;
    let t = e.attachments?.filter((e) => (0, a.Lt)(e.flags ?? 0, p.sbO.IS_CLIP)) ?? [];
    if (0 === t.length || k.has(e.id)) return !1;
    k.set(e.id, t);
    let n = (function (e) {
            let { message_reference: t } = e;
            if (t?.message_id != null && (null == t.type || t.type === p.SH7.DEFAULT)) return t.message_id;
        })(e),
        i = !(null == n || e.author?.id !== u.default.getId() || G.has(n)) && (G.add(n), !0),
        r = !1;
    return (
        null != n && ((r = W(k.get(n) ?? [], t)), F.set(n, [...(F.get(n) ?? []), ...t])),
        (r = W(t, F.get(e.id) ?? []) || r) || i
    );
}
class K extends s.Ay.DeviceSettingsStore {
    static displayName = "ClipsStore";
    static persistKey = "ClipsStore";
    static migrations = [
        (e) => ({ clipsSettings: null != e ? e : B, newClipsCount: 0 }),
        (e) => {
            let t = { ...B, ...e.clipsSettings };
            return { ...e, clipsSettings: t };
        },
        (e) => ({ ...e, newClipIds: e.newClipIds ?? [] }),
        (e) => ({
            ...e,
            hardwareClassification: e.hardwareClassification ?? null,
            hardwareClassificationVersion: e.hardwareClassificationVersion ?? 0,
        }),
        (e) => ({ ...e, hasClips: e.hasClips ?? !1 }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings, decoupledClipsEnabled: B.decoupledClipsEnabled } }),
        (e) => ({ ...e, hardwareClassificationForDecoupled: e.hardwareClassificationForDecoupled ?? null }),
        (e) => {
            let t = n(45630).Ay.getHardwareEncoding();
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
                        ? B.clipsQuality
                        : e.clipsSettings.clipsQuality,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: e.clipsSettings.remindersEnabled ?? B.remindersEnabled,
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
                maxAutoClips: e.clipsSettings.maxAutoClips ?? B.maxAutoClips,
                clipSignals: e.clipsSettings.clipSignals ?? B.clipSignals,
            },
        }),
        (e) => ({ ...e, clipsSettings: { ...e.clipsSettings } }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                enableAutoclipping: e.clipsSettings.enableAutoclipping ?? B.enableAutoclipping,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                showPovClipsInGallery: e.clipsSettings.showPovClipsInGallery ?? B.showPovClipsInGallery,
            },
        }),
        (e) => ({
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsQuality: {
                    ...e.clipsSettings.clipsQuality,
                    bitratePercent: e.clipsSettings.clipsQuality.bitratePercent ?? B.clipsQuality.bitratePercent,
                },
            },
        }),
        (e) => {
            let t = e.clipsSettings.clipsEnabled && e.clipsSettings.decoupledClipsEnabled;
            return { ...e, clipsSettings: { ...e.clipsSettings, clipsEnabled: t, decoupledClipsEnabled: t } };
        },
    ];
    initialize(e) {
        null != e && (H = e), j(), this.waitFor(d.Ay);
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
    getPendingMontageClips() {
        return R;
    }
    getClipCandidateById(e) {
        return N[e];
    }
    getUserAgnosticState() {
        return H;
    }
    getSettings() {
        return H.clipsSettings;
    }
    getEnableAutoclipping() {
        return H.clipsSettings.enableAutoclipping ?? E.getConfig({ location: "getAutoclippingDefault" }).enabled;
    }
    hasUserSetAutoclippingSettings() {
        return null != H.clipsSettings.enableAutoclipping;
    }
    getLastClipsSession() {
        return D;
    }
    getCurrentClipsSession() {
        return v;
    }
    getHistoricalClipsSessionById(e) {
        return b[e];
    }
    devSetLastClipsSession(e) {
        (D = e), this.emitChange();
    }
    getClipsWarningShown(e) {
        return y === e;
    }
    getHardwareClassification() {
        return H.hardwareClassification;
    }
    getHardwareClassificationForDecoupled() {
        return H.hardwareClassificationForDecoupled;
    }
    getHardwareClassificationVersion() {
        return H.hardwareClassificationVersion;
    }
    getIsAtMaxSaveClipOperations() {
        return L >= f.VP;
    }
    getLastClipsError() {
        return P;
    }
    isClipsEnabledForUser(e) {
        return M[e]?.clipsEnabled ?? !1;
    }
    isVoiceRecordingAllowedForUser(e) {
        return M[e]?.allowVoiceRecording ?? !1;
    }
    isViewerClippingAllowedForUser(e) {
        return M[e]?.allowAnyViewerClips ?? !1;
    }
    hasClips() {
        return H.hasClips;
    }
    hasTakenDecoupledClip() {
        return H.hasTakenDecoupledClip;
    }
    canShowReminders() {
        return H.clipsSettings.remindersEnabled;
    }
    getNewClipIds() {
        return H.newClipIds;
    }
    isClipExporting(e) {
        return U.has(e);
    }
    getExportingClipIds() {
        return U;
    }
    isAutoStashEnabled() {
        return w;
    }
    hasRepliedWithClip(e) {
        return G.has(e);
    }
    getMatchingPOVAttachments(e) {
        return x.get(e) ?? V;
    }
}
let $ = new K(l.h, {
        CLIPS_SETTINGS_UPDATE: function (e) {
            let { settings: t } = e;
            H = { ...H, clipsSettings: { ...H.clipsSettings, ...t } };
        },
        CLIPS_SAVE_CLIP: function (e) {
            let { clip: t } = e;
            (L = Math.max(L - 1, 0)),
                t.isCandidate && ((O = [t, ...O]), (N[t.id] = t)),
                null != v &&
                    (v = {
                        ...v,
                        manualClipsSaved: v.manualClipsSaved + +("manual" === t.clipMethod),
                        candidateClipsSaved: v.candidateClipsSaved + +!!t.isCandidate,
                    }),
                t.isCandidate ||
                    ((D = {
                        applicationName: t.applicationName,
                        ended: !1,
                        ...D,
                        newClipIds: [...(D?.newClipIds ?? []), t.id],
                    }),
                    (H = { ...H, newClipIds: [...(H.newClipIds ?? []), t.id] }),
                    (S[t.id] = t),
                    null != t.remoteClipId && (C[t.remoteClipId] = t.id),
                    (H.hasClips = !0));
        },
        CLIPS_PROMOTE_CLIP_CANDIDATE: function (e) {
            let { clip: t } = e;
            (D = { applicationName: t.applicationName, ...D, ended: !0, newClipIds: [...(D?.newClipIds ?? []), t.id] }),
                r()(
                    null != v && v.id === t.gameSessionId,
                    "Promoting clip candidates that do not match current autoclip session",
                ),
                (v = { ...v, candidateClipsPromoted: v.candidateClipsPromoted + 1 }),
                (H = { ...H, newClipIds: [...(H.newClipIds ?? []), t.id] }),
                (O = O.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                })),
                delete N[t.id],
                (S[t.id] = t),
                (H.hasClips = !0);
        },
        CLIPS_SAVE_CLIP_START: function (e) {
            let { clipType: t } = e;
            (L += 1), (H.hasTakenDecoupledClip = H.hasTakenDecoupledClip || t === f.Fv.DECOUPLED);
        },
        CLIPS_SAVE_CLIP_ERROR: function () {
            L = Math.max(L - 1, 0);
        },
        CLIPS_SAVE_CLIP_NO_OP: function (e) {
            let { reason: t } = e;
            (t === f.RC.BUFFER_WARMING_UP || t === f.RC.BRIDGE_SHUTDOWN) && (L = Math.max(L - 1, 0));
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
            null != v && (b[v.id] = v),
                (v = { id: t, gameId: n, manualClipsSaved: 0, candidateClipsSaved: 0, candidateClipsPromoted: 0 });
        },
        CLIPS_SESSION_STOP: function () {
            if (null == v) return !1;
            (b[v.id] = v), (v = null);
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function () {
            H.newClipIds = [];
        },
        CLIPS_REMOVE_SINGLE_NEW_CLIP_ID: function (e) {
            let { clipId: t } = e;
            H.newClipIds = H.newClipIds.filter((e) => e !== t);
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
            for (let t of ((S = {}), (O = []), e.clips))
                t.isCandidate
                    ? ((N[t.id] = t), O.push(t))
                    : ((S[t.id] = t), null != t.remoteClipId && (C[t.remoteClipId] = t.id));
            H.hasClips = Object.keys(S).length > 0;
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
                (H.hasClips = Object.keys(S).length > 0);
        },
        CLIPS_UPDATE_METADATA: function (e) {
            let { clip: t } = e;
            t.isCandidate ? (N[t.id] = t) : ((S[t.id] = t), null != t.remoteClipId && (C[t.remoteClipId] = t.id));
        },
        RTC_CONNECTION_FLAGS: function (e) {
            M[e.userId] = {
                clipsEnabled: (0, a.Lt)(e.flags, p.Ajs.CLIPS_ENABLED),
                allowVoiceRecording: (0, a.Lt)(e.flags, p.Ajs.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, a.Lt)(e.flags, p.Ajs.ALLOW_ANY_VIEWER_CLIPS),
            };
        },
        CLIPS_SHOW_CALL_WARNING: function (e) {
            let { channelId: t } = e;
            y = t;
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            t !== y && (y = null);
        },
        CLIPS_CLASSIFY_HARDWARE: function (e) {
            let { classification: t } = e,
                n = H.hardwareClassification;
            (H.hardwareClassificationVersion = f.V0),
                (H.hardwareClassification = t),
                H.hardwareClassification === f.k9.MEETS_AUTO_ENABLE &&
                    n !== f.k9.MEETS_AUTO_ENABLE &&
                    (H.clipsSettings.clipsEnabled = !0),
                (H.hardwareClassificationForDecoupled = t);
        },
        CLIPS_INIT: function (e) {
            let { applicationName: t } = e;
            if (((P = null), !(0, I.T)())) return !1;
            D = { applicationName: t, newClipIds: [], ended: !1 };
        },
        CLIPS_INIT_FAILURE: function (e) {
            let { errMsg: t } = e;
            P = t;
        },
        CLIPS_DISMISS_EDUCATION: function (e) {
            let { educationType: t } = e;
            switch (t) {
                case f.P4.Error:
                    P = null;
                    break;
                case f.P4.Disabled:
                case f.P4.Enabled:
                    (H.clipsEducationState.dismissedAt = Date.now()),
                        (H.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0),
                        (H.clipsEducationState.numberOfTimesDismissed += 1);
            }
        },
        RUNNING_GAMES_CHANGE: function (e) {
            let { added: t } = e;
            t.length > 0 && (H.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
        },
        CLIPS_SET_EXPORTING: function (e) {
            let { clipIds: t } = e;
            U = new Set(t ?? []);
        },
        CLIPS_MONTAGE_RENDER_START: function (e) {
            let { clip: t } = e;
            R = [
                t,
                ...R.filter((e) => {
                    let { id: n } = e;
                    return n !== t.id;
                }),
            ];
        },
        CLIPS_MONTAGE_RENDER_DONE: function (e) {
            let { clip: t } = e;
            (R = R.filter((e) => {
                let { id: n } = e;
                return n !== t.id;
            })),
                (S[t.id] = t),
                (null == D || D.applicationName === t.applicationName) &&
                    (D = {
                        applicationName: t.applicationName,
                        ...D,
                        ended: !0,
                        newClipIds: [...(D?.newClipIds ?? []), t.id],
                    }),
                ((H = { ...H, newClipIds: [...(H.newClipIds ?? []), t.id] }).hasClips = !0);
        },
        CLIPS_MONTAGE_RENDER_ERROR: function (e) {
            let { clipId: t } = e;
            R = R.filter((e) => {
                let { id: n } = e;
                return n !== t;
            });
        },
        CLIPS_SET_AUTO_STASH_ENABLED: function (e) {
            let { enabled: t } = e;
            w = t;
        },
        MESSAGE_CREATE: function (e) {
            return Y(e.message);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let t = !1;
            for (let n of e.messages) t = Y(n) || t;
            return t;
        },
        LOGOUT: function () {
            G.clear(), x.clear(), k.clear(), F.clear(), (D = null), (y = null), (M = {});
        },
    }),
    z = $;
