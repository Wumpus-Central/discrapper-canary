r.d(n, {
    p: function () {
        return o;
    }
});
var i = r(192379),
    a = r(155263);
function o(e) {
    var n;
    let r = (0, a.BA)({
            ...e,
            suppressTextValueWarning: !0,
            defaultSelectedKey: null !== (n = e.defaultSelectedKey) && void 0 !== n ? n : s(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set())
        }),
        { selectionManager: o, collection: l, selectedKey: u } = r,
        c = (0, i.useRef)(u);
    return (
        (0, i.useEffect)(() => {
            let e = u;
            (o.isEmpty || !l.getItem(e)) && null != (e = s(l, r.disabledKeys)) && o.setSelectedKeys([e]), ((null != e && null == o.focusedKey) || (!o.isFocused && e !== c.current)) && o.setFocusedKey(e), (c.current = e);
        }),
        {
            ...r,
            isDisabled: e.isDisabled || !1
        }
    );
}
function s(e, n) {
    let r = null;
    if (e) {
        for (r = e.getFirstKey(); n.has(r) && r !== e.getLastKey(); ) r = e.getKeyAfter(r);
        n.has(r) && r === e.getLastKey() && (r = e.getFirstKey());
    }
    return r;
}
