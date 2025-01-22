var i = r(201694).forEach;
e.exports = function (e) {
    var n = (e = e || {}).reporter,
        r = e.batchProcessor,
        a = e.stateHandler.getState;
    e.stateHandler.hasState;
    var o = e.idHandler;
    if (!r) throw Error('Missing required dependency: batchProcessor');
    if (!n) throw Error('Missing required dependency: reporter.');
    var s = f(),
        l = 'erd_scroll_detection_scrollbar_style',
        u = 'erd_scroll_detection_container';
    function c(e) {
        p(e, l, u);
    }
    function d(n) {
        var r = e.important ? ' !important; ' : '; ';
        return (n.join(r) + r).trim();
    }
    function f() {
        var e = 500,
            n = 500,
            r = document.createElement('div');
        r.style.cssText = d(['position: absolute', 'width: ' + 2 * e + 'px', 'height: ' + 2 * n + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0']);
        var i = document.createElement('div');
        (i.style.cssText = d(['position: absolute', 'width: ' + e + 'px', 'height: ' + n + 'px', 'overflow: scroll', 'visibility: none', 'top: ' + -(3 * e) + 'px', 'left: ' + -(3 * n) + 'px', 'visibility: hidden', 'margin: 0', 'padding: 0'])), i.appendChild(r), document.body.insertBefore(i, document.body.firstChild);
        var a = e - i.clientWidth,
            o = n - i.clientHeight;
        return (
            document.body.removeChild(i),
            {
                width: a,
                height: o
            }
        );
    }
    function p(e, n, r) {
        function i(r, i) {
            i =
                i ||
                function (n) {
                    e.head.appendChild(n);
                };
            var a = e.createElement('style');
            return (a.innerHTML = r), (a.id = n), i(a), a;
        }
        if (!e.getElementById(n)) {
            var a = r + '_animation',
                o = r + '_animation_active',
                s = '/* Created by the element-resize-detector library. */\n';
            i((s += '.' + r + ' > div::-webkit-scrollbar { ' + d(['display: none']) + ' }\n\n' + ('.' + o + ' { ' + d(['-webkit-animation-duration: 0.1s', 'animation-duration: 0.1s', '-webkit-animation-name: ' + a, 'animation-name: ' + a]) + ' }\n') + ('@-webkit-keyframes ' + a + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n') + ('@keyframes ' + a + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }')));
        }
    }
    function h(e) {
        e.className += ' ' + u + '_animation_active';
    }
    function _(e, r, i) {
        if (e.addEventListener) e.addEventListener(r, i);
        else {
            if (!e.attachEvent) return n.error("[scroll] Don't know how to add event listeners.");
            e.attachEvent('on' + r, i);
        }
    }
    function m(e, r, i) {
        if (e.removeEventListener) e.removeEventListener(r, i);
        else {
            if (!e.detachEvent) return n.error("[scroll] Don't know how to remove event listeners.");
            e.detachEvent('on' + r, i);
        }
    }
    function g(e) {
        return a(e).container.childNodes[0].childNodes[0].childNodes[0];
    }
    function E(e) {
        return a(e).container.childNodes[0].childNodes[0].childNodes[1];
    }
    return (
        c(window.document),
        {
            makeDetectable: function e(e, l, c) {
                function f() {
                    if (e.debug) {
                        var r = Array.prototype.slice.call(arguments);
                        if ((r.unshift(o.get(l), 'Scroll: '), n.log.apply)) n.log.apply(null, r);
                        else for (var i = 0; i < r.length; i++) n.log(r[i]);
                    }
                }
                function p(e) {
                    return (
                        !(function e(e) {
                            var n = e.getRootNode && e.getRootNode().contains(e);
                            return e === e.ownerDocument.body || e.ownerDocument.body.contains(e) || n;
                        })(e) ||
                        null === window.getComputedStyle(e) ||
                        !1
                    );
                }
                function m(e) {
                    var n = a(e).container.childNodes[0],
                        r = window.getComputedStyle(n);
                    return !r.width || -1 === r.width.indexOf('px');
                }
                function v() {
                    var e = window.getComputedStyle(l),
                        n = {};
                    return (n.position = e.position), (n.width = l.offsetWidth), (n.height = l.offsetHeight), (n.top = e.top), (n.right = e.right), (n.bottom = e.bottom), (n.left = e.left), (n.widthCSS = e.width), (n.heightCSS = e.height), n;
                }
                function y() {
                    var e = v();
                    (a(l).startSize = {
                        width: e.width,
                        height: e.height
                    }),
                        f('Element start size', a(l).startSize);
                }
                function b() {
                    a(l).listeners = [];
                }
                function I() {
                    if ((f('storeStyle invoked.'), !a(l))) {
                        f('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = v();
                    a(l).style = e;
                }
                function T(e, n, r) {
                    (a(e).lastWidth = n), (a(e).lastHeight = r);
                }
                function S(e) {
                    return g(e).childNodes[0];
                }
                function A() {
                    return 2 * s.width + 1;
                }
                function C() {
                    return 2 * s.height + 1;
                }
                function N(e) {
                    return e + 10 + A();
                }
                function R(e) {
                    return e + 10 + C();
                }
                function O(e) {
                    return 2 * e + A();
                }
                function D(e) {
                    return 2 * e + C();
                }
                function L(e, n, r) {
                    var i = g(e),
                        a = E(e),
                        o = N(n),
                        s = R(r),
                        l = O(n),
                        u = D(r);
                    (i.scrollLeft = o), (i.scrollTop = s), (a.scrollLeft = l), (a.scrollTop = u);
                }
                function x() {
                    var e = a(l).container;
                    if (!e) {
                        ((e = document.createElement('div')).className = u), (e.style.cssText = d(['visibility: hidden', 'display: inline', 'width: 0px', 'height: 0px', 'z-index: -1', 'overflow: hidden', 'margin: 0', 'padding: 0'])), (a(l).container = e), h(e), l.appendChild(e);
                        var n = function () {
                            a(l).onRendered && a(l).onRendered();
                        };
                        _(e, 'animationstart', n), (a(l).onAnimationStart = n);
                    }
                    return e;
                }
                function w() {
                    function r() {
                        var r = a(l).style;
                        if ('static' === r.position) {
                            l.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var i = function (e, n, r, i) {
                                function a(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var o = r[i];
                                'auto' !== o && '0' !== a(o) && (e.warn('An element that is positioned static has style.' + i + '=' + o + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + i + ' will be set to 0. Element: ', n), (n.style[i] = 0));
                            };
                            i(n, l, r, 'top'), i(n, l, r, 'right'), i(n, l, r, 'bottom'), i(n, l, r, 'left');
                        }
                    }
                    function i(e, n, r, i) {
                        return ['left: ' + (e = e ? e + 'px' : '0'), 'top: ' + (n = n ? n + 'px' : '0'), 'right: ' + (i = i ? i + 'px' : '0'), 'bottom: ' + (r = r ? r + 'px' : '0')];
                    }
                    if ((f('Injecting elements'), !a(l))) {
                        f('Aborting because element has been uninstalled');
                        return;
                    }
                    r();
                    var o = a(l).container;
                    !o && (o = x());
                    var c = s.width,
                        p = s.height,
                        h = d(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%', 'left: 0px', 'top: 0px']),
                        m = d(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden'].concat(i(-(1 + c), -(1 + p), -p, -c))),
                        g = d(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        E = d(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
                        v = d(['position: absolute', 'left: 0', 'top: 0']),
                        y = d(['position: absolute', 'width: 200%', 'height: 200%']),
                        b = document.createElement('div'),
                        I = document.createElement('div'),
                        T = document.createElement('div'),
                        S = document.createElement('div'),
                        A = document.createElement('div'),
                        C = document.createElement('div');
                    function N() {
                        var e = a(l);
                        e && e.onExpand ? e.onExpand() : f('Aborting expand scroll handler: element has been uninstalled');
                    }
                    function R() {
                        var e = a(l);
                        e && e.onShrink ? e.onShrink() : f('Aborting shrink scroll handler: element has been uninstalled');
                    }
                    (b.dir = 'ltr'), (b.style.cssText = h), (b.className = u), (I.className = u), (I.style.cssText = m), (T.style.cssText = g), (S.style.cssText = v), (A.style.cssText = E), (C.style.cssText = y), T.appendChild(S), A.appendChild(C), I.appendChild(T), I.appendChild(A), b.appendChild(I), o.appendChild(b), _(T, 'scroll', N), _(A, 'scroll', R), (a(l).onExpandScroll = N), (a(l).onShrinkScroll = R);
                }
                function P() {
                    function s(n, r, i) {
                        var a = S(n),
                            o = N(r),
                            s = R(i);
                        a.style.setProperty('width', o + 'px', e.important ? 'important' : ''), a.style.setProperty('height', s + 'px', e.important ? 'important' : '');
                    }
                    function u(i) {
                        var u = l.offsetWidth,
                            d = l.offsetHeight,
                            p = u !== a(l).lastWidth || d !== a(l).lastHeight;
                        f('Storing current size', u, d),
                            T(l, u, d),
                            r.add(0, function () {
                                if (!!p) {
                                    if (!a(l)) {
                                        f('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!c()) {
                                        f('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    if (e.debug) {
                                        var r = l.offsetWidth,
                                            i = l.offsetHeight;
                                        (r !== u || i !== d) && n.warn(o.get(l), 'Scroll: Size changed before updating detector elements.');
                                    }
                                    s(l, u, d);
                                }
                            }),
                            r.add(1, function () {
                                if (!a(l)) {
                                    f('Aborting because element has been uninstalled');
                                    return;
                                }
                                if (!c()) {
                                    f('Aborting because element container has not been initialized');
                                    return;
                                }
                                L(l, u, d);
                            }),
                            p &&
                                i &&
                                r.add(2, function () {
                                    if (!a(l)) {
                                        f('Aborting because element has been uninstalled');
                                        return;
                                    }
                                    if (!c()) {
                                        f('Aborting because element container has not been initialized');
                                        return;
                                    }
                                    i();
                                });
                    }
                    function c() {
                        return !!a(l).container;
                    }
                    function d() {
                        function e() {
                            return void 0 === a(l).lastNotifiedWidth;
                        }
                        f('notifyListenersIfNeeded invoked');
                        var n = a(l);
                        return e() && n.lastWidth === n.startSize.width && n.lastHeight === n.startSize.height
                            ? f('Not notifying: Size is the same as the start size, and there has been no notification yet.')
                            : n.lastWidth === n.lastNotifiedWidth && n.lastHeight === n.lastNotifiedHeight
                              ? f('Not notifying: Size already notified')
                              : void (f('Current size not notified, notifying...'),
                                (n.lastNotifiedWidth = n.lastWidth),
                                (n.lastNotifiedHeight = n.lastHeight),
                                i(a(l).listeners, function (e) {
                                    e(l);
                                }));
                    }
                    function p() {
                        if ((f('startanimation triggered.'), m(l))) {
                            f('Ignoring since element is still unrendered...');
                            return;
                        }
                        f('Element rendered.');
                        var e = g(l),
                            n = E(l);
                        (0 === e.scrollLeft || 0 === e.scrollTop || 0 === n.scrollLeft || 0 === n.scrollTop) && (f('Scrollbars out of sync. Updating detector elements...'), u(d));
                    }
                    function h() {
                        if ((f('Scroll detected.'), m(l))) {
                            f('Scroll event fired while unrendered. Ignoring...');
                            return;
                        }
                        u(d);
                    }
                    if ((f('registerListenersAndPositionElements invoked.'), !a(l))) {
                        f('Aborting because element has been uninstalled');
                        return;
                    }
                    (a(l).onRendered = p), (a(l).onExpand = h), (a(l).onShrink = h);
                    var _ = a(l).style;
                    s(l, _.width, _.height);
                }
                function M() {
                    if ((f('finalizeDomMutation invoked.'), !a(l))) {
                        f('Aborting because element has been uninstalled');
                        return;
                    }
                    var e = a(l).style;
                    T(l, e.width, e.height), L(l, e.width, e.height);
                }
                function k() {
                    c(l);
                }
                function U() {
                    f('Installing...'), b(), y(), r.add(0, I), r.add(1, w), r.add(2, P), r.add(3, M), r.add(4, k);
                }
                !c && ((c = l), (l = e), (e = null)),
                    (e = e || {}),
                    f('Making detectable...'),
                    p(l)
                        ? (f('Element is detached'),
                          x(),
                          f('Waiting until element is attached...'),
                          (a(l).onRendered = function () {
                              f('Element is now attached'), U();
                          }))
                        : U();
            },
            addListener: function e(e, n) {
                if (!a(e).listeners.push) throw Error('Cannot add listener to an element that is not detectable.');
                a(e).listeners.push(n);
            },
            uninstall: function e(e) {
                var n = a(e);
                if (!!n) n.onExpandScroll && m(g(e), 'scroll', n.onExpandScroll), n.onShrinkScroll && m(E(e), 'scroll', n.onShrinkScroll), n.onAnimationStart && m(n.container, 'animationstart', n.onAnimationStart), n.container && e.removeChild(n.container);
            },
            initDocument: c
        }
    );
};
