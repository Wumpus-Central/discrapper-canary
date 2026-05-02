"use strict";
n.d(t, {
    pM: () => eg,
    yT: () => ei,
    h$: () => Q,
    MI: () => er,
    Fb: () => ec,
    VO: () => ef,
    GS: () => X,
    fd: () => $,
    Ts: () => eA,
    e6: () => ep,
    H1: () => eh,
    jA: () => eo,
    yd: () => en,
    l0: () => eT,
    Of: () => eS,
    Su: () => el,
    yO: () => z,
    $N: () => eI,
    YK: () => eu,
    eQ: () => K,
    PW: () => eE,
    Cr: () => eN,
    w7: () => ey,
    K7: () => ed,
    HU: () => Z,
    Mt: () => q,
    dR: () => em,
    oH: () => e_,
    Yy: () => es,
    XK: () => ea,
}),
    n(321073);
var i = n(636537),
    r = n(459838),
    s = n(823598),
    a = n(228366),
    o = n(77729),
    l = n(166929),
    u = n(885386),
    c = n(994500),
    d = n(461213),
    _ = n(652215),
    f = n(328153),
    h = n(652896),
    p = n(400492),
    E = n(929921),
    m = n(616356),
    g = n(495544),
    A = n(734057),
    I = n(51760),
    T = n(763827),
    S = n(116956),
    N = n(803301),
    y = n(174459),
    C = n(723702),
    v = n(734066),
    O = n(274372),
    R = n(372684),
    b = n(439818),
    D = n(835245),
    L = n(47167),
    w = n(287809),
    M = n(977997),
    P = n(696016),
    x = n(375708);
function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.nQ.CLIP,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 ? arguments[3] : void 0,
        {
            sourceName: r,
            sourceApplicationId: s,
            activity: a,
            isVoiceOnly: o,
        } = (function () {
            let e = m.A.getStreamerActiveStreamMetadata(),
                t = e?.pid,
                n = e?.sourceName,
                i = (() => {
                    if (null == e) return f.Ay.getVisibleGame();
                    {
                        let e = null != t ? f.Ay.getGameForPID(t) : null,
                            i = null != n ? f.Ay.getGameForName(n) : null;
                        return e ?? i;
                    }
                })(),
                r = e?.id ?? i?.id,
                s = e?.sourceName ?? i?.name,
                a = T.A.getChannelId(),
                o = null == s && null != a;
            if (o) {
                let e = null != a ? A.A.getChannel(a) : null;
                s = null != e ? (0, L.m1)(e, w.default, c.A) : "";
            }
            return {
                sourceName: s,
                sourceApplicationId: r,
                activity: (function (e) {
                    if (null != e)
                        return {
                            state: e.state,
                            details: e.details,
                            timestamps: e.timestamps,
                            party: null != e.party ? { id: e.party.id, size: e.party.size } : void 0,
                        };
                })(d.A.getActivities(!1).find((e) => e.type === _.$pd.PLAYING && e.application_id === r)),
                isVoiceOnly: o,
            };
        })(),
        l = T.A.getChannelId(),
        u = T.A.getGuildId(),
        h = new Set([g.default.getId()]);
    null != l && (h = h.union(new Set(Object.keys(M.A.getVoiceStatesForChannel(l))))),
        n.forEach((e) => {
            let { signal: t } = e;
            "userId" in t && null != t.userId && h.add(t.userId);
        });
    let p = o && t === R.nQ.CLIP ? R.nQ.VOICE_CLIP : t;
    return {
        id: (0, D.A)(),
        createdAt: Date.now(),
        version: P.kd,
        applicationName: r ?? x.intl.string(x.t.qtSJxb),
        applicationId: s,
        activity: a,
        users: Array.from(h),
        clipMethod: e,
        isTemporary: "auto" === e,
        guildId: u ?? void 0,
        channelId: l ?? void 0,
        timeline: n,
        decision: i,
        remoteClipId: i?.signal?.type === R.Gy.DISTRIBUTED ? i.signal.remoteTriggerClipId : void 0,
        length: 0,
        thumbnail: "",
        type: p,
    };
}
var k = n(572164),
    G = n(935208);
let F = [
        (e) => {
            let t = { ...e, version: 1, applicationName: e.gameName, applicationId: void 0 };
            return delete t.gameName, t;
        },
        (e) => ({ ...e, version: 2, name: e.name.startsWith("Clip - ") ? void 0 : e.name }),
        (e) => ({ ...e, version: 3, name: "" === e.name ? void 0 : e.name }),
        (e) => {
            let t = e.filepath.endsWith(".jpeg") || e.filepath.endsWith(".jpg");
            return { ...e, version: 4, timeline: [], type: t ? R.nQ.SCREENSHOT : R.nQ.CLIP };
        },
        (e) => ({ ...e, version: 5, id: (0, D.A)(), createdAt: G.default.extractTimestamp(e.id) }),
    ],
    V = null;
async function B(e) {
    let t = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default,
        i =
            null != V
                ? V
                : (V = t
                      .object({
                          id: t.string().required(),
                          version: t.number().positive().integer().min(0).max(P.kd).optional(),
                          name: t.string().when("version", { is: t.number().less(3), then: t.string().allow("") }),
                          gameName: t
                              .string()
                              .when("version", {
                                  is: t.number().greater(0).required(),
                                  then: t.forbidden(),
                                  otherwise: t.required(),
                              }),
                          applicationName: t
                              .string()
                              .when("version", {
                                  is: t.number().greater(0).required(),
                                  then: t.required().allow(""),
                                  otherwise: t.forbidden(),
                              }),
                          applicationId: t.string(),
                          activity: t
                              .object()
                              .keys({
                                  state: t.string(),
                                  details: t.string(),
                                  timestamps: t.object().keys({ start: t.number(), end: t.number() }),
                                  party: t.object().keys({ id: t.string(), size: t.array().items(t.number()) }),
                              }),
                          users: t.array().items(t.string()).required(),
                          filepath: t.string().required(),
                          length: t.number().required(),
                          thumbnail: t.string().required().allow(""),
                          editMetadata: t
                              .object()
                              .keys({
                                  start: t.number(),
                                  end: t.number(),
                                  applicationAudio: t.boolean(),
                                  voiceAudio: t.boolean(),
                                  soundboardAudio: t.boolean(),
                              }),
                          createdAt: t
                              .number()
                              .when("version", { is: t.number().greater(4).required(), then: t.required() }),
                          type: t
                              .string()
                              .allow(R.nQ.CLIP, R.nQ.SCREENSHOT, R.nQ.VOICE_CLIP)
                              .when("version", {
                                  is: t.number().greater(3).required(),
                                  then: t.required(),
                                  otherwise: t.forbidden(),
                              }),
                          clipMethod: t.string().allow("auto", "manual").required(),
                          guildId: t.string(),
                          channelId: t.string(),
                          isFavorite: t.boolean(),
                          isTemporary: t.boolean(),
                          isCandidate: t.boolean(),
                          remoteClipId: t.string(),
                          decision: t
                              .object()
                              .keys({
                                  reason: t.string(),
                                  clippingPressure: t.number(),
                                  currentThreshold: t.number(),
                                  effectivePressure: t.number(),
                                  timestamp: t.number(),
                                  emotionHistory: t
                                      .array()
                                      .items(
                                          t
                                              .object()
                                              .keys({
                                                  timestamp: t.number(),
                                                  userId: t.string(),
                                                  emotions: t.object().unknown(),
                                              }),
                                      ),
                                  signal: t.object().required(),
                              }),
                          timeline: t
                              .array()
                              .items(
                                  t
                                      .object()
                                      .keys({ signal: t.object().required(), timestamp: t.number().required() })
                                      .unknown(),
                              )
                              .when("version", {
                                  is: t.number().greater(3).required(),
                                  then: t.required(),
                                  otherwise: t.forbidden(),
                              }),
                      })
                      .required());
    try {
        return (
            delete e.eventTimeline,
            delete e.eventTimelineReferenceTimestamp,
            delete e.autoclipData,
            delete e.emotionHistory,
            t.assert(e, i),
            null == e.version && (e.version = 0),
            F.slice(e.version).reduce((e, t) => t(e), e)
        );
    } catch (e) {
        return null;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var H = n(284009),
    j = n.n(H);
async function Y(e) {
    let t,
        { default: i } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
        r = i.createFile(!1),
        s = new Promise((e) => {
            r.onReady = e;
        }),
        a = await e.arrayBuffer();
    for (let e of ((a.fileStart = 0),
    r.appendBuffer(a),
    r.flush(),
    await s,
    j()(null != r.boxes, "mp4boxInputFile.boxes should not be null after parsing"),
    r.boxes))
        "uuid" === e.type && (t = e.start);
    let o = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}
var W = n(956050);
async function K(e) {
    let { allowVoiceRecording: t } = e;
    await u.Q$.updateSetting(t),
        y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t }),
        a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" });
}
async function z(e) {
    let { clipsEnabled: t, guildId: n, trackAnalytics: i = !1 } = e;
    await a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipsEnabled: t, ...(!t && { decoupledClipsEnabled: !1 }) },
    }),
        i &&
            y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                clips_enabled: t,
                guild_id: n,
                ...(!t && { decoupled_clips_enabled: !1 }),
            });
}
function $(e) {
    let { enabled: t, trackAnalytics: n = !1 } = e;
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { ...(t && { clipsEnabled: !0 }), decoupledClipsEnabled: t },
    }),
        n &&
            y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, {
                ...(t && { clips_enabled: !0 }),
                decoupled_clips_enabled: t,
            });
}
function q(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { remindersEnabled: e } }),
        y.default.track(_.HAw.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function Z(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { storageLocation: e } }),
        ec(e).catch((e) => {
            P.nx.error("Failed to load clips directory after storage location change", e);
        });
}
function X(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsQuality: e } });
}
function Q(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { clipsLength: e } });
}
function J(e, t) {
    let n = new Map();
    for (let e in t.framesEncodedByEncoder) {
        let i = t.framesEncodedByEncoder[e],
            r = (0, l.kZ)(e),
            s = n.get(r) ?? 0;
        n.set(r, s + i);
    }
    return {
        ...e,
        frames_encoded_nvidia_cuda: n.get(l.yo.NVIDIA_CUDA) ?? 0,
        frames_encoded_nvidia_direct3d: n.get(l.yo.NVIDIA_DIRECT_3D) ?? 0,
        frames_encoded_openh264: n.get(l.yo.OPENH264) ?? 0,
        frames_encoded_videotoolbox: n.get(l.yo.VIDEOTOOLBOX) ?? 0,
        frames_encoded_amd_direct3d: n.get(l.yo.AMD_DIRECT_3D) ?? 0,
        frames_encoded_amd_vaapi: n.get(l.yo.AMD_VAAPI) ?? 0,
        frames_encoded_intel: n.get(l.yo.INTEL) ?? 0,
        frames_encoded_intel_direct3d: n.get(l.yo.INTEL_DIRECT_3D) ?? 0,
        frames_encoded_uncategorized: n.get(l.yo.UNCATEGORIZED) ?? 0,
        frames_encoded_unknown: n.get(l.yo.UNKNOWN) ?? 0,
        frames_submitted: t.framesSubmitted,
        frames_submitted_during_clip: t.framesSubmittedDuringClip,
        frames_encoded: t.framesEncoded,
        frames_encoded_during_clip: t.framesEncodedDuringClip,
        frames_dropped: t.framesDropped,
        frames_dropped_during_clip: t.framesDroppedDuringClip,
        clip_duration_setting: O.A.getSettings().clipsLength,
        clip_duration: t.clipDuration,
        clip_resolution_width: t.clipResolutionWidth,
        clip_resolution_height: t.clipResolutionHeight,
        min_fps: t.minFps,
        max_fps: t.maxFps,
        submitted_fps: t.submittedFps,
        target_fps: E.A.getState().fps,
        audio_track_count: t.audioTrackCount,
        saved_at: t.savedAt,
    };
}
async function ee(e) {
    if (!(0, v.J)() || e.isCandidate || null == e.applicationId || e.decision?.signal.type !== R.Gy.MANUAL) return;
    let t = T.A.getChannelId(),
        n = A.A.getChannel(t);
    if (
        null != n &&
        (function (e) {
            if (!d.A.getActivities(!1).some((e) => e.type === _.$pd.PLAYING)) return !1;
            if (e.isPrivate()) return e.recipients.every((e) => c.A.isFriend(e));
            if (e.isGuildVocalOrThread()) {
                let t = e.guild_id;
                return !u.JG.getSetting().includes(t);
            }
            return !1;
        })(n)
    )
        try {
            let {
                body: { remote_clip_id: t },
            } = await i.Bo.post({
                url: _.Rsh.SEND_CLIPS_REMOTE_TRIGGER(n.id),
                body: { application_id: e.applicationId },
                rejectWithError: !0,
            });
            null != t && (await es(e.id, { remoteClipId: t }));
        } catch (e) {
            P.nx.warn("Failed to send remote clip trigger", e);
        }
}
async function et() {
    let e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        i = arguments.length > 1 ? arguments[1] : void 0,
        r = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        l = O.A.getSettings().storageLocation,
        u = U(n, R.nQ.CLIP, i, r);
    u.isCandidate = s ?? !1;
    let c = `${(0, b.A)(u.applicationName.substring(0, 20))}_${u.id}.mp4`,
        d = o.A.fileManager.join(l, c),
        f = I.Ay.getMediaEngine(),
        p = JSON.stringify(u),
        E =
            ((t = null != (e = m.A.getCurrentUserActiveStream()) ? S.A.getRTCConnection((0, h._z)(e)) : null),
            {
                rtc_connection_id: t?.getRTCConnectionId(),
                media_session_id: t?.getMediaSessionId(),
                parent_media_session_id: t?.parentMediaSessionId,
                guild_id: u.guildId,
                channel_id: u.channelId,
                application_id: u.applicationId,
                application_name: u.applicationName,
            });
    s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE", clip: { ...u, pending: !0, filepath: d } });
    try {
        let { duration: e, clipStats: t } = await (null != m.A.getCurrentUserActiveStream()
                ? f.saveClipForUser(g.default.getId(), d, p)
                : f.saveClip(d, p)),
            n = J(E, t);
        (n.clip_save_time_ms = t.clipSaveTimeMs),
            (n.clip_size_bytes = t.clipSizeBytes),
            null != t.viewerDecodeFps &&
                ((n.decode_fps_during_clip = t.viewerDecodeFps),
                (n.encode_fps_during_clip = t.viewerEncodeFps),
                (n.target_fps = null));
        let i = "";
        try {
            i = await (0, W.m)(o.A.clips.getClipProtocolURLFromPath(d), 0);
        } catch (e) {
            P.nx.warn("Failed to generate clip thumbnail:", e);
        }
        return (
            (u.thumbnail = i),
            (u.length = e),
            y.default.track(_.HAw.CLIP_SAVED, n),
            P.nx.info(`Clip save succeeded with ${e}ms and thumbnail ${i.length} bytes thumbnail.`),
            await f.updateClipMetadata(d, JSON.stringify(u)),
            { ...u, filepath: d }
        );
    } catch (t) {
        if ((s && a.h.dispatch({ type: "CLIPS_SAVE_CLIP_CANDIDATE_ERROR", clipId: u.id }), !("errorMessage" in t)))
            throw (y.default.track(_.HAw.CLIP_SAVE_FAILURE, E), t);
        let e = J(E, t);
        throw (
            ((e.error_at = t.errorAt),
            (e.error_message = t.errorMessage),
            y.default.track(_.HAw.CLIP_SAVE_FAILURE, e),
            t.errorMessage)
        );
    }
}
async function en() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "manual",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (O.A.getIsAtMaxSaveClipOperations()) return;
    let o = (0, k.TD)() && null != m.A.getCurrentUserActiveStream(),
        l = (0, k.Ao)() && f.Ay.getVisibleGame()?.windowHandle != null && I.Ay.hasClipsSource(),
        u = (0, v.Vr)() && (0, k.TD)() && null == m.A.getCurrentUserActiveStream() && null != T.A.getChannelId();
    if (!o && !l && !u) return;
    let c = m.A.getCurrentUserActiveStream(),
        d = null != c ? (0, h._z)(c) : void 0,
        _ = null != c ? P.Fv.STREAMER : l ? P.Fv.DECOUPLED : P.Fv.VOICE,
        E = await (async () => {
            if (null == d) return;
            let { ownerId: e, guildId: t } = (0, h.Iy)(d),
                n = N.A.getStreamId(e, t, r.x.STREAM);
            if (null != n)
                try {
                    let e = (0, s.lE)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, W.n)(t);
                } catch (e) {
                    return;
                }
        })();
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: _,
        streamKey: d,
        thumbnail: i ? void 0 : E,
        clipMethod: e,
    });
    let g = "manual" === e ? (0, p.Ak)("clip_save", 0.5) : null,
        A = performance.now();
    try {
        if ("auto" === e && !i) {
            let e = O.A.getSettings().maxAutoClips,
                t = O.A.getClips().filter((e) => !0 === e.isTemporary),
                n = t.length - e + 1;
            if (n > 0) {
                let i = t.sort((e, t) => e.createdAt - t.createdAt).slice(0, n);
                for (let t of (P.nx.info(`Deleting ${i.length} temporary clips to stay within limit of ${e}`), i))
                    try {
                        await e_(t.filepath, t.id);
                    } catch (e) {
                        P.nx.error("Failed to delete temporary clip", e);
                    }
            }
        }
        let r = await et(e, t, n, i);
        if (
            i &&
            !O.A.getPendingClipCandidates().some((e) => {
                let { id: t } = e;
                return t === r.id;
            })
        ) {
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }), e_(r.filepath, r.id);
            return;
        }
        a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: r }), ee(r);
    } catch (e) {
        P.nx.error("Clip Failed to Save", e),
            g?.stop(),
            i || (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" });
    }
    P.nx.info(`${O.A.getSettings().clipsLength / 1e3}s clip save took ${Math.round(performance.now() - A)}ms`);
}
async function ei(e) {
    let t, n;
    if (O.A.getIsAtMaxSaveClipOperations()) return;
    let i = m.A.getCurrentUserActiveStream(),
        r = I.Ay.getMediaEngine(),
        s = U(e, R.nQ.SCREENSHOT),
        l = O.A.getSettings().storageLocation,
        u = `${(0, b.A)(s.applicationName.substring(0, 20))}_${s.id}.jpeg`,
        c = o.A.fileManager.join(l, u);
    if (
        (null != s.applicationId &&
            null != (n = f.Ay.getRunningGames().find((e) => e.id === s.applicationId)) &&
            P.nx.log("Matched application ID to running game:", s.applicationId, n.name),
        null == n &&
            null != s.applicationName &&
            null != (n = f.Ay.getRunningGames().find((e) => e.name === s.applicationName)) &&
            P.nx.log("Matched application name to running game:", s.applicationName),
        null == n && null != (n = f.Ay.getVisibleGame()) && P.nx.log("Using visible game for screenshot:", n.name),
        n?.windowHandle != null)
    )
        (t = parseInt(n.windowHandle, 10)), P.nx.log("Using window handle for full resolution screenshot:", t);
    else {
        P.nx.error("Failed to save screenshot: No window handle available"), (0, p.Ak)("clip_error", 0.5);
        return;
    }
    a.h.dispatch({
        type: "CLIPS_SAVE_CLIP_START",
        clipType: P.Fv.STREAMER,
        streamKey: null != i ? (0, h._z)(i) : void 0,
        thumbnail: void 0,
        clipMethod: e ?? "manual",
    });
    let d = (0, p.Ak)("clip_save", 0.5),
        _ = performance.now();
    try {
        let e = { ...s, filepath: c, length: 0, thumbnail: "" },
            n = JSON.stringify(e),
            i = (await r.saveScreenshot(c, n, 90, void 0, t)).toString("base64");
        (e.thumbnail = `data:image/jpeg;base64,${i}`),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP", clip: e }),
            P.nx.info(`Screenshot save took ${Math.round(performance.now() - _)}ms`),
            P.nx.log("Successfully saved screenshot to:", c);
    } catch (e) {
        throw (
            (P.nx.error("Failed to save screenshot:", e),
            d?.stop(),
            (0, p.Ak)("clip_error", 0.5),
            a.h.dispatch({ type: "CLIPS_SAVE_CLIP_ERROR" }),
            e)
        );
    }
}
function er(e, t) {
    a.h.dispatch({ type: "CLIPS_SAVE_ANIMATION_END", streamKey: e, timestamp: t });
}
async function es(e, t) {
    let n = O.A.getClipById(e) ?? O.A.getClipCandidateById(e);
    if (null == n) return;
    let i = { ...n, ...t };
    null != (await B(i)) &&
        (await I.Ay.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)),
        y.default.track(_.HAw.CLIP_EDITED, { clip_uuid: i.id }),
        a.h.dispatch({ type: "CLIPS_UPDATE_METADATA", clip: i }));
}
async function ea(e) {
    await es(e.id, { isFavorite: !e.isFavorite });
}
function eo() {
    a.h.dispatch({ type: "CLIPS_CLEAR_CLIPS_SESSION" });
}
function el() {
    a.h.dispatch({ type: "CLIPS_CLEAR_NEW_CLIP_IDS" });
}
function eu(e) {
    a.h.dispatch({ type: "CLIPS_REMOVE_SINGLE_NEW_CLIP_ID", clipId: e });
}
async function ec(e) {
    if (!(0, C.isDesktop)() || o.A.clips?.loadClipsDirectory == null) return;
    let t = await o.A.clips.loadClipsDirectory(e),
        n = [];
    for (let e of t) {
        let t = await B({ ...e.metadata, filepath: e.filepath });
        null != t && n.push(t);
    }
    a.h.dispatch({ type: "CLIPS_LOAD_DIRECTORY_SUCCESS", clips: n });
}
function ed(e) {
    es(e.id, { isCandidate: !1 }),
        a.h.dispatch({ type: "CLIPS_PROMOTE_CLIP_CANDIDATE", clip: { ...e, isCandidate: !1 } });
}
async function e_(e, t) {
    (0, C.isDesktop)() &&
        o.A.clips?.deleteClip != null &&
        (await o.A.clips.deleteClip(e), a.h.dispatch({ type: "CLIPS_DELETE_CLIP", id: t, filepath: e }));
}
async function ef(e) {
    let t = I.Ay.getMediaEngine(),
        { filepath: n, ...i } = e;
    await es(e.id, i);
    let r = await t.exportClip(
        e.filepath,
        e.editMetadata ?? { start: 0, end: e.length / 1e3, applicationAudio: !0, voiceAudio: !0, soundboardAudio: !0 },
    );
    return e.type === R.nQ.SCREENSHOT ? r : Y(r);
}
function eh(e) {
    a.h.dispatch({ type: "CLIPS_SET_EXPORTING", clipIds: e });
}
function ep(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { maxAutoClips: e } });
}
function eE(e) {
    a.h.dispatch({
        type: "CLIPS_SETTINGS_UPDATE",
        settings: { clipSignals: { ...O.A.getSettings().clipSignals, ...e } },
    });
}
function em(e) {
    let t = I.Ay.getMediaEngine().setClipsMLPipelineTypeEnabled;
    null != t &&
        (t("emotion_classifier", e.emotionClassifier),
        t("wake_word_detector", e.wakeWordDetector),
        t("yell_detector", e.yellDetector),
        t("whisper_transcription", e.whisperTranscription),
        t("laughter_shouting", e.laughterDetector)),
        a.h.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: { mlPipelinesEnabled: { ...O.A.getSettings().mlPipelinesEnabled, ...e } },
        });
}
function eg(e) {
    a.h.dispatch({ type: "CLIPS_SETTINGS_UPDATE", settings: { autoClipPhrases: e } });
}
function eA(e, t) {
    a.h.dispatch({ type: "CLIPS_SIGNAL_CREATED", signal: e, timestamp: t });
}
function eI(e) {
    a.h.dispatch({ type: "CLIPS_ML_DETECTION", detections: e });
}
function eT() {
    eA({ type: R.Gy.MANUAL });
}
function eS(e) {
    a.h.dispatch({ type: "CLIPS_SNOOZE_REMINDERS", until: Date.now() + e });
}
function eN() {
    a.h.dispatch({ type: "CLIPS_CLEAR_REMINDER_SNOOZE" });
}
async function ey(e) {
    await es(e, { isTemporary: !1 });
}
