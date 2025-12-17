n.d(t, {
    I: () => E,
    Z: () => b,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(685578),
    l = n(374470),
    c = n(481060),
    u = n(314910),
    d = n(728285),
    f = n(53529),
    p = n(50659),
    _ = n(436660),
    m = n(887490),
    h = n(447525),
    g = n(138157);
function E(e) {
    var t;
    let { editorRef: n, options: i, iconClassName: a, dividerClassName: s } = e,
        l = null == (t = n.current) ? void 0 : t.getSlateEditor();
    return null == l
        ? null
        : (0, r.jsxs)("div", {
              className: g.buttons,
              children: [
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "bold",
                      children: (0, r.jsx)(c.mY4, {
                          size: "md",
                          color: "currentColor",
                          className: o()(g.icon, a),
                      }),
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "italics",
                      children: (0, r.jsx)(c.h32, {
                          size: "md",
                          color: "currentColor",
                          className: o()(g.icon, a),
                      }),
                  }),
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "strikethrough",
                      children: (0, r.jsx)(c.dwl, {
                          size: "md",
                          color: "currentColor",
                          className: o()(g.icon, a),
                      }),
                  }),
                  (0, r.jsx)("div", { className: o()(g.divider, s) }),
                  !(null == i ? void 0 : i.disableBlockQuotes) &&
                      (0, r.jsx)(O, {
                          slateEditor: l,
                          blockType: "blockQuote",
                          children: (0, r.jsx)(c.PEf, {
                              size: "md",
                              color: "currentColor",
                              className: o()(g.icon, a),
                          }),
                      }),
                  !(null == i ? void 0 : i.disableInlineCode) &&
                      (0, r.jsx)(y, {
                          slateEditor: l,
                          markdownSyntax: "inlineCode",
                          children: (0, r.jsx)(c.nF$, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: o()(g.icon, a),
                          }),
                      }),
                  (0, r.jsx)(y, {
                      slateEditor: l,
                      markdownSyntax: "spoiler",
                      children: (0, r.jsx)(c.tEF, {
                          size: "md",
                          color: "currentColor",
                          className: o()(g.icon, a),
                      }),
                  }),
              ],
          });
}
let b = i.forwardRef(function (e, t) {
    var n;
    let { editorRef: a, containerRef: o, options: c } = e,
        f = i.useRef(null),
        [p, _] = i.useState(!1),
        h = i.useRef(null),
        b = i.useContext(d.ZP),
        y = i.useCallback(() => {
            _(!1), clearTimeout(h.current);
        }, []),
        O = i.useCallback(
            (e) => {
                var t;
                let n = b.renderWindow;
                (e.target instanceof n.Node && (null == (t = f.current) ? void 0 : t.contains(e.target))) || y();
            },
            [b, y],
        ),
        S = i.useCallback(
            (e) => {
                let t = b.renderWindow;
                if (e.target instanceof t.Element)
                    if (0 !== e.button) y();
                    else {
                        var n;
                        let r = e.target instanceof t.Node && (null == (n = f.current) ? void 0 : n.contains(e.target));
                        clearTimeout(h.current),
                            (h.current = setTimeout(() => {
                                var t;
                                let n = null == (t = (0, l.uB)(e)) ? void 0 : t.activeElement,
                                    i = o.current;
                                _(r || (null != n && null != i && i.contains(n)));
                            }, 100));
                    }
                else y();
            },
            [b, o, y],
        );
    i.useImperativeHandle(t, () => ({ hide: y }), [y]),
        i.useEffect(() => {
            let e = b.renderWindow;
            return (
                e.document.addEventListener("keydown", y),
                e.document.addEventListener("mousedown", O),
                e.document.addEventListener("mouseup", S),
                e.addEventListener("focus", y),
                e.addEventListener("blur", y),
                () => {
                    e.document.removeEventListener("keydown", y),
                        e.document.removeEventListener("mousedown", O),
                        e.document.removeEventListener("mouseup", S),
                        e.removeEventListener("focus", y),
                        e.removeEventListener("blur", y),
                        clearTimeout(h.current);
                }
            );
        }, [b, y, O, S]);
    let { x: I, y: T } = i.useMemo(() => {
            var e, t, n, r;
            let i = null == (e = a.current) ? void 0 : e.getSlateEditor();
            if ((null == i ? void 0 : i.selection) == null || m.M8.isCollapsed(i.selection) || !p)
                return {
                    x: null,
                    y: null,
                };
            let l = s.F3.findDocumentOrShadowRoot(i),
                c = l.getSelection();
            if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed)
                return {
                    x: null,
                    y: null,
                };
            let u = l.createRange();
            u.setStart(c.focusNode, c.focusOffset), u.setEnd(c.focusNode, c.focusOffset);
            let d = u.getBoundingClientRect(),
                f = l.createRange();
            f.setStart(c.anchorNode, c.anchorOffset), f.setEnd(c.anchorNode, c.anchorOffset);
            let _ = f.getBoundingClientRect(),
                h = l.createRange();
            h.setStart(c.anchorNode, c.anchorOffset), h.setEnd(c.focusNode, c.focusOffset);
            let g = h.getBoundingClientRect(),
                E = d.x === _.x,
                b = E ? g.x : Math.min(d.x, _.x),
                y = E ? g.x + g.width : Math.max(d.x, _.x),
                O =
                    null != (r = null == (n = o.current) || null == (t = n.getBoundingClientRect()) ? void 0 : t.y)
                        ? r
                        : 0;
            return {
                x: b + (y - b) / 2,
                y: Math.max(O, Math.min(_.y, d.y)),
            };
        }, [o, p, a]),
        [C, A] = i.useState(0),
        [N, P] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            if (null == I || null == T || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            P(e.width / 2), A(e.height + 12);
        }, [I, T]),
        null == I || null == T)
    )
        return null;
    let R = null == (n = a.current) ? void 0 : n.getSlateEditor();
    return null == R
        ? null
        : (0, r.jsx)(u.ZP, {
              children: (0, r.jsxs)("div", {
                  id: "slate-toolbar",
                  ref: f,
                  className: g.toolbar,
                  style: {
                      top: T - C,
                      left: I - N,
                  },
                  onMouseDown: (e) => {
                      e.stopPropagation();
                  },
                  onMouseUp: (e) => {
                      e.stopPropagation();
                  },
                  children: [
                      (0, r.jsx)(v, { slateEditor: R }),
                      (0, r.jsx)(E, {
                          editorRef: a,
                          options: c,
                      }),
                  ],
              }),
          });
});
function y(e) {
    let { slateEditor: t, markdownSyntax: n, children: i } = e,
        a = () => {
            null != t && f.T.withSingleEntry(t, () => (0, p.py)(t, n));
        },
        o = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = m.M8.edges(t.selection);
        o = null != (0, p.U4)(t, e, r).before[n];
    }
    return (0, r.jsx)("button", {
        "aria-pressed": o,
        className: g.button,
        onClick: a,
        children: i,
    });
}
function O(e) {
    let { blockType: t, slateEditor: n, children: i } = e,
        a = () => {
            null != n && f.T.withSingleEntry(n, () => (0, p.hm)(n, t));
        },
        o = null != n ? m.bN.getCurrentBlock(n) : null,
        s = null != o && m.aj.isType(o[0], t);
    return (0, r.jsx)("button", {
        "aria-pressed": s,
        className: g.button,
        onClick: a,
        children: i,
    });
}
function v(e) {
    var t;
    let { slateEditor: n } = e,
        [r, a] = null != (t = m.bN.getSelectedVoid(n)) ? t : [null, null],
        o = i.useCallback(
            (e) => {
                if ((null == n ? void 0 : n.selection) == null || null == a) return;
                let t = n.selection;
                f.T.withSingleEntry(n, () => {
                    _.Q.voidToText(n, e, a), _.Q.select(n, t);
                });
            },
            [n, a],
        );
    return null == r ? null : (0, h.Z)(r, { replace: o });
}
