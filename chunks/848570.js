"use strict";
n.d(t, { A: () => S });
var i = n(64700),
    l = n(143236),
    s = n(719442),
    r = n(264322),
    a = n(861382),
    o = n(267102),
    c = n(253932),
    u = n(408018),
    d = n(870748),
    h = n(414940),
    m = n(407315),
    p = n(119707),
    f = n(913728),
    g = n(113001),
    _ = n(2368),
    x = n(999978);
n(665611);
var A = n(552046),
    C = n(270265),
    E = n(236576),
    I = n(350971),
    v = n(18722),
    y = n(551483);
function S(e) {
    let t = i.useContext(o.Ay),
        n = c.SI.useSetting(),
        [S] = i.useState(() => {
            let i = (0, s.ie)();
            return (
                (i.children = (0, u.x7)("")),
                (i.selection = { anchor: y.K, focus: y.K }),
                (function (e) {
                    let {
                            editor: t,
                            chatInputType: n,
                            channel: i,
                            canUseCommands: s,
                            canOnlyUseTextCommands: r,
                            windowContext: a,
                            previewMarkdown: o,
                            forTests: c,
                            onChangeStart: u,
                            onChangeEnd: y,
                            updateState: S,
                        } = e,
                        b = t,
                        { onChange: N } = b;
                    (b.chatInputType = n),
                        (b.windowContext = a),
                        (b.previewMarkdown = o),
                        (b.composition = null),
                        (b.events = new l.EventEmitter()),
                        (b.isMac = "MacIntel" === navigator.platform),
                        (b.onChange = () => {
                            b.events.emit("onChange"), N();
                        }),
                        (b = (0, C.o)(b, !0 === c)),
                        (b = (0, A.A)(b)),
                        (b = (0, x.A)(b)),
                        n.commands?.enabled && (b = (0, d.A)(b, i, !0 === s, !0 === r)),
                        (b = (0, _.Ay)(b, i.guild_id, i.id)),
                        n.markdown?.disableBlockQuotes || (b = (0, h.A)(b)),
                        n.markdown?.disableCodeBlocks || (b = (0, m.Ay)(b)),
                        c && (b = (0, I.A)(b)),
                        (b = (0, g.A)(b)),
                        (b = (0, p.A)(b)),
                        (b = (0, E.A)(b)),
                        (b = (0, v.A)(b, u, y)),
                        (b = (0, f.A)(b, (e) => {
                            let { newValue: t, newSelection: n } = e;
                            return S(b, "undo", { value: t, selection: n });
                        }));
                })({ ...e, editor: i, windowContext: t, previewMarkdown: n }),
                i
            );
        });
    return (
        i.useEffect(() => {
            let e = () => S.onChange();
            return (
                a.A.addChangeListener(e),
                r.Ay.addChangeListener(e),
                () => {
                    a.A.removeChangeListener(e), r.Ay.removeChangeListener(e);
                }
            );
        }, [S]),
        i.useEffect(() => {
            S.previewMarkdown !== n && ((S.previewMarkdown = n), S.onChange());
        }, [S, n]),
        S
    );
}
