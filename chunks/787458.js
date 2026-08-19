"use strict";
n.d(t, { m: () => u, B: () => _ });
var i,
    r = n(535736),
    a = n(292348),
    s = n(652215);
class l {
    getCreateAttachmentURL(e) {
        return s.Rsh.GRAVITY_ATTACHMENTS;
    }
    getDeleteUploadURL(e) {
        return s.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return s.TbF;
    }
    getMaxAttachmentsCount() {
        return s.XgB;
    }
    getMaxTotalAttachmentSize() {
        return a.eM;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var o = n(734057),
    d = n(453771);
class c {
    getCreateAttachmentURL(e) {
        return s.Rsh.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return s.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = o.A.getBasicChannel(e);
        return d.o2(t?.guild_id);
    }
    getMaxAttachmentsCount() {
        return s.XgB;
    }
    getMaxTotalAttachmentSize() {
        return a.eM;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var u =
    (((i = {})[(i.MESSAGE_ATTACHMENT = 0)] = "MESSAGE_ATTACHMENT"),
    (i[(i.GUILD_PRODUCT_ATTACHMENT = 1)] = "GUILD_PRODUCT_ATTACHMENT"),
    (i[(i.GRAVITY_ATTACHMENT = 2)] = "GRAVITY_ATTACHMENT"),
    i);
function _(e) {
    switch (e) {
        case 1:
            return new r.A();
        case 2:
            return new l();
        default:
            return new c();
    }
}
