var n = r(869639);
e.exports = function (e) {
    var t = e.getSelection(),
        r = t.getEndKey(),
        o = e.getCurrentContent().getBlockForKey(r).getLength();
    return n.set(e, {
        selection: t.merge({ anchorKey: r, anchorOffset: o, focusKey: r, focusOffset: o, isBackward: !1 }),
        forceSelection: !0,
    });
};
