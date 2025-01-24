n(47120), n(789020);
var r = n(481060),
    i = n(570140),
    l = n(430742),
    a = n(904245),
    u = n(166459),
    o = n(531643),
    s = n(881052),
    c = n(673750),
    d = n(141795),
    f = n(476326),
    p = n(680287),
    h = n(247206),
    _ = n(539573),
    E = n(786761),
    m = n(3148),
    g = n(48854),
    C = n(785359),
    v = n(79390),
    A = n(980463),
    I = n(576645),
    N = n(317951),
    T = n(287941),
    S = n(623292),
    O = n(807092),
    R = n(467798),
    P = n(703558),
    Z = n(117530),
    y = n(630388),
    L = n(226351),
    b = n(981631),
    D = n(388032);
async function U(e) {
    var t, n, r, d;
    let f,
        { channelId: U, uploads: M, draftType: x, parsedMessage: w, options: k = {}, raiseEndpointErrors: G = !1 } = e,
        V = new p.Z(b.ANM.MESSAGES(U)),
        B = new L.o(),
        F = {
            content: '',
            nonce: '',
            channel_id: U,
            type: b.uaV.DEFAULT,
            sticker_ids: null == k ? void 0 : k.stickerIds,
            poll: null == k ? void 0 : k.poll,
            confetti_potion: (0, I.vY)(null == k ? void 0 : k.confettiPotionData)
        };
    null != w && (F.content = null == w ? void 0 : w.content), null != O.Z.getPendingReply(U) && ((F.type = b.uaV.REPLY), (F.message_reference = k.messageReference), (F.allowed_mentions = k.allowedMentions), (0, S.A6)(U));
    let [H, j] = (0, R.Z)(F.content);
    H && ((F.content = j), (F.flags = (0, y.pj)(null !== (n = F.flags) && void 0 !== n ? n : 0, b.iLy.SUPPRESS_NOTIFICATIONS)));
    let W = null !== (r = k.nonce) && void 0 !== r ? r : (0, g.r)(),
        K = (0, m.ZP)({
            channelId: U,
            content: F.content,
            tts: null !== (d = null == w ? void 0 : w.tts) && void 0 !== d && d,
            type: F.type,
            messageReference: F.message_reference,
            flags: F.flags,
            nonce: W,
            poll: (0, v.x9)(k.poll)
        });
    return (
        ((F.nonce = W),
        V.on('start', (e) => {
            (f = (0, E.e5)({
                ...K,
                id: e.id
            })),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: U,
                    file: e,
                    message: f,
                    uploader: V
                });
        }),
        V.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: U,
                file: e
            });
        })),
        V.on('error', (e, t, n, r) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: U,
                    file: e,
                    messageRecord: f
                }),
                (0, C.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === b.evJ.EXPLICIT_CONTENT)
            ) {
                a.Z.sendExplicitMediaClydeError(U, null == n ? void 0 : n.attachments, h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === b.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == f
                            ? null
                            : {
                                  type: c.$V.SEND,
                                  message: {
                                      ...f,
                                      channelId: U
                                  }
                              };
                (0, o.openUploadError)({
                    title: D.intl.string(D.t.B3vFdX),
                    help: (0, _.uF)(r, e)
                });
                return;
            }
            if (t !== b.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (G)
                    B.reject(
                        new s.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var d;
                    (0, o.openUploadError)({
                        title: D.intl.string(D.t.B3vFdX),
                        help: null !== (d = null == n ? void 0 : n.message) && void 0 !== d ? d : D.intl.string(D.t.zMEjJi)
                    });
                }
                '' !== F.content && '' === P.Z.getDraft(U, x) && l.Z.saveDraft(U, F.content, x),
                    0 === Z.Z.getUploadCount(U, x) &&
                        u.Z.setUploads({
                            channelId: U,
                            uploads: M,
                            draftType: x
                        });
            }
        }),
        V.on('complete', (e, t) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: U,
                file: e,
                aborted: V._aborted,
                messageRecord: t
            });
            let n = (0, I.ZC)(t);
            null != n &&
                ((0, A.gA)(N.D1),
                (0, T.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0
                ));
        }),
        null == k || null === (t = k.confettiPotionData) || void 0 === t || t.callback(),
        await V.uploadFiles(M, F),
        B.resolve(),
        B.promise
    );
}
t.Z = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: r, isThumbnail: i = !1, filesMetadata: l = [] } = e,
            a = Array.from(n).map((e, n) => {
                let r = null != l ? l[n] : {};
                return new d.n(
                    {
                        file: e,
                        platform: f.ow.WEB,
                        isThumbnail: i,
                        ...r
                    },
                    t
                );
            });
        U({
            channelId: t,
            uploads: a,
            draftType: r
        });
    },
    upload: function e(t) {
        let { channelId: n, file: u, draftType: s, message: c, hasSpoiler: d, filename: f } = t,
            _ = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: f
            };
        if (null != c) {
            (_.content = c.content), (_.tts = c.tts), (_.channel_id = c.channel_id);
            let e = O.Z.getPendingReply(n);
            if (null != e) {
                let t = a.Z.getSendMessageOptionsForReply(e);
                (_.type = b.uaV.REPLY), (_.message_reference = t.messageReference), (_.allowed_mentions = t.allowedMentions), (0, S.A6)(n);
            }
        }
        let E = new p.Z(b.ANM.MESSAGES(n));
        E.on('start', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: E
            });
        }),
            E.on('progress', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            E.on('error', (t, d, f) => {
                if (
                    (i.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, C.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === b.evJ.EXPLICIT_CONTENT)
                ) {
                    a.Z.sendExplicitMediaClydeError(n, null == f ? void 0 : f.attachments, h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, o.openUploadError)({
                    title: D.intl.string(D.t.B3vFdX),
                    help: D.intl.format(D.t.gIlRx8, {
                        onClick: () => {
                            (0, r.closeModal)(o.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: n,
                                    file: u,
                                    draftType: s,
                                    message: c
                                });
                        }
                    })
                }),
                    '' !== _.content && '' === P.Z.getDraft(n, s) && l.Z.saveDraft(n, _.content, s);
            }),
            E.on('complete', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            E.upload(u, _);
    },
    uploadFiles: U,
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
