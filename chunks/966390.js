n.d(t, { Z: () => M }), n(388685), n(997841);
var i = n(570140),
    r = n(430742),
    o = n(904245),
    l = n(166459),
    a = n(531643),
    s = n(881052),
    c = n(673750),
    u = n(680287),
    d = n(247206),
    h = n(539573),
    p = n(786761),
    m = n(3148),
    f = n(48854),
    g = n(785359),
    b = n(79390),
    O = n(980463),
    j = n(992970),
    v = n(576645),
    y = n(317951),
    T = n(287941),
    S = n(623292),
    x = n(807092),
    _ = n(467798),
    P = n(703558),
    E = n(117530),
    C = n(62817),
    R = n(630388),
    I = n(226351),
    w = n(981631),
    N = n(388032);
function Z(e) {
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
function A(e, t) {
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
let M = {
    uploadFiles: async function (e) {
        var t, n, C, M;
        let L,
            { channelId: k, uploads: D, draftType: U, parsedMessage: F, options: B = {}, raiseEndpointErrors: V = !1 } = e,
            G = new u.Z(w.ANM.MESSAGES(k)),
            H = new I.o(),
            z = {
                content: '',
                nonce: '',
                channel_id: k,
                type: w.uaV.DEFAULT,
                sticker_ids: null == B ? void 0 : B.stickerIds,
                poll: null == B ? void 0 : B.poll,
                confetti_potion: (0, v.vY)(null == B ? void 0 : B.confettiPotionData),
                scheduled_timestamp: null == B ? void 0 : B.scheduledTimestamp
            };
        null != F && (z.content = null == F ? void 0 : F.content), null != x.Z.getPendingReply(k) && ((z.type = w.uaV.REPLY), (z.message_reference = B.messageReference), (z.allowed_mentions = B.allowedMentions), (0, S.A6)(k));
        let [W, K] = (0, _.Z)(z.content);
        W && ((z.content = K), (z.flags = (0, R.pj)(null != (n = z.flags) ? n : 0, w.iLy.SUPPRESS_NOTIFICATIONS)));
        let J = null != (C = B.nonce) ? C : (0, f.r)(),
            X = (0, m.ZP)({
                channelId: k,
                content: z.content,
                tts: null != (M = null == F ? void 0 : F.tts) && M,
                type: z.type,
                messageReference: z.message_reference,
                flags: z.flags,
                nonce: J,
                poll: (0, b.x9)(B.poll)
            });
        return (
            (z.nonce = J),
            G.on('start', (e) => {
                (L = (0, p.e5)(A(Z({}, X), { id: e.id }))),
                    i.Z.dispatch({
                        type: 'UPLOAD_START',
                        channelId: k,
                        file: e,
                        message: L,
                        uploader: G
                    });
            }),
            G.on('progress', (e) => {
                i.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: k,
                    file: e
                });
            }),
            G.on('error', (e, t, n, u) => {
                if (
                    (i.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: k,
                        file: e,
                        messageRecord: L
                    }),
                    (0, g.x)({
                        fileItems: e.items,
                        failureCode: t,
                        errorMessage: null == u ? void 0 : u.msg
                    }),
                    t === w.evJ.EXPLICIT_CONTENT)
                )
                    return void o.Z.sendExplicitMediaClydeError(k, null == n ? void 0 : n.attachments, d.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                if (t === w.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                    let e = {
                            code: t,
                            message: null == n ? void 0 : n.message
                        },
                        i =
                            null == L
                                ? null
                                : {
                                      type: c.$V.SEND,
                                      message: A(Z({}, L), { channelId: k })
                                  };
                    (0, a.openUploadError)({
                        title: N.intl.string(N.t.B3vFdX),
                        help: (0, h.uF)(i, e)
                    });
                    return;
                }
                if (t !== w.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                    if (V)
                        H.reject(
                            new s.Hx(
                                {
                                    status: 400,
                                    body: null != n ? n : {}
                                },
                                t
                            )
                        );
                    else {
                        var p;
                        (0, a.openUploadError)({
                            title: N.intl.string(N.t.B3vFdX),
                            help: null != (p = null == n ? void 0 : n.message) ? p : N.intl.string(N.t.zMEjJi)
                        });
                    }
                    '' !== z.content && '' === P.Z.getDraft(k, U) && r.Z.saveDraft(k, z.content, U),
                        0 === E.Z.getUploadCount(k, U) &&
                            l.Z.setUploads({
                                channelId: k,
                                uploads: D,
                                draftType: U
                            });
                }
            }),
            G.on('complete', (e, t) => {
                i.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: k,
                    file: e,
                    aborted: G._aborted,
                    messageRecord: t
                });
                let n = (0, v.ZC)(t);
                null != n &&
                    ((0, O.gA)(y.D1),
                    (0, T.I)(
                        {
                            name: n.name,
                            id: n.id
                        },
                        void 0,
                        !0,
                        j.LL.MessageSent
                    ));
            }),
            null == B || null == (t = B.confettiPotionData) || t.callback(),
            await G.uploadFiles(D, z),
            H.resolve(),
            H.promise
        );
    },
    cancel(e, t) {
        i.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            channelId: e,
            file: t
        });
        let n = C.Z.getMessageForFile(t.id);
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
