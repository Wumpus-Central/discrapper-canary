n.d(t, {
    I: () => E,
    Z: () => b
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(650557),
    l = n(481060),
    c = n(40851),
    u = n(314910),
    d = n(5967),
    f = n(53529),
    _ = n(50659),
    p = n(436660),
    h = n(887490),
    m = n(447525),
    g = n(763169);
function E(e) {
    var t;
    let { editorRef: n, options: i, iconClassName: a, dividerClassName: s } = e,
        c = null == (t = n.current) ? void 0 : t.getSlateEditor();
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: g.buttons,
              children: [
                  (0, r.jsx)(y, {
                      slateEditor: c,
                      markdownSyntax: 'bold',
                      children: (0, r.jsx)(l.mY4, {
                          size: 'md',
                          color: 'currentColor',
                          className: o()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: c,
                      markdownSyntax: 'italics',
                      children: (0, r.jsx)(l.h32, {
                          size: 'md',
                          color: 'currentColor',
                          className: o()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: c,
                      markdownSyntax: 'strikethrough',
                      children: (0, r.jsx)(l.dwl, {
                          size: 'md',
                          color: 'currentColor',
                          className: o()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)('div', { className: o()(g.divider, s) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, r.jsx)(O, {
                          slateEditor: c,
                          blockType: 'blockQuote',
                          children: (0, r.jsx)(l.PEf, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(g.icon, a)
                          })
                      }),
                  (0, r.jsx)(y, {
                      slateEditor: c,
                      markdownSyntax: 'inlineCode',
                      children: (0, r.jsx)(l.nF$, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: o()(g.icon, a)
                      })
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: c,
                      markdownSyntax: 'spoiler',
                      children: (0, r.jsx)(l.tEF, {
                          size: 'md',
                          color: 'currentColor',
                          className: o()(g.icon, a)
                      })
                  })
              ]
          });
}
let b = i.forwardRef(function (e, t) {
    var n;
    let { editorRef: a, containerRef: o, options: l } = e,
        f = i.useRef(null),
        [_, p] = i.useState(!1),
        m = i.useRef(null),
        b = i.useContext(c.ZP),
        y = i.useCallback(() => {
            p(!1), clearTimeout(m.current);
        }, []),
        O = i.useCallback(
            (e) => {
                var t;
                let n = b.renderWindow;
                (e.target instanceof n.Node && (null == (t = f.current) ? void 0 : t.contains(e.target))) || y();
            },
            [b, y]
        ),
        I = i.useCallback(
            (e) => {
                let t = b.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) y();
                    else {
                        var n;
                        let r = e.target instanceof t.Node && (null == (n = f.current) ? void 0 : n.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var t;
                                let n = null == (t = (0, d.uB)(e)) ? void 0 : t.activeElement,
                                    i = o.current;
                                p(r || (null != n && null != i && i.contains(n)));
                            }, 100));
                    }
                else y();
            },
            [b, o, y]
        );
    i.useImperativeHandle(t, () => ({ hide: y }), [y]),
        i.useEffect(() => {
            let e = b.renderWindow;
            return (
                e.document.addEventListener('keydown', y),
                e.document.addEventListener('mousedown', O),
                e.document.addEventListener('mouseup', I),
                e.addEventListener('focus', y),
                e.addEventListener('blur', y),
                () => {
                    e.document.removeEventListener('keydown', y), e.document.removeEventListener('mousedown', O), e.document.removeEventListener('mouseup', I), e.removeEventListener('focus', y), e.removeEventListener('blur', y), clearTimeout(m.current);
                }
            );
        }, [b, y, O, I]);
    let { x: S, y: T } = i.useMemo(() => {
            var e, t, n, r;
            let i = null == (e = a.current) ? void 0 : e.getSlateEditor();
            if ((null == i ? void 0 : i.selection) == null || h.M8.isCollapsed(i.selection) || !_)
                return {
                    x: null,
                    y: null
                };
            let l = s.F3.findDocumentOrShadowRoot(i),
                c = l.getSelection();
            if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed)
                return {
                    x: null,
                    y: null
                };
            let u = l.createRange();
            u.setStart(c.focusNode, c.focusOffset), u.setEnd(c.focusNode, c.focusOffset);
            let d = u.getBoundingClientRect(),
                f = l.createRange();
            f.setStart(c.anchorNode, c.anchorOffset), f.setEnd(c.anchorNode, c.anchorOffset);
            let p = f.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
            let g = m.getBoundingClientRect(),
                E = d.x === p.x,
                b = E ? g.x : Math.min(d.x, p.x),
                y = E ? g.x + g.width : Math.max(d.x, p.x),
                O = null != (r = null == (n = o.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.y) ? r : 0;
            return {
                x: b + (y - b) / 2,
                y: Math.max(O, Math.min(p.y, d.y))
            };
        }, [o, _, a]),
        [A, N] = i.useState(0),
        [C, R] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == S || null == T || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            R(e.width / 2), N(e.height + 12);
        }, [S, T]),
        null == S || null == T)
    )
        return null;
    let P = null == (n = a.current) ? void 0 : n.getSlateEditor();
    return null == P
        ? null
        : (0, r.jsx)(u.ZP, {
              children: (0, r.jsxs)('div', {
                  id: 'slate-toolbar',
                  ref: f,
                  className: g.toolbar,
                  style: {
                      top: T - A,
                      left: S - C
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, r.jsx)(v, { slateEditor: P }),
                      (0, r.jsx)(E, {
                          editorRef: a,
                          options: l
                      })
                  ]
              })
          });
});
function y(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        a = () => {
            null != t && f.T.withSingleEntry(t, () => (0, _.py)(t, n));
        },
        o = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = h.M8.edges(t.selection);
        o = null != (0, _.U4)(t, e, r).before[n];
    }
    return (0, r.jsx)('button', {
        'aria-pressed': o,
        className: g.button,
        onClick: a,
        children: i
    });
}
function O(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        a = () => {
            null != n && f.T.withSingleEntry(n, () => (0, _.hm)(n, t));
        },
        o = null != n ? h.bN.getCurrentBlock(n) : null,
        s = null != o && h.aj.isType(o[0], t);
    return (0, r.jsx)('button', {
        'aria-pressed': s,
        className: g.button,
        onClick: a,
        children: i
    });
}
function v(e) {
    var t;
    let { slateEditor: n } = e,
        [r, a] = null != (t = h.bN.getSelectedVoid(n)) ? t : [null, null],
        o = i.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == a) return;
                let t = n.selection;
                f.T.withSingleEntry(n, () => {
                    p.Q.voidToText(n, e, a), p.Q.select(n, t);
                });
            },
            [n, a]
        );
    return null == r ? null : (0, m.Z)(r, { replace: o });
}
