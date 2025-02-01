n.d(t, {
    I: () => E,
    Z: () => v
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(270445),
    l = n(481060),
    u = n(40851),
    c = n(314910),
    d = n(5967),
    f = n(53529),
    _ = n(50659),
    p = n(436660),
    h = n(887490),
    m = n(447525),
    g = n(692466);
function E(e) {
    var t;
    let { editorRef: n, options: r, iconClassName: a, dividerClassName: o } = e,
        u = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
    return null == u
        ? null
        : (0, i.jsxs)('div', {
              className: g.buttons,
              children: [
                  (0, i.jsx)(y, {
                      slateEditor: u,
                      markdownSyntax: 'bold',
                      children: (0, i.jsx)(l.mY4, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, i.jsx)(y, {
                      slateEditor: u,
                      markdownSyntax: 'italics',
                      children: (0, i.jsx)(l.h32, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, i.jsx)(y, {
                      slateEditor: u,
                      markdownSyntax: 'strikethrough',
                      children: (0, i.jsx)(l.dwl, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, i.jsx)('div', { className: s()(g.divider, o) }),
                  !(null == r ? void 0 : r.disableBlockQuotes) &&
                      (0, i.jsx)(I, {
                          slateEditor: u,
                          blockType: 'blockQuote',
                          children: (0, i.jsx)(l.PEf, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(g.icon, a)
                          })
                      }),
                  (0, i.jsx)(y, {
                      slateEditor: u,
                      markdownSyntax: 'inlineCode',
                      children: (0, i.jsx)(l.nF$, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  }),
                  (0, i.jsx)(y, {
                      slateEditor: u,
                      markdownSyntax: 'spoiler',
                      children: (0, i.jsx)(l.tEF, {
                          size: 'md',
                          color: 'currentColor',
                          className: s()(g.icon, a)
                      })
                  })
              ]
          });
}
let v = r.forwardRef(function (e, t) {
    var n;
    let { editorRef: a, containerRef: s, options: l } = e,
        f = r.useRef(null),
        [_, p] = r.useState(!1),
        m = r.useRef(),
        v = r.useContext(u.ZP),
        y = r.useCallback(() => {
            p(!1), clearTimeout(m.current);
        }, []),
        I = r.useCallback(
            (e) => {
                var t;
                let n = v.renderWindow;
                (e.target instanceof n.Node && (null === (t = f.current) || void 0 === t ? void 0 : t.contains(e.target))) || y();
            },
            [v, y]
        ),
        b = r.useCallback(
            (e) => {
                let t = v.renderWindow;
                if (e.target instanceof t.Element) {
                    if (0 !== e.button) y();
                    else {
                        var n;
                        let i = e.target instanceof t.Node && (null === (n = f.current) || void 0 === n ? void 0 : n.contains(e.target));
                        clearTimeout(m.current),
                            (m.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, d.uB)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    r = s.current;
                                p(i || (null != n && null != r && r.contains(n)));
                            }, 100));
                    }
                } else y();
            },
            [v, s, y]
        );
    r.useImperativeHandle(t, () => ({ hide: y }), [y]),
        r.useEffect(() => {
            let e = v.renderWindow;
            return (
                e.document.addEventListener('keydown', y),
                e.document.addEventListener('mousedown', I),
                e.document.addEventListener('mouseup', b),
                e.addEventListener('focus', y),
                e.addEventListener('blur', y),
                () => {
                    e.document.removeEventListener('keydown', y), e.document.removeEventListener('mousedown', I), e.document.removeEventListener('mouseup', b), e.removeEventListener('focus', y), e.removeEventListener('blur', y), clearTimeout(m.current);
                }
            );
        }, [v, y, I, b]);
    let { x: S, y: A } = r.useMemo(() => {
            var e, t, n, i;
            let r = null === (e = a.current) || void 0 === e ? void 0 : e.getSlateEditor();
            if ((null == r ? void 0 : r.selection) == null || h.M8.isCollapsed(r.selection) || !_)
                return {
                    x: null,
                    y: null
                };
            let l = o.F3.findDocumentOrShadowRoot(r),
                u = l.getSelection();
            if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed)
                return {
                    x: null,
                    y: null
                };
            let c = l.createRange();
            c.setStart(u.focusNode, u.focusOffset), c.setEnd(u.focusNode, u.focusOffset);
            let d = c.getBoundingClientRect(),
                f = l.createRange();
            f.setStart(u.anchorNode, u.anchorOffset), f.setEnd(u.anchorNode, u.anchorOffset);
            let p = f.getBoundingClientRect(),
                m = l.createRange();
            m.setStart(u.anchorNode, u.anchorOffset), m.setEnd(u.focusNode, u.focusOffset);
            let g = m.getBoundingClientRect(),
                E = d.x === p.x,
                v = E ? g.x : Math.min(d.x, p.x),
                y = E ? g.x + g.width : Math.max(d.x, p.x),
                I = null !== (i = null === (n = s.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== i ? i : 0;
            return {
                x: v + (y - v) / 2,
                y: Math.max(I, Math.min(p.y, d.y))
            };
        }, [s, _, a]),
        [N, C] = r.useState(0),
        [R, O] = r.useState(0);
    if (
        (r.useLayoutEffect(() => {
            if (null == S || null == A || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            O(e.width / 2), C(e.height + 12);
        }, [S, A]),
        null == S || null == A)
    )
        return null;
    let D = null === (n = a.current) || void 0 === n ? void 0 : n.getSlateEditor();
    return null == D
        ? null
        : (0, i.jsx)(c.ZP, {
              children: (0, i.jsxs)('div', {
                  id: 'slate-toolbar',
                  ref: f,
                  className: g.toolbar,
                  style: {
                      top: A - N,
                      left: S - R
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, i.jsx)(T, { slateEditor: D }),
                      (0, i.jsx)(E, {
                          editorRef: a,
                          options: l
                      })
                  ]
              })
          });
});
function y(e) {
    let { slateEditor: t, markdownSyntax: n, children: r } = e,
        a = () => {
            null != t && f.T.withSingleEntry(t, () => (0, _.py)(t, n));
        },
        s = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, i] = h.M8.edges(t.selection);
        s = null != (0, _.U4)(t, e, i).before[n];
    }
    return (0, i.jsx)('button', {
        'aria-pressed': s,
        className: g.button,
        onClick: a,
        children: r
    });
}
function I(e) {
    let { blockType: t, slateEditor: n, children: r } = e,
        a = () => {
            null != n && f.T.withSingleEntry(n, () => (0, _.hm)(n, t));
        },
        s = null != n ? h.bN.getCurrentBlock(n) : null,
        o = null != s && h.aj.isType(s[0], t);
    return (0, i.jsx)('button', {
        'aria-pressed': o,
        className: g.button,
        onClick: a,
        children: r
    });
}
function T(e) {
    var t;
    let { slateEditor: n } = e,
        [i, a] = null !== (t = h.bN.getSelectedVoid(n)) && void 0 !== t ? t : [null, null],
        s = r.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == a) return;
                let t = n.selection;
                f.T.withSingleEntry(n, () => {
                    p.Q.voidToText(n, e, a), p.Q.select(n, t);
                });
            },
            [n, a]
        );
    return null == i ? null : (0, m.Z)(i, { replace: s });
}
