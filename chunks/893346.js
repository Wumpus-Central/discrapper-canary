n.d(t, {
    Zq: () => r,
    r3: () => i
});
let i = (e) => {
    var t;
    return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document;
};
function r(e) {
    return null !== e && 'object' == typeof e && 'nodeType' in e && 'number' == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in e;
}
