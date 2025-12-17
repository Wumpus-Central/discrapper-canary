n.d(t, {
    L6: () => B,
    Rc: () => Z,
    WH: () => R,
    aP: () => k,
    dV: () => F,
    g: () => M,
    iV: () => j,
    n9: () => U,
    pR: () => L,
    rn: () => x,
    tK: () => w,
    xc: () => G,
});
var r = n(512722),
    i = n.n(r),
    a = n(990547),
    o = n(544891),
    s = n(570140),
    l = n(258609),
    c = n(595816),
    u = n(569545),
    d = n(525925),
    f = n(522474),
    p = n(543882),
    _ = n(199902),
    m = n(314897),
    h = n(592125),
    g = n(430824),
    E = n(944486),
    b = n(979651),
    y = n(934415),
    O = n(70956),
    v = n(557457),
    S = n(573261);
n(26151), n(493683);
var I = n(475179);
n(287734);
var T = n(981631),
    C = n(70722);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
let P = 2;
function R(e, t, n) {
    s.Z.dispatch(
        N(
            {
                type: "STREAM_START",
                streamType: null != e ? C.lo.GUILD : C.lo.CALL,
                guildId: e,
                channelId: t,
                appContext: __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP,
            },
            n,
        ),
    );
}
function w(e, t) {
    let n = (0, u.V9)(e);
    s.Z.dispatch({
        type: "STREAM_SET_PAUSED",
        streamKey: n,
        paused: t,
    });
}
function D(e, t) {
    let n = h.Z.getChannel(t);
    return i()(null != n, "Cannot join a null voice channel"), !b.Z.isInChannel(t) && (0, y.rY)(n, b.Z, g.Z);
}
function x(e, t) {
    let { defaultWatchMultipleStreams: n } = (0, c.$)({ location: "StreamActionCreators.watchStream" });
    if (null != l.default.getRemoteSessionId()) return;
    let { guildId: r, channelId: i } = e;
    if (null != r && D(r, i)) return;
    let a = (0, u.V9)(e),
        o =
            (null == t ? void 0 : t.forceMultiple) ||
            _.Z.getAllActiveStreamsForChannel(i).filter((e) => {
                let { ownerId: t } = e;
                return t !== m.default.getId();
            }).length >= P;
    s.Z.dispatch({
        type: "STREAM_WATCH",
        streamKey: a,
        allowMultiple: o || n,
    }),
        o || (null != t && t.noFocus) || I.Z.selectParticipant(e.channelId, a);
}
function L(e, t) {
    s.Z.dispatch({
        type: "STREAM_UPDATE_SELF_HIDDEN",
        channelId: e,
        selfStreamHidden: t,
    });
}
function j(e, t) {
    let { guildId: n, channelId: r } = e;
    if (null != n && D(n, r)) return;
    x(e, t);
    let i = f.Z.getWindowOpen(T.KJ3.CHANNEL_CALL_POPOUT),
        a = E.Z.getVoiceChannelId();
    (i && a === r) || (0, d.Z)(e);
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    n && k(e, t),
        s.Z.dispatch({
            type: "STREAM_STOP",
            streamKey: e,
            appContext: __OVERLAY__ ? T.IlC.OVERLAY : T.IlC.APP,
        });
}
function k(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    s.Z.dispatch({
        type: "STREAM_CLOSE",
        streamKey: e,
        canShowFeedback: t,
    });
}
async function U(e, t, n) {
    if (!p.Z.shouldFetchPreview(e, t, n)) return;
    let r = (0, u.V9)({
        streamType: null != e ? C.lo.GUILD : C.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n,
    });
    s.Z.dispatch({
        type: "STREAM_PREVIEW_FETCH_START",
        streamKey: r,
    });
    try {
        let e = await o.tn.get({
            url: T.ANM.STREAM_PREVIEW(r),
            query: { version: Date.now() },
            oldFormErrors: !0,
            rejectWithError: !1,
        });
        s.Z.dispatch({
            type: "STREAM_PREVIEW_FETCH_SUCCESS",
            streamKey: r,
            previewURL: e.body.url,
        });
    } catch (t) {
        let e;
        429 === t.status && (e = t.body.retry_after * O.Z.Millis.SECOND),
            s.Z.dispatch({
                type: "STREAM_PREVIEW_FETCH_FAIL",
                streamKey: r,
                retryAfter: e,
            });
    }
}
async function G(e) {
    try {
        await S.Z.post({
            url: T.ANM.STREAM_NOTIFY(e),
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY },
            rejectWithError: !0,
        });
    } catch (e) {}
}
function Z(e) {
    !0 !== e.noTrack && (0, v.Ye)(e.preset, e.resolution, e.frameRate),
        s.Z.dispatch(N({ type: "STREAM_UPDATE_SETTINGS" }, e));
}
function F(e, t) {
    o.tn.patch({
        url: T.ANM.STREAM(e),
        body: { region: t },
        oldFormErrors: !0,
        rejectWithError: !0,
    });
}
function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = _.Z.getCurrentUserActiveStream();
    null != t && M((0, u.V9)(t), e);
}
