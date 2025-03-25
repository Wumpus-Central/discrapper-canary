var r = n(201694).forEach;
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        i = e.stateHandler.getState;
    e.stateHandler.hasState;
    var o = e.idHandler;
    if (!n) throw Error('Missing required dependency: batchProcessor');
    if (!t) throw Error('Missing required dependency: reporter.');
    var a = d(),
        s = 'erd_scroll_detection_scrollbar_style',
        l = 'erd_scroll_detection_container';
    function c(e) {
        f(e, s, l);
    }
    function u(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    function d() {
        var e = 500,
            t = 500,
            n = document.createElement('div');
        n.style.cssText = u(['position: absolute', 'width: ' + 2 * e + 'px', 'height: ' + 2 * t + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0']);
        var r = document.createElement('div');
        (r.style.cssText = u(['position: absolute', 'width: ' + e + 'px', 'height: ' + t + 'px', 'overflow: scroll', 'visibility: none', 'top: ' + -(3 * e) + 'px', 'left: ' + -(3 * t) + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0'])), r.appendChild(n), document.body.insertBefore(r, document.body.firstChild);
        var i = e - r.clientWidth,
            o = t - r.clientHeight;
        return (
            document.body.removeChild(r),
            {
                width: i,
                height: o
            }
        );
    }
    function f(e, t, n) {
        function r(n, r) {
            r =
                r ||
                function (t) {
                    e.head.appendChild(t);
                };
            var i = e.createElement('style');
            return (i.innerHTML = n), (i.id = t), r(i), i;
        }
        if (!e.getElementById(t)) {
            var i = n + '_animation',
                o = n + '_animation_active',
                a = '/* Created by the element-resize-detector library. */\n';
            r((a += '.' + n + ' > div::-webkit-scrollbar { ' + u(['display: none']) + ' }\n\n' + ('.' + o + ' { ' + u(['-webkit-animation-duration: 0.1s', 'animation-duration: 0.1s', '-webkit-animation-name: ' + i, 'animation-name: ' + i])) + ' }\n' + ('@-webkit-keyframes ' + i) + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n' + ('@keyframes ' + i) + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }'));
        }
    }
    function _(e) {
        e.className += ' ' + l + '_animation_active';
    }
    function p(e, n, r) {
        if (e.addEventListener) e.addEventListener(n, r);
        else {
            if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + n, r);
        }
    }
    function h(e, n, r) {
        if (e.removeEventListener) e.removeEventListener(n, r);
        else {
            if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + n, r);
        }
    }
    function m(e) {
        return i(e).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function g(e) {
        return i(e).container.childNodes[0].childNodes[0].childNodes[1];
    }
    return (
        c(window.document),
        {
            makeDetectable: function (e, s, c) {
                function d() {
                    if (e.debug) {
                        var n = Array.prototype.slice.call(arguments);
                        if ((n.unshift(o.get(s), 'Scroll: '), t.log.apply)) t.log.apply(null, n);
                        else for (var r = 0; r < n.length; r++) t.log(n[r]);
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
                    var t = i(e).container.childNodes[0],
                        n = window.getComputedStyle(t);
                    return !n.width || -1 === n.width.indexOf('px');
                }
                function E() {
                    var e = window.getComputedStyle(s),
                        t = {};
                    return (t.position = e.position), (t.width = s.offsetWidth), (t.height = s.offsetHeight), (t.top = e.top), (t.right = e.right), (t.bottom = e.bottom), (t.left = e.left), (t.widthCSS = e.width), (t.heightCSS = e.height), t;
                }
                function b() {
                    var e = E();
                    (i(s).startSize = {
                        width: e.width,
                        height: e.height
                    }),
                        d('Element start size', i(s).startSize);
                }
                function v() {
                    i(s).listeners = [];
                }
                function y() {
                    if ((d('storeStyle invoked.'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = E();
                    i(s).style = e;
                }
                function O(e, t, n) {
                    (i(e).lastWidth = t), (i(e).lastHeight = n);
                }
                function I(e) {
                    return m(e).childNodes[0];
                }
                function S() {
                    return 2 * a.width + 1;
                }
                function T() {
                    return 2 * a.height + 1;
                }
                function A(e) {
                    return e + 10 + S();
                }
                function N(e) {
                    return e + 10 + T();
                }
                function C(e) {
                    return 2 * e + S();
                }
                function R(e) {
                    return 2 * e + T();
                }
                function P(e, t, n) {
                    var r = m(e),
                        i = g(e),
                        o = A(t),
                        a = N(n),
                        s = C(t),
                        l = R(n);
                    (r.scrollLeft = o), (r.scrollTop = a), (i.scrollLeft = s), (i.scrollTop = l);
                }
                function w() {
                    var e = i(s).container;
                    if (!e) {
                        ((e = document.createElement('div')).className = l), (e.style.cssText = u(['visibility: hidden', 'display: inline', 'width: 0px', 'height: 0px', 'z-index: -1', 'overflow: hidden', 'margin: 0', 'padding: 0'])), (i(s).container = e), _(e), s.appendChild(e);
                        var t = function () {
                            i(s).onRendered && i(s).onRendered();
                        };
                        p(e, 'animationstart', t), (i(s).onAnimationStart = t);
                    }
                    return e;
                }
                function D() {
                    function n() {
                        var n = i(s).style;
                        if ('static' === n.position) {
                            s.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var r = function (e, t, n, r) {
                                function i(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var o = n[r];
                                'auto' !== o && '0' !== i(o) && (e.warn('An element that is positioned static has style.' + r + '=' + o + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + r + ' will be set to 0. Element: ', t), (t.style[r] = 0));
                            };
                            r(t, s, n, 'top'), r(t, s, n, 'right'), r(t, s, n, 'bottom'), r(t, s, n, 'left');
                        }
                    }
                    function r(e, t, n, r) {
                        return ['left: ' + (e = e ? e + 'px' : '0'), 'top: ' + (t = t ? t + 'px' : '0'), 'right: ' + (r = r ? r + 'px' : '0'), 'bottom: ' + (n = n ? n + 'px' : '0')];
                    }
                    if ((d('Injecting elements'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    n();
                    var o = i(s).container;
                    o || (o = w());
                    var c = a.width,
                        f = a.height,
                        _ = u(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%', 'left: 0px', 'top: 0px']),
                        h = u(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden'].concat(r(-(1 + c), -(1 + f), -f, -c))),
                        m = u(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        g = u(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        E = u(['position: absolute', 'left: 0', 'top: 0']),
                        b = u(['position: absolute', 'width: 200%', 'height: 200%']),
                        v = document.createElement('div'),
                        y = document.createElement('div'),
                        O = document.createElement('div'),
                        I = document.createElement('div'),
                        S = document.createElement('div'),
                        T = document.createElement('div');
                    function A() {
                        var e = i(s);
                        e && e.onExpand ? e.onExpand() : d('Aborting expand scroll handler: element has been uninstalled');
                    }
                    function N() {
                        var e = i(s);
                        e && e.onShrink ? e.onShrink() : d('Aborting shrink scroll handler: element has been uninstalled');
                    }
                    (v.dir = 'ltr'), (v.style.cssText = _), (v.className = l), (y.className = l), (y.style.cssText = h), (O.style.cssText = m), (I.style.cssText = E), (S.style.cssText = g), (T.style.cssText = b), O.appendChild(I), S.appendChild(T), y.appendChild(O), y.appendChild(S), v.appendChild(y), o.appendChild(v), p(O, 'scroll', A), p(S, 'scroll', N), (i(s).onExpandScroll = A), (i(s).onShrinkScroll = N);
                }
                function L() {
                    function a(t, n, r) {
                        var i = I(t),
                            o = A(n),
                            a = N(r);
                        i.style.setProperty('width', o + 'px', e.important ? 'important' : ''), i.style.setProperty('height', a + 'px', e.important ? 'important' : '');
                    }
                    function l(r) {
                        var l = s.offsetWidth,
                            u = s.offsetHeight,
                            f = l !== i(s).lastWidth || u !== i(s).lastHeight;
                        d('Storing current size', l, u),
                            O(s, l, u),
                            n.add(0, function () {
                                if (f) {
                                    if (!i(s)) {
                                        d('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!c()) {
                                        d('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    if (e.debug) {
                                        var n = s.offsetWidth,
                                            r = s.offsetHeight;
                                        (n !== l || r !== u) && t.warn(o.get(s), 'Scroll: Size changed before updating detector elements.');
                                    }
                                    a(s, l, u);
                                }
                            }),
                            n.add(1, function () {
                                if (!i(s)) {
                                    d('Aborting because element has been uninstalled');
                                    return;
                                }
                                if (!c()) {
                                    d('Aborting because element container has not been initialized');
                                    return;
                                }
                                P(s, l, u);
                            }),
                            f &&
                                r &&
                                n.add(2, function () {
                                    if (!i(s)) {
                                        d('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!c()) {
                                        d('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    r();
                                });
                    }
                    function c() {
                        return !!i(s).container;
                    }
                    function u() {
                        function e() {
                            return void 0 === i(s).lastNotifiedWidth;
                        }
                        d('notifyListenersIfNeeded invoked');
                        var t = i(s);
                        return e() && t.lastWidth === t.startSize.width && t.lastHeight === t.startSize.height
                            ? d('Not notifying: Size is the same as the start size, and there has been no notification yet.')
                            : t.lastWidth === t.lastNotifiedWidth && t.lastHeight === t.lastNotifiedHeight
                              ? d('Not notifying: Size already notified')
                              : void (d('Current size not notified, notifying...'),
                                (t.lastNotifiedWidth = t.lastWidth),
                                (t.lastNotifiedHeight = t.lastHeight),
                                r(i(s).listeners, function (e) {
                                    e(s);
                                }));
                    }
                    function f() {
                        if ((d('startanimation triggered.'), h(s))) {
                            d('Ignoring since element is still unrendered...');
                            return;
                        }
                        d('Element rendered.');
                        var e = m(s),
                            t = g(s);
                        (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (d('Scrollbars out of sync. Updating detector elements...'), l(u));
                    }
                    function _() {
                        if ((d('Scroll detected.'), h(s))) {
                            d('Scroll event fired while unrendered. Ignoring...');
                            return;
                        }
                        l(u);
                    }
                    if ((d('registerListenersAndPositionElements invoked.'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    (i(s).onRendered = f), (i(s).onExpand = _), (i(s).onShrink = _);
                    var p = i(s).style;
                    a(s, p.width, p.height);
                }
                function x() {
                    if ((d('finalizeDomMutation invoked.'), !i(s))) {
                        d('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = i(s).style;
                    O(s, e.width, e.height), P(s, e.width, e.height);
                }
                function M() {
                    c(s);
                }
                function k() {
                    d('Installing...'), v(), b(), n.add(0, y), n.add(1, D), n.add(2, L), n.add(3, x), n.add(4, M);
                }
                c || ((c = s), (s = e), (e = null)),
                    (e = e || {}),
                    d('Making detectable...'),
                    f(s)
                        ? (d('Element is detached'),
                          w(),
                          d('Waiting until element is attached...'),
                          (i(s).onRendered = function () {
                              d('Element is now attached'), k();
                          }))
                        : k();
            },
            addListener: function (e, t) {
                if (!i(e).listeners.push) throw Error('Cannot add listener to an element that is not detectable.');
                i(e).listeners.push(t);
            },
            uninstall: function (e) {
                var t = i(e);
                t && (t.onExpandScroll && h(m(e), 'scroll', t.onExpandScroll), t.onShrinkScroll && h(g(e), 'scroll', t.onShrinkScroll), t.onAnimationStart && h(t.container, 'animationstart', t.onAnimationStart), t.container && e.removeChild(t.container));
            },
            initDocument: c
        }
    );
};
