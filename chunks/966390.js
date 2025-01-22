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
    A = n(623292),
    I = n(807092),
    N = n(467798),
    T = n(703558),
    O = n(117530),
    R = n(630388),
    S = n(226351),
    P = n(981631),
    Z = n(388032);
async function y(e) {
    var t, n, r;
    let d,
        { channelId: f, uploads: y, draftType: L, parsedMessage: b, options: D = {}, raiseEndpointErrors: U = !1 } = e,
        M = new p.Z(P.ANM.MESSAGES(f)),
        x = new S.o(),
        w = {
            content: '',
            nonce: '',
            channel_id: f,
            type: P.uaV.DEFAULT,
            sticker_ids: null == D ? void 0 : D.stickerIds,
            poll: null == D ? void 0 : D.poll
        };
    null != b && (w.content = null == b ? void 0 : b.content), null != I.Z.getPendingReply(f) && ((w.type = P.uaV.REPLY), (w.message_reference = D.messageReference), (w.allowed_mentions = D.allowedMentions), (0, A.A6)(f));
    let [G, k] = (0, N.Z)(w.content);
    G && ((w.content = k), (w.flags = (0, R.pj)(null !== (t = w.flags) && void 0 !== t ? t : 0, P.iLy.SUPPRESS_NOTIFICATIONS)));
    let V = null !== (n = D.nonce) && void 0 !== n ? n : (0, g.r)(),
        B = (0, m.ZP)({
            channelId: f,
            content: w.content,
            tts: null !== (r = null == b ? void 0 : b.tts) && void 0 !== r && r,
            type: w.type,
            messageReference: w.message_reference,
            flags: w.flags,
            nonce: V,
            poll: (0, v.x9)(D.poll)
        });
    return (
        ((w.nonce = V),
        M.on('start', (e) => {
            (d = (0, E.e5)({
                ...B,
                id: e.id
            })),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: f,
                    file: e,
                    message: d,
                    uploader: M
                });
        }),
        M.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: f,
                file: e
            });
        })),
        M.on('error', (e, t, n, r) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: f,
                    file: e,
                    messageRecord: d
                }),
                (0, C.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === P.evJ.EXPLICIT_CONTENT)
            ) {
                a.Z.sendExplicitMediaClydeError(f, null == n ? void 0 : n.attachments, h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === P.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == d
                            ? null
                            : {
                                  type: c.$V.SEND,
                                  message: {
                                      ...d,
                                      channelId: f
                                  }
                              };
                (0, o.openUploadError)({
                    title: Z.intl.string(Z.t.B3vFdX),
                    help: (0, _.uF)(r, e)
                });
                return;
            }
            if (t !== P.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (U)
                    x.reject(
                        new s.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var p;
                    (0, o.openUploadError)({
                        title: Z.intl.string(Z.t.B3vFdX),
                        help: null !== (p = null == n ? void 0 : n.message) && void 0 !== p ? p : Z.intl.string(Z.t.zMEjJi)
                    });
                }
                '' !== w.content && '' === T.Z.getDraft(f, L) && l.Z.saveDraft(f, w.content, L),
                    0 === O.Z.getUploadCount(f, L) &&
                        u.Z.setUploads({
                            channelId: f,
                            uploads: y,
                            draftType: L
                        });
            }
        }),
        M.on('complete', (e, t) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: f,
                file: e,
                aborted: M._aborted,
                messageRecord: t
            });
        }),
        await M.uploadFiles(y, w),
        x.resolve(),
        x.promise
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
        y({
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
            let e = I.Z.getPendingReply(n);
            if (null != e) {
                let t = a.Z.getSendMessageOptionsForReply(e);
                (_.type = P.uaV.REPLY), (_.message_reference = t.messageReference), (_.allowed_mentions = t.allowedMentions), (0, A.A6)(n);
            }
        }
        let E = new p.Z(P.ANM.MESSAGES(n));
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
                    d === P.evJ.EXPLICIT_CONTENT)
                ) {
                    a.Z.sendExplicitMediaClydeError(n, null == f ? void 0 : f.attachments, h.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, o.openUploadError)({
                    title: Z.intl.string(Z.t.B3vFdX),
                    help: Z.intl.format(Z.t.gIlRx8, {
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
                    '' !== _.content && '' === T.Z.getDraft(n, s) && l.Z.saveDraft(n, _.content, s);
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
    uploadFiles: y,
    cancel(e) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === T.Z.getDraft(e.channelId, T.d.ChannelMessage) &&
                i.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: T.d.ChannelMessage
                });
    }
};
