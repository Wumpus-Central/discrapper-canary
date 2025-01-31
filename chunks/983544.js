n.d(t, {
    F: () => d,
    e: () => c
});
var i = n(123146),
    r = n(277985),
    a = n(592125),
    s = n(403182),
    o = n(861990),
    l = n(981631);
class u {
    getCreateAttachmentURL(e) {
        return l.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return l.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = a.Z.getBasicChannel(e);
        return s.dg(null == t ? void 0 : t.guild_id);
    }
    getMaxAttachmentsCount() {
        return l.dN1;
    }
    getMaxTotalAttachmentSize() {
        return o.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var c = (function (e) {
    return (e[(e.MESSAGE_ATTACHMENT = 0)] = 'MESSAGE_ATTACHMENT'), (e[(e.GUILD_PRODUCT_ATTACHMENT = 1)] = 'GUILD_PRODUCT_ATTACHMENT'), (e[(e.GRAVITY_ATTACHMENT = 2)] = 'GRAVITY_ATTACHMENT'), e;
})({});
function d(e) {
    switch (e) {
        case 1:
            return new r.Z();
        case 2:
            return new i.Z();
        default:
            return new u();
    }
}
