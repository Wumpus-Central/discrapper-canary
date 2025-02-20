n.d(t, {
    I: () => E,
    Z: () => v
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(270445),
    l = n(481060),
    c = n(40851),
    u = n(314910),
    d = n(5967),
    f = n(53529),
    p = n(50659),
    _ = n(436660),
    h = n(887490),
    m = n(447525),
    g = n(217131);
function E(e) {
    var t;
    let { editorRef: n, options: i, iconClassName: o, dividerClassName: s } = e,
        c = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
    return null == c
        ? null
        : (0, r.jsxs)('div', {
              className: g.buttons,
              children: [
                  (0, r.jsx)(b, {
                      slateEditor: c,
                      markdownSyntax: 'bold',
                      children: (0, r.jsx)(l.mY4, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(g.icon, o)
                      })
                  }),
                  (0, r.jsx)(b, {
                      slateEditor: c,
                      markdownSyntax: 'italics',
                      children: (0, r.jsx)(l.h32, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(g.icon, o)
                      })
                  }),
                  (0, r.jsx)(b, {
                      slateEditor: c,
                      markdownSyntax: 'strikethrough',
                      children: (0, r.jsx)(l.dwl, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(g.icon, o)
                      })
                  }),
                  (0, r.jsx)('div', { className: a()(g.divider, s) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, r.jsx)(y, {
                          slateEditor: c,
                          blockType: 'blockQuote',
                          children: (0, r.jsx)(l.PEf, {
                              size: 'md',
                              color: 'currentColor',
                              className: a()(g.icon, o)
                          })
                      }),
                  (0, r.jsx)(b, {
                      slateEditor: c,
                      markdownSyntax: 'inlineCode',
                      children: (0, r.jsx)(l.nF$, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: a()(g.icon, o)
                      })
                  }),
                  (0, r.jsx)(b, {
                      slateEditor: c,
                      markdownSyntax: 'spoiler',
                      children: (0, r.jsx)(l.tEF, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(g.icon, o)
                      })
                  })
              ]
          });
}
let v = i.forwardRef(function (e, t) {
    var n;
    let { editorRef: o, containerRef: a, options: l } = e,
        f = i.useRef(null),
        [p, _] = i.useState(!1),
        m = i.useRef(),
        v = i.useContext(c.ZP),
        b = i.useCallback(() => {
            _(!1), clearTimeout(m.current);
        }, []),
        y = i.useCallback(
            (e) => {
                var t;
                let n = v.renderWindow;
                (e.target instanceof n.Node && (null === (t = f.current) || void 0 === t ? void 0 : t.contains(e.target))) || b();
            },
            [v, b]
        ),
        S = i.useCallback(
            (e) => {
                let t = v.renderWindow;
                if (e.target instanceof t.Element) {
                    if (0 !== e.button) b();
                    else {
                        var n;
                        let r = e.target instanceof t.Node && (null === (n = f.current) || void 0 === n ? void 0 : n.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    i = a.current;
                                _(r || (null != n && null != i && i.contains(n)));
                            }, 100));
                    }
                } else b();
            },
            [v, a, b]
        );
    i.useImperativeHandle(t, () => ({ hide: b }), [b]),
        i.useEffect(() => {
            let e = v.renderWindow;
            return (
                e.document.addEventListener('keydown', b),
                e.document.addEventListener('mousedown', y),
                e.document.addEventListener('mouseup', S),
                e.addEventListener('focus', b),
                e.addEventListener('blur', b),
                () => {
                    e.document.removeEventListener('keydown', b), e.document.removeEventListener('mousedown', y), e.document.removeEventListener('mouseup', S), e.removeEventListener('focus', b), e.removeEventListener('blur', b), clearTimeout(m.current);
                }
            );
        }, [v, b, y, S]);
    let { x: I, y: T } = i.useMemo(() => {
            var e, t, n, r;
            let i = null === (e = o.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == i ? void 0 : i.selection) == null || h.M8.isCollapsed(i.selection) || !p)
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
            let _ = f.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
            let g = m.getBoundingClientRect(),
                E = d.x === _.x,
                v = E ? g.x : Math.min(d.x, _.x),
                b = E ? g.x + g.width : Math.max(d.x, _.x),
                y = null !== (r = null === (n = a.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== r ? r : 0;
            return {
                x: v + (b - v) / 2,
                y: Math.max(y, Math.min(_.y, d.y))
            };
        }, [a, p, o]),
        [N, A] = i.useState(0),
        [C, R] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == I || null == T || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            R(e.width / 2), A(e.height + 12);
        }, [I, T]),
        null == I || null == T)
    )
        return null;
    let P = null === (n = o.current) || void 0 === n ? void 0 : n.getSlateEditor();
    return null == P
        ? null
        : (0, r.jsx)(u.ZP, {
              children: (0, r.jsxs)('div', {
                  id: 'slate-toolbar',
                  ref: f,
                  className: g.toolbar,
                  style: {
                      top: T - N,
                      left: I - C
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, r.jsx)(O, { slateEditor: P }),
                      (0, r.jsx)(E, {
                          editorRef: o,
                          options: l
                      })
                  ]
              })
          });
});
function b(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        o = () => {
            null != t && f.T.withSingleEntry(t, () => (0, p.py)(t, n));
        },
        a = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = h.M8.edges(t.selection);
        a = null != (0, p.U4)(t, e, r).before[n];
    }
    return (0, r.jsx)('button', {
        'aria-pressed': a,
        className: g.button,
        onClick: o,
        children: i
    });
}
function y(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        o = () => {
            null != n && f.T.withSingleEntry(n, () => (0, p.hm)(n, t));
        },
        a = null != n ? h.bN.getCurrentBlock(n) : null,
        s = null != a && h.aj.isType(a[0], t);
    return (0, r.jsx)('button', {
        'aria-pressed': s,
        className: g.button,
        onClick: o,
        children: i
    });
}
function O(e) {
    var t;
    let { slateEditor: n } = e,
        [r, o] = null !== (t = h.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null],
        a = i.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == o) return;
                let t = n.selection;
                f.T.withSingleEntry(n, () => {
                    _.Q.voidToText(n, e, o), _.Q.select(n, t);
                });
            },
            [n, o]
        );
    return null == r ? null : (0, m.Z)(r, { replace: a });
}
