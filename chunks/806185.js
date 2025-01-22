r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(264181);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    static fromServer(e) {
        return new o({
            ...e,
            dismissibleContent: e.dismissible_content,
            refTargetBackground: e.ref_target_background
        });
    }
    constructor(e) {
        a(this, 'title', void 0), a(this, 'body', void 0), a(this, 'avatar', void 0), a(this, 'decorations', void 0), a(this, 'dismissibleContent', void 0), a(this, 'version', void 0), a(this, 'refTargetBackground', void 0), (this.type = i.Z.COACHTIP), (this.title = e.title), (this.body = e.body), (this.avatar = e.avatar), (this.decorations = e.decorations), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version), (this.refTargetBackground = e.refTargetBackground);
    }
}
