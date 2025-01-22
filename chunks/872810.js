r.d(n, {
    L6: function () {
        return Z;
    },
    Rc: function () {
        return B;
    },
    WH: function () {
        return R;
    },
    aP: function () {
        return M;
    },
    dV: function () {
        return G;
    },
    g: function () {
        return P;
    },
    iV: function () {
        return w;
    },
    n9: function () {
        return k;
    },
    pR: function () {
        return L;
    },
    rn: function () {
        return x;
    },
    tK: function () {
        return O;
    },
    xc: function () {
        return U;
    }
});
var i = r(512722),
    a = r.n(i),
    o = r(990547),
    s = r(544891),
    l = r(570140),
    u = r(258609),
    c = r(569545),
    d = r(525925),
    f = r(522474),
    p = r(543882),
    h = r(199902),
    _ = r(314897),
    m = r(592125),
    g = r(430824),
    E = r(944486),
    v = r(979651),
    y = r(934415),
    b = r(70956),
    I = r(557457),
    T = r(573261);
r(26151), r(493683);
var S = r(475179);
r(287734);
var A = r(981631),
    C = r(70722);
let N = 2;
function R(e, n, r) {
    l.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? C.lo.GUILD : C.lo.CALL,
        guildId: e,
        channelId: n,
        appContext: __OVERLAY__ ? A.IlC.OVERLAY : A.IlC.APP,
        ...r
    });
}
function O(e, n) {
    let r = (0, c.V9)(e);
    l.Z.dispatch({
        type: 'STREAM_SET_PAUSED',
        streamKey: r,
        paused: n
    });
}
function D(e, n) {
    let r = m.Z.getChannel(n);
    return a()(null != r, 'Cannot join a null voice channel'), !v.Z.isInChannel(n) && (0, y.rY)(r, v.Z, g.Z);
}
function x(e, n) {
    if (null != u.Z.getRemoteSessionId()) return;
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    let a = (0, c.V9)(e),
        o =
            (null == n ? void 0 : n.forceMultiple) ||
            h.Z.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: n } = e;
                return n !== _.default.getId();
            }).length >= N;
    l.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: a,
        allowMultiple: o
    }),
        !o && (null == n || !n.noFocus) && S.Z.selectParticipant(e.channelId, a);
}
function L(e, n) {
    l.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: n
    });
}
function w(e, n) {
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    x(e, n);
    let a = f.Z.getWindowOpen(A.KJ3.CHANNEL_CALL_POPOUT),
        o = E.Z.getVoiceChannelId();
    if (!a || o !== i) (0, d.Z)(e);
}
function P(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    M(e, n),
        l.Z.dispatch({
            type: 'STREAM_STOP',
            streamKey: e,
            appContext: __OVERLAY__ ? A.IlC.OVERLAY : A.IlC.APP
        });
}
function M(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.Z.dispatch({
        type: 'STREAM_CLOSE',
        streamKey: e,
        canShowFeedback: n
    });
}
async function k(e, n, r) {
    if (!p.Z.shouldFetchPreview(e, n, r)) return;
    let i = (0, c.V9)({
        streamType: null != e ? C.lo.GUILD : C.lo.CALL,
        guildId: e,
        channelId: n,
        ownerId: r
    });
    l.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: i
    });
    try {
        let e = await s.tn.get({
            url: A.ANM.STREAM_PREVIEW(i),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'STREAM_PREVIEW_FETCH_SUCCESS',
            streamKey: i,
            previewURL: e.body.url
        });
    } catch (n) {
        let e;
        429 === n.status && (e = n.body.retry_after * b.Z.Millis.SECOND),
            l.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: i,
                retryAfter: e
            });
    }
}
async function U(e) {
    try {
        await T.Z.post({
            url: A.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: o.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0
        });
    } catch (e) {}
}
function B(e) {
    (0, I.Ye)(e.preset, e.resolution, e.frameRate),
        l.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function G(e, n) {
    s.tn.patch({
        url: A.ANM.STREAM(e),
        body: { region: n },
        oldFormErrors: !0,
        rejectWithError: !0
    });
}
function Z() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = h.Z.getCurrentUserActiveStream();
    null != n && P((0, c.V9)(n), e);
}
