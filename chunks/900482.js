n.d(t, {
    B: () => d,
    m: () => u,
});
var r = n(535736),
    i = n(63044),
    a = n(734057),
    s = n(453771),
    o = n(292348),
    l = n(652215);
class c {
    getCreateAttachmentURL(e) {
        return l.Rsh.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return l.Rsh.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let t = a.A.getBasicChannel(e);
        return s.o2(null == t ? void 0 : t.guild_id);
    }
    getMaxAttachmentsCount() {
        return l.XgB;
    }
    getMaxTotalAttachmentSize() {
        return o.eM;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
var u = (function (e) {
    return (
        (e[(e.MESSAGE_ATTACHMENT = 0)] = "MESSAGE_ATTACHMENT"),
        (e[(e.GUILD_PRODUCT_ATTACHMENT = 1)] = "GUILD_PRODUCT_ATTACHMENT"),
        (e[(e.GRAVITY_ATTACHMENT = 2)] = "GRAVITY_ATTACHMENT"),
        e
    );
})({});
function d(e) {
    switch (e) {
        case 1:
            return new r.A();
        case 2:
            return new i.A();
        default:
            return new c();
    }
}
