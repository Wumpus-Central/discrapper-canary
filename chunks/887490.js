n.d(t, {
    C0: () => p,
    Ew: () => g,
    Jz: () => h,
    LC: () => _,
    M8: () => m,
    aj: () => d,
    bN: () => c,
    lP: () => I,
    q: () => f
}),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(327432),
    s = n(270445),
    o = n(339227),
    l = n(42530);
n(789952);
let u = !1;
{
    let e = s.F3.findDocumentOrShadowRoot;
    (s.F3.findDocumentOrShadowRoot = (t) => {
        var n, i;
        return null !== (i = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== i ? i : e(t);
    }),
        (u = !0);
}
let c = {
        ...a.ML,
        ...s.F3,
        richValue: (e) => e.children,
        blocks: (e) => c.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => f.isElement(t) && a.ML.isBlock(e, t),
        isInline: (e, t) => f.isElement(t) && a.ML.isInline(e, t),
        isVoid: (e, t) => f.isElement(t) && a.ML.isVoid(e, t),
        isEditorEmpty(e) {
            let t = c.richValue(e);
            return !(t.length > 1) && (0 === t.length || ('line' === t[0].type && f.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = c.node(e, l.u9);
            return _.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? m.toPoint(e.selection) : null;
            return null == t ? null : c.node(e, t.path);
        },
        getParentBlock(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (t) => f.isElement(t) && c.isBlock(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentElement(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (e) => f.isElement(e),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentInline(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (t) => c.isInline(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentVoid(e, t) {
            var n;
            return null !==
                (n = c.above(e, {
                    at: t,
                    match: (t) => c.isVoid(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (m.isExpanded(e.selection)) {
                let [n, i] = m.edges(e.selection),
                    r = c.after(e, n, { unit: 'offset' }),
                    a = c.before(e, i, { unit: 'offset' });
                if (null == r || null == a || !h.equals(r, a)) return null;
                t = r;
            } else t = e.selection.anchor;
            return null == t ? null : c.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = s.F3.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let i = t.getRangeAt(0);
                    null != i &&
                        (n = s.F3.toSlateRange(e, i, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }));
                }
            } else n = e.selection;
            return null == n ? '' : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, i] = m.edges(t),
                r = c.nodes(e, {
                    at: t,
                    mode: 'lowest',
                    match: (e) => _.isText(e)
                }),
                a = '';
            for (let [e, t] of r) {
                let r = p.equals(t, n.path) ? n.offset : 0,
                    s = p.equals(t, i.path) ? i.offset : 0;
                a += e.text.substring(r, s);
            }
            return a;
        },
        withoutNormalizing(e, t) {
            let n = c.isNormalizing(e);
            c.setNormalizing(e, !1);
            try {
                t();
            } finally {
                c.setNormalizing(e, n);
            }
            !1 !== n && c.normalize(e);
        },
        areStylesDisabled(e) {
            var t;
            if (!e.previewMarkdown) return !0;
            let n = c.richValue(e),
                i = n[0],
                r = (null == i ? void 0 : i.type) === 'line' ? i.children[0] : null;
            if (null == r || !_.isText(r)) return !1;
            let a = e.chatInputType,
                s = r.text;
            return 1 === n.length && 1 === i.children.length && ((!0 === a.sedReplace && s.startsWith('s/')) || ((null === (t = a.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && s.startsWith('+')));
        },
        focus(e) {
            s.F3.isFocused(e) || (s.F3.focus(e), s.F3.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null
                };
            if (p.isPath(t)) {
                let n = c.range(e, t),
                    [i] = c.node(e, t);
                if (f.isElement(i)) {
                    let i = c.before(e, t),
                        r = c.after(e, t);
                    t = {
                        anchor: null != i ? i : n.anchor,
                        focus: null != r ? r : n.focus
                    };
                } else t = n;
            }
            let [n, i] = m.edges(t),
                r = null,
                a = null;
            return (
                h.equals(e.selection.anchor, n) ? (r = 'start') : h.equals(e.selection.anchor, i) ? (r = 'end') : m.includes(t, e.selection.anchor) && (r = 'inside'),
                h.equals(e.selection.focus, n) ? (a = 'start') : h.equals(e.selection.focus, i) ? (a = 'end') : m.includes(t, e.selection.focus) && (a = 'inside'),
                {
                    anchor: r,
                    focus: a
                }
            );
        }
    },
    d = {
        ...a.NB,
        isType: (e, t) => a.W_.isElement(e) && e.type === t,
        isInTypes: (e, t) => a.W_.isElement(e) && t.has(e.type)
    },
    f = {
        ...a.W_,
        updateElement(e, t) {
            let n = c.node(e, t[1]);
            return r()(!c.isEditor(t[0]), 'Element is the root node'), r()(null != n, 'Failed to find element'), r()(f.isElement(n[0]), 'Node at this path is no longer an element'), r()(n[0].type === t[0].type, 'Node at this path is a different type'), n;
        },
        markdown(e, t, n) {
            var i;
            let r = 'line' === e.type && (null === (i = e.codeBlockState) || void 0 === i ? void 0 : i.wasInCodeBlock) === !0,
                a = e.children.map((e) => (_.isText(e) ? e.text : '?')),
                s = a.join('');
            return {
                entries: o.Q(s, null != t ? t : null, r, n),
                serializedChildren: a
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return _.isText(t) && 0 === t.text.length;
        }
    },
    _ = { ...a.xv },
    p = {
        ...a.y$,
        isFirstEditorBlock: (e) => p.equals(e, l.YD),
        isFirstEditorText: (e) => p.equals(e, l.u9),
        isFirstChild: (e, t) => p.equals(t, p.child(e, 0)),
        child: (e, t) => [...e, t]
    },
    h = {
        ...a.E9,
        start(e) {
            let [, t] = e;
            return {
                path: p.child(t, 0),
                offset: 0
            };
        },
        end(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                path: p.child(n, t.children.length - 1),
                offset: _.isText(i) ? i.text.length : 0
            };
        },
        isAtStart(e, t) {
            return h.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return h.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, i] = m.edges(t);
            return h.isBefore(e, n) && (e = n), h.isAfter(e, i) && (e = i), e;
        }
    },
    m = {
        ...a.e6,
        toPoint: (e) => (null == e || m.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                anchor: {
                    path: p.child(n, 0),
                    offset: 0
                },
                focus: {
                    path: p.child(n, t.children.length - 1),
                    offset: _.isText(i) ? i.text.length : 0
                }
            };
        },
        clamp(e, t) {
            let [n, i] = m.edges(e),
                [r, a] = m.edges(t);
            return (h.isBefore(n, r) && (n = r), h.isAfter(i, a) && (i = a), m.isForward(e))
                ? {
                      anchor: n,
                      focus: i
                  }
                : {
                      anchor: i,
                      focus: n
                  };
        }
    },
    g = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && m.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: i } = t;
            if (!c.hasPath(e, n.path) || !c.hasPath(e, i.path)) return !1;
            let [r] = c.node(e, n.path),
                [a] = c.node(e, i.path);
            return _.isText(r) && _.isText(a) && n.offset <= r.text.length && i.offset <= a.text.length;
        }
    },
    E = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    v = (e, t, n) => {
        let i = c.toDOMRange(e, t).getBoundingClientRect(),
            r = c.toDOMRange(e, n).getBoundingClientRect();
        return E(i, r) && E(r, i);
    },
    y = (e, t, n, i) => {
        let r = {
                anchor: t,
                focus: t
            },
            a = 0,
            s = n.length,
            o = Math.floor((a + s) / 2);
        for (; o !== a; )
            if (
                (v(
                    e,
                    {
                        anchor: n[o],
                        focus: n[o]
                    },
                    r
                )
                    ? i
                        ? (s = o)
                        : (a = o)
                    : i
                      ? (a = o)
                      : (s = o),
                (o = Math.floor((a + s) / 2)),
                !i && o === n.length - 2 && s === n.length - 1)
            ) {
                let t = n[n.length - 1];
                v(
                    e,
                    {
                        anchor: t,
                        focus: t
                    },
                    r
                ) && (o = s);
            }
        return n[o];
    },
    I = {
        getLineStart(e, t, n) {
            let i;
            let r = c.getParentElement(e, t);
            if (null == r) return null;
            let a = c.previous(e, {
                at: t,
                match: (t) => c.isInline(e, t) && !c.isVoid(e, t) && t !== r[0]
            });
            null != a && (i = c.after(e, a[1])), null == i && (i = c.start(e, r[1]));
            let s = {
                    anchor: i,
                    focus: t
                },
                o = Array.from(c.positions(e, { at: s })),
                l = y(e, t, o, !0);
            if (n && h.equals(t, l) && !h.isAtEnd(t, r)) {
                let n = c.after(e, t);
                if (null == n) return l;
                l = y(e, n, o, !0);
            }
            return l;
        },
        getLineEnd(e, t, n) {
            let i;
            let r = c.getParentElement(e, t);
            if (null == r) return null;
            let a = c.next(e, {
                at: t,
                match: (t) => c.isInline(e, t) && !c.isVoid(e, t) && t !== r[0]
            });
            null != a && (i = c.before(e, a[1])), null == i && (i = c.end(e, r[1]));
            let s = {
                    anchor: t,
                    focus: i
                },
                o = Array.from(c.positions(e, { at: s })),
                l = y(e, t, o, !1);
            if (n && h.equals(t, l) && !h.isAtEnd(t, r)) {
                let n = c.after(e, t);
                if (null == n) return l;
                l = y(e, n, o, !1);
            }
            return l;
        },
        getLineActionRange(e, t) {
            let n = m.toPoint(e.selection);
            if (null == n) return null;
            if (t) {
                let t = I.getLineStart(e, n, !1);
                return null == t
                    ? null
                    : {
                          anchor: t,
                          focus: n
                      };
            }
            {
                let t = I.getLineEnd(e, n, !0);
                return null == t
                    ? null
                    : {
                          anchor: n,
                          focus: t
                      };
            }
        }
    };
