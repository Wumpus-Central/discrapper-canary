n.d(t, { nG: () => o });
var r = n(945353),
    i = n(623261);
n(647438);
let a = null;
function o(e, t, n = !0) {
    var a, s;
    let { metaKey: l, ctrlKey: c, altKey: u, shiftKey: d } = t;
    (0, i.vU)() &&
        (null == (s = window.event) || null == (a = s.type) ? void 0 : a.startsWith("key")) &&
        "_blank" === e.target &&
        ((0, i.V5)() ? (l = !0) : (c = !0));
    let f =
        (0, i.Pf)() && (0, i.V5)() && !(0, i.zc)() && 1
            ? new KeyboardEvent("keydown", {
                  keyIdentifier: "Enter",
                  metaKey: l,
                  ctrlKey: c,
                  altKey: u,
                  shiftKey: d,
              })
            : new MouseEvent("click", {
                  metaKey: l,
                  ctrlKey: c,
                  altKey: u,
                  shiftKey: d,
                  bubbles: !0,
                  cancelable: !0,
              });
    (o.isOpening = n), (0, r.A)(e), e.dispatchEvent(f), (o.isOpening = !1);
}
o.isOpening = !1;
