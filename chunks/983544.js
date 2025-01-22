r.d(n, {
    F: function () {
        return f;
    },
    e: function () {
        return i;
    }
});
var i,
    a = r(123146),
    o = r(277985),
    s = r(592125),
    l = r(403182),
    u = r(861990),
    c = r(981631);
class d {
    getCreateAttachmentURL(e) {
        return c.ANM.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e);
    }
    getDeleteUploadURL(e) {
        return c.ANM.MESSAGE_DELETE_UPLOAD(e);
    }
    getMaxFileSize(e) {
        let n = s.Z.getBasicChannel(e);
        return l.dg(null == n ? void 0 : n.guild_id);
    }
    getMaxAttachmentsCount() {
        return c.dN1;
    }
    getMaxTotalAttachmentSize() {
        return u.zz;
    }
    get shouldReactNativeCompressUploads() {
        return !0;
    }
}
function f(e) {
    switch (e) {
        case 1:
            return new o.Z();
        case 2:
            return new a.Z();
        default:
            return new d();
    }
}
!(function (e) {
    (e[(e.MESSAGE_ATTACHMENT = 0)] = 'MESSAGE_ATTACHMENT'), (e[(e.GUILD_PRODUCT_ATTACHMENT = 1)] = 'GUILD_PRODUCT_ATTACHMENT'), (e[(e.GRAVITY_ATTACHMENT = 2)] = 'GRAVITY_ATTACHMENT');
})(i || (i = {}));
