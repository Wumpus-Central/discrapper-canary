r.d(t, { Z: () => R }), r(47120), r(789020);
var n = r(481060),
    a = r(570140),
    o = r(430742),
    i = r(904245),
    l = r(166459),
    s = r(531643),
    c = r(881052),
    u = r(673750),
    d = r(141795),
    p = r(476326),
    f = r(680287),
    m = r(247206),
    g = r(539573),
    b = r(786761),
    _ = r(3148),
    h = r(48854),
    O = r(785359),
    y = r(79390),
    v = r(980463),
    j = r(992970),
    x = r(576645),
    P = r(317951),
    E = r(287941),
    I = r(623292),
    N = r(807092),
    w = r(467798),
    C = r(703558),
    S = r(117530),
    T = r(630388),
    A = r(226351),
    k = r(981631),
    M = r(388032);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
async function W(e) {
    var t, r, n, d;
    let p,
        { channelId: W, uploads: R, draftType: Z, parsedMessage: G, options: B = {}, raiseEndpointErrors: K = !1 } = e,
        U = new f.Z(k.ANM.MESSAGES(W)),
        F = new A.o(),
        H = {
            content: '',
            nonce: '',
            channel_id: W,
            type: k.uaV.DEFAULT,
            sticker_ids: null == B ? void 0 : B.stickerIds,
            poll: null == B ? void 0 : B.poll,
            confetti_potion: (0, x.vY)(null == B ? void 0 : B.confettiPotionData),
            scheduled_timestamp: null == B ? void 0 : B.scheduledTimestamp
        };
    null != G && (H.content = null == G ? void 0 : G.content), null != N.Z.getPendingReply(W) && ((H.type = k.uaV.REPLY), (H.message_reference = B.messageReference), (H.allowed_mentions = B.allowedMentions), (0, I.A6)(W));
    let [Q, z] = (0, w.Z)(H.content);
    Q && ((H.content = z), (H.flags = (0, T.pj)(null != (r = H.flags) ? r : 0, k.iLy.SUPPRESS_NOTIFICATIONS)));
    let Y = null != (n = B.nonce) ? n : (0, h.r)(),
        X = (0, _.ZP)({
            channelId: W,
            content: H.content,
            tts: null != (d = null == G ? void 0 : G.tts) && d,
            type: H.type,
            messageReference: H.message_reference,
            flags: H.flags,
            nonce: Y,
            poll: (0, y.x9)(B.poll)
        });
    return (
        (H.nonce = Y),
        U.on('start', (e) => {
            (p = (0, b.e5)(D(L({}, X), { id: e.id }))),
                a.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: W,
                    file: e,
                    message: p,
                    uploader: U
                });
        }),
        U.on('progress', (e) => {
            a.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: W,
                file: e
            });
        }),
        U.on('error', (e, t, r, n) => {
            if (
                (a.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: W,
                    file: e,
                    messageRecord: p
                }),
                (0, O.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == n ? void 0 : n.msg
                }),
                t === k.evJ.EXPLICIT_CONTENT)
            )
                return void i.Z.sendExplicitMediaClydeError(W, null == r ? void 0 : r.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
            if (t === k.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == r ? void 0 : r.message
                    },
                    n =
                        null == p
                            ? null
                            : {
                                  type: u.$V.SEND,
                                  message: D(L({}, p), { channelId: W })
                              };
                (0, s.openUploadError)({
                    title: M.NW.string(M.t.B3vFdX),
                    help: (0, g.uF)(n, e)
                });
                return;
            }
            if (t !== k.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (K)
                    F.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != r ? r : {}
                            },
                            t
                        )
                    );
                else {
                    var d;
                    (0, s.openUploadError)({
                        title: M.NW.string(M.t.B3vFdX),
                        help: null != (d = null == r ? void 0 : r.message) ? d : M.NW.string(M.t.zMEjJi)
                    });
                }
                '' !== H.content && '' === C.Z.getDraft(W, Z) && o.Z.saveDraft(W, H.content, Z),
                    0 === S.Z.getUploadCount(W, Z) &&
                        l.Z.setUploads({
                            channelId: W,
                            uploads: R,
                            draftType: Z
                        });
            }
        }),
        U.on('complete', (e, t) => {
            a.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: W,
                file: e,
                aborted: U._aborted,
                messageRecord: t
            });
            let r = (0, x.ZC)(t);
            null != r &&
                ((0, v.gA)(P.D1),
                (0, E.I)(
                    {
                        name: r.name,
                        id: r.id
                    },
                    void 0,
                    !0,
                    j.LL.MessageSent
                ));
        }),
        null == B || null == (t = B.confettiPotionData) || t.callback(),
        await U.uploadFiles(R, H),
        F.resolve(),
        F.promise
    );
}
let R = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: r, draftType: n, isThumbnail: a = !1, filesMetadata: o = [] } = e,
            i = Array.from(r).map((e, r) => {
                let n = null != o ? o[r] : {};
                return new d.n(
                    L(
                        {
                            file: e,
                            platform: p.ow.WEB,
                            isThumbnail: a
                        },
                        n
                    ),
                    t
                );
            });
        W({
            channelId: t,
            uploads: i,
            draftType: n
        });
    },
    upload: function e(t) {
        let { channelId: r, file: l, draftType: c, message: u, hasSpoiler: d, filename: p } = t,
            g = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: p
            };
        if (null != u) {
            (g.content = u.content), (g.tts = u.tts), (g.channel_id = u.channel_id);
            let e = N.Z.getPendingReply(r);
            if (null != e) {
                let t = i.Z.getSendMessageOptionsForReply(e);
                (g.type = k.uaV.REPLY), (g.message_reference = t.messageReference), (g.allowed_mentions = t.allowedMentions), (0, I.A6)(r);
            }
        }
        let b = new f.Z(k.ANM.MESSAGES(r));
        b.on('start', (e) => {
            a.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: r,
                file: e,
                uploader: b
            });
        }),
            b.on('progress', (e) => {
                a.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: r,
                    file: e
                });
            }),
            b.on('error', (t, d, p) => {
                if (
                    (a.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: r,
                        file: t
                    }),
                    (0, O.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === k.evJ.EXPLICIT_CONTENT)
                )
                    return void i.Z.sendExplicitMediaClydeError(r, null == p ? void 0 : p.attachments, m.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                (0, s.openUploadError)({
                    title: M.NW.string(M.t.B3vFdX),
                    help: M.NW.format(M.t.gIlRx8, {
                        onClick: () => {
                            (0, n.Mr3)(s.A),
                                e({
                                    channelId: r,
                                    file: l,
                                    draftType: c,
                                    message: u
                                });
                        }
                    })
                }),
                    '' !== g.content && '' === C.Z.getDraft(r, c) && o.Z.saveDraft(r, g.content, c);
            }),
            b.on('complete', (e) => {
                a.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: r,
                    file: e
                });
            }),
            b.upload(l, g);
    },
    uploadFiles: W,
    cancel(e) {
        a.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === C.Z.getDraft(e.channelId, C.d.ChannelMessage) &&
                a.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: C.d.ChannelMessage
                });
    }
};
