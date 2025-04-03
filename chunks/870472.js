n.d(t, {
    Q: () => c,
    V: () => o
}),
    n(47120),
    n(653041),
    n(301563),
    n(566702),
    n(177593);
var r = n(192379),
    i = n(348327),
    s = n.n(i),
    a = n(995295),
    l = n(596390);
function o(e) {
    let [t, n] = r.useState([e]),
        [i, a] = r.useState(0),
        l = r.useMemo(() => t[i], [t, i]),
        o = r.useCallback(
            (e) => {
                let r = e(l);
                if (s()(l, r)) return;
                let o = t.slice(0, i + 1);
                o.push(r), n(o), a(o.length - 1);
            },
            [i, l, t]
        );
    return {
        state: l,
        setState: o,
        goBack: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.max(0, i - e);
                return a(n), t[n];
            },
            [i, t]
        ),
        goForward: r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    n = Math.min(t.length - 1, i + e);
                return a(n), t[n];
            },
            [i, t]
        )
    };
}
function c(e, t) {
    let { scrollerRef: n, mainInputRef: i, mainContainerRef: s } = t,
        {
            state: { value: o, tags: c, selections: d },
            setState: u,
            goBack: m,
            goForward: g
        } = e;
    r.useLayoutEffect(() => {
        let e = (e) => (t) => {
                ('Meta' === t.key || 'Control' === t.key) &&
                    u((t) => {
                        var n, r;
                        return (
                            (n = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (r = r = { isSelecting: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n
                        );
                    });
            },
            t = e(!0),
            n = e(!1);
        return (
            document.addEventListener('keydown', t),
            document.addEventListener('keyup', n),
            () => {
                document.removeEventListener('keydown', t), document.removeEventListener('keyup', n);
            }
        );
    }, [u]);
    let p = r.useCallback(
            (e) => {
                var t, r;
                let i = (null != (r = e.clipboardData.getData('text')) ? r : '')
                    .split(l.uz)
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0);
                i.length <= 1 ||
                    ((0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: [...t, ...i],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                    e.preventDefault(),
                    e.stopPropagation(),
                    null == (t = n.current) || t.scrollToBottom());
            },
            [u, n]
        ),
        h = r.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: r } = t;
                    return {
                        value: r,
                        tags: [...n.filter((t, n) => n !== e)],
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [u]
        ),
        f = r.useCallback(
            (e) => (t) => {
                u((n) => {
                    let { tags: r, value: i } = n,
                        s = [...r];
                    return (
                        (s[e] = t),
                        {
                            value: i,
                            tags: s,
                            selections: [],
                            isSelecting: !1
                        }
                    );
                });
            },
            [u]
        ),
        b = r.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n, value: r, selections: i, isSelecting: s } = t;
                    return {
                        value: r,
                        tags: n,
                        selections: [...i, n[e]],
                        isSelecting: s
                    };
                });
            },
            [u]
        ),
        x = r.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                u((n) => {
                    let { tags: r, value: i, selections: s, isSelecting: a } = n;
                    return {
                        value: i,
                        tags: r,
                        selections: t ? [] : s.filter((t) => t !== r[e]),
                        isSelecting: a
                    };
                });
            },
            [u]
        ),
        j = r.useCallback(
            (e) => {
                var t;
                u((e) => {
                    let { tags: t, value: n } = e;
                    return {
                        value: n,
                        tags: t,
                        selections: [],
                        isSelecting: !1
                    };
                }),
                    null != e && (e.preventDefault(), e.stopPropagation()),
                    null == (t = i.current) || t.focus();
            },
            [i, u]
        ),
        N = r.useCallback(
            (e) => {
                u((t) => {
                    let { tags: n } = t;
                    return {
                        value: e.target.value,
                        tags: n,
                        selections: [],
                        isSelecting: !1
                    };
                });
            },
            [u]
        ),
        _ = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                !(o.trim().length <= 0) &&
                    ((0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t } = e;
                            return {
                                value: '',
                                tags: [...t, o],
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                    r && null != n.current && n.current.scrollToBottom(),
                    t && (e.preventDefault(), e.stopPropagation()));
            },
            [n, u, o]
        ),
        v = r.useCallback(
            (e) => {
                let t = o.trim().length <= 0;
                if (d.length > 0) {
                    var n;
                    (0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n, selections: r } = e;
                            return {
                                value: n,
                                tags: t.filter((e) => !r.includes(e)),
                                selections: [],
                                isSelecting: !1
                            };
                        });
                    }),
                        null == (n = i.current) || n.focus(),
                        e.preventDefault(),
                        e.stopPropagation();
                } else
                    t &&
                        ((0, a.flushSync)(() => {
                            u((e) => {
                                let { tags: t } = e,
                                    n = [...t],
                                    r = n.pop();
                                return {
                                    value: null != r ? r : '',
                                    tags: [...n],
                                    selections: [],
                                    isSelecting: !1
                                };
                            });
                        }),
                        e.preventDefault(),
                        e.stopPropagation());
            },
            [i, d.length, u, o]
        ),
        C = r.useCallback(
            (e) => {
                var t, n, r, s;
                let a = e.metaKey || e.ctrlKey;
                'z' === e.key && a ? (m().selections.length > 0 ? null == (t = i.current) || t.blur() : null == (n = i.current) || n.focus(), e.preventDefault(), e.stopPropagation()) : 'y' === e.key && a && (g().selections.length > 0 ? null == (r = i.current) || r.blur() : null == (s = i.current) || s.focus(), e.preventDefault(), e.stopPropagation());
            },
            [m, g, i]
        ),
        O = r.useCallback(
            (e) => {
                var t;
                let n = o.trim().length > 0,
                    { selectionStart: r = 0, selectionEnd: l = 0 } = null != (t = i.current) ? t : {};
                0 === c.length ||
                    (n && r === l) ||
                    ((0, a.flushSync)(() => {
                        u((e) => {
                            let { tags: t, value: n } = e;
                            return {
                                value: n,
                                tags: t,
                                selections: [...t],
                                isSelecting: !1
                            };
                        });
                    }),
                    setImmediate(() => {
                        var e;
                        null == (e = i.current) || e.blur(),
                            setTimeout(() => {
                                var e;
                                null == (e = s.current) || e.focus();
                            }, 16);
                    }),
                    e.preventDefault(),
                    e.stopPropagation());
            },
            [s, i, u, c.length, o]
        ),
        y = r.useCallback(
            (e) => {
                e.relatedTarget !== e.currentTarget && _(e, !1, !1);
            },
            [_]
        );
    return {
        handlePasteEvent: p,
        handleInputChange: N,
        handleKeyDown: r.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                'Meta' !== e.key && (l.ye.has(e.key) ? _(e) : 'Backspace' === e.key ? v(e) : 'Escape' === e.key ? j(e) : 'a' === e.key && t ? O(e) : l.Bd.has(e.key) && t && C(e));
            },
            [_, v, j, O, C]
        ),
        handleContainerKeyUp: r.useCallback(
            (e) => {
                if (document.activeElement !== s.current) return;
                let t = e.metaKey || e.ctrlKey;
                'Backspace' === e.key ? v(e) : 'a' === e.key && t ? O(e) : 'Escape' === e.key ? j(e) : l.Bd.has(e.key) && t ? C(e) : 'Meta' !== e.key && j(e);
            },
            [C, v, O, j, s]
        ),
        handleRemoveTag: h,
        handleTagChangeEvent: f,
        handleSelectTag: b,
        handleUnselectTag: x,
        handleResetTagSelections: j,
        handleInputBlurEvent: y
    };
}
