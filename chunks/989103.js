r.d(n, {
    Em: function () {
        return p;
    },
    Kx: function () {
        return c;
    },
    _P: function () {
        return d;
    },
    eg: function () {
        return _;
    },
    is: function () {
        return E;
    },
    l8: function () {
        return f;
    },
    s: function () {
        return h;
    }
});
var i = r(192379);
function a(e) {
    return null != e.hasChildItems ? e.hasChildItems : !!(e.childItems || (e.title && i.Children.count(e.children) > 0)) || !1;
}
(function e(e) {
    return null;
}).getCollectionNode = function* (e, n) {
    let { childItems: r, title: o, children: s } = e,
        l = e.title || e.children,
        u = e.textValue || ('string' == typeof l ? l : '') || e['aria-label'] || '';
    !u && !(null == n ? void 0 : n.suppressTextValueWarning) && console.warn('<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.'),
        yield {
            type: 'item',
            props: e,
            rendered: l,
            textValue: u,
            'aria-label': e['aria-label'],
            hasChildNodes: a(e),
            *childNodes() {
                if (r)
                    for (let e of r)
                        yield {
                            type: 'item',
                            value: e
                        };
                else if (o) {
                    let e = [];
                    i.Children.forEach(s, (n) => {
                        e.push({
                            type: 'item',
                            element: n
                        });
                    }),
                        yield* e;
                }
            }
        };
};
(function e(e) {
    return null;
}).getCollectionNode = function* (e) {
    let { children: n, title: r, items: a } = e;
    yield {
        type: 'section',
        props: e,
        hasChildNodes: !0,
        rendered: r,
        'aria-label': e['aria-label'],
        *childNodes() {
            if ('function' == typeof n) {
                if (!a) throw Error('props.children was a function but props.items is missing');
                for (let e of a)
                    yield {
                        type: 'item',
                        value: e,
                        renderer: n
                    };
            } else {
                let e = [];
                i.Children.forEach(n, (n) => {
                    e.push({
                        type: 'item',
                        element: n
                    });
                }),
                    yield* e;
            }
        }
    };
};
class o {
    build(e, n) {
        return (this.context = n), s(() => this.iterateCollection(e));
    }
    *iterateCollection(e) {
        let { children: n, items: r } = e;
        if ('function' == typeof n) {
            if (!r) throw Error('props.children was a function but props.items is missing');
            for (let r of e.items) yield* this.getFullNode({ value: r }, { renderer: n });
        } else {
            let e = [];
            i.Children.forEach(n, (n) => {
                e.push(n);
            });
            let r = 0;
            for (let n of e)
                for (let e of this.getFullNode(
                    {
                        element: n,
                        index: r
                    },
                    {}
                ))
                    r++, yield e;
        }
    }
    getKey(e, n, r, i) {
        if (null != e.key) return e.key;
        if ('cell' === n.type && null != n.key) return `${i}${n.key}`;
        let a = n.value;
        if (null != a) {
            var o;
            let e = null !== (o = a.key) && void 0 !== o ? o : a.id;
            if (null == e) throw Error('No key found for item');
            return e;
        }
        return i ? `${i}.${n.index}` : `$.${n.index}`;
    }
    getChildState(e, n) {
        return { renderer: n.renderer || e.renderer };
    }
    *getFullNode(e, n, r, a) {
        let o = e.element;
        if (!o && e.value && n && n.renderer) {
            let r = this.cache.get(e.value);
            if (r && (!r.shouldInvalidate || !r.shouldInvalidate(this.context))) {
                (r.index = e.index), (r.parentKey = a ? a.key : null), yield r;
                return;
            }
            o = n.renderer(e.value);
        }
        if (i.isValidElement(o)) {
            let i = o.type;
            if ('function' != typeof i && 'function' != typeof i.getCollectionNode) {
                let e = 'function' == typeof o.type ? o.type.name : o.type;
                throw Error(`Unknown element <${e}> in collection.`);
            }
            let s = i.getCollectionNode(o.props, this.context),
                c = e.index,
                d = s.next();
            for (; !d.done && d.value; ) {
                let i = d.value;
                e.index = c;
                let f = i.key;
                !f && (f = i.element ? null : this.getKey(o, e, n, r));
                let p = [
                    ...this.getFullNode(
                        {
                            ...i,
                            key: f,
                            index: c,
                            wrapper: l(e.wrapper, i.wrapper)
                        },
                        this.getChildState(n, i),
                        r ? `${r}${o.key}` : o.key,
                        a
                    )
                ];
                for (let n of p) {
                    if (((n.value = i.value || e.value), n.value && this.cache.set(n.value, n), e.type && n.type !== e.type)) throw Error(`Unsupported type <${u(n.type)}> in <${u(a.type)}>. Only <${u(e.type)}> is supported.`);
                    c++, yield n;
                }
                d = s.next(p);
            }
            return;
        }
        if (null == e.key) return;
        let c = this,
            d = {
                type: e.type,
                props: e.props,
                key: e.key,
                parentKey: a ? a.key : null,
                value: e.value,
                level: a ? a.level + 1 : 0,
                index: e.index,
                rendered: e.rendered,
                textValue: e.textValue,
                'aria-label': e['aria-label'],
                wrapper: e.wrapper,
                shouldInvalidate: e.shouldInvalidate,
                hasChildNodes: e.hasChildNodes,
                childNodes: s(function* () {
                    if (!e.hasChildNodes) return;
                    let r = 0;
                    for (let i of e.childNodes()) for (let e of (null != i.key && (i.key = `${d.key}${i.key}`), (i.index = r), c.getFullNode(i, c.getChildState(n, i), d.key, d))) r++, yield e;
                })
            };
        yield d;
    }
    constructor() {
        this.cache = new WeakMap();
    }
}
function s(e) {
    let n = [],
        r = null;
    return {
        *[Symbol.iterator]() {
            for (let e of n) yield e;
            for (let i of (!r && (r = e()), r)) n.push(i), yield i;
        }
    };
}
function l(e, n) {
    return e && n ? (r) => e(n(r)) : e ? e : n ? n : void 0;
}
function u(e) {
    return e[0].toUpperCase() + e.slice(1);
}
function c(e, n, r) {
    let a = (0, i.useMemo)(() => new o(), []),
        { children: s, items: l, collection: u } = e;
    return (0, i.useMemo)(
        () =>
            u
                ? u
                : n(
                      a.build(
                          {
                              children: s,
                              items: l
                          },
                          r
                      )
                  ),
        [a, s, l, u, r, n]
    );
}
function d(e, n) {
    return 'function' == typeof n.getChildren ? n.getChildren(e.key) : e.childNodes;
}
function f(e) {
    return p(e, 0);
}
function p(e, n) {
    if (n < 0) return;
    let r = 0;
    for (let i of e) {
        if (r === n) return i;
        r++;
    }
}
function h(e) {
    let n;
    for (let r of e) n = r;
    return n;
}
function _(e, n, r) {
    if (n.parentKey === r.parentKey) return n.index - r.index;
    let i = [...m(e, n), n],
        a = [...m(e, r), r],
        o = i.slice(0, a.length).findIndex((e, n) => e !== a[n]);
    return -1 !== o ? ((n = i[o]), (r = a[o]), n.index - r.index) : i.findIndex((e) => e === r) >= 0 ? 1 : (a.findIndex((e) => e === n), -1);
}
function m(e, n) {
    let r = [];
    for (; (null == n ? void 0 : n.parentKey) != null; ) (n = e.getItem(n.parentKey)), r.unshift(n);
    return r;
}
let g = new WeakMap();
function E(e) {
    let n = g.get(e);
    if (null != n) return n;
    n = 0;
    let r = (i) => {
        for (let a of i) 'section' === a.type ? r(d(a, e)) : n++;
    };
    return r(e), g.set(e, n), n;
}
