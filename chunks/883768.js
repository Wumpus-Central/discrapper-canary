"use strict";
n.d(t, { A: () => l, t: () => o });
var r = n(46802);
let i = [
        "input:not([disabled]):not([type=hidden])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "button:not([disabled])",
        "a[href]",
        "area[href]",
        "summary",
        "iframe",
        "object",
        "embed",
        "audio[controls]",
        "video[controls]",
        '[contenteditable]:not([contenteditable^="false"])',
        "permission",
    ],
    s = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let a = i.join(':not([hidden]):not([tabindex="-1"]),');
function o(e) {
    return e.matches(s) && (0, r.J)(e) && !u(e);
}
function l(e) {
    return e.matches(a) && (0, r.J)(e) && !u(e);
}
function u(e) {
    let t = e;
    for (; null != t; ) {
        if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
        t = t.parentElement;
    }
    return !1;
}
