n.d(t, { x: () => a });
var i = n(367907),
    r = n(981631);
function a(e) {
    var t, n;
    let a = null != e.fileItems ? s(e.fileItems) : [],
        o = null !== (t = e.errorMessage) && void 0 !== t ? t : void 0,
        l = null !== (n = e.failureCode) && void 0 !== n ? n : void 0;
    (0, i.yw)(r.rMx.SEND_MESSAGE_FAILURE, {
        failure_code: l,
        error_message: o,
        attachment_mimetypes: a
    });
}
function s(e) {
    return e.map((e) => {
        var t;
        return null !== (t = e.mimeType) && void 0 !== t ? t : 'unknown';
    });
}
