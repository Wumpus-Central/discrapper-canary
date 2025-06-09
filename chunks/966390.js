n.d(t, { Z: () => M }), n(388685), n(997841);
var r = n(570140),
    i = n(430742),
    l = n(904245),
    a = n(166459),
    o = n(531643),
    s = n(881052),
    c = n(673750),
    u = n(680287),
    d = n(247206),
    p = n(539573),
    h = n(786761),
    f = n(3148),
    m = n(48854),
    g = n(785359),
    b = n(79390),
    _ = n(980463),
    y = n(992970),
    C = n(576645),
    x = n(317951),
    v = n(287941),
    j = n(623292),
    O = n(807092),
    E = n(467798),
    I = n(703558),
    P = n(117530),
    S = n(62817),
    Z = n(630388),
    N = n(226351),
    T = n(981631),
    A = n(388032);
function w(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = {
    uploadFiles: async function (e) {
        var t, n, S, M;
        let k,
            { channelId: L, uploads: D, draftType: U, parsedMessage: B, options: F = {}, raiseEndpointErrors: G = !1 } = e,
            H = new u.Z(T.ANM.MESSAGES(L)),
            V = new N.o(),
            z = {
                content: '',
                nonce: '',
                channel_id: L,
                type: T.uaV.DEFAULT,
                sticker_ids: null == F ? void 0 : F.stickerIds,
                poll: null == F ? void 0 : F.poll,
                confetti_potion: (0, C.vY)(null == F ? void 0 : F.confettiPotionData),
                scheduled_timestamp: null == F ? void 0 : F.scheduledTimestamp
            };
        null != B && (z.content = null == B ? void 0 : B.content), null != O.Z.getPendingReply(L) && ((z.type = T.uaV.REPLY), (z.message_reference = F.messageReference), (z.allowed_mentions = F.allowedMentions), (0, j.A6)(L));
        let [W, Y] = (0, E.Z)(z.content);
        W && ((z.content = Y), (z.flags = (0, Z.pj)(null != (n = z.flags) ? n : 0, T.iLy.SUPPRESS_NOTIFICATIONS)));
        let q = null != (S = F.nonce) ? S : (0, m.r)(),
            K = (0, f.ZP)({
                channelId: L,
                content: z.content,
                tts: null != (M = null == B ? void 0 : B.tts) && M,
                type: z.type,
                messageReference: z.message_reference,
                flags: z.flags,
                nonce: q,
                poll: (0, b.x9)(F.poll)
            });
        return (
            (z.nonce = q),
            H.on('start', (e) => {
                (k = (0, h.e5)(R(w({}, K), { id: e.id }))),
                    r.Z.dispatch({
                        type: 'UPLOAD_START',
                        channelId: L,
                        file: e,
                        message: k,
                        uploader: H
                    });
            }),
            H.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: L,
                    file: e
                });
            }),
            H.on('error', (e, t, n, u) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: L,
                        file: e,
                        messageId: null == k ? void 0 : k.id
                    }),
                    (0, g.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == u ? void 0 : u.msg
                    }),
                    t === T.evJ.EXPLICIT_CONTENT)
                )
                    return void l.Z.sendExplicitMediaClydeError(L, null == n ? void 0 : n.attachments, d.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                if (t === T.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                    let e = {
                            code: t,
                            message: null == n ? void 0 : n.message
                        },
                        r =
                            null == k
                                ? null
                                : {
                                      type: c.$V.SEND,
                                      message: R(w({}, k), { channelId: L })
                                  };
                    (0, o.openUploadError)({
                        title: A.intl.string(A.t.B3vFdX),
                        help: (0, p.uF)(r, e)
                    });
                    return;
                }
                if (t !== T.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                    if (G)
                        V.reject(
                            new s.Hx(
                                {
                                    status: 400,
                                    body: null != n ? n : {}
                                },
                                t
                            )
                        );
                    else {
                        var h;
                        (0, o.openUploadError)({
                            title: A.intl.string(A.t.B3vFdX),
                            help: null != (h = null == n ? void 0 : n.message) ? h : A.intl.string(A.t.zMEjJi)
                        });
                    }
                    '' !== z.content && '' === I.Z.getDraft(L, U) && i.Z.saveDraft(L, z.content, U),
                        0 === P.Z.getUploadCount(L, U) &&
                            a.Z.setUploads({
                                channelId: L,
                                uploads: D,
                                draftType: U
                            });
                }
            }),
            H.on('complete', (e, t) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: L,
                    file: e,
                    aborted: H._aborted
                });
                let n = (0, C.ZC)(t);
                null != n &&
                    ((0, _.gA)(x.D1),
                    (0, v.I)(
                        {
                            name: n.name,
                            id: n.id
                        },
                        void 0,
                        !0,
                        y.LL.MessageSent
                    ));
            }),
            null == F || null == (t = F.confettiPotionData) || t.callback(),
            await H.uploadFiles(D, z),
            V.resolve(),
            V.promise
        );
    },
    cancel(e, t) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            channelId: e,
            file: t
        });
        let n = S.Z.getMessageForFile(t.id);
        null != n &&
            '' === I.Z.getDraft(n.channel_id, I.d.ChannelMessage) &&
            r.Z.dispatch({
                type: 'DRAFT_SAVE',
                channelId: n.channel_id,
                draft: n.content,
                draftType: I.d.ChannelMessage
            });
    }
};
