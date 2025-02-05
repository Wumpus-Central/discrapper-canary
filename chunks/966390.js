n.d(t, { Z: () => b }), n(47120), n(789020);
var l = n(481060),
    i = n(570140),
    r = n(430742),
    a = n(904245),
    o = n(166459),
    s = n(531643),
    d = n(881052),
    c = n(673750),
    u = n(141795),
    p = n(476326),
    f = n(680287),
    m = n(247206),
    h = n(539573),
    v = n(786761),
    g = n(3148),
    E = n(48854),
    C = n(785359),
    P = n(79390),
    x = n(980463),
    Z = n(992970),
    y = n(576645),
    A = n(317951),
    S = n(287941),
    L = n(623292),
    _ = n(807092),
    I = n(467798),
    O = n(703558),
    R = n(117530),
    D = n(630388),
    T = n(226351),
    U = n(981631),
    w = n(388032);
async function j(e) {
    var t, n, l, u;
    let p,
        { channelId: j, uploads: b, draftType: M, parsedMessage: N, options: k = {}, raiseEndpointErrors: F = !1 } = e,
        B = new f.Z(U.ANM.MESSAGES(j)),
        G = new T.o(),
        z = {
            content: '',
            nonce: '',
            channel_id: j,
            type: U.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll,
            confetti_potion: (0, y.vY)(null == k ? void 0 : k.confettiPotionData),
            scheduled_timestamp: null == k ? void 0 : k.scheduledTimestamp
        };
    null != N && (z.content = null == N ? void 0 : N.content), null != _.Z.getPendingReply(j) && ((z.type = U.uaV.REPLY), (z.message_reference = k.messageReference), (z.allowed_mentions = k.allowedMentions), (0, L.A6)(j));
    let [H, V] = (0, I.Z)(z.content);
    H && ((z.content = V), (z.flags = (0, D.pj)(null !== (n = z.flags) && void 0 !== n ? n : 0, U.iLy.SUPPRESS_NOTIFICATIONS)));
    let J = null !== (l = k.nonce) && void 0 !== l ? l : (0, E.r)(),
        Q = (0, g.ZP)({
            channelId: j,
            content: z.content,
            tts: null !== (u = null == N ? void 0 : N.tts) && void 0 !== u && u,
            type: z.type,
            messageReference: z.message_reference,
            flags: z.flags,
            nonce: J,
            poll: (0, P.x9)(k.poll)
        });
    return (
        (z.nonce = J),
        B.on('start', (e) => {
            (p = (0, v.e5)({
                ...Q,
                id: e.id
            })),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: j,
                    file: e,
                    message: p,
                    uploader: B
                });
        }),
        B.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: j,
                file: e
            });
        }),
        B.on('error', (e, t, n, l) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: j,
                    file: e,
                    messageRecord: p
                }),
                (0, C.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == l ? void 0 : l.msg
                }),
                t === U.evJ.EXPLICIT_CONTENT)
            ) {
                a.Z.sendExplicitMediaClydeError(j, null == n ? void 0 : n.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === U.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    l =
                        null == p
                            ? null
                            : {
                                  type: c.$V.SEND,
                                  message: {
                                      ...p,
                                      channelId: j
                                  }
                              };
                (0, s.openUploadError)({
                    title: w.intl.string(w.t.B3vFdX),
                    help: (0, h.uF)(l, e)
                });
                return;
            }
            if (t !== U.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (F)
                    G.reject(
                        new d.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var u;
                    (0, s.openUploadError)({
                        title: w.intl.string(w.t.B3vFdX),
                        help: null !== (u = null == n ? void 0 : n.message) && void 0 !== u ? u : w.intl.string(w.t.zMEjJi)
                    });
                }
                '' !== z.content && '' === O.Z.getDraft(j, M) && r.Z.saveDraft(j, z.content, M),
                    0 === R.Z.getUploadCount(j, M) &&
                        o.Z.setUploads({
                            channelId: j,
                            uploads: b,
                            draftType: M
                        });
            }
        }),
        B.on('complete', (e, t) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: j,
                file: e,
                aborted: B._aborted,
                messageRecord: t
            });
            let n = (0, y.ZC)(t);
            null != n &&
                ((0, x.gA)(A.D1),
                (0, S.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0,
                    Z.LL.MessageSent
                ));
        }),
        null == k || null === (t = k.confettiPotionData) || void 0 === t || t.callback(),
        await B.uploadFiles(b, z),
        G.resolve(),
        G.promise
    );
}
let b = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: l, isThumbnail: i = !1, filesMetadata: r = [] } = e,
            a = Array.from(n).map((e, n) => {
                let l = null != r ? r[n] : {};
                return new u.n(
                    {
                        file: e,
                        platform: p.ow.WEB,
                        isThumbnail: i,
                        ...l
                    },
                    t
                );
            });
        j({
            channelId: t,
            uploads: a,
            draftType: l
        });
    },
    upload: function e(t) {
        let { channelId: n, file: o, draftType: d, message: c, hasSpoiler: u, filename: p } = t,
            h = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: p
            };
        if (null != c) {
            (h.content = c.content), (h.tts = c.tts), (h.channel_id = c.channel_id);
            let e = _.Z.getPendingReply(n);
            if (null != e) {
                let t = a.Z.getSendMessageOptionsForReply(e);
                (h.type = U.uaV.REPLY), (h.message_reference = t.messageReference), (h.allowed_mentions = t.allowedMentions), (0, L.A6)(n);
            }
        }
        let v = new f.Z(U.ANM.MESSAGES(n));
        v.on('start', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: v
            });
        }),
            v.on('progress', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            v.on('error', (t, u, p) => {
                if (
                    (i.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, C.x)({
                        fileItems: t.items,
                        failureCode: u
                    }),
                    u === U.evJ.EXPLICIT_CONTENT)
                ) {
                    a.Z.sendExplicitMediaClydeError(n, null == p ? void 0 : p.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, s.openUploadError)({
                    title: w.intl.string(w.t.B3vFdX),
                    help: w.intl.format(w.t.gIlRx8, {
                        onClick: () => {
                            (0, l.Mr3)(s.A),
                                e({
                                    channelId: n,
                                    file: o,
                                    draftType: d,
                                    message: c
                                });
                        }
                    })
                }),
                    '' !== h.content && '' === O.Z.getDraft(n, d) && r.Z.saveDraft(n, h.content, d);
            }),
            v.on('complete', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            v.upload(o, h);
    },
    uploadFiles: j,
    cancel(e) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === O.Z.getDraft(e.channelId, O.d.ChannelMessage) &&
                i.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: O.d.ChannelMessage
                });
    }
};
