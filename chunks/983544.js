n.d(t, {
    F: () => d,
    e: () => u
});
var r = n(123146),
    i = n(277985),
    o = n(592125),
    a = n(403182),
    s = n(861990),
    l = n(981631);
class c {
    getCreateAttachmentURL(e) {
        return l.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return l.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = o.Z.getBasicChannel(e);
        return a.dg(null == t ? void 0 : t.guild_id);
    }
    getMaxAttachmentsCount() {
        return l.dN1;
    }
    getMaxTotalAttachmentSize() {
        return s.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var u = (function (e) {
    return (e[(e.MESSAGE_ATTACHMENT = 0)] = 'MESSAGE_ATTACHMENT'), (e[(e.GUILD_PRODUCT_ATTACHMENT = 1)] = 'GUILD_PRODUCT_ATTACHMENT'), (e[(e.GRAVITY_ATTACHMENT = 2)] = 'GRAVITY_ATTACHMENT'), e;
})({});
function d(e) {
    switch (e) {
        case 1:
            return new i.Z();
        case 2:
            return new r.Z();
        default:
            return new c();
    }
}
