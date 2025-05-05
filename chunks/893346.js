r.d(e, {
    Zq: () => i,
    r3: () => n
});
let n = (t) => {
    var e;
    return null != (e = null == t ? void 0 : t.ownerDocument) ? e : document;
};
function i(t) {
    return null !== t && 'object' == typeof t && 'nodeType' in t && 'number' == typeof t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in t;
}
