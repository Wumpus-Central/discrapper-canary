n.d(t, { Z: () => V }), n(388685), n(997841);
var r = n(481060),
    i = n(570140),
    a = n(430742),
    o = n(904245),
    s = n(166459),
    l = n(531643),
    c = n(881052),
    u = n(673750),
    d = n(141795),
    f = n(476326),
    _ = n(680287),
    p = n(247206),
    h = n(539573),
    m = n(786761),
    g = n(3148),
    E = n(48854),
    b = n(785359),
    y = n(79390),
    O = n(980463),
    v = n(992970),
    I = n(576645),
    S = n(317951),
    T = n(287941),
    A = n(623292),
    N = n(807092),
    C = n(467798),
    P = n(703558),
    R = n(117530),
    w = n(62817),
    D = n(630388),
    L = n(226351),
    x = n(981631),
    k = n(388032);
function M(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function B(e) {
    var t, n, r, d;
    let f,
        { channelId: w, uploads: M, draftType: U, parsedMessage: B, options: F = {}, raiseEndpointErrors: V = !1 } = e,
        Z = new _.Z(x.ANM.MESSAGES(w)),
        H = new L.o(),
        Y = {
            content: '',
            nonce: '',
            channel_id: w,
            type: x.uaV.DEFAULT,
            sticker_ids: null == F ? void 0 : F.stickerIds,
            poll: null == F ? void 0 : F.poll,
            confetti_potion: (0, I.vY)(null == F ? void 0 : F.confettiPotionData),
            scheduled_timestamp: null == F ? void 0 : F.scheduledTimestamp
        };
    null != B && (Y.content = null == B ? void 0 : B.content), null != N.Z.getPendingReply(w) && ((Y.type = x.uaV.REPLY), (Y.message_reference = F.messageReference), (Y.allowed_mentions = F.allowedMentions), (0, A.A6)(w));
    let [W, K] = (0, C.Z)(Y.content);
    W && ((Y.content = K), (Y.flags = (0, D.pj)(null != (n = Y.flags) ? n : 0, x.iLy.SUPPRESS_NOTIFICATIONS)));
    let z = null != (r = F.nonce) ? r : (0, E.r)(),
        q = (0, g.ZP)({
            channelId: w,
            content: Y.content,
            tts: null != (d = null == B ? void 0 : B.tts) && d,
            type: Y.type,
            messageReference: Y.message_reference,
            flags: Y.flags,
            nonce: z,
            poll: (0, y.x9)(F.poll)
        });
    function Q() {
        '' !== Y.content && '' === P.Z.getDraft(w, U) && a.Z.saveDraft(w, Y.content, U),
            0 === R.Z.getUploadCount(w, U) &&
                s.Z.setUploads({
                    channelId: w,
                    uploads: M,
                    draftType: U
                });
    }
    return (
        (Y.nonce = z),
        Z.on('start', (e) => {
            (f = (0, m.e5)(G(j({}, q), { id: e.id }))),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: w,
                    file: e,
                    message: f,
                    uploader: Z
                });
        }),
        Z.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: w,
                file: e
            });
        }),
        Z.on('error', (e, t, n, r) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: w,
                    file: e,
                    messageRecord: f
                }),
                (0, b.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === x.evJ.EXPLICIT_CONTENT)
            )
                return void o.Z.sendExplicitMediaClydeError(w, null == n ? void 0 : n.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
            if (t === x.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == f
                            ? null
                            : {
                                  type: u.$V.SEND,
                                  message: G(j({}, f), { channelId: w })
                              };
                (0, l.openUploadError)({
                    title: k.intl.string(k.t.B3vFdX),
                    help: (0, h.uF)(r, e)
                });
                return;
            }
            if (t !== x.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (V)
                    H.reject(
                        new c.Hx(
                            {
                                status: 400,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var a;
                    (0, l.openUploadError)({
                        title: k.intl.string(k.t.B3vFdX),
                        help: null != (a = null == n ? void 0 : n.message) ? a : k.intl.string(k.t.zMEjJi)
                    });
                }
                Q();
            }
        }),
        Z.on('complete', (e, t) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: w,
                file: e,
                aborted: Z._aborted,
                messageRecord: t
            });
            let n = (0, I.ZC)(t);
            null != n &&
                ((0, O.gA)(S.D1),
                (0, T.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0,
                    v.LL.MessageSent
                ));
        }),
        null == F || null == (t = F.confettiPotionData) || t.callback(),
        await Z.uploadFiles(M, Y),
        H.resolve(),
        H.promise
    );
}
function F(e) {
    let { channelId: t, file: n, draftType: s, message: c, hasSpoiler: u, filename: d } = e,
        f = {
            content: '',
            tts: !1,
            hasSpoiler: u,
            filename: d
        };
    if (null != c) {
        (f.content = c.content), (f.tts = c.tts), (f.channel_id = c.channel_id);
        let e = N.Z.getPendingReply(t);
        if (null != e) {
            let n = o.Z.getSendMessageOptionsForReply(e);
            (f.type = x.uaV.REPLY), (f.message_reference = n.messageReference), (f.allowed_mentions = n.allowedMentions), (0, A.A6)(t);
        }
    }
    let h = new _.Z(x.ANM.MESSAGES(t));
    h.on('start', (e) => {
        i.Z.dispatch({
            type: 'UPLOAD_START',
            channelId: t,
            file: e,
            uploader: h
        });
    }),
        h.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: t,
                file: e
            });
        }),
        h.on('error', (e, u, d) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: t,
                    file: e
                }),
                (0, b.x)({
                    fileItems: e.items,
                    failureCode: u
                }),
                u === x.evJ.EXPLICIT_CONTENT)
            )
                return void o.Z.sendExplicitMediaClydeError(t, null == d ? void 0 : d.attachments, p.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
            (0, l.openUploadError)({
                title: k.intl.string(k.t.B3vFdX),
                help: k.intl.format(k.t.gIlRx8, {
                    onClick: () => {
                        (0, r.Mr3)(l.A),
                            F({
                                channelId: t,
                                file: n,
                                draftType: s,
                                message: c
                            });
                    }
                })
            }),
                '' !== f.content && '' === P.Z.getDraft(t, s) && a.Z.saveDraft(t, f.content, s);
        }),
        h.on('complete', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: t,
                file: e
            });
        }),
        h.upload(n);
}
let V = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: r, isThumbnail: i = !1, filesMetadata: a = [] } = e,
            o = Array.from(n).map((e, n) => {
                let r = null != a ? a[n] : {};
                return new d.n(
                    j(
                        {
                            file: e,
                            platform: f.ow.WEB,
                            isThumbnail: i
                        },
                        r
                    ),
                    t
                );
            });
        B({
            channelId: t,
            uploads: o,
            draftType: r
        });
    },
    upload: F,
    uploadFiles: B,
    cancel(e, t) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            channelId: e,
            file: t
        });
        let n = w.Z.getMessageForFile(t.id);
        null != n &&
            '' === P.Z.getDraft(n.channel_id, P.d.ChannelMessage) &&
            i.Z.dispatch({
                type: 'DRAFT_SAVE',
                channelId: n.channel_id,
                draft: n.content,
                draftType: P.d.ChannelMessage
            });
    }
};
