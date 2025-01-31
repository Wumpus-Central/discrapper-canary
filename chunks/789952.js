n.r(t),
    n.d(t, {
        hasDomParent: () => a,
        normalizeDOMPoint: () => s
    }),
    n(411104),
    n(47120);
var i = n(270445);
let r = !1;
{
    i.F3.toSlateRange = (e, t, n) => {
        let r,
            a,
            s,
            o,
            l,
            { exactMatch: u, suppressThrow: d } = n;
        if ((c(t) ? ((r = t.anchorNode), (a = t.anchorOffset), (s = t.focusNode), (o = t.focusOffset), (l = t.isCollapsed)) : ((r = t.startContainer), (a = t.startOffset), (s = t.endContainer), (o = t.endOffset), (l = t.collapsed)), null == r || null == s || null == a || null == o)) {
            if (d) return null;
            throw Error('Cannot resolve a Slate range from DOM range');
        }
        let f = i.F3.toSlatePoint(e, [r, a], {
                exactMatch: u,
                suppressThrow: d
            }),
            _ = l
                ? f
                : i.F3.toSlatePoint(e, [s, o], {
                      exactMatch: u,
                      suppressThrow: d
                  });
        return null != f && null != _
            ? {
                  anchor: f,
                  focus: _
              }
            : null;
    };
    let e = i.F3.toSlatePoint;
    (i.F3.toSlatePoint = (t, n, i) => {
        let { exactMatch: r, suppressThrow: a, direction: o = 'forward' } = i;
        r || (n = s(n, o));
        try {
            return e(t, n, {
                exactMatch: !0,
                suppressThrow: a
            });
        } catch (e) {
            if (a) return null;
            throw e;
        }
    }),
        (r = !0);
}
function a(e, t) {
    if (null == t) return !1;
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function s(e, t) {
    let n,
        [i, r] = e;
    if (!u(i) || 0 === i.childNodes.length) return e;
    for ('forward' === t && r === i.childNodes.length && (t = 'backward'), 'backward' === t && r--, [i, n] = o(i, r, t), 'forward' === t && n < r ? (t = 'backward') : 'backward' === t && n > r && (t = 'forward'), r = n; u(i) && i.childNodes.length > 0; ) {
        let e = 'backward' === t ? i.childNodes.length - 1 : 0;
        i = o(i, e, t)[0];
    }
    let a = 'backward' === t && null != i.textContent ? i.textContent.length : 0;
    return [i, a];
}
function o(e, t, n) {
    let { childNodes: i } = e,
        r = i[t],
        a = t,
        s = !1,
        o = !1;
    for (; (l(r) || (u(r) && 0 === r.childNodes.length) || (u(r) && 'false' === r.getAttribute('contenteditable'))) && (!s || !o); ) {
        if (a >= i.length) {
            (s = !0), (a = t - 1), (n = 'backward');
            continue;
        }
        if (a < 0) {
            (o = !0), (a = t + 1), (n = 'forward');
            continue;
        }
        (r = i[a]), (t = a), (a += 'forward' === n ? 1 : -1);
    }
    return [r, t];
}
function l(e) {
    return d(e) && 8 === e.nodeType;
}
function u(e) {
    return d(e) && 1 === e.nodeType;
}
function c(e) {
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
