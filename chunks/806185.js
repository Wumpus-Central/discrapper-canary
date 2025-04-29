n.d(t, { Z: () => l });
var r = n(264181);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class l {
    static fromServer(e) {
        return new l(
            s(o({}, e), {
                dismissibleContent: e.dismissible_content,
                refTargetBackground: e.ref_target_background
            })
        );
    }
    constructor(e) {
        i(this, 'title', void 0), i(this, 'body', void 0), i(this, 'avatar', void 0), i(this, 'decorations', void 0), i(this, 'dismissibleContent', void 0), i(this, 'version', void 0), i(this, 'refTargetBackground', void 0), (this.type = r.Z.COACHTIP), (this.title = e.title), (this.body = e.body), (this.avatar = e.avatar), (this.decorations = e.decorations), (this.dismissibleContent = e.dismissibleContent), (this.version = e.version), (this.refTargetBackground = e.refTargetBackground);
    }
}
