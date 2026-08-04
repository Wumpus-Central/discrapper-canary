"use strict";
n.d(t, { k: () => A });
var i = n(139033),
    r = n(95561),
    a = n(488004),
    s = n(453771),
    l = n(346293),
    o = n(550642),
    d = n(292348),
    c = n(652215),
    u = n(375708);
function _(e) {
    return e.reduce((e, t) => e + t, 0);
}
var E = n(381941);
function A(e) {
    let { file: t, guildId: n, code: A, reason: h } = e;
    if (void 0 === A) return !1;
    if (A === c.t02.ENTITY_TOO_LARGE) {
        let e,
            d,
            A,
            I = (0, o.R8)({ location: "web.handleUploadMessageAttachmentsErrors" }),
            f = (0, s.o2)(n),
            p = (0, o.Jy)(I, f),
            T =
                ((d = (e = t.items ?? []).map((e) => e.preCompressionSize)),
                {
                    preCompressionFileSizes: d,
                    postCompressionFileSizes: (A = e.map((e) => e.postCompressionSize ?? e.preCompressionSize)),
                    preCompressionAggregateSize: t.totalPreCompressionSize > 0 ? t.totalPreCompressionSize : _(d),
                    postCompressionAggregateSize:
                        null != t.totalPostCompressionSize && t.totalPostCompressionSize > 0
                            ? t.totalPostCompressionSize
                            : _(A),
                    numAttachments: t.attachmentsCount > 0 ? t.attachmentsCount : e.length,
                });
        return (
            (0, r.zV)(
                c.HAw.FILE_SIZE_LIMIT_EXCEEDED,
                (0, l.s)({
                    guildId: n,
                    channelId: t.items?.[0]?.channelId ?? null,
                    userIndividualFileSizeLimit: f,
                    numAttachments: T.numAttachments,
                    preCompressionFileSizes: T.preCompressionFileSizes,
                    preCompressionAggregateSize: T.preCompressionAggregateSize,
                    postCompressionFileSizes: T.postCompressionFileSizes,
                    postCompressionAggregateSize: T.postCompressionAggregateSize,
                    attachmentMimeTypes: null != t.items ? (0, a.p)(t.items) : [],
                    errorType: h?.type ?? E.ty.ERROR_SOURCE_UNKNOWN,
                    kestrelVariant: (0, o.H6)(I),
                }),
            ),
            (0, i.A)({
                title: u.intl.string(u.t["/tGlcj"]),
                subtitle: u.intl.formatToPlainString(u.t.fxEKdS, { maxSize: (0, s.Hb)(p) }),
            }),
            !0
        );
    }
    if (A === c.t02.TOO_MANY_ATTACHMENTS)
        return (
            (0, i.A)({
                title: u.intl.string(u.t.wOr6hB),
                subtitle: u.intl.formatToPlainString(u.t["qqyp/e"], { limit: c.XgB }),
            }),
            !0
        );
    if (A === c.t02.ENTITY_EMPTY)
        return (0, i.A)({ title: u.intl.string(u.t.B3vFdU), subtitle: u.intl.string(u.t["9ZpT2C"]) }), !0;
    if (A === c.t02.INVALID_FILE_ASSET)
        return (0, i.A)({ title: u.intl.string(u.t.B3vFdU), subtitle: u.intl.string(u.t.zMEjJg) }), !0;
    let I = (function (e) {
        let t = u.intl.string(u.t.B3vFdU);
        switch (e) {
            case c.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE:
                return { title: t, body: u.intl.formatToPlainString(u.t.DYFPg2, { maxSizeMb: d.YK }) };
            case c.t02.CLOUD_UPLOAD_NOT_FOUND:
                return { title: t, body: u.intl.string(u.t.bQldfH) };
            case c.t02.INVALID_PERMISSIONS:
                return { title: t, body: u.intl.string(u.t.zl4Weq) };
            default:
                return null;
        }
    })(A);
    return null != I && ((0, i.A)({ title: I.title, subtitle: I.body }), !0);
}
