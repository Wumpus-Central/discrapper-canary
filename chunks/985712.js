t.d(r, { o: () => d });
var a = t(64989),
    o = t(875380),
    n = t(147693);
function l(e, r) {
    if (!(0, n.kK)(e)) return !1;
    if ('range' === r) return (0, n.xO)(e, ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton']);
    throw TypeError("No knowledge about abstract role '".concat(r, "'. This is likely a bug :("));
}
function i(e, r) {
    var t = (0, a.Z)(e.querySelectorAll(r));
    return (
        (0, n.SS)(e, 'aria-owns').forEach(function (e) {
            t.push.apply(t, (0, a.Z)(e.querySelectorAll(r)));
        }),
        t
    );
}
function s(e) {
    var r = e.getPropertyValue('content');
    return /^["'].*["']$/.test(r) ? r.slice(1, -1) : '';
}
function u(e) {
    var r = (0, n.$Q)(e);
    return 'button' === r || ('input' === r && 'hidden' !== e.getAttribute('type')) || 'meter' === r || 'output' === r || 'progress' === r || 'select' === r || 'textarea' === r;
}
function d(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = new o.Z(),
        d = (0, n.pG)(e),
        c = r.compute,
        p = void 0 === c ? 'name' : c,
        m = r.computedStyleSupportsPseudoElements,
        f = void 0 === m ? void 0 !== r.getComputedStyle : m,
        b = r.getComputedStyle,
        v = void 0 === b ? d.getComputedStyle.bind(d) : b;
    function h(e, r) {
        var t,
            o = '';
        if ((0, n.kK)(e) && f) {
            var l = s(v(e, '::before'));
            o = ''.concat(l, ' ').concat(o);
        }
        if (
            (((0, n.rO)(e) ? (0 === (t = e.assignedNodes()).length ? (0, a.Z)(e.childNodes) : t) : (0, a.Z)(e.childNodes).concat((0, n.SS)(e, 'aria-owns'))).forEach(function (e) {
                var t = C(e, {
                        isEmbeddedInLabel: r.isEmbeddedInLabel,
                        isReferenced: !1,
                        recursion: !0
                    }),
                    a = 'inline' !== ((0, n.kK)(e) ? v(e).getPropertyValue('display') : 'inline') ? ' ' : '';
                o += ''.concat(a).concat(t).concat(a);
            }),
            (0, n.kK)(e) && f)
        ) {
            var i = s(v(e, '::after'));
            o = ''.concat(o, ' ').concat(i);
        }
        return o;
    }
    function C(e, r) {
        if (t.has(e)) return '';
        if (
            (0, n.xO)(e, ['menu']) ||
            ((function (e, r) {
                if (!(0, n.kK)(e)) return !1;
                if (e.hasAttribute('hidden') || 'true' === e.getAttribute('aria-hidden')) return !0;
                var t = r(e);
                return 'none' === t.getPropertyValue('display') || 'hidden' === t.getPropertyValue('visibility');
            })(e, v) &&
                !r.isReferenced)
        )
            return t.add(e), '';
        var o = (0, n.SS)(e, 'aria-labelledby');
        if ('name' === p && !r.isReferenced && o.length > 0)
            return o
                .map(function (e) {
                    return C(e, {
                        isEmbeddedInLabel: r.isEmbeddedInLabel,
                        isReferenced: !0,
                        recursion: !1
                    });
                })
                .join(' ');
        var s = r.recursion && ((0, n.xO)(e, ['button', 'combobox', 'listbox', 'textbox']) || l(e, 'range')) && 'name' === p;
        if (!s) {
            var d = (((0, n.kK)(e) && e.getAttribute('aria-label')) || '').trim();
            if ('' !== d && 'name' === p) return t.add(e), d;
            if (!(0, n.xO)(e, ['none', 'presentation'])) {
                var c = (function (e) {
                    if (!(0, n.kK)(e)) return null;
                    function r(e, r) {
                        var a = e.getAttributeNode(r);
                        return null === a || t.has(a) || '' === a.value.trim() ? null : (t.add(a), a.value);
                    }
                    if ((0, n.zO)(e)) {
                        t.add(e);
                        for (var o = (0, a.Z)(e.childNodes), l = 0; l < o.length; l += 1) {
                            var i = o[l];
                            if ((0, n.CD)(i))
                                return C(i, {
                                    isEmbeddedInLabel: !1,
                                    isReferenced: !1,
                                    recursion: !1
                                });
                        }
                    } else if ((0, n.bS)(e)) {
                        t.add(e);
                        for (var s = (0, a.Z)(e.childNodes), d = 0; d < s.length; d += 1) {
                            var c = s[d];
                            if ((0, n.GD)(c))
                                return C(c, {
                                    isEmbeddedInLabel: !1,
                                    isReferenced: !1,
                                    recursion: !1
                                });
                        }
                    } else if ((0, n.r4)(e)) {
                        t.add(e);
                        for (var p = (0, a.Z)(e.childNodes), m = 0; m < p.length; m += 1) {
                            var f = p[m];
                            if ((0, n.$2)(f)) return f.textContent;
                        }
                        return null;
                    } else if ('img' === (0, n.$Q)(e) || 'area' === (0, n.$Q)(e)) {
                        var b = r(e, 'alt');
                        if (null !== b) return b;
                    } else if ((0, n.yR)(e)) {
                        var v = r(e, 'label');
                        if (null !== v) return v;
                    }
                    if ((0, n.LL)(e) && ('button' === e.type || 'submit' === e.type || 'reset' === e.type)) {
                        var h = r(e, 'value');
                        if (null !== h) return h;
                        if ('submit' === e.type) return 'Submit';
                        if ('reset' === e.type) return 'Reset';
                    }
                    var q = (function (e) {
                        var r = e.labels;
                        if (null === r) return r;
                        if (void 0 !== r) return (0, a.Z)(r);
                        if (!u(e)) return null;
                        var t = e.ownerDocument;
                        return (0, a.Z)(t.querySelectorAll('label')).filter(function (r) {
                            return (
                                (function (e) {
                                    if (void 0 !== e.control) return e.control;
                                    var r = e.getAttribute('for');
                                    return null !== r
                                        ? e.ownerDocument.getElementById(r)
                                        : (function e(r) {
                                              if (u(r)) return r;
                                              var t = null;
                                              return (
                                                  r.childNodes.forEach(function (r) {
                                                      if (null === t && (0, n.kK)(r)) {
                                                          var a = e(r);
                                                          null !== a && (t = a);
                                                      }
                                                  }),
                                                  t
                                              );
                                          })(e);
                                })(r) === e
                            );
                        });
                    })(e);
                    if (null !== q && 0 !== q.length)
                        return (
                            t.add(e),
                            (0, a.Z)(q)
                                .map(function (e) {
                                    return C(e, {
                                        isEmbeddedInLabel: !0,
                                        isReferenced: !1,
                                        recursion: !0
                                    });
                                })
                                .filter(function (e) {
                                    return e.length > 0;
                                })
                                .join(' ')
                        );
                    if ((0, n.LL)(e) && 'image' === e.type) {
                        var x = r(e, 'alt');
                        if (null !== x) return x;
                        var P = r(e, 'title');
                        return null !== P ? P : 'Submit Query';
                    }
                    return r(e, 'title');
                })(e);
                if (null !== c) return t.add(e), c;
            }
        }
        if (s || r.isEmbeddedInLabel || r.isReferenced) {
            if ((0, n.xO)(e, ['combobox', 'listbox'])) {
                t.add(e);
                var m = (0, n.RV)(e) ? e.selectedOptions || i(e, '[selected]') : i(e, '[aria-selected="true"]');
                return 0 === m.length
                    ? (0, n.LL)(e)
                        ? e.value
                        : ''
                    : (0, a.Z)(m)
                          .map(function (e) {
                              return C(e, {
                                  isEmbeddedInLabel: r.isEmbeddedInLabel,
                                  isReferenced: !1,
                                  recursion: !0
                              });
                          })
                          .join(' ');
            }
            if (l(e, 'range')) return (t.add(e), e.hasAttribute('aria-valuetext')) ? e.getAttribute('aria-valuetext') : e.hasAttribute('aria-valuenow') ? e.getAttribute('aria-valuenow') : e.getAttribute('value') || '';
            if ((0, n.xO)(e, ['textbox'])) return t.add(e), (0, n.LL)(e) || (0, n.ZH)(e) ? e.value : e.textContent || '';
        }
        if ((0, n.xO)(e, ['button', 'cell', 'checkbox', 'columnheader', 'gridcell', 'heading', 'label', 'legend', 'link', 'menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'radio', 'row', 'rowheader', 'switch', 'tab', 'tooltip', 'treeitem']) || ((0, n.kK)(e) && r.isReferenced) || (0, n.GD)(e))
            return (
                t.add(e),
                h(e, {
                    isEmbeddedInLabel: r.isEmbeddedInLabel,
                    isReferenced: !1
                })
            );
        if (e.nodeType === e.TEXT_NODE) return t.add(e), e.textContent || '';
        if (r.recursion)
            return (
                t.add(e),
                h(e, {
                    isEmbeddedInLabel: r.isEmbeddedInLabel,
                    isReferenced: !1
                })
            );
        var f = null;
        return null !== f ? (t.add(e), f) : (t.add(e), '');
    }
    return C(e, {
        isEmbeddedInLabel: !1,
        isReferenced: 'description' === p,
        recursion: !1
    })
        .trim()
        .replace(/\s\s+/g, ' ');
}
