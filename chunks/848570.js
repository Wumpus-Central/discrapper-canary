"use strict";
n.d(t, { A: () => v });
var r = n(64700),
    i = n(143236),
    s = n(719442),
    a = n(264322),
    o = n(861382),
    l = n(267102),
    u = n(253932),
    c = n(408018),
    d = n(870748),
    _ = n(414940),
    f = n(407315),
    p = n(119707),
    h = n(913728),
    E = n(113001),
    m = n(2368),
    g = n(999978);
n(665611);
var A = n(552046),
    I = n(270265),
    T = n(236576),
    S = n(350971),
    y = n(18722),
    N = n(551483);
function v(e) {
    let t = r.useContext(l.Ay),
        n = u.SI.useSetting(),
        [v] = r.useState(() => {
            let r = (0, s.ie)();
            return (
                (r.children = (0, c.x7)("")),
                (r.selection = { anchor: N.K, focus: N.K }),
                (function (e) {
                    let {
                            editor: t,
                            chatInputType: n,
                            channel: r,
                            canUseCommands: s,
                            canOnlyUseTextCommands: a,
                            windowContext: o,
                            previewMarkdown: l,
                            forTests: u,
                            onChangeStart: c,
                            onChangeEnd: N,
                            updateState: v,
                        } = e,
                        C = t,
                        { onChange: O } = C;
                    (C.chatInputType = n),
                        (C.windowContext = o),
                        (C.previewMarkdown = l),
                        (C.composition = null),
                        (C.events = new i.EventEmitter()),
                        (C.isMac = "MacIntel" === navigator.platform),
                        (C.onChange = () => {
                            C.events.emit("onChange"), O();
                        }),
                        (C = (0, I.o)(C, !0 === u)),
                        (C = (0, A.A)(C)),
                        (C = (0, g.A)(C)),
                        n.commands?.enabled && (C = (0, d.A)(C, r, !0 === s, !0 === a)),
                        (C = (0, m.Ay)(C, r.guild_id, r.id)),
                        n.markdown?.disableBlockQuotes || (C = (0, _.A)(C)),
                        n.markdown?.disableCodeBlocks || (C = (0, f.Ay)(C)),
                        u && (C = (0, S.A)(C)),
                        (C = (0, E.A)(C)),
                        (C = (0, p.A)(C)),
                        (C = (0, T.A)(C)),
                        (C = (0, y.A)(C, c, N)),
                        (C = (0, h.A)(C, (e) => {
                            let { newValue: t, newSelection: n } = e;
                            return v(C, "undo", { value: t, selection: n });
                        }));
                })({ ...e, editor: r, windowContext: t, previewMarkdown: n }),
                r
            );
        });
    return (
        r.useEffect(() => {
            let e = () => v.onChange();
            return (
                o.A.addChangeListener(e),
                a.Ay.addChangeListener(e),
                () => {
                    o.A.removeChangeListener(e), a.Ay.removeChangeListener(e);
                }
            );
        }, [v]),
        r.useEffect(() => {
            v.previewMarkdown !== n && ((v.previewMarkdown = n), v.onChange());
        }, [v, n]),
        v
    );
}
