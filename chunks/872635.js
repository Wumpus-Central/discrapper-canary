r.d(n, {
    I: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(270445),
    c = r(481060),
    d = r(40851),
    f = r(314910),
    p = r(5967),
    h = r(53529),
    _ = r(50659),
    m = r(436660),
    g = r(887490),
    E = r(447525),
    v = r(692466);
function y(e) {
    var n;
    let { editorRef: r, options: i, iconClassName: o, dividerClassName: s } = e,
        u = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor();
    return null == u
        ? null
        : (0, a.jsxs)('div', {
              className: v.buttons,
              children: [
                  (0, a.jsx)(b, {
                      slateEditor: u,
                      markdownSyntax: 'bold',
                      children: (0, a.jsx)(c.BoldIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, o)
                      })
                  }),
                  (0, a.jsx)(b, {
                      slateEditor: u,
                      markdownSyntax: 'italics',
                      children: (0, a.jsx)(c.ItalicIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, o)
                      })
                  }),
                  (0, a.jsx)(b, {
                      slateEditor: u,
                      markdownSyntax: 'strikethrough',
                      children: (0, a.jsx)(c.StrikethroughIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, o)
                      })
                  }),
                  (0, a.jsx)('div', { className: l()(v.divider, s) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, a.jsx)(I, {
                          slateEditor: u,
                          blockType: 'blockQuote',
                          children: (0, a.jsx)(c.QuoteIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: l()(v.icon, o)
                          })
                      }),
                  (0, a.jsx)(b, {
                      slateEditor: u,
                      markdownSyntax: 'inlineCode',
                      children: (0, a.jsx)(c.AngleBracketsIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: l()(v.icon, o)
                      })
                  }),
                  (0, a.jsx)(b, {
                      slateEditor: u,
                      markdownSyntax: 'spoiler',
                      children: (0, a.jsx)(c.EyeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, o)
                      })
                  })
              ]
          });
}
function b(e) {
    let { slateEditor: n, markdownSyntax: r, children: i } = e,
        o = () => {
            null != n && h.T.withSingleEntry(n, () => (0, _.py)(n, r));
        },
        s = !1;
    if ((null == n ? void 0 : n.selection) != null) {
        let [e, i] = g.M8.edges(n.selection);
        s = null != (0, _.U4)(n, e, i).before[r];
    }
    return (0, a.jsx)('button', {
        'aria-pressed': s,
        className: v.button,
        onClick: o,
        children: i
    });
}
function I(e) {
    let { blockType: n, slateEditor: r, children: i } = e,
        o = () => {
            null != r && h.T.withSingleEntry(r, () => (0, _.hm)(r, n));
        },
        s = null != r ? g.bN.getCurrentBlock(r) : null,
        l = null != s && g.aj.isType(s[0], n);
    return (0, a.jsx)('button', {
        'aria-pressed': l,
        className: v.button,
        onClick: o,
        children: i
    });
}
function T(e) {
    var n;
    let { slateEditor: r } = e,
        [i, a] = null !== (n = g.bN.getSelectedVoid(r)) && void 0 !== n ? n : [null, null],
        s = o.useCallback(
            (e) => {
                if ((null == r ? void 0 : r.selection) == null || null == a) return;
                let n = r.selection;
                h.T.withSingleEntry(r, () => {
                    m.Q.voidToText(r, e, a), m.Q.select(r, n);
                });
            },
            [r, a]
        );
    return null == i ? null : (0, E.Z)(i, { replace: s });
}
n.Z = o.forwardRef(function (e, n) {
    var r;
    let { editorRef: i, containerRef: s, options: l } = e,
        c = o.useRef(null),
        [h, _] = o.useState(!1),
        m = o.useRef(),
        E = o.useContext(d.ZP),
        b = o.useCallback(() => {
            _(!1), clearTimeout(m.current);
        }, []),
        I = o.useCallback(
            (e) => {
                var n;
                let r = E.renderWindow;
                !(e.target instanceof r.Node && (null === (n = c.current) || void 0 === n ? void 0 : n.contains(e.target))) && b();
            },
            [E, b]
        ),
        S = o.useCallback(
            (e) => {
                let n = E.renderWindow;
                if (e.target instanceof n.Element) {
                    if (0 !== e.button) b();
                    else {
                        var r;
                        let i = e.target instanceof n.Node && (null === (r = c.current) || void 0 === r ? void 0 : r.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var n;
                                let r = null === (n = (0, p.uB)(e)) || void 0 === n ? void 0 : n.activeElement,
                                    a = s.current;
                                _(i || (null != r && null != a && a.contains(r)));
                            }, 100));
                    }
                } else b();
            },
            [E, s, b]
        );
    o.useImperativeHandle(n, () => ({ hide: b }), [b]),
        o.useEffect(() => {
            let e = E.renderWindow;
            return (
                e.document.addEventListener('keydown', b),
                e.document.addEventListener('mousedown', I),
                e.document.addEventListener('mouseup', S),
                e.addEventListener('focus', b),
                e.addEventListener('blur', b),
                () => {
                    e.document.removeEventListener('keydown', b), e.document.removeEventListener('mousedown', I), e.document.removeEventListener('mouseup', S), e.removeEventListener('focus', b), e.removeEventListener('blur', b), clearTimeout(m.current);
                }
            );
        }, [E, b, I, S]);
    let { x: A, y: C } = o.useMemo(() => {
            var e, n, r, a;
            let o = null === (e = i.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == o ? void 0 : o.selection) == null || g.M8.isCollapsed(o.selection) || !h)
                return {
                    x: null,
                    y: null
                };
            let l = u.F3.findDocumentOrShadowRoot(o),
                c = l.getSelection();
            if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed)
                return {
                    x: null,
                    y: null
                };
            let d = l.createRange();
            d.setStart(c.focusNode, c.focusOffset), d.setEnd(c.focusNode, c.focusOffset);
            let f = d.getBoundingClientRect(),
                p = l.createRange();
            p.setStart(c.anchorNode, c.anchorOffset), p.setEnd(c.anchorNode, c.anchorOffset);
            let _ = p.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
            let E = m.getBoundingClientRect(),
                v = f.x === _.x,
                y = v ? E.x : Math.min(f.x, _.x),
                b = v ? E.x + E.width : Math.max(f.x, _.x),
                I = null !== (a = null === (r = s.current) || void 0 === r ? void 0 : null === (n = r.getBoundingClientRect()) || void 0 === n ? void 0 : n.y) && void 0 !== a ? a : 0,
                T = y + (b - y) / 2;
            return {
                x: T,
                y: Math.max(I, Math.min(_.y, f.y))
            };
        }, [s, h, i]),
        [N, R] = o.useState(0),
        [O, D] = o.useState(0);
    if (
        (o.useLayoutEffect(() => {
            if (null == A || null == C || null == c.current) return;
            let e = c.current.getBoundingClientRect();
            D(e.width / 2), R(e.height + 12);
        }, [A, C]),
        null == A || null == C)
    )
        return null;
    let L = null === (r = i.current) || void 0 === r ? void 0 : r.getSlateEditor();
    return null == L
        ? null
        : (0, a.jsx)(f.ZP, {
              children: (0, a.jsxs)('div', {
                  id: 'slate-toolbar',
                  ref: c,
                  className: v.toolbar,
                  style: {
                      top: C - N,
                      left: A - O
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, a.jsx)(T, { slateEditor: L }),
                      (0, a.jsx)(y, {
                          editorRef: i,
                          options: l
                      })
                  ]
              })
          });
});
