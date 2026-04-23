"use strict";
n.d(t, { m: () => u, B: () => c });
var i,
    r = n(535736),
    s = n(292348),
    a = n(652215);
class o {
    getCreateAttachmentURL(e) {
        return a.Rsh.GRAVITY_ATTACHMENTS;
    }
    getDeleteUploadURL(e) {
        return a.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        return a.TbF;
    }
    getMaxAttachmentsCount() {
        return a.XgB;
    }
    getMaxTotalAttachmentSize() {
        return s.eM;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var l = n(734057),
    d = n(453771);
class _ {
    getCreateAttachmentURL(e) {
        return a.Rsh.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return a.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = l.A.getBasicChannel(e);
        return d.o2(t?.guild_id);
    }
    getMaxAttachmentsCount() {
        return a.XgB;
    }
    getMaxTotalAttachmentSize() {
        return s.eM;
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
function c(e) {
    switch (e) {
        case 1:
            return new r.A();
        case 2:
            return new o();
        default:
            return new _();
    }
}
