let r;
n.d(t, {
    Jc: () => k,
    dx: () => M,
    tE: () => G
});
var i,
    o = n(192379),
    a = n(200651),
    s = Object.defineProperty,
    l = (e, t, n) =>
        t in e
            ? s(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n
              })
            : (e[t] = n),
    c = (e, t, n) => (l(e, 'symbol' != typeof t ? t + '' : t, n), n),
    u = { exports: {} };
!(function (e) {
    !(function () {
        var t = {}.hasOwnProperty;
        function n() {
            for (var e = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var o = typeof i;
                    if ('string' === o || 'number' === o) e.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var a = n.apply(null, i);
                            a && e.push(a);
                        }
                    } else if ('object' === o) {
                        if (i.toString !== Object.prototype.toString && !i.toString.toString().includes('[native code]')) {
                            e.push(i.toString());
                            continue;
                        }
                        for (var s in i) t.call(i, s) && i[s] && e.push(s);
                    }
                }
            }
            return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
})(u);
let d = u.exports;
var f = function (e, t, n, r, i, o, a, s) {
    if (!e) {
        var l;
        if (void 0 === t) l = Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
            var c = [n, r, i, o, a, s],
                u = 0;
            (l = Error(
                t.replace(/%s/g, function () {
                    return c[u++];
                })
            )).name = 'Invariant Violation';
        }
        throw ((l.framesToPop = 1), l);
    }
};
function _(e, t, n) {
    if (/%$/.test(t)) return 3 === n ? parseFloat(t) / 100 : (255 * parseFloat(t)) / 100;
    if ('h' === e[n]) {
        if (/turn$/.test(t)) return 360 * parseFloat(t);
        if (/rad$/.test(t)) return 57.3 * parseFloat(t);
    }
    return parseFloat(t);
}
function p({ hue: e, saturation: t, lightness: n, alpha: r }) {
    let i,
        o = (1 - Math.abs(2 * (n /= 255) - 1)) * (t /= 255),
        a = o * (1 - Math.abs(((e / 60) % 2) - 1)),
        s = n - o / 2,
        l = (i = e < 60 ? [o, a, 0] : e < 120 ? [a, o, 0] : e < 180 ? [0, o, a] : e < 240 ? [0, a, o] : e < 300 ? [a, 0, o] : [o, 0, a]).map((e) => Math.round((e + s) * 255));
    return {
        red: l[0],
        green: l[1],
        blue: l[2],
        alpha: r
    };
}
function h({ red: e, green: t, blue: n, alpha: r }) {
    let i = e / 255,
        o = t / 255,
        a = n / 255,
        s = Math.max(i, o, a),
        l = Math.min(i, o, a),
        c = s - l,
        u = (s + l) / 2,
        d = c > 0 ? c / (1 - Math.abs(2 * u - 1)) : 0;
    if (0 === c)
        return {
            hue: 0,
            saturation: d,
            lightness: u,
            alpha: r
        };
    let f = 0;
    switch (s) {
        case i:
            f = ((o - a) / c) % 6;
            break;
        case o:
            f = (a - i) / c + 2;
            break;
        case a:
            f = (o - a) / c + 4;
    }
    return {
        hue: 60 * f,
        saturation: d,
        lightness: u,
        alpha: r
    };
}
let m = /^#[0-9a-f]{3,8}$/i,
    g = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
class E {
    constructor(e, t, n, r) {
        (this.red = e), (this.green = t), (this.blue = n), (this.alpha = r);
    }
    toHexString() {
        let e = Math.round(this.red).toString(16),
            t = Math.round(this.green).toString(16),
            n = Math.round(this.blue).toString(16);
        return '#' + (this.red > 15.5 ? e : '0' + e) + (this.green > 15.5 ? t : '0' + t) + (this.blue > 15.5 ? n : '0' + n);
    }
    static parseString(e) {
        return e.match(g) ? this.parseColorFnString(e) : e.match(m) ? this.parseHexString(e) : void 0;
    }
    static parseRgbString(e) {
        return 'transparent' === e ? new E(0, 0, 0, 0) : this.parseColorFnString(e);
    }
    static parseHexString(e) {
        if (!e.match(m) || [6, 8].includes(e.length)) return;
        if ((e = e.replace('#', '')).length < 6) {
            let [t, n, r, i] = e.split('');
            (e = t + t + n + n + r + r), i && (e += i + i);
        }
        let t = e.match(/.{1,2}/g);
        if (null != t) return new E(parseInt(t[0], 16), parseInt(t[1], 16), parseInt(t[2], 16), null != t[3] ? parseInt(t[3], 16) / 255 : 1);
    }
    static parseColorFnString(e) {
        var t;
        let [, n, r] = null != (t = e.match(g)) ? t : [];
        if (!n || !r) return;
        let i = r
            .split(/\s*[,/\s]\s*/)
            .map((e) => e.replace(',', '').trim())
            .filter((e) => '' !== e)
            .map((e, t) => _(n, e, t));
        if ('hsl' === n.substr(0, 3)) {
            let e = p({
                hue: i[0],
                saturation: i[1],
                lightness: i[2],
                alpha: i[3]
            });
            return new E(e.red, e.green, e.blue, e.alpha);
        }
        return new E(i[0], i[1], i[2], 'number' == typeof i[3] ? i[3] : 1);
    }
    toHSL() {
        return h({
            red: this.red,
            green: this.green,
            blue: this.blue,
            alpha: this.alpha
        });
    }
    getRelativeLuminance() {
        let e = this.red / 255,
            t = this.green / 255,
            n = this.blue / 255;
        return 0.2126 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.7152 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
    }
}
function b(e, t) {
    let n = e.alpha,
        r = (1 - n) * t.red + n * e.red,
        i = (1 - n) * t.green + n * e.green;
    return new E(r, i, (1 - n) * t.blue + n * e.blue, e.alpha + t.alpha * (1 - e.alpha));
}
function y(e, t) {
    if (null == e) return 'var(--focus-primary)';
    let { saturation: n } = e.toHSL(),
        r = e.getRelativeLuminance();
    return n <= 0.4 ? 'var(--focus-primary)' : 'u' > typeof t ? (r < (t.brightnessTreshold || 0.2) ? 'var(--focus-light, rgba(255,255,255,0.7))' : 'var(--focus-dark, rgba(0, 0, 0, 0.85))') : 'rgba(255,255,255,0.7)';
}
function v(e) {
    let t = [];
    for (let n of e.styles.slice(1)) {
        let e = E.parseString(n.backgroundColor);
        if (null != e) {
            if (e.alpha > 0.95) return e;
            t.push(e);
        }
    }
    return t.push(new E(255, 255, 255, 1)), t.reduce(b);
}
let O = '--__adaptive-focus-ring-color',
    I = '--__adaptive-focus-ring-radius';
function S(e) {
    e !== r && (null == r || r.hide(), (r = e));
}
function T(e) {
    if (e) return parseInt(e) > 0 ? e : void 0;
}
class N {
    constructor() {
        c(this, 'targetElement'), c(this, 'targetAncestry'), c(this, 'boundingBox'), c(this, 'className'), c(this, 'offset', 0), c(this, 'zIndex'), c(this, 'container', null), c(this, 'themeOptions'), c(this, 'invalidate', () => null);
    }
    setContainer(e) {
        this.container = e;
    }
    setThemeOptions(e) {
        this.themeOptions = e;
    }
    showElement(e, t = {}) {
        var n;
        (this.targetElement = e), (this.targetAncestry = this.getElementAncestors(this.targetElement)), (this.boundingBox = void 0), (this.className = t.className), (this.offset = null != (n = t.offset) ? n : 0), (this.zIndex = t.zIndex), S(this), this.invalidate();
    }
    hide() {
        (this.targetElement = void 0), (this.targetAncestry = void 0), (this.boundingBox = void 0), (this.className = void 0), (this.offset = 0), (this.zIndex = void 0), this.invalidate();
    }
    get visible() {
        return null != this.targetElement || null != this.boundingBox;
    }
    getElementAncestors(e) {
        if (null == e)
            return {
                elements: [],
                styles: []
            };
        let t = [],
            n = [],
            r = e;
        for (; null != r; ) t.push(r), 'u' > typeof window && n.push(window.getComputedStyle(r)), (r = r.parentElement);
        return {
            elements: t,
            styles: n
        };
    }
    getNextZIndexForAncestry(e) {
        for (let t = 0; t < e.elements.length; t++) {
            let n = e.elements[t],
                r = parseInt(e.styles[t].getPropertyValue('z-index'));
            if (!isNaN(r)) return r + 1;
            if (n === this.container) break;
        }
    }
    getBorderRadius(e) {
        var t, n, r, i, o, a, s, l;
        let c = null != (n = T(null == (t = e.styles[0]) ? void 0 : t.borderTopLeftRadius)) ? n : '0',
            u = null != (i = T(null == (r = e.styles[0]) ? void 0 : r.borderTopRightRadius)) ? i : '0',
            d = null != (a = T(null == (o = e.styles[0]) ? void 0 : o.borderBottomRightRadius)) ? a : '0',
            f = null != (l = T(null == (s = e.styles[0]) ? void 0 : s.borderBottomLeftRadius)) ? l : '0';
        if ('0' !== c || '0' !== u || '0' !== d || '0' !== f) return `${c} ${u} ${d} ${f}`;
    }
    makePositionFromDOMRect(e) {
        var t, n, r, i;
        if (null == this.container) return {};
        let o = this.container.getBoundingClientRect(),
            { scrollTop: a, scrollLeft: s } = this.container,
            l = 0,
            c = 0,
            u = 0,
            d = 0;
        return (
            'number' == typeof this.offset ? ((l = this.offset), (c = this.offset), (u = this.offset), (d = this.offset)) : ((l = null != (t = this.offset.top) ? t : 0), (c = null != (n = this.offset.right) ? n : 0), (u = null != (r = this.offset.bottom) ? r : 0), (d = null != (i = this.offset.left) ? i : 0)),
            {
                top: a + e.top - o.top + l,
                width: e.width - (c + d),
                height: e.height - (u + l),
                left: s + e.left - o.left + d
            }
        );
    }
    getStyle() {
        var e;
        let t = {};
        if (
            (null != this.boundingBox &&
                (t = {
                    ...this.makePositionFromDOMRect(this.boundingBox),
                    zIndex: this.zIndex
                }),
            null != this.targetElement && null != this.targetAncestry)
        ) {
            let n = v(this.targetAncestry);
            t = {
                ...this.makePositionFromDOMRect(this.targetElement.getBoundingClientRect()),
                zIndex: null != (e = this.zIndex) ? e : this.getNextZIndexForAncestry(this.targetAncestry),
                [O]: y(n, this.themeOptions),
                [I]: this.getBorderRadius(this.targetAncestry)
            };
        }
        return t;
    }
}
let A = new N();
'u' > typeof window && A.setContainer(document.body);
let C = o.createContext(A);
var R = function (e, t, n, r) {
    var i = n ? n.call(r, e, t) : void 0;
    if (void 0 !== i) return !!i;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var o = Object.keys(e),
        a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
        var c = o[l];
        if (!s(c)) return !1;
        var u = e[c],
            d = t[c];
        if (!1 === (i = n ? n.call(r, u, d, c) : void 0) || (void 0 === i && u !== d)) return !1;
    }
    return !0;
};
let P = !1,
    w,
    D = {};
function L() {
    if (!P) return;
    let e = null == r ? void 0 : r.getStyle();
    null == e || R(e, D) ? null != w && cancelAnimationFrame(w) : ((D = e), null == r || r.invalidate()), (w = requestAnimationFrame(L));
}
let x = !1,
    M = {
        get ringsEnabled() {
            return x;
        },
        setRingsEnabled(e) {
            (x = e), null == r || r.invalidate();
        },
        enableAnimationTracking() {
            (P = !0), (w = requestAnimationFrame(L));
        },
        disableAnimationTracking() {
            (P = !1), null != w && cancelAnimationFrame(w);
        }
    };
function k(e) {
    let { containerRef: t, children: n, themeOptions: r } = e,
        i = o.useRef(new N());
    return (
        o.useEffect(() => {
            i.current.setContainer(t.current), i.current.setThemeOptions(r);
        }, [t.current]),
        (0, a.jsxs)(C.Provider, {
            value: i.current,
            children: [n, (0, a.jsx)(j, {})]
        })
    );
}
function j() {
    let e = o.useContext(C),
        [, t] = o.useState({});
    return (
        o.useEffect(
            () => (
                (e.invalidate = () => t({})),
                () => {
                    e.invalidate = () => null;
                }
            ),
            [e]
        ),
        M.ringsEnabled && e.visible
            ? (0, a.jsx)('div', {
                  className: d('focus-rings-ring', e.className),
                  style: e.getStyle()
              })
            : null
    );
}
let U = 'u' > typeof window && (null == (i = window.document) ? void 0 : i.createElement) != null ? o.useLayoutEffect : o.useEffect;
function G(e) {
    let { within: t = !1, enabled: n = !0, focused: r, offset: i = 0, focusTarget: a, ringTarget: s, ringClassName: l, focusClassName: c, focusWithinClassName: u, children: _ } = e;
    null != a && f(null != s, 'FocusRing was given a focusTarget but the required ringTarget was not provided. A ringTarget is required to avoid ambiguity of where the ring will be applied.'), null != r && f(null != s, 'FocusRing was given a controlled focused prop but no ringTarget to apply the ring to. A ringTarget is required since it cannot be inferred through regular focus events.');
    let p = o.useRef(!1),
        [h, m] = o.useState(!1),
        g = o.useContext(C),
        E = o.Children.only(_),
        { onBlur: b, onFocus: y, ...v } = E.props,
        O = o.useMemo(
            () => ({
                className: l,
                offset: i
            }),
            [l, i]
        );
    U(() => {
        n && g.invalidate();
    }),
        o.useEffect(() => {
            n || g.hide();
        }, [n, g]),
        o.useEffect(
            () => () => {
                p.current && g.hide();
            },
            [g]
        ),
        o.useEffect(() => {
            let e = null == s ? void 0 : s.current;
            null == r || null == e || ((p.current = r), r ? g.showElement(e, O) : !1 === r && g.hide());
        }, [r, O, g, s]),
        U(() => {
            if (null != r) return;
            let e = null == a ? void 0 : a.current,
                n = null == s ? void 0 : s.current;
            if (null != e && null != n)
                return (
                    e.addEventListener('focusin', i, !0),
                    e.addEventListener('focusout', o, !0),
                    () => {
                        e.removeEventListener('focusin', i, !0), e.removeEventListener('focusout', o, !0);
                    }
                );
            function i(e) {
                if (null != n) {
                    if (e.currentTarget === e.target) {
                        (p.current = !0), g.showElement(n, O);
                        return;
                    }
                    m(!0), t && g.showElement(n, O);
                }
            }
            function o() {
                g.hide(), (p.current = !1), m(!1);
            }
        }, [t, O, r, g, a, s]);
    let I = o.useCallback(
            (e) => {
                g.hide(), (p.current = !1), m(!1), null == b || b(e);
            },
            [b, g]
        ),
        S = o.useCallback(
            (e) => {
                let n = null == s ? void 0 : s.current;
                e.currentTarget === e.target ? ((p.current = !0), g.showElement(null != n ? n : e.currentTarget, O)) : (m(!0), t && g.showElement(null != n ? n : e.currentTarget, O)), null == y || y(e);
            },
            [s, t, y, g, O]
        );
    return n && null == a && null == r
        ? o.cloneElement(E, {
              ...v,
              className: d(v.className, p.current ? c : void 0, h ? u : void 0),
              onBlur: I,
              onFocus: S
          })
        : E;
}
