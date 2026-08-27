"use strict";
r.d(t, { A: () => c, t: () => u });
var n = r(143761);
let i = "u" > typeof Element && "checkVisibility" in Element.prototype;
function o(e, t) {
    return i
        ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]")
        : "#comment" !== e.nodeName &&
              (function (e) {
                  let t = (0, n.mD)(e);
                  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                  let { display: r, visibility: i } = e.style,
                      o = "none" !== r && "hidden" !== i && "collapse" !== i;
                  if (o) {
                      let { getComputedStyle: t } = (0, n.mD)(e),
                          { display: r, visibility: i } = t(e);
                      o = "none" !== r && "hidden" !== i && "collapse" !== i;
                  }
                  return o;
              })(e) &&
              !e.hasAttribute("hidden") &&
              !e.hasAttribute("data-react-aria-prevent-focus") &&
              ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) &&
              (!e.parentElement || o(e.parentElement, e));
}
let a = [
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
    s = a.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let l = a.join(':not([hidden]):not([tabindex="-1"]),');
function u(e, t) {
    return e.matches(s) && !f(e) && (t?.skipVisibilityCheck || o(e));
}
function c(e) {
    return e.matches(l) && o(e) && !f(e);
}
function f(e) {
    let t = e;
    for (; null != t; ) {
        if (t instanceof (0, n.mD)(t).HTMLElement && t.inert) return !0;
        t = t.parentElement;
    }
    return !1;
}
