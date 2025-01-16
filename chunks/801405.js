n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(570140),
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
    C = n(981631),
    x = n(322455);
let v = () => {
    a.Z.wait(() => d.xv(C.KJ3.CHANNEL_CALL_POPOUT));
};
function _(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: d, currentWindow: _ } = e,
        I = n === C.IlC.POPOUT,
        E = l.useRef(null),
        { currentLayout: b, mode: Z } = (0, r.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    i = n === C.IlC.POPOUT;
                i && (e = C.WtW.VIDEO);
                let l = e === C.WtW.VIDEO ? c.Z.getLayout(t.id, n) : C.AEg.MINIMUM;
                return (
                    i && l !== C.AEg.FULL_SCREEN && (l = C.AEg.NO_CHAT),
                    {
                        currentLayout: l,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        N = (0, r.e7)([h.Z], () => h.Z.getVoiceChannelId() === t.id, [t.id]);
    l.useEffect(() => {
        E.current = Z;
    });
    let S = l.useRef(b),
        { currentDocument: T, rootNode: j } = l.useMemo(() => {
            let e = null != d && I ? d.document : document,
                t = _.document.getElementById('app-mount');
            return {
                currentWindow: _,
                currentDocument: e,
                rootNode: t
            };
        }, [d, I, _]),
        A = a && !I,
        y = Z === C.WtW.VIDEO && N && !A,
        P = l.useCallback(
            (e, i) => {
                i !== e && (s.Z.updateLayout(t.id, i, n), i === C.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(C.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        M = l.useCallback(
            (e) => {
                if (null != j)
                    e === C.AEg.FULL_SCREEN &&
                        (P(e, S.current),
                        (0, g.Pr)((e) => {
                            S.current = e;
                        }, T));
            },
            [T, P, j]
        ),
        R = l.useCallback(
            (e) => () => {
                null != j && (e !== C.AEg.FULL_SCREEN ? ((S.current = e), P(e, C.AEg.FULL_SCREEN), (0, g.Dj)(j)) : M(e));
            },
            [P, M, j]
        );
    l.useEffect(() => {
        let e = () => {
            null != j && !(0, g.rB)(j, T) && b === C.AEg.FULL_SCREEN && R(b)();
        };
        return (
            T.addEventListener(g.NO, e),
            () => {
                T.removeEventListener(g.NO, e);
            }
        );
    }, [T, b, R, j]);
    let L = {
            channel: t,
            maybeLeaveFullScreen: M
        },
        k = l.useRef(L);
    return (l.useEffect(() => {
        k.current = L;
    }),
    l.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            p.default.track(C.rMx.VIDEO_LAYOUT_TOGGLED, {
                video_layout: I ? 'popout' : b,
                ...(0, o.AB)(e.id)
            }),
            () => {
                !(I && (0, f.isMac)()) && t(b);
            }
        );
    }, [b, I]),
    l.useEffect(() => {
        null != j && E.current === C.WtW.VIDEO && Z === C.WtW.VOICE && (0, g.Pr)(j, T);
    }, [T, Z, E, j]),
    l.useEffect(() => {
        !N && I && v();
    }, [N, I]),
    y)
        ? (0, i.jsx)(u.Z, {
              themeable: !1,
              node: j,
              guestWindow: d,
              className: x.rightTrayIcon,
              onClick: R(b)
          })
        : null;
}
