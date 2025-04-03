r.d(e, { L_: () => v });
var n = r(661763),
    i = r(192379);
r(410914),
    r(846135),
    new WeakMap(),
    (i.createContext({
        register: () => {}
    }).displayName = 'PressResponderContext'),
    Symbol('linkClicked');
class o {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(t, e) {
        (this.nativeEvent = e), (this.target = e.target), (this.currentTarget = e.currentTarget), (this.relatedTarget = e.relatedTarget), (this.bubbles = e.bubbles), (this.cancelable = e.cancelable), (this.defaultPrevented = e.defaultPrevented), (this.eventPhase = e.eventPhase), (this.isTrusted = e.isTrusted), (this.timeStamp = e.timeStamp), (this.type = t);
    }
}
let a = new Set(),
    u = !1,
    s = !1,
    c = !1;
function l(t, e) {
    for (let r of a) r(t, e);
}
function f(t) {
    (s = !0), t.metaKey || (!(0, n.V5)() && t.altKey) || t.ctrlKey || 'Control' === t.key || 'Shift' === t.key || 'Meta' === t.key || l('keyboard', t);
}
function p(t) {
    ('mousedown' === t.type || 'pointerdown' === t.type) && ((s = !0), l('pointer', t));
}
function h(t) {
    (0, n.Zj)(t) && (s = !0);
}
function d(t) {
    t.target !== window && t.target !== document && (s || c || l('virtual', t), (s = !1), (c = !1));
}
function g() {
    (s = !1), (c = !0);
}
function y() {
    if ('undefined' == typeof window || u) return;
    let t = HTMLElement.prototype.focus;
    (HTMLElement.prototype.focus = function () {
        (s = !0), t.apply(this, arguments);
    }),
        document.addEventListener('keydown', f, !0),
        document.addEventListener('keyup', f, !0),
        document.addEventListener('click', h, !0),
        window.addEventListener('focus', d, !0),
        window.addEventListener('blur', g, !1),
        'undefined' != typeof PointerEvent ? (document.addEventListener('pointerdown', p, !0), document.addEventListener('pointermove', p, !0), document.addEventListener('pointerup', p, !0)) : (document.addEventListener('mousedown', p, !0), document.addEventListener('mousemove', p, !0), document.addEventListener('mouseup', p, !0)),
        (u = !0);
}
function v(t) {
    let e,
        r,
        { isDisabled: a, onBlurWithin: u, onFocusWithin: s, onFocusWithinChange: c } = t,
        l = (0, i.useRef)({ isFocusWithin: !1 }),
        f = (0, i.useCallback)(
            (t) => {
                l.current.isFocusWithin && !t.currentTarget.contains(t.relatedTarget) && ((l.current.isFocusWithin = !1), u && u(t), c && c(!1));
            },
            [u, c, l]
        ),
        p =
            ((e = (0, i.useRef)({
                isFocused: !1,
                observer: null
            })),
            (0, n.bt)(() => {
                let t = e.current;
                return () => {
                    t.observer && (t.observer.disconnect(), (t.observer = null));
                };
            }, []),
            (r = (0, n.iW)((t) => {
                null == f || f(t);
            })),
            (0, i.useCallback)(
                (t) => {
                    if (t.target instanceof HTMLButtonElement || t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLSelectElement) {
                        e.current.isFocused = !0;
                        let n = t.target;
                        n.addEventListener(
                            'focusout',
                            (t) => {
                                (e.current.isFocused = !1), n.disabled && r(new o('blur', t)), e.current.observer && (e.current.observer.disconnect(), (e.current.observer = null));
                            },
                            { once: !0 }
                        ),
                            (e.current.observer = new MutationObserver(() => {
                                if (e.current.isFocused && n.disabled) {
                                    var t;
                                    null == (t = e.current.observer) || t.disconnect();
                                    let r = n === document.activeElement ? null : document.activeElement;
                                    n.dispatchEvent(new FocusEvent('blur', { relatedTarget: r })),
                                        n.dispatchEvent(
                                            new FocusEvent('focusout', {
                                                bubbles: !0,
                                                relatedTarget: r
                                            })
                                        );
                                }
                            })),
                            e.current.observer.observe(n, {
                                attributes: !0,
                                attributeFilter: ['disabled']
                            });
                    }
                },
                [r]
            )),
        h = (0, i.useCallback)(
            (t) => {
                l.current.isFocusWithin || document.activeElement !== t.target || (s && s(t), c && c(!0), (l.current.isFocusWithin = !0), p(t));
            },
            [s, c, p]
        );
    return a
        ? {
              focusWithinProps: {
                  onFocus: void 0,
                  onBlur: void 0
              }
          }
        : {
              focusWithinProps: {
                  onFocus: h,
                  onBlur: f
              }
          };
}
'undefined' != typeof document && ('loading' !== document.readyState ? y() : document.addEventListener('DOMContentLoaded', y));
