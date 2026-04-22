"use strict";
n.d(t, { B: () => _, m: () => c });
var r,
    i = n(535736),
    s = n(63044),
    a = n(734057),
    o = n(453771),
    l = n(292348),
    u = n(652215);
class d {
    getCreateAttachmentURL(e) {
        return u.Rsh.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return u.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = a.A.getBasicChannel(e);
        return o.o2(t?.guild_id);
    }
    getMaxAttachmentsCount() {
        return u.XgB;
    }
    getMaxTotalAttachmentSize() {
        return l.eM;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var c =
    (((r = {})[(r.MESSAGE_ATTACHMENT = 0)] = "MESSAGE_ATTACHMENT"),
    (r[(r.GUILD_PRODUCT_ATTACHMENT = 1)] = "GUILD_PRODUCT_ATTACHMENT"),
    (r[(r.GRAVITY_ATTACHMENT = 2)] = "GRAVITY_ATTACHMENT"),
    r);
function _(e) {
    switch (e) {
        case 1:
            return new i.A();
        case 2:
            return new s.A();
        default:
            return new d();
    }
}
