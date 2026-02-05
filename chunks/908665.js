r.d(t, { A: () => o }), r(321073);
var n = r(944181),
    a = r(685357),
    l = r(597807),
    i = r(763424);
let o = {
    id: "nested-interactive",
    selector: `button, a, ${Array.from(n.roles.entries())
        .reduce((e, t) => {
            let [r, n] = t;
            return !0 === n.childrenPresentational && e.push(`[role="${r}"]`), e;
        }, [])
        .join(", ")}`,
    tags: [],
    metadata: {
        description: "Interactive controls must not be nested",
        help: "Nested focusable elements are inaccessible to screen readers",
    },
    check: function (e) {
        return !(function (e) {
            let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
                r = t.nextNode();
            for (; null !== r; ) {
                if (
                    r !== e &&
                    (function (e) {
                        switch (e.nodeName) {
                            case "IFRAME":
                            case "EMBED":
                            case "DETAILS":
                            case "LABEL":
                                return !0;
                            case "INPUT":
                                return "hidden" !== e.getAttribute("type");
                        }
                        switch ((0, a.Lw)(e)) {
                            case "link":
                                return e.hasAttribute("href");
                            case "audio":
                                return e.hasAttribute("controls");
                            case "img":
                                return e.hasAttribute("usemap");
                            case "button":
                                return !0;
                            default:
                                return !1;
                        }
                    })(r)
                )
                    return !1;
                r = t.nextNode();
            }
            return !0;
        })(e) && (0, l.z)(e)
            ? "Nested interactive element"
            : i.o;
    },
};
