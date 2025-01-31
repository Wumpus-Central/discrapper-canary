n.d(t, {
    B: () => r,
    Z: () => m
}),
    n(653041),
    n(47120),
    n(411104);
var i = n(536895),
    r = (function (e) {
        return (e.UPDATE_ITEMS = 'UPDATE_ITEMS'), (e.SET_FOCUS_PATH = 'SET_FOCUS_PATH'), e;
    })({});
function a(e, t) {
    return e.findIndex((e) => t === e.key);
}
function s(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function o(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let i = a(t, e.focusPath[n]);
        t = t[i].children;
    }
    return t;
}
function l(e, t) {
    let n = e,
        i = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let r = t[e],
            s = a(n, r);
        if (s < 0 || s >= n.length) {
            let e = n[0];
            null != e && i.push(e.key);
            break;
        }
        i.push(r), (n = n[s].children);
    }
    return i;
}
function u(e, t) {
    let { items: n } = t,
        i = {
            ...e,
            items: n,
            focusPath: l(n, e.focusPath)
        };
    return {
        ...i,
        focusIndex: h(i)
    };
}
function c(e, t) {
    let { path: n } = t,
        i = {
            ...e,
            focusPath: l(e.items, n)
        };
    return {
        ...i,
        focusIndex: h(i)
    };
}
function d(e, t) {
    let n = s(e),
        i = o(e);
    if (null == i) return e;
    let r = (a(i, n) - 1) % i.length;
    if ((r < 0 && (r = i.length - 1), null == i[r])) return e;
    let l = {
        ...e,
        focusPath: [...e.focusPath.slice(0, -1), i[r].key]
    };
    return {
        ...l,
        focusIndex: h(l)
    };
}
function f(e, t) {
    let n = s(e),
        i = o(e);
    if (null == i) return e;
    let r = (a(i, n) + 1) % i.length;
    if (null == i[r]) return e;
    let l = {
        ...e,
        focusPath: [...e.focusPath.slice(0, -1), i[r].key]
    };
    return {
        ...l,
        focusIndex: h(l)
    };
}
function _(e, t) {
    var n;
    let i = s(e),
        r = o(e);
    if (null == r) return e;
    let l = r[a(r, i)],
        u = null == l ? void 0 : null === (n = l.children) || void 0 === n ? void 0 : n[0];
    if (null == u) return e;
    let c = {
        ...e,
        focusPath: [...e.focusPath, u.key]
    };
    return {
        ...c,
        focusIndex: h(c)
    };
}
function p(e, t) {
    if (e.focusPath.length <= 1) return e;
    let n = {
        ...e,
        focusPath: e.focusPath.slice(0, -1)
    };
    return {
        ...n,
        focusIndex: h(n)
    };
}
function h(e) {
    let t = s(e),
        n = o(e);
    return null == n ? -1 : a(n, t);
}
function m(e, t) {
    switch (t.type) {
        case i.Us.NAVIGATE_UP:
            return d(e, t);
        case i.Us.NAVIGATE_DOWN:
            return f(e, t);
        case i.Us.NAVIGATE_IN:
            return _(e, t);
        case i.Us.NAVIGATE_OUT:
            return p(e, t);
        case 'UPDATE_ITEMS':
            return u(e, t);
        case 'SET_FOCUS_PATH':
            return c(e, t);
        case i.Us.SELECT_FOCUSED_ITEM:
            break;
        default:
            throw Error('Menu navigator was given an unhandled action '.concat(t.type));
    }
    return e;
}
