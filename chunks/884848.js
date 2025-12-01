var r = n(126182),
    i = n(309987),
    a = n(65183),
    o = n(357415),
    s = n(581079),
    l = n(282459),
    c = a.List,
    u = function (e, t, n, r, i, a) {
        var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
            l = n.get(i),
            c = l.getText(),
            u = l.getCharacterList(),
            d = i,
            f = a + r.getText().length,
            p = null;
        switch (s) {
            case "MERGE_OLD_DATA_TO_NEW_DATA":
                p = r.getData().merge(l.getData());
                break;
            case "REPLACE_WITH_NEW_DATA":
                p = r.getData();
        }
        var _ = l.merge({
            text: c.slice(0, a) + r.getText() + c.slice(a),
            characterList: o(u, r.getCharacterList(), a),
            data: p,
        });
        return e.merge({
            blockMap: n.set(i, _),
            selectionBefore: t,
            selectionAfter: t.merge({
                anchorKey: d,
                anchorOffset: f,
                focusKey: d,
                focusOffset: f,
                isBackward: !1,
            }),
        });
    },
    d = function (e, t, n) {
        var r = e.getText(),
            i = e.getCharacterList(),
            a = r.slice(0, t),
            o = i.slice(0, t),
            s = n.first();
        return e.merge({
            text: a + s.getText(),
            characterList: o.concat(s.getCharacterList()),
            type: a ? e.getType() : s.getType(),
            data: s.getData(),
        });
    },
    f = function (e, t, n) {
        var r = e.getText(),
            i = e.getCharacterList(),
            a = r.length,
            o = r.slice(t, a),
            s = i.slice(t, a),
            l = n.last();
        return l.merge({
            text: l.getText() + o,
            characterList: l.getCharacterList().concat(s),
            data: l.getData(),
        });
    },
    p = function (e, t) {
        var n = e.getKey(),
            r = e,
            i = [];
        for (t.get(n) && i.push(n); r && r.getNextSiblingKey(); ) {
            var a = r.getNextSiblingKey();
            if (!a) break;
            i.push(a), (r = t.get(a));
        }
        return i;
    },
    _ = function (e, t, n, r) {
        return e.withMutations(function (t) {
            var i = n.getKey(),
                a = r.getKey(),
                o = n.getNextSiblingKey(),
                s = n.getParentKey(),
                l = p(r, e),
                u = l[l.length - 1];
            if (
                (t.get(a)
                    ? (t.setIn([i, "nextSibling"], a), t.setIn([a, "prevSibling"], i))
                    : (t.setIn([i, "nextSibling"], r.getNextSiblingKey()),
                      t.setIn([r.getNextSiblingKey(), "prevSibling"], i)),
                t.setIn([u, "nextSibling"], o),
                o && t.setIn([o, "prevSibling"], u),
                l.forEach(function (e) {
                    return t.setIn([e, "parent"], s);
                }),
                s)
            ) {
                var d = e.get(s).getChildKeys(),
                    f = d.indexOf(i) + 1,
                    _ = d.toArray();
                _.splice.apply(_, [f, 0].concat(l)), t.setIn([s, "children"], c(_));
            }
        });
    },
    m = function (e, t, n, a, o, s) {
        var l = n.first() instanceof i,
            c = [],
            u = a.size,
            p = n.get(o),
            m = a.first(),
            h = a.last(),
            g = h.getLength(),
            E = h.getKey(),
            b = l && (!p.getChildKeys().isEmpty() || !m.getChildKeys().isEmpty());
        n.forEach(function (e, t) {
            if (t !== o) return void c.push(e);
            b ? c.push(e) : c.push(d(e, s, a)),
                a.slice(+!b, u - 1).forEach(function (e) {
                    return c.push(e);
                }),
                c.push(f(e, s, a));
        });
        var y = r.createFromArray(c);
        return (
            l && (y = _(y, n, p, m)),
            e.merge({
                blockMap: y,
                selectionBefore: t,
                selectionAfter: t.merge({
                    anchorKey: E,
                    anchorOffset: g,
                    focusKey: E,
                    focusOffset: g,
                    isBackward: !1,
                }),
            })
        );
    };
e.exports = function (e, t, n) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA";
    t.isCollapsed() || s(!1);
    var a = e.getBlockMap(),
        o = l(n),
        c = t.getStartKey(),
        d = t.getStartOffset(),
        f = a.get(c);
    return (f instanceof i && (f.getChildKeys().isEmpty() || s(!1)), 1 === o.size)
        ? u(e, t, a, o.first(), c, d, r)
        : m(e, t, a, o, c, d);
};
