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
        return x;
    },
    rn: function () {
        return L;
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
    s = r(990547),
    o = r(544891),
    l = r(570140),
    u = r(258609),
    c = r(569545),
    d = r(525925),
    f = r(522474),
    _ = r(543882),
    h = r(199902),
    p = r(314897),
    m = r(592125),
    g = r(430824),
    E = r(944486),
    v = r(979651),
    I = r(934415),
    T = r(70956),
    b = r(557457),
    y = r(573261);
r(26151), r(493683);
var S = r(475179);
r(287734);
var A = r(981631),
    N = r(70722);
let C = 2;
function R(e, n, r) {
    l.Z.dispatch({
        type: 'STREAM_START',
        streamType: null != e ? N.lo.GUILD : N.lo.CALL,
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
    return a()(null != r, 'Cannot join a null voice channel'), !v.Z.isInChannel(n) && (0, I.rY)(r, v.Z, g.Z);
}
function L(e, n) {
    if (null != u.Z.getRemoteSessionId()) return;
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    let a = (0, c.V9)(e),
        s =
            (null == n ? void 0 : n.forceMultiple) ||
            h.Z.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: n } = e;
                return n !== p.default.getId();
            }).length >= C;
    l.Z.dispatch({
        type: 'STREAM_WATCH',
        streamKey: a,
        allowMultiple: s
    }),
        !s && (null == n || !n.noFocus) && S.Z.selectParticipant(e.channelId, a);
}
function x(e, n) {
    l.Z.dispatch({
        type: 'STREAM_UPDATE_SELF_HIDDEN',
        channelId: e,
        selfStreamHidden: n
    });
}
function w(e, n) {
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    L(e, n);
    let a = f.Z.getWindowOpen(A.KJ3.CHANNEL_CALL_POPOUT),
        s = E.Z.getVoiceChannelId();
    if (!a || s !== i) (0, d.Z)(e);
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
    if (!_.Z.shouldFetchPreview(e, n, r)) return;
    let i = (0, c.V9)({
        streamType: null != e ? N.lo.GUILD : N.lo.CALL,
        guildId: e,
        channelId: n,
        ownerId: r
    });
    l.Z.dispatch({
        type: 'STREAM_PREVIEW_FETCH_START',
        streamKey: i
    });
    try {
        let e = await o.tn.get({
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
        429 === n.status && (e = n.body.retry_after * T.Z.Millis.SECOND),
            l.Z.dispatch({
                type: 'STREAM_PREVIEW_FETCH_FAIL',
                streamKey: i,
                retryAfter: e
            });
    }
}
async function U(e) {
    try {
        await y.Z.post({
            url: A.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0
        });
    } catch (e) {}
}
function B(e) {
    (0, b.Ye)(e.preset, e.resolution, e.frameRate),
        l.Z.dispatch({
            type: 'STREAM_UPDATE_SETTINGS',
            ...e
        });
}
function G(e, n) {
    o.tn.patch({
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
