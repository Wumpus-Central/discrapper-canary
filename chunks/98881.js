r.d(n, {
    G: function () {
        return H;
    }
});
var i = r(288377),
    a = r(138073),
    o = r(665898),
    s = r(936031),
    l = r(698649),
    u = r(614529),
    c = r(836098),
    d = r(454516),
    f = r(394711),
    p = r(177679),
    h = r(612617),
    _ = r(186207),
    m = r(142197),
    g = r(55231),
    E = r(265839),
    v = r(175486),
    y = r(629053),
    b = r(890521),
    I = r(891873),
    T = r(695848),
    S = r(261978),
    A = r(917322),
    C = r(108901),
    N = r(591840),
    R = r(818727),
    O = r(437223),
    D = r(516544),
    x = r(193014),
    L = r(30728),
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
        { value: r, textValue: i, minValue: a, maxValue: o, isDisabled: s, isReadOnly: l, isRequired: u, onIncrement: c, onIncrementPage: d, onDecrement: f, onDecrementPage: p, onDecrementToMin: h, onIncrementToMax: _ } = e,
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
                        if (p) {
                            e.preventDefault(), p();
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
                        _ && (e.preventDefault(), _());
                }
        },
        v = (0, G.useRef)(!1),
        y = () => {
            v.current = !0;
        },
        b = () => {
            v.current = !1;
        };
    (i = '' === i ? m.format('Empty') : (i || `${r}`).replace('-', '\u2212')),
        (0, G.useEffect)(() => {
            v.current && ((0, B.gb)('assertive'), (0, B.xQ)(i, 'assertive'));
        }, [i]);
    let I = (0, Z.iW)((e) => {
            g(),
                c(),
                (n.current = window.setTimeout(() => {
                    (isNaN(o) || isNaN(r) || r < o) && I(60);
                }, e));
        }),
        T = (0, Z.iW)((e) => {
            g(),
                f(),
                (n.current = window.setTimeout(() => {
                    (isNaN(a) || isNaN(r) || r > a) && T(60);
                }, e));
        }),
        S = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: A, removeAllGlobalListeners: C } = (0, Z.xi)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': isNaN(r) ? null : r,
            'aria-valuetext': i,
            'aria-valuemin': a,
            'aria-valuemax': o,
            'aria-disabled': s || null,
            'aria-readonly': l || null,
            'aria-required': u || null,
            onKeyDown: E,
            onFocus: y,
            onBlur: b
        },
        incrementButtonProps: {
            onPressStart: () => {
                I(400), A(window, 'contextmenu', S);
            },
            onPressEnd: () => {
                g(), C();
            },
            onFocus: y,
            onBlur: b
        },
        decrementButtonProps: {
            onPressStart: () => {
                T(400), A(window, 'contextmenu', S);
            },
            onPressEnd: () => {
                g(), C();
            },
            onFocus: y,
            onBlur: b
        }
    };
}
j = {
    'ar-AE': i.Z,
    'bg-BG': a.Z,
    'cs-CZ': o.Z,
    'da-DK': s.Z,
    'de-DE': l.Z,
    'el-GR': u.Z,
    'en-US': c.Z,
    'es-ES': d.Z,
    'et-EE': f.Z,
    'fi-FI': p.Z,
    'fr-FR': h.Z,
    'he-IL': _.Z,
    'hr-HR': m.Z,
    'hu-HU': g.Z,
    'it-IT': E.Z,
    'ja-JP': v.Z,
    'ko-KR': y.Z,
    'lt-LT': b.Z,
    'lv-LV': I.Z,
    'nb-NO': T.Z,
    'nl-NL': S.Z,
    'pl-PL': A.Z,
    'pt-BR': C.Z,
    'pt-PT': N.Z,
    'ro-RO': R.Z,
    'ru-RU': O.Z,
    'sk-SK': D.Z,
    'sl-SI': x.Z,
    'sr-SP': L.Z,
    'sv-SE': w.Z,
    'tr-TR': P.Z,
    'uk-UA': M.Z,
    'zh-CN': k.Z,
    'zh-TW': U.Z
};
