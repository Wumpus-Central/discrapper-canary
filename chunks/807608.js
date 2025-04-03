n.d(t, { Z: () => u }), n(47120), n(653041);
var r = n(485589),
    a = n(424706),
    l = n(14160),
    i = n(247123);
let u = {
    id: 'nested-interactive',
    selector: 'button, a, '.concat(
        Array.from(r.roles.entries())
            .reduce((e, t) => {
                let [n, r] = t;
                return !0 === r.childrenPresentational && e.push('[role="'.concat(n, '"]')), e;
            }, [])
            .join(', ')
    ),
    tags: [],
    metadata: {
        description: 'Interactive controls must not be nested',
        help: 'Nested focusable elements are inaccessible to screen readers'
    },
    check: function (e) {
        return !(function (e) {
            let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
                n = t.nextNode();
            for (; null !== n; ) {
                if (
                    n !== e &&
                    (function (e) {
                        switch (e.nodeName) {
                            case 'IFRAME':
                            case 'EMBED':
                            case 'DETAILS':
                            case 'LABEL':
                                return !0;
                            case 'INPUT':
                                return 'hidden' !== e.getAttribute('type');
                        }
                        switch ((0, a.cY)(e)) {
                            case 'link':
                                return e.hasAttribute('href');
                            case 'audio':
                                return e.hasAttribute('controls');
                            case 'img':
                                return e.hasAttribute('usemap');
                            case 'button':
                                return !0;
                            default:
                                return !1;
                        }
                    })(n)
                )
                    return !1;
                n = t.nextNode();
            }
            return !0;
        })(e) && (0, l.p)(e)
            ? 'Nested interactive element'
            : i.w;
    }
};
