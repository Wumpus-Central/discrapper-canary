n.d(t, { Z: () => D }), n(47120), n(789020);
var i = n(481060),
    r = n(570140),
    a = n(430742),
    l = n(904245),
    o = n(166459),
    s = n(531643),
    c = n(881052),
    d = n(673750),
    u = n(141795),
    m = n(476326),
    p = n(680287),
    g = n(247206),
    h = n(539573),
    _ = n(786761),
    f = n(3148),
    x = n(48854),
    E = n(785359),
    v = n(79390),
    I = n(980463),
    C = n(992970),
    A = n(576645),
    S = n(317951),
    b = n(287941),
    P = n(623292),
    j = n(807092),
    T = n(467798),
    N = n(703558),
    y = n(117530),
    M = n(630388),
    L = n(226351),
    O = n(981631),
    w = n(388032);
async function R(e) {
    var t, n, i, u;
    let m,
        { channelId: R, uploads: D, draftType: k, parsedMessage: Z, options: G = {}, raiseEndpointErrors: K = !1 } = e,
        U = new p.Z(O.ANM.MESSAGES(R)),
        F = new L.o(),
        H = {
            content: '',
            nonce: '',
            channel_id: R,
            type: O.uaV.DEFAULT,
            sticker_ids: null == G ? void 0 : G.stickerIds,
            poll: null == G ? void 0 : G.poll,
            confetti_potion: (0, A.vY)(null == G ? void 0 : G.confettiPotionData),
            scheduled_timestamp: null == G ? void 0 : G.scheduledTimestamp
        };
    null != Z && (H.content = null == Z ? void 0 : Z.content), null != j.Z.getPendingReply(R) && ((H.type = O.uaV.REPLY), (H.message_reference = G.messageReference), (H.allowed_mentions = G.allowedMentions), (0, P.A6)(R));
    let [B, Q] = (0, T.Z)(H.content);
    B && ((H.content = Q), (H.flags = (0, M.pj)(null !== (n = H.flags) && void 0 !== n ? n : 0, O.iLy.SUPPRESS_NOTIFICATIONS)));
    let z = null !== (i = G.nonce) && void 0 !== i ? i : (0, x.r)(),
        Y = (0, f.ZP)({
            channelId: R,
            content: H.content,
            tts: null !== (u = null == Z ? void 0 : Z.tts) && void 0 !== u && u,
            type: H.type,
            messageReference: H.message_reference,
            flags: H.flags,
            nonce: z,
            poll: (0, v.x9)(G.poll)
        });
    return (
        (H.nonce = z),
        U.on('start', (e) => {
            (m = (0, _.e5)({
                ...Y,
                id: e.id
            })),
                r.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: R,
                    file: e,
                    message: m,
                    uploader: U
                });
        }),
        U.on('progress', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: R,
                file: e
            });
        }),
        U.on('error', (e, t, n, i) => {
            if (
                (r.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: R,
                    file: e,
                    messageRecord: m
                }),
                (0, E.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == i ? void 0 : i.msg
                }),
                t === O.evJ.EXPLICIT_CONTENT)
            ) {
                l.Z.sendExplicitMediaClydeError(R, null == n ? void 0 : n.attachments, g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === O.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    i =
                        null == m
                            ? null
                            : {
                                  type: d.$V.SEND,
                                  message: {
                                      ...m,
                                      channelId: R
                                  }
                              };
                (0, s.openUploadError)({
                    title: w.intl.string(w.t.B3vFdX),
                    help: (0, h.uF)(i, e)
                });
                return;
            }
            if (t !== O.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (K)
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
                    (0, s.openUploadError)({
                        title: w.intl.string(w.t.B3vFdX),
                        help: null !== (u = null == n ? void 0 : n.message) && void 0 !== u ? u : w.intl.string(w.t.zMEjJi)
                    });
                }
                '' !== H.content && '' === N.Z.getDraft(R, k) && a.Z.saveDraft(R, H.content, k),
                    0 === y.Z.getUploadCount(R, k) &&
                        o.Z.setUploads({
                            channelId: R,
                            uploads: D,
                            draftType: k
                        });
            }
        }),
        U.on('complete', (e, t) => {
            r.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: R,
                file: e,
                aborted: U._aborted,
                messageRecord: t
            });
            let n = (0, A.ZC)(t);
            null != n &&
                ((0, I.gA)(S.D1),
                (0, b.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0,
                    C.LL.MessageSent
                ));
        }),
        null == G || null === (t = G.confettiPotionData) || void 0 === t || t.callback(),
        await U.uploadFiles(D, H),
        F.resolve(),
        F.promise
    );
}
let D = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: i, isThumbnail: r = !1, filesMetadata: a = [] } = e,
            l = Array.from(n).map((e, n) => {
                let i = null != a ? a[n] : {};
                return new u.n(
                    {
                        file: e,
                        platform: m.ow.WEB,
                        isThumbnail: r,
                        ...i
                    },
                    t
                );
            });
        R({
            channelId: t,
            uploads: l,
            draftType: i
        });
    },
    upload: function e(t) {
        let { channelId: n, file: o, draftType: c, message: d, hasSpoiler: u, filename: m } = t,
            h = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: m
            };
        if (null != d) {
            (h.content = d.content), (h.tts = d.tts), (h.channel_id = d.channel_id);
            let e = j.Z.getPendingReply(n);
            if (null != e) {
                let t = l.Z.getSendMessageOptionsForReply(e);
                (h.type = O.uaV.REPLY), (h.message_reference = t.messageReference), (h.allowed_mentions = t.allowedMentions), (0, P.A6)(n);
            }
        }
        let _ = new p.Z(O.ANM.MESSAGES(n));
        _.on('start', (e) => {
            r.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: _
            });
        }),
            _.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            _.on('error', (t, u, m) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, E.x)({
                        fileItems: t.items,
                        failureCode: u
                    }),
                    u === O.evJ.EXPLICIT_CONTENT)
                ) {
                    l.Z.sendExplicitMediaClydeError(n, null == m ? void 0 : m.attachments, g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, s.openUploadError)({
                    title: w.intl.string(w.t.B3vFdX),
                    help: w.intl.format(w.t.gIlRx8, {
                        onClick: () => {
                            (0, i.Mr3)(s.A),
                                e({
                                    channelId: n,
                                    file: o,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== h.content && '' === N.Z.getDraft(n, c) && a.Z.saveDraft(n, h.content, c);
            }),
            _.on('complete', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            _.upload(o, h);
    },
    uploadFiles: R,
    cancel(e) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === N.Z.getDraft(e.channelId, N.d.ChannelMessage) &&
                r.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: N.d.ChannelMessage
                });
    }
};
