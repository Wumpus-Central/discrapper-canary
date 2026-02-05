"use strict";
n.d(t, { A: () => C });
var r = n(64700),
    i = n(143236),
    a = n(719442),
    s = n(264322),
    o = n(861382),
    l = n(267102),
    u = n(253932),
    c = n(408018),
    d = n(870748),
    _ = n(414940),
    f = n(407315),
    p = n(119707),
    h = n(913728),
    m = n(113001),
    g = n(2368),
    E = n(999978);
n(665611);
var A = n(552046),
    I = n(270265),
    T = n(236576),
    y = n(350971),
    S = n(18722),
    v = n(551483);
function C(e) {
    let t = r.useContext(l.Ay),
        n = u.SI.useSetting(),
        [i] = r.useState(() => {
            let r = (0, a.ie)();
            return (
                (r.children = (0, c.x7)("")),
                (r.selection = { anchor: v.K, focus: v.K }),
                b({ ...e, editor: r, windowContext: t, previewMarkdown: n }),
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
function b(e) {
    let {
            editor: t,
            chatInputType: n,
            channel: r,
            canUseCommands: a,
            canOnlyUseTextCommands: s,
            windowContext: o,
            previewMarkdown: l,
            forTests: u,
            onChangeStart: c,
            onChangeEnd: v,
            updateState: C,
        } = e,
        b = t,
        { onChange: N } = b;
    (b.chatInputType = n),
        (b.windowContext = o),
        (b.previewMarkdown = l),
        (b.composition = null),
        (b.events = new i.EventEmitter()),
        (b.isMac = "MacIntel" === navigator.platform),
        (b.onChange = () => {
            b.events.emit("onChange"), N();
        }),
        (b = (0, I.o)(b, !0 === u)),
        (b = (0, A.A)(b)),
        (b = (0, E.A)(b)),
        n.commands?.enabled && (b = (0, d.A)(b, r, !0 === a, !0 === s)),
        (b = (0, g.Ay)(b, r.guild_id, r.id)),
        n.markdown?.disableBlockQuotes || (b = (0, _.A)(b)),
        n.markdown?.disableCodeBlocks || (b = (0, f.Ay)(b)),
        u && (b = (0, y.A)(b)),
        (b = (0, m.A)(b)),
        (b = (0, p.A)(b)),
        (b = (0, T.A)(b)),
        (b = (0, S.A)(b, c, v)),
        (b = (0, h.A)(b, (e) => {
            let { newValue: t, newSelection: n } = e;
            return C(b, "undo", { value: t, selection: n });
        }));
}
