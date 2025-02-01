var i = n(201694).forEach;
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        r = e.stateHandler.getState;
    e.stateHandler.hasState;
    var a = e.idHandler;
    if (!n) throw Error('Missing required dependency: batchProcessor');
    if (!t) throw Error('Missing required dependency: reporter.');
    var s = d(),
        o = 'erd_scroll_detection_scrollbar_style',
        l = 'erd_scroll_detection_container';
    function u(e) {
        f(e, o, l);
    }
    function c(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    function d() {
        var e = 500,
            t = 500,
            n = document.createElement('div');
        n.style.cssText = c(['position: absolute', 'width: ' + 2 * e + 'px', 'height: ' + 2 * t + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0']);
        var i = document.createElement('div');
        (i.style.cssText = c(['position: absolute', 'width: ' + e + 'px', 'height: ' + t + 'px', 'overflow: scroll', 'visibility: none', 'top: ' + -(3 * e) + 'px', 'left: ' + -(3 * t) + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0'])), i.appendChild(n), document.body.insertBefore(i, document.body.firstChild);
        var r = e - i.clientWidth,
            a = t - i.clientHeight;
        return (
            document.body.removeChild(i),
            {
                width: r,
                height: a
            }
        );
    }
    function f(e, t, n) {
        function i(n, i) {
            i =
                i ||
                function (t) {
                    e.head.appendChild(t);
                };
            var r = e.createElement('style');
            return (r.innerHTML = n), (r.id = t), i(r), r;
        }
        if (!e.getElementById(t)) {
            var r = n + '_animation',
                a = n + '_animation_active',
                s = '/* Created by the element-resize-detector library. */\n';
            i((s += '.' + n + ' > div::-webkit-scrollbar { ' + c(['display: none']) + ' }\n\n' + ('.' + a + ' { ' + c(['-webkit-animation-duration: 0.1s', 'animation-duration: 0.1s', '-webkit-animation-name: ' + r, 'animation-name: ' + r])) + ' }\n' + ('@-webkit-keyframes ' + r) + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n' + ('@keyframes ' + r) + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }'));
        }
    }
    function _(e) {
        e.className += ' ' + l + '_animation_active';
    }
    function p(e, n, i) {
        if (e.addEventListener) e.addEventListener(n, i);
        else {
            if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + n, i);
        }
    }
    function h(e, n, i) {
        if (e.removeEventListener) e.removeEventListener(n, i);
        else {
            if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + n, i);
        }
    }
    function m(e) {
        return r(e).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function g(e) {
        return r(e).container.childNodes[0].childNodes[0].childNodes[1];
    }
    return (
        u(window.document),
        {
            makeDetectable: function (e, o, u) {
                function d() {
                    if (e.debug) {
                        var n = Array.prototype.slice.call(arguments);
                        if ((n.unshift(a.get(o), 'Scroll: '), t.log.apply)) t.log.apply(null, n);
                        else for (var i = 0; i < n.length; i++) t.log(n[i]);
                    }
                }
                function f(e) {
                    return (
                        !(function (e) {
                            var t = e.getRootNode && e.getRootNode().contains(e);
                            return e === e.ownerDocument.body || e.ownerDocument.body.contains(e) || t;
                        })(e) || null === window.getComputedStyle(e)
                    );
                }
                function h(e) {
                    var t = r(e).container.childNodes[0],
                        n = window.getComputedStyle(t);
                    return !n.width || -1 === n.width.indexOf('px');
                }
                function E() {
                    var e = window.getComputedStyle(o),
                        t = {};
                    return (t.position = e.position), (t.width = o.offsetWidth), (t.height = o.offsetHeight), (t.top = e.top), (t.right = e.right), (t.bottom = e.bottom), (t.left = e.left), (t.widthCSS = e.width), (t.heightCSS = e.height), t;
                }
                function v() {
                    var e = E();
                    (r(o).startSize = {
                        width: e.width,
                        height: e.height
                    }),
                        d('Element start size', r(o).startSize);
                }
                function y() {
                    r(o).listeners = [];
                }
                function I() {
                    if ((d('storeStyle invoked.'), !r(o))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = E();
                    r(o).style = e;
                }
                function T(e, t, n) {
                    (r(e).lastWidth = t), (r(e).lastHeight = n);
                }
                function b(e) {
                    return m(e).childNodes[0];
                }
                function S() {
                    return 2 * s.width + 1;
                }
                function A() {
                    return 2 * s.height + 1;
                }
                function N(e) {
                    return e + 10 + S();
                }
                function C(e) {
                    return e + 10 + A();
                }
                function R(e) {
                    return 2 * e + S();
                }
                function O(e) {
                    return 2 * e + A();
                }
                function D(e, t, n) {
                    var i = m(e),
                        r = g(e),
                        a = N(t),
                        s = C(n),
                        o = R(t),
                        l = O(n);
                    (i.scrollLeft = a), (i.scrollTop = s), (r.scrollLeft = o), (r.scrollTop = l);
                }
                function x() {
                    var e = r(o).container;
                    if (!e) {
                        ((e = document.createElement('div')).className = l), (e.style.cssText = c(['visibility: hidden', 'display: inline', 'width: 0px', 'height: 0px', 'z-index: -1', 'overflow: hidden', 'margin: 0', 'padding: 0'])), (r(o).container = e), _(e), o.appendChild(e);
                        var t = function () {
                            r(o).onRendered && r(o).onRendered();
                        };
                        p(e, 'animationstart', t), (r(o).onAnimationStart = t);
                    }
                    return e;
                }
                function L() {
                    function n() {
                        var n = r(o).style;
                        if ('static' === n.position) {
                            o.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var i = function (e, t, n, i) {
                                function r(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var a = n[i];
                                'auto' !== a && '0' !== r(a) && (e.warn('An element that is positioned static has style.' + i + '=' + a + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + i + ' will be set to 0. Element: ', t), (t.style[i] = 0));
                            };
                            i(t, o, n, 'top'), i(t, o, n, 'right'), i(t, o, n, 'bottom'), i(t, o, n, 'left');
                        }
                    }
                    function i(e, t, n, i) {
                        return ['left: ' + (e = e ? e + 'px' : '0'), 'top: ' + (t = t ? t + 'px' : '0'), 'right: ' + (i = i ? i + 'px' : '0'), 'bottom: ' + (n = n ? n + 'px' : '0')];
                    }
                    if ((d('Injecting elements'), !r(o))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    n();
                    var a = r(o).container;
                    a || (a = x());
                    var u = s.width,
                        f = s.height,
                        _ = c(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%', 'left: 0px', 'top: 0px']),
                        h = c(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden'].concat(i(-(1 + u), -(1 + f), -f, -u))),
                        m = c(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        g = c(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        E = c(['position: absolute', 'left: 0', 'top: 0']),
                        v = c(['position: absolute', 'width: 200%', 'height: 200%']),
                        y = document.createElement('div'),
                        I = document.createElement('div'),
                        T = document.createElement('div'),
                        b = document.createElement('div'),
                        S = document.createElement('div'),
                        A = document.createElement('div');
                    function N() {
                        var e = r(o);
                        e && e.onExpand ? e.onExpand() : d('Aborting expand scroll handler: element has been uninstalled');
                    }
                    function C() {
                        var e = r(o);
                        e && e.onShrink ? e.onShrink() : d('Aborting shrink scroll handler: element has been uninstalled');
                    }
                    (y.dir = 'ltr'), (y.style.cssText = _), (y.className = l), (I.className = l), (I.style.cssText = h), (T.style.cssText = m), (b.style.cssText = E), (S.style.cssText = g), (A.style.cssText = v), T.appendChild(b), S.appendChild(A), I.appendChild(T), I.appendChild(S), y.appendChild(I), a.appendChild(y), p(T, 'scroll', N), p(S, 'scroll', C), (r(o).onExpandScroll = N), (r(o).onShrinkScroll = C);
                }
                function P() {
                    function s(t, n, i) {
                        var r = b(t),
                            a = N(n),
                            s = C(i);
                        r.style.setProperty('width', a + 'px', e.important ? 'important' : ''), r.style.setProperty('height', s + 'px', e.important ? 'important' : '');
                    }
                    function l(i) {
                        var l = o.offsetWidth,
                            c = o.offsetHeight,
                            f = l !== r(o).lastWidth || c !== r(o).lastHeight;
                        d('Storing current size', l, c),
                            T(o, l, c),
                            n.add(0, function () {
                                if (f) {
                                    if (!r(o)) {
                                        d('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!u()) {
                                        d('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    if (e.debug) {
                                        var n = o.offsetWidth,
                                            i = o.offsetHeight;
                                        (n !== l || i !== c) && t.warn(a.get(o), 'Scroll: Size changed before updating detector elements.');
                                    }
                                    s(o, l, c);
                                }
                            }),
                            n.add(1, function () {
                                if (!r(o)) {
                                    d('Aborting because element has been uninstalled');
                                    return;
                                }
                                if (!u()) {
                                    d('Aborting because element container has not been initialized');
                                    return;
                                }
                                D(o, l, c);
                            }),
                            f &&
                                i &&
                                n.add(2, function () {
                                    if (!r(o)) {
                                        d('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!u()) {
                                        d('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    i();
                                });
                    }
                    function u() {
                        return !!r(o).container;
                    }
                    function c() {
                        function e() {
                            return void 0 === r(o).lastNotifiedWidth;
                        }
                        d('notifyListenersIfNeeded invoked');
                        var t = r(o);
                        return e() && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height
                            ? d('Not notifying: Size is the same as the start size, and there has been no notification yet.')
                            : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight
                              ? d('Not notifying: Size already notified')
                              : void (d('Current size not notified, notifying...'),
                                (t.lastNotifiedWidth = t.lastWidth),
                                (t.lastNotifiedHeight = t.lastHeight),
                                i(r(o).listeners, function (e) {
                                    e(o);
                                }));
                    }
                    function f() {
                        if ((d('startanimation triggered.'), h(o))) {
                            d('Ignoring since element is still unrendered...');
                            return;
                        }
                        d('Element rendered.');
                        var e = m(o),
                            t = g(o);
                        (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (d('Scrollbars out of sync. Updating detector elements...'), l(c));
                    }
                    function _() {
                        if ((d('Scroll detected.'), h(o))) {
                            d('Scroll event fired while unrendered. Ignoring...');
                            return;
                        }
                        l(c);
                    }
                    if ((d('registerListenersAndPositionElements invoked.'), !r(o))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    (r(o).onRendered = f), (r(o).onExpand = _), (r(o).onShrink = _);
                    var p = r(o).style;
                    s(o, p.width, p.height);
                }
                function w() {
                    if ((d('finalizeDomMutation invoked.'), !r(o))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = r(o).style;
                    T(o, e.width, e.height), D(o, e.width, e.height);
                }
                function M() {
                    u(o);
                }
                function k() {
                    d('Installing...'), y(), v(), n.add(0, I), n.add(1, L), n.add(2, P), n.add(3, w), n.add(4, M);
                }
                u || ((u = o), (o = e), (e = null)),
                    (e = e || {}),
                    d('Making detectable...'),
                    f(o)
                        ? (d('Element is detached'),
                          x(),
                          d('Waiting until element is attached...'),
                          (r(o).onRendered = function () {
                              d('Element is now attached'), k();
                          }))
                        : k();
            },
            addListener: function (e, t) {
                if (!r(e).listeners.push) throw Error('Cannot add listener to an element that is not detectable.');
                r(e).listeners.push(t);
            },
            uninstall: function (e) {
                var t = r(e);
                t && (t.onExpandScroll && h(m(e), 'scroll', t.onExpandScroll), t.onShrinkScroll && h(g(e), 'scroll', t.onShrinkScroll), t.onAnimationStart && h(t.container, 'animationstart', t.onAnimationStart), t.container && e.removeChild(t.container));
            },
            initDocument: u
        }
    );
};
