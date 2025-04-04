n.r(t),
    n.d(t, {
        hasDomParent: () => o,
        normalizeDOMPoint: () => a
    }),
    n(411104),
    n(47120);
var r = n(270445);
let i = !1;
{
    r.F3.toSlateRange = (e, t, n) => {
        let i,
            o,
            a,
            s,
            l,
            { exactMatch: c, suppressThrow: d } = n;
        if ((u(t) ? ((i = t.anchorNode), (o = t.anchorOffset), (a = t.focusNode), (s = t.focusOffset), (l = t.isCollapsed)) : ((i = t.startContainer), (o = t.startOffset), (a = t.endContainer), (s = t.endOffset), (l = t.collapsed)), null == i || null == a || null == o || null == s)) {
            if (d) return null;
            throw Error('Cannot resolve a Slate range from DOM range');
        }
        let f = r.F3.toSlatePoint(e, [i, o], {
                exactMatch: c,
                suppressThrow: d
            }),
            _ = l
                ? f
                : r.F3.toSlatePoint(e, [a, s], {
                      exactMatch: c,
                      suppressThrow: d
                  });
        return null != f && null != _
            ? {
                  anchor: f,
                  focus: _
              }
            : null;
    };
    let e = r.F3.toSlatePoint;
    (r.F3.toSlatePoint = (t, n, r) => {
        let { exactMatch: i, suppressThrow: o, direction: s = 'forward' } = r;
        i || (n = a(n, s));
        try {
            return e(t, n, {
                exactMatch: !0,
                suppressThrow: o
            });
        } catch (e) {
            if (o) return null;
            throw e;
        }
    }),
        (i = !0);
}
function o(e, t) {
    if (null == t) return !1;
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function a(e, t) {
    let n,
        [r, i] = e;
    if (!c(r) || 0 === r.childNodes.length) return e;
    for ('forward' === t && i === r.childNodes.length && (t = 'backward'), 'backward' === t && i--, [r, n] = s(r, i, t), 'forward' === t && n < i ? (t = 'backward') : 'backward' === t && n > i && (t = 'forward'), i = n; c(r) && r.childNodes.length > 0; ) {
        let e = 'backward' === t ? r.childNodes.length - 1 : 0;
        r = s(r, e, t)[0];
    }
    let o = 'backward' === t && null != r.textContent ? r.textContent.length : 0;
    return [r, o];
}
function s(e, t, n) {
    let { childNodes: r } = e,
        i = r[t],
        o = t,
        a = !1,
        s = !1;
    for (; (l(i) || (c(i) && 0 === i.childNodes.length) || (c(i) && 'false' === i.getAttribute('contenteditable'))) && (!a || !s); ) {
        if (o >= r.length) {
            (a = !0), (o = t - 1), (n = 'backward');
            continue;
        }
        if (o < 0) {
            (s = !0), (o = t + 1), (n = 'forward');
            continue;
        }
        (i = r[o]), (t = o), (o += 'forward' === n ? 1 : -1);
    }
    return [i, t];
}
function l(e) {
    return d(e) && 8 === e.nodeType;
}
function c(e) {
    return d(e) && 1 === e.nodeType;
}
function u(e) {
    let t = e && e.anchorNode && f(e.anchorNode);
    return null != t && e instanceof t.Selection;
}
function d(e) {
    let t = f(e);
    return null != t && e instanceof t.Node;
}
function f(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
}
