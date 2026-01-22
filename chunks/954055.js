var r = n(387739),
    i = n(283369),
    a = n(728309),
    s = n(561627),
    o = n(410475),
    l = n(116740),
    c = n(505932),
    u = n(976427),
    d = n(797686),
    f = n(728601),
    p = n(59061),
    _ = n(436346),
    h = n(451865),
    m = l.OrderedSet,
    g = {
        replaceText: function (e, t, n, i, a) {
            var s = _(p(e, t), t),
                o = r.create({
                    style: i || m(),
                    entity: a || null,
                });
            return u(s, s.getSelectionAfter(), n, o);
        },
        insertText: function (e, t, n, r, i) {
            return t.isCollapsed() || d(!1), g.replaceText(e, t, n, r, i);
        },
        moveText: function (e, t, n) {
            var r = o(e, t),
                i = g.removeRange(e, t, "backward");
            return g.replaceWithFragment(i, n, r);
        },
        replaceWithFragment: function (e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA",
                i = _(p(e, t), t);
            return c(i, i.getSelectionAfter(), n, r);
        },
        removeRange: function (e, t, n) {
            t.getIsBackward() &&
                (t = t.merge({
                    anchorKey: t.getFocusKey(),
                    anchorOffset: t.getFocusOffset(),
                    focusKey: t.getAnchorKey(),
                    focusOffset: t.getAnchorOffset(),
                    isBackward: !1,
                })),
                (r = t.getAnchorKey()),
                (i = t.getFocusKey()),
                (a = e.getBlockForKey(r));
            var r,
                i,
                a,
                o = e.getBlockForKey(i),
                l = t.getStartOffset(),
                c = t.getEndOffset(),
                u = a.getEntityAt(l),
                d = o.getEntityAt(c - 1);
            if (r === i && u && u === d) {
                var f = s(e.getEntityMap(), a, o, t, n);
                return _(e, f);
            }
            return _(p(e, t), t);
        },
        splitBlock: function (e, t) {
            var n = _(p(e, t), t);
            return h(n, n.getSelectionAfter());
        },
        applyInlineStyle: function (e, t, n) {
            return i.add(e, t, n);
        },
        removeInlineStyle: function (e, t, n) {
            return i.remove(e, t, n);
        },
        setBlockType: function (e, t, n) {
            return f(e, t, function (e) {
                return e.merge({
                    type: n,
                    depth: 0,
                });
            });
        },
        setBlockData: function (e, t, n) {
            return f(e, t, function (e) {
                return e.merge({ data: n });
            });
        },
        mergeBlockData: function (e, t, n) {
            return f(e, t, function (e) {
                return e.merge({ data: e.getData().merge(n) });
            });
        },
        applyEntity: function (e, t, n) {
            return a(p(e, t), t, n);
        },
    };
e.exports = g;
