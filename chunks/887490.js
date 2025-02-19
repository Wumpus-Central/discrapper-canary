n.d(t, {
    C0: () => E,
    Ew: () => y,
    Jz: () => v,
    LC: () => g,
    M8: () => b,
    aj: () => h,
    bN: () => _,
    lP: () => T,
    q: () => m
}),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(327432),
    a = n(270445),
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
let p = !1;
{
    let e = a.F3.findDocumentOrShadowRoot;
    (a.F3.findDocumentOrShadowRoot = (t) => {
        var n, r;
        return null !== (r = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== r ? r : e(t);
    }),
        (p = !0);
}
let _ = f(u({}, o.ML, a.F3), {
        richValue: (e) => e.children,
        blocks: (e) => _.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => m.isElement(t) && o.ML.isBlock(e, t),
        isInline: (e, t) => m.isElement(t) && o.ML.isInline(e, t),
        isVoid: (e, t) => m.isElement(t) && o.ML.isVoid(e, t),
        isEditorEmpty(e) {
            let t = _.richValue(e);
            return !(t.length > 1) && (0 === t.length || ('line' === t[0].type && m.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = _.node(e, l.u9);
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
            let t = null != e.selection ? b.toPoint(e.selection) : null;
            return null == t ? null : _.node(e, t.path);
        },
        getParentBlock(e, t) {
            var n;
            return null !==
                (n = _.above(e, {
                    at: t,
                    match: (t) => m.isElement(t) && _.isBlock(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentElement(e, t) {
            var n;
            return null !==
                (n = _.above(e, {
                    at: t,
                    match: (e) => m.isElement(e),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentInline(e, t) {
            var n;
            return null !==
                (n = _.above(e, {
                    at: t,
                    match: (t) => _.isInline(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getParentVoid(e, t) {
            var n;
            return null !==
                (n = _.above(e, {
                    at: t,
                    match: (t) => _.isVoid(e, t),
                    mode: 'lowest'
                })) && void 0 !== n
                ? n
                : null;
        },
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (b.isExpanded(e.selection)) {
                let [n, r] = b.edges(e.selection),
                    i = _.after(e, n, { unit: 'offset' }),
                    o = _.before(e, r, { unit: 'offset' });
                if (null == i || null == o || !v.equals(i, o)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : _.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = a.F3.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let r = t.getRangeAt(0);
                    null != r &&
                        (n = a.F3.toSlateRange(e, r, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }));
                }
            } else n = e.selection;
            return null == n ? '' : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, r] = b.edges(t),
                i = _.nodes(e, {
                    at: t,
                    mode: 'lowest',
                    match: (e) => g.isText(e)
                }),
                o = '';
            for (let [e, t] of i) {
                let i = E.equals(t, n.path) ? n.offset : 0,
                    a = E.equals(t, r.path) ? r.offset : 0;
                o += e.text.substring(i, a);
            }
            return o;
        },
        withoutNormalizing(e, t) {
            let n = _.isNormalizing(e);
            _.setNormalizing(e, !1);
            try {
                t();
            } finally {
                _.setNormalizing(e, n);
            }
            !1 !== n && _.normalize(e);
        },
        areStylesDisabled(e) {
            var t;
            if (!e.previewMarkdown) return !0;
            let n = _.richValue(e),
                r = n[0],
                i = (null == r ? void 0 : r.type) === 'line' ? r.children[0] : null;
            if (null == i || !g.isText(i)) return !1;
            let o = e.chatInputType,
                a = i.text;
            return 1 === n.length && 1 === r.children.length && ((!0 === o.sedReplace && a.startsWith('s/')) || ((null === (t = o.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && a.startsWith('+')));
        },
        focus(e) {
            a.F3.isFocused(e) || (a.F3.focus(e), a.F3.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection)
                return {
                    anchor: null,
                    focus: null
                };
            if (E.isPath(t)) {
                let n = _.range(e, t),
                    [r] = _.node(e, t);
                if (m.isElement(r)) {
                    let r = _.before(e, t),
                        i = _.after(e, t);
                    t = {
                        anchor: null != r ? r : n.anchor,
                        focus: null != i ? i : n.focus
                    };
                } else t = n;
            }
            let [n, r] = b.edges(t),
                i = null,
                o = null;
            return (
                v.equals(e.selection.anchor, n) ? (i = 'start') : v.equals(e.selection.anchor, r) ? (i = 'end') : b.includes(t, e.selection.anchor) && (i = 'inside'),
                v.equals(e.selection.focus, n) ? (o = 'start') : v.equals(e.selection.focus, r) ? (o = 'end') : b.includes(t, e.selection.focus) && (o = 'inside'),
                {
                    anchor: i,
                    focus: o
                }
            );
        }
    }),
    h = f(u({}, o.NB), {
        isType: (e, t) => o.W_.isElement(e) && e.type === t,
        isInTypes: (e, t) => o.W_.isElement(e) && t.has(e.type)
    }),
    m = f(u({}, o.W_), {
        updateElement(e, t) {
            let n = _.node(e, t[1]);
            return i()(!_.isEditor(t[0]), 'Element is the root node'), i()(null != n, 'Failed to find element'), i()(m.isElement(n[0]), 'Node at this path is no longer an element'), i()(n[0].type === t[0].type, 'Node at this path is a different type'), n;
        },
        markdown(e, t, n) {
            var r;
            let i = 'line' === e.type && (null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.wasInCodeBlock) === !0,
                o = e.children.map((e) => (g.isText(e) ? e.text : '?')),
                a = o.join('');
            return {
                entries: s.Q(a, null != t ? t : null, i, n),
                serializedChildren: o
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return g.isText(t) && 0 === t.text.length;
        }
    }),
    g = u({}, o.xv),
    E = f(u({}, o.y$), {
        isFirstEditorBlock: (e) => E.equals(e, l.YD),
        isFirstEditorText: (e) => E.equals(e, l.u9),
        isFirstChild: (e, t) => E.equals(t, E.child(e, 0)),
        child: (e, t) => [...e, t]
    }),
    v = f(u({}, o.E9), {
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
            return v.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return v.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, r] = b.edges(t);
            return v.isBefore(e, n) && (e = n), v.isAfter(e, r) && (e = r), e;
        }
    }),
    b = f(u({}, o.e6), {
        toPoint: (e) => (null == e || b.isExpanded(e) ? null : e.anchor),
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
            let [n, r] = b.edges(e),
                [i, o] = b.edges(t);
            return (v.isBefore(n, i) && (n = i), v.isAfter(r, o) && (r = o), b.isForward(e))
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
    y = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && b.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: r } = t;
            if (!_.hasPath(e, n.path) || !_.hasPath(e, r.path)) return !1;
            let [i] = _.node(e, n.path),
                [o] = _.node(e, r.path);
            return g.isText(i) && g.isText(o) && n.offset <= i.text.length && r.offset <= o.text.length;
        }
    },
    O = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    S = (e, t, n) => {
        let r = _.toDOMRange(e, t).getBoundingClientRect(),
            i = _.toDOMRange(e, n).getBoundingClientRect();
        return O(r, i) && O(i, r);
    },
    I = (e, t, n, r) => {
        let i = {
                anchor: t,
                focus: t
            },
            o = 0,
            a = n.length,
            s = Math.floor((o + a) / 2);
        for (; s !== o; )
            if (
                (S(
                    e,
                    {
                        anchor: n[s],
                        focus: n[s]
                    },
                    i
                )
                    ? r
                        ? (a = s)
                        : (o = s)
                    : r
                      ? (o = s)
                      : (a = s),
                (s = Math.floor((o + a) / 2)),
                !r && s === n.length - 2 && a === n.length - 1)
            ) {
                let t = n[n.length - 1];
                S(
                    e,
                    {
                        anchor: t,
                        focus: t
                    },
                    i
                ) && (s = a);
            }
        return n[s];
    },
    T = {
        getLineStart(e, t, n) {
            let r;
            let i = _.getParentElement(e, t);
            if (null == i) return null;
            let o = _.previous(e, {
                at: t,
                match: (t) => _.isInline(e, t) && !_.isVoid(e, t) && t !== i[0]
            });
            null != o && (r = _.after(e, o[1])), null == r && (r = _.start(e, i[1]));
            let a = {
                    anchor: r,
                    focus: t
                },
                s = Array.from(_.positions(e, { at: a })),
                l = I(e, t, s, !0);
            if (n && v.equals(t, l) && !v.isAtEnd(t, i)) {
                let n = _.after(e, t);
                if (null == n) return l;
                l = I(e, n, s, !0);
            }
            return l;
        },
        getLineEnd(e, t, n) {
            let r;
            let i = _.getParentElement(e, t);
            if (null == i) return null;
            let o = _.next(e, {
                at: t,
                match: (t) => _.isInline(e, t) && !_.isVoid(e, t) && t !== i[0]
            });
            null != o && (r = _.before(e, o[1])), null == r && (r = _.end(e, i[1]));
            let a = {
                    anchor: t,
                    focus: r
                },
                s = Array.from(_.positions(e, { at: a })),
                l = I(e, t, s, !1);
            if (n && v.equals(t, l) && !v.isAtEnd(t, i)) {
                let n = _.after(e, t);
                if (null == n) return l;
                l = I(e, n, s, !1);
            }
            return l;
        },
        getLineActionRange(e, t) {
            let n = b.toPoint(e.selection);
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
