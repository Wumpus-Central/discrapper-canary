n.d(t, { Z: () => D }), n(388685), n(997841);
var r = n(570140),
    i = n(430742),
    l = n(904245),
    o = n(166459),
    s = n(531643),
    a = n(881052),
    c = n(673750),
    u = n(680287),
    d = n(247206),
    h = n(539573),
    p = n(786761),
    f = n(3148),
    g = n(48854),
    m = n(785359),
    b = n(79390),
    y = n(980463),
    O = n(992970),
    v = n(576645),
    _ = n(317951),
    C = n(287941),
    j = n(623292),
    S = n(807092),
    E = n(467798),
    x = n(703558),
    P = n(117530),
    I = n(62817),
    w = n(630388),
    N = n(226351),
    Z = n(981631),
    T = n(388032);
function A(e) {
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
let D = {
    uploadFiles: async function (e) {
        var t, n, I, D;
        let L,
            { channelId: M, uploads: k, draftType: U, parsedMessage: G, options: B = {}, raiseEndpointErrors: V = !1 } = e,
            H = new u.Z(Z.ANM.MESSAGES(M)),
            F = new N.o(),
            z = {
                content: '',
                nonce: '',
                channel_id: M,
                type: Z.uaV.DEFAULT,
                sticker_ids: null == B ? void 0 : B.stickerIds,
                poll: null == B ? void 0 : B.poll,
                confetti_potion: (0, v.vY)(null == B ? void 0 : B.confettiPotionData),
                scheduled_timestamp: null == B ? void 0 : B.scheduledTimestamp
            };
        null != G && (z.content = null == G ? void 0 : G.content), null != S.Z.getPendingReply(M) && ((z.type = Z.uaV.REPLY), (z.message_reference = B.messageReference), (z.allowed_mentions = B.allowedMentions), (0, j.A6)(M));
        let [W, K] = (0, E.Z)(z.content);
        W && ((z.content = K), (z.flags = (0, w.pj)(null != (n = z.flags) ? n : 0, Z.iLy.SUPPRESS_NOTIFICATIONS)));
        let Y = null != (I = B.nonce) ? I : (0, g.r)(),
            q = (0, f.ZP)({
                channelId: M,
                content: z.content,
                tts: null != (D = null == G ? void 0 : G.tts) && D,
                type: z.type,
                messageReference: z.message_reference,
                flags: z.flags,
                nonce: Y,
                poll: (0, b.x9)(B.poll)
            });
        return (
            (z.nonce = Y),
            H.on('start', (e) => {
                (L = (0, p.e5)(R(A({}, q), { id: e.id }))),
                    r.Z.dispatch({
                        type: 'UPLOAD_START',
                        channelId: M,
                        file: e,
                        message: L,
                        uploader: H
                    });
            }),
            H.on('progress', (e) => {
                r.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: M,
                    file: e
                });
            }),
            H.on('error', (e, t, n, u) => {
                if (
                    (r.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: M,
                        file: e,
                        messageId: null == L ? void 0 : L.id
                    }),
                    (0, m.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == u ? void 0 : u.msg
                    }),
                    t === Z.evJ.EXPLICIT_CONTENT)
                )
                    return void l.Z.sendExplicitMediaClydeError(M, null == n ? void 0 : n.attachments, d.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                if (t === Z.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                    let e = {
                            code: t,
                            message: null == n ? void 0 : n.message
                        },
                        r =
                            null == L
                                ? null
                                : {
                                      type: c.$V.SEND,
                                      message: R(A({}, L), { channelId: M })
                                  };
                    (0, s.openUploadError)({
                        title: T.intl.string(T.t.B3vFdX),
                        help: (0, h.uF)(r, e)
                    });
                    return;
                }
                if (t !== Z.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                    if (V)
                        F.reject(
                            new a.Hx(
                                {
                                    status: 400,
                                    body: null != n ? n : {}
                                },
                                t
                            )
                        );
                    else {
                        var p;
                        (0, s.openUploadError)({
                            title: T.intl.string(T.t.B3vFdX),
                            help: null != (p = null == n ? void 0 : n.message) ? p : T.intl.string(T.t.zMEjJi)
                        });
                    }
                    '' !== z.content && '' === x.Z.getDraft(M, U) && i.Z.saveDraft(M, z.content, U),
                        0 === P.Z.getUploadCount(M, U) &&
                            o.Z.setUploads({
                                channelId: M,
                                uploads: k,
                                draftType: U
                            });
                }
            }),
            H.on('complete', (e, t) => {
                r.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: M,
                    file: e,
                    aborted: H._aborted
                });
                let n = (0, v.ZC)(t);
                null != n &&
                    ((0, y.gA)(_.D1),
                    (0, C.I)(
                        {
                            name: n.name,
                            id: n.id
                        },
                        void 0,
                        !0,
                        O.LL.MessageSent
                    ));
            }),
            null == B || null == (t = B.confettiPotionData) || t.callback(),
            await H.uploadFiles(k, z),
            F.resolve(),
            F.promise
        );
    },
    cancel(e, t) {
        r.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            channelId: e,
            file: t
        });
        let n = I.Z.getMessageForFile(t.id);
        null != n &&
            '' === x.Z.getDraft(n.channel_id, x.d.ChannelMessage) &&
            r.Z.dispatch({
                type: 'DRAFT_SAVE',
                channelId: n.channel_id,
                draft: n.content,
                draftType: x.d.ChannelMessage
            });
    }
};
