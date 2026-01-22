n.d(t, {
    A: () => R,
}),
    n(896048);
var r = n(64700),
    i = n(143236),
    a = n(719442),
    s = n(264322),
    o = n(861382),
    l = n(267102),
    c = n(253932),
    u = n(408018),
    d = n(870748),
    f = n(414940),
    p = n(407315),
    _ = n(119707),
    h = n(913728),
    m = n(113001),
    g = n(2368),
    E = n(999978);
n(665611);
var b = n(552046),
    y = n(270265),
    O = n(236576),
    A = n(350971),
    v = n(18722),
    S = n(551483);

function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function R(e) {
    let t = r.useContext(l.Ay),
        n = c.SI.useSetting(),
        [i] = r.useState(() => {
            let r = (0, a.ie)();
            return (
                (r.children = (0, u.x7)("")),
                (r.selection = {
                    anchor: S.K,
                    focus: S.K,
                }),
                w(
                    N(T({}, e), {
                        editor: r,
                        windowContext: t,
                        previewMarkdown: n,
                    }),
                ),
                r
            );
        });
    return (
        r.useEffect(() => {
            let e = () => i.onChange();
            return (
                o.A.addChangeListener(e),
                s.Ay.addChangeListener(e),
                () => {
                    o.A.removeChangeListener(e), s.Ay.removeChangeListener(e);
                }
            );
        }, [i]),
        r.useEffect(() => {
            i.previewMarkdown !== n && ((i.previewMarkdown = n), i.onChange());
        }, [i, n]),
        i
    );
}

function w(e) {
    var t, n, r;
    let {
            editor: a,
            chatInputType: s,
            channel: o,
            canUseCommands: l,
            canOnlyUseTextCommands: c,
            windowContext: u,
            previewMarkdown: S,
            forTests: I,
            onChangeStart: T,
            onChangeEnd: C,
            updateState: N,
        } = e,
        R = a,
        { onChange: w } = R;
    (R.chatInputType = s),
        (R.windowContext = u),
        (R.previewMarkdown = S),
        (R.composition = null),
        (R.events = new i.EventEmitter()),
        (R.isMac = "MacIntel" === navigator.platform),
        (R.onChange = () => {
            R.events.emit("onChange"), w();
        }),
        (R = (0, y.o)(R, !0 === I)),
        (R = (0, b.A)(R)),
        (R = (0, E.A)(R)),
        (null == (t = s.commands) ? void 0 : t.enabled) && (R = (0, d.A)(R, o, !0 === l, !0 === c)),
        (R = (0, g.Ay)(R, o.guild_id, o.id)),
        (null == (n = s.markdown) ? void 0 : n.disableBlockQuotes) || (R = (0, f.A)(R)),
        (null == (r = s.markdown) ? void 0 : r.disableCodeBlocks) || (R = (0, p.Ay)(R)),
        I && (R = (0, A.A)(R)),
        (R = (0, m.A)(R)),
        (R = (0, _.A)(R)),
        (R = (0, O.A)(R)),
        (R = (0, v.A)(R, T, C)),
        (R = (0, h.A)(R, (e) => {
            let { newValue: t, newSelection: n } = e;
            return N(R, "undo", {
                value: t,
                selection: n,
            });
        }));
}
