r.d(n, {
    G: function () {
        return H;
    }
});
var i = r(288377),
    a = r(138073),
    s = r(665898),
    o = r(936031),
    l = r(698649),
    u = r(614529),
    c = r(836098),
    d = r(454516),
    f = r(394711),
    _ = r(177679),
    h = r(612617),
    p = r(186207),
    m = r(142197),
    g = r(55231),
    E = r(265839),
    v = r(175486),
    I = r(629053),
    T = r(890521),
    b = r(891873),
    y = r(695848),
    S = r(261978),
    A = r(917322),
    N = r(108901),
    C = r(591840),
    R = r(818727),
    O = r(437223),
    D = r(516544),
    L = r(193014),
    x = r(30728),
    w = r(384762),
    P = r(290731),
    M = r(341348),
    k = r(882645),
    U = r(788654),
    B = r(770003),
    G = r(192379),
    Z = r(661763),
    F = r(649859);
function V(e) {
    return e && e.__esModule ? e.default : e;
}
var j = {};
function H(e) {
    let n = (0, G.useRef)(),
        { value: r, textValue: i, minValue: a, maxValue: s, isDisabled: o, isReadOnly: l, isRequired: u, onIncrement: c, onIncrementPage: d, onDecrement: f, onDecrementPage: _, onDecrementToMin: h, onIncrementToMax: p } = e,
        m = (0, F.qb)(V(j), '@react-aria/spinbutton'),
        g = () => clearTimeout(n.current);
    (0, G.useEffect)(() => () => g(), []);
    let E = (e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !l)
                switch (e.key) {
                    case 'PageUp':
                        if (d) {
                            e.preventDefault(), d();
                            break;
                        }
                    case 'ArrowUp':
                    case 'Up':
                        c && (e.preventDefault(), c());
                        break;
                    case 'PageDown':
                        if (_) {
                            e.preventDefault(), _();
                            break;
                        }
                    case 'ArrowDown':
                    case 'Down':
                        f && (e.preventDefault(), f());
                        break;
                    case 'Home':
                        h && (e.preventDefault(), h());
                        break;
                    case 'End':
                        p && (e.preventDefault(), p());
                }
        },
        v = (0, G.useRef)(!1),
        I = () => {
            v.current = !0;
        },
        T = () => {
            v.current = !1;
        };
    (i = '' === i ? m.format('Empty') : (i || `${r}`).replace('-', '\u2212')),
        (0, G.useEffect)(() => {
            v.current && ((0, B.gb)('assertive'), (0, B.xQ)(i, 'assertive'));
        }, [i]);
    let b = (0, Z.iW)((e) => {
            g(),
                c(),
                (n.current = window.setTimeout(() => {
                    (isNaN(s) || isNaN(r) || r < s) && b(60);
                }, e));
        }),
        y = (0, Z.iW)((e) => {
            g(),
                f(),
                (n.current = window.setTimeout(() => {
                    (isNaN(a) || isNaN(r) || r > a) && y(60);
                }, e));
        }),
        S = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: A, removeAllGlobalListeners: N } = (0, Z.xi)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': isNaN(r) ? null : r,
            'aria-valuetext': i,
            'aria-valuemin': a,
            'aria-valuemax': s,
            'aria-disabled': o || null,
            'aria-readonly': l || null,
            'aria-required': u || null,
            onKeyDown: E,
            onFocus: I,
            onBlur: T
        },
        incrementButtonProps: {
            onPressStart: () => {
                b(400), A(window, 'contextmenu', S);
            },
            onPressEnd: () => {
                g(), N();
            },
            onFocus: I,
            onBlur: T
        },
        decrementButtonProps: {
            onPressStart: () => {
                y(400), A(window, 'contextmenu', S);
            },
            onPressEnd: () => {
                g(), N();
            },
            onFocus: I,
            onBlur: T
        }
    };
}
j = {
    'ar-AE': i.Z,
    'bg-BG': a.Z,
    'cs-CZ': s.Z,
    'da-DK': o.Z,
    'de-DE': l.Z,
    'el-GR': u.Z,
    'en-US': c.Z,
    'es-ES': d.Z,
    'et-EE': f.Z,
    'fi-FI': _.Z,
    'fr-FR': h.Z,
    'he-IL': p.Z,
    'hr-HR': m.Z,
    'hu-HU': g.Z,
    'it-IT': E.Z,
    'ja-JP': v.Z,
    'ko-KR': I.Z,
    'lt-LT': T.Z,
    'lv-LV': b.Z,
    'nb-NO': y.Z,
    'nl-NL': S.Z,
    'pl-PL': A.Z,
    'pt-BR': N.Z,
    'pt-PT': C.Z,
    'ro-RO': R.Z,
    'ru-RU': O.Z,
    'sk-SK': D.Z,
    'sl-SI': L.Z,
    'sr-SP': x.Z,
    'sv-SE': w.Z,
    'tr-TR': P.Z,
    'uk-UA': M.Z,
    'zh-CN': k.Z,
    'zh-TW': U.Z
};
