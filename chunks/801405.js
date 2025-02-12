n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(570140),
    s = n(475179),
    o = n(367907),
    c = n(358221),
    d = n(788983),
    u = n(268353),
    h = n(944486),
    p = n(626135),
    m = n(585483),
    f = n(358085),
    g = n(228488),
    _ = n(981631),
    C = n(197623);
let x = () => {
    r.Z.wait(() => d.xv(_.KJ3.CHANNEL_CALL_POPOUT));
};
function v(e) {
    let { channel: t, appContext: n, popoutOpen: r, popoutWindow: d, currentWindow: v } = e,
        E = n === _.IlC.POPOUT,
        I = l.useRef(null),
        { currentLayout: b, mode: Z } = (0, a.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    i = n === _.IlC.POPOUT;
                i && (e = _.WtW.VIDEO);
                let l = e === _.WtW.VIDEO ? c.Z.getLayout(t.id, n) : _.AEg.MINIMUM;
                return (
                    i && l !== _.AEg.FULL_SCREEN && (l = _.AEg.NO_CHAT),
                    {
                        currentLayout: l,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        N = (0, a.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        I.current = Z;
    });
    let T = l.useRef(b),
        { currentDocument: S, rootNode: j } = l.useMemo(() => {
            let e = null != d && E ? d.document : document,
                t = v.document.getElementById('app-mount');
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t
            };
        }, [d, E, v]),
        y = r && !E,
        A = Z === _.WtW.VIDEO && N && !y,
        P = l.useCallback(
            (e, i) => {
                i !== e && (s.Z.updateLayout(t.id, i, n), i === _.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(_.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        R = l.useCallback(
            (e) => {
                null != j &&
                    e === _.AEg.FULL_SCREEN &&
                    (P(e, T.current),
                    (0, g.Pr)((e) => {
                        T.current = e;
                    }, S));
            },
            [S, P, j]
        ),
        M = l.useCallback(
            (e) => () => {
                null != j && (e !== _.AEg.FULL_SCREEN ? ((T.current = e), P(e, _.AEg.FULL_SCREEN), (0, g.Dj)(j)) : R(e));
            },
            [P, R, j]
        );
    l.useEffect(() => {
        let e = () => {
            null == j || (0, g.rB)(j, S) || b !== _.AEg.FULL_SCREEN || M(b)();
        };
        return (
            S.addEventListener(g.NO, e),
            () => {
                S.removeEventListener(g.NO, e);
            }
        );
    }, [S, b, M, j]);
    let L = {
            channel: t,
            maybeLeaveFullScreen: R
        },
        k = l.useRef(L);
    return (l.useEffect(() => {
        k.current = L;
    }),
    l.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            p.default.track(_.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: E ? 'popout' : b,
                ...(0, o.AB)(e.id)
            }),
            () => {
                (E && (0, f.isMac)()) || t(b);
            }
        );
    }, [b, E]),
    l.useEffect(() => {
        null != j && I.current === _.WtW.VIDEO && Z === _.WtW.VOICE && (0, g.Pr)(j, S);
    }, [S, Z, I, j]),
    l.useEffect(() => {
        !N && E && x();
    }, [N, E]),
    A)
        ? (0, i.jsx)(u.Z, {
              themeable: !1,
              node: j,
              guestWindow: d,
              className: C.rightTrayIcon,
              onClick: M(b)
          })
        : null;
}
