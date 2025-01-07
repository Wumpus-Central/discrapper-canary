n(47120), n(789020);
var r = n(481060),
    i = n(570140),
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
    f = n(539573),
    h = n(786761),
    x = n(3148),
    _ = n(48854),
    E = n(785359),
    I = n(79390),
    v = n(623292),
    C = n(807092),
    A = n(467798),
    S = n(703558),
    b = n(117530),
    j = n(630388),
    T = n(226351),
    N = n(981631),
    P = n(388032);
async function M(e) {
    var t, n, r;
    let u,
        { channelId: m, uploads: M, draftType: y, parsedMessage: L, options: O = {}, raiseEndpointErrors: R = !1 } = e,
        w = new p.Z(N.ANM.MESSAGES(m)),
        k = new T.o(),
        D = {
            content: '',
            nonce: '',
            channel_id: m,
            type: N.uaV.DEFAULT,
            sticker_ids: null == O ? void 0 : O.stickerIds,
            poll: null == O ? void 0 : O.poll
        };
    null != L && (D.content = null == L ? void 0 : L.content), null != C.Z.getPendingReply(m) && ((D.type = N.uaV.REPLY), (D.message_reference = O.messageReference), (D.allowed_mentions = O.allowedMentions), (0, v.A6)(m));
    let [G, Z] = (0, A.Z)(D.content);
    G && ((D.content = Z), (D.flags = (0, j.pj)(null !== (t = D.flags) && void 0 !== t ? t : 0, N.iLy.SUPPRESS_NOTIFICATIONS)));
    let K = null !== (n = O.nonce) && void 0 !== n ? n : (0, _.r)(),
        U = (0, x.ZP)({
            channelId: m,
            content: D.content,
            tts: null !== (r = null == L ? void 0 : L.tts) && void 0 !== r && r,
            type: D.type,
            messageReference: D.message_reference,
            flags: D.flags,
            nonce: K,
            poll: (0, I.x9)(O.poll)
        });
    return (
        ((D.nonce = K),
        w.on('start', (e) => {
            (u = (0, h.e5)({
                ...U,
                id: e.id
            })),
                i.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: m,
                    file: e,
                    message: u,
                    uploader: w
                });
        }),
        w.on('progress', (e) => {
            i.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: m,
                file: e
            });
        })),
        w.on('error', (e, t, n, r) => {
            if (
                (i.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: m,
                    file: e,
                    messageRecord: u
                }),
                (0, E.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === N.evJ.EXPLICIT_CONTENT)
            ) {
                l.Z.sendExplicitMediaClydeError(m, null == n ? void 0 : n.attachments, g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === N.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == u
                            ? null
                            : {
                                  type: d.$V.SEND,
                                  message: {
                                      ...u,
                                      channelId: m
                                  }
                              };
                (0, s.openUploadError)({
                    title: P.intl.string(P.t.B3vFdX),
                    help: (0, f.uF)(r, e)
                });
                return;
            }
            if (t !== N.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (R)
                    k.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var p;
                    (0, s.openUploadError)({
                        title: P.intl.string(P.t.B3vFdX),
                        help: null !== (p = null == n ? void 0 : n.message) && void 0 !== p ? p : P.intl.string(P.t.zMEjJi)
                    });
                }
                '' !== D.content && '' === S.Z.getDraft(m, y) && a.Z.saveDraft(m, D.content, y),
                    0 === b.Z.getUploadCount(m, y) &&
                        o.Z.setUploads({
                            channelId: m,
                            uploads: M,
                            draftType: y
                        });
            }
        }),
        w.on('complete', (e, t) => {
            i.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: m,
                file: e,
                aborted: w._aborted,
                messageRecord: t
            });
        }),
        await w.uploadFiles(M, D),
        k.resolve(),
        k.promise
    );
}
t.Z = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: r, isThumbnail: i = !1, filesMetadata: a = [] } = e,
            l = Array.from(n).map((e, n) => {
                let r = null != a ? a[n] : {};
                return new u.n(
                    {
                        file: e,
                        platform: m.ow.WEB,
                        isThumbnail: i,
                        ...r
                    },
                    t
                );
            });
        M({
            channelId: t,
            uploads: l,
            draftType: r
        });
    },
    upload: function e(t) {
        let { channelId: n, file: o, draftType: c, message: d, hasSpoiler: u, filename: m } = t,
            f = {
                content: '',
                tts: !1,
                hasSpoiler: u,
                filename: m
            };
        if (null != d) {
            (f.content = d.content), (f.tts = d.tts), (f.channel_id = d.channel_id);
            let e = C.Z.getPendingReply(n);
            if (null != e) {
                let t = l.Z.getSendMessageOptionsForReply(e);
                (f.type = N.uaV.REPLY), (f.message_reference = t.messageReference), (f.allowed_mentions = t.allowedMentions), (0, v.A6)(n);
            }
        }
        let h = new p.Z(N.ANM.MESSAGES(n));
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
                    u === N.evJ.EXPLICIT_CONTENT)
                ) {
                    l.Z.sendExplicitMediaClydeError(n, null == m ? void 0 : m.attachments, g.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, s.openUploadError)({
                    title: P.intl.string(P.t.B3vFdX),
                    help: P.intl.format(P.t.gIlRx8, {
                        onClick: () => {
                            (0, r.closeModal)(s.UPLOAD_ERROR_MODAL_KEY),
                                e({
                                    channelId: n,
                                    file: o,
                                    draftType: c,
                                    message: d
                                });
                        }
                    })
                }),
                    '' !== f.content && '' === S.Z.getDraft(n, c) && a.Z.saveDraft(n, f.content, c);
            }),
            h.on('complete', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            h.upload(o, f);
    },
    uploadFiles: M,
    cancel(e) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === S.Z.getDraft(e.channelId, S.d.ChannelMessage) &&
                i.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: S.d.ChannelMessage
                });
    }
};
