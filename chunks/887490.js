r.d(n, {
    C0: function () {
        return m;
    },
    Ew: function () {
        return v;
    },
    Jz: function () {
        return g;
    },
    LC: function () {
        return _;
    },
    M8: function () {
        return E;
    },
    aj: function () {
        return p;
    },
    bN: function () {
        return f;
    },
    lP: function () {
        return T;
    },
    q: function () {
        return h;
    }
});
var i = r(47120);
var a = r(512722),
    o = r.n(a),
    s = r(327432),
    l = r(270445),
    u = r(339227),
    c = r(42530);
r(789952);
let d = !1;
{
    let e = l.F3.findDocumentOrShadowRoot;
    (l.F3.findDocumentOrShadowRoot = (n) => {
        var r, i;
        return null !== (i = null === (r = n.windowContext) || void 0 === r ? void 0 : r.renderWindow.document) && void 0 !== i ? i : e(n);
    }),
        (d = !0);
}
let f = {
        ...s.ML,
        ...l.F3,
        richValue: (e) => e.children,
        blocks: (e) => f.richValue(e).map((e, n) => [e, [n]]),
        isBlock: (e, n) => h.isElement(n) && s.ML.isBlock(e, n),
        isInline: (e, n) => h.isElement(n) && s.ML.isInline(e, n),
        isVoid: (e, n) => h.isElement(n) && s.ML.isVoid(e, n),
        isEditorEmpty(e) {
            let n = f.richValue(e);
            return !(n.length > 1) && (0 === n.length || ('line' === n[0].type && h.isEmpty(n[0])));
        },
        getFirstText(e) {
            let n = f.node(e, c.u9);
            return _.isText(n[0]) ? n[0] : null;
        },
        getCurrentBlock(e) {
            return null == e.selection ? null : this.getParentBlock(e, e.selection);
        },
        getCurrentElement(e) {
            return null == e.selection ? null : this.getParentElement(e, e.selection);
        },
        getCurrentInline(e) {
            return null == e.selection ? null : this.getParentInline(e, e.selection);
        },
        getCurrentVoid(e) {
            return null == e.selection ? null : this.getParentVoid(e, e.selection);
        },
        getCurrentText(e) {
            let n = null != e.selection ? E.toPoint(e.selection) : null;
            return null == n ? null : f.node(e, n.path);
        },
        getParentBlock(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (n) => h.isElement(n) && f.isBlock(e, n),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getParentElement(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (e) => h.isElement(e),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getParentInline(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (n) => f.isInline(e, n),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getParentVoid(e, n) {
            var r;
            return null !==
                (r = f.above(e, {
                    at: n,
                    match: (n) => f.isVoid(e, n),
                    mode: 'lowest'
                })) && void 0 !== r
                ? r
                : null;
        },
        getSelectedVoid(e) {
            let n;
            if (null == e.selection) return null;
            if (E.isExpanded(e.selection)) {
                let [r, i] = E.edges(e.selection),
                    a = f.after(e, r, { unit: 'offset' }),
                    o = f.before(e, i, { unit: 'offset' });
                if (null == a || null == o || !g.equals(a, o)) return null;
                n = a;
            } else n = e.selection.anchor;
            return null == n ? null : f.getParentVoid(e, n);
        },
        getSelectedText(e, n) {
            let r = null;
            if (n) {
                let n = l.F3.findDocumentOrShadowRoot(e).getSelection();
                if (null != n && n.rangeCount > 0) {
                    let i = n.getRangeAt(0);
                    null != i &&
                        (r = l.F3.toSlateRange(e, i, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }));
                }
            } else r = e.selection;
            return null == r ? '' : this.getTextFromRange(e, r);
        },
        getTextFromRange(e, n) {
            let [r, i] = E.edges(n),
                a = f.nodes(e, {
                    at: n,
                    mode: 'lowest',
                    match: (e) => _.isText(e)
                }),
                o = '';
            for (let [e, n] of a) {
                let a = m.equals(n, r.path) ? r.offset : 0,
                    s = m.equals(n, i.path) ? i.offset : 0;
                o += e.text.substring(a, s);
            }
            return o;
        },
        withoutNormalizing(e, n) {
            let r = f.isNormalizing(e);
            f.setNormalizing(e, !1);
            try {
                n();
            } finally {
                f.setNormalizing(e, r);
            }
            !1 !== r && f.normalize(e);
        },
        areStylesDisabled(e) {
            var n;
            if (!e.previewMarkdown) return !0;
            let r = f.richValue(e),
                i = r[0],
                a = (null == i ? void 0 : i.type) === 'line' ? i.children[0] : null;
            if (null == a || !_.isText(a)) return !1;
            let o = e.chatInputType,
                s = a.text;
            return 1 === r.length && 1 === i.children.length && ((!0 === o.sedReplace && s.startsWith('s/')) || ((null === (n = o.autocomplete) || void 0 === n ? void 0 : n.reactions) === !0 && s.startsWith('+')));
        },
        focus(e) {
            !l.F3.isFocused(e) && (l.F3.focus(e), l.F3.deselect(e));
        },
        getSelectionOverlap(e, n) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null
                };
            if (m.isPath(n)) {
                let r = f.range(e, n),
                    [i] = f.node(e, n);
                if (h.isElement(i)) {
                    let i = f.before(e, n),
                        a = f.after(e, n);
                    n = {
                        anchor: null != i ? i : r.anchor,
                        focus: null != a ? a : r.focus
                    };
                } else n = r;
            }
            let [r, i] = E.edges(n),
                a = null,
                o = null;
            return (
                g.equals(e.selection.anchor, r) ? (a = 'start') : g.equals(e.selection.anchor, i) ? (a = 'end') : E.includes(n, e.selection.anchor) && (a = 'inside'),
                g.equals(e.selection.focus, r) ? (o = 'start') : g.equals(e.selection.focus, i) ? (o = 'end') : E.includes(n, e.selection.focus) && (o = 'inside'),
                {
                    anchor: a,
                    focus: o
                }
            );
        }
    },
    p = {
        ...s.NB,
        isType: (e, n) => s.W_.isElement(e) && e.type === n,
        isInTypes: (e, n) => s.W_.isElement(e) && n.has(e.type)
    },
    h = {
        ...s.W_,
        updateElement(e, n) {
            let r = f.node(e, n[1]);
            return o()(!f.isEditor(n[0]), 'Element is the root node'), o()(null != r, 'Failed to find element'), o()(h.isElement(r[0]), 'Node at this path is no longer an element'), o()(r[0].type === n[0].type, 'Node at this path is a different type'), r;
        },
        markdown(e, n, r) {
            var i;
            let a = 'line' === e.type && (null === (i = e.codeBlockState) || void 0 === i ? void 0 : i.wasInCodeBlock) === !0,
                o = e.children.map((e) => (_.isText(e) ? e.text : '?')),
                s = o.join('');
            return {
                entries: u.Q(s, null != n ? n : null, a, r),
                serializedChildren: o
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let n = e.children[0];
            return _.isText(n) && 0 === n.text.length;
        }
    },
    _ = { ...s.xv },
    m = {
        ...s.y$,
        isFirstEditorBlock: (e) => m.equals(e, c.YD),
        isFirstEditorText: (e) => m.equals(e, c.u9),
        isFirstChild: (e, n) => m.equals(n, m.child(e, 0)),
        child: (e, n) => [...e, n]
    },
    g = {
        ...s.E9,
        start(e) {
            let [, n] = e;
            return {
                path: m.child(n, 0),
                offset: 0
            };
        },
        end(e) {
            let [n, r] = e,
                i = n.children[n.children.length - 1];
            return {
                path: m.child(r, n.children.length - 1),
                offset: _.isText(i) ? i.text.length : 0
            };
        },
        isAtStart(e, n) {
            return g.equals(e, this.start(n));
        },
        isAtEnd(e, n) {
            return g.equals(e, this.end(n));
        },
        clamp(e, n) {
            let [r, i] = E.edges(n);
            return g.isBefore(e, r) && (e = r), g.isAfter(e, i) && (e = i), e;
        }
    },
    E = {
        ...s.e6,
        toPoint: (e) => (null == e || E.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [n, r] = e,
                i = n.children[n.children.length - 1];
            return {
                anchor: {
                    path: m.child(r, 0),
                    offset: 0
                },
                focus: {
                    path: m.child(r, n.children.length - 1),
                    offset: _.isText(i) ? i.text.length : 0
                }
            };
        },
        clamp(e, n) {
            let [r, i] = E.edges(e),
                [a, o] = E.edges(n);
            return (g.isBefore(r, a) && (r = a), g.isAfter(i, o) && (i = o), E.isForward(e))
                ? {
                      anchor: r,
                      focus: i
                  }
                : {
                      anchor: i,
                      focus: r
                  };
        }
    },
    v = {
        equals: (e, n) => (null == e && null == n) || (null != e && null != n && E.equals(e, n)),
        isValid(e, n) {
            if (null == n) return !1;
            let { anchor: r, focus: i } = n;
            if (!f.hasPath(e, r.path) || !f.hasPath(e, i.path)) return !1;
            let [a] = f.node(e, r.path),
                [o] = f.node(e, i.path);
            return _.isText(a) && _.isText(o) && r.offset <= a.text.length && i.offset <= o.text.length;
        }
    },
    y = (e, n) => {
        let r = (n.top + n.bottom) / 2;
        return e.top <= r && e.bottom >= r;
    },
    b = (e, n, r) => {
        let i = f.toDOMRange(e, n).getBoundingClientRect(),
            a = f.toDOMRange(e, r).getBoundingClientRect();
        return y(i, a) && y(a, i);
    },
    I = (e, n, r, i) => {
        let a = {
                anchor: n,
                focus: n
            },
            o = 0,
            s = r.length,
            l = Math.floor((o + s) / 2);
        for (; l !== o; )
            if (
                (b(
                    e,
                    {
                        anchor: r[l],
                        focus: r[l]
                    },
                    a
                )
                    ? i
                        ? (s = l)
                        : (o = l)
                    : i
                      ? (o = l)
                      : (s = l),
                (l = Math.floor((o + s) / 2)),
                !i && l === r.length - 2 && s === r.length - 1)
            ) {
                let n = r[r.length - 1];
                b(
                    e,
                    {
                        anchor: n,
                        focus: n
                    },
                    a
                ) && (l = s);
            }
        return r[l];
    },
    T = {
        getLineStart(e, n, r) {
            let i;
            let a = f.getParentElement(e, n);
            if (null == a) return null;
            let o = f.previous(e, {
                at: n,
                match: (n) => f.isInline(e, n) && !f.isVoid(e, n) && n !== a[0]
            });
            null != o && (i = f.after(e, o[1])), null == i && (i = f.start(e, a[1]));
            let s = {
                    anchor: i,
                    focus: n
                },
                l = Array.from(f.positions(e, { at: s })),
                u = I(e, n, l, !0);
            if (r && g.equals(n, u) && !g.isAtEnd(n, a)) {
                let r = f.after(e, n);
                if (null == r) return u;
                u = I(e, r, l, !0);
            }
            return u;
        },
        getLineEnd(e, n, r) {
            let i;
            let a = f.getParentElement(e, n);
            if (null == a) return null;
            let o = f.next(e, {
                at: n,
                match: (n) => f.isInline(e, n) && !f.isVoid(e, n) && n !== a[0]
            });
            null != o && (i = f.before(e, o[1])), null == i && (i = f.end(e, a[1]));
            let s = {
                    anchor: n,
                    focus: i
                },
                l = Array.from(f.positions(e, { at: s })),
                u = I(e, n, l, !1);
            if (r && g.equals(n, u) && !g.isAtEnd(n, a)) {
                let r = f.after(e, n);
                if (null == r) return u;
                u = I(e, r, l, !1);
            }
            return u;
        },
        getLineActionRange(e, n) {
            let r = E.toPoint(e.selection);
            if (null == r) return null;
            if (n) {
                let n = T.getLineStart(e, r, !1);
                return null == n
                    ? null
                    : {
                          anchor: n,
                          focus: r
                      };
            }
            {
                let n = T.getLineEnd(e, r, !0);
                return null == n
                    ? null
                    : {
                          anchor: r,
                          focus: n
                      };
            }
        }
    };
