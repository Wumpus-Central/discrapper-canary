n.d(t, { Z: () => D }), n(388685), n(997841);
var i = n(481060),
    o = n(570140),
    r = n(430742),
    a = n(904245),
    s = n(166459),
    l = n(531643),
    c = n(881052),
    u = n(673750),
    d = n(141795),
    h = n(476326),
    p = n(680287),
    m = n(247206),
    f = n(539573),
    g = n(786761),
    b = n(3148),
    j = n(48854),
    v = n(785359),
    O = n(79390),
    y = n(980463),
    T = n(992970),
    x = n(576645),
    S = n(317951),
    _ = n(287941),
    E = n(623292),
    C = n(807092),
    N = n(467798),
    P = n(703558),
    R = n(117530),
    I = n(630388),
    w = n(226351),
    Z = n(981631),
    A = n(388032);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function k(e) {
    var t, n, i, d;
    let h,
        { channelId: k, uploads: D, draftType: U, parsedMessage: B, options: F = {}, raiseEndpointErrors: W = !1 } = e,
        V = new p.Z(Z.ANM.MESSAGES(k)),
        G = new w.o(),
        H = {
            content: '',
            nonce: '',
            channel_id: k,
            type: Z.uaV.DEFAULT,
            sticker_ids: null == F ? void 0 : F.stickerIds,
            poll: null == F ? void 0 : F.poll,
            confetti_potion: (0, x.vY)(null == F ? void 0 : F.confettiPotionData),
            scheduled_timestamp: null == F ? void 0 : F.scheduledTimestamp
        };
    null != B && (H.content = null == B ? void 0 : B.content), null != C.Z.getPendingReply(k) && ((H.type = Z.uaV.REPLY), (H.message_reference = F.messageReference), (H.allowed_mentions = F.allowedMentions), (0, E.A6)(k));
    let [z, J] = (0, N.Z)(H.content);
    z && ((H.content = J), (H.flags = (0, I.pj)(null != (n = H.flags) ? n : 0, Z.iLy.SUPPRESS_NOTIFICATIONS)));
    let X = null != (i = F.nonce) ? i : (0, j.r)(),
        K = (0, b.ZP)({
            channelId: k,
            content: H.content,
            tts: null != (d = null == B ? void 0 : B.tts) && d,
            type: H.type,
            messageReference: H.message_reference,
            flags: H.flags,
            nonce: X,
            poll: (0, O.x9)(F.poll)
        });
    return (
        (H.nonce = X),
        V.on('start', (e) => {
            (h = (0, g.e5)(L(M({}, K), { id: e.id }))),
                o.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: k,
                    file: e,
                    message: h,
                    uploader: V
                });
        }),
        V.on('progress', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: k,
                file: e
            });
        }),
        V.on('error', (e, t, n, i) => {
            if (
                (o.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: k,
                    file: e,
                    messageRecord: h
                }),
                (0, v.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == i ? void 0 : i.msg
                }),
                t === Z.evJ.EXPLICIT_CONTENT)
            )
                return void a.Z.sendExplicitMediaClydeError(k, null == n ? void 0 : n.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
            if (t === Z.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    i =
                        null == h
                            ? null
                            : {
                                  type: u.$V.SEND,
                                  message: L(M({}, h), { channelId: k })
                              };
                (0, l.openUploadError)({
                    title: A.NW.string(A.t.B3vFdX),
                    help: (0, f.uF)(i, e)
                });
                return;
            }
            if (t !== Z.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (W)
                    G.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var d;
                    (0, l.openUploadError)({
                        title: A.NW.string(A.t.B3vFdX),
                        help: null != (d = null == n ? void 0 : n.message) ? d : A.NW.string(A.t.zMEjJi)
                    });
                }
                '' !== H.content && '' === P.Z.getDraft(k, U) && r.Z.saveDraft(k, H.content, U),
                    0 === R.Z.getUploadCount(k, U) &&
                        s.Z.setUploads({
                            channelId: k,
                            uploads: D,
                            draftType: U
                        });
            }
        }),
        V.on('complete', (e, t) => {
            o.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: k,
                file: e,
                aborted: V._aborted,
                messageRecord: t
            });
            let n = (0, x.ZC)(t);
            null != n &&
                ((0, y.gA)(S.D1),
                (0, _.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0,
                    T.LL.MessageSent
                ));
        }),
        null == F || null == (t = F.confettiPotionData) || t.callback(),
        await V.uploadFiles(D, H),
        G.resolve(),
        G.promise
    );
}
let D = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: i, isThumbnail: o = !1, filesMetadata: r = [] } = e,
            a = Array.from(n).map((e, n) => {
                let i = null != r ? r[n] : {};
                return new d.n(
                    M(
                        {
                            file: e,
                            platform: h.ow.WEB,
                            isThumbnail: o
                        },
                        i
                    ),
                    t
                );
            });
        k({
            channelId: t,
            uploads: a,
            draftType: i
        });
    },
    upload: function e(t) {
        let { channelId: n, file: s, draftType: c, message: u, hasSpoiler: d, filename: h } = t,
            f = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: h
            };
        if (null != u) {
            (f.content = u.content), (f.tts = u.tts), (f.channel_id = u.channel_id);
            let e = C.Z.getPendingReply(n);
            if (null != e) {
                let t = a.Z.getSendMessageOptionsForReply(e);
                (f.type = Z.uaV.REPLY), (f.message_reference = t.messageReference), (f.allowed_mentions = t.allowedMentions), (0, E.A6)(n);
            }
        }
        let g = new p.Z(Z.ANM.MESSAGES(n));
        g.on('start', (e) => {
            o.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: g
            });
        }),
            g.on('progress', (e) => {
                o.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            g.on('error', (t, d, h) => {
                if (
                    (o.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, v.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === Z.evJ.EXPLICIT_CONTENT)
                )
                    return void a.Z.sendExplicitMediaClydeError(n, null == h ? void 0 : h.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                (0, l.openUploadError)({
                    title: A.NW.string(A.t.B3vFdX),
                    help: A.NW.format(A.t.gIlRx8, {
                        onClick: () => {
                            (0, i.Mr3)(l.A),
                                e({
                                    channelId: n,
                                    file: s,
                                    draftType: c,
                                    message: u
                                });
                        }
                    })
                }),
                    '' !== f.content && '' === P.Z.getDraft(n, c) && r.Z.saveDraft(n, f.content, c);
            }),
            g.on('complete', (e) => {
                o.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            g.upload(s, f);
    },
    uploadFiles: k,
    cancel(e) {
        o.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === P.Z.getDraft(e.channelId, P.d.ChannelMessage) &&
                o.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: P.d.ChannelMessage
                });
    }
};
