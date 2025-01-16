r.d(n, {
    I: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(270445),
    c = r(481060),
    d = r(40851),
    f = r(314910),
    _ = r(5967),
    h = r(53529),
    p = r(50659),
    m = r(436660),
    g = r(887490),
    E = r(447525),
    v = r(692466);
function I(e) {
    var n;
    let { editorRef: r, options: i, iconClassName: s, dividerClassName: o } = e,
        u = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor();
    return null == u
        ? null
        : (0, a.jsxs)('div', {
              className: v.buttons,
              children: [
                  (0, a.jsx)(T, {
                      slateEditor: u,
                      markdownSyntax: 'bold',
                      children: (0, a.jsx)(c.BoldIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, s)
                      })
                  }),
                  (0, a.jsx)(T, {
                      slateEditor: u,
                      markdownSyntax: 'italics',
                      children: (0, a.jsx)(c.ItalicIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, s)
                      })
                  }),
                  (0, a.jsx)(T, {
                      slateEditor: u,
                      markdownSyntax: 'strikethrough',
                      children: (0, a.jsx)(c.StrikethroughIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, s)
                      })
                  }),
                  (0, a.jsx)('div', { className: l()(v.divider, o) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, a.jsx)(b, {
                          slateEditor: u,
                          blockType: 'blockQuote',
                          children: (0, a.jsx)(c.QuoteIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: l()(v.icon, s)
                          })
                      }),
                  (0, a.jsx)(T, {
                      slateEditor: u,
                      markdownSyntax: 'inlineCode',
                      children: (0, a.jsx)(c.AngleBracketsIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: l()(v.icon, s)
                      })
                  }),
                  (0, a.jsx)(T, {
                      slateEditor: u,
                      markdownSyntax: 'spoiler',
                      children: (0, a.jsx)(c.EyeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: l()(v.icon, s)
                      })
                  })
              ]
          });
}
function T(e) {
    let { slateEditor: n, markdownSyntax: r, children: i } = e,
        s = () => {
            null != n && h.T.withSingleEntry(n, () => (0, p.py)(n, r));
        },
        o = !1;
    if ((null == n ? void 0 : n.selection) != null) {
        let [e, i] = g.M8.edges(n.selection);
        o = null != (0, p.U4)(n, e, i).before[r];
    }
    return (0, a.jsx)('button', {
        'aria-pressed': o,
        className: v.button,
        onClick: s,
        children: i
    });
}
function b(e) {
    let { blockType: n, slateEditor: r, children: i } = e,
        s = () => {
            null != r && h.T.withSingleEntry(r, () => (0, p.hm)(r, n));
        },
        o = null != r ? g.bN.getCurrentBlock(r) : null,
        l = null != o && g.aj.isType(o[0], n);
    return (0, a.jsx)('button', {
        'aria-pressed': l,
        className: v.button,
        onClick: s,
        children: i
    });
}
function y(e) {
    var n;
    let { slateEditor: r } = e,
        [i, a] = null !== (n = g.bN.getSelectedVoid(r)) && void 0 !== n ? n : [null, null],
        o = s.useCallback(
            (e) => {
                if ((null == r ? void 0 : r.selection) == null || null == a) return;
                let n = r.selection;
                h.T.withSingleEntry(r, () => {
                    m.Q.voidToText(r, e, a), m.Q.select(r, n);
                });
            },
            [r, a]
        );
    return null == i ? null : (0, E.Z)(i, { replace: o });
}
n.Z = s.forwardRef(function (e, n) {
    var r;
    let { editorRef: i, containerRef: o, options: l } = e,
        c = s.useRef(null),
        [h, p] = s.useState(!1),
        m = s.useRef(),
        E = s.useContext(d.ZP),
        T = s.useCallback(() => {
            p(!1), clearTimeout(m.current);
        }, []),
        b = s.useCallback(
            (e) => {
                var n;
                let r = E.renderWindow;
                !(e.target instanceof r.Node && (null === (n = c.current) || void 0 === n ? void 0 : n.contains(e.target))) && T();
            },
            [E, T]
        ),
        S = s.useCallback(
            (e) => {
                let n = E.renderWindow;
                if (e.target instanceof n.Element) {
                    if (0 !== e.button) T();
                    else {
                        var r;
                        let i = e.target instanceof n.Node && (null === (r = c.current) || void 0 === r ? void 0 : r.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var n;
                                let r = null === (n = (0, _.uB)(e)) || void 0 === n ? void 0 : n.activeElement,
                                    a = o.current;
                                p(i || (null != r && null != a && a.contains(r)));
                            }, 100));
                    }
                } else T();
            },
            [E, o, T]
        );
    s.useImperativeHandle(n, () => ({ hide: T }), [T]),
        s.useEffect(() => {
            let e = E.renderWindow;
            return (
                e.document.addEventListener('keydown', T),
                e.document.addEventListener('mousedown', b),
                e.document.addEventListener('mouseup', S),
                e.addEventListener('focus', T),
                e.addEventListener('blur', T),
                () => {
                    e.document.removeEventListener('keydown', T), e.document.removeEventListener('mousedown', b), e.document.removeEventListener('mouseup', S), e.removeEventListener('focus', T), e.removeEventListener('blur', T), clearTimeout(m.current);
                }
            );
        }, [E, T, b, S]);
    let { x: A, y: N } = s.useMemo(() => {
            var e, n, r, a;
            let s = null === (e = i.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == s ? void 0 : s.selection) == null || g.M8.isCollapsed(s.selection) || !h)
                return {
                    x: null,
                    y: null
                };
            let l = u.F3.findDocumentOrShadowRoot(s),
                c = l.getSelection();
            if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed)
                return {
                    x: null,
                    y: null
                };
            let d = l.createRange();
            d.setStart(c.focusNode, c.focusOffset), d.setEnd(c.focusNode, c.focusOffset);
            let f = d.getBoundingClientRect(),
                _ = l.createRange();
            _.setStart(c.anchorNode, c.anchorOffset), _.setEnd(c.anchorNode, c.anchorOffset);
            let p = _.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
            let E = m.getBoundingClientRect(),
                v = f.x === p.x,
                I = v ? E.x : Math.min(f.x, p.x),
                T = v ? E.x + E.width : Math.max(f.x, p.x),
                b = null !== (a = null === (r = o.current) || void 0 === r ? void 0 : null === (n = r.getBoundingClientRect()) || void 0 === n ? void 0 : n.y) && void 0 !== a ? a : 0,
                y = I + (T - I) / 2;
            return {
                x: y,
                y: Math.max(b, Math.min(p.y, f.y))
            };
        }, [o, h, i]),
        [C, R] = s.useState(0),
        [O, D] = s.useState(0);
    if (
        (s.useLayoutEffect(() => {
            if (null == A || null == N || null == c.current) return;
            let e = c.current.getBoundingClientRect();
            D(e.width / 2), R(e.height + 12);
        }, [A, N]),
        null == A || null == N)
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
                      top: N - C,
                      left: A - O
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, a.jsx)(y, { slateEditor: L }),
                      (0, a.jsx)(I, {
                          editorRef: i,
                          options: l
                      })
                  ]
              })
          });
});
