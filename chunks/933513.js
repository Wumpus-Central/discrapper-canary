function r(e) {
    let t = null == e ? void 0 : e.activeElement;
    return ['INPUT', 'TEXTAREA'].includes(null == t ? void 0 : t.tagName) || (null == t ? void 0 : t.isContentEditable);
}
n.d(t, { Z: () => r });
