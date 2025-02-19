n.d(t, { Z: () => k }), n(47120), n(789020);
var r = n(481060),
    l = n(570140),
    o = n(430742),
    i = n(904245),
    a = n(166459),
    s = n(531643),
    c = n(881052),
    u = n(673750),
    d = n(141795),
    p = n(476326),
    f = n(680287),
    O = n(247206),
    y = n(539573),
    b = n(786761),
    m = n(3148),
    g = n(48854),
    v = n(785359),
    h = n(79390),
    P = n(980463),
    j = n(992970),
    E = n(576645),
    w = n(317951),
    S = n(287941),
    x = n(623292),
    C = n(807092),
    D = n(467798),
    Z = n(703558),
    A = n(117530),
    L = n(630388),
    I = n(226351),
    _ = n(981631),
    R = n(388032);
function T(e) {
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
function U(e, t) {
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
async function N(e) {
    var t, n, r, d;
    let p,
        { channelId: N, uploads: k, draftType: M, parsedMessage: F, options: B = {}, raiseEndpointErrors: W = !1 } = e,
        G = new f.Z(_.ANM.MESSAGES(N)),
        z = new I.o(),
        H = {
            content: '',
            nonce: '',
            channel_id: N,
            type: _.uaV.DEFAULT,
            sticker_ids: null == B ? void 0 : B.stickerIds,
            poll: null == B ? void 0 : B.poll,
            confetti_potion: (0, E.vY)(null == B ? void 0 : B.confettiPotionData),
            scheduled_timestamp: null == B ? void 0 : B.scheduledTimestamp
        };
    null != F && (H.content = null == F ? void 0 : F.content), null != C.Z.getPendingReply(N) && ((H.type = _.uaV.REPLY), (H.message_reference = B.messageReference), (H.allowed_mentions = B.allowedMentions), (0, x.A6)(N));
    let [V, J] = (0, D.Z)(H.content);
    V && ((H.content = J), (H.flags = (0, L.pj)(null !== (n = H.flags) && void 0 !== n ? n : 0, _.iLy.SUPPRESS_NOTIFICATIONS)));
    let Q = null !== (r = B.nonce) && void 0 !== r ? r : (0, g.r)(),
        X = (0, m.ZP)({
            channelId: N,
            content: H.content,
            tts: null !== (d = null == F ? void 0 : F.tts) && void 0 !== d && d,
            type: H.type,
            messageReference: H.message_reference,
            flags: H.flags,
            nonce: Q,
            poll: (0, h.x9)(B.poll)
        });
    return (
        (H.nonce = Q),
        G.on('start', (e) => {
            (p = (0, b.e5)(U(T({}, X), { id: e.id }))),
                l.Z.dispatch({
                    type: 'UPLOAD_START',
                    channelId: N,
                    file: e,
                    message: p,
                    uploader: G
                });
        }),
        G.on('progress', (e) => {
            l.Z.dispatch({
                type: 'UPLOAD_PROGRESS',
                channelId: N,
                file: e
            });
        }),
        G.on('error', (e, t, n, r) => {
            if (
                (l.Z.dispatch({
                    type: 'UPLOAD_FAIL',
                    channelId: N,
                    file: e,
                    messageRecord: p
                }),
                (0, v.x)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == r ? void 0 : r.msg
                }),
                t === _.evJ.EXPLICIT_CONTENT)
            ) {
                i.Z.sendExplicitMediaClydeError(N, null == n ? void 0 : n.attachments, O.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return;
            }
            if (t === _.evJ.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    r =
                        null == p
                            ? null
                            : {
                                  type: u.$V.SEND,
                                  message: U(T({}, p), { channelId: N })
                              };
                (0, s.openUploadError)({
                    title: R.NW.string(R.t.B3vFdX),
                    help: (0, y.uF)(r, e)
                });
                return;
            }
            if (t !== _.evJ.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS) {
                if (W)
                    z.reject(
                        new c.Hx(
                            {
                                status: t,
                                body: null != n ? n : {}
                            },
                            t
                        )
                    );
                else {
                    var d;
                    (0, s.openUploadError)({
                        title: R.NW.string(R.t.B3vFdX),
                        help: null !== (d = null == n ? void 0 : n.message) && void 0 !== d ? d : R.NW.string(R.t.zMEjJi)
                    });
                }
                '' !== H.content && '' === Z.Z.getDraft(N, M) && o.Z.saveDraft(N, H.content, M),
                    0 === A.Z.getUploadCount(N, M) &&
                        a.Z.setUploads({
                            channelId: N,
                            uploads: k,
                            draftType: M
                        });
            }
        }),
        G.on('complete', (e, t) => {
            l.Z.dispatch({
                type: 'UPLOAD_COMPLETE',
                channelId: N,
                file: e,
                aborted: G._aborted,
                messageRecord: t
            });
            let n = (0, E.ZC)(t);
            null != n &&
                ((0, P.gA)(w.D1),
                (0, S.I)(
                    {
                        name: n.name,
                        id: n.id
                    },
                    void 0,
                    !0,
                    j.LL.MessageSent
                ));
        }),
        null == B || null === (t = B.confettiPotionData) || void 0 === t || t.callback(),
        await G.uploadFiles(k, H),
        z.resolve(),
        z.promise
    );
}
let k = {
    instantBatchUpload: function (e) {
        let { channelId: t, files: n, draftType: r, isThumbnail: l = !1, filesMetadata: o = [] } = e,
            i = Array.from(n).map((e, n) => {
                let r = null != o ? o[n] : {};
                return new d.n(
                    T(
                        {
                            file: e,
                            platform: p.ow.WEB,
                            isThumbnail: l
                        },
                        r
                    ),
                    t
                );
            });
        N({
            channelId: t,
            uploads: i,
            draftType: r
        });
    },
    upload: function e(t) {
        let { channelId: n, file: a, draftType: c, message: u, hasSpoiler: d, filename: p } = t,
            y = {
                content: '',
                tts: !1,
                hasSpoiler: d,
                filename: p
            };
        if (null != u) {
            (y.content = u.content), (y.tts = u.tts), (y.channel_id = u.channel_id);
            let e = C.Z.getPendingReply(n);
            if (null != e) {
                let t = i.Z.getSendMessageOptionsForReply(e);
                (y.type = _.uaV.REPLY), (y.message_reference = t.messageReference), (y.allowed_mentions = t.allowedMentions), (0, x.A6)(n);
            }
        }
        let b = new f.Z(_.ANM.MESSAGES(n));
        b.on('start', (e) => {
            l.Z.dispatch({
                type: 'UPLOAD_START',
                channelId: n,
                file: e,
                uploader: b
            });
        }),
            b.on('progress', (e) => {
                l.Z.dispatch({
                    type: 'UPLOAD_PROGRESS',
                    channelId: n,
                    file: e
                });
            }),
            b.on('error', (t, d, p) => {
                if (
                    (l.Z.dispatch({
                        type: 'UPLOAD_FAIL',
                        channelId: n,
                        file: t
                    }),
                    (0, v.x)({
                        fileItems: t.items,
                        failureCode: d
                    }),
                    d === _.evJ.EXPLICIT_CONTENT)
                ) {
                    i.Z.sendExplicitMediaClydeError(n, null == p ? void 0 : p.attachments, O.UU.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return;
                }
                (0, s.openUploadError)({
                    title: R.NW.string(R.t.B3vFdX),
                    help: R.NW.format(R.t.gIlRx8, {
                        onClick: () => {
                            (0, r.Mr3)(s.A),
                                e({
                                    channelId: n,
                                    file: a,
                                    draftType: c,
                                    message: u
                                });
                        }
                    })
                }),
                    '' !== y.content && '' === Z.Z.getDraft(n, c) && o.Z.saveDraft(n, y.content, c);
            }),
            b.on('complete', (e) => {
                l.Z.dispatch({
                    type: 'UPLOAD_COMPLETE',
                    channelId: n,
                    file: e
                });
            }),
            b.upload(a, y);
    },
    uploadFiles: N,
    cancel(e) {
        l.Z.dispatch({
            type: 'UPLOAD_CANCEL_REQUEST',
            file: e
        }),
            null != e.draftContent &&
                null != e.channelId &&
                '' === Z.Z.getDraft(e.channelId, Z.d.ChannelMessage) &&
                l.Z.dispatch({
                    type: 'DRAFT_SAVE',
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: Z.d.ChannelMessage
                });
    }
};
