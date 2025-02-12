n.d(t, { Z: () => j }), n(47120), n(789020);
var a = n(481060),
    i = n(570140),
    l = n(430742),
    s = n(904245),
    o = n(166459),
    r = n(531643),
    c = n(881052),
    d = n(673750),
    u = n(141795),
    m = n(476326),
    p = n(680287),
    g = n(247206),
    _ = n(539573),
    h = n(786761),
    f = n(3148),
    C = n(48854),
    E = n(785359),
    v = n(79390),
    y = n(980463),
    x = n(992970),
    T = n(576645),
    I = n(317951),
    b = n(287941),
    M = n(623292),
    A = n(807092),
    S = n(467798),
    P = n(703558),
    D = n(117530),
    L = n(630388),
    Z = n(226351),
    U = n(981631),
    R = n(388032);
async function w(e) {
    var t, n, a, u;
    let m,
        { channelId: w, uploads: j, draftType: O, parsedMessage: N, options: z = {}, raiseEndpointErrors: k = !1 } = e,
        B = new p.Z(U.ANM.MESSAGES(w)),
        F = new Z.o(),
        G = {
            content: '',
            nonce: '',
            channel_id: w,
            type: U.uaV.DEFAULT,
            sticker_ids: null == z ? void 0 : z.stickerIds,
            poll: null == z ? void 0 : z.poll,
            confetti_potion: (0, T.vY)(null == z ? void 0 : z.confettiPotionData),
            scheduled_timestamp: null == z ? void 0 : z.scheduledTimestamp
        };
    null != N && (G.content = null == N ? void 0 : N.content), null != A.Z.getPendingReply(w) && ((G.type = U.uaV.REPLY), (G.message_reference = z.messageReference), (G.allowed_mentions = z.allowedMentions), (0, M.A6)(w));
    let [H, V] = (0, S.Z)(G.content);
    H && ((G.content = V), (G.flags = (0, L.pj)(null !== (n = G.flags) && void 0 !== n ? n : 0, U.iLy.SUPPRESS_NOTIFICATIONS)));
    let X = null !== (a = z.nonce) && void 0 !== a ? a : (0, C.r)(),
        $ = (0, f.ZP)({
            channelId: w,
            content: G.content,
            tts: null !== (u = null == N ? void 0 : N.tts) && void 0 !== u && u,
            type: G.type,
            messageReference: G.message_reference,
            flags: G.flags,
            nonce: X,
            poll: (0, v.x9)(z.poll)
        });
    return (
        (G.nonce = X),
        B.on('start', (e) => {
            (m = (0, h.e5)({
                ...$,
                id: e.id
            })),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: w,
                    file: e,
                    message: m,
                    uploader: B
                });
        }),
        B.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: w,
                file: e
            });
        }),
        B.on('error', (e, t, n, a) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: w,
                    file: e,
                    messageRecord: m
                }),
                (0, E.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == a ? void 0 : a.msg
                }),
                t === U.evJ.EXPLICIT_CONTENT)
            ) {
                s.Z.sendExplicitMediaClydeError(w, null == n ? void 0 : n.attachments, g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === U.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    a =
                        null == m
                            ? null
                            : {
                                  type: d.$V.SEND,
                                  message: {
                                      ...m,
                                      channelId: w
                                  }
                              };
                (0, r.openUploadError)({
                    title: R.intl.string(R.t.B3vFdX),
                    help: (0, _.uF)(a, e)
                });
                return;
            }
            if (t !== U.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (k)
                    F.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var u;
                    (0, r.openUploadError)({
                        title: R.intl.string(R.t.B3vFdX),
                        help: null !== (u = null == n ? void 0 : n.message) && void 0 !== u ? u : R.intl.string(R.t.zMEjJi)
                    });
                }
                '' !== G.content && '' === P.Z.getDraft(w, O) && l.Z.saveDraft(w, G.content, O),
                    0 === D.Z.getUploadCount(w, O) &&
                        o.Z.setUploads({
                            channelId: w,
                            uploads: j,
                            draftType: O
                        });
            }
        }),
        B.on('complete', (e, t) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: w,
                file: e,
                aborted: B._aborted,
                messageRecord: t
            });
            let n = (0, T.ZC)(t);
            null != n &&
                ((0, y.gA)(I.D1),
                (0, b.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0,
                    x.LL.MessageSent
                ));
        }),
        null == z || null === (t = z.confettiPotionData) || void 0 === t || t.callback(),
        await B.uploadFiles(j, G),
        F.resolve(),
        F.promise
    );
}
let j = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: a, isThumbnail: i = !1, filesMetadata: l = [] } = e,
            s = Array.from(n).map((e, n) => {
                let a = null != l ? l[n] : {};
                return new u.n(
                    {
                        file: e,
                        platform: m.ow.WEB,
                        isThumbnail: i,
                        ...a
                    },
                    t
                );
            });
        w({
            channelId: t,
            uploads: s,
            draftType: a
        });
    },
    upload: function e(t) {
        let { channelId: n, file: o, draftType: c, message: d, hasSpoiler: u, filename: m } = t,
            _ = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: m
            };
        if (null != d) {
            (_.content = d.content), (_.tts = d.tts), (_.channel_id = d.channel_id);
            let e = A.Z.getPendingReply(n);
            if (null != e) {
                let t = s.Z.getSendMessageOptionsForReply(e);
                (_.type = U.uaV.REPLY), (_.message_reference = t.messageReference), (_.allowed_mentions = t.allowedMentions), (0, M.A6)(n);
            }
        }
        let h = new p.Z(U.ANM.MESSAGES(n));
        h.on('start', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: h
            });
        }),
            h.on('progress', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            h.on('error', (t, u, m) => {
                if (
                    (i.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, E.x)({
                        fileItems: t.items,
                        failureCode: u
                    }),
                    u === U.evJ.EXPLICIT_CONTENT)
                ) {
                    s.Z.sendExplicitMediaClydeError(n, null == m ? void 0 : m.attachments, g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, r.openUploadError)({
                    title: R.intl.string(R.t.B3vFdX),
                    help: R.intl.format(R.t.gIlRx8, {
                        onClick: () => {
                            (0, a.Mr3)(r.A),
                                e({
                                    channelId: n,
                                    file: o,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== _.content && '' === P.Z.getDraft(n, c) && l.Z.saveDraft(n, _.content, c);
            }),
            h.on('complete', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            h.upload(o, _);
    },
    uploadFiles: w,
    cancel(e) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === P.Z.getDraft(e.channelId, P.d.ChannelMessage) &&
                i.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: P.d.ChannelMessage
                });
    }
};
