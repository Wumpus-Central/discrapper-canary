r.d(n, {
    B: function () {
        return i;
    },
    Z: function () {
        return y;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(411104);
var l = r(536895);
function u(e, n) {
    return e.findIndex((e) => n === e.key);
}
function c(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function d(e) {
    let n = e.items;
    for (let r = 0; r < e.focusPath.length - 1; r++) {
        if (null == n) return;
        let i = u(n, e.focusPath[r]);
        n = n[i].children;
    }
    return n;
}
function f(e, n) {
    let r = e,
        i = [];
    for (let e = 0; e < n.length && null != r; e++) {
        let a = n[e],
            o = u(r, a);
        if (o < 0 || o >= r.length) {
            let e = r[0];
            null != e && i.push(e.key);
            break;
        }
        i.push(a), (r = r[o].children);
    }
    return i;
}
function p(e, n) {
    let { items: r } = n,
        i = {
            ...e,
            items: r,
            focusPath: f(r, e.focusPath)
        };
    return {
        ...i,
        focusIndex: v(i)
    };
}
function h(e, n) {
    let { path: r } = n,
        i = {
            ...e,
            focusPath: f(e.items, r)
        };
    return {
        ...i,
        focusIndex: v(i)
    };
}
function _(e, n) {
    let r = c(e),
        i = d(e);
    if (null == i) return e;
    let a = (u(i, r) - 1) % i.length;
    if ((a < 0 && (a = i.length - 1), null == i[a])) return e;
    let o = {
        ...e,
        focusPath: [...e.focusPath.slice(0, -1), i[a].key]
    };
    return {
        ...o,
        focusIndex: v(o)
    };
}
function m(e, n) {
    let r = c(e),
        i = d(e);
    if (null == i) return e;
    let a = (u(i, r) + 1) % i.length;
    if (null == i[a]) return e;
    let o = {
        ...e,
        focusPath: [...e.focusPath.slice(0, -1), i[a].key]
    };
    return {
        ...o,
        focusIndex: v(o)
    };
}
function g(e, n) {
    var r;
    let i = c(e),
        a = d(e);
    if (null == a) return e;
    let o = a[u(a, i)],
        s = null == o ? void 0 : null === (r = o.children) || void 0 === r ? void 0 : r[0];
    if (null == s) return e;
    let l = {
        ...e,
        focusPath: [...e.focusPath, s.key]
    };
    return {
        ...l,
        focusIndex: v(l)
    };
}
function E(e, n) {
    if (e.focusPath.length <= 1) return e;
    let r = {
        ...e,
        focusPath: e.focusPath.slice(0, -1)
    };
    return {
        ...r,
        focusIndex: v(r)
    };
}
function v(e) {
    let n = c(e),
        r = d(e);
    return null == r ? -1 : u(r, n);
}
function y(e, n) {
    switch (n.type) {
        case l.Us.NAVIGATE_UP:
            return _(e, n);
        case l.Us.NAVIGATE_DOWN:
            return m(e, n);
        case l.Us.NAVIGATE_IN:
            return g(e, n);
        case l.Us.NAVIGATE_OUT:
            return E(e, n);
        case 'UPDATE_ITEMS':
            return p(e, n);
        case 'SET_FOCUS_PATH':
            return h(e, n);
        case l.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            throw Error('Menu navigator was given an unhandled action '.concat(n.type));
    }
    return e;
}
!(function (e) {
    (e.UPDATE_ITEMS = 'UPDATE_ITEMS'), (e.SET_FOCUS_PATH = 'SET_FOCUS_PATH');
})(i || (i = {}));
