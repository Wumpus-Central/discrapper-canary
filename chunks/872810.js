n.d(t, {
    L6: () => B,
    Rc: () => U,
    WH: () => C,
    aP: () => w,
    dV: () => G,
    g: () => P,
    iV: () => x,
    n9: () => M,
    pR: () => L,
    rn: () => D,
    tK: () => R,
    xc: () => k
});
var i = n(512722),
    r = n.n(i),
    a = n(990547),
    s = n(544891),
    o = n(570140),
    l = n(258609),
    u = n(569545),
    c = n(525925),
    d = n(522474),
    f = n(543882),
    _ = n(199902),
    p = n(314897),
    h = n(592125),
    m = n(430824),
    g = n(944486),
    E = n(979651),
    v = n(934415),
    y = n(70956),
    I = n(557457),
    T = n(573261);
n(26151), n(493683);
var b = n(475179);
n(287734);
var S = n(981631),
    A = n(70722);
let N = 2;
function C(e, t, n) {
    o.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? A.lo.GUILD : A.lo.CALL,
        guildId: e,
        channelId: t,
        appContext: __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP,
        ...n
    });
}
function R(e, t) {
    let n = (0, u.V9)(e);
    o.Z.dispatch({
        type: 'STREAM_SET_PAUSED',
        streamKey: n,
        paused: t
    });
}
function O(e, t) {
    let n = h.Z.getChannel(t);
    return r()(null != n, 'Cannot join a null voice channel'), !E.Z.isInChannel(t) && (0, v.rY)(n, E.Z, m.Z);
}
function D(e, t) {
    if (null != l.Z.getRemoteSessionId()) return;
    let { guildId: n, channelId: i } = e;
    if (null != n && O(n, i)) return;
    let r = (0, u.V9)(e),
        a =
            (null == t ? void 0 : t.forceMultiple) ||
            _.Z.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== p.default.getId();
            }).length >= N;
    o.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: r,
        allowMultiple: a
    }),
        a || (null != t && t.noFocus) || b.Z.selectParticipant(e.channelId, r);
}
function L(e, t) {
    o.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: t
    });
}
function x(e, t) {
    let { guildId: n, channelId: i } = e;
    if (null != n && O(n, i)) return;
    D(e, t);
    let r = d.Z.getWindowOpen(S.KJ3.CHANNEL_CALL_POPOUT),
        a = g.Z.getVoiceChannelId();
    (!r || a !== i) && (0, c.Z)(e);
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    w(e, t),
        o.Z.dispatch({
            type: 'STREAM_STOP',
            streamKey: e,
            appContext: __OVERLAY__ ? S.IlC.OVERLAY : S.IlC.APP
        });
}
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    o.Z.dispatch({
        type: 'STREAM_CLOSE',
        streamKey: e,
        canShowFeedback: t
    });
}
async function M(e, t, n) {
    if (!f.Z.shouldFetchPreview(e, t, n)) return;
    let i = (0, u.V9)({
        streamType: null != e ? A.lo.GUILD : A.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
    });
    o.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: i
    });
    try {
        let e = await s.tn.get({
            url: S.ANM.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        o.Z.dispatch({
            type: 'STREAM_PREVIEW_FETCH_SUCCESS',
            streamKey: i,
            previewURL: e.body.url
        });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * y.Z.Millis.SECOND),
            o.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: i,
                retryAfter: e
            });
    }
}
async function k(e) {
    try {
        await T.Z.post({
            url: S.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0
        });
    } catch (e) {}
}
function U(e) {
    (0, I.Ye)(e.preset, e.resolution, e.frameRate),
        o.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function G(e, t) {
    s.tn.patch({
        url: S.ANM.STREAM(e),
        body: { region: t },
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = _.Z.getCurrentUserActiveStream();
    null != t && P((0, u.V9)(t), e);
}
