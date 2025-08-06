n.d(t, {
    Zq: () => o,
    r3: () => r
});
let r = (e) => {
    var t;
    return null != (t = null == e ? void 0 : e.ownerDocument) ? t : document;
};
function i(e) {
    return null !== e && 'object' == typeof e && 'nodeType' in e && 'number' == typeof e.nodeType;
}
function o(e) {
    return i(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in e;
}
