n.d(t, {
    C0: () => E,
    Ew: () => O,
    Jz: () => b,
    LC: () => g,
    M8: () => y,
    aj: () => h,
    bN: () => p,
    lP: () => T,
    q: () => m
}),
    n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(327432),
    o = n(650557),
    s = n(339227),
    l = n(42530);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(789952);
let _ = !1;
{
    let e = o.F3.findDocumentOrShadowRoot;
    (o.F3.findDocumentOrShadowRoot = (t) => {
        var n, r;
        return null != (r = null == (n = t.windowContext) ? void 0 : n.renderWindow.document) ? r : e(t);
    }),
        (_ = !0);
}
let p = f(u({}, a.ML, o.F3), {
        richValue: (e) => e.children,
        blocks: (e) => p.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => m.isElement(t) && a.ML.isBlock(e, t),
        isInline: (e, t) => m.isElement(t) && a.ML.isInline(e, t),
        isVoid: (e, t) => m.isElement(t) && a.ML.isVoid(e, t),
        isEditorEmpty(e) {
            let t = p.richValue(e);
            return !(t.length > 1) && (0 === t.length || ('line' === t[0].type && m.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = p.node(e, l.u9);
            return g.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? y.toPoint(e.selection) : null;
            return null == t ? null : p.node(e, t.path);
        },
        getParentBlock(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (t) => m.isElement(t) && p.isBlock(e, t),
                    mode: 'lowest'
                }))
                ? n
                : null;
        },
        getParentElement(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (e) => m.isElement(e),
                    mode: 'lowest'
                }))
                ? n
                : null;
        },
        getParentInline(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (t) => p.isInline(e, t),
                    mode: 'lowest'
                }))
                ? n
                : null;
        },
        getParentVoid(e, t) {
            var n;
            return null !=
                (n = p.above(e, {
                    at: t,
                    match: (t) => p.isVoid(e, t),
                    mode: 'lowest'
                }))
                ? n
                : null;
        },
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (y.isExpanded(e.selection)) {
                let [n, r] = y.edges(e.selection),
                    i = p.after(e, n, { unit: 'offset' }),
                    a = p.before(e, r, { unit: 'offset' });
                if (null == i || null == a || !b.equals(i, a)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : p.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = o.F3.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let r = t.getRangeAt(0);
                    null != r &&
                        (n = o.F3.toSlateRange(e, r, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }));
                }
            } else n = e.selection;
            return null == n ? '' : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, r] = y.edges(t),
                i = p.nodes(e, {
                    at: t,
                    mode: 'lowest',
                    match: (e) => g.isText(e)
                }),
                a = '';
            for (let [e, t] of i) {
                let i = E.equals(t, n.path) ? n.offset : 0,
                    o = E.equals(t, r.path) ? r.offset : 0;
                a += e.text.substring(i, o);
            }
            return a;
        },
        withoutNormalizing(e, t) {
            let n = p.isNormalizing(e);
            p.setNormalizing(e, !1);
            try {
                t();
            } finally {
                p.setNormalizing(e, n);
            }
            !1 !== n && p.normalize(e);
        },
        areStylesDisabled(e) {
            var t;
            if (!e.previewMarkdown) return !0;
            let n = p.richValue(e),
                r = n[0],
                i = (null == r ? void 0 : r.type) === 'line' ? r.children[0] : null;
            if (null == i || !g.isText(i)) return !1;
            let a = e.chatInputType,
                o = i.text;
            return 1 === n.length && 1 === r.children.length && ((!0 === a.sedReplace && o.startsWith('s/')) || ((null == (t = a.autocomplete) ? void 0 : t.reactions) === !0 && o.startsWith('+')));
        },
        focus(e) {
            o.F3.isFocused(e) || (o.F3.focus(e), o.F3.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null
                };
            if (E.isPath(t)) {
                let n = p.range(e, t),
                    [r] = p.node(e, t);
                if (m.isElement(r)) {
                    let r = p.before(e, t),
                        i = p.after(e, t);
                    t = {
                        anchor: null != r ? r : n.anchor,
                        focus: null != i ? i : n.focus
                    };
                } else t = n;
            }
            let [n, r] = y.edges(t),
                i = null,
                a = null;
            return (
                b.equals(e.selection.anchor, n) ? (i = 'start') : b.equals(e.selection.anchor, r) ? (i = 'end') : y.includes(t, e.selection.anchor) && (i = 'inside'),
                b.equals(e.selection.focus, n) ? (a = 'start') : b.equals(e.selection.focus, r) ? (a = 'end') : y.includes(t, e.selection.focus) && (a = 'inside'),
                {
                    anchor: i,
                    focus: a
                }
            );
        }
    }),
    h = f(u({}, a.NB), {
        isType: (e, t) => a.W_.isElement(e) && e.type === t,
        isInTypes: (e, t) => a.W_.isElement(e) && t.has(e.type)
    }),
    m = f(u({}, a.W_), {
        updateElement(e, t) {
            let n = p.node(e, t[1]);
            return i()(!p.isEditor(t[0]), 'Element is the root node'), i()(null != n, 'Failed to find element'), i()(m.isElement(n[0]), 'Node at this path is no longer an element'), i()(n[0].type === t[0].type, 'Node at this path is a different type'), n;
        },
        markdown(e, t, n) {
            var r;
            let i = 'line' === e.type && (null == (r = e.codeBlockState) ? void 0 : r.wasInCodeBlock) === !0,
                a = e.children.map((e) => (g.isText(e) ? e.text : '?')),
                o = a.join('');
            return {
                entries: s.Q(o, null != t ? t : null, i, n),
                serializedChildren: a
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return g.isText(t) && 0 === t.text.length;
        }
    }),
    g = u({}, a.xv),
    E = f(u({}, a.y$), {
        isFirstEditorBlock: (e) => E.equals(e, l.YD),
        isFirstEditorText: (e) => E.equals(e, l.u9),
        isFirstChild: (e, t) => E.equals(t, E.child(e, 0)),
        child: (e, t) => [...e, t]
    }),
    b = f(u({}, a.E9), {
        start(e) {
            let [, t] = e;
            return {
                path: E.child(t, 0),
                offset: 0
            };
        },
        end(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                path: E.child(n, t.children.length - 1),
                offset: g.isText(r) ? r.text.length : 0
            };
        },
        isAtStart(e, t) {
            return b.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return b.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, r] = y.edges(t);
            return b.isBefore(e, n) && (e = n), b.isAfter(e, r) && (e = r), e;
        }
    }),
    y = f(u({}, a.e6), {
        toPoint: (e) => (null == e || y.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                r = t.children[t.children.length - 1];
            return {
                anchor: {
                    path: E.child(n, 0),
                    offset: 0
                },
                focus: {
                    path: E.child(n, t.children.length - 1),
                    offset: g.isText(r) ? r.text.length : 0
                }
            };
        },
        clamp(e, t) {
            let [n, r] = y.edges(e),
                [i, a] = y.edges(t);
            return (b.isBefore(n, i) && (n = i), b.isAfter(r, a) && (r = a), y.isForward(e))
                ? {
                      anchor: n,
                      focus: r
                  }
                : {
                      anchor: r,
                      focus: n
                  };
        }
    }),
    O = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && y.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!p.hasPath(e, n.path) || !p.hasPath(e, r.path)) return !1;
            let [i] = p.node(e, n.path),
                [a] = p.node(e, r.path);
            return g.isText(i) && g.isText(a) && n.offset <= i.text.length && r.offset <= a.text.length;
        }
    },
    v = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    I = (e, t, n) => {
        let r = p.toDOMRange(e, t).getBoundingClientRect(),
            i = p.toDOMRange(e, n).getBoundingClientRect();
        return v(r, i) && v(i, r);
    },
    S = (e, t, n, r) => {
        let i = {
                anchor: t,
                focus: t
            },
            a = 0,
            o = n.length,
            s = Math.floor((a + o) / 2);
        for (; s !== a; )
            if (
                (I(
                    e,
                    {
                        anchor: n[s],
                        focus: n[s]
                    },
                    i
                )
                    ? r
                        ? (o = s)
                        : (a = s)
                    : r
                      ? (a = s)
                      : (o = s),
                (s = Math.floor((a + o) / 2)),
                !r && s === n.length - 2 && o === n.length - 1)
            ) {
                let t = n[n.length - 1];
                I(
                    e,
                    {
                        anchor: t,
                        focus: t
                    },
                    i
                ) && (s = o);
            }
        return n[s];
    },
    T = {
        getLineStart(e, t, n) {
            let r,
                i = p.getParentElement(e, t);
            if (null == i) return null;
            let a = p.previous(e, {
                at: t,
                match: (t) => p.isInline(e, t) && !p.isVoid(e, t) && t !== i[0]
            });
            null != a && (r = p.after(e, a[1])), null == r && (r = p.start(e, i[1]));
            let o = {
                    anchor: r,
                    focus: t
                },
                s = Array.from(p.positions(e, { at: o })),
                l = S(e, t, s, !0);
            if (n && b.equals(t, l) && !b.isAtEnd(t, i)) {
                let n = p.after(e, t);
                if (null == n) return l;
                l = S(e, n, s, !0);
            }
            return l;
        },
        getLineEnd(e, t, n) {
            let r,
                i = p.getParentElement(e, t);
            if (null == i) return null;
            let a = p.next(e, {
                at: t,
                match: (t) => p.isInline(e, t) && !p.isVoid(e, t) && t !== i[0]
            });
            null != a && (r = p.before(e, a[1])), null == r && (r = p.end(e, i[1]));
            let o = {
                    anchor: t,
                    focus: r
                },
                s = Array.from(p.positions(e, { at: o })),
                l = S(e, t, s, !1);
            if (n && b.equals(t, l) && !b.isAtEnd(t, i)) {
                let n = p.after(e, t);
                if (null == n) return l;
                l = S(e, n, s, !1);
            }
            return l;
        },
        getLineActionRange(e, t) {
            let n = y.toPoint(e.selection);
            if (null == n) return null;
            if (t) {
                let t = T.getLineStart(e, n, !1);
                return null == t
                    ? null
                    : {
                          anchor: t,
                          focus: n
                      };
            }
            {
                let t = T.getLineEnd(e, n, !0);
                return null == t
                    ? null
                    : {
                          anchor: n,
                          focus: t
                      };
            }
        }
    };
